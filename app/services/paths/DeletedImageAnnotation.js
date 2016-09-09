// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Fri Sep 09 19:42:27 AEST 2016
"use strict";
var ImageAnnotation_1 = require("../types/ImageAnnotation");
var DeletedImageAnnotation = (function () {
    function DeletedImageAnnotation() {
        this.m_ImageAnnotation = new ImageAnnotation_1.ImageAnnotation();
        this.__path = "";
    }
    Object.defineProperty(DeletedImageAnnotation.prototype, "ImageAnnotation", {
        get: function () {
            return this.m_ImageAnnotation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeletedImageAnnotation.prototype, "key", {
        get: function () {
            return this.__path;
        },
        enumerable: true,
        configurable: true
    });
    DeletedImageAnnotation.prototype.saveToDatabase = function (angularFire, userid, imageId) {
        var _this = this;
        var listPromises = [];
        var strPath = DeletedImageAnnotation.buildPath(userid, imageId, this.__path);
        var objFirebase = this.m_ImageAnnotation.toFirebase();
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
    DeletedImageAnnotation.prototype.updateInDatabase = function (angularFire, userid, imageId) {
        // TODO: injected path updates not implemented...
        if (this.__path) {
            var strPath = DeletedImageAnnotation.buildPath(userid, imageId, this.__path);
            var objFirebase = this.m_ImageAnnotation.getUpdate();
            return angularFire.database.object(strPath).update(objFirebase)
                .then(function () {
                return true;
            });
        }
        else {
            throw new Error("Cannot update an object that has not been saved");
        }
    };
    DeletedImageAnnotation.loadFromDatabase = function (angularFire, userid, imageId, annotateId) {
        var strPath = DeletedImageAnnotation.buildPath(userid, imageId, annotateId);
        return angularFire.database.object(strPath)
            .map(function (itemImageAnnotation) {
            var objDeletedImageAnnotation = new DeletedImageAnnotation();
            objDeletedImageAnnotation.m_ImageAnnotation = ImageAnnotation_1.ImageAnnotation.fromFirebase(itemImageAnnotation);
            objDeletedImageAnnotation.__path = itemImageAnnotation.$key;
            return objDeletedImageAnnotation;
        });
    };
    DeletedImageAnnotation.loadAllFromDatabase = function (angularFire, userid, imageId) {
        var strPath = DeletedImageAnnotation.buildPath(userid, imageId);
        return angularFire.database.list(strPath)
            .map(function (listImageAnnotation) {
            if (listImageAnnotation
                &&
                    listImageAnnotation.length > 0) {
                return listImageAnnotation.map(function (itemImageAnnotation) {
                    var objDeletedImageAnnotation = new DeletedImageAnnotation();
                    objDeletedImageAnnotation.m_ImageAnnotation = ImageAnnotation_1.ImageAnnotation.fromFirebase(itemImageAnnotation);
                    objDeletedImageAnnotation.__path = itemImageAnnotation.$key;
                    return objDeletedImageAnnotation;
                });
            }
        });
    };
    DeletedImageAnnotation.prototype.exists = function (angularFire, userid, imageId, annotateId) {
        var strPath = DeletedImageAnnotation.buildPath(userid, imageId, annotateId);
        return angularFire.database.object(strPath)
            .subscribe(function (objDeletedImageAnnotation) {
            return objDeletedImageAnnotation.$exists();
        }, function () {
            return false;
        });
    };
    DeletedImageAnnotation.buildPath = function (userid, imageId, strUuid) {
        var strPath = "/images/" + userid + "/deleted/" + imageId + "/annotate";
        if (strUuid) {
            strPath += "/" + strUuid;
        }
        return strPath;
    };
    return DeletedImageAnnotation;
}());
exports.DeletedImageAnnotation = DeletedImageAnnotation;
//# sourceMappingURL=DeletedImageAnnotation.js.map