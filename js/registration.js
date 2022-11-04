"use strict"
let $ = id => document.getElementById(id);

window.onload = function() {
  $('register').onclick = register;
};

function validateInput() {
 
  let validity = true;

  function isEmpty(field, errorField) {
    if ($(field).value == "") {
      $(errorField).firstChild.nodeValue = "Field is required.";
      validity = false;
    } else { $(errorField).firstChild.nodeValue = "" }
  };

  isEmpty("email","email-error");
  isEmpty("passwd","passwd-error");
  isEmpty("passwd-check","passwd-check-error");

  if ($('passwd').value != $('passwd-check').value) {
    $('passwd-check-error').firstChild.nodeValue = "Passwords do not match";
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