"use strict";
var firebase_1 = require("firebase");
var StorageObject = (function () {
    function StorageObject(storagePath, fireObject, uuid) {
        this.m_storagePath = storagePath;
        this.m_objectFile = fireObject;
        this.m_uuid = uuid;
    }
    Object.defineProperty(StorageObject.prototype, "objectFile", {
        get: function () {
            return this.m_objectFile;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageObject.prototype, "storagePath", {
        get: function () {
            return this.m_storagePath;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageObject.prototype, "uuid", {
        get: function () {
            return this.m_uuid;
        },
        enumerable: true,
        configurable: true
    });
    StorageObject.prototype.setStorageRoot = function (strRoot) {
        this.m_storagePath = strRoot;
    };
    StorageObject.prototype.setStorageObject = function (storageObject) {
        this.m_objectFile = storageObject;
    };
    StorageObject.prototype.saveToFirebase = function (angularFire) {
        var strPath = this.m_storagePath ? this.m_storagePath : this.buildPath(angularFire, this.m_uuid);
        var objectMetadata = {
            contentType: this.m_objectFile.type
        };
        var objectTask = firebase_1.storage().ref().child(strPath).put(this.m_objectFile.file, objectMetadata);
        return new Promise(function (resolve, reject) {
            objectTask.on(firebase_1.storage.TaskEvent.STATE_CHANGED, {
                next: function () {
                },
                error: function (error) {
                    reject(error);
                },
                complete: function () {
                    resolve(true);
                }
            });
        });
    };
    return StorageObject;
}());
exports.StorageObject = StorageObject;
//# sourceMappingURL=StorageObject.js.map