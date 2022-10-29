"use strict";
let $ = id => document.getElementById(id);

window.onload = function() {
  $('submit').onclick = qualify;
};

function validateInput() {
 
  let validity = true;

  function isEmpty(field, errorField) {
    if ($(field).value == "") {
      $(errorField).firstChild.nodeValue = "Field is required.";
      validity = false;
    } else { $(errorField).firstChild.nodeValue = "" }
  };

  isEmpty("email", "email-error");
  isEmpty("email-check", "email-check-error");
  isEmpty("first-name", "first-name-error");
  isEmpty("last-name", "last-name-error");
  isEmpty("city", "city-error");
  isEmpty("state", "state-error");
  isEmpty("zip-code", "zip-error");
  isEmpty("income", "income-error");
  isEmpty("ssn", "ssn-error");

  if ($("email-check").value != $("email").value) {
    $("email-check-error").firstChild.nodeValue = "Emails do not match";
    validity = false;
  };

  if ($("tos").checked == false) {
    $("tos-error").firstChild.nodeValue = "Please accept terms of service";
    validity = false;
  } else { $("tos-error").firstChild.nodeValue = "" }

  return validity;

};

function qualify() {
  let income = $("income").value;
  if (validateInput() && income >= 45000) {
    alert("Congratulations, are prequalified for a loan. A representative will contact you soon.");
  } else if (validateInput() && income < 45000) {
    alert("We're sorry, you do not qualify for a loan at this time.");
  };
};
