import firebase from 'firebase/app';
import 'firebase/auth';
import "dotenv"
//dotenv config


const app = firebase.initializeApp({
    FB_API_KEY = process.env.FB_API_KEY,
    FB_AUTH_DOMAIN = process.env.FB_AUTH_DOMAIN,
    FB_PROJECT_ID = process.env.FB_PROJECT_ID,
    FB_STORAGE_BUCKET = process.env.FB_STORAGE_BUCKET,
    FB_MESSAGING_SENDER_ID = process.env.FB_MESSAGING_SENDER_ID,
    FB_APP_ID = process.env.FB_APP_ID,
    FB_MEASUREMENT_ID = process.env.FB_MEASUREMENT_ID,
});
export const auth = app.auth();
export default app