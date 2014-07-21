var person = require("./person");

function Manager(name, contact) {
  // set name and contact
  this.name = name;
  this.contact = contact;
  this.properties = [];
}

Manager.prototype.addProperty = function(property) {
  // add property from properties
  this.properties.push(this.property);
};

Manager.prototype.removeProperty = function(property) {
  // remove properties
  this.properties.pop(this.property);
};

module.exports = Manager;