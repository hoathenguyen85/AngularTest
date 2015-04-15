function Location(json) {
 var json = json || {};
 this.address_components = json.results[0].address_components;
 this.formatted_address = json.results[0].formatted_address;
 this.lat = json.results[0].geometry.location.lat;
 this.lng = json.results[0].geometry.location.lng;
}
