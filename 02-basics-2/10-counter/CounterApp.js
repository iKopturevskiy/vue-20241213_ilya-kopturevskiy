import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'CounterApp',

  setup() {
    const count = ref(0);

    return {
      count
    }
  },

  template: `
    <div class="counter">
      <button
        @click="count--"
        :disabled="count  === 0"
        class="button button--secondary"
        type="button"
        aria-label="Decrement"
      >➖</button>

      <span class="count" data-testid="count">{{ count }}</span>

      <button
        @click="count++"
        :disabled="count === 5"
        class="button button--secondary"
        type="button"
        aria-label="Increment"
      >➕</button>
    </div>
  `,
})
