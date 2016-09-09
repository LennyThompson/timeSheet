import {FirebaseTimestamp} from "../reference/FirebaseTimestamp";
import {JobType} from "../enums/JobType";
import {JobStatus} from "../enums/JobStatus";

import { database } from "firebase";

export class Job
{
    private m_created : FirebaseTimestamp;
    private m_updated : FirebaseTimestamp;
    private m_started : number;
    private m_completed : number;
    private m_name : string;
    private m_description : string;
    private m_jobType : JobType;
    private m_jobStatus : JobStatus;
    private m_dueDate : number;
    private m_billDate : number;
    private m_defaultPayRate : number;

    private m_bstartedUpdated : boolean;
    private m_bcompletedUpdated : boolean;
    private m_bnameUpdated : boolean;
    private m_bdescriptionUpdated : boolean;
    private m_bjobTypeUpdated : boolean;
    private m_bjobStatusUpdated : boolean;
    private m_bdueDateUpdated : boolean;
    private m_bbillDateUpdated : boolean;
    private m_bdefaultPayRateUpdated : boolean;


    constructor()
    {
        this.m_created = new FirebaseTimestamp();
        this.m_updated = new FirebaseTimestamp();
        this.m_started = 0;
        this.m_completed = 0;
        this.m_name = "";
        this.m_description = "";
        this.m_jobType = JobType.defaultValue;
        this.m_jobStatus = JobStatus.defaultValue;
        this.m_dueDate = 0;
        this.m_billDate = 0;
        this.m_defaultPayRate = 0;

        this.m_bstartedUpdated = true;
        this.m_bcompletedUpdated = true;
        this.m_bnameUpdated = true;
        this.m_bdescriptionUpdated = true;
        this.m_bjobTypeUpdated = true;
        this.m_bjobStatusUpdated = true;
        this.m_bdueDateUpdated = true;
        this.m_bbillDateUpdated = true;
        this.m_bdefaultPayRateUpdated = true;
    }

    get created() : FirebaseTimestamp
    {
        return this.m_created;
    }
    get updated() : FirebaseTimestamp
    {
        return this.m_updated;
    }
    get started() : number
    {
        return this.m_started;
    }
    get completed() : number
    {
        return this.m_completed;
    }
    get name() : string
    {
        return this.m_name;
    }
    get description() : string
    {
        return this.m_description;
    }
    get jobType() : JobType
    {
        return this.m_jobType;
    }
    get jobStatus() : JobStatus
    {
        return this.m_jobStatus;
    }
    get dueDate() : number
    {
        return this.m_dueDate;
    }
    get billDate() : number
    {
        return this.m_billDate;
    }
    get defaultPayRate() : number
    {
        return this.m_defaultPayRate;
    }

    set started(started : number)
    {
        this.m_started = started;
        this.m_bstartedUpdated = true;
    }
    set completed(completed : number)
    {
        this.m_completed = completed;
        this.m_bcompletedUpdated = true;
    }
    set name(name : string)
    {
        this.m_name = name;
        this.m_bnameUpdated = true;
    }
    set description(description : string)
    {
        this.m_description = description;
        this.m_bdescriptionUpdated = true;
    }
    set jobType(jobType : JobType)
    {
        this.m_jobType = jobType;
        this.m_bjobTypeUpdated = true;
    }
    set jobStatus(jobStatus : JobStatus)
    {
        this.m_jobStatus = jobStatus;
        this.m_bjobStatusUpdated = true;
    }
    set dueDate(dueDate : number)
    {
        this.m_dueDate = dueDate;
        this.m_bdueDateUpdated = true;
    }
    set billDate(billDate : number)
    {
        this.m_billDate = billDate;
        this.m_bbillDateUpdated = true;
    }
    set defaultPayRate(defaultPayRate : number)
    {
        this.m_defaultPayRate = defaultPayRate;
        this.m_bdefaultPayRateUpdated = true;
    }

    getUpdate() : any
    {
        let objUpdated = {};
        let bUpdated = false;
        if (this.m_bstartedUpdated)
        {
            objUpdated["started"] = this.m_started;
        }
        if (this.m_bcompletedUpdated)
        {
            objUpdated["completed"] = this.m_completed;
        }
        if (this.m_bnameUpdated)
        {
            objUpdated["name"] = this.m_name;
        }
        if (this.m_bdescriptionUpdated)
        {
            objUpdated["description"] = this.m_description;
        }
        if (this.m_bjobTypeUpdated)
        {
            objUpdated["jobType"] = this.m_jobType.name;
        }
        if (this.m_bjobStatusUpdated)
        {
            objUpdated["jobStatus"] = this.m_jobStatus.name;
        }
        if (this.m_bdueDateUpdated)
        {
            objUpdated["dueDate"] = this.m_dueDate;
        }
        if (this.m_bbillDateUpdated)
        {
            objUpdated["billDate"] = this.m_billDate;
        }
        if (this.m_bdefaultPayRateUpdated)
        {
            objUpdated["defaultPayRate"] = this.m_defaultPayRate;
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
            started: this.m_started,
            completed: this.m_completed,
            name: this.m_name,
            description: this.m_description,
            jobType: this.m_jobType.name,
            jobStatus: this.m_jobStatus.name,
            dueDate: this.m_dueDate,
            billDate: this.m_billDate,
            defaultPayRate: this.m_defaultPayRate
        };
        return objFirebase;
    }

    setSaved() : void
    {
        this.m_bstartedUpdated = false;
        this.m_bcompletedUpdated = false;
        this.m_bnameUpdated = false;
        this.m_bdescriptionUpdated = false;
        this.m_bjobTypeUpdated = false;
        this.m_bjobStatusUpdated = false;
        this.m_bdueDateUpdated = false;
        this.m_bbillDateUpdated = false;
        this.m_bdefaultPayRateUpdated = false;
    }

    static fromFirebase(firebaseObj : any) : Job
    {
        let objJob = new Job();
        objJob.m_created = new FirebaseTimestamp(firebaseObj.created);
        objJob.m_updated = new FirebaseTimestamp(firebaseObj.updated);
        objJob.m_started = firebaseObj.started;
        objJob.m_completed = firebaseObj.completed;
        objJob.m_name = firebaseObj.name;
        objJob.m_description = firebaseObj.description;
        objJob.m_jobType = JobType[firebaseObj.jobType];
        objJob.m_jobStatus = JobStatus[firebaseObj.jobStatus];
        objJob.m_dueDate = firebaseObj.dueDate;
        objJob.m_billDate = firebaseObj.billDate;
        objJob.m_defaultPayRate = firebaseObj.defaultPayRate;

        objJob.setSaved();
        return objJob;
    }
}