import { initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

export const firebaseConfig = {
    apiKey: "AIzaSyArjOP6iQCljgCkK4vAABikKm64r11zhKU",
    authDomain: "angular-login-c0d62.firebaseapp.com",
    projectId: "angular-login-c0d62",
    storageBucket: "angular-login-c0d62.appspot.com",
    messagingSenderId: "679248623642",
    appId: "1:679248623642:web:b3c506b6d32963cc65f9a3",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
console.log(firebaseConfig);
// Read Data 



// Write Data 

/*const registerForm = document.getElementById('register');
registerForm.addEventListener("submit", (e) => {

    e.preventDefault();
})*/