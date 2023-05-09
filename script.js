function Contacts(id, name, lastname, phone, address) {
  this.id = id;
  this.name = name;
  this.lastname = lastname;
  this.phone = phone;
  this.address = address;

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

function deleteContact(id) {
  contacts.splice(id - 1, 1);
}

function viewContact() {
  console.log(contacts);
  }

  viewContact();