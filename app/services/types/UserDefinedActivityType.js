"use strict";
var FirebaseTimestamp_1 = require("../reference/FirebaseTimestamp");
var ActivityType_1 = require("../enums/ActivityType");
var firebase_1 = require("firebase");
var UserDefinedActivityType = (function () {
    function UserDefinedActivityType() {
        this.m_created = new FirebaseTimestamp_1.FirebaseTimestamp();
        this.m_updated = new FirebaseTimestamp_1.FirebaseTimestamp();
        this.m_activityGroup = ActivityType_1.ActivityType.defaultValue;
        this.m_name = "";
        this.m_value = 0;
        this.m_display = "";
        this.m_icon = "";
        this.m_bactivityGroupUpdated = true;
        this.m_bnameUpdated = true;
        this.m_bvalueUpdated = true;
        this.m_bdisplayUpdated = true;
        this.m_biconUpdated = true;
    }
    Object.defineProperty(UserDefinedActivityType.prototype, "created", {
        get: function () {
            return this.m_created;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserDefinedActivityType.prototype, "updated", {
        get: function () {
            return this.m_updated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserDefinedActivityType.prototype, "activityGroup", {
        get: function () {
            return this.m_activityGroup;
        },
        set: function (activityGroup) {
            this.m_activityGroup = activityGroup;
            this.m_bactivityGroupUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserDefinedActivityType.prototype, "name", {
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
    Object.defineProperty(UserDefinedActivityType.prototype, "value", {
        get: function () {
            return this.m_value;
        },
        set: function (value) {
            this.m_value = value;
            this.m_bvalueUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserDefinedActivityType.prototype, "display", {
        get: function () {
            return this.m_display;
        },
        set: function (display) {
            this.m_display = display;
            this.m_bdisplayUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserDefinedActivityType.prototype, "icon", {
        get: function () {
            return this.m_icon;
        },
        set: function (icon) {
            this.m_icon = icon;
            this.m_biconUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    UserDefinedActivityType.prototype.getUpdate = function () {
        var objUpdated = {};
        var bUpdated = false;
        if (this.m_bactivityGroupUpdated) {
            objUpdated["activityGroup"] = this.m_activityGroup.name;
        }
        if (this.m_bnameUpdated) {
            objUpdated["name"] = this.m_name;
        }
        if (this.m_bvalueUpdated) {
            objUpdated["value"] = this.m_value;
        }
        if (this.m_bdisplayUpdated) {
            objUpdated["display"] = this.m_display;
        }
        if (this.m_biconUpdated) {
            objUpdated["icon"] = this.m_icon;
        }
        if (bUpdated) {
            objUpdated["updated"] = firebase_1.database.ServerValue.TIMESTAMP;
        }
        return objUpdated;
    };
    UserDefinedActivityType.prototype.toFirebase = function () {
        if (this.m_created.timeStamp === 0) {
            this.m_created.setUpdate();
        }
        if (this.m_updated.timeStamp === 0) {
            this.m_updated.setUpdate();
        }
        var objFirebase = {
            created: this.m_created.timeStamp,
            updated: this.m_updated.timeStamp,
            activityGroup: this.m_activityGroup.name,
            name: this.m_name,
            value: this.m_value,
            display: this.m_display,
            icon: this.m_icon
        };
        return objFirebase;
    };
    UserDefinedActivityType.prototype.setSaved = function () {
        this.m_bactivityGroupUpdated = false;
        this.m_bnameUpdated = false;
        this.m_bvalueUpdated = false;
        this.m_bdisplayUpdated = false;
        this.m_biconUpdated = false;
    };
    UserDefinedActivityType.fromFirebase = function (firebaseObj) {
        var objUserDefinedActivityType = new UserDefinedActivityType();
        objUserDefinedActivityType.m_created = new FirebaseTimestamp_1.FirebaseTimestamp(firebaseObj.created);
        objUserDefinedActivityType.m_updated = new FirebaseTimestamp_1.FirebaseTimestamp(firebaseObj.updated);
        objUserDefinedActivityType.m_activityGroup = ActivityType_1.ActivityType[firebaseObj.activityGroup];
        objUserDefinedActivityType.m_name = firebaseObj.name;
        objUserDefinedActivityType.m_value = firebaseObj.value;
        objUserDefinedActivityType.m_display = firebaseObj.display;
        objUserDefinedActivityType.m_icon = firebaseObj.icon;
        objUserDefinedActivityType.setSaved();
        return objUserDefinedActivityType;
    };
    return UserDefinedActivityType;
}());
exports.UserDefinedActivityType = UserDefinedActivityType;
//# sourceMappingURL=UserDefinedActivityType.js.map