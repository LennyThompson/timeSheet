// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Fri Sep 09 19:42:27 AEST 2016
"use strict";
var ImageAnnotation_1 = require("../types/ImageAnnotation");
var ActiveImageAnnotation = (function () {
    function ActiveImageAnnotation() {
        this.m_ImageAnnotation = new ImageAnnotation_1.ImageAnnotation();
        this.__path = "";
    }
    Object.defineProperty(ActiveImageAnnotation.prototype, "ImageAnnotation", {
        get: function () {
            return this.m_ImageAnnotation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActiveImageAnnotation.prototype, "key", {
        get: function () {
            return this.__path;
        },
        enumerable: true,
        configurable: true
    });
    ActiveImageAnnotation.prototype.saveToDatabase = function (angularFire, userid, imageId) {
        var _this = this;
        var listPromises = [];
        var strPath = ActiveImageAnnotation.buildPath(userid, imageId, this.__path);
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
    ActiveImageAnnotation.prototype.updateInDatabase = function (angularFire, userid, imageId) {
        // TODO: injected path updates not implemented...
        if (this.__path) {
            var strPath = ActiveImageAnnotation.buildPath(userid, imageId, this.__path);
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
    ActiveImageAnnotation.loadFromDatabase = function (angularFire, userid, imageId, annotateId) {
        var strPath = ActiveImageAnnotation.buildPath(userid, imageId, annotateId);
        return angularFire.database.object(strPath)
            .map(function (itemImageAnnotation) {
            var objActiveImageAnnotation = new ActiveImageAnnotation();
            objActiveImageAnnotation.m_ImageAnnotation = ImageAnnotation_1.ImageAnnotation.fromFirebase(itemImageAnnotation);
            objActiveImageAnnotation.__path = itemImageAnnotation.$key;
            return objActiveImageAnnotation;
        });
    };
    ActiveImageAnnotation.loadAllFromDatabase = function (angularFire, userid, imageId) {
        var strPath = ActiveImageAnnotation.buildPath(userid, imageId);
        return angularFire.database.list(strPath)
            .map(function (listImageAnnotation) {
            if (listImageAnnotation
                &&
                    listImageAnnotation.length > 0) {
                return listImageAnnotation.map(function (itemImageAnnotation) {
                    var objActiveImageAnnotation = new ActiveImageAnnotation();
                    objActiveImageAnnotation.m_ImageAnnotation = ImageAnnotation_1.ImageAnnotation.fromFirebase(itemImageAnnotation);
                    objActiveImageAnnotation.__path = itemImageAnnotation.$key;
                    return objActiveImageAnnotation;
                });
            }
        });
    };
    ActiveImageAnnotation.prototype.exists = function (angularFire, userid, imageId, annotateId) {
        var strPath = ActiveImageAnnotation.buildPath(userid, imageId, annotateId);
        return angularFire.database.object(strPath)
            .subscribe(function (objActiveImageAnnotation) {
            return objActiveImageAnnotation.$exists();
        }, function () {
            return false;
        });
    };
    ActiveImageAnnotation.buildPath = function (userid, imageId, strUuid) {
        var strPath = "/images/" + userid + "/active/" + imageId + "/annotate";
        if (strUuid) {
            strPath += "/" + strUuid;
        }
        return strPath;
    };
    return ActiveImageAnnotation;
}());
exports.ActiveImageAnnotation = ActiveImageAnnotation;
//# sourceMappingURL=ActiveImageAnnotation.js.map