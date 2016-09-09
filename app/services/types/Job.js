"use strict";
var FirebaseTimestamp_1 = require("../reference/FirebaseTimestamp");
var JobType_1 = require("../enums/JobType");
var JobStatus_1 = require("../enums/JobStatus");
var firebase_1 = require("firebase");
var Job = (function () {
    function Job() {
        this.m_created = new FirebaseTimestamp_1.FirebaseTimestamp();
        this.m_updated = new FirebaseTimestamp_1.FirebaseTimestamp();
        this.m_started = 0;
        this.m_completed = 0;
        this.m_name = "";
        this.m_description = "";
        this.m_jobType = JobType_1.JobType.defaultValue;
        this.m_jobStatus = JobStatus_1.JobStatus.defaultValue;
        this.m_dueDate = 0;
        this.m_billDate = 0;
        this.m_defaultPayRate = 0;
        this.m_bstartedUpdated = true;
        this.m_bcompletedUpdated = true;
        this.m_bnameUpdated = true;
        this.m_bdescriptionUpdated = true;
        this.m_bjobTypeUpdated = true;
        this.m_bjobStatusUpdated = true;
        this.m_bdueDateUpdated = true;
        this.m_bbillDateUpdated = true;
        this.m_bdefaultPayRateUpdated = true;
    }
    Object.defineProperty(Job.prototype, "created", {
        get: function () {
            return this.m_created;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Job.prototype, "updated", {
        get: function () {
            return this.m_updated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Job.prototype, "started", {
        get: function () {
            return this.m_started;
        },
        set: function (started) {
            this.m_started = started;
            this.m_bstartedUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Job.prototype, "completed", {
        get: function () {
            return this.m_completed;
        },
        set: function (completed) {
            this.m_completed = completed;
            this.m_bcompletedUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Job.prototype, "name", {
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
    Object.defineProperty(Job.prototype, "description", {
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
    Object.defineProperty(Job.prototype, "jobType", {
        get: function () {
            return this.m_jobType;
        },
        set: function (jobType) {
            this.m_jobType = jobType;
            this.m_bjobTypeUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Job.prototype, "jobStatus", {
        get: function () {
            return this.m_jobStatus;
        },
        set: function (jobStatus) {
            this.m_jobStatus = jobStatus;
            this.m_bjobStatusUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Job.prototype, "dueDate", {
        get: function () {
            return this.m_dueDate;
        },
        set: function (dueDate) {
            this.m_dueDate = dueDate;
            this.m_bdueDateUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Job.prototype, "billDate", {
        get: function () {
            return this.m_billDate;
        },
        set: function (billDate) {
            this.m_billDate = billDate;
            this.m_bbillDateUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Job.prototype, "defaultPayRate", {
        get: function () {
            return this.m_defaultPayRate;
        },
        set: function (defaultPayRate) {
            this.m_defaultPayRate = defaultPayRate;
            this.m_bdefaultPayRateUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Job.prototype.getUpdate = function () {
        var objUpdated = {};
        var bUpdated = false;
        if (this.m_bstartedUpdated) {
            objUpdated["started"] = this.m_started;
        }
        if (this.m_bcompletedUpdated) {
            objUpdated["completed"] = this.m_completed;
        }
        if (this.m_bnameUpdated) {
            objUpdated["name"] = this.m_name;
        }
        if (this.m_bdescriptionUpdated) {
            objUpdated["description"] = this.m_description;
        }
        if (this.m_bjobTypeUpdated) {
            objUpdated["jobType"] = this.m_jobType.name;
        }
        if (this.m_bjobStatusUpdated) {
            objUpdated["jobStatus"] = this.m_jobStatus.name;
        }
        if (this.m_bdueDateUpdated) {
            objUpdated["dueDate"] = this.m_dueDate;
        }
        if (this.m_bbillDateUpdated) {
            objUpdated["billDate"] = this.m_billDate;
        }
        if (this.m_bdefaultPayRateUpdated) {
            objUpdated["defaultPayRate"] = this.m_defaultPayRate;
        }
        if (bUpdated) {
            objUpdated["updated"] = firebase_1.database.ServerValue.TIMESTAMP;
        }
        return objUpdated;
    };
    Job.prototype.toFirebase = function () {
        if (this.m_created.timeStamp === 0) {
            this.m_created.setUpdate();
        }
        if (this.m_updated.timeStamp === 0) {
            this.m_updated.setUpdate();
        }
        var objFirebase = {
            created: this.m_created.timeStamp,
            updated: this.m_updated.timeStamp,
            started: this.m_started,
            completed: this.m_completed,
            name: this.m_name,
            description: this.m_description,
            jobType: this.m_jobType.name,
            jobStatus: this.m_jobStatus.name,
            dueDate: this.m_dueDate,
            billDate: this.m_billDate,
            defaultPayRate: this.m_defaultPayRate
        };
        return objFirebase;
    };
    Job.prototype.setSaved = function () {
        this.m_bstartedUpdated = false;
        this.m_bcompletedUpdated = false;
        this.m_bnameUpdated = false;
        this.m_bdescriptionUpdated = false;
        this.m_bjobTypeUpdated = false;
        this.m_bjobStatusUpdated = false;
        this.m_bdueDateUpdated = false;
        this.m_bbillDateUpdated = false;
        this.m_bdefaultPayRateUpdated = false;
    };
    Job.fromFirebase = function (firebaseObj) {
        var objJob = new Job();
        objJob.m_created = new FirebaseTimestamp_1.FirebaseTimestamp(firebaseObj.created);
        objJob.m_updated = new FirebaseTimestamp_1.FirebaseTimestamp(firebaseObj.updated);
        objJob.m_started = firebaseObj.started;
        objJob.m_completed = firebaseObj.completed;
        objJob.m_name = firebaseObj.name;
        objJob.m_description = firebaseObj.description;
        objJob.m_jobType = JobType_1.JobType[firebaseObj.jobType];
        objJob.m_jobStatus = JobStatus_1.JobStatus[firebaseObj.jobStatus];
        objJob.m_dueDate = firebaseObj.dueDate;
        objJob.m_billDate = firebaseObj.billDate;
        objJob.m_defaultPayRate = firebaseObj.defaultPayRate;
        objJob.setSaved();
        return objJob;
    };
    return Job;
}());
exports.Job = Job;
//# sourceMappingURL=Job.js.map