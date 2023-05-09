function Contacts(id, name, lastname, phone, address) {
  this.id = id;
  this.name = name;
  this.lastname = lastname;
  this.phone = phone;
  this.address = address;

}

let contacts = [
  new Contacts(1, "JUAN", "RODRIGUEZ", 3225424074, "cra 40 #6-61, Envigado"),
  new Contacts(2, "jHON", "CARMELO", 3054895684, "clle 2b 61, itagui"),
  new Contacts(3, "CAMILO", "CIFUENTEZ", 3254584269, "cra 80 #2-69, medellin"),
];

function addContact(contact = new Contacts()) {
  contacts.push(contact);
  console.log(contacts);
}

addContact(new Contacts(4, "Chris", "Castaño", 3015089658, "Calle 4B #101-58, Medellin"));
  

function deleteContact(id) {
  contacts.splice(id - 1, 1);
}

deleteContact(2, contacts);

function viewContact() {
  console.log(contacts);
  }

  viewContact();