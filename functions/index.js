const functions = require("firebase-functions");
const axios = require("axios");
// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
const API_KEY = "AIzaSyCEToc_is6X4I38yJ7IxDauTZvJQk4oOxk";

exports.placesapi = functions.https.onCall(async (data, context) => {
  const input = data.query;
  const url = `https://maps.googleapis.com/maps/api/place/queryautocomplete/json?input=${input}&types=geocode&key=${API_KEY}`;
  try {
    const info = await axios.get(url);
    return info.data;
  } catch (error) {
    return (error);
  }
});
