const $ = element => document.getElementById(element);

window.onload = () => {
  listTransactions();
  $('withdraw').onclick = withdraw;
  $('deposit').onclick = deposit;
};

class transaction {
  constructor(date, desc, type, ammount) {
    this.date = date;
    this.desc= desc;
    this.type = type;
    this.ammount = ammount;
  };
};

let balance = 0;

let transactions = [
  new transaction(new Date("2022-11-1"), "Iced coffee", "debit", 4.23),
  new transaction(new Date("2022-11-2"), "Pizza", "debit", 6.00),
  new transaction(new Date("2022-11-3"), "Fried chicken", "debit", 6.99),
  new transaction(new Date("2022-11-4"), "Steak", "debit", 25.00),
  new transaction(new Date("2022-11-5"), "Italian food", "debit", 15.99),
  new transaction(new Date("2022-11-6"), "Home loan", "credit", 200000.00),
  new transaction(new Date("2022-11-7"), "Car loan", "credit", 15000),
  new transaction(new Date("2022-11-8"), "Phone payment", "credit", 115.00),
  new transaction(new Date("2022-11-9"), "Groceries", "credit", 200.00),
  new transaction(new Date("2022-11-10"), "New guitar", "credit", 550.00)
];

function listTransactions() {
  let Header = document.createElement('tr');

  let dateHeader = document.createElement('th');
  dateHeader.innerHTML = "Date";
  let descHeader = document.createElement('th');
  descHeader.innerHTML = "Description";
  let typeHeader = document.createElement('th');
  typeHeader.innerHTML = "Type";
  let ammountHeader = document.createElement('th');
  ammountHeader.innerHTML = "Ammount";

  Header.appendChild(dateHeader);
  Header.appendChild(descHeader);
  Header.appendChild(typeHeader);
  Header.appendChild(ammountHeader);

  $('transactions-table').appendChild(Header);

  transactions.forEach(val => {

    if (val.type == "debit") { balance -= val.ammount};
    if (val.type == "credit") { balance += val.ammount };

    $('balance').innerHTML = `Balance: $${balance.toFixed(2)}`;

    let transaction = document.createElement('tr');

    let date = document.createElement('td');
    date.innerHTML = `${val.date.getMonth()}/${val.date.getDay()}`;
    let desc = document.createElement('td');
    desc.innerHTML = val.desc;
    let type = document.createElement('td');
    type.innerHTML = val.type;
    let ammount = document.createElement('td');
    ammount.innerHTML = val.ammount;

    transaction.appendChild(date);
    transaction.appendChild(desc);
    transaction.appendChild(type);
    transaction.appendChild(ammount);

    $('transactions-table').appendChild(transaction);
  });
};

function deposit() {
  balance += Number($('deposit-ammount').value);
  $('balance').innerHTML = `Balance: $${balance}`;
};

function withdraw() {
  balance -= Number($('withdraw-ammount').value);
  $('balance').innerHTML = `Balance: $${balance.toFixed(2)}`;
};
