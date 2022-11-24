"use strict"
let $ = id => document.getElementById(id);

window.onload = () => $('reset-passwd').onclick = resetPasswd;

function validateInput() {
 
  let validity = true;

  function isEmpty(field) {
    if ($(field).value == "") {
      validity = false;
    };
  };

  isEmpty('email');
  isEmpty('passwd')
 
  return validity;
};

function resetPasswd() {
  if (validateInput()) {
    let user = localStorage.getItem($('email').value);
    if (user == null) {
      return
    };
    location.href = "login.html";
    let passwd = {passwd: $('passwd').value};
    localStorage.setItem($('email').value, JSON.stringify(passwd));
  };
};
