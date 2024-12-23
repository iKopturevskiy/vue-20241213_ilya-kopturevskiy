import {defineComponent, computed, ref} from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    const operator = ref(null);
    const firstOperand = ref(null);
    const secondOperand = ref(null);

    const operations = {
      sum: (a, b) => a + b,
      subtract: (a, b) => a - b,
      multiply: (a, b) => a * b,
      divide: (a, b) => b !== 0 ? a / b : 'Ошибка: деление на 0',
    }

    const result =  computed(() => {
      const calculateResult = operations[operator.value]

      if (!calculateResult || !firstOperand.value || !secondOperand.value) {
        return 'Введите все данные'
      }

      return calculateResult(firstOperand.value, secondOperand.value)

    })

    return {
      result,
      operator,
      firstOperand,
      secondOperand
    }
  },

  template: `
    <div class="calculator">
      <input v-model="firstOperand" type="number" aria-label="First operand" />

      <div class="calculator__operators">
        <label><input v-model="operator" type="radio" name="operator" value="sum"/>➕</label>
        <label><input v-model="operator" type="radio" name="operator" value="subtract"/>➖</label>
        <label><input v-model="operator" type="radio" name="operator" value="multiply"/>✖</label>
        <label><input v-model="operator" type="radio" name="operator" value="divide"/>➗</label>
      </div>

      <input v-model="secondOperand" type="number" aria-label="Second operand" />

      <div>=</div>

      <output>{{ result }}</output>
    </div>
  `,
})
