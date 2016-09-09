// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Sep 06 21:07:01 AEST 2016
"use strict";
var lodash_1 = require("lodash");
var ActivityType = (function () {
    function ActivityType(name, value, display, icon, group) {
        this.name = name;
        this.value = value;
        this.display = display;
        this.icon = icon;
        this.group = group;
    }
    Object.defineProperty(ActivityType, "defaultValue", {
        get: function () {
            return ActivityType.break;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivityType, "work", {
        get: function () {
            return ActivityType.allValues.work;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivityType, "meeting", {
        get: function () {
            return ActivityType.allValues.meeting;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivityType, "user_defined", {
        get: function () {
            return ActivityType.allValues.user_defined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivityType, "break", {
        get: function () {
            return ActivityType.allValues.break;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivityType, "unknown", {
        get: function () {
            return ActivityType.allValues.unknown;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivityType, "allValues", {
        get: function () {
            return {
                work: new ActivityType("work", 1, "Work", "null", []),
                meeting: new ActivityType("meeting", 2, "Meeting", "null", []),
                user_defined: new ActivityType("user_defined", 3, "User Defined", "null", []),
                break: new ActivityType("break", 4, "Break", "null", []),
                unknown: new ActivityType("unknown", 100, "Unknown", "null", [])
            };
        },
        enumerable: true,
        configurable: true
    });
    ActivityType.getValuesForContext = function (strContext) {
        var listReturn = [];
        Object.keys(ActivityType.allValues).forEach(function (key) {
            if (ActivityType.allValues[key].group.length === 0 || lodash_1.findIndex(ActivityType.allValues[key].group, strContext) >= 0) {
                listReturn.push(ActivityType.allValues[key]);
            }
        });
        return listReturn;
    };
    return ActivityType;
}());
exports.ActivityType = ActivityType;
//# sourceMappingURL=ActivityType.js.map