# Expense Tracker

A tiny expense tracker built with plain HTML, CSS and JavaScript.
It's the starter project for the **AI Shift** session, where we learn how to
take an existing GitHub project, understand it, and build a new feature on top
of it with the help of AI.

## What you need

- **Git**: [download here](https://git-scm.com/downloads)
- **A GitHub account**: [sign up here](https://github.com/signup)
- **A web browser** (Chrome, Edge, Firefox, Safari)
- **A code editor**, e.g. [VS Code](https://code.visualstudio.com/)

No Node.js, no `npm install`, no database. The app runs straight in your browser.

## 1. Fork the project

Click **Fork** (top-right of this page). This makes your own copy of the
project on your GitHub account, so you can push your changes to it.

## 2. Clone your fork

Open a terminal and run (replace `YOUR-USERNAME` with your GitHub username):

```bash
git clone https://github.com/YOUR-USERNAME/expense-tracker.git
cd expense-tracker
```

## 3. Run the app

Open `index.html` in your browser. Double-clicking the file works.

You should see a total of **₹2,600** and three sample expenses. Try adding one!

## 4. Understand the code

| File | What it does |
|------|--------------|
| `index.html` | The page: the total, the "Add an expense" form, and the empty list. |
| `style.css` | How everything looks. |
| `app.js` | The logic: keeps the expenses in an array, adds new ones, and draws the list and total. |

The whole app works in three steps:

1. All expenses live in the `expenses` array in `app.js`.
2. Submitting the form pushes a new expense onto that array.
3. `render()` redraws the list and the total from the array.

> **Try this with your AI assistant:** *"Explain how this project works.
> Walk me through what happens when I click 'Add expense'."*

## 5. Build a feature

Pick a feature from **[FEATURES.md](FEATURES.md)**. Then:

```bash
# Make a branch for your feature
git checkout -b add-delete-button

# ...build the feature, then test it in the browser...

# Save your work
git add .
git commit -m "Add a delete button to each expense"

# Upload it to your fork on GitHub
git push -u origin add-delete-button
```

## 6. Open a Pull Request

Go to your fork on GitHub. You'll see a **Compare & pull request** button for
the branch you just pushed. Click it, describe what you built, and create the
pull request.

## Stuck?

The `solution` branch has worked versions of the Level 1 and Level 2 features:

```bash
git fetch origin
git checkout solution
```

Try it yourself first, though. Getting stuck and working out why is where most
of the learning happens.

## License

MIT. See [LICENSE](LICENSE).
