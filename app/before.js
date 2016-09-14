"use strict";
require("./polyfills");
var testing_1 = require("@angular/platform-browser-dynamic/testing");
var testing_2 = require("@angular/core/testing");
// import { initializeApp } from "firebase";
var angularfire2_1 = require("angularfire2");
testing_2.TestBed.initTestEnvironment(testing_1.BrowserDynamicTestingModule, testing_1.platformBrowserDynamicTesting());
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
// initializeApp(firebaseConfig);
var FirebaseModule = angularfire2_1.AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig);
var chai = require("chai");
chai.use(require("chai-as-promised"));
chai.use(require("chai-dom"));
chai.use(require("sinon-chai"));
require("dom4");
require("zone.js/dist/async-test");
require("zone.js/dist/fake-async-test");
//# sourceMappingURL=before.js.map