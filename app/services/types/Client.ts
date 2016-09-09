import { database } from "firebase";

export class Client
{

    constructor()
    {

    }



    getUpdate() : any
    {
        let objUpdated = {};
        let bUpdated = false;
        if (bUpdated)
        {
            objUpdated["updated"] = (<any>database).ServerValue.TIMESTAMP;
        }
        return objUpdated;
    }


    toFirebase() : any
    {

        let objFirebase = {
        };
        return objFirebase;
    }

    setSaved() : void
    {
    }

    static fromFirebase(firebaseObj : any) : Client
    {
        let objClient = new Client();
        objClient.setSaved();
        return objClient;
    }
}