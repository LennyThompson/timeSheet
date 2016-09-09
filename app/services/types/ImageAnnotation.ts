import {FirebaseTimestamp} from "../reference/FirebaseTimestamp";

import { database } from "firebase";

export class ImageAnnotation
{
    private m_created : FirebaseTimestamp;
    private m_updated : FirebaseTimestamp;
    private m_annotation : string;

    private m_bannotationUpdated : boolean;


    constructor()
    {
        this.m_created = new FirebaseTimestamp();
        this.m_updated = new FirebaseTimestamp();
        this.m_annotation = "";

        this.m_bannotationUpdated = true;
    }

    get created() : FirebaseTimestamp
    {
        return this.m_created;
    }
    get updated() : FirebaseTimestamp
    {
        return this.m_updated;
    }
    get annotation() : string
    {
        return this.m_annotation;
    }

    set annotation(annotation : string)
    {
        this.m_annotation = annotation;
        this.m_bannotationUpdated = true;
    }

    getUpdate() : any
    {
        let objUpdated = {};
        let bUpdated = false;
        if (this.m_bannotationUpdated)
        {
            objUpdated["annotation"] = this.m_annotation;
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
            annotation: this.m_annotation
        };
        return objFirebase;
    }

    setSaved() : void
    {
        this.m_bannotationUpdated = false;
    }

    static fromFirebase(firebaseObj : any) : ImageAnnotation
    {
        let objImageAnnotation = new ImageAnnotation();
        objImageAnnotation.m_created = new FirebaseTimestamp(firebaseObj.created);
        objImageAnnotation.m_updated = new FirebaseTimestamp(firebaseObj.updated);
        objImageAnnotation.m_annotation = firebaseObj.annotation;

        objImageAnnotation.setSaved();
        return objImageAnnotation;
    }
}