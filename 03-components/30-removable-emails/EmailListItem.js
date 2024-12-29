import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EmailListItem',

  props: {
    email: {
      type: String,
      required: true,
    },

    marked: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['update:email'],

  template: `
    <li :class="{ marked }">
      {{ email }}
      <button @click="$emit('update:email')" type="button" aria-label="Удалить">❌</button>
    </li>
  `,
})
