"use strict";
var firebase_1 = require("firebase");
var Client = (function () {
    function Client() {
    }
    Client.prototype.getUpdate = function () {
        var objUpdated = {};
        var bUpdated = false;
        if (bUpdated) {
            objUpdated["updated"] = firebase_1.database.ServerValue.TIMESTAMP;
        }
        return objUpdated;
    };
    Client.prototype.toFirebase = function () {
        var objFirebase = {};
        return objFirebase;
    };
    Client.prototype.setSaved = function () {
    };
    Client.fromFirebase = function (firebaseObj) {
        var objClient = new Client();
        objClient.setSaved();
        return objClient;
    };
    return Client;
}());
exports.Client = Client;
//# sourceMappingURL=Client.js.map