import { defineComponent, computed } from 'vue'
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'
import WeatherAppCard from './WeatherAppCard.js'
import WeatherMainData from "./WeatherMainData.js";

export default defineComponent({
  name: 'WeatherApp',

  components: {
    WeatherMainData,
    WeatherAppCard,
  },

  setup () {
    const icons = computed(() => WeatherConditionIcons);
    const weatherData = computed(() => getWeatherData())
    return {
      weatherData,
      icons,
    }
  },

  template: `
    <div>
      <h1 class="title">Погода в Средиземье</h1>

      <ul class="weather-list unstyled-list">
        <WeatherAppCard v-for="card in weatherData" :card :icons/>
      </ul>
    </div>
  `,
})
