"use strict";
var testing_1 = require("@angular/core/testing");
var ActivityPath_1 = require("../ActivityPath");
var angularfire2_1 = require("angularfire2/angularfire2");
var moment = require("moment");
var lodash = require("lodash");
var UserData_1 = require("../UserData");
var firebase_1 = require("firebase");
var JobPath_1 = require("../JobPath");
var JobType_1 = require("../../enums/JobType");
var JobStatus_1 = require("../../enums/JobStatus");
var chai = require("chai");
var expect = chai.expect;
describe("Data layer tests...", function () {
    var angularFire;
    var firebaseAuth;
    var listPathsToRemove = [];
    var userCredentials = { email: "", password: "" };
    this.timeout(50000);
    beforeEach(function () {
        console.log(firebase_1.app("[DEFAULT]"));
        testing_1.TestBed.configureTestingModule({
            declarations: [],
            providers: [
                { provide: angularfire2_1.FirebaseApp, useValue: firebase_1.app("[DEFAULT]") },
                angularfire2_1.firebaseAuthConfig({
                    provider: angularfire2_1.AuthProviders.Password,
                    method: angularfire2_1.AuthMethods.Password
                }),
                angularfire2_1.AngularFire,
                angularfire2_1.FirebaseAuth
            ],
            imports: []
        });
        console.log("before each...");
    });
    // Inject the angularFire and firebaseAuth providers before each test
    beforeEach(testing_1.inject([angularfire2_1.AngularFire, angularfire2_1.FirebaseAuth], function (_angularFire, _firebaseAuth) {
        angularFire = _angularFire;
        firebaseAuth = _firebaseAuth;
    }));
    // After each test clean out the database.
    // Each test will need to add the root of the path it wants to remove from the database
    afterEach(function (done) {
        if (userCredentials.email
            &&
                listPathsToRemove.length > 0) {
            firebaseAuth.login(userCredentials)
                .then(function () {
                var authSubscribe = angularFire.auth.subscribe(function (auth) {
                    var listPromises = [];
                    lodash.forEach(listPathsToRemove, function (path) {
                        // listPromises.push(angularFire.database.list(path).remove());
                    });
                    Promise.all(listPromises)
                        .then(function () {
                        listPathsToRemove = [];
                        userCredentials = { email: "", password: "" };
                        done();
                    });
                });
                authSubscribe.unsubscribe();
            });
        }
        else {
            done();
        }
    });
    // Note that this test requires the user created in the database be manually removed afterward.
    // This is why it is set to skip...
    describe("Confirm a new user can be added to the database and a user data object added", function () {
        it.skip("Should create new user and add user data for the user and then read the user data back", function (done) {
            userCredentials.email = "bob_1@bobmail.com";
            userCredentials.password = "password";
            var authState;
            firebaseAuth.createUser(userCredentials)
                .then(function (_authState) {
                authState = _authState;
                var userData = new UserData_1.UserData();
                userData.User.email = userCredentials.email;
                userData.User.name = "Bob";
                userData.User.surname = "Willis";
                return userData.saveToDatabase(angularFire, authState.uid);
            })
                .then(function () {
                return UserData_1.UserData.loadFromDatabase(angularFire, authState.uid);
            })
                .then(function (userDataObs) {
                var bSeen = false;
                expect(userDataObs).to.not.be.null;
                userDataObs.subscribe(function (userData) {
                    if (!bSeen) {
                        bSeen = true;
                        expect(userData).to.not.be.null;
                        expect(userData.User).to.not.be.null;
                        expect(userData.User.email).to.equal(userCredentials.email);
                        expect(userData.User.name).to.equal("Bob");
                        expect(userData.User.surname).to.equal("Willis");
                        listPathsToRemove.push(UserData_1.UserData.buildPath(authState.uid));
                        done();
                    }
                });
            });
        });
    });
    describe("Add new user details", function () {
        it("Should create a user data in database", function (done) {
            console.log("injecting angularFire async...");
            userCredentials.email = "bob@bobmail.com";
            userCredentials.password = "password";
            firebaseAuth.login(userCredentials)
                .then(function () {
                var authSubscribe = angularFire.auth.subscribe(function (auth) {
                    console.log("logged in user: " + auth.uid);
                    var userData = new UserData_1.UserData();
                    userData.User.email = userCredentials.email;
                    userData.User.name = "Bob";
                    userData.User.surname = "Geldoff";
                    userData.saveToDatabase(angularFire, auth.uid)
                        .then(function () {
                        listPathsToRemove.push(UserData_1.UserData.buildPath(auth.uid));
                        done();
                    });
                });
                authSubscribe.unsubscribe();
            });
        });
    });
    describe("Confirm saving database objects (ensure schema compatibility)", function () {
        it("Should create an activity and save it to firebase", function (done) {
            console.log("injecting angularFire async...");
            userCredentials.email = "bob@bobmail.com";
            userCredentials.password = "password";
            firebaseAuth.login(userCredentials)
                .then(function () {
                var authSubscribe = angularFire.auth.subscribe(function (auth) {
                    var actPath = new ActivityPath_1.ActivityPath();
                    actPath.Activity.started = new Date().getUTCMilliseconds();
                    actPath.Activity.duration = 60 * 60 * 1000;
                    actPath.Activity.description = "A new activity";
                    actPath.Activity.yearId = moment().format("YYYY");
                    actPath.Activity.monthId = moment().format("MMMM");
                    actPath.Activity.dayId = moment().format("DD");
                    actPath.saveToDatabase(angularFire, auth.uid, actPath.Activity.yearId, actPath.Activity.monthId, actPath.Activity.dayId)
                        .then(function () {
                        listPathsToRemove.push(ActivityPath_1.ActivityPath.buildPath(auth.uid, actPath.Activity.yearId, actPath.Activity.monthId, actPath.Activity.dayId));
                        done();
                    })
                        .catch(function (error) {
                        console.log(error);
                        done(error);
                    });
                });
                authSubscribe.unsubscribe();
            });
        });
    });
    describe("Create a full set of data and ensure references are linked", function () {
        it.only("Add job to the database and reference an activity from the job", function (done) {
            console.log("injecting angularFire async...");
            userCredentials.email = "bob@bobmail.com";
            userCredentials.password = "password";
            firebaseAuth.login(userCredentials)
                .then(function () {
                var authSubscribe = angularFire.auth.subscribe(function (auth) {
                    var actPath = new ActivityPath_1.ActivityPath();
                    actPath.Activity.started = new Date().getUTCMilliseconds();
                    actPath.Activity.duration = 60 * 60 * 1000;
                    actPath.Activity.description = "A new activity";
                    actPath.Activity.yearId = moment().format("YYYY");
                    actPath.Activity.monthId = moment().format("MMMM");
                    actPath.Activity.dayId = moment().format("DD");
                    actPath.saveToDatabase(angularFire, auth.uid, actPath.Activity.yearId, actPath.Activity.monthId, actPath.Activity.dayId)
                        .then(function () {
                        listPathsToRemove.push(ActivityPath_1.ActivityPath.buildPath(auth.uid, actPath.Activity.yearId, actPath.Activity.monthId, actPath.Activity.dayId));
                        return true;
                    })
                        .then(function () {
                        var jobPath = new JobPath_1.JobPath();
                        jobPath.Job.name = "Test job";
                        jobPath.Job.description = "A job test";
                        jobPath.Job.jobType = JobType_1.JobType.billable;
                        jobPath.Job.jobStatus = JobStatus_1.JobStatus.billed;
                        jobPath.ActivityPathList.push(actPath);
                        listPathsToRemove.push(JobPath_1.JobPath.buildPath(auth.uid));
                        return jobPath.saveToDatabase(angularFire, auth.uid);
                    })
                        .then(function () {
                        done();
                    })
                        .catch(function (error) {
                        console.log(error);
                        done(error);
                    });
                });
                authSubscribe.unsubscribe();
            });
        });
    });
});
//# sourceMappingURL=Path-spec.js.map