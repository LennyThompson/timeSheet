"use strict";
var FirebaseTimestamp_1 = require("../reference/FirebaseTimestamp");
var AlertType_1 = require("../enums/AlertType");
var AlertStatus_1 = require("../enums/AlertStatus");
var firebase_1 = require("firebase");
var Alert = (function () {
    function Alert() {
        this.m_created = new FirebaseTimestamp_1.FirebaseTimestamp();
        this.m_updated = new FirebaseTimestamp_1.FirebaseTimestamp();
        this.m_alertType = AlertType_1.AlertType.defaultValue;
        this.m_alertStatus = AlertStatus_1.AlertStatus.defaultValue;
        this.m_name = "";
        this.m_description = "";
        this.m_balertTypeUpdated = true;
        this.m_balertStatusUpdated = true;
        this.m_bnameUpdated = true;
        this.m_bdescriptionUpdated = true;
    }
    Object.defineProperty(Alert.prototype, "created", {
        get: function () {
            return this.m_created;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Alert.prototype, "updated", {
        get: function () {
            return this.m_updated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Alert.prototype, "alertType", {
        get: function () {
            return this.m_alertType;
        },
        set: function (alertType) {
            this.m_alertType = alertType;
            this.m_balertTypeUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Alert.prototype, "alertStatus", {
        get: function () {
            return this.m_alertStatus;
        },
        set: function (alertStatus) {
            this.m_alertStatus = alertStatus;
            this.m_balertStatusUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Alert.prototype, "name", {
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
    Object.defineProperty(Alert.prototype, "description", {
        get: function () {
            return this.m_description;
        },
        set: function (description) {
            this.m_description = description;
            this.m_bdescriptionUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Alert.prototype.getUpdate = function () {
        var objUpdated = {};
        var bUpdated = false;
        if (this.m_balertTypeUpdated) {
            objUpdated["alertType"] = this.m_alertType.name;
        }
        if (this.m_balertStatusUpdated) {
            objUpdated["alertStatus"] = this.m_alertStatus.name;
        }
        if (this.m_bnameUpdated) {
            objUpdated["name"] = this.m_name;
        }
        if (this.m_bdescriptionUpdated) {
            objUpdated["description"] = this.m_description;
        }
        if (bUpdated) {
            objUpdated["updated"] = firebase_1.database.ServerValue.TIMESTAMP;
        }
        return objUpdated;
    };
    Alert.prototype.toFirebase = function () {
        if (this.m_created.timeStamp === 0) {
            this.m_created.setUpdate();
        }
        if (this.m_updated.timeStamp === 0) {
            this.m_updated.setUpdate();
        }
        var objFirebase = {
            created: this.m_created.timeStamp,
            updated: this.m_updated.timeStamp,
            alertType: this.m_alertType.name,
            alertStatus: this.m_alertStatus.name,
            name: this.m_name,
            description: this.m_description
        };
        return objFirebase;
    };
    Alert.prototype.setSaved = function () {
        this.m_balertTypeUpdated = false;
        this.m_balertStatusUpdated = false;
        this.m_bnameUpdated = false;
        this.m_bdescriptionUpdated = false;
    };
    Alert.fromFirebase = function (firebaseObj) {
        var objAlert = new Alert();
        objAlert.m_created = new FirebaseTimestamp_1.FirebaseTimestamp(firebaseObj.created);
        objAlert.m_updated = new FirebaseTimestamp_1.FirebaseTimestamp(firebaseObj.updated);
        objAlert.m_alertType = AlertType_1.AlertType[firebaseObj.alertType];
        objAlert.m_alertStatus = AlertStatus_1.AlertStatus[firebaseObj.alertStatus];
        objAlert.m_name = firebaseObj.name;
        objAlert.m_description = firebaseObj.description;
        objAlert.setSaved();
        return objAlert;
    };
    return Alert;
}());
exports.Alert = Alert;
//# sourceMappingURL=Alert.js.map