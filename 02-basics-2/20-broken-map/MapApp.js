import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'MapApp',

  setup() {
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

    const pin = computed(() => {
      return {
        left: `${x.value}px`,
        top: `${y.value}px`
      }
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
