// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Sep 06 21:07:01 AEST 2016
"use strict";
var lodash_1 = require("lodash");
var ClientType = (function () {
    function ClientType(name, value, display, icon, group) {
        this.name = name;
        this.value = value;
        this.display = display;
        this.icon = icon;
        this.group = group;
    }
    Object.defineProperty(ClientType, "defaultValue", {
        get: function () {
            return ClientType.primary;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientType, "primary", {
        get: function () {
            return ClientType.allValues.primary;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientType, "secondary", {
        get: function () {
            return ClientType.allValues.secondary;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientType, "unknown", {
        get: function () {
            return ClientType.allValues.unknown;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientType, "allValues", {
        get: function () {
            return {
                primary: new ClientType("primary", 1, "Primary", "null", []),
                secondary: new ClientType("secondary", 2, "Secondary", "null", []),
                unknown: new ClientType("unknown", 100, "Unknown", "null", [])
            };
        },
        enumerable: true,
        configurable: true
    });
    ClientType.getValuesForContext = function (strContext) {
        var listReturn = [];
        Object.keys(ClientType.allValues).forEach(function (key) {
            if (ClientType.allValues[key].group.length === 0 || lodash_1.findIndex(ClientType.allValues[key].group, strContext) >= 0) {
                listReturn.push(ClientType.allValues[key]);
            }
        });
        return listReturn;
    };
    return ClientType;
}());
exports.ClientType = ClientType;
//# sourceMappingURL=ClientType.js.map