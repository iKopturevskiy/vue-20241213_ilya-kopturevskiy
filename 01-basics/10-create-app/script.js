import { defineComponent, createApp } from 'vue';

const App = defineComponent({
  name: 'App',

  setup () {
    const formatedDate =  new Date().toLocaleDateString(navigator.language, { dateStyle: 'long' });
    return { formatedDate }
  },

  template: `Сегодня {{ formatedDate }}`,
})

const app = createApp(App);

app.mount('#app');
