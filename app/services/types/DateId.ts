import { database } from "firebase";

export class DateId
{
    private m_yearId : string;
    private m_monthId : string;
    private m_dayId : string;

    private m_byearIdUpdated : boolean;
    private m_bmonthIdUpdated : boolean;
    private m_bdayIdUpdated : boolean;


    constructor()
    {
        this.m_yearId = "";
        this.m_monthId = "";
        this.m_dayId = "";

        this.m_byearIdUpdated = true;
        this.m_bmonthIdUpdated = true;
        this.m_bdayIdUpdated = true;
    }

    get yearId() : string
    {
        return this.m_yearId;
    }
    get monthId() : string
    {
        return this.m_monthId;
    }
    get dayId() : string
    {
        return this.m_dayId;
    }

    set yearId(yearId : string)
    {
        this.m_yearId = yearId;
        this.m_byearIdUpdated = true;
    }
    set monthId(monthId : string)
    {
        this.m_monthId = monthId;
        this.m_bmonthIdUpdated = true;
    }
    set dayId(dayId : string)
    {
        this.m_dayId = dayId;
        this.m_bdayIdUpdated = true;
    }

    getUpdate() : any
    {
        let objUpdated = {};
        let bUpdated = false;
        if (this.m_byearIdUpdated)
        {
            objUpdated["yearId"] = this.m_yearId;
        }
        if (this.m_bmonthIdUpdated)
        {
            objUpdated["monthId"] = this.m_monthId;
        }
        if (this.m_bdayIdUpdated)
        {
            objUpdated["dayId"] = this.m_dayId;
        }

        if (bUpdated)
        {
            objUpdated["updated"] = (<any>database).ServerValue.TIMESTAMP;
        }
        return objUpdated;
    }


    toFirebase() : any
    {

        let objFirebase = {
            yearId: this.m_yearId,
            monthId: this.m_monthId,
            dayId: this.m_dayId
        };
        return objFirebase;
    }

    setSaved() : void
    {
        this.m_byearIdUpdated = false;
        this.m_bmonthIdUpdated = false;
        this.m_bdayIdUpdated = false;
    }

    static fromFirebase(firebaseObj : any) : DateId
    {
        let objDateId = new DateId();
        objDateId.m_yearId = firebaseObj.yearId;
        objDateId.m_monthId = firebaseObj.monthId;
        objDateId.m_dayId = firebaseObj.dayId;

        objDateId.setSaved();
        return objDateId;
    }
}