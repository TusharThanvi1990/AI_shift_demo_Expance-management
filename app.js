// Expense Tracker — the whole app lives in this one file.
//
// How it works:
//   1. All expenses are kept in the `expenses` array below.
//   2. When the form is submitted, a new expense is pushed onto the array.
//   3. render() redraws the list and the total from the array.
//
// Note: nothing is saved yet. Refresh the page and you're back to the
// sample data. (Fixing that is one of the features in FEATURES.md!)

// Some sample data so the app isn't empty on first open.
const expenses = [
  { id: 1, name: 'Groceries', amount: 850, category: 'Food' },
  { id: 2, name: 'Metro card recharge', amount: 300, category: 'Transport' },
  { id: 3, name: 'Electricity bill', amount: 1450, category: 'Bills' },
];

// Each new expense gets the next id.
let nextId = 4;

// Grab the elements on the page we need to work with.
const form = document.getElementById('expense-form');
const nameInput = document.getElementById('name');
const amountInput = document.getElementById('amount');
const categoryInput = document.getElementById('category');
const list = document.getElementById('expense-list');
const totalEl = document.getElementById('total');
const emptyMessage = document.getElementById('empty-message');

// Turns 1450 into "₹1,450" (Indian number format).
function formatMoney(amount) {
  return '₹' + amount.toLocaleString('en-IN');
}

// Builds the <li> for a single expense.
function createExpenseItem(expense) {
  const item = document.createElement('li');
  item.className = 'expense';

  const details = document.createElement('div');

  const name = document.createElement('div');
  name.className = 'expense-name';
  name.textContent = expense.name;

  const category = document.createElement('span');
  category.className = 'expense-category';
  category.textContent = expense.category;

  details.append(name, category);

  const amount = document.createElement('span');
  amount.className = 'expense-amount';
  amount.textContent = formatMoney(expense.amount);

  item.append(details, amount);
  return item;
}

// Redraws the list and the total from the `expenses` array.
function render() {
  list.innerHTML = '';
  for (const expense of expenses) {
    list.append(createExpenseItem(expense));
  }

  let total = 0;
  for (const expense of expenses) {
    total += expense.amount;
  }
  totalEl.textContent = formatMoney(total);

  emptyMessage.hidden = expenses.length > 0;
}

// Runs when the "Add expense" button is clicked.
form.addEventListener('submit', function (event) {
  // Stop the browser from reloading the page.
  event.preventDefault();

  const name = nameInput.value.trim();
  const amount = Number(amountInput.value);

  if (name === '' || !(amount > 0)) {
    alert('Please enter a name and an amount greater than 0.');
    return;
  }

  expenses.push({
    id: nextId,
    name: name,
    amount: amount,
    category: categoryInput.value,
  });
  nextId += 1;

  form.reset();
  nameInput.focus();
  render();
});

// Draw the app for the first time.
render();
