const googleMaps = require('@google/maps');

const config = require('./config');

const googleMapsClient = googleMaps.createClient({
  key: config.GOOGLE_MAPS_API_KEY,
  Promise: Promise // 'Promise' is the native constructor.
});

function searchAddress(address) {
  return googleMapsClient.geocode({
    address
  }).asPromise().then(response => {
    return response.json.results[0];
  }).catch((err) => {
    console.log(err);
  });
}

module.exports = {
  search: searchAddress
};
