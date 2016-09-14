// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Wed Sep 14 10:04:47 AEST 2016

import {User} from "../types/User";

import { AngularFire } from "angularfire2/angularfire2";
import { Observable, Subscription } from "rxjs/Rx";
import { storage } from "firebase";


export class UserData
{
    private m_User : User;

    constructor()
    {
        this.m_User = new User();
    }

    get User() : User
    {
        return this.m_User;
    }

    saveToDatabase(angularFire : AngularFire, userid : string) : Promise<any[]>
    {
        let listPromises = [];
        let strPath : string = UserData.buildPath(userid);
        let objFirebase = this.m_User.toFirebase();

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
        return Promise.all(listPromises);
    }
    updateInDatabase(angularFire : AngularFire, userid : string) : Promise<any[]>
    {
        // TODO: injected path updates not implemented...
        let strPath : string = UserData.buildPath(userid);
        let objFirebase = this.m_User.getUpdate();

        return angularFire.database.object(strPath).update(objFirebase)
            .then(
                () =>
                {
                    return true;
                }
            );
    }

    static loadFromDatabase(angularFire : AngularFire, userid : string) : any
    {
        let strPath : string = UserData.buildPath(userid);
        return angularFire.database.object(strPath)
            .map(
                (itemUser : any) =>
                {
                    let objUserData = new UserData();
                    objUserData.m_User = User.fromFirebase(itemUser);

                    return objUserData;
                }
            );
    }

    exists(angularFire : AngularFire, userid : string) : Subscription
    {
        let strPath : string = UserData.buildPath(userid);
        return angularFire.database.object(strPath)
            .subscribe(
                (objUserData) =>
                {
                // TODO: change this once angularfire2 is updated to include $exists
                    return true; // objUserData.$exists();
                },
                () =>
                {
                    return false;
                }
            );
    }

    static buildPath(userid : string) : string
    {
        let strPath : string = "/users/" + userid + "/user";
        return strPath;
    }
}
