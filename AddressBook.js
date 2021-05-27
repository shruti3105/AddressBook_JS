//UC2: ensure valid contacts are added
const firstname_regex = RegExp("^[A-Z]{1}[a-z]{2,}$");
const lastname_regex = RegExp("^[A-Z]{1}[a-z]{2,}$");
const address_regex = RegExp("^[a-zA-z]{4,}$");
const city_regex = RegExp("^[a-zA-z]{4,}$");
const state_regex = RegExp("^[a-zA-z]{4,}$");
const zip_regex = RegExp("^[1-9]{1}[0-9]{2}[ ]?[0-9]{3}$");
const phoneno_regex = RegExp("[0]{1}\\s|[+][9]{1}[1]{1}\\s)?[6-9]{1}[0-9]{9}");
const email_regex = RegExp(
  "^[a-zA-Z0-9]+([._+-][0-9a-zA-Z]+)*@[a-zA-Z0-9]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2,4})?$"
);

class Contact {
  firstName;
  lastName;
  address;
  city;
  state;
  zip;
  phoneNumber;
  email;

  constructor(
    firstName,
    lastName,
    address,
    city,
    state,
    zip,
    phoneNumber,
    email
  ) {
    if (!firstname_regex.test(firstName)) {
      console.log("Invalid input!");
    } else {
      this.firstName = firstName;
    }
    if (!lastname_regex.test(lastName)) {
      console.log("Invalid input!");
    } else {
      this.lastName = lastName;
    }
    if (!address_regex.test(address)) {
      console.log("Invalid input!");
    } else {
      this.address = address;
    }
    if (!city_regex.test(city)) {
      console.log("Invalid input!");
    } else {
      this.city = city;
    }
    if (!state_regex.test(state)) {
      console.log("Invalid input!");
    } else {
      this.state = state;
    }
    if (!zip_regex.test(zip)) {
      console.log("Invalid input!");
    } else {
      this.zip = zip;
    }
    if (!phoneno_regex.test(phoneNumber)) {
      console.log("Invalid input!");
    } else {
      this.phoneNumber = phoneNumber;
    }
    if (!email_regex.test(email)) {
      console.log("Invalid input!");
    } else {
      this.email = email;
    }
  }

  toString() {
    return (
      "Firstname: " +
      this.firstName +
      ", Lastname: " +
      this.lastName +
      ", Address: " +
      this.address +
      ", City: " +
      this.city +
      ", State: " +
      this.state +
      ", Zip: " +
      this.zip +
      ", Phone Number: " +
      this.phoneNumber +
      ", Email: " +
      this.email
    );
  }
}

//UC1: create  contact
let person = new Contact(
  "Shruti",
  "Verma",
  "Awas Vikas-1",
  "Kanpur",
  "Uttar Pradesh",
  208017,
  7376563320,
  "shrutiverma3105@gmail.com"
);
console.log(person.toString());
