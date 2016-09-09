"use strict";
var FirebaseTimestamp_1 = require("../reference/FirebaseTimestamp");
var firebase_1 = require("firebase");
var ClientJob = (function () {
    function ClientJob() {
        this.m_created = new FirebaseTimestamp_1.FirebaseTimestamp();
        this.m_updated = new FirebaseTimestamp_1.FirebaseTimestamp();
        this.m_jobId = "";
        this.m_clientId = "";
        this.m_bjobIdUpdated = true;
        this.m_bclientIdUpdated = true;
    }
    Object.defineProperty(ClientJob.prototype, "created", {
        get: function () {
            return this.m_created;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientJob.prototype, "updated", {
        get: function () {
            return this.m_updated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientJob.prototype, "jobId", {
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
    Object.defineProperty(ClientJob.prototype, "clientId", {
        get: function () {
            return this.m_clientId;
        },
        set: function (clientId) {
            this.m_clientId = clientId;
            this.m_bclientIdUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    ClientJob.prototype.getUpdate = function () {
        var objUpdated = {};
        var bUpdated = false;
        if (this.m_bjobIdUpdated) {
            objUpdated["jobId"] = this.m_jobId;
        }
        if (this.m_bclientIdUpdated) {
            objUpdated["clientId"] = this.m_clientId;
        }
        if (bUpdated) {
            objUpdated["updated"] = firebase_1.database.ServerValue.TIMESTAMP;
        }
        return objUpdated;
    };
    ClientJob.prototype.toFirebase = function () {
        if (this.m_created.timeStamp === 0) {
            this.m_created.setUpdate();
        }
        if (this.m_updated.timeStamp === 0) {
            this.m_updated.setUpdate();
        }
        var objFirebase = {
            created: this.m_created.timeStamp,
            updated: this.m_updated.timeStamp,
            jobId: this.m_jobId,
            clientId: this.m_clientId
        };
        return objFirebase;
    };
    ClientJob.prototype.setSaved = function () {
        this.m_bjobIdUpdated = false;
        this.m_bclientIdUpdated = false;
    };
    ClientJob.fromFirebase = function (firebaseObj) {
        var objClientJob = new ClientJob();
        objClientJob.m_created = new FirebaseTimestamp_1.FirebaseTimestamp(firebaseObj.created);
        objClientJob.m_updated = new FirebaseTimestamp_1.FirebaseTimestamp(firebaseObj.updated);
        objClientJob.m_jobId = firebaseObj.jobId;
        objClientJob.m_clientId = firebaseObj.clientId;
        objClientJob.setSaved();
        return objClientJob;
    };
    return ClientJob;
}());
exports.ClientJob = ClientJob;
//# sourceMappingURL=ClientJob.js.map