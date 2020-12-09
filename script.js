"use strict";

let money = +prompt("Ваш бюджет на месяц?", ""),
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};

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

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
  console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
  console.log("Высокий уровень достатка");
} else {
  console.log("Произошла ошибка");
}
