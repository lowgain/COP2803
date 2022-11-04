"use strict"
let $ = id => document.getElementById(id);

window.onload = function() {
  $('login').onclick = login;
};

function validateInput() {
 
  let validity = true;

  function isEmpty(field, errorField) {
    if ($(field).value == "") {
      $(errorField).firstChild.nodeValue = "Field is required.";
      validity = false;
    } else { $(errorField).firstChild.nodeValue = "" };
  };

  isEmpty('email','email-error');
  isEmpty('passwd','passwd-error');

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

    location.href = "home.html"
};