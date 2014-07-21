function Property(address) {
  this.address = address;
  this.units = [];
}

Property.prototype.setManager = function(person) {
  // set this.manager to person
  this.manager = person;
};

Property.prototype.getManager = function(){
  // return this.manager 
  return this.manager
};

Property.prototype.addTenant = function(unit, tenant) {
  // add tenant but check to make sure there
  // is a manager first and a tenant has 2 references
  if (this.manager = null){ 
  	return "There is no manager for this unit";
  }
  else{
  	Tenant.prototype.push(this.units);

  }
};

Property.prototype.removeTenant = function(unit, tenant) {
  // remove tenant
  if (this.tenant = null){
  	return "There are no tenants in this unit.";
  else {
  	this.units.pop(this.tenant);
  }
  }
};

Property.prototype.availableUnits = function(){
  // return num of units available
  var numEmptyUnits = [];
  if (this.units = null){
  	return 
  }
}

Property.prototype.rentedUnits = function(){
  // return rented units
}


module.exports = Property;
