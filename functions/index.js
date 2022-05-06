const functions = require("firebase-functions");
const express = require("express");

const app = express();

app.get("/test", (req, res) => {
  res.send("this is actually working 🔥");
});

exports.app = functions.https.onRequest(app);
// replaces our app.listen port function( this is the cloud function)
// after exports. the function name here has to be the same as the function name in our firbase.json file.

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
