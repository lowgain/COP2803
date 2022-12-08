'use strict'

const getEl = element => document.getElementById(element);

window.onload = () => {
  listTransactions();
  getEl('withdraw').onclick = withdraw;
  getEl('deposit').onclick = deposit;
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

function listTransactions() {
  let Header = document.createElement('tr');

  let descHeader = document.createElement('th');
  descHeader.innerHTML = "Id";
  let dateHeader = document.createElement('th');
  dateHeader.innerHTML = "Date";
  let typeHeader = document.createElement('th');
  typeHeader.innerHTML = "Type";
  let ammountHeader = document.createElement('th');
  ammountHeader.innerHTML = "Ammount";

  Header.appendChild(descHeader);
  Header.appendChild(dateHeader);
  Header.appendChild(typeHeader);
  Header.appendChild(ammountHeader);

  getEl('transactions-table').appendChild(Header);
 
  fetch("http://127.0.0.1:3000/transactions")
    .then(response => (response.json()))
    .then(json => showTransactions(json))
    .catch(err => console.log("Request Failed", err));

  function showTransactions(json) {
    json.forEach(val => {

      if (val.description == "debit") { balance -= val.ammount};
      if (val.description == "credit") { balance += val.ammount };

      getEl('balance').innerHTML = `Balance: $${balance.toFixed(2)}`;

      let transaction = document.createElement('tr');

      let desc = document.createElement('td');
      desc.innerHTML = val.id;
      let date = document.createElement('td');
      let transactionDate = new Date(val.date);
      date.innerHTML = `${transactionDate.getMonth() + 1}/${transactionDate.getDate()}`;
      let type = document.createElement('td');
      type.innerHTML = val.description;
      let ammount = document.createElement('td');
      ammount.innerHTML = val.amount;

      transaction.appendChild(desc);
      transaction.appendChild(date);
      transaction.appendChild(type);
      transaction.appendChild(ammount);

      getEl('transactions-table').appendChild(transaction);
    });
  };
};

function deposit() {
  balance += Number(getEl('deposit-ammount').value);
  getEl('balance').innerHTML = `Balance: $${balance}`;
};

function withdraw() {
  balance -= Number(getEl('withdraw-ammount').value);
  getEl('balance').innerHTML = `Balance: $${balance.toFixed(2)}`;
};
