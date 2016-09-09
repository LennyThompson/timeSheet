import {FirebaseTimestamp} from "../reference/FirebaseTimestamp";
import {AttachmentType} from "../enums/AttachmentType";

import { database } from "firebase";

export class Attachment
{
    private m_created : FirebaseTimestamp;
    private m_updated : FirebaseTimestamp;
    private m_attachmentType : AttachmentType;
    private m_name : string;
    private m_comment : string;
    private m_location : string;

    private m_battachmentTypeUpdated : boolean;
    private m_bnameUpdated : boolean;
    private m_bcommentUpdated : boolean;
    private m_blocationUpdated : boolean;


    constructor()
    {
        this.m_created = new FirebaseTimestamp();
        this.m_updated = new FirebaseTimestamp();
        this.m_attachmentType = AttachmentType.defaultValue;
        this.m_name = "";
        this.m_comment = "";
        this.m_location = "";

        this.m_battachmentTypeUpdated = true;
        this.m_bnameUpdated = true;
        this.m_bcommentUpdated = true;
        this.m_blocationUpdated = true;
    }

    get created() : FirebaseTimestamp
    {
        return this.m_created;
    }
    get updated() : FirebaseTimestamp
    {
        return this.m_updated;
    }
    get attachmentType() : AttachmentType
    {
        return this.m_attachmentType;
    }
    get name() : string
    {
        return this.m_name;
    }
    get comment() : string
    {
        return this.m_comment;
    }
    get location() : string
    {
        return this.m_location;
    }

    set attachmentType(attachmentType : AttachmentType)
    {
        this.m_attachmentType = attachmentType;
        this.m_battachmentTypeUpdated = true;
    }
    set name(name : string)
    {
        this.m_name = name;
        this.m_bnameUpdated = true;
    }
    set comment(comment : string)
    {
        this.m_comment = comment;
        this.m_bcommentUpdated = true;
    }
    set location(location : string)
    {
        this.m_location = location;
        this.m_blocationUpdated = true;
    }

    getUpdate() : any
    {
        let objUpdated = {};
        let bUpdated = false;
        if (this.m_battachmentTypeUpdated)
        {
            objUpdated["attachmentType"] = this.m_attachmentType.name;
        }
        if (this.m_bnameUpdated)
        {
            objUpdated["name"] = this.m_name;
        }
        if (this.m_bcommentUpdated)
        {
            objUpdated["comment"] = this.m_comment;
        }
        if (this.m_blocationUpdated)
        {
            objUpdated["location"] = this.m_location;
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
            attachmentType: this.m_attachmentType.name,
            name: this.m_name,
            comment: this.m_comment,
            location: this.m_location
        };
        return objFirebase;
    }

    setSaved() : void
    {
        this.m_battachmentTypeUpdated = false;
        this.m_bnameUpdated = false;
        this.m_bcommentUpdated = false;
        this.m_blocationUpdated = false;
    }

    static fromFirebase(firebaseObj : any) : Attachment
    {
        let objAttachment = new Attachment();
        objAttachment.m_created = new FirebaseTimestamp(firebaseObj.created);
        objAttachment.m_updated = new FirebaseTimestamp(firebaseObj.updated);
        objAttachment.m_attachmentType = AttachmentType[firebaseObj.attachmentType];
        objAttachment.m_name = firebaseObj.name;
        objAttachment.m_comment = firebaseObj.comment;
        objAttachment.m_location = firebaseObj.location;

        objAttachment.setSaved();
        return objAttachment;
    }
}