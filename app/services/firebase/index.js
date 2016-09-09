"use strict";
var angularfire2_1 = require("angularfire2/angularfire2");
var firebaseConfig = {
    apiKey: "AIzaSyDRC967G6VYdiZLjOgLh6l6fabmDk_k9WI",
    authDomain: "mydodgyapp.firebaseapp.com",
    databaseURL: "https://mydodgyapp.firebaseio.com",
    storageBucket: "mydodgyapp.appspot.com",
};
var firebaseAuthConfig = {
    provider: angularfire2_1.AuthProviders.Password,
    method: angularfire2_1.AuthMethods.Password,
    remember: "default"
};
exports.FirebaseModule = angularfire2_1.AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig);
//# sourceMappingURL=index.js.map