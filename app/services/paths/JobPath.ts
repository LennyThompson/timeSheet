// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Wed Sep 14 10:04:47 AEST 2016

import {Job} from "../types/Job";
import {JobActivity} from "../types/JobActivity";
import {Activity} from "../types/Activity";
import {ActivityPath} from "./ActivityPath";
import * as lodash from "lodash";

import { AngularFire } from "angularfire2/angularfire2";
import { Observable, Subscription } from "rxjs/Rx";
import { storage } from "firebase";

 class JobActivityReference
{
    private m_JobActivity : JobActivity;
    private m_ActivityPath : ActivityPath;

    constructor()
    {
        this.m_JobActivity = new JobActivity();
        this.m_ActivityPath = null;
    }

    get JobActivity() : JobActivity
    {
        return this.m_JobActivity;
    }

    static createJobActivityReference(objActivityPath : ActivityPath, userid : string, jobId : string, activityId : string) : JobActivityReference
    {
        let objJobActivityReference = new JobActivityReference();
        objJobActivityReference.m_JobActivity.yearId = objActivityPath.Activity.yearId;
        objJobActivityReference.m_JobActivity.monthId = objActivityPath.Activity.monthId;
        objJobActivityReference.m_JobActivity.dayId = objActivityPath.Activity.dayId;
        objJobActivityReference.m_JobActivity.activityId = activityId;
        objJobActivityReference.m_JobActivity.jobId = jobId;


        objJobActivityReference.m_ActivityPath = objActivityPath;
        return objJobActivityReference;
    }

    saveToDatabase(angularFire : AngularFire, userid : string, jobId : string, activityId : string) : Promise<any[]>
    {
        let listPromises = [];
        let strPath : string = JobActivityReference.buildPath(userid, jobId, activityId);
        let objFirebase = this.m_JobActivity.toFirebase();

        return angularFire.database.object(strPath).set(objFirebase)
            .then(
                () =>
                {
                    return true;
                }
            );
    }

    static loadFromDatabase(angularFire : AngularFire, userid : string, jobId : string, activityId : string) : any
    {
        let strPath : string = JobActivityReference.buildPath(userid, jobId, activityId);
        return angularFire.database.object(strPath)
            .map(
                (itemJobActivity : any) =>
                {
                    let objJobActivityReference = new JobActivityReference();
                    objJobActivityReference.m_JobActivity = JobActivity.fromFirebase(itemJobActivity);

                    return ActivityPath.loadFromDatabase(
                        angularFire,
                        userid, objJobActivityReference.m_JobActivity.yearId, objJobActivityReference.m_JobActivity.monthId, objJobActivityReference.m_JobActivity.dayId, objJobActivityReference.m_JobActivity.activityId
                    );
                }
            );
    }

    static loadAllFromDatabase(angularFire : AngularFire, userid : string, jobId : string) : any
    {
        let strPath : string = JobActivityReference.buildPath(userid, jobId);
        return angularFire.database.list(strPath)
            .map(
                (listJobActivity : any) =>
                {
                    if
                    (
                        listJobActivity
                        &&
                        listJobActivity.length > 0
                    )
                    {
                        return listJobActivity.map(
                            (itemJobActivity : any) =>
                            {
                                let objJobActivityReference = new JobActivityReference();
                                objJobActivityReference.m_JobActivity = JobActivity.fromFirebase(itemJobActivity);

                                return ActivityPath.loadFromDatabase(
                                    angularFire,
                                    userid, objJobActivityReference.m_JobActivity.yearId, objJobActivityReference.m_JobActivity.monthId, objJobActivityReference.m_JobActivity.dayId, objJobActivityReference.m_JobActivity.activityId
                                );
                            }
                        );
                    }
                }
            );
    }

    exists(angularFire : AngularFire, userid : string) : Subscription
    {
        let strPath : string = JobActivityReference.buildPath(userid, this.m_JobActivity.jobId, this.m_JobActivity.activityId);
        return angularFire.database.object(strPath)
            .subscribe(
                (objJobActivityReference) =>
                {
                // TODO: change this once angularfire2 is updated to include $exists
                    return true; // objJobActivityReference.$exists();
                },
                () =>
                {
                    return false;
                }
            );
    }

    static buildPath(userid : string, jobId : string, strUuid? : string) : string
    {
        let strPath : string = "/users/" + userid + "/jobs/activities/" + jobId;
        if (strUuid)
        {
            strPath += "/" + strUuid;
        }
        return strPath;
    }
}

export class JobPath
{
    private m_Job : Job;
    private m_ActivityPathList : ActivityPath[];
    private __path : string;

    constructor()
    {
        this.m_Job = new Job();
        this.m_ActivityPathList = [];
        this.__path = "";
    }

    get Job() : Job
    {
        return this.m_Job;
    }

    get ActivityPathList() : ActivityPath[]
    {
        return this.m_ActivityPathList;
    }


    get key() : string
    {
        return this.__path;
    }

    saveToDatabase(angularFire : AngularFire, userid : string) : Promise<any[]>
    {
        let listPromises = [];
        let strPath : string = JobPath.buildPath(userid, this.__path);
        let objFirebase = this.m_Job.toFirebase();

        if (this.__path)
        {
            listPromises.push
            (
                angularFire.database.object(strPath).set(objFirebase)
                .then(
                    () =>
                    {
                        lodash.forEach(
                            this.m_ActivityPathList,
                            (objActivityPath) =>
                            {
                                let objJobActivityReference = JobActivityReference.createJobActivityReference(objActivityPath, userid, this.key, objActivityPath.key);
                                listPromises.push(objJobActivityReference.saveToDatabase(angularFire, userid, this.key, objActivityPath.key));
                            }
                        );


                        return true;
                    }
                )
            );
        }
        else
        {
            listPromises.push
            (
                angularFire.database.list(strPath).push(objFirebase)
                .then(
                    (objPushed : any) =>
                    {
                        this.__path = objPushed.key;
                        lodash.forEach(
                            this.m_ActivityPathList,
                            (objActivityPath) =>
                            {
                                let objJobActivityReference = JobActivityReference.createJobActivityReference(objActivityPath, userid, this.key, objActivityPath.key);
                                listPromises.push(objJobActivityReference.saveToDatabase(angularFire, userid, this.key, objActivityPath.key));
                            }
                        );


                        return true;
                    }
                )
            );
        }

        return Promise.all(listPromises);
    }
    updateInDatabase(angularFire : AngularFire, userid : string) : Promise<any[]>
    {
        // TODO: injected path updates not implemented...
        if (this.__path)
        {
            let strPath : string = JobPath.buildPath(userid, this.__path);
            let objFirebase = this.m_Job.getUpdate();

            return angularFire.database.object(strPath).update(objFirebase)
                .then(
                    () =>
                    {
                        return true;
                    }
                );
        }
        else
        {
            throw new Error("Cannot update an object that has not been saved");
        }
    }

    static loadFromDatabase(angularFire : AngularFire, userid : string, jobId : string) : any
    {
        let strPath : string = JobPath.buildPath(userid, jobId);
        return angularFire.database.object(strPath)
            .map(
                (itemJob : any) =>
                {
                    let objJobPath = new JobPath();
                    objJobPath.m_Job = Job.fromFirebase(itemJob);
                    objJobPath.__path = itemJob.$key;

                    objJobPath.m_ActivityPathList = JobActivityReference.loadAllFromDatabase(angularFire, userid, objJobPath.__path);


                    return objJobPath;
                }
            );
    }

    static loadAllFromDatabase(angularFire : AngularFire, userid : string) : any
    {
        let strPath : string = JobPath.buildPath(userid);
        return angularFire.database.list(strPath)
            .map(
                (listJob : any) =>
                {
                    if
                    (
                        listJob
                        &&
                        listJob.length > 0
                    )
                    {
                        return listJob.map(
                            (itemJob : any) =>
                            {
                                let objJobPath = new JobPath();
                                objJobPath.m_Job = Job.fromFirebase(itemJob);
                                objJobPath.__path = itemJob.$key;

                                objJobPath.m_ActivityPathList = JobActivityReference.loadAllFromDatabase(angularFire, userid, objJobPath.__path);


                                return objJobPath;
                            }
                        );
                    }
                }
            );
    }

    exists(angularFire : AngularFire, userid : string, jobId : string) : Subscription
    {
        let strPath : string = JobPath.buildPath(userid, jobId);
        return angularFire.database.object(strPath)
            .subscribe(
                (objJobPath) =>
                {
                // TODO: change this once angularfire2 is updated to include $exists
                    return true; // objJobPath.$exists();
                },
                () =>
                {
                    return false;
                }
            );
    }

    static buildPath(userid : string, strUuid? : string) : string
    {
        let strPath : string = "/users/" + userid + "/jobs/job_list";
        if (strUuid)
        {
            strPath += "/" + strUuid;
        }
        return strPath;
    }
}
