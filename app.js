// Expense Tracker — the whole app lives in this one file.
//
// How it works:
//   1. All expenses are kept in the `expenses` array below.
//   2. When the form is submitted, a new expense is pushed onto the array.
//   3. render() redraws the list and the total from the array.
//
// SOLUTION BRANCH: this version adds the Level 1 and Level 2 features from
// FEATURES.md — delete, search, filter by category, and saving to localStorage.

// The key we save the expenses under in the browser's localStorage.
const STORAGE_KEY = 'expense-tracker:expenses';

// Some sample data so the app isn't empty on first open.
const sampleExpenses = [
  { id: 1, name: 'Groceries', amount: 850, category: 'Food' },
  { id: 2, name: 'Metro card recharge', amount: 300, category: 'Transport' },
  { id: 3, name: 'Electricity bill', amount: 1450, category: 'Bills' },
];

// Loads saved expenses, or the sample data for a first-time visitor.
function loadExpenses() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved !== null) {
      return JSON.parse(saved);
    }
  } catch (error) {
    // Storage is blocked or the saved data is broken: start from the samples.
  }
  return sampleExpenses;
}

// Saves the current expenses so they survive a page refresh.
function saveExpenses() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
  } catch (error) {
    // Storage is blocked (e.g. some private windows): the app still works,
    // it just won't remember anything.
  }
}

let expenses = loadExpenses();

// Each new expense gets an id one higher than the biggest one so far.
let nextId = expenses.reduce((max, expense) => Math.max(max, expense.id), 0) + 1;

// Grab the elements on the page we need to work with.
const form = document.getElementById('expense-form');
const nameInput = document.getElementById('name');
const amountInput = document.getElementById('amount');
const categoryInput = document.getElementById('category');
const searchInput = document.getElementById('search');
const categoryFilter = document.getElementById('category-filter');
const list = document.getElementById('expense-list');
const totalEl = document.getElementById('total');
const emptyMessage = document.getElementById('empty-message');

// Turns 1450 into "₹1,450" (Indian number format).
function formatMoney(amount) {
  return '₹' + amount.toLocaleString('en-IN');
}

// Removes the expense with this id, then saves and redraws.
function deleteExpense(id) {
  expenses = expenses.filter((expense) => expense.id !== id);
  saveExpenses();
  render();
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

  const right = document.createElement('div');
  right.className = 'expense-right';

  const amount = document.createElement('span');
  amount.className = 'expense-amount';
  amount.textContent = formatMoney(expense.amount);

  const deleteButton = document.createElement('button');
  deleteButton.type = 'button';
  deleteButton.className = 'delete-button';
  deleteButton.textContent = '✕';
  deleteButton.setAttribute('aria-label', 'Delete ' + expense.name);
  deleteButton.addEventListener('click', () => deleteExpense(expense.id));

  right.append(amount, deleteButton);
  item.append(details, right);
  return item;
}

// Returns only the expenses that match the search box and category filter.
function getVisibleExpenses() {
  const search = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;

  return expenses.filter((expense) => {
    const matchesSearch = expense.name.toLowerCase().includes(search);
    const matchesCategory = category === 'All' || expense.category === category;
    return matchesSearch && matchesCategory;
  });
}

// Redraws the list and the total from the `expenses` array.
function render() {
  const visible = getVisibleExpenses();

  list.innerHTML = '';
  for (const expense of visible) {
    list.append(createExpenseItem(expense));
  }

  // The total covers the expenses currently shown.
  let total = 0;
  for (const expense of visible) {
    total += expense.amount;
  }
  totalEl.textContent = formatMoney(total);

  if (expenses.length === 0) {
    emptyMessage.textContent = 'No expenses yet. Add one above!';
  } else {
    emptyMessage.textContent = 'No expenses match your search.';
  }
  emptyMessage.hidden = visible.length > 0;
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
  saveExpenses();

  form.reset();
  nameInput.focus();
  render();
});

// Redraw whenever the search text or the category filter changes.
searchInput.addEventListener('input', render);
categoryFilter.addEventListener('change', render);

// Draw the app for the first time.
render();
