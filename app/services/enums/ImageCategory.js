// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Sep 06 21:07:01 AEST 2016
"use strict";
var lodash_1 = require("lodash");
var ImageCategory = (function () {
    function ImageCategory(name, value, display, icon, group) {
        this.name = name;
        this.value = value;
        this.display = display;
        this.icon = icon;
        this.group = group;
    }
    Object.defineProperty(ImageCategory, "defaultValue", {
        get: function () {
            return ImageCategory.family;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageCategory, "family", {
        get: function () {
            return ImageCategory.allValues.family;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageCategory, "friends", {
        get: function () {
            return ImageCategory.allValues.friends;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageCategory, "work", {
        get: function () {
            return ImageCategory.allValues.work;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageCategory, "other", {
        get: function () {
            return ImageCategory.allValues.other;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageCategory, "unknown", {
        get: function () {
            return ImageCategory.allValues.unknown;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageCategory, "allValues", {
        get: function () {
            return {
                family: new ImageCategory("family", 1, "Family", "null", []),
                friends: new ImageCategory("friends", 2, "Friends", "null", []),
                work: new ImageCategory("work", 3, "Work", "null", []),
                other: new ImageCategory("other", 4, "Other", "null", []),
                unknown: new ImageCategory("unknown", 100, "Unknown", "null", [])
            };
        },
        enumerable: true,
        configurable: true
    });
    ImageCategory.getValuesForContext = function (strContext) {
        var listReturn = [];
        Object.keys(ImageCategory.allValues).forEach(function (key) {
            if (ImageCategory.allValues[key].group.length === 0 || lodash_1.findIndex(ImageCategory.allValues[key].group, strContext) >= 0) {
                listReturn.push(ImageCategory.allValues[key]);
            }
        });
        return listReturn;
    };
    return ImageCategory;
}());
exports.ImageCategory = ImageCategory;
//# sourceMappingURL=ImageCategory.js.map