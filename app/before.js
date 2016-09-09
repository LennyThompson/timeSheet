"use strict";
require("./polyfills");
var testing_1 = require("@angular/platform-browser-dynamic/testing");
var testing_2 = require("@angular/core/testing");
var firebase_1 = require("firebase");
testing_2.TestBed.initTestEnvironment(testing_1.BrowserDynamicTestingModule, testing_1.platformBrowserDynamicTesting());
var firebaseConfig = {
    apiKey: "AIzaSyDRC967G6VYdiZLjOgLh6l6fabmDk_k9WI",
    authDomain: "mydodgyapp.firebaseapp.com",
    databaseURL: "https://mydodgyapp.firebaseio.com",
    storageBucket: "mydodgyapp.appspot.com",
};
firebase_1.initializeApp(firebaseConfig);
var chai = require("chai");
chai.use(require("chai-as-promised"));
chai.use(require("chai-dom"));
chai.use(require("sinon-chai"));
require("dom4");
require("zone.js/dist/async-test");
require("zone.js/dist/fake-async-test");
//# sourceMappingURL=before.js.map