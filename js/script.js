"use strict";

let startCalc = document.getElementById("start"),
  budgetValue = document.getElementsByClassName("budget-value")[0],
  daybudgetValue = document.getElementsByClassName("daybudget-value")[0],
  levelValue = document.getElementsByClassName("level-value")[0],
  expensesValue = document.getElementsByClassName("expenses-value")[0],
  optionalExpensesValue = document.getElementsByClassName(
    "optionalexpenses-value"
  )[0],
  incomeValue = document.getElementsByClassName("income-value")[0],
  monthsavingsValue = document.getElementsByClassName("monthsavings-value")[0],
  yearsavingsValue = document.getElementsByClassName("yearsavings-value")[0],
  expensesItem = document.getElementsByClassName("expenses-item"),
  approveExpenses = document.getElementsByTagName("button")[0],
  approveOptExpenses = document.getElementsByTagName("button")[1],
  calc = document.getElementsByTagName("button")[2],
  optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
  chooseIncome = document.querySelector("#income"),
  checkbox = document.querySelector("#savings"),
  sum = document.querySelector("#sum"),
  percent = document.querySelector("#percent"),
  year = document.querySelector(".year-value"),
  month = document.querySelector(".month-value"),
  day = document.querySelector(".day-value");

let money, time;

document.querySelectorAll("button").forEach(function (item) {
  item.setAttribute("disabled", true);
});

startCalc.removeAttribute("disabled");
startCalc.addEventListener("click", function () {
  document.querySelectorAll("button").forEach(function (item) {
    item.removeAttribute("disabled");
  });

  time = prompt("Введите дату в формате YYYY-MM-DD", "");
  money = +prompt("Ваш бюджет на месяц?", "");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
  appData.budget = money;
  appData.timeData = time;
  budgetValue.textContent = money.toFixed();
  year.value = new Date(Date.parse(time)).getFullYear();
  month.value = new Date(Date.parse(time)).getMonth() + 1;
  day.value = new Date(Date.parse(time)).getDate();
});

approveExpenses.addEventListener("click", function () {
  let sumExpenses = 0;
  for (let i = 0; i < expensesItem.length; i++) {
    let costItem = expensesItem[i].value,
      cost = expensesItem[++i].value;

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
      sumExpenses += +cost;
    } else {
      console.log("bad result");
      i--;
    }
  }
  expensesValue.textContent = sumExpenses;
});

approveOptExpenses.addEventListener("click", function () {
  for (let i = 0; i < optionalExpensesItem.length; i++) {
    let optCostItem = optionalExpensesItem[i].value;

    if (
      typeof optCostItem === "string" &&
      typeof optCostItem != null &&
      optCostItem != "" &&
      optCostItem.length < 50
    ) {
      console.log("done");
      appData.optionalExpenses[i] = optCostItem;
      optionalExpensesValue.textContent += appData.optionalExpenses[i] + " ";
    } else {
      console.log("bad result");
      i--;
    }
  }
});

calc.addEventListener("click", function () {
  if (appData.budget != undefined) {
    appData.moneyPerDay = (
      (appData.budget - +expensesValue.textContent) /
      30
    ).toFixed();
    daybudgetValue.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay < 100) {
      levelValue.textContent = "Минимальный уровень достатка";
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      levelValue.textContent = "Средний уровень достатка";
    } else if (appData.moneyPerDay > 2000) {
      levelValue.textContent = "Высокий уровень достатка";
    } else {
      levelValue.textContent = "Произошла ошибка";
    }
  } else {
    daybudgetValue.textContent = "Произошла ошибка";
  }
});

chooseIncome.addEventListener("input", function () {
  let items = chooseIncome.value;
  if (typeof items === "string" && typeof items != null && items != "") {
    console.log("done");
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
  } else {
    incomeValue.textContent = "Произошла ошибка";
  }
});

checkbox.addEventListener("click", function () {
  if (appData.savings == true) {
    appData.savings = false;
  } else {
    appData.savings = true;
  }
});

sum.addEventListener("input", function () {
  if (appData.savings == true) {
    let sumValue = +sum.value,
      percentValue = +percent.value;

    appData.monthIncome = (sumValue / 100 / 12) * percentValue;
    appData.yearIncome = (sumValue / 100) * percentValue;

    monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

percent.addEventListener("input", function () {
  if (appData.savings == true) {
    let sumValue = +sum.value,
      percentValue = +percent.value;

    appData.monthIncome = (sumValue / 100 / 12) * percentValue;
    appData.yearIncome = (sumValue / 100) * percentValue;

    monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};
