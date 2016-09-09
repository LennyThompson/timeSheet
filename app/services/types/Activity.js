"use strict";
var FirebaseTimestamp_1 = require("../reference/FirebaseTimestamp");
var ActivityType_1 = require("../enums/ActivityType");
var ActivityStatus_1 = require("../enums/ActivityStatus");
var LockStatus_1 = require("../enums/LockStatus");
var DateId_1 = require("./DateId");
var firebase_1 = require("firebase");
var Activity = (function () {
    function Activity() {
        this.m_created = new FirebaseTimestamp_1.FirebaseTimestamp();
        this.m_updated = new FirebaseTimestamp_1.FirebaseTimestamp();
        this.m_started = 0;
        this.m_duration = 0;
        this.m_activityType = ActivityType_1.ActivityType.defaultValue;
        this.m_activityStatus = ActivityStatus_1.ActivityStatus.defaultValue;
        this.m_lockStatus = LockStatus_1.LockStatus.defaultValue;
        this.m_name = "";
        this.m_description = "";
        this.m_comments = "";
        this.m_userActivityType = "";
        this.m_payRate = 0;
        this.m_dateId = new DateId_1.DateId();
        this.m_bstartedUpdated = true;
        this.m_bdurationUpdated = true;
        this.m_bactivityTypeUpdated = true;
        this.m_bactivityStatusUpdated = true;
        this.m_blockStatusUpdated = true;
        this.m_bnameUpdated = true;
        this.m_bdescriptionUpdated = true;
        this.m_bcommentsUpdated = true;
        this.m_buserActivityTypeUpdated = true;
        this.m_bpayRateUpdated = true;
        this.m_bdateIdUpdated = true;
    }
    Object.defineProperty(Activity.prototype, "created", {
        get: function () {
            return this.m_created;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Activity.prototype, "updated", {
        get: function () {
            return this.m_updated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Activity.prototype, "started", {
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
    Object.defineProperty(Activity.prototype, "duration", {
        get: function () {
            return this.m_duration;
        },
        set: function (duration) {
            this.m_duration = duration;
            this.m_bdurationUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Activity.prototype, "activityType", {
        get: function () {
            return this.m_activityType;
        },
        set: function (activityType) {
            this.m_activityType = activityType;
            this.m_bactivityTypeUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Activity.prototype, "activityStatus", {
        get: function () {
            return this.m_activityStatus;
        },
        set: function (activityStatus) {
            this.m_activityStatus = activityStatus;
            this.m_bactivityStatusUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Activity.prototype, "lockStatus", {
        get: function () {
            return this.m_lockStatus;
        },
        set: function (lockStatus) {
            this.m_lockStatus = lockStatus;
            this.m_blockStatusUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Activity.prototype, "name", {
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
    Object.defineProperty(Activity.prototype, "description", {
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
    Object.defineProperty(Activity.prototype, "comments", {
        get: function () {
            return this.m_comments;
        },
        set: function (comments) {
            this.m_comments = comments;
            this.m_bcommentsUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Activity.prototype, "userActivityType", {
        get: function () {
            return this.m_userActivityType;
        },
        set: function (userActivityType) {
            this.m_userActivityType = userActivityType;
            this.m_buserActivityTypeUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Activity.prototype, "payRate", {
        get: function () {
            return this.m_payRate;
        },
        set: function (payRate) {
            this.m_payRate = payRate;
            this.m_bpayRateUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Activity.prototype, "yearId", {
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
    Object.defineProperty(Activity.prototype, "monthId", {
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
    Object.defineProperty(Activity.prototype, "dayId", {
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
    Activity.prototype.getUpdate = function () {
        var objUpdated = {};
        var bUpdated = false;
        if (this.m_bstartedUpdated) {
            objUpdated["started"] = this.m_started;
        }
        if (this.m_bdurationUpdated) {
            objUpdated["duration"] = this.m_duration;
        }
        if (this.m_bactivityTypeUpdated) {
            objUpdated["activityType"] = this.m_activityType.name;
        }
        if (this.m_bactivityStatusUpdated) {
            objUpdated["activityStatus"] = this.m_activityStatus.name;
        }
        if (this.m_blockStatusUpdated) {
            objUpdated["lockStatus"] = this.m_lockStatus.name;
        }
        if (this.m_bnameUpdated) {
            objUpdated["name"] = this.m_name;
        }
        if (this.m_bdescriptionUpdated) {
            objUpdated["description"] = this.m_description;
        }
        if (this.m_bcommentsUpdated) {
            objUpdated["comments"] = this.m_comments;
        }
        if (this.m_buserActivityTypeUpdated) {
            objUpdated["userActivityType"] = this.m_userActivityType;
        }
        if (this.m_bpayRateUpdated) {
            objUpdated["payRate"] = this.m_payRate;
        }
        if (this.m_bdateIdUpdated) {
            objUpdated["dateId"] = this.m_dateId.toFirebase();
        }
        if (bUpdated) {
            objUpdated["updated"] = firebase_1.database.ServerValue.TIMESTAMP;
        }
        return objUpdated;
    };
    Activity.prototype.toFirebase = function () {
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
            duration: this.m_duration,
            activityType: this.m_activityType.name,
            activityStatus: this.m_activityStatus.name,
            lockStatus: this.m_lockStatus.name,
            name: this.m_name,
            description: this.m_description,
            comments: this.m_comments,
            userActivityType: this.m_userActivityType,
            payRate: this.m_payRate,
            dateId: this.m_dateId.toFirebase()
        };
        return objFirebase;
    };
    Activity.prototype.setSaved = function () {
        this.m_bstartedUpdated = false;
        this.m_bdurationUpdated = false;
        this.m_bactivityTypeUpdated = false;
        this.m_bactivityStatusUpdated = false;
        this.m_blockStatusUpdated = false;
        this.m_bnameUpdated = false;
        this.m_bdescriptionUpdated = false;
        this.m_bcommentsUpdated = false;
        this.m_buserActivityTypeUpdated = false;
        this.m_bpayRateUpdated = false;
        this.m_bdateIdUpdated = false;
    };
    Activity.fromFirebase = function (firebaseObj) {
        var objActivity = new Activity();
        objActivity.m_created = new FirebaseTimestamp_1.FirebaseTimestamp(firebaseObj.created);
        objActivity.m_updated = new FirebaseTimestamp_1.FirebaseTimestamp(firebaseObj.updated);
        objActivity.m_started = firebaseObj.started;
        objActivity.m_duration = firebaseObj.duration;
        objActivity.m_activityType = ActivityType_1.ActivityType[firebaseObj.activityType];
        objActivity.m_activityStatus = ActivityStatus_1.ActivityStatus[firebaseObj.activityStatus];
        objActivity.m_lockStatus = LockStatus_1.LockStatus[firebaseObj.lockStatus];
        objActivity.m_name = firebaseObj.name;
        objActivity.m_description = firebaseObj.description;
        objActivity.m_comments = firebaseObj.comments;
        objActivity.m_userActivityType = firebaseObj.userActivityType;
        objActivity.m_payRate = firebaseObj.payRate;
        objActivity.m_dateId = DateId_1.DateId.fromFirebase(firebaseObj.dateId);
        objActivity.setSaved();
        return objActivity;
    };
    return Activity;
}());
exports.Activity = Activity;
//# sourceMappingURL=Activity.js.map