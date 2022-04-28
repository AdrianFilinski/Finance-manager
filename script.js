const incomeSection = document.querySelector('.income-area');
const expensesArea = document.querySelector('.expenses-area');
const availableMoney = document.querySelector('.available-money');
const addTransactionPanel = document.querySelector('.add-transaction-panel');

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

const showPanel = () => {
    addTransactionPanel.style.display = 'flex';
}
const closePanel = () => {
    addTransactionPanel.style.display = 'none';
}

const checkForm = () => {
    if (nameInput.value !== '' && amountInput.value !== '' && categorySelect.value !== 'none') {
        console.log('Perfect')
    } else {
        alert('Fill in all fields!')
    }

}

const clearInputsValue = () => {
    nameInput.value = '';
    amountInput.value = '';
    categorySelect.selectIndex = 0;
}

addTransactionBtn.addEventListener('click', showPanel);
cancelBtn.addEventListener('click', closePanel);
cancelBtn.addEventListener('click', clearInputsValue);
saveBtn.addEventListener('click', checkForm)