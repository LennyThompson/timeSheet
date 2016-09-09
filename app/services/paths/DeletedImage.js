// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Fri Sep 09 19:42:27 AEST 2016
"use strict";
var Image_1 = require("../types/Image");
var DeletedImage = (function () {
    function DeletedImage() {
        this.m_Image = new Image_1.Image();
        this.__path = "";
    }
    Object.defineProperty(DeletedImage.prototype, "Image", {
        get: function () {
            return this.m_Image;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeletedImage.prototype, "key", {
        get: function () {
            return this.__path;
        },
        enumerable: true,
        configurable: true
    });
    DeletedImage.prototype.saveToDatabase = function (angularFire, userid) {
        var _this = this;
        var listPromises = [];
        var strPath = DeletedImage.buildPath(userid, this.__path);
        var objFirebase = this.m_Image.toFirebase();
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
    DeletedImage.prototype.updateInDatabase = function (angularFire, userid) {
        // TODO: injected path updates not implemented...
        if (this.__path) {
            var strPath = DeletedImage.buildPath(userid, this.__path);
            var objFirebase = this.m_Image.getUpdate();
            return angularFire.database.object(strPath).update(objFirebase)
                .then(function () {
                return true;
            });
        }
        else {
            throw new Error("Cannot update an object that has not been saved");
        }
    };
    DeletedImage.loadFromDatabase = function (angularFire, userid, imageId) {
        var strPath = DeletedImage.buildPath(userid, imageId);
        return angularFire.database.object(strPath)
            .map(function (itemImage) {
            var objDeletedImage = new DeletedImage();
            objDeletedImage.m_Image = Image_1.Image.fromFirebase(itemImage);
            objDeletedImage.__path = itemImage.$key;
            return objDeletedImage;
        });
    };
    DeletedImage.loadAllFromDatabase = function (angularFire, userid) {
        var strPath = DeletedImage.buildPath(userid);
        return angularFire.database.list(strPath)
            .map(function (listImage) {
            if (listImage
                &&
                    listImage.length > 0) {
                return listImage.map(function (itemImage) {
                    var objDeletedImage = new DeletedImage();
                    objDeletedImage.m_Image = Image_1.Image.fromFirebase(itemImage);
                    objDeletedImage.__path = itemImage.$key;
                    return objDeletedImage;
                });
            }
        });
    };
    DeletedImage.prototype.exists = function (angularFire, userid, imageId) {
        var strPath = DeletedImage.buildPath(userid, imageId);
        return angularFire.database.object(strPath)
            .subscribe(function (objDeletedImage) {
            return objDeletedImage.$exists();
        }, function () {
            return false;
        });
    };
    DeletedImage.buildPath = function (userid, strUuid) {
        var strPath = "/images/" + userid + "/deleted";
        if (strUuid) {
            strPath += "/" + strUuid;
        }
        return strPath;
    };
    return DeletedImage;
}());
exports.DeletedImage = DeletedImage;
//# sourceMappingURL=DeletedImage.js.map