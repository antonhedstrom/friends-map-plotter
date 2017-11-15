var geo = require('./geolocation');

geo().then(pos => {
  var target = document.getElementById('geo');
  target.innerHTML = `Long: ${pos.long}, Lat: ${pos.lat}`;
});

