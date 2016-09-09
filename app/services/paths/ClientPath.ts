// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Fri Sep 09 19:42:27 AEST 2016

import {Client} from "../types/Client";
import {ClientJob} from "../types/ClientJob";
import {Job} from "../types/Job";
import {JobPath} from "./JobPath";
import {forEach} from "lodash";

import { AngularFire } from "angularfire2/angularfire2";
import { Observable, Subscription } from "rxjs/Rx";
import { storage } from "firebase";

 class ClientJobReference
{
    private m_ClientJob : ClientJob;
    private m_JobPath : JobPath;

    constructor()
    {
        this.m_ClientJob = new ClientJob();
        this.m_JobPath = null;
    }

    get ClientJob() : ClientJob
    {
        return this.m_ClientJob;
    }

    static createClientJobReference(objJobPath : JobPath, userid : string, clientId : string, jobId : string) : ClientJobReference
    {
        let objClientJobReference = new ClientJobReference();
        objClientJobReference.m_ClientJob.jobId = jobId;
        objClientJobReference.m_ClientJob.clientId = clientId;


        objClientJobReference.m_JobPath = objJobPath;
        return objClientJobReference;
    }

    saveToDatabase(angularFire : AngularFire, userid : string, clientId : string, jobId : string) : Promise<any[]>
    {
        let listPromises = [];
        let strPath : string = ClientJobReference.buildPath(userid, clientId, jobId);
        let objFirebase = this.m_ClientJob.toFirebase();

        return angularFire.database.object(strPath).set(objFirebase)
            .then(
                () =>
                {
                    return true;
                }
            );
    }

    static loadFromDatabase(angularFire : AngularFire, userid : string, clientId : string, jobId : string) : any
    {
        let strPath : string = ClientJobReference.buildPath(userid, clientId, jobId);
        return angularFire.database.object(strPath)
            .map(
                (itemClientJob : any) =>
                {
                    let objClientJobReference = new ClientJobReference();
                    objClientJobReference.m_ClientJob = ClientJob.fromFirebase(itemClientJob);

                    objClientJobReference.m_JobPath = JobPath.loadFromDatabase(angularFire, userid, objClientJobReference.m_ClientJob.jobId);

                    return objClientJobReference;
                }
            );
    }

    static loadAllFromDatabase(angularFire : AngularFire, userid : string, clientId : string) : any
    {
        let strPath : string = ClientJobReference.buildPath(userid, clientId);
        return angularFire.database.list(strPath)
            .map(
                (listClientJob : any) =>
                {
                    if
                    (
                        listClientJob
                        &&
                        listClientJob.length > 0
                    )
                    {
                        return listClientJob.map(
                            (itemClientJob : any) =>
                            {
                                let objClientJobReference = new ClientJobReference();
                                objClientJobReference.m_ClientJob = ClientJob.fromFirebase(itemClientJob);

                                objClientJobReference.m_JobPath = JobPath.loadFromDatabase(angularFire, userid, objClientJobReference.m_ClientJob.jobId);

                                return objClientJobReference;
                            }
                        );
                    }
                }
            );
    }

    exists(angularFire : AngularFire, userid : string) : Subscription
    {
        let strPath : string = ClientJobReference.buildPath(userid, this.m_ClientJob.clientId, this.m_ClientJob.jobId);
        return angularFire.database.object(strPath)
            .subscribe(
                (objClientJobReference) =>
                {
                    return objClientJobReference.$exists();
                },
                () =>
                {
                    return false;
                }
            );
    }

    static buildPath(userid : string, clientId : string, strUuid? : string) : string
    {
        let strPath : string = "/users/" + userid + "/clients/jobs/" + clientId;
        if (strUuid)
        {
            strPath += "/" + strUuid;
        }
        return strPath;
    }
}

export class ClientPath
{
    private m_Client : Client;
    private m_JobPathList : JobPath[];
    private __path : string;

    constructor()
    {
        this.m_Client = new Client();
        this.m_JobPathList = [];
        this.__path = "";
    }

    get Client() : Client
    {
        return this.m_Client;
    }

    get JobPathList() : JobPath[]
    {
        return this.m_JobPathList;
    }


    get key() : string
    {
        return this.__path;
    }

    saveToDatabase(angularFire : AngularFire, userid : string) : Promise<any[]>
    {
        let listPromises = [];
        let strPath : string = ClientPath.buildPath(userid, this.__path);
        let objFirebase = this.m_Client.toFirebase();

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
        forEach(
            this.m_JobPathList,
            (objJobPath) =>
            {
                let objClientJobReference = ClientJobReference.createClientJobReference(objJobPath, userid, this.key, objJobPath.key);
                listPromises.push(objClientJobReference.saveToDatabase(angularFire, userid, this.key, objJobPath.key));
            }
        );



        return Promise.all(listPromises);
    }
    updateInDatabase(angularFire : AngularFire, userid : string) : Promise<any[]>
    {
        // TODO: injected path updates not implemented...
        if (this.__path)
        {
            let strPath : string = ClientPath.buildPath(userid, this.__path);
            let objFirebase = this.m_Client.getUpdate();

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

    static loadFromDatabase(angularFire : AngularFire, userid : string, clientId : string) : any
    {
        let strPath : string = ClientPath.buildPath(userid, clientId);
        return angularFire.database.object(strPath)
            .map(
                (itemClient : any) =>
                {
                    let objClientPath = new ClientPath();
                    objClientPath.m_Client = Client.fromFirebase(itemClient);
                    objClientPath.__path = itemClient.$key;

                    objClientPath.m_JobPathList = ClientJobReference.loadAllFromDatabase(angularFire, userid, objClientPath.__path)
                        .map(
                            (objRef) =>
                            {
                                return objRef.m_JobPath;
                            }
                        );



                    return objClientPath;
                }
            );
    }

    static loadAllFromDatabase(angularFire : AngularFire, userid : string) : any
    {
        let strPath : string = ClientPath.buildPath(userid);
        return angularFire.database.list(strPath)
            .map(
                (listClient : any) =>
                {
                    if
                    (
                        listClient
                        &&
                        listClient.length > 0
                    )
                    {
                        return listClient.map(
                            (itemClient : any) =>
                            {
                                let objClientPath = new ClientPath();
                                objClientPath.m_Client = Client.fromFirebase(itemClient);
                                objClientPath.__path = itemClient.$key;

                                objClientPath.m_JobPathList = ClientJobReference.loadAllFromDatabase(angularFire, userid, objClientPath.__path)
                                    .map(
                                        (objRef) =>
                                        {
                                            return objRef.m_JobPath;
                                        }
                                    );



                                return objClientPath;
                            }
                        );
                    }
                }
            );
    }

    exists(angularFire : AngularFire, userid : string, clientId : string) : Subscription
    {
        let strPath : string = ClientPath.buildPath(userid, clientId);
        return angularFire.database.object(strPath)
            .subscribe(
                (objClientPath) =>
                {
                    return objClientPath.$exists();
                },
                () =>
                {
                    return false;
                }
            );
    }

    static buildPath(userid : string, strUuid? : string) : string
    {
        let strPath : string = "/users/" + userid + "/clients";
        if (strUuid)
        {
            strPath += "/" + strUuid;
        }
        return strPath;
    }
}
