function Contacts(name, lastname,) {
  this.name = name;
  this.lastname = lastname;
}

let contacts = [
  new Contacts("JUAN", "RODRIGUEZ"),
  new Contacts("jHON", "CARMELO"),
  new Contacts("CAMILO", "CIFUENTEZ"),
];

function addContact(contact = new Contacts()) {
  contacts.push(contact);
  console.log(contacts);
}

