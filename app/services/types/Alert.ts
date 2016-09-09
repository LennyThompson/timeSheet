import {FirebaseTimestamp} from "../reference/FirebaseTimestamp";
import {AlertType} from "../enums/AlertType";
import {AlertStatus} from "../enums/AlertStatus";

import { database } from "firebase";

export class Alert
{
    private m_created : FirebaseTimestamp;
    private m_updated : FirebaseTimestamp;
    private m_alertType : AlertType;
    private m_alertStatus : AlertStatus;
    private m_name : string;
    private m_description : string;

    private m_balertTypeUpdated : boolean;
    private m_balertStatusUpdated : boolean;
    private m_bnameUpdated : boolean;
    private m_bdescriptionUpdated : boolean;


    constructor()
    {
        this.m_created = new FirebaseTimestamp();
        this.m_updated = new FirebaseTimestamp();
        this.m_alertType = AlertType.defaultValue;
        this.m_alertStatus = AlertStatus.defaultValue;
        this.m_name = "";
        this.m_description = "";

        this.m_balertTypeUpdated = true;
        this.m_balertStatusUpdated = true;
        this.m_bnameUpdated = true;
        this.m_bdescriptionUpdated = true;
    }

    get created() : FirebaseTimestamp
    {
        return this.m_created;
    }
    get updated() : FirebaseTimestamp
    {
        return this.m_updated;
    }
    get alertType() : AlertType
    {
        return this.m_alertType;
    }
    get alertStatus() : AlertStatus
    {
        return this.m_alertStatus;
    }
    get name() : string
    {
        return this.m_name;
    }
    get description() : string
    {
        return this.m_description;
    }

    set alertType(alertType : AlertType)
    {
        this.m_alertType = alertType;
        this.m_balertTypeUpdated = true;
    }
    set alertStatus(alertStatus : AlertStatus)
    {
        this.m_alertStatus = alertStatus;
        this.m_balertStatusUpdated = true;
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

    getUpdate() : any
    {
        let objUpdated = {};
        let bUpdated = false;
        if (this.m_balertTypeUpdated)
        {
            objUpdated["alertType"] = this.m_alertType.name;
        }
        if (this.m_balertStatusUpdated)
        {
            objUpdated["alertStatus"] = this.m_alertStatus.name;
        }
        if (this.m_bnameUpdated)
        {
            objUpdated["name"] = this.m_name;
        }
        if (this.m_bdescriptionUpdated)
        {
            objUpdated["description"] = this.m_description;
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
            alertType: this.m_alertType.name,
            alertStatus: this.m_alertStatus.name,
            name: this.m_name,
            description: this.m_description
        };
        return objFirebase;
    }

    setSaved() : void
    {
        this.m_balertTypeUpdated = false;
        this.m_balertStatusUpdated = false;
        this.m_bnameUpdated = false;
        this.m_bdescriptionUpdated = false;
    }

    static fromFirebase(firebaseObj : any) : Alert
    {
        let objAlert = new Alert();
        objAlert.m_created = new FirebaseTimestamp(firebaseObj.created);
        objAlert.m_updated = new FirebaseTimestamp(firebaseObj.updated);
        objAlert.m_alertType = AlertType[firebaseObj.alertType];
        objAlert.m_alertStatus = AlertStatus[firebaseObj.alertStatus];
        objAlert.m_name = firebaseObj.name;
        objAlert.m_description = firebaseObj.description;

        objAlert.setSaved();
        return objAlert;
    }
}