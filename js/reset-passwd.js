"use strict"
let $ = id => document.getElementById(id);

window.onload = () => $('reset-passwd').onclick = resetPasswd;

function validateInput() {
 
  let validity = true;

  function isEmpty(field, errorField) {
    if ($(field).value == "") {
      $(errorField).firstChild.nodeValue = "Field is required.";
      validity = false;
    } else { $(errorField).firstChild.nodeValue = "" }
  };

  isEmpty('email', 'email-error');
  isEmpty('passwd', 'passwd-error')
  
  return validity;
};

function resetPasswd() {
  if (validateInput()) {
    let user = localStorage.getItem($('email').value);
    if (user == null) {
      $('email-error').firstChild.nodeValue = "This user does not exist."
      return
    };
    location.href = "login.html";
    let passwd = {passwd: $('passwd').value};
    localStorage.setItem($('email').value, JSON.stringify(passwd));
  };
};