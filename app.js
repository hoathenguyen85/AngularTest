l = '';

$(document).ready(function() {
  $.ajax(
    {
      beforeSend: function(xhr) {
        xhr.setRequestHeader("X-Mashape-Key", "Aq8RN3VWDnmshWqAaThekfgTPEbap1a3Tn3jsnBYV3fjrNDyQZ");
      },
      url: 'https://michele-zonca-google-geocoding.p.mashape.com/geocode/json',
      data: {
        address: '48 Wall Street, New York City, New York',
        sensor: 'true'
      }
    }).done(function(r){
      console.log(r);
      l = new Location(r);

      console.log(l);
  })
});
