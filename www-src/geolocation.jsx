
function getLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      return reject('Geolocation is not supported by this browser.');
    }

    navigator.geolocation.getCurrentPosition(position => {
      resolve({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      })
    });
  });
}

module.exports = getLocation;
