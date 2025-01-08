import { defineComponent } from 'vue'


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

  template: `
    <div class="weather-conditions">
      <div  class="weather-conditions__icon" :title="card.current.weather.description">{{ icons[card.current.weather.id] }}</div>
      <div class="weather-conditions__temp">{{ Number(card.current.temp - 273.15).toFixed(1) }} °C</div>
    </div>
  `
})
