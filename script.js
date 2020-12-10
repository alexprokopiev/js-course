"use strict";

let money, time;

function start() {
  money = +prompt("Ваш бюджет на месяц?", "");
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
}
start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
};

function chooseExpenses() {
  // FOR
  for (let i = 0; i < 2; i++) {
    let costItem = prompt(
        "Введите обязательную статью расходов в этом месяце",
        ""
      ),
      cost = prompt("Во сколько обойдется?", "");

    if (
      typeof costItem === "string" &&
      typeof costItem != null &&
      typeof cost != null &&
      costItem != "" &&
      cost != "" &&
      costItem.length < 50
    ) {
      console.log("done");
      appData.expenses[costItem] = cost;
    } else {
      console.log("bad result");
      i--;
    }
  }

  // WHILE
  // let i = 0;
  // while (i < 2) {
  //   let costItem = prompt(
  //       "Введите обязательную статью расходов в этом месяце",
  //       ""
  //     ),
  //     cost = prompt("Во сколько обойдется?", "");

  //   if (
  //     typeof costItem === "string" &&
  //     typeof costItem != null &&
  //     typeof cost != null &&
  //     costItem != "" &&
  //     cost != "" &&
  //     costItem.length < 50
  //   ) {
  //     console.log("done");
  //     appData.expenses[costItem] = cost;
  //   } else {
  //     console.log("bad result");
  //     i--;
  //   }
  //   i++;
  // }

  // DO WHILE
  // let i = 0;
  // do {
  //   let costItem = prompt(
  //       "Введите обязательную статью расходов в этом месяце",
  //       ""
  //     ),
  //     cost = prompt("Во сколько обойдется?", "");

  //   if (
  //     typeof costItem === "string" &&
  //     typeof costItem != null &&
  //     typeof cost != null &&
  //     costItem != "" &&
  //     cost != "" &&
  //     costItem.length < 50
  //   ) {
  //     console.log("done");
  //     appData.expenses[costItem] = cost;
  //   } else {
  //     console.log("bad result");
  //     i--;
  //   }
  //   i++;
  // } while (i < 2);
}
chooseExpenses();

function detectDayBudget() {
  appData.moneyPerDay = (appData.budget / 30).toFixed();

  alert("Ежедневный бюджет: " + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
  if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
  } else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
  } else {
    console.log("Произошла ошибка");
  }
}
detectLevel();

function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt("Какова сумма накоплений?"),
      percent = +prompt("Под какой процент?");

    appData.monthIncome = (save / 100 / 12) * percent;
    alert("Доход в месяц с Вашего депозита: " + appData.monthIncome);
  }
}
checkSavings();

function chooseOptExpenses() {
  for (let i = 0; i < 3; i++) {
    let optCostItem = prompt("Статья необязательных расходов?", "");

    if (
      typeof optCostItem === "string" &&
      typeof optCostItem != null &&
      optCostItem != "" &&
      optCostItem.length < 50
    ) {
      console.log("done");
      appData.optionalExpenses[i + 1] = optCostItem;
    } else {
      console.log("bad result");
      i--;
    }
  }
}
chooseOptExpenses();
