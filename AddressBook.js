//UC1: create a contact
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
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.phoneNumber = phoneNumber;
    this.email = email;
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
