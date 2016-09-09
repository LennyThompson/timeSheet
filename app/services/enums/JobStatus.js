// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Sep 06 21:07:01 AEST 2016
"use strict";
var lodash_1 = require("lodash");
var JobStatus = (function () {
    function JobStatus(name, value, display, icon, group) {
        this.name = name;
        this.value = value;
        this.display = display;
        this.icon = icon;
        this.group = group;
    }
    Object.defineProperty(JobStatus, "defaultValue", {
        get: function () {
            return JobStatus.pending;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JobStatus, "pending", {
        get: function () {
            return JobStatus.allValues.pending;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JobStatus, "active", {
        get: function () {
            return JobStatus.allValues.active;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JobStatus, "inactive", {
        get: function () {
            return JobStatus.allValues.inactive;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JobStatus, "complate", {
        get: function () {
            return JobStatus.allValues.complate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JobStatus, "billed", {
        get: function () {
            return JobStatus.allValues.billed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JobStatus, "paid", {
        get: function () {
            return JobStatus.allValues.paid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JobStatus, "unknown", {
        get: function () {
            return JobStatus.allValues.unknown;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JobStatus, "allValues", {
        get: function () {
            return {
                pending: new JobStatus("pending", 1, "Pending", "null", []),
                active: new JobStatus("active", 2, "Active", "null", []),
                inactive: new JobStatus("inactive", 3, "Inactive", "null", []),
                complate: new JobStatus("complate", 4, "Complate", "null", []),
                billed: new JobStatus("billed", 5, "Billed", "null", []),
                paid: new JobStatus("paid", 6, "Paid", "null", []),
                unknown: new JobStatus("unknown", 100, "Unknown", "null", [])
            };
        },
        enumerable: true,
        configurable: true
    });
    JobStatus.getValuesForContext = function (strContext) {
        var listReturn = [];
        Object.keys(JobStatus.allValues).forEach(function (key) {
            if (JobStatus.allValues[key].group.length === 0 || lodash_1.findIndex(JobStatus.allValues[key].group, strContext) >= 0) {
                listReturn.push(JobStatus.allValues[key]);
            }
        });
        return listReturn;
    };
    return JobStatus;
}());
exports.JobStatus = JobStatus;
//# sourceMappingURL=JobStatus.js.map