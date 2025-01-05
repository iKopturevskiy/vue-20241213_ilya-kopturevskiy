import { defineComponent } from 'vue'

export default defineComponent( {
  name: 'WeatherCardIfAlert',

  props: {
    card: {
      type: Object,
      required: true,
    }
  },

  template: `
  <div v-if="card.alert" class="weather-alert">
        <span class="weather-alert__icon">⚠️</span>
        <span class="weather-alert__description">{{ card.alert.sender_name + ". " + card.alert.description }}</span>
      </div>
`
})
