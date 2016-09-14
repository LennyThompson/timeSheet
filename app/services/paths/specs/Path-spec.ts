import { TestBed, inject } from "@angular/core/testing";
import { ActivityPath } from "../ActivityPath";
import {FirebaseModule} from "../../firebase/index";
import {
    AngularFire, FirebaseAuth, FirebaseAuthState, FirebaseApp, AuthProviders,
    AuthMethods, firebaseAuthConfig, FirebaseConfig, AngularFireAuth, WindowLocation
} from "angularfire2/angularfire2";
// import { FirebaseConfig as FirebaseUrl } from "angularfire2/angularfire2";
import {ActivityStatus} from "../../enums/ActivityStatus";
import {ActivityType} from "../../enums/ActivityType";
import {LockStatus} from "../../enums/LockStatus";
import {Subscription} from "rxjs";
import {first} from "rxjs/operator/first";
import * as moment from "moment";
import * as lodash from "lodash";
import {UserData} from "../UserData";
import { app } from "firebase";
import {JobPath} from "../JobPath";
import {JobType} from "../../enums/JobType";
import {JobStatus} from "../../enums/JobStatus";
import {OpaqueToken} from "@angular/core";
import {AuthBackend} from "angularfire2/auth";

const chai = require("chai");
const expect : Function = chai.expect;

describe("Data layer tests...", function()
{
    let angularFire : AngularFire;
    let firebaseAuth : FirebaseAuth;
    let listPathsToRemove = [];
    let userCredentials : any = { email: "", password: ""};
    this.timeout(50000);

    beforeEach(
        () =>
        {
            // console.log(app("[DEFAULT]"));
            TestBed.configureTestingModule(
                {
                    declarations: [],
                    providers: [
                        // {provide: FirebaseUrl, useValue: new OpaqueToken("FirebaseUrl") },
                        // {provide: WindowLocation, useValue: new OpaqueToken("WindowLocation") },
                        // { provide: FirebaseApp, useValue: app("[DEFAULT]") },
                        // firebaseAuthConfig({
                        //     provider: AuthProviders.Password,
                        //     method: AuthMethods.Password
                        // }),
                        // { provide: AngularFireAuth, useClass: AngularFireAuth },
                        // { provide: AuthBackend, useClass: AuthBackend },
                        AngularFire,
                        FirebaseAuth
                    ],
                    imports: [FirebaseModule]
                }
            );

            console.log("before each...");
        }
    );

    // Inject the angularFire and firebaseAuth providers before each test

    beforeEach(
        inject([AngularFire, FirebaseAuth],
            (_angularFire : AngularFire, _firebaseAuth : FirebaseAuth) =>
            {
                angularFire = _angularFire;
                firebaseAuth = _firebaseAuth;
            }

        )
    );

    // After each test clean out the database.
    // Each test will need to add the root of the path it wants to remove from the database
    afterEach(
        (done) =>
            {
                if
                (
                    userCredentials.email
                    &&
                    listPathsToRemove.length > 0
                )
                {
                    firebaseAuth.login(userCredentials)
                        .then(
                            () =>
                            {
                                let authSubscribe : Subscription = angularFire.auth.subscribe(
                                    (auth) =>
                                    {
                                        let listPromises = [];
                                        lodash.forEach(
                                            listPathsToRemove,
                                            (path) =>
                                            {
                                                listPromises.push(angularFire.database.list(path).remove());
                                            }
                                        );
                                        Promise.all(listPromises)
                                            .then(
                                                () =>
                                                {
                                                    listPathsToRemove = [];
                                                    userCredentials = { email: "", password: ""};
                                                    done();
                                                }
                                            );
                                    }
                                );
                                authSubscribe.unsubscribe();
                            }
                        );
                }
                else
                {
                    done();
                }
            }
    );

    // Note that this test requires the user created in the database be manually removed afterward.
    // This is why it is set to skip...

    describe("Confirm a new user can be added to the database and a user data object added", () =>
        {
            it.skip("Should create new user and add user data for the user and then read the user data back",
                (done) =>
                {
                    userCredentials.email = "bob_1@bobmail.com";
                    userCredentials.password = "password";
                    let authState : FirebaseAuthState;

                    firebaseAuth.createUser(userCredentials)
                        .then(
                            (_authState : FirebaseAuthState) =>
                            {
                                authState = _authState;
                                let userData : UserData = new UserData();
                                userData.User.email = userCredentials.email;
                                userData.User.name = "Bob";
                                userData.User.surname = "Willis";
                                return userData.saveToDatabase(angularFire, authState.uid);
                            }
                        )
                        .then(
                            () =>
                            {
                                return UserData.loadFromDatabase(angularFire, authState.uid);
                            }
                        )
                        .then(
                            (userDataObs : any) =>
                            {
                                let bSeen : boolean = false;
                                expect(userDataObs).to.not.be.null;
                                userDataObs.subscribe(
                                    (userData) =>
                                    {
                                        if (!bSeen)
                                        {
                                            bSeen = true;
                                            expect(userData).to.not.be.null;
                                            expect(userData.User).to.not.be.null;
                                            expect(userData.User.email).to.equal(userCredentials.email);
                                            expect(userData.User.name).to.equal("Bob");
                                            expect(userData.User.surname).to.equal("Willis");
                                            listPathsToRemove.push(UserData.buildPath(authState.uid));
                                            done();
                                        }
                                    }
                                );
                            }
                        );

                }
            );
        }
    );

    describe("Add new user details", () =>
        {
            it("Should create a user data in database",
                (done) =>
                {
                    console.log("injecting angularFire async...");
                    userCredentials.email = "bob@bobmail.com";
                    userCredentials.password = "password";
                    firebaseAuth.login(userCredentials)
                        .then(
                            () =>
                            {
                                let authSubscribe : Subscription = angularFire.auth.subscribe(
                                    (auth) =>
                                    {
                                        console.log("logged in user: " + auth.uid);
                                        let userData = new UserData();
                                        userData.User.email = userCredentials.email;
                                        userData.User.name = "Bob";
                                        userData.User.surname = "Geldoff";
                                        userData.saveToDatabase(angularFire, auth.uid)
                                            .then(
                                                () =>
                                                {
                                                    listPathsToRemove.push(UserData.buildPath(auth.uid));
                                                    done();
                                                }
                                            );

                                    }
                                );
                                authSubscribe.unsubscribe();

                            }
                        );
                    }
                );
        }
    );

    describe("Confirm saving database objects (ensure schema compatibility)", () =>
        {
            it("Should create an activity and save it to firebase",
                (done) =>
                {
                    console.log("injecting angularFire async...");
                    userCredentials.email = "bob@bobmail.com";
                    userCredentials.password = "password";
                    firebaseAuth.login(userCredentials)
                        .then(
                            () =>
                            {
                                let authSubscribe : Subscription = angularFire.auth.subscribe(
                                    (auth) =>
                                    {
                                        let actPath = new ActivityPath();
                                        actPath.Activity.started = new Date().getUTCMilliseconds();
                                        actPath.Activity.duration = 60 * 60 * 1000;
                                        actPath.Activity.description = "A new activity";
                                        actPath.Activity.yearId = moment().format("YYYY");
                                        actPath.Activity.monthId = moment().format("MMMM");
                                        actPath.Activity.dayId = moment().format("DD");
                                        actPath.saveToDatabase(angularFire, auth.uid, actPath.Activity.yearId, actPath.Activity.monthId, actPath.Activity.dayId)
                                            .then(
                                                () =>
                                                {
                                                    listPathsToRemove.push(ActivityPath.buildPath(auth.uid, actPath.Activity.yearId, actPath.Activity.monthId, actPath.Activity.dayId));
                                                    done();
                                                }
                                            )
                                            .catch(
                                                (error) =>
                                                {
                                                    console.log(error);
                                                    done(error);
                                                }
                                            );
                                    }
                                );
                                authSubscribe.unsubscribe();
                            }
                        );
                    }
            );
        }
    );


    describe("Create a full set of data and ensure references are linked",
        () =>
        {
            it.only("Add job to the database and reference an activity from the job",
                (done) =>
                {
                    console.log("injecting angularFire async...");
                    userCredentials.email = "bob@bobmail.com";
                    userCredentials.password = "password";
                    firebaseAuth.login(userCredentials)
                        .then(
                            () =>
                            {
                                let authSubscribe : Subscription = angularFire.auth.take(1).subscribe(
                                    (auth) =>
                                    {
                                        let actPath = new ActivityPath();
                                        actPath.Activity.started = new Date().getUTCMilliseconds();
                                        actPath.Activity.duration = 60 * 60 * 1000;
                                        actPath.Activity.description = "A new activity";
                                        actPath.Activity.yearId = moment().format("YYYY");
                                        actPath.Activity.monthId = moment().format("MMMM");
                                        actPath.Activity.dayId = moment().format("DD");
                                        actPath.saveToDatabase(angularFire, auth.uid, actPath.Activity.yearId, actPath.Activity.monthId, actPath.Activity.dayId)
                                            .then(
                                                () =>
                                                {
                                                    listPathsToRemove.push(ActivityPath.buildPath(auth.uid, actPath.Activity.yearId, actPath.Activity.monthId, actPath.Activity.dayId));
                                                    return true;
                                                }
                                            )
                                            .then(
                                                () =>
                                                {
                                                    let jobPath : JobPath = new JobPath();
                                                    jobPath.Job.name = "Test job";
                                                    jobPath.Job.description = "A job test";
                                                    jobPath.Job.jobType = JobType.billable;
                                                    jobPath.Job.jobStatus = JobStatus.billed;
                                                    jobPath.ActivityPathList.push(actPath);
                                                    listPathsToRemove.push(JobPath.buildPath(auth.uid));
                                                    return jobPath.saveToDatabase(angularFire, auth.uid);
                                                }
                                            )
                                            .then(
                                                () =>
                                                {
                                                    JobPath.loadAllFromDatabase(angularFire, auth.uid).subscribe(
                                                        (listJobs) =>
                                                        {
                                                            expect(listJobs).to.not.be.null;

                                                            console.log("List of jobs: " + listJobs);

                                                            lodash.forEach(
                                                                listJobs,
                                                                (objJobData) =>
                                                                {
                                                                    expect(objJobData).to.not.be.null;
                                                                    expect(objJobData).to.not.be.undefined;
                                                                    expect(objJobData.Job).to.not.be.undefined;
                                                                    expect(objJobData.Job.name).to.equal("Test job");

                                                                    console.log("Activity list: " + objJobData.ActivityPathList);
                                                                    objJobData.ActivityPathList.take(1).subscribe(
                                                                        (activityPathList) =>
                                                                        {
                                                                            expect(activityPathList).to.not.be.undefined;
                                                                            expect(activityPathList.length).to.equal(1);
                                                                            lodash.forEach(
                                                                                activityPathList,
                                                                                (activityPathObs) =>
                                                                                {
                                                                                    activityPathObs.take(1).subscribe(
                                                                                        (activityPath) =>
                                                                                        {
                                                                                            expect(activityPath.Activity.description).to.equal("A new activity");
                                                                                            expect(activityPath.Activity.duration).to.equal(60 * 60 * 1000);
                                                                                            done();
                                                                                        }
                                                                                    );

                                                                                }
                                                                            );
                                                                        }

                                                                    );

                                                                }
                                                            );
                                                        }
                                                    );
                                                }

                                            )
                                            .catch(
                                                (error) =>
                                                {
                                                    console.log(error);
                                                    done(error);
                                                }
                                            );
                                    }
                                );
                            }
                        );
                }
            );
        }
    );
});
