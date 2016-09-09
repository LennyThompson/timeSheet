// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Sep 06 21:07:01 AEST 2016
"use strict";
var lodash_1 = require("lodash");
var AttachmentType = (function () {
    function AttachmentType(name, value, display, icon, group) {
        this.name = name;
        this.value = value;
        this.display = display;
        this.icon = icon;
        this.group = group;
    }
    Object.defineProperty(AttachmentType, "defaultValue", {
        get: function () {
            return AttachmentType.document;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AttachmentType, "document", {
        get: function () {
            return AttachmentType.allValues.document;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AttachmentType, "image", {
        get: function () {
            return AttachmentType.allValues.image;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AttachmentType, "other", {
        get: function () {
            return AttachmentType.allValues.other;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AttachmentType, "unknown", {
        get: function () {
            return AttachmentType.allValues.unknown;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AttachmentType, "allValues", {
        get: function () {
            return {
                document: new AttachmentType("document", 1, "Document", "null", []),
                image: new AttachmentType("image", 2, "Image", "null", []),
                other: new AttachmentType("other", 3, "Other", "null", []),
                unknown: new AttachmentType("unknown", 100, "Unknown", "null", [])
            };
        },
        enumerable: true,
        configurable: true
    });
    AttachmentType.getValuesForContext = function (strContext) {
        var listReturn = [];
        Object.keys(AttachmentType.allValues).forEach(function (key) {
            if (AttachmentType.allValues[key].group.length === 0 || lodash_1.findIndex(AttachmentType.allValues[key].group, strContext) >= 0) {
                listReturn.push(AttachmentType.allValues[key]);
            }
        });
        return listReturn;
    };
    return AttachmentType;
}());
exports.AttachmentType = AttachmentType;
//# sourceMappingURL=AttachmentType.js.map