"use strict";
var FirebaseTimestamp_1 = require("../reference/FirebaseTimestamp");
var firebase_1 = require("firebase");
var User = (function () {
    function User() {
        this.m_created = new FirebaseTimestamp_1.FirebaseTimestamp();
        this.m_updated = new FirebaseTimestamp_1.FirebaseTimestamp();
        this.m_name = "";
        this.m_surname = "";
        this.m_email = "";
        this.m_bnameUpdated = true;
        this.m_bsurnameUpdated = true;
        this.m_bemailUpdated = true;
    }
    Object.defineProperty(User.prototype, "created", {
        get: function () {
            return this.m_created;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "updated", {
        get: function () {
            return this.m_updated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this.m_name;
        },
        set: function (name) {
            this.m_name = name;
            this.m_bnameUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "surname", {
        get: function () {
            return this.m_surname;
        },
        set: function (surname) {
            this.m_surname = surname;
            this.m_bsurnameUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "email", {
        get: function () {
            return this.m_email;
        },
        set: function (email) {
            this.m_email = email;
            this.m_bemailUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    User.prototype.getUpdate = function () {
        var objUpdated = {};
        var bUpdated = false;
        if (this.m_bnameUpdated) {
            objUpdated["name"] = this.m_name;
        }
        if (this.m_bsurnameUpdated) {
            objUpdated["surname"] = this.m_surname;
        }
        if (this.m_bemailUpdated) {
            objUpdated["email"] = this.m_email;
        }
        if (bUpdated) {
            objUpdated["updated"] = firebase_1.database.ServerValue.TIMESTAMP;
        }
        return objUpdated;
    };
    User.prototype.toFirebase = function () {
        if (this.m_created.timeStamp === 0) {
            this.m_created.setUpdate();
        }
        if (this.m_updated.timeStamp === 0) {
            this.m_updated.setUpdate();
        }
        var objFirebase = {
            created: this.m_created.timeStamp,
            updated: this.m_updated.timeStamp,
            name: this.m_name,
            surname: this.m_surname,
            email: this.m_email
        };
        return objFirebase;
    };
    User.prototype.setSaved = function () {
        this.m_bnameUpdated = false;
        this.m_bsurnameUpdated = false;
        this.m_bemailUpdated = false;
    };
    User.fromFirebase = function (firebaseObj) {
        var objUser = new User();
        objUser.m_created = new FirebaseTimestamp_1.FirebaseTimestamp(firebaseObj.created);
        objUser.m_updated = new FirebaseTimestamp_1.FirebaseTimestamp(firebaseObj.updated);
        objUser.m_name = firebaseObj.name;
        objUser.m_surname = firebaseObj.surname;
        objUser.m_email = firebaseObj.email;
        objUser.setSaved();
        return objUser;
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map