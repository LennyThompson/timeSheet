"use strict";
var firebase_1 = require("firebase");
var DateId = (function () {
    function DateId() {
        this.m_yearId = "";
        this.m_monthId = "";
        this.m_dayId = "";
        this.m_byearIdUpdated = true;
        this.m_bmonthIdUpdated = true;
        this.m_bdayIdUpdated = true;
    }
    Object.defineProperty(DateId.prototype, "yearId", {
        get: function () {
            return this.m_yearId;
        },
        set: function (yearId) {
            this.m_yearId = yearId;
            this.m_byearIdUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateId.prototype, "monthId", {
        get: function () {
            return this.m_monthId;
        },
        set: function (monthId) {
            this.m_monthId = monthId;
            this.m_bmonthIdUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateId.prototype, "dayId", {
        get: function () {
            return this.m_dayId;
        },
        set: function (dayId) {
            this.m_dayId = dayId;
            this.m_bdayIdUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    DateId.prototype.getUpdate = function () {
        var objUpdated = {};
        var bUpdated = false;
        if (this.m_byearIdUpdated) {
            objUpdated["yearId"] = this.m_yearId;
        }
        if (this.m_bmonthIdUpdated) {
            objUpdated["monthId"] = this.m_monthId;
        }
        if (this.m_bdayIdUpdated) {
            objUpdated["dayId"] = this.m_dayId;
        }
        if (bUpdated) {
            objUpdated["updated"] = firebase_1.database.ServerValue.TIMESTAMP;
        }
        return objUpdated;
    };
    DateId.prototype.toFirebase = function () {
        var objFirebase = {
            yearId: this.m_yearId,
            monthId: this.m_monthId,
            dayId: this.m_dayId
        };
        return objFirebase;
    };
    DateId.prototype.setSaved = function () {
        this.m_byearIdUpdated = false;
        this.m_bmonthIdUpdated = false;
        this.m_bdayIdUpdated = false;
    };
    DateId.fromFirebase = function (firebaseObj) {
        var objDateId = new DateId();
        objDateId.m_yearId = firebaseObj.yearId;
        objDateId.m_monthId = firebaseObj.monthId;
        objDateId.m_dayId = firebaseObj.dayId;
        objDateId.setSaved();
        return objDateId;
    };
    return DateId;
}());
exports.DateId = DateId;
//# sourceMappingURL=DateId.js.map