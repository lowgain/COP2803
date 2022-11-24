"use strict"
let $ = id => document.getElementById(id);

window.onload = function() {
  $('register').onclick = register;
};

function validateInput() {
 
  let validity = true;

  function isEmpty(field) {
    if ($(field).value == "") {
      validity = false;
    };
  };

  isEmpty("email");
  isEmpty("passwd");
  isEmpty("passwd-check");

  if ($('passwd').value != $('passwd-check').value) {
    validity = false;
  };
 
  return validity;

};

function register() {
  if (validateInput()) {
    if (localStorage.getItem($('email').value) != null) {
      $('email-error').firstChild.nodeValue = "User already exists";
      return
    };
    location.href = "login.html";
    let user = {passwd: $('passwd').value};
    localStorage.setItem($('email').value, JSON.stringify(user));
  };
};
