import {AngularFireModule, AuthMethods, AuthProviders } from "angularfire2/angularfire2";
import AuthProvider = firebase.auth.AuthProvider;

const firebaseConfig = {
    apiKey: "AIzaSyDRC967G6VYdiZLjOgLh6l6fabmDk_k9WI",
    authDomain: "mydodgyapp.firebaseapp.com",
    databaseURL: "https://mydodgyapp.firebaseio.com",
    storageBucket: "mydodgyapp.appspot.com",
};

const firebaseAuthConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password,
    remember: "default"
};

export const FirebaseModule = AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig);