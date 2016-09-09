// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Fri Sep 09 19:42:27 AEST 2016

import {Activity} from "../types/Activity";

import { AngularFire } from "angularfire2/angularfire2";
import { Observable, Subscription } from "rxjs/Rx";
import { storage } from "firebase";


export class ActivityPath
{
    private m_Activity : Activity;
    private __path : string;

    constructor()
    {
        this.m_Activity = new Activity();
        this.__path = "";
    }

    get Activity() : Activity
    {
        return this.m_Activity;
    }

    get key() : string
    {
        return this.__path;
    }

    saveToDatabase(angularFire : AngularFire, userid : string, yearId : string, monthId : string, dayId : string) : Promise<any[]>
    {
        let listPromises = [];
        let strPath : string = ActivityPath.buildPath(userid, yearId, monthId, dayId, this.__path);
        let objFirebase = this.m_Activity.toFirebase();

        if (this.__path)
        {
            listPromises.push
            (
                angularFire.database.object(strPath).set(objFirebase)
                .then(
                    () =>
                    {
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
                        this.__path = objPushed.$key;
                        return true;
                    }
                )
            );
        }

        return Promise.all(listPromises);
    }
    updateInDatabase(angularFire : AngularFire, userid : string, yearId : string, monthId : string, dayId : string) : Promise<any[]>
    {
        // TODO: injected path updates not implemented...
        if (this.__path)
        {
            let strPath : string = ActivityPath.buildPath(userid, yearId, monthId, dayId, this.__path);
            let objFirebase = this.m_Activity.getUpdate();

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

    static loadFromDatabase(angularFire : AngularFire, userid : string, yearId : string, monthId : string, dayId : string, activityId : string) : any
    {
        let strPath : string = ActivityPath.buildPath(userid, yearId, monthId, dayId, activityId);
        return angularFire.database.object(strPath)
            .map(
                (itemActivity : any) =>
                {
                    let objActivityPath = new ActivityPath();
                    objActivityPath.m_Activity = Activity.fromFirebase(itemActivity);
                    objActivityPath.__path = itemActivity.$key;


                    return objActivityPath;
                }
            );
    }

    static loadAllFromDatabase(angularFire : AngularFire, userid : string, yearId : string, monthId : string, dayId : string) : any
    {
        let strPath : string = ActivityPath.buildPath(userid, yearId, monthId, dayId);
        return angularFire.database.list(strPath)
            .map(
                (listActivity : any) =>
                {
                    if
                    (
                        listActivity
                        &&
                        listActivity.length > 0
                    )
                    {
                        return listActivity.map(
                            (itemActivity : any) =>
                            {
                                let objActivityPath = new ActivityPath();
                                objActivityPath.m_Activity = Activity.fromFirebase(itemActivity);
                                objActivityPath.__path = itemActivity.$key;


                                return objActivityPath;
                            }
                        );
                    }
                }
            );
    }

    exists(angularFire : AngularFire, userid : string, activityId : string) : Subscription
    {
        let strPath : string = ActivityPath.buildPath(userid, this.m_Activity.yearId, this.m_Activity.monthId, this.m_Activity.dayId, activityId);
        return angularFire.database.object(strPath)
            .subscribe(
                (objActivityPath) =>
                {
                    return objActivityPath.$exists();
                },
                () =>
                {
                    return false;
                }
            );
    }

    static buildPath(userid : string, yearId : string, monthId : string, dayId : string, strUuid? : string) : string
    {
        let strPath : string = "/activities/" + userid + "/" + yearId + "/" + monthId + "/" + dayId;
        if (strUuid)
        {
            strPath += "/" + strUuid;
        }
        return strPath;
    }
}
