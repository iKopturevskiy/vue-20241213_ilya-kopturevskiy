import {defineComponent, ref, watchEffect} from 'vue'
import { getMeetup } from './meetupsService.ts'

export default defineComponent({
  name: 'SelectedMeetupApp',

  setup() {
    const meetup = ref(null);
    const meetupId = ref(1);

    watchEffect(async () => {
      meetup.value = await getMeetup(meetupId.value)
    })

    return {
      meetup,
      meetupId
    }
  },

  template: `
    <div class="meetup-selector">
      <div class="meetup-selector__control">
        <button :disabled="meetupId === 1" @click="meetupId--" class="button button--secondary" type="button">Предыдущий</button>

        <div class="radio-group" role="radiogroup">
          <div v-for="id in [1, 2, 3, 4, 5]" :key="id" class="radio-group__button">
            <input
              :id="'meetup-id-' + id"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              :value=id
              v-model="meetupId"
            />
            <label :for="'meetup-id-' + id" class="radio-group__label">{{ id }}</label>
          </div>
        </div>

        <button :disabled="meetupId === 5" @click="meetupId++" class="button button--secondary" type="button">Следующий</button>
      </div>

      <div v-if="meetup" class="meetup-selector__cover">
        <div class="meetup-cover">
          <h1 class="meetup-cover__title">{{ meetup.title }}</h1>
        </div>
      </div>

    </div>
  `,
})
