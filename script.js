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
        createNewTransaction();
    } else {
        alert('Fill in all fields!')
    }

}

const clearInputsValue = () => {
    nameInput.value = '';
    amountInput.value = '';
    categorySelect.selectIndex = 0;
}

const createNewTransaction = () => {
    const newTransaction = document.createElement('div');
    newTransaction.classList.add('transaction');
    newTransaction.setAttribute('id', ID);

    checkCategory(selectedCategory);

    newTransaction.innerHTML = `
    <p class="transaction-name">${categoryIcon} ${nameInput.value}</p>
    <p class="transaction-amount">${amountInput.value}
    <button class="delete" onclick="deleteTransaction(${ID})"><i
                class="fas fa-times"></i></button>
    </p>
    `
    amountInput.value > 0 ? incomeSection.appendChild(newTransaction) && newTransaction.classList.add('income') : expensesArea.appendChild(newTransaction) && newTransaction.classList.add('expense');
    moneyArr.push(parseFloat(amountInput.value))
    countMoney(moneyArr)
    closePanel();
    ID++;
    clearInputsValue();
}
const selectCategory = () => {
    selectedCategory = categorySelect.options[categorySelect.selectedIndex].text;
}

const checkCategory = transaction => {
    switch (transaction) {
        case '[ + ] Income':
            categoryIcon = '<i class="fas fa-money-bill-wave"></i>'
            break;
        case '[ -  ] Shooping':
            categoryIcon = '<i class="fa-solid fa-cart-shopping"></i>'
            break;
        case '[ - ] Food':
            categoryIcon = '<i class="fas fa-hamburger"></i>'
            break;
        case '[ - ] Recreaction':
            categoryIcon = '<i class="fas fa-times"></i>'
            break;
    }
}
const countMoney = money => {
    const newMoney = money.reduce((a, b) => a + b);
    availableMoney.textContent = `${newMoney}zł`
}
addTransactionBtn.addEventListener('click', showPanel);
cancelBtn.addEventListener('click', closePanel);
cancelBtn.addEventListener('click', clearInputsValue);
saveBtn.addEventListener('click', checkForm)