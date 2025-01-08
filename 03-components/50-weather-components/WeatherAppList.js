import { defineComponent } from 'vue'
import './WeatherApp.css'
import WeatherCardIfAlert from "./WeatherCardIfAlert.js";
import WeatherMainData from "./WeatherMainData.js";
import WeatherSecondaryData from "./WeatherSecondaryData.js";
import GeographicInfo from "./GeographicInfo.js";

export default defineComponent({
  name: 'WeatherAppList',

  components: {
    WeatherCardIfAlert,
    WeatherMainData,
    WeatherSecondaryData,
    GeographicInfo,
  },

  props: {
    weatherData: {
      type: Array,
      required: true,
    },

    icons: {
      type: Object,
    }
  },

  setup() {

    function checkIfNight(card) {
      return card.current.dt < card.current.sunrise || card.current.dt >= card.current.sunset;
    }

    return {
      checkIfNight,
    }
  },

  template: `
    <li
      v-for="card in weatherData"
      class="weather-card"
      :class="{ 'weather-card--night' : checkIfNight(card) }">

      <WeatherCardIfAlert :card="card"/>
      <GeographicInfo :card="card"/>
      <WeatherMainData :card="card" :icons="icons"/>
      <WeatherSecondaryData :card="card"/>

    </li>`
})
