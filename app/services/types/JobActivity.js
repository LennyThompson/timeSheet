"use strict";
var FirebaseTimestamp_1 = require("../reference/FirebaseTimestamp");
var DateId_1 = require("./DateId");
var firebase_1 = require("firebase");
var JobActivity = (function () {
    function JobActivity() {
        this.m_created = new FirebaseTimestamp_1.FirebaseTimestamp();
        this.m_updated = new FirebaseTimestamp_1.FirebaseTimestamp();
        this.m_dateId = new DateId_1.DateId();
        this.m_activityId = "";
        this.m_jobId = "";
        this.m_bdateIdUpdated = true;
        this.m_bactivityIdUpdated = true;
        this.m_bjobIdUpdated = true;
    }
    Object.defineProperty(JobActivity.prototype, "created", {
        get: function () {
            return this.m_created;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JobActivity.prototype, "updated", {
        get: function () {
            return this.m_updated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JobActivity.prototype, "yearId", {
        get: function () {
            return this.m_dateId.yearId;
        },
        set: function (yearId) {
            this.m_dateId.yearId = yearId;
            this.m_bdateIdUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JobActivity.prototype, "monthId", {
        get: function () {
            return this.m_dateId.monthId;
        },
        set: function (monthId) {
            this.m_dateId.monthId = monthId;
            this.m_bdateIdUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JobActivity.prototype, "dayId", {
        get: function () {
            return this.m_dateId.dayId;
        },
        set: function (dayId) {
            this.m_dateId.dayId = dayId;
            this.m_bdateIdUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JobActivity.prototype, "activityId", {
        get: function () {
            return this.m_activityId;
        },
        set: function (activityId) {
            this.m_activityId = activityId;
            this.m_bactivityIdUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JobActivity.prototype, "jobId", {
        get: function () {
            return this.m_jobId;
        },
        set: function (jobId) {
            this.m_jobId = jobId;
            this.m_bjobIdUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    JobActivity.prototype.getUpdate = function () {
        var objUpdated = {};
        var bUpdated = false;
        if (this.m_bdateIdUpdated) {
            objUpdated["dateId"] = this.m_dateId.toFirebase();
        }
        if (this.m_bactivityIdUpdated) {
            objUpdated["activityId"] = this.m_activityId;
        }
        if (this.m_bjobIdUpdated) {
            objUpdated["jobId"] = this.m_jobId;
        }
        if (bUpdated) {
            objUpdated["updated"] = firebase_1.database.ServerValue.TIMESTAMP;
        }
        return objUpdated;
    };
    JobActivity.prototype.toFirebase = function () {
        if (this.m_created.timeStamp === 0) {
            this.m_created.setUpdate();
        }
        if (this.m_updated.timeStamp === 0) {
            this.m_updated.setUpdate();
        }
        var objFirebase = {
            created: this.m_created.timeStamp,
            updated: this.m_updated.timeStamp,
            dateId: this.m_dateId.toFirebase(),
            activityId: this.m_activityId,
            jobId: this.m_jobId
        };
        return objFirebase;
    };
    JobActivity.prototype.setSaved = function () {
        this.m_bdateIdUpdated = false;
        this.m_bactivityIdUpdated = false;
        this.m_bjobIdUpdated = false;
    };
    JobActivity.fromFirebase = function (firebaseObj) {
        var objJobActivity = new JobActivity();
        objJobActivity.m_created = new FirebaseTimestamp_1.FirebaseTimestamp(firebaseObj.created);
        objJobActivity.m_updated = new FirebaseTimestamp_1.FirebaseTimestamp(firebaseObj.updated);
        objJobActivity.m_dateId = DateId_1.DateId.fromFirebase(firebaseObj.dateId);
        objJobActivity.m_activityId = firebaseObj.activityId;
        objJobActivity.m_jobId = firebaseObj.jobId;
        objJobActivity.setSaved();
        return objJobActivity;
    };
    return JobActivity;
}());
exports.JobActivity = JobActivity;
//# sourceMappingURL=JobActivity.js.map