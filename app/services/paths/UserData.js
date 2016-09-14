// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Wed Sep 14 10:04:47 AEST 2016
"use strict";
var User_1 = require("../types/User");
var UserData = (function () {
    function UserData() {
        this.m_User = new User_1.User();
    }
    Object.defineProperty(UserData.prototype, "User", {
        get: function () {
            return this.m_User;
        },
        enumerable: true,
        configurable: true
    });
    UserData.prototype.saveToDatabase = function (angularFire, userid) {
        var listPromises = [];
        var strPath = UserData.buildPath(userid);
        var objFirebase = this.m_User.toFirebase();
        listPromises.push(angularFire.database.object(strPath).set(objFirebase)
            .then(function () {
            return true;
        }));
        return Promise.all(listPromises);
    };
    UserData.prototype.updateInDatabase = function (angularFire, userid) {
        // TODO: injected path updates not implemented...
        var strPath = UserData.buildPath(userid);
        var objFirebase = this.m_User.getUpdate();
        return angularFire.database.object(strPath).update(objFirebase)
            .then(function () {
            return true;
        });
    };
    UserData.loadFromDatabase = function (angularFire, userid) {
        var strPath = UserData.buildPath(userid);
        return angularFire.database.object(strPath)
            .map(function (itemUser) {
            var objUserData = new UserData();
            objUserData.m_User = User_1.User.fromFirebase(itemUser);
            return objUserData;
        });
    };
    UserData.prototype.exists = function (angularFire, userid) {
        var strPath = UserData.buildPath(userid);
        return angularFire.database.object(strPath)
            .subscribe(function (objUserData) {
            // TODO: change this once angularfire2 is updated to include $exists
            return true; // objUserData.$exists();
        }, function () {
            return false;
        });
    };
    UserData.buildPath = function (userid) {
        var strPath = "/users/" + userid + "/user";
        return strPath;
    };
    return UserData;
}());
exports.UserData = UserData;
//# sourceMappingURL=UserData.js.map