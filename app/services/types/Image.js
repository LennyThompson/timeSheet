"use strict";
var FirebaseTimestamp_1 = require("../reference/FirebaseTimestamp");
var ImageCategory_1 = require("../enums/ImageCategory");
var ImageStatus_1 = require("../enums/ImageStatus");
var firebase_1 = require("firebase");
var Image = (function () {
    function Image() {
        this.m_created = new FirebaseTimestamp_1.FirebaseTimestamp();
        this.m_updated = new FirebaseTimestamp_1.FirebaseTimestamp();
        this.m_name = "";
        this.m_category = ImageCategory_1.ImageCategory.defaultValue;
        this.m_status = ImageStatus_1.ImageStatus.defaultValue;
        this.m_description = "";
        this.m_comments = "";
        this.m_location = "";
        this.m_storage = "";
        this.m_bnameUpdated = true;
        this.m_bcategoryUpdated = true;
        this.m_bstatusUpdated = true;
        this.m_bdescriptionUpdated = true;
        this.m_bcommentsUpdated = true;
        this.m_blocationUpdated = true;
        this.m_bstorageUpdated = true;
    }
    Object.defineProperty(Image.prototype, "created", {
        get: function () {
            return this.m_created;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "updated", {
        get: function () {
            return this.m_updated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "name", {
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
    Object.defineProperty(Image.prototype, "category", {
        get: function () {
            return this.m_category;
        },
        set: function (category) {
            this.m_category = category;
            this.m_bcategoryUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "status", {
        get: function () {
            return this.m_status;
        },
        set: function (status) {
            this.m_status = status;
            this.m_bstatusUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "description", {
        get: function () {
            return this.m_description;
        },
        set: function (description) {
            this.m_description = description;
            this.m_bdescriptionUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "comments", {
        get: function () {
            return this.m_comments;
        },
        set: function (comments) {
            this.m_comments = comments;
            this.m_bcommentsUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Image.prototype, "location", {
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
    Object.defineProperty(Image.prototype, "storage", {
        get: function () {
            return this.m_storage;
        },
        set: function (storage) {
            this.m_storage = storage;
            this.m_bstorageUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Image.prototype.getUpdate = function () {
        var objUpdated = {};
        var bUpdated = false;
        if (this.m_bnameUpdated) {
            objUpdated["name"] = this.m_name;
        }
        if (this.m_bcategoryUpdated) {
            objUpdated["category"] = this.m_category.name;
        }
        if (this.m_bstatusUpdated) {
            objUpdated["status"] = this.m_status.name;
        }
        if (this.m_bdescriptionUpdated) {
            objUpdated["description"] = this.m_description;
        }
        if (this.m_bcommentsUpdated) {
            objUpdated["comments"] = this.m_comments;
        }
        if (this.m_blocationUpdated) {
            objUpdated["location"] = this.m_location;
        }
        if (this.m_bstorageUpdated) {
            objUpdated["storage"] = this.m_storage;
        }
        if (bUpdated) {
            objUpdated["updated"] = firebase_1.database.ServerValue.TIMESTAMP;
        }
        return objUpdated;
    };
    Image.prototype.toFirebase = function () {
        if (this.m_created.timeStamp === 0) {
            this.m_created.setUpdate();
        }
        if (this.m_updated.timeStamp === 0) {
            this.m_updated.setUpdate();
        }
        var objFirebase = {
            created: this.m_created.timeStamp,
            updated: this.m_updated.timeStamp,
            name: this.m_name,
            category: this.m_category.name,
            status: this.m_status.name,
            description: this.m_description,
            comments: this.m_comments,
            location: this.m_location,
            storage: this.m_storage
        };
        return objFirebase;
    };
    Image.prototype.setSaved = function () {
        this.m_bnameUpdated = false;
        this.m_bcategoryUpdated = false;
        this.m_bstatusUpdated = false;
        this.m_bdescriptionUpdated = false;
        this.m_bcommentsUpdated = false;
        this.m_blocationUpdated = false;
        this.m_bstorageUpdated = false;
    };
    Image.fromFirebase = function (firebaseObj) {
        var objImage = new Image();
        objImage.m_created = new FirebaseTimestamp_1.FirebaseTimestamp(firebaseObj.created);
        objImage.m_updated = new FirebaseTimestamp_1.FirebaseTimestamp(firebaseObj.updated);
        objImage.m_name = firebaseObj.name;
        objImage.m_category = ImageCategory_1.ImageCategory[firebaseObj.category];
        objImage.m_status = ImageStatus_1.ImageStatus[firebaseObj.status];
        objImage.m_description = firebaseObj.description;
        objImage.m_comments = firebaseObj.comments;
        objImage.m_location = firebaseObj.location;
        objImage.m_storage = firebaseObj.storage;
        objImage.setSaved();
        return objImage;
    };
    return Image;
}());
exports.Image = Image;
//# sourceMappingURL=Image.js.map