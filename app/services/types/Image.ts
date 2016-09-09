import {FirebaseTimestamp} from "../reference/FirebaseTimestamp";
import {ImageCategory} from "../enums/ImageCategory";
import {ImageStatus} from "../enums/ImageStatus";

import { database } from "firebase";

export class Image
{
    private m_created : FirebaseTimestamp;
    private m_updated : FirebaseTimestamp;
    private m_name : string;
    private m_category : ImageCategory;
    private m_status : ImageStatus;
    private m_description : string;
    private m_comments : string;
    private m_location : string;
    private m_storage : string;

    private m_bnameUpdated : boolean;
    private m_bcategoryUpdated : boolean;
    private m_bstatusUpdated : boolean;
    private m_bdescriptionUpdated : boolean;
    private m_bcommentsUpdated : boolean;
    private m_blocationUpdated : boolean;
    private m_bstorageUpdated : boolean;


    constructor()
    {
        this.m_created = new FirebaseTimestamp();
        this.m_updated = new FirebaseTimestamp();
        this.m_name = "";
        this.m_category = ImageCategory.defaultValue;
        this.m_status = ImageStatus.defaultValue;
        this.m_description = "";
        this.m_comments = "";
        this.m_location = "";
        this.m_storage = "";

        this.m_bnameUpdated = true;
        this.m_bcategoryUpdated = true;
        this.m_bstatusUpdated = true;
        this.m_bdescriptionUpdated = true;
        this.m_bcommentsUpdated = true;
        this.m_blocationUpdated = true;
        this.m_bstorageUpdated = true;
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
    get category() : ImageCategory
    {
        return this.m_category;
    }
    get status() : ImageStatus
    {
        return this.m_status;
    }
    get description() : string
    {
        return this.m_description;
    }
    get comments() : string
    {
        return this.m_comments;
    }
    get location() : string
    {
        return this.m_location;
    }
    get storage() : string
    {
        return this.m_storage;
    }

    set name(name : string)
    {
        this.m_name = name;
        this.m_bnameUpdated = true;
    }
    set category(category : ImageCategory)
    {
        this.m_category = category;
        this.m_bcategoryUpdated = true;
    }
    set status(status : ImageStatus)
    {
        this.m_status = status;
        this.m_bstatusUpdated = true;
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
    set location(location : string)
    {
        this.m_location = location;
        this.m_blocationUpdated = true;
    }
    set storage(storage : string)
    {
        this.m_storage = storage;
        this.m_bstorageUpdated = true;
    }

    getUpdate() : any
    {
        let objUpdated = {};
        let bUpdated = false;
        if (this.m_bnameUpdated)
        {
            objUpdated["name"] = this.m_name;
        }
        if (this.m_bcategoryUpdated)
        {
            objUpdated["category"] = this.m_category.name;
        }
        if (this.m_bstatusUpdated)
        {
            objUpdated["status"] = this.m_status.name;
        }
        if (this.m_bdescriptionUpdated)
        {
            objUpdated["description"] = this.m_description;
        }
        if (this.m_bcommentsUpdated)
        {
            objUpdated["comments"] = this.m_comments;
        }
        if (this.m_blocationUpdated)
        {
            objUpdated["location"] = this.m_location;
        }
        if (this.m_bstorageUpdated)
        {
            objUpdated["storage"] = this.m_storage;
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
            category: this.m_category.name,
            status: this.m_status.name,
            description: this.m_description,
            comments: this.m_comments,
            location: this.m_location,
            storage: this.m_storage
        };
        return objFirebase;
    }

    setSaved() : void
    {
        this.m_bnameUpdated = false;
        this.m_bcategoryUpdated = false;
        this.m_bstatusUpdated = false;
        this.m_bdescriptionUpdated = false;
        this.m_bcommentsUpdated = false;
        this.m_blocationUpdated = false;
        this.m_bstorageUpdated = false;
    }

    static fromFirebase(firebaseObj : any) : Image
    {
        let objImage = new Image();
        objImage.m_created = new FirebaseTimestamp(firebaseObj.created);
        objImage.m_updated = new FirebaseTimestamp(firebaseObj.updated);
        objImage.m_name = firebaseObj.name;
        objImage.m_category = ImageCategory[firebaseObj.category];
        objImage.m_status = ImageStatus[firebaseObj.status];
        objImage.m_description = firebaseObj.description;
        objImage.m_comments = firebaseObj.comments;
        objImage.m_location = firebaseObj.location;
        objImage.m_storage = firebaseObj.storage;

        objImage.setSaved();
        return objImage;
    }
}