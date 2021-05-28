//uc1 creating a class

class AddressBook {
  //constructor
  constructor(...params) {
    this.firstName = params[0];
    this.lastName = params[1];
    this.address = params[2];
    this.city = params[3];
    this.state = params[4];
    this.zip = params[5];
    this.phoneNumber = params[6];
    this.email = params[7];
  }

  //uc2 validating all the details
  // get and set for firstname
  //first letter should be capital and min 3 letters
  get firstName() {
    return this._firstName;
  }
  set firstName(firstName) {
    let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
    // test returns a boolen value
    if (nameRegex.test(firstName)) this._firstName = firstName;
    else throw "Invalid first Name";
  }

  //get and set for lastname
  //first letter should be capital and min 3 letters
  get lastName() {
    return this._lastName;
  }
  set lastName(lastName) {
    let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
    // test returns a boolen value
    if (nameRegex.test(lastName)) this._lastName = lastName;
    else throw "Invalid  last Name";
  }

  //get and set for address
  //minimum four characters
  get address() {
    return this._address;
  }
  set address(address) {
    let addressRegex = RegExp("^[a-zA-Z0-9_]+( [a-zA-Z0-9_]+)*$");
    if (addressRegex.test(address)) this._address = address;
    else throw "Invalid address ";
  }

  //get and set for city
  //minimum four characters
  get city() {
    return this._city;
  }
  set city(city) {
    let cityRegex = RegExp("^[a-zA-Z0-9_]+( [a-zA-Z0-9_]+)*$");
    if (cityRegex.test(city)) this._city = city;
    else throw "Invalid city ";
  }

  //get and set for state
  //minimum four characters
  get state() {
    return this._state;
  }
  set state(state) {
    let stateRegex = RegExp("^[a-zA-Z0-9_]+( [a-zA-Z0-9_]+)*$");
    if (stateRegex.test(state)) this._state = state;
    else throw "Invalid state";
  }

  //get and set for zip
  get zip() {
    return this._zip;
  }
  set zip(zip) {
    let zipRegex = RegExp("^[0-9]{6}$");
    if (zipRegex.test(zip)) this._zip = zip;
    else throw "Invalid zip ";
  }

  //get and set for phoneNumber
  //phone number should be of form 9988776655
  get phoneNumber() {
    return this._phoneNumber;
  }
  set phoneNumber(phoneNumber) {
    let phoneRegex = RegExp("^[1-9]{1}[0-9]{9}$");
    if (phoneRegex.test(phoneNumber)) this._phoneNumber = phoneNumber;
    else throw "Invalid phone number";
  }

  // get and set for email
  //ac.xyz@gmail.com.in .xyz-optional  .in-optional
  get email() {
    return this._email;
  }
  set email(email) {
    let emailRegex = RegExp(
      "^([a-z0-9A-Z])+([.]?[a-z0-9A-Z]+)*[@]{1}[a-z0-9A-Z]+[.]{1}[a-zA-Z]{2,}([.]{1}[a-z]{2,})?$"
    );
    if (emailRegex.test(email)) this._email = email;
    else throw "Invalid email";
  }

  //defining to string method
  toString() {
    return (
      "first Name: " +
      this.firstName +
      ", last Name: " +
      this.lastName +
      "\nAddress: " +
      this.address +
      ", City: " +
      this.city +
      ", State: " +
      this.state +
      "  Zip: " +
      this.zip +
      ", \nPhoneNumber: " +
      this.phoneNumber +
      ", email: " +
      this.email
    );
  }
}
//creating an instance and giving contact details
try {
  let contactDetailsArray = new Array();
  contactDetailsArray.push(
    new AddressBook(
      "Shruti",
      "Verma",
      "Awas Vikas",
      "Kanpur",
      "Uttar Pradesh",
      208017,
      7376563320,
      "shrutiverma3105@gmail.com"
    )
  );
  contactDetailsArray.push(
    new AddressBook(
      "Roma",
      "Salvador",
      "nearhighway",
      "Mumbai",
      "Maharashtra",
      128755,
      8587087642,
      "roma@gmail.com"
    )
  );
  contactDetailsArray.push(
    new AddressBook(
      "Daisy",
      "Alava",
      "fourstreet",
      "Paris",
      "France",
      871258,
      6587321451,
      "daisy@gmail.com"
    )
  );
  contactDetailsArray.push(
    new AddressBook(
      "Troy",
      "Tom",
      "alaska",
      "Zurich",
      "Switzerland",
      "128213",
      "8966541252",
      "troy@gmail.com"
    )
  );
  //printing array before updating
  contactDetailsArray.forEach((contact) => console.log(contact.toString()));

  // uc4 finding index using name
  let index = contactDetailsArray.findIndex(
    (contact) => contact.firstName == "Roma"
  );
  //updating the contact detail
  contactDetailsArray[index].zip = "121003";

  //displaying contacts after being updated
  console.log("contacts after being updated: ");
  contactDetailsArray.forEach((contact) => console.log(contact.toString()));
} catch (e) {
  console.log(e);
}
