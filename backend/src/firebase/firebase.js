const admin = require("firebase-admin");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.FB_AUTHDOMAIN,
  projectId: process.env.FB_CERT_PROJECT_ID,
  storageBucket: process.env.FB_STORAGE_BUCKET,
  messagingSenderId: process.env.FB_MESSAGINGSENDERID,
  appId: process.env.FB_APPID,
  measurementId: process.env.FB_MEASUREMENT_ID,
};
const config = require("../config/config");

// Initialize Firebase
const app = admin.initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const auth = admin.auth();

module.exports = {
  //app: app,
  auth: auth,
  //analytics: analytics,
};
