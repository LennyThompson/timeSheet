import {FirebaseTimestamp} from "../reference/FirebaseTimestamp";
import {ActivityType} from "../enums/ActivityType";
import {ActivityStatus} from "../enums/ActivityStatus";
import {LockStatus} from "../enums/LockStatus";
import {DateId} from "./DateId";

import { database } from "firebase";

export class Activity
{
    private m_created : FirebaseTimestamp;
    private m_updated : FirebaseTimestamp;
    private m_started : number;
    private m_duration : number;
    private m_activityType : ActivityType;
    private m_activityStatus : ActivityStatus;
    private m_lockStatus : LockStatus;
    private m_name : string;
    private m_description : string;
    private m_comments : string;
    private m_userActivityType : string;
    private m_payRate : number;
    private m_dateId : DateId;

    private m_bstartedUpdated : boolean;
    private m_bdurationUpdated : boolean;
    private m_bactivityTypeUpdated : boolean;
    private m_bactivityStatusUpdated : boolean;
    private m_blockStatusUpdated : boolean;
    private m_bnameUpdated : boolean;
    private m_bdescriptionUpdated : boolean;
    private m_bcommentsUpdated : boolean;
    private m_buserActivityTypeUpdated : boolean;
    private m_bpayRateUpdated : boolean;
    private m_bdateIdUpdated : boolean;


    constructor()
    {
        this.m_created = new FirebaseTimestamp();
        this.m_updated = new FirebaseTimestamp();
        this.m_started = 0;
        this.m_duration = 0;
        this.m_activityType = ActivityType.defaultValue;
        this.m_activityStatus = ActivityStatus.defaultValue;
        this.m_lockStatus = LockStatus.defaultValue;
        this.m_name = "";
        this.m_description = "";
        this.m_comments = "";
        this.m_userActivityType = "";
        this.m_payRate = 0;
        this.m_dateId = new DateId();

        this.m_bstartedUpdated = true;
        this.m_bdurationUpdated = true;
        this.m_bactivityTypeUpdated = true;
        this.m_bactivityStatusUpdated = true;
        this.m_blockStatusUpdated = true;
        this.m_bnameUpdated = true;
        this.m_bdescriptionUpdated = true;
        this.m_bcommentsUpdated = true;
        this.m_buserActivityTypeUpdated = true;
        this.m_bpayRateUpdated = true;
        this.m_bdateIdUpdated = true;
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
    get duration() : number
    {
        return this.m_duration;
    }
    get activityType() : ActivityType
    {
        return this.m_activityType;
    }
    get activityStatus() : ActivityStatus
    {
        return this.m_activityStatus;
    }
    get lockStatus() : LockStatus
    {
        return this.m_lockStatus;
    }
    get name() : string
    {
        return this.m_name;
    }
    get description() : string
    {
        return this.m_description;
    }
    get comments() : string
    {
        return this.m_comments;
    }
    get userActivityType() : string
    {
        return this.m_userActivityType;
    }
    get payRate() : number
    {
        return this.m_payRate;
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

    set started(started : number)
    {
        this.m_started = started;
        this.m_bstartedUpdated = true;
    }
    set duration(duration : number)
    {
        this.m_duration = duration;
        this.m_bdurationUpdated = true;
    }
    set activityType(activityType : ActivityType)
    {
        this.m_activityType = activityType;
        this.m_bactivityTypeUpdated = true;
    }
    set activityStatus(activityStatus : ActivityStatus)
    {
        this.m_activityStatus = activityStatus;
        this.m_bactivityStatusUpdated = true;
    }
    set lockStatus(lockStatus : LockStatus)
    {
        this.m_lockStatus = lockStatus;
        this.m_blockStatusUpdated = true;
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
    set comments(comments : string)
    {
        this.m_comments = comments;
        this.m_bcommentsUpdated = true;
    }
    set userActivityType(userActivityType : string)
    {
        this.m_userActivityType = userActivityType;
        this.m_buserActivityTypeUpdated = true;
    }
    set payRate(payRate : number)
    {
        this.m_payRate = payRate;
        this.m_bpayRateUpdated = true;
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

    getUpdate() : any
    {
        let objUpdated = {};
        let bUpdated = false;
        if (this.m_bstartedUpdated)
        {
            objUpdated["started"] = this.m_started;
        }
        if (this.m_bdurationUpdated)
        {
            objUpdated["duration"] = this.m_duration;
        }
        if (this.m_bactivityTypeUpdated)
        {
            objUpdated["activityType"] = this.m_activityType.name;
        }
        if (this.m_bactivityStatusUpdated)
        {
            objUpdated["activityStatus"] = this.m_activityStatus.name;
        }
        if (this.m_blockStatusUpdated)
        {
            objUpdated["lockStatus"] = this.m_lockStatus.name;
        }
        if (this.m_bnameUpdated)
        {
            objUpdated["name"] = this.m_name;
        }
        if (this.m_bdescriptionUpdated)
        {
            objUpdated["description"] = this.m_description;
        }
        if (this.m_bcommentsUpdated)
        {
            objUpdated["comments"] = this.m_comments;
        }
        if (this.m_buserActivityTypeUpdated)
        {
            objUpdated["userActivityType"] = this.m_userActivityType;
        }
        if (this.m_bpayRateUpdated)
        {
            objUpdated["payRate"] = this.m_payRate;
        }
        if (this.m_bdateIdUpdated)
        {
            objUpdated["dateId"] = this.m_dateId.toFirebase();
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
            duration: this.m_duration,
            activityType: this.m_activityType.name,
            activityStatus: this.m_activityStatus.name,
            lockStatus: this.m_lockStatus.name,
            name: this.m_name,
            description: this.m_description,
            comments: this.m_comments,
            userActivityType: this.m_userActivityType,
            payRate: this.m_payRate,
            dateId: this.m_dateId.toFirebase()
        };
        return objFirebase;
    }

    setSaved() : void
    {
        this.m_bstartedUpdated = false;
        this.m_bdurationUpdated = false;
        this.m_bactivityTypeUpdated = false;
        this.m_bactivityStatusUpdated = false;
        this.m_blockStatusUpdated = false;
        this.m_bnameUpdated = false;
        this.m_bdescriptionUpdated = false;
        this.m_bcommentsUpdated = false;
        this.m_buserActivityTypeUpdated = false;
        this.m_bpayRateUpdated = false;
        this.m_bdateIdUpdated = false;
    }

    static fromFirebase(firebaseObj : any) : Activity
    {
        let objActivity = new Activity();
        objActivity.m_created = new FirebaseTimestamp(firebaseObj.created);
        objActivity.m_updated = new FirebaseTimestamp(firebaseObj.updated);
        objActivity.m_started = firebaseObj.started;
        objActivity.m_duration = firebaseObj.duration;
        objActivity.m_activityType = ActivityType[firebaseObj.activityType];
        objActivity.m_activityStatus = ActivityStatus[firebaseObj.activityStatus];
        objActivity.m_lockStatus = LockStatus[firebaseObj.lockStatus];
        objActivity.m_name = firebaseObj.name;
        objActivity.m_description = firebaseObj.description;
        objActivity.m_comments = firebaseObj.comments;
        objActivity.m_userActivityType = firebaseObj.userActivityType;
        objActivity.m_payRate = firebaseObj.payRate;
        objActivity.m_dateId = DateId.fromFirebase(firebaseObj.dateId);

        objActivity.setSaved();
        return objActivity;
    }
}