const incomeSection = document.querySelector('.income-area');
const expensesArea = document.querySelector('.expenses-area');
const availableMoney = document.querySelector('.available-money');

const nameInput = document.querySelector('#name');
const amountInput = document.querySelector('#amount');
const categorySelect = document.querySelector('#category');

const deleteBtn = document.querySelector('.delete');
const addTransactionBtn = document.querySelector('.add-transaction');
const deleteAllBtn = document.querySelector('.delete-all');
const lightBtn = document.querySelector('.light');
const darkBtn = document.querySelector('.dark');
const saveBtn = document.querySelector('.save');
const cancelBtn = document.querySelector('.cancel');


let root = document.documentElement;
let ID = 0;
let categoryIcon;
let selectedCategory;
let moneyArr = [0];