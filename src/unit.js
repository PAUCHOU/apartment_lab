function Unit (number, building, sqft, rent) {
  // set params above using this
  this.tenant = null;
  this.number = number;
  this.building = building;
  this.sqft = sqft;
  this.rent = rent;
}

Unit.prototype.available = function(){
  // check for tenant
  var available = function(){
  	if (this.tenant = null){
  		return "This Unit is available.";
  	else{
  		return this.number, this.building, this.sqft, this.rent;
  	}
  	}
  }
}



