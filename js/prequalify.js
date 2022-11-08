"use strict";
let $ = id => document.getElementById(id);

window.onload = function() {
  $('submit').onclick = qualify;
};

function validateInput() {
 
  let validity = true;
  let header = "";
  const errorMsg = "Please review your input and fill in all fields";
  let html = "";

  let email = $('email').value;
  let emailCheck = $('email-check').value;
  let firstName = $('first-name').value;
  let lastName = $('last-name').value;
  let city = $('city').value;
  let state = $('state').value;
  let zipCode = $('zip-code').value;
  let income = $('income').value;
  let ssn = $('ssn').value;
  let tosCheck = $('tos').checked;

  if (email == "") {
    header = errorMsg;
    email = "<span>Field is required</span>"
    validity = false;
  };

  if (firstName == "") {
    header = errorMsg;
    firstName = "<span>Field is required</span>"
    validity = false;
  };

  if (lastName == "") {
    header = errorMsg;
    lastName = "<span>Field is required</span>"
    validity = false;
  };

  if (city == "") {
    header = errorMsg;
    city = "<span>Field is required</span>"
    validity = false;
  };

  if (state == "") {
    header = errorMsg;
    state = "<span>Field is required</span>"
    validity = false;
  };

  if (zipCode == "") {
    header = errorMsg;
    zipCode = "<span>Field is required</span>"
    validity = false;
  };

  if (income == "") {
    header = errorMsg;
    income = "<span>Field is required</span>"
    validity = false;
  };

  if (ssn == "") {
    header = errorMsg;
    ssn = "<span>Field is required</span>"
    validity = false;
  };

  if (emailCheck != email) {
    header = errorMsg;
    emailCheck = "<span>Emails don't match</span>";
    validity = false;
  };

  if (tosCheck == false) {
    header = errorMsg;
    tosCheck = "<span>Please accept terms of service</span>";
    validity = false;
  };

  if ( header == errorMsg ) {
    $("registration-header").firstChild.nodeValue = header;
    html += `<tr><td>Email:</td><td>${email}</td></tr>`;
    html += `<tr><td>Email Check:</td><td>${emailCheck}</td></tr>`;
    html += `<tr><td>First Name:</td><td>${firstName}</td></tr>`;
    html += `<tr><td>Last Name:</td><td>${lastName}</td></tr>`;
    html += `<tr><td>City:</td><td>${city}</td></tr>`;
    html += `<tr><td>State:</td><td>${state}</td></tr>`;
    html += `<tr><td>Zip Code:</td><td>${zipCode}</td></tr>`;
    html += `<tr><td>Income:</td><td>${income}</td></tr>`;
    html += `<tr><td>SSN:</td><td>${ssn}</td></tr>`;
    html += `<tr><td>TOS:</td><td>${tosCheck}</td></tr>`;
  };

  $('registration-info').innerHTML = html;

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
