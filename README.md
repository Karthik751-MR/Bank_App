# Bankist App

A polished front-end demo banking application built with vanilla HTML, CSS, and JavaScript.

## Features

- Secure login flow with username + PIN
- Account balance, transactions, and summary cards
- Transfer funds between users
- Request loans with simple eligibility rule
- Close account flow
- Auto logout timer for inactive sessions
- Currency and date localization per account
- Responsive UI with motion and feedback states

## Tech Stack

- HTML5
- CSS3
- JavaScript (ES6+)

## Run Locally

Because this is a static project, you can run it with any local static server.

### Option 1: Python

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

### Option 2: VS Code Live Server

Open the project folder and run **Live Server**.

## Demo Credentials

Usernames are generated from account initials (e.g. `kr` for **Karthik raj**, `bp` for **Black Panther**).

- `kr` / `1111`
- `bp` / `2222`
- `ca` / `3333`
- `ds` / `4444`
- `bw` / `5555`
- `t` / `6666`
- `h` / `7777`
- `ww` / `8888`
- `sm` / `9999`
- `im` / `1010`

## Project Structure

- `index.html` — app structure and forms
- `style.css` — UI styling and animations
- `script.js` — account data and app logic

## Notes

- This project stores data in-memory only. Refreshing the page resets all account state.
- This is a learning/demo app and not production banking software.
