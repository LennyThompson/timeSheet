// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Sep 06 21:07:01 AEST 2016
"use strict";
var lodash_1 = require("lodash");
var ActivityStatus = (function () {
    function ActivityStatus(name, value, display, icon, group) {
        this.name = name;
        this.value = value;
        this.display = display;
        this.icon = icon;
        this.group = group;
    }
    Object.defineProperty(ActivityStatus, "defaultValue", {
        get: function () {
            return ActivityStatus.active;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivityStatus, "planned", {
        get: function () {
            return ActivityStatus.allValues.planned;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivityStatus, "active", {
        get: function () {
            return ActivityStatus.allValues.active;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivityStatus, "complete", {
        get: function () {
            return ActivityStatus.allValues.complete;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivityStatus, "paid", {
        get: function () {
            return ActivityStatus.allValues.paid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivityStatus, "deleted", {
        get: function () {
            return ActivityStatus.allValues.deleted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivityStatus, "unknown", {
        get: function () {
            return ActivityStatus.allValues.unknown;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivityStatus, "allValues", {
        get: function () {
            return {
                planned: new ActivityStatus("planned", 1, "Planned", "null", []),
                active: new ActivityStatus("active", 2, "Active", "null", []),
                complete: new ActivityStatus("complete", 3, "Complete", "null", []),
                paid: new ActivityStatus("paid", 4, "Paid", "null", []),
                deleted: new ActivityStatus("deleted", 5, "Deleted", "null", []),
                unknown: new ActivityStatus("unknown", 100, "Unknown", "null", [])
            };
        },
        enumerable: true,
        configurable: true
    });
    ActivityStatus.getValuesForContext = function (strContext) {
        var listReturn = [];
        Object.keys(ActivityStatus.allValues).forEach(function (key) {
            if (ActivityStatus.allValues[key].group.length === 0 || lodash_1.findIndex(ActivityStatus.allValues[key].group, strContext) >= 0) {
                listReturn.push(ActivityStatus.allValues[key]);
            }
        });
        return listReturn;
    };
    return ActivityStatus;
}());
exports.ActivityStatus = ActivityStatus;
//# sourceMappingURL=ActivityStatus.js.map