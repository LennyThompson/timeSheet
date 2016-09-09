import { database } from "firebase";

export class FirebaseTimestamp
{
    private m_initialised : boolean;
    private m_timeStamp : number;
    private m_dateTime : Date;


    constructor(timeStamp? : number)
    {
        this.m_initialised = timeStamp ? true : false;
        this.m_timeStamp = timeStamp ? timeStamp : 0;
        this.m_dateTime = timeStamp ? new Date(timeStamp) : new Date();
    }

    get initialised() : boolean
    {
        return this.m_initialised;
    }
    get timeStamp() : number
    {
        return this.m_timeStamp;
    }
    get dateTime() : Date
    {
        return this.m_dateTime;
    }



    setUpdate() : void
    {
        this.m_initialised = false;
        this.m_timeStamp = <any>(database).ServerValue.TIMESTAMP;
        this.m_dateTime = new Date();
    }
}