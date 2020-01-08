const money = prompt('Ваш бюджет в месяц?')
const time = prompt('Введите дату в формате YYYY-MM-DD')

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
}

let expenseItem = prompt('Введите обязательную статью расходов в этом месяце')
                  prompt('Введите обязательную статью расходов в этом месяце')
let howMuch = prompt('Во сколько обойдётся?')
              prompt('Во сколько обойдётся?')

appData.expenses[expenseItem] = [howMuch]
appData.moneyPerDay = (appData.budget / 30).toFixed()

alert('Текущий суточный бюджет: ' + appData.moneyPerDay + '₽')
