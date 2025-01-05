import { defineComponent } from 'vue'


export default defineComponent({
  name: 'GeographicInfo',

  props: {
    card: {
      type: Object,
      required: true,
    },
  },

  template: `
    <div>
      <h2 class="weather-card__name">
        {{ card.geographic_name }}
      </h2>
      <div class="weather-card__time">
        {{ card.current.dt }}
      </div>
    </div>
  `
})
