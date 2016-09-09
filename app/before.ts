import "./polyfills";
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from "@angular/platform-browser-dynamic/testing";
import {TestBed} from "@angular/core/testing";
import { initializeApp } from "firebase";

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

initializeApp(firebaseConfig);

const chai = require("chai");
chai.use(require("chai-as-promised"));
chai.use(require("chai-dom"));
chai.use(require("sinon-chai"));
require("dom4");
require("zone.js/dist/async-test");
require("zone.js/dist/fake-async-test");