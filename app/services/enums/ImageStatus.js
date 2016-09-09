// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Sep 06 21:07:01 AEST 2016
"use strict";
var lodash_1 = require("lodash");
var ImageStatus = (function () {
    function ImageStatus(name, value, display, icon, group) {
        this.name = name;
        this.value = value;
        this.display = display;
        this.icon = icon;
        this.group = group;
    }
    Object.defineProperty(ImageStatus, "defaultValue", {
        get: function () {
            return ImageStatus.storage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageStatus, "storage", {
        get: function () {
            return ImageStatus.allValues.storage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageStatus, "local", {
        get: function () {
            return ImageStatus.allValues.local;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageStatus, "deleted", {
        get: function () {
            return ImageStatus.allValues.deleted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageStatus, "unknown", {
        get: function () {
            return ImageStatus.allValues.unknown;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageStatus, "allValues", {
        get: function () {
            return {
                storage: new ImageStatus("storage", 1, "Storage", "null", []),
                local: new ImageStatus("local", 2, "Local", "null", []),
                deleted: new ImageStatus("deleted", 3, "Deleted", "null", []),
                unknown: new ImageStatus("unknown", 100, "Unknown", "null", [])
            };
        },
        enumerable: true,
        configurable: true
    });
    ImageStatus.getValuesForContext = function (strContext) {
        var listReturn = [];
        Object.keys(ImageStatus.allValues).forEach(function (key) {
            if (ImageStatus.allValues[key].group.length === 0 || lodash_1.findIndex(ImageStatus.allValues[key].group, strContext) >= 0) {
                listReturn.push(ImageStatus.allValues[key]);
            }
        });
        return listReturn;
    };
    return ImageStatus;
}());
exports.ImageStatus = ImageStatus;
//# sourceMappingURL=ImageStatus.js.map