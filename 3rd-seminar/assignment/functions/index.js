const admin = require("firebase-admin");
const serviceAccount = require("./wesopt29-uju-firebase-adminsdk-rvqlj-9e5b9187ef");
const dotenv = require("dotenv");

dotenv.config();

let firebase;
if (admin.apps.length === 0) {
  firebase = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
} else {
  firebase = admin.app();
}

module.exports = {
  api: require("./api"),
};