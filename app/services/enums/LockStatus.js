// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Sep 06 21:07:01 AEST 2016
"use strict";
var lodash_1 = require("lodash");
var LockStatus = (function () {
    function LockStatus(name, value, display, icon, group) {
        this.name = name;
        this.value = value;
        this.display = display;
        this.icon = icon;
        this.group = group;
    }
    Object.defineProperty(LockStatus, "defaultValue", {
        get: function () {
            return LockStatus.system_locked;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LockStatus, "unlocked", {
        get: function () {
            return LockStatus.allValues.unlocked;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LockStatus, "user_locked", {
        get: function () {
            return LockStatus.allValues.user_locked;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LockStatus, "system_locked", {
        get: function () {
            return LockStatus.allValues.system_locked;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LockStatus, "unknown", {
        get: function () {
            return LockStatus.allValues.unknown;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LockStatus, "allValues", {
        get: function () {
            return {
                unlocked: new LockStatus("unlocked", 1, "Unlocked", "null", []),
                user_locked: new LockStatus("user_locked", 2, "Locked By User", "null", []),
                system_locked: new LockStatus("system_locked", 3, "Locked By System", "null", []),
                unknown: new LockStatus("unknown", 100, "Unknown", "null", [])
            };
        },
        enumerable: true,
        configurable: true
    });
    LockStatus.getValuesForContext = function (strContext) {
        var listReturn = [];
        Object.keys(LockStatus.allValues).forEach(function (key) {
            if (LockStatus.allValues[key].group.length === 0 || lodash_1.findIndex(LockStatus.allValues[key].group, strContext) >= 0) {
                listReturn.push(LockStatus.allValues[key]);
            }
        });
        return listReturn;
    };
    return LockStatus;
}());
exports.LockStatus = LockStatus;
//# sourceMappingURL=LockStatus.js.map