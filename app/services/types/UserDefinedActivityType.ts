import {FirebaseTimestamp} from "../reference/FirebaseTimestamp";
import {ActivityType} from "../enums/ActivityType";

import { database } from "firebase";

export class UserDefinedActivityType
{
    private m_created : FirebaseTimestamp;
    private m_updated : FirebaseTimestamp;
    private m_activityGroup : ActivityType;
    private m_name : string;
    private m_value : number;
    private m_display : string;
    private m_icon : string;

    private m_bactivityGroupUpdated : boolean;
    private m_bnameUpdated : boolean;
    private m_bvalueUpdated : boolean;
    private m_bdisplayUpdated : boolean;
    private m_biconUpdated : boolean;


    constructor()
    {
        this.m_created = new FirebaseTimestamp();
        this.m_updated = new FirebaseTimestamp();
        this.m_activityGroup = ActivityType.defaultValue;
        this.m_name = "";
        this.m_value = 0;
        this.m_display = "";
        this.m_icon = "";

        this.m_bactivityGroupUpdated = true;
        this.m_bnameUpdated = true;
        this.m_bvalueUpdated = true;
        this.m_bdisplayUpdated = true;
        this.m_biconUpdated = true;
    }

    get created() : FirebaseTimestamp
    {
        return this.m_created;
    }
    get updated() : FirebaseTimestamp
    {
        return this.m_updated;
    }
    get activityGroup() : ActivityType
    {
        return this.m_activityGroup;
    }
    get name() : string
    {
        return this.m_name;
    }
    get value() : number
    {
        return this.m_value;
    }
    get display() : string
    {
        return this.m_display;
    }
    get icon() : string
    {
        return this.m_icon;
    }

    set activityGroup(activityGroup : ActivityType)
    {
        this.m_activityGroup = activityGroup;
        this.m_bactivityGroupUpdated = true;
    }
    set name(name : string)
    {
        this.m_name = name;
        this.m_bnameUpdated = true;
    }
    set value(value : number)
    {
        this.m_value = value;
        this.m_bvalueUpdated = true;
    }
    set display(display : string)
    {
        this.m_display = display;
        this.m_bdisplayUpdated = true;
    }
    set icon(icon : string)
    {
        this.m_icon = icon;
        this.m_biconUpdated = true;
    }

    getUpdate() : any
    {
        let objUpdated = {};
        let bUpdated = false;
        if (this.m_bactivityGroupUpdated)
        {
            objUpdated["activityGroup"] = this.m_activityGroup.name;
        }
        if (this.m_bnameUpdated)
        {
            objUpdated["name"] = this.m_name;
        }
        if (this.m_bvalueUpdated)
        {
            objUpdated["value"] = this.m_value;
        }
        if (this.m_bdisplayUpdated)
        {
            objUpdated["display"] = this.m_display;
        }
        if (this.m_biconUpdated)
        {
            objUpdated["icon"] = this.m_icon;
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
            activityGroup: this.m_activityGroup.name,
            name: this.m_name,
            value: this.m_value,
            display: this.m_display,
            icon: this.m_icon
        };
        return objFirebase;
    }

    setSaved() : void
    {
        this.m_bactivityGroupUpdated = false;
        this.m_bnameUpdated = false;
        this.m_bvalueUpdated = false;
        this.m_bdisplayUpdated = false;
        this.m_biconUpdated = false;
    }

    static fromFirebase(firebaseObj : any) : UserDefinedActivityType
    {
        let objUserDefinedActivityType = new UserDefinedActivityType();
        objUserDefinedActivityType.m_created = new FirebaseTimestamp(firebaseObj.created);
        objUserDefinedActivityType.m_updated = new FirebaseTimestamp(firebaseObj.updated);
        objUserDefinedActivityType.m_activityGroup = ActivityType[firebaseObj.activityGroup];
        objUserDefinedActivityType.m_name = firebaseObj.name;
        objUserDefinedActivityType.m_value = firebaseObj.value;
        objUserDefinedActivityType.m_display = firebaseObj.display;
        objUserDefinedActivityType.m_icon = firebaseObj.icon;

        objUserDefinedActivityType.setSaved();
        return objUserDefinedActivityType;
    }
}