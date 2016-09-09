"use strict";
var FirebaseTimestamp_1 = require("../reference/FirebaseTimestamp");
var AttachmentType_1 = require("../enums/AttachmentType");
var firebase_1 = require("firebase");
var Attachment = (function () {
    function Attachment() {
        this.m_created = new FirebaseTimestamp_1.FirebaseTimestamp();
        this.m_updated = new FirebaseTimestamp_1.FirebaseTimestamp();
        this.m_attachmentType = AttachmentType_1.AttachmentType.defaultValue;
        this.m_name = "";
        this.m_comment = "";
        this.m_location = "";
        this.m_battachmentTypeUpdated = true;
        this.m_bnameUpdated = true;
        this.m_bcommentUpdated = true;
        this.m_blocationUpdated = true;
    }
    Object.defineProperty(Attachment.prototype, "created", {
        get: function () {
            return this.m_created;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Attachment.prototype, "updated", {
        get: function () {
            return this.m_updated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Attachment.prototype, "attachmentType", {
        get: function () {
            return this.m_attachmentType;
        },
        set: function (attachmentType) {
            this.m_attachmentType = attachmentType;
            this.m_battachmentTypeUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Attachment.prototype, "name", {
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
    Object.defineProperty(Attachment.prototype, "comment", {
        get: function () {
            return this.m_comment;
        },
        set: function (comment) {
            this.m_comment = comment;
            this.m_bcommentUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Attachment.prototype, "location", {
        get: function () {
            return this.m_location;
        },
        set: function (location) {
            this.m_location = location;
            this.m_blocationUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Attachment.prototype.getUpdate = function () {
        var objUpdated = {};
        var bUpdated = false;
        if (this.m_battachmentTypeUpdated) {
            objUpdated["attachmentType"] = this.m_attachmentType.name;
        }
        if (this.m_bnameUpdated) {
            objUpdated["name"] = this.m_name;
        }
        if (this.m_bcommentUpdated) {
            objUpdated["comment"] = this.m_comment;
        }
        if (this.m_blocationUpdated) {
            objUpdated["location"] = this.m_location;
        }
        if (bUpdated) {
            objUpdated["updated"] = firebase_1.database.ServerValue.TIMESTAMP;
        }
        return objUpdated;
    };
    Attachment.prototype.toFirebase = function () {
        if (this.m_created.timeStamp === 0) {
            this.m_created.setUpdate();
        }
        if (this.m_updated.timeStamp === 0) {
            this.m_updated.setUpdate();
        }
        var objFirebase = {
            created: this.m_created.timeStamp,
            updated: this.m_updated.timeStamp,
            attachmentType: this.m_attachmentType.name,
            name: this.m_name,
            comment: this.m_comment,
            location: this.m_location
        };
        return objFirebase;
    };
    Attachment.prototype.setSaved = function () {
        this.m_battachmentTypeUpdated = false;
        this.m_bnameUpdated = false;
        this.m_bcommentUpdated = false;
        this.m_blocationUpdated = false;
    };
    Attachment.fromFirebase = function (firebaseObj) {
        var objAttachment = new Attachment();
        objAttachment.m_created = new FirebaseTimestamp_1.FirebaseTimestamp(firebaseObj.created);
        objAttachment.m_updated = new FirebaseTimestamp_1.FirebaseTimestamp(firebaseObj.updated);
        objAttachment.m_attachmentType = AttachmentType_1.AttachmentType[firebaseObj.attachmentType];
        objAttachment.m_name = firebaseObj.name;
        objAttachment.m_comment = firebaseObj.comment;
        objAttachment.m_location = firebaseObj.location;
        objAttachment.setSaved();
        return objAttachment;
    };
    return Attachment;
}());
exports.Attachment = Attachment;
//# sourceMappingURL=Attachment.js.map