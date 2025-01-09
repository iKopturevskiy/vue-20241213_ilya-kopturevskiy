import { defineComponent } from 'vue'

export default defineComponent( {
  name: 'WeatherCardIfAlert',

  props: {
    text: {
      type: String,
    }
  },

  template: `
    <div class="weather-alert">
      <span class="weather-alert__icon">⚠️</span>
      <span class="weather-alert__description">
        <slot>{{ text }}</slot>
      </span>
    </div>
`
})
