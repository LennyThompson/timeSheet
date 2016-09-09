// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Sep 06 21:07:01 AEST 2016
"use strict";
var lodash_1 = require("lodash");
var JobType = (function () {
    function JobType(name, value, display, icon, group) {
        this.name = name;
        this.value = value;
        this.display = display;
        this.icon = icon;
        this.group = group;
    }
    Object.defineProperty(JobType, "defaultValue", {
        get: function () {
            return JobType.billable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JobType, "billable", {
        get: function () {
            return JobType.allValues.billable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JobType, "unbillable", {
        get: function () {
            return JobType.allValues.unbillable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JobType, "user_defined", {
        get: function () {
            return JobType.allValues.user_defined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JobType, "system", {
        get: function () {
            return JobType.allValues.system;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JobType, "unknown", {
        get: function () {
            return JobType.allValues.unknown;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JobType, "allValues", {
        get: function () {
            return {
                billable: new JobType("billable", 1, "Billable", "null", []),
                unbillable: new JobType("unbillable", 2, "Unbillable", "null", []),
                user_defined: new JobType("user_defined", 3, "User Defined", "null", []),
                system: new JobType("system", 4, "System", "null", []),
                unknown: new JobType("unknown", 100, "Unknown", "null", [])
            };
        },
        enumerable: true,
        configurable: true
    });
    JobType.getValuesForContext = function (strContext) {
        var listReturn = [];
        Object.keys(JobType.allValues).forEach(function (key) {
            if (JobType.allValues[key].group.length === 0 || lodash_1.findIndex(JobType.allValues[key].group, strContext) >= 0) {
                listReturn.push(JobType.allValues[key]);
            }
        });
        return listReturn;
    };
    return JobType;
}());
exports.JobType = JobType;
//# sourceMappingURL=JobType.js.map