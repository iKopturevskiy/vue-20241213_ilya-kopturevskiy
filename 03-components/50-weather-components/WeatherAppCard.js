import { defineComponent } from 'vue'
import './WeatherApp.css'
import WeatherCardIfAlert from "./WeatherCardIfAlert.js";
import WeatherMainData from "./WeatherMainData.js";
import WeatherSecondaryData from "./WeatherSecondaryData.js";
import GeographicInfo from "./GeographicInfo.js";

export default defineComponent({
  name: 'WeatherAppCard',

  components: {
    WeatherCardIfAlert,
    WeatherMainData,
    WeatherSecondaryData,
    GeographicInfo,
  },

  props: {
    card: {
      type: Object,
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
      class="weather-card"
      :class="{ 'weather-card--night' : checkIfNight(card) }">

      <WeatherCardIfAlert v-if="card.alert">
        {{ card.alert.sender_name + ". " + card.alert.description }}
      </WeatherCardIfAlert>
      <GeographicInfo :card/>
      <WeatherMainData :card :icons/>
      <WeatherSecondaryData :card/>

    </li>`
})
