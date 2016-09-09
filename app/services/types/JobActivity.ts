import {FirebaseTimestamp} from "../reference/FirebaseTimestamp";
import {DateId} from "./DateId";

import { database } from "firebase";

export class JobActivity
{
    private m_created : FirebaseTimestamp;
    private m_updated : FirebaseTimestamp;
    private m_dateId : DateId;
    private m_activityId : string;
    private m_jobId : string;

    private m_bdateIdUpdated : boolean;
    private m_bactivityIdUpdated : boolean;
    private m_bjobIdUpdated : boolean;


    constructor()
    {
        this.m_created = new FirebaseTimestamp();
        this.m_updated = new FirebaseTimestamp();
        this.m_dateId = new DateId();
        this.m_activityId = "";
        this.m_jobId = "";

        this.m_bdateIdUpdated = true;
        this.m_bactivityIdUpdated = true;
        this.m_bjobIdUpdated = true;
    }

    get created() : FirebaseTimestamp
    {
        return this.m_created;
    }
    get updated() : FirebaseTimestamp
    {
        return this.m_updated;
    }
    get yearId() : string
    {
        return this.m_dateId.yearId;
    }
    get monthId() : string
    {
        return this.m_dateId.monthId;
    }
    get dayId() : string
    {
        return this.m_dateId.dayId;
    }
    get activityId() : string
    {
        return this.m_activityId;
    }
    get jobId() : string
    {
        return this.m_jobId;
    }

    set yearId(yearId : string)
    {
        this.m_dateId.yearId = yearId;
        this.m_bdateIdUpdated = true;
    }
    set monthId(monthId : string)
    {
        this.m_dateId.monthId = monthId;
        this.m_bdateIdUpdated = true;
    }
    set dayId(dayId : string)
    {
        this.m_dateId.dayId = dayId;
        this.m_bdateIdUpdated = true;
    }
    set activityId(activityId : string)
    {
        this.m_activityId = activityId;
        this.m_bactivityIdUpdated = true;
    }
    set jobId(jobId : string)
    {
        this.m_jobId = jobId;
        this.m_bjobIdUpdated = true;
    }

    getUpdate() : any
    {
        let objUpdated = {};
        let bUpdated = false;
        if (this.m_bdateIdUpdated)
        {
            objUpdated["dateId"] = this.m_dateId.toFirebase();
        }
        if (this.m_bactivityIdUpdated)
        {
            objUpdated["activityId"] = this.m_activityId;
        }
        if (this.m_bjobIdUpdated)
        {
            objUpdated["jobId"] = this.m_jobId;
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
            dateId: this.m_dateId.toFirebase(),
            activityId: this.m_activityId,
            jobId: this.m_jobId
        };
        return objFirebase;
    }

    setSaved() : void
    {
        this.m_bdateIdUpdated = false;
        this.m_bactivityIdUpdated = false;
        this.m_bjobIdUpdated = false;
    }

    static fromFirebase(firebaseObj : any) : JobActivity
    {
        let objJobActivity = new JobActivity();
        objJobActivity.m_created = new FirebaseTimestamp(firebaseObj.created);
        objJobActivity.m_updated = new FirebaseTimestamp(firebaseObj.updated);
        objJobActivity.m_dateId = DateId.fromFirebase(firebaseObj.dateId);
        objJobActivity.m_activityId = firebaseObj.activityId;
        objJobActivity.m_jobId = firebaseObj.jobId;

        objJobActivity.setSaved();
        return objJobActivity;
    }
}