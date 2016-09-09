// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Fri Sep 09 19:42:27 AEST 2016
"use strict";
var Activity_1 = require("../types/Activity");
var ActivityPath = (function () {
    function ActivityPath() {
        this.m_Activity = new Activity_1.Activity();
        this.__path = "";
    }
    Object.defineProperty(ActivityPath.prototype, "Activity", {
        get: function () {
            return this.m_Activity;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivityPath.prototype, "key", {
        get: function () {
            return this.__path;
        },
        enumerable: true,
        configurable: true
    });
    ActivityPath.prototype.saveToDatabase = function (angularFire, userid, yearId, monthId, dayId) {
        var _this = this;
        var listPromises = [];
        var strPath = ActivityPath.buildPath(userid, yearId, monthId, dayId, this.__path);
        var objFirebase = this.m_Activity.toFirebase();
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
        return Promise.all(listPromises);
    };
    ActivityPath.prototype.updateInDatabase = function (angularFire, userid, yearId, monthId, dayId) {
        // TODO: injected path updates not implemented...
        if (this.__path) {
            var strPath = ActivityPath.buildPath(userid, yearId, monthId, dayId, this.__path);
            var objFirebase = this.m_Activity.getUpdate();
            return angularFire.database.object(strPath).update(objFirebase)
                .then(function () {
                return true;
            });
        }
        else {
            throw new Error("Cannot update an object that has not been saved");
        }
    };
    ActivityPath.loadFromDatabase = function (angularFire, userid, yearId, monthId, dayId, activityId) {
        var strPath = ActivityPath.buildPath(userid, yearId, monthId, dayId, activityId);
        return angularFire.database.object(strPath)
            .map(function (itemActivity) {
            var objActivityPath = new ActivityPath();
            objActivityPath.m_Activity = Activity_1.Activity.fromFirebase(itemActivity);
            objActivityPath.__path = itemActivity.$key;
            return objActivityPath;
        });
    };
    ActivityPath.loadAllFromDatabase = function (angularFire, userid, yearId, monthId, dayId) {
        var strPath = ActivityPath.buildPath(userid, yearId, monthId, dayId);
        return angularFire.database.list(strPath)
            .map(function (listActivity) {
            if (listActivity
                &&
                    listActivity.length > 0) {
                return listActivity.map(function (itemActivity) {
                    var objActivityPath = new ActivityPath();
                    objActivityPath.m_Activity = Activity_1.Activity.fromFirebase(itemActivity);
                    objActivityPath.__path = itemActivity.$key;
                    return objActivityPath;
                });
            }
        });
    };
    ActivityPath.prototype.exists = function (angularFire, userid, activityId) {
        var strPath = ActivityPath.buildPath(userid, this.m_Activity.yearId, this.m_Activity.monthId, this.m_Activity.dayId, activityId);
        return angularFire.database.object(strPath)
            .subscribe(function (objActivityPath) {
            return objActivityPath.$exists();
        }, function () {
            return false;
        });
    };
    ActivityPath.buildPath = function (userid, yearId, monthId, dayId, strUuid) {
        var strPath = "/activities/" + userid + "/" + yearId + "/" + monthId + "/" + dayId;
        if (strUuid) {
            strPath += "/" + strUuid;
        }
        return strPath;
    };
    return ActivityPath;
}());
exports.ActivityPath = ActivityPath;
//# sourceMappingURL=ActivityPath.js.map