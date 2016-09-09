// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Fri Sep 09 19:42:27 AEST 2016
"use strict";
var Job_1 = require("../types/Job");
var JobActivity_1 = require("../types/JobActivity");
var ActivityPath_1 = require("./ActivityPath");
var lodash_1 = require("lodash");
var JobActivityReference = (function () {
    function JobActivityReference() {
        this.m_JobActivity = new JobActivity_1.JobActivity();
        this.m_ActivityPath = null;
    }
    Object.defineProperty(JobActivityReference.prototype, "JobActivity", {
        get: function () {
            return this.m_JobActivity;
        },
        enumerable: true,
        configurable: true
    });
    JobActivityReference.createJobActivityReference = function (objActivityPath, userid, jobId, activityId) {
        var objJobActivityReference = new JobActivityReference();
        objJobActivityReference.m_JobActivity.yearId = objActivityPath.Activity.yearId;
        objJobActivityReference.m_JobActivity.monthId = objActivityPath.Activity.monthId;
        objJobActivityReference.m_JobActivity.dayId = objActivityPath.Activity.dayId;
        objJobActivityReference.m_JobActivity.activityId = activityId;
        objJobActivityReference.m_JobActivity.jobId = jobId;
        objJobActivityReference.m_ActivityPath = objActivityPath;
        return objJobActivityReference;
    };
    JobActivityReference.prototype.saveToDatabase = function (angularFire, userid, jobId, activityId) {
        var listPromises = [];
        var strPath = JobActivityReference.buildPath(userid, jobId, activityId);
        var objFirebase = this.m_JobActivity.toFirebase();
        return angularFire.database.object(strPath).set(objFirebase)
            .then(function () {
            return true;
        });
    };
    JobActivityReference.loadFromDatabase = function (angularFire, userid, jobId, activityId) {
        var strPath = JobActivityReference.buildPath(userid, jobId, activityId);
        return angularFire.database.object(strPath)
            .map(function (itemJobActivity) {
            var objJobActivityReference = new JobActivityReference();
            objJobActivityReference.m_JobActivity = JobActivity_1.JobActivity.fromFirebase(itemJobActivity);
            objJobActivityReference.m_ActivityPath = ActivityPath_1.ActivityPath.loadFromDatabase(angularFire, userid, objJobActivityReference.m_ActivityPath.Activity.yearId, objJobActivityReference.m_ActivityPath.Activity.monthId, objJobActivityReference.m_ActivityPath.Activity.dayId, objJobActivityReference.m_JobActivity.activityId);
            return objJobActivityReference;
        });
    };
    JobActivityReference.loadAllFromDatabase = function (angularFire, userid, jobId) {
        var strPath = JobActivityReference.buildPath(userid, jobId);
        return angularFire.database.list(strPath)
            .map(function (listJobActivity) {
            if (listJobActivity
                &&
                    listJobActivity.length > 0) {
                return listJobActivity.map(function (itemJobActivity) {
                    var objJobActivityReference = new JobActivityReference();
                    objJobActivityReference.m_JobActivity = JobActivity_1.JobActivity.fromFirebase(itemJobActivity);
                    objJobActivityReference.m_ActivityPath = ActivityPath_1.ActivityPath.loadFromDatabase(angularFire, userid, objJobActivityReference.m_ActivityPath.Activity.yearId, objJobActivityReference.m_ActivityPath.Activity.monthId, objJobActivityReference.m_ActivityPath.Activity.dayId, objJobActivityReference.m_JobActivity.activityId);
                    return objJobActivityReference;
                });
            }
        });
    };
    JobActivityReference.prototype.exists = function (angularFire, userid) {
        var strPath = JobActivityReference.buildPath(userid, this.m_JobActivity.jobId, this.m_JobActivity.activityId);
        return angularFire.database.object(strPath)
            .subscribe(function (objJobActivityReference) {
            return objJobActivityReference.$exists();
        }, function () {
            return false;
        });
    };
    JobActivityReference.buildPath = function (userid, jobId, strUuid) {
        var strPath = "/users/" + userid + "/jobs/activities/" + jobId;
        if (strUuid) {
            strPath += "/" + strUuid;
        }
        return strPath;
    };
    return JobActivityReference;
}());
var JobPath = (function () {
    function JobPath() {
        this.m_Job = new Job_1.Job();
        this.m_ActivityPathList = [];
        this.__path = "";
    }
    Object.defineProperty(JobPath.prototype, "Job", {
        get: function () {
            return this.m_Job;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JobPath.prototype, "ActivityPathList", {
        get: function () {
            return this.m_ActivityPathList;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JobPath.prototype, "key", {
        get: function () {
            return this.__path;
        },
        enumerable: true,
        configurable: true
    });
    JobPath.prototype.saveToDatabase = function (angularFire, userid) {
        var _this = this;
        var listPromises = [];
        var strPath = JobPath.buildPath(userid, this.__path);
        var objFirebase = this.m_Job.toFirebase();
        if (this.__path) {
            listPromises.push(angularFire.database.object(strPath).set(objFirebase)
                .then(function () {
                return true;
            }));
        }
        else {
            listPromises.push(angularFire.database.list(strPath).push(objFirebase)
                .then(function (objPushed) {
                _this.__path = objPushed.$key;
                return true;
            }));
        }
        lodash_1.forEach(this.m_ActivityPathList, function (objActivityPath) {
            var objJobActivityReference = JobActivityReference.createJobActivityReference(objActivityPath, userid, _this.key, objActivityPath.key);
            listPromises.push(objJobActivityReference.saveToDatabase(angularFire, userid, _this.key, objActivityPath.key));
        });
        return Promise.all(listPromises);
    };
    JobPath.prototype.updateInDatabase = function (angularFire, userid) {
        // TODO: injected path updates not implemented...
        if (this.__path) {
            var strPath = JobPath.buildPath(userid, this.__path);
            var objFirebase = this.m_Job.getUpdate();
            return angularFire.database.object(strPath).update(objFirebase)
                .then(function () {
                return true;
            });
        }
        else {
            throw new Error("Cannot update an object that has not been saved");
        }
    };
    JobPath.loadFromDatabase = function (angularFire, userid, jobId) {
        var strPath = JobPath.buildPath(userid, jobId);
        return angularFire.database.object(strPath)
            .map(function (itemJob) {
            var objJobPath = new JobPath();
            objJobPath.m_Job = Job_1.Job.fromFirebase(itemJob);
            objJobPath.__path = itemJob.$key;
            objJobPath.m_ActivityPathList = JobActivityReference.loadAllFromDatabase(angularFire, userid, objJobPath.__path)
                .map(function (objRef) {
                return objRef.m_ActivityPath;
            });
            return objJobPath;
        });
    };
    JobPath.loadAllFromDatabase = function (angularFire, userid) {
        var strPath = JobPath.buildPath(userid);
        return angularFire.database.list(strPath)
            .map(function (listJob) {
            if (listJob
                &&
                    listJob.length > 0) {
                return listJob.map(function (itemJob) {
                    var objJobPath = new JobPath();
                    objJobPath.m_Job = Job_1.Job.fromFirebase(itemJob);
                    objJobPath.__path = itemJob.$key;
                    objJobPath.m_ActivityPathList = JobActivityReference.loadAllFromDatabase(angularFire, userid, objJobPath.__path)
                        .map(function (objRef) {
                        return objRef.m_ActivityPath;
                    });
                    return objJobPath;
                });
            }
        });
    };
    JobPath.prototype.exists = function (angularFire, userid, jobId) {
        var strPath = JobPath.buildPath(userid, jobId);
        return angularFire.database.object(strPath)
            .subscribe(function (objJobPath) {
            return objJobPath.$exists();
        }, function () {
            return false;
        });
    };
    JobPath.buildPath = function (userid, strUuid) {
        var strPath = "/users/" + userid + "/jobs";
        if (strUuid) {
            strPath += "/" + strUuid;
        }
        return strPath;
    };
    return JobPath;
}());
exports.JobPath = JobPath;
//# sourceMappingURL=JobPath.js.map