// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Fri Sep 09 19:42:27 AEST 2016

import {Image} from "../types/Image";

import { AngularFire } from "angularfire2/angularfire2";
import { Observable, Subscription } from "rxjs/Rx";
import { storage } from "firebase";


export class DeletedImage
{
    private m_Image : Image;
    private __path : string;

    constructor()
    {
        this.m_Image = new Image();
        this.__path = "";
    }

    get Image() : Image
    {
        return this.m_Image;
    }

    get key() : string
    {
        return this.__path;
    }

    saveToDatabase(angularFire : AngularFire, userid : string) : Promise<any[]>
    {
        let listPromises = [];
        let strPath : string = DeletedImage.buildPath(userid, this.__path);
        let objFirebase = this.m_Image.toFirebase();

        if (this.__path)
        {
            listPromises.push
            (
                angularFire.database.object(strPath).set(objFirebase)
                .then(
                    () =>
                    {
                        return true;
                    }
                )
            );
        }
        else
        {
            listPromises.push
            (
                angularFire.database.list(strPath).push(objFirebase)
                .then(
                    (objPushed : any) =>
                    {
                        this.__path = objPushed.$key;
                        return true;
                    }
                )
            );
        }

        return Promise.all(listPromises);
    }
    updateInDatabase(angularFire : AngularFire, userid : string) : Promise<any[]>
    {
        // TODO: injected path updates not implemented...
        if (this.__path)
        {
            let strPath : string = DeletedImage.buildPath(userid, this.__path);
            let objFirebase = this.m_Image.getUpdate();

            return angularFire.database.object(strPath).update(objFirebase)
                .then(
                    () =>
                    {
                        return true;
                    }
                );
        }
        else
        {
            throw new Error("Cannot update an object that has not been saved");
        }
    }

    static loadFromDatabase(angularFire : AngularFire, userid : string, imageId : string) : any
    {
        let strPath : string = DeletedImage.buildPath(userid, imageId);
        return angularFire.database.object(strPath)
            .map(
                (itemImage : any) =>
                {
                    let objDeletedImage = new DeletedImage();
                    objDeletedImage.m_Image = Image.fromFirebase(itemImage);
                    objDeletedImage.__path = itemImage.$key;


                    return objDeletedImage;
                }
            );
    }

    static loadAllFromDatabase(angularFire : AngularFire, userid : string) : any
    {
        let strPath : string = DeletedImage.buildPath(userid);
        return angularFire.database.list(strPath)
            .map(
                (listImage : any) =>
                {
                    if
                    (
                        listImage
                        &&
                        listImage.length > 0
                    )
                    {
                        return listImage.map(
                            (itemImage : any) =>
                            {
                                let objDeletedImage = new DeletedImage();
                                objDeletedImage.m_Image = Image.fromFirebase(itemImage);
                                objDeletedImage.__path = itemImage.$key;


                                return objDeletedImage;
                            }
                        );
                    }
                }
            );
    }

    exists(angularFire : AngularFire, userid : string, imageId : string) : Subscription
    {
        let strPath : string = DeletedImage.buildPath(userid, imageId);
        return angularFire.database.object(strPath)
            .subscribe(
                (objDeletedImage) =>
                {
                    return objDeletedImage.$exists();
                },
                () =>
                {
                    return false;
                }
            );
    }

    static buildPath(userid : string, strUuid? : string) : string
    {
        let strPath : string = "/images/" + userid + "/deleted";
        if (strUuid)
        {
            strPath += "/" + strUuid;
        }
        return strPath;
    }
}
