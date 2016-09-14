import "./polyfills";
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from "@angular/platform-browser-dynamic/testing";
import {TestBed} from "@angular/core/testing";
// import { initializeApp } from "firebase";
import {AngularFireModule, AuthMethods, AuthProviders} from "angularfire2";

TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
);

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
// initializeApp(firebaseConfig);
const FirebaseModule = AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig);

const chai = require("chai");
chai.use(require("chai-as-promised"));
chai.use(require("chai-dom"));
chai.use(require("sinon-chai"));
require("dom4");
require("zone.js/dist/async-test");
require("zone.js/dist/fake-async-test");