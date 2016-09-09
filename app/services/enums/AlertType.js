// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Sep 06 21:07:01 AEST 2016
"use strict";
var lodash_1 = require("lodash");
var AlertType = (function () {
    function AlertType(name, value, display, icon, group) {
        this.name = name;
        this.value = value;
        this.display = display;
        this.icon = icon;
        this.group = group;
    }
    Object.defineProperty(AlertType, "defaultValue", {
        get: function () {
            return AlertType.timer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertType, "timer", {
        get: function () {
            return AlertType.allValues.timer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertType, "overdue", {
        get: function () {
            return AlertType.allValues.overdue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertType, "user_defined", {
        get: function () {
            return AlertType.allValues.user_defined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertType, "threshhold", {
        get: function () {
            return AlertType.allValues.threshhold;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertType, "system", {
        get: function () {
            return AlertType.allValues.system;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertType, "unknown", {
        get: function () {
            return AlertType.allValues.unknown;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AlertType, "allValues", {
        get: function () {
            return {
                timer: new AlertType("timer", 1, "Timer", "null", []),
                overdue: new AlertType("overdue", 2, "Overdue", "null", []),
                user_defined: new AlertType("user_defined", 3, "User Defined", "null", []),
                threshhold: new AlertType("threshhold", 4, "Threshhold", "null", []),
                system: new AlertType("system", 5, "System", "null", []),
                unknown: new AlertType("unknown", 100, "Unknown", "null", [])
            };
        },
        enumerable: true,
        configurable: true
    });
    AlertType.getValuesForContext = function (strContext) {
        var listReturn = [];
        Object.keys(AlertType.allValues).forEach(function (key) {
            if (AlertType.allValues[key].group.length === 0 || lodash_1.findIndex(AlertType.allValues[key].group, strContext) >= 0) {
                listReturn.push(AlertType.allValues[key]);
            }
        });
        return listReturn;
    };
    return AlertType;
}());
exports.AlertType = AlertType;
//# sourceMappingURL=AlertType.js.map