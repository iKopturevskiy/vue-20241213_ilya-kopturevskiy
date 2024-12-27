import {defineComponent, onMounted, onUnmounted, ref} from 'vue'

export default defineComponent({
  name: 'UiClock',

  setup() {
    const currentTime = ref(new Date().toLocaleTimeString(
      navigator.language,
      { timeStyle: 'medium' }
    ))
    let timer = null

    const updateTime = () => {
      currentTime.value = new Date().toLocaleTimeString(navigator.language, {timeStyle: 'medium'})
    }

    onMounted(() => {
      timer = setInterval(updateTime, 1000)
    })

    onUnmounted(() => {
      clearInterval(timer)
    })

    return {
      currentTime,
    }
  },

  template: `<div class="clock">{{ currentTime }}</div>`,
})
