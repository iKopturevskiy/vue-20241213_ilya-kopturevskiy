import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'WeatherSecondaryData',

  props: {
    card: {
      type: Object,
      required: true,
    }
  },

  setup (props) {
    const pressure = computed(() => Number(props.card.current.pressure * 0.75).toFixed(0))
    return {
      pressure,
    }
  },

  template: `
    <div class="weather-details">
      <div class="weather-details__item">
        <div class="weather-details__item-label">Давление, мм рт. ст.</div>
        <div class="weather-details__item-value">{{ pressure }}</div>
      </div>
      <div class="weather-details__item">
        <div class="weather-details__item-label">Влажность, %</div>
        <div class="weather-details__item-value">{{ card.current.humidity }}</div>
      </div>
      <div class="weather-details__item">
        <div class="weather-details__item-label">Облачность, %</div>
        <div class="weather-details__item-value">{{ card.current.clouds }}</div>
      </div>
      <div class="weather-details__item">
        <div class="weather-details__item-label">Ветер, м/с</div>
        <div class="weather-details__item-value">{{ card.current.wind_speed }}</div>
      </div>
    </div>`
})
