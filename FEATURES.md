# Features to build

Pick one. Start with Level 1 if this is your first time.

For each feature, follow the same loop:

1. **Understand.** Ask the AI to explain the parts of the code your feature touches.
2. **Plan.** Ask the AI for a plan *before* any code. Read it. Does it make sense?
3. **Build.** Let the AI make the change, then read what it changed.
4. **Test.** Refresh the page and check every point under "Done when".
5. **Commit.** Save your work with a clear commit message.

---

## Level 1: Getting started

### Delete an expense
Add a delete button to each expense in the list.

**Done when:**
- Every expense has a delete (✕) button.
- Clicking it removes that expense, and only that one.
- The total updates straight away.
- Deleting every expense shows the "No expenses yet" message.

**Example prompt:** *"I want to add a delete button to each expense. Before
writing any code, explain which parts of app.js need to change and why."*

### Search expenses
Add a search box above the list.

**Done when:**
- Typing in the box shows only expenses whose name contains the text.
- The search ignores upper/lower case ("metro" finds "Metro card recharge").
- Clearing the box shows every expense again.

---

## Level 2: A bit more

### Filter by category
Add a dropdown above the list: "All categories", Food, Transport, and so on.

**Done when:**
- Picking a category shows only expenses in that category.
- The total shows the total **for the expenses currently shown**.
- "All categories" shows everything again.

### Remember expenses after a refresh
Right now, refreshing the page loses everything you added.

**Done when:**
- Added and deleted expenses are still there after refreshing the page.
- A first-time visitor still sees the sample data.

**Hint:** ask the AI about the browser's `localStorage`.

---

## Level 3: Stretch

### Spending by category
Show how much was spent in each category, e.g. as a small bar chart
(plain HTML/CSS bars are fine, no library needed).

**Done when:**
- Every category with spending is shown with its total.
- It updates when expenses are added or deleted.

### Export to CSV
Add a "Download CSV" button.

**Done when:**
- Clicking it downloads a `expenses.csv` file.
- The file opens in Excel or Google Sheets with columns: Name, Category, Amount.
- An expense name containing a comma (e.g. "Pens, paper") stays in one cell.

---

## Got your own idea?

Go for it. Some ideas: a date for each expense, editing an expense, a monthly
budget with a warning when you go over, dark mode.
