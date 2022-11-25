"use strict"
let $ = id => document.getElementById(id);

window.onload = function() {
  $('login').onclick = login;
};

function validateInput() {
 
  let validity = true;

  function isEmpty(field) {
    if ($(field).value == "") {
      validity = false;
    };
  };

  isEmpty('email');
  isEmpty('passwd');

  return validity;
};

function login() {
    let account = JSON.parse(localStorage.getItem($('email').value));
    if (validateInput() == false) {
        return
    } else if (localStorage.getItem($('email').value) == null) {
        $('email-error').firstChild.nodeValue = "Sorry this user does not exist.";
        return
    } else if (account.passwd != $('passwd').value) {
        $('passwd-error').firstChild.nodeValue = "Sorry this password is incorrect.";
        return
    };

    location.href = "accounts.html"
};
