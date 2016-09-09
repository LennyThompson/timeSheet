// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Sep 06 21:07:01 AEST 2016
"use strict";
var lodash_1 = require("lodash");
var AlertStatus = (function () {
    function AlertStatus(name, value, display, icon, group) {
        this.name = name;
        this.value = value;
        this.display = display;
        this.icon = icon;
        this.group = group;
    }
    Object.defineProperty(AlertStatus, "defaultValue", {
        get: function () {
            return AlertStatus.acknowledged;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertStatus, "acknowledged", {
        get: function () {
            return AlertStatus.allValues.acknowledged;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertStatus, "ignored", {
        get: function () {
            return AlertStatus.allValues.ignored;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertStatus, "pending", {
        get: function () {
            return AlertStatus.allValues.pending;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertStatus, "stale", {
        get: function () {
            return AlertStatus.allValues.stale;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertStatus, "deleted", {
        get: function () {
            return AlertStatus.allValues.deleted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertStatus, "unknown", {
        get: function () {
            return AlertStatus.allValues.unknown;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertStatus, "allValues", {
        get: function () {
            return {
                acknowledged: new AlertStatus("acknowledged", 1, "Acknowledged", "null", []),
                ignored: new AlertStatus("ignored", 2, "Ignored", "null", []),
                pending: new AlertStatus("pending", 3, "Pending", "null", []),
                stale: new AlertStatus("stale", 4, "Stale", "null", []),
                deleted: new AlertStatus("deleted", 5, "Deleted", "null", []),
                unknown: new AlertStatus("unknown", 100, "Unknown", "null", [])
            };
        },
        enumerable: true,
        configurable: true
    });
    AlertStatus.getValuesForContext = function (strContext) {
        var listReturn = [];
        Object.keys(AlertStatus.allValues).forEach(function (key) {
            if (AlertStatus.allValues[key].group.length === 0 || lodash_1.findIndex(AlertStatus.allValues[key].group, strContext) >= 0) {
                listReturn.push(AlertStatus.allValues[key]);
            }
        });
        return listReturn;
    };
    return AlertStatus;
}());
exports.AlertStatus = AlertStatus;
//# sourceMappingURL=AlertStatus.js.map