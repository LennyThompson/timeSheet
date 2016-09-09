// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Fri Sep 09 19:42:27 AEST 2016
"use strict";
var Client_1 = require("../types/Client");
var ClientJob_1 = require("../types/ClientJob");
var JobPath_1 = require("./JobPath");
var lodash_1 = require("lodash");
var ClientJobReference = (function () {
    function ClientJobReference() {
        this.m_ClientJob = new ClientJob_1.ClientJob();
        this.m_JobPath = null;
    }
    Object.defineProperty(ClientJobReference.prototype, "ClientJob", {
        get: function () {
            return this.m_ClientJob;
        },
        enumerable: true,
        configurable: true
    });
    ClientJobReference.createClientJobReference = function (objJobPath, userid, clientId, jobId) {
        var objClientJobReference = new ClientJobReference();
        objClientJobReference.m_ClientJob.jobId = jobId;
        objClientJobReference.m_ClientJob.clientId = clientId;
        objClientJobReference.m_JobPath = objJobPath;
        return objClientJobReference;
    };
    ClientJobReference.prototype.saveToDatabase = function (angularFire, userid, clientId, jobId) {
        var listPromises = [];
        var strPath = ClientJobReference.buildPath(userid, clientId, jobId);
        var objFirebase = this.m_ClientJob.toFirebase();
        return angularFire.database.object(strPath).set(objFirebase)
            .then(function () {
            return true;
        });
    };
    ClientJobReference.loadFromDatabase = function (angularFire, userid, clientId, jobId) {
        var strPath = ClientJobReference.buildPath(userid, clientId, jobId);
        return angularFire.database.object(strPath)
            .map(function (itemClientJob) {
            var objClientJobReference = new ClientJobReference();
            objClientJobReference.m_ClientJob = ClientJob_1.ClientJob.fromFirebase(itemClientJob);
            objClientJobReference.m_JobPath = JobPath_1.JobPath.loadFromDatabase(angularFire, userid, objClientJobReference.m_ClientJob.jobId);
            return objClientJobReference;
        });
    };
    ClientJobReference.loadAllFromDatabase = function (angularFire, userid, clientId) {
        var strPath = ClientJobReference.buildPath(userid, clientId);
        return angularFire.database.list(strPath)
            .map(function (listClientJob) {
            if (listClientJob
                &&
                    listClientJob.length > 0) {
                return listClientJob.map(function (itemClientJob) {
                    var objClientJobReference = new ClientJobReference();
                    objClientJobReference.m_ClientJob = ClientJob_1.ClientJob.fromFirebase(itemClientJob);
                    objClientJobReference.m_JobPath = JobPath_1.JobPath.loadFromDatabase(angularFire, userid, objClientJobReference.m_ClientJob.jobId);
                    return objClientJobReference;
                });
            }
        });
    };
    ClientJobReference.prototype.exists = function (angularFire, userid) {
        var strPath = ClientJobReference.buildPath(userid, this.m_ClientJob.clientId, this.m_ClientJob.jobId);
        return angularFire.database.object(strPath)
            .subscribe(function (objClientJobReference) {
            return objClientJobReference.$exists();
        }, function () {
            return false;
        });
    };
    ClientJobReference.buildPath = function (userid, clientId, strUuid) {
        var strPath = "/users/" + userid + "/clients/jobs/" + clientId;
        if (strUuid) {
            strPath += "/" + strUuid;
        }
        return strPath;
    };
    return ClientJobReference;
}());
var ClientPath = (function () {
    function ClientPath() {
        this.m_Client = new Client_1.Client();
        this.m_JobPathList = [];
        this.__path = "";
    }
    Object.defineProperty(ClientPath.prototype, "Client", {
        get: function () {
            return this.m_Client;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientPath.prototype, "JobPathList", {
        get: function () {
            return this.m_JobPathList;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientPath.prototype, "key", {
        get: function () {
            return this.__path;
        },
        enumerable: true,
        configurable: true
    });
    ClientPath.prototype.saveToDatabase = function (angularFire, userid) {
        var _this = this;
        var listPromises = [];
        var strPath = ClientPath.buildPath(userid, this.__path);
        var objFirebase = this.m_Client.toFirebase();
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
        lodash_1.forEach(this.m_JobPathList, function (objJobPath) {
            var objClientJobReference = ClientJobReference.createClientJobReference(objJobPath, userid, _this.key, objJobPath.key);
            listPromises.push(objClientJobReference.saveToDatabase(angularFire, userid, _this.key, objJobPath.key));
        });
        return Promise.all(listPromises);
    };
    ClientPath.prototype.updateInDatabase = function (angularFire, userid) {
        // TODO: injected path updates not implemented...
        if (this.__path) {
            var strPath = ClientPath.buildPath(userid, this.__path);
            var objFirebase = this.m_Client.getUpdate();
            return angularFire.database.object(strPath).update(objFirebase)
                .then(function () {
                return true;
            });
        }
        else {
            throw new Error("Cannot update an object that has not been saved");
        }
    };
    ClientPath.loadFromDatabase = function (angularFire, userid, clientId) {
        var strPath = ClientPath.buildPath(userid, clientId);
        return angularFire.database.object(strPath)
            .map(function (itemClient) {
            var objClientPath = new ClientPath();
            objClientPath.m_Client = Client_1.Client.fromFirebase(itemClient);
            objClientPath.__path = itemClient.$key;
            objClientPath.m_JobPathList = ClientJobReference.loadAllFromDatabase(angularFire, userid, objClientPath.__path)
                .map(function (objRef) {
                return objRef.m_JobPath;
            });
            return objClientPath;
        });
    };
    ClientPath.loadAllFromDatabase = function (angularFire, userid) {
        var strPath = ClientPath.buildPath(userid);
        return angularFire.database.list(strPath)
            .map(function (listClient) {
            if (listClient
                &&
                    listClient.length > 0) {
                return listClient.map(function (itemClient) {
                    var objClientPath = new ClientPath();
                    objClientPath.m_Client = Client_1.Client.fromFirebase(itemClient);
                    objClientPath.__path = itemClient.$key;
                    objClientPath.m_JobPathList = ClientJobReference.loadAllFromDatabase(angularFire, userid, objClientPath.__path)
                        .map(function (objRef) {
                        return objRef.m_JobPath;
                    });
                    return objClientPath;
                });
            }
        });
    };
    ClientPath.prototype.exists = function (angularFire, userid, clientId) {
        var strPath = ClientPath.buildPath(userid, clientId);
        return angularFire.database.object(strPath)
            .subscribe(function (objClientPath) {
            return objClientPath.$exists();
        }, function () {
            return false;
        });
    };
    ClientPath.buildPath = function (userid, strUuid) {
        var strPath = "/users/" + userid + "/clients";
        if (strUuid) {
            strPath += "/" + strUuid;
        }
        return strPath;
    };
    return ClientPath;
}());
exports.ClientPath = ClientPath;
//# sourceMappingURL=ClientPath.js.map