import {FirebaseTimestamp} from "../reference/FirebaseTimestamp";

import { database } from "firebase";

export class ClientJob
{
    private m_created : FirebaseTimestamp;
    private m_updated : FirebaseTimestamp;
    private m_jobId : string;
    private m_clientId : string;

    private m_bjobIdUpdated : boolean;
    private m_bclientIdUpdated : boolean;


    constructor()
    {
        this.m_created = new FirebaseTimestamp();
        this.m_updated = new FirebaseTimestamp();
        this.m_jobId = "";
        this.m_clientId = "";

        this.m_bjobIdUpdated = true;
        this.m_bclientIdUpdated = true;
    }

    get created() : FirebaseTimestamp
    {
        return this.m_created;
    }
    get updated() : FirebaseTimestamp
    {
        return this.m_updated;
    }
    get jobId() : string
    {
        return this.m_jobId;
    }
    get clientId() : string
    {
        return this.m_clientId;
    }

    set jobId(jobId : string)
    {
        this.m_jobId = jobId;
        this.m_bjobIdUpdated = true;
    }
    set clientId(clientId : string)
    {
        this.m_clientId = clientId;
        this.m_bclientIdUpdated = true;
    }

    getUpdate() : any
    {
        let objUpdated = {};
        let bUpdated = false;
        if (this.m_bjobIdUpdated)
        {
            objUpdated["jobId"] = this.m_jobId;
        }
        if (this.m_bclientIdUpdated)
        {
            objUpdated["clientId"] = this.m_clientId;
        }

        if (bUpdated)
        {
            objUpdated["updated"] = (<any>database).ServerValue.TIMESTAMP;
        }
        return objUpdated;
    }


    toFirebase() : any
    {
        if (this.m_created.timeStamp === 0)
        {
            this.m_created.setUpdate();
        }

        if (this.m_updated.timeStamp === 0)
        {
            this.m_updated.setUpdate();
        }


        let objFirebase = {
            created: this.m_created.timeStamp,
            updated: this.m_updated.timeStamp,
            jobId: this.m_jobId,
            clientId: this.m_clientId
        };
        return objFirebase;
    }

    setSaved() : void
    {
        this.m_bjobIdUpdated = false;
        this.m_bclientIdUpdated = false;
    }

    static fromFirebase(firebaseObj : any) : ClientJob
    {
        let objClientJob = new ClientJob();
        objClientJob.m_created = new FirebaseTimestamp(firebaseObj.created);
        objClientJob.m_updated = new FirebaseTimestamp(firebaseObj.updated);
        objClientJob.m_jobId = firebaseObj.jobId;
        objClientJob.m_clientId = firebaseObj.clientId;

        objClientJob.setSaved();
        return objClientJob;
    }
}