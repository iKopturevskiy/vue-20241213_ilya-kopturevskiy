import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  name: 'MapApp',

  setup() {
    // Реактивные переменные для хранения координат метки
    const pin = ref({
      left: '0px',
      top: '0px'
    })
    const x = ref(0)
    const y = ref(0)

    /**
     * Обработчик клика по карте для установки координат метки
     * @param {MouseEvent} event
     */
    function handleClick(event) {
      x.value = event.offsetX
      y.value = event.offsetY
    }

    // Следим за X и Y для установки нового положения
    watch([pin, x, y], () => {
      // Находим метку и изменяем её положение
      pin.value.left = `${x.value}px`
      pin.value.top = `${y.value}px`
    })

    return {
      pin,
      handleClick,
    }
  },

  template: `
    <div class="map" @click="handleClick">
      <img class="map-image" src="./map.png" alt="Map" draggable="false" />
      <span class="pin" :style="pin">📍</span>
    </div>
  `,
})
