"use strict";
var FirebaseTimestamp_1 = require("../reference/FirebaseTimestamp");
var firebase_1 = require("firebase");
var ImageAnnotation = (function () {
    function ImageAnnotation() {
        this.m_created = new FirebaseTimestamp_1.FirebaseTimestamp();
        this.m_updated = new FirebaseTimestamp_1.FirebaseTimestamp();
        this.m_annotation = "";
        this.m_bannotationUpdated = true;
    }
    Object.defineProperty(ImageAnnotation.prototype, "created", {
        get: function () {
            return this.m_created;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageAnnotation.prototype, "updated", {
        get: function () {
            return this.m_updated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageAnnotation.prototype, "annotation", {
        get: function () {
            return this.m_annotation;
        },
        set: function (annotation) {
            this.m_annotation = annotation;
            this.m_bannotationUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    ImageAnnotation.prototype.getUpdate = function () {
        var objUpdated = {};
        var bUpdated = false;
        if (this.m_bannotationUpdated) {
            objUpdated["annotation"] = this.m_annotation;
        }
        if (bUpdated) {
            objUpdated["updated"] = firebase_1.database.ServerValue.TIMESTAMP;
        }
        return objUpdated;
    };
    ImageAnnotation.prototype.toFirebase = function () {
        if (this.m_created.timeStamp === 0) {
            this.m_created.setUpdate();
        }
        if (this.m_updated.timeStamp === 0) {
            this.m_updated.setUpdate();
        }
        var objFirebase = {
            created: this.m_created.timeStamp,
            updated: this.m_updated.timeStamp,
            annotation: this.m_annotation
        };
        return objFirebase;
    };
    ImageAnnotation.prototype.setSaved = function () {
        this.m_bannotationUpdated = false;
    };
    ImageAnnotation.fromFirebase = function (firebaseObj) {
        var objImageAnnotation = new ImageAnnotation();
        objImageAnnotation.m_created = new FirebaseTimestamp_1.FirebaseTimestamp(firebaseObj.created);
        objImageAnnotation.m_updated = new FirebaseTimestamp_1.FirebaseTimestamp(firebaseObj.updated);
        objImageAnnotation.m_annotation = firebaseObj.annotation;
        objImageAnnotation.setSaved();
        return objImageAnnotation;
    };
    return ImageAnnotation;
}());
exports.ImageAnnotation = ImageAnnotation;
//# sourceMappingURL=ImageAnnotation.js.map