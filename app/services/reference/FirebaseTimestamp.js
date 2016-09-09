"use strict";
var firebase_1 = require("firebase");
var FirebaseTimestamp = (function () {
    function FirebaseTimestamp(timeStamp) {
        this.m_initialised = timeStamp ? true : false;
        this.m_timeStamp = timeStamp ? timeStamp : 0;
        this.m_dateTime = timeStamp ? new Date(timeStamp) : new Date();
    }
    Object.defineProperty(FirebaseTimestamp.prototype, "initialised", {
        get: function () {
            return this.m_initialised;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseTimestamp.prototype, "timeStamp", {
        get: function () {
            return this.m_timeStamp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseTimestamp.prototype, "dateTime", {
        get: function () {
            return this.m_dateTime;
        },
        enumerable: true,
        configurable: true
    });
    FirebaseTimestamp.prototype.setUpdate = function () {
        this.m_initialised = false;
        this.m_timeStamp = (firebase_1.database).ServerValue.TIMESTAMP;
        this.m_dateTime = new Date();
    };
    return FirebaseTimestamp;
}());
exports.FirebaseTimestamp = FirebaseTimestamp;
//# sourceMappingURL=FirebaseTimestamp.js.map