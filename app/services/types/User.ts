import {FirebaseTimestamp} from "../reference/FirebaseTimestamp";

import { database } from "firebase";

export class User
{
    private m_created : FirebaseTimestamp;
    private m_updated : FirebaseTimestamp;
    private m_name : string;
    private m_surname : string;
    private m_email : string;

    private m_bnameUpdated : boolean;
    private m_bsurnameUpdated : boolean;
    private m_bemailUpdated : boolean;


    constructor()
    {
        this.m_created = new FirebaseTimestamp();
        this.m_updated = new FirebaseTimestamp();
        this.m_name = "";
        this.m_surname = "";
        this.m_email = "";

        this.m_bnameUpdated = true;
        this.m_bsurnameUpdated = true;
        this.m_bemailUpdated = true;
    }

    get created() : FirebaseTimestamp
    {
        return this.m_created;
    }
    get updated() : FirebaseTimestamp
    {
        return this.m_updated;
    }
    get name() : string
    {
        return this.m_name;
    }
    get surname() : string
    {
        return this.m_surname;
    }
    get email() : string
    {
        return this.m_email;
    }

    set name(name : string)
    {
        this.m_name = name;
        this.m_bnameUpdated = true;
    }
    set surname(surname : string)
    {
        this.m_surname = surname;
        this.m_bsurnameUpdated = true;
    }
    set email(email : string)
    {
        this.m_email = email;
        this.m_bemailUpdated = true;
    }

    getUpdate() : any
    {
        let objUpdated = {};
        let bUpdated = false;
        if (this.m_bnameUpdated)
        {
            objUpdated["name"] = this.m_name;
        }
        if (this.m_bsurnameUpdated)
        {
            objUpdated["surname"] = this.m_surname;
        }
        if (this.m_bemailUpdated)
        {
            objUpdated["email"] = this.m_email;
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
            name: this.m_name,
            surname: this.m_surname,
            email: this.m_email
        };
        return objFirebase;
    }

    setSaved() : void
    {
        this.m_bnameUpdated = false;
        this.m_bsurnameUpdated = false;
        this.m_bemailUpdated = false;
    }

    static fromFirebase(firebaseObj : any) : User
    {
        let objUser = new User();
        objUser.m_created = new FirebaseTimestamp(firebaseObj.created);
        objUser.m_updated = new FirebaseTimestamp(firebaseObj.updated);
        objUser.m_name = firebaseObj.name;
        objUser.m_surname = firebaseObj.surname;
        objUser.m_email = firebaseObj.email;

        objUser.setSaved();
        return objUser;
    }
}