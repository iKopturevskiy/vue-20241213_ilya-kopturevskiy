import { defineComponent } from 'vue'
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'
import WeatherAppList from './WeatherAppList.js'

export default defineComponent({
  name: 'WeatherApp',

  components: {
    WeatherAppList,
  },

  setup () {
    return {
      weatherData: getWeatherData(),
      icons: WeatherConditionIcons,
    }
  },

  template: `
    <div>
      <h1 class="title">Погода в Средиземье</h1>

      <ul class="weather-list unstyled-list">
        <WeatherAppList
          :weatherData="weatherData"
          :icons="icons"/>
      </ul>
    </div>
  `,
})
