import { defineComponent, computed } from 'vue'


export default defineComponent({
  name: 'WeatherMainData',

  props: {
    card: {
      type: Object,
      required: true,
    },

    icons: {
      type: Object,
    }
  },

  setup(props) {
    const temperature = computed(() => Number(props.card.current.temp - 273.15).toFixed(1))
    return {
      temperature,
    }
  },

  template: `
    <div class="weather-conditions">
      <div  class="weather-conditions__icon" :title="card.current.weather.description">{{ icons[card.current.weather.id] }}</div>
      <div class="weather-conditions__temp">{{ temperature }} °C</div>
    </div>
  `
})
