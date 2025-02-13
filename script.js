'use strict';

// DATA
// Define accounts with data like owner, movements, interest rate, pin, and other details.
const account1 = {
  owner: 'Karthik raj',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300, 99999999],
  interestRate: 1.2,
  pin: 1111,
  movementsDates: [
    '2023-11-18T21:31:17.178Z',
    '2023-12-23T07:42:02.383Z',
    '2024-01-28T09:15:04.904Z',
    '2024-02-01T10:17:24.185Z',
    '2024-03-08T14:11:59.604Z',
    '2024-11-13T17:01:17.194Z',
    '2024-11-14T23:36:17.929Z',
    '2024-11-17T10:51:36.790Z',
    '2024-11-19T10:51:36.790Z',
  ],
  currency: 'INR',
  locale: 'en-IN',
};

const account2 = {
  owner: 'Black Panther',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    '2024-01-01T13:15:33.035Z',
    '2024-01-30T09:48:16.867Z',
    '2024-02-25T06:04:23.907Z',
    '2024-03-25T14:18:46.235Z',
    '2024-03-28T16:33:06.386Z',
    '2024-04-10T14:43:26.374Z',
    '2024-11-15T18:49:59.371Z',
    '2024-11-19T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  owner: 'Captain America',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    '2024-02-18T21:31:17.178Z',
    '2024-02-23T07:42:02.383Z',
    '2024-03-28T09:15:04.904Z',
    '2024-04-01T10:17:24.185Z',
    '2024-04-08T14:11:59.604Z',
    '2024-04-10T17:01:17.194Z',
    '2024-04-11T23:36:17.929Z',
    '2024-04-15T10:51:36.790Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account4 = {
  owner: 'Doctor Strange',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    '2024-03-08T14:11:59.604Z',
    '2024-03-27T17:01:17.194Z',
    '2024-04-11T23:36:17.929Z',
    '2024-04-12T10:51:36.790Z',
    '2024-04-15T12:01:20.894Z',
  ],
  currency: 'GBP',
  locale: 'en-GB',
};

const account5 = {
  owner: 'Black Widow',
  movements: [500, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 1.2,
  pin: 5555,
  movementsDates: [
    '2024-03-18T21:31:17.178Z',
    '2024-03-23T07:42:02.383Z',
    '2024-03-28T09:15:04.904Z',
    '2024-04-01T10:17:24.185Z',
    '2024-04-08T14:11:59.604Z',
    '2024-04-10T17:01:17.194Z',
    '2024-04-12T23:36:17.929Z',
    '2024-04-15T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'de-DE',
};

const account6 = {
  owner: 'Thor',
  movements: [2000, 4500, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.5,
  pin: 6666,
  movementsDates: [
    '2024-03-18T21:31:17.178Z',
    '2024-03-23T07:42:02.383Z',
    '2024-03-28T09:15:04.904Z',
    '2024-04-01T10:17:24.185Z',
    '2024-04-08T14:11:59.604Z',
    '2024-04-10T17:01:17.194Z',
    '2024-04-12T23:36:17.929Z',
    '2024-04-15T10:51:36.790Z',
  ],
  currency: 'NOK',
  locale: 'nb-NO',
};

const account7 = {
  owner: 'Hulk',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 7777,
  movementsDates: [
    '2024-03-18T21:31:17.178Z',
    '2024-03-23T07:42:02.383Z',
    '2024-03-28T09:15:04.904Z',
    '2024-04-01T10:17:24.185Z',
    '2024-04-08T14:11:59.604Z',
    '2024-04-10T17:01:17.194Z',
    '2024-04-12T23:36:17.929Z',
    '2024-04-15T10:51:36.790Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account8 = {
  owner: 'Wonder Woman',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 8888,
  movementsDates: [
    '2024-04-08T14:11:59.604Z',
    '2024-04-10T17:01:17.194Z',
    '2024-04-11T23:36:17.929Z',
    '2024-04-12T10:51:36.790Z',
    '2024-04-15T12:01:20.894Z',
  ],
  currency: 'EUR',
  locale: 'en-GB',
};

const account9 = {
  owner: 'Spider Man',
  movements: [1500, -500, 200, 150, -1000],
  interestRate: 1.3,
  pin: 9999,
  movementsDates: [
    '2024-04-08T14:11:59.604Z',
    '2024-04-10T17:01:17.194Z',
    '2024-04-11T23:36:17.929Z',
    '2024-04-12T10:51:36.790Z',
    '2024-04-15T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account10 = {
  owner: 'Iron Man',
  movements: [10000, -2000, 3000, -1500, 200, 4500, -700, 100],
  interestRate: 1.4,
  pin: 1010,
  movementsDates: [
    '2024-03-18T21:31:17.178Z',
    '2024-03-23T07:42:02.383Z',
    '2024-03-28T09:15:04.904Z',
    '2024-04-01T10:17:24.185Z',
    '2024-04-08T14:11:59.604Z',
    '2024-04-10T17:01:17.194Z',
    '2024-04-12T23:36:17.929Z',
    '2024-04-15T10:51:36.790Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [
  account1,
  account2,
  account3,
  account4,
  account5,
  account6,
  account7,
  account8,
  account9,
  account10,
];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const createUserNames = function (accs) {
  accs.forEach((val) => {
    val.userName = val.owner
      .toLowerCase()
      .split(' ')
      .map((val) => val[0])
      .join('');
  });
};

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    // In Each Call, Print the Remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // When 0 Seconds, Stop the Timer and Log Out
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Log in to Get Started`;
      containerApp.style.opacity = 0;
    }

    // Decrease the Time by 1s
    time--;
  };

  // Set Time to 5 Minutes
  let time = 300;

  // Call the Timer Every Second
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

createUserNames(accounts);

function formatMovementDate(date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));

  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} Days Ago`;

  const day = `${date.getDate()}`.padStart(2, 0);
  const month = `${date.getMonth() + 1}`.padStart(2, 0);
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(date);
}

const formatNumber = function (val, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(val);
};

const displayMovements = function (acc, sort = false) {
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  containerMovements.innerHTML = '';

  movs.forEach((value, i) => {
    const type = value > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formatNumber(
          value,
          acc.locale,
          acc.currency
        )}</div>
        </div>
        `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const displayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, val) => acc + val, 0);
  labelBalance.textContent = `${formatNumber(
    acc.balance,
    acc.locale,
    acc.currency
  )}`;
};

const displaySummary = function (acc) {
  const incomes = acc.movements
    .filter((val) => val > 0)
    .reduce((acc, val) => acc + val, 0);
  labelSumIn.textContent = `${formatNumber(incomes, acc.locale, acc.currency)}`;

  const outcomes = acc.movements
    .filter((val) => val < 0)
    .reduce((acc, val) => acc + val, 0);
  labelSumOut.textContent = `${formatNumber(
    Math.abs(outcomes),
    acc.locale,
    acc.currency
  )}`;

  const interest = acc.movements
    .filter((val) => val > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int) => int >= 1)
    .reduce((acc, val) => acc + val, 0);
  labelSumInterest.textContent = `${formatNumber(
    interest,
    acc.locale,
    acc.currency
  )}`;
};

const updateUI = function (acc) {
  displayMovements(acc);
  displayBalance(acc);
  displaySummary(acc);
};

function shakeElement(element) {
  element.classList.add('shake-section');
  setTimeout(() => {
    element.classList.remove('shake-section');
  }, 1000);
}

function addRedBorder(element) {
  element.classList.add('red-border-section');
  setTimeout(() => {
    element.classList.remove('red-border-section');
  }, 1000);
}

function showInvalidInputAnimation(selector) {
  const section = document.querySelector(selector);
  shakeElement(section);
  addRedBorder(section);
}

let currentAccount, timer;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.userName === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and Messages
    labelWelcome.textContent = `👋 Welcome Back, ${
      currentAccount.owner.split(' ')[0]
    }!`;
    containerApp.style.opacity = 100;
    labelWelcome.classList.add('pulse');

    const n = new Date();
    const opt = {
      hour: '2-digit',
      minute: '2-digit',
      day: 'numeric',
      month: 'long',
      year: '2-digit',
      // weekday: 'long',
    };

    // const locale = navigator.language;
    // const locale = currentAccount.locale;
    // console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      opt
    ).format(n);

    // const now = new Date();
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);

    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear Login Input Fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    updateUI(currentAccount);
  } else {
    shakeElement(inputLoginUsername);
    shakeElement(inputLoginPin);
    addRedBorder(inputLoginUsername);
    addRedBorder(inputLoginPin);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const receiverAccount = accounts.find(
    (acc) => acc.userName === inputTransferTo.value
  );
  const amt = +inputTransferAmount.value;
  console.log(receiverAccount, amt);

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amt > 0 &&
    receiverAccount &&
    amt <= currentAccount.balance &&
    receiverAccount.userName !== currentAccount.userName
  ) {
    console.log(`Transfer VALID`);
    currentAccount.movements.push(-amt);
    receiverAccount.movements.push(amt);

    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAccount.movementsDates.push(new Date().toISOString());

    updateUI(currentAccount);
    btnTransfer.classList.add('pulse');

    //Reset the Timer
    clearInterval(timer);
    timer = startLogOutTimer();
  } else {
    shakeElement(document.querySelector('.operation--transfer'));
    addRedBorder(document.querySelector('.operation--transfer'));
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Math.floor(inputLoanAmount.value);
  if (
    amount > 0 &&
    currentAccount.movements.some((val) => val >= amount * 0.1)
  ) {
    setTimeout(function () {
      currentAccount.movements.push(amount);

      currentAccount.movementsDates.push(new Date().toISOString());

      updateUI(currentAccount);

      // Reset the Timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 2500);

    btnLoan.classList.add('pulse');
  } else {
    shakeElement(document.querySelector('.operation--loan'));
    addRedBorder(document.querySelector('.operation--loan'));
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    currentAccount.userName === inputCloseUsername.value &&
    currentAccount.pin === +inputClosePin.value
  ) {
    const index = accounts.findIndex(
      (acc) => acc.userName === currentAccount.userName
    );
    console.log(index);

    accounts.splice(index, 1);

    containerApp.style.opacity = 0;
    containerApp.classList.add('slide-out');
  } else {
    shakeElement(document.querySelector('.operation--close'));
    addRedBorder(document.querySelector('.operation--close'));
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});
