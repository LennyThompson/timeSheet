// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Wed Sep 14 10:04:47 AEST 2016

import {ImageAnnotation} from "../types/ImageAnnotation";

import { AngularFire } from "angularfire2/angularfire2";
import { Observable, Subscription } from "rxjs/Rx";
import { storage } from "firebase";


export class DeletedImageAnnotation
{
    private m_ImageAnnotation : ImageAnnotation;
    private __path : string;

    constructor()
    {
        this.m_ImageAnnotation = new ImageAnnotation();
        this.__path = "";
    }

    get ImageAnnotation() : ImageAnnotation
    {
        return this.m_ImageAnnotation;
    }

    get key() : string
    {
        return this.__path;
    }

    saveToDatabase(angularFire : AngularFire, userid : string, imageId : string) : Promise<any[]>
    {
        let listPromises = [];
        let strPath : string = DeletedImageAnnotation.buildPath(userid, imageId, this.__path);
        let objFirebase = this.m_ImageAnnotation.toFirebase();

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
                        this.__path = objPushed.key;
                        return true;
                    }
                )
            );
        }

        return Promise.all(listPromises);
    }
    updateInDatabase(angularFire : AngularFire, userid : string, imageId : string) : Promise<any[]>
    {
        // TODO: injected path updates not implemented...
        if (this.__path)
        {
            let strPath : string = DeletedImageAnnotation.buildPath(userid, imageId, this.__path);
            let objFirebase = this.m_ImageAnnotation.getUpdate();

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

    static loadFromDatabase(angularFire : AngularFire, userid : string, imageId : string, annotateId : string) : any
    {
        let strPath : string = DeletedImageAnnotation.buildPath(userid, imageId, annotateId);
        return angularFire.database.object(strPath)
            .map(
                (itemImageAnnotation : any) =>
                {
                    let objDeletedImageAnnotation = new DeletedImageAnnotation();
                    objDeletedImageAnnotation.m_ImageAnnotation = ImageAnnotation.fromFirebase(itemImageAnnotation);
                    objDeletedImageAnnotation.__path = itemImageAnnotation.$key;

                    return objDeletedImageAnnotation;
                }
            );
    }

    static loadAllFromDatabase(angularFire : AngularFire, userid : string, imageId : string) : any
    {
        let strPath : string = DeletedImageAnnotation.buildPath(userid, imageId);
        return angularFire.database.list(strPath)
            .map(
                (listImageAnnotation : any) =>
                {
                    if
                    (
                        listImageAnnotation
                        &&
                        listImageAnnotation.length > 0
                    )
                    {
                        return listImageAnnotation.map(
                            (itemImageAnnotation : any) =>
                            {
                                let objDeletedImageAnnotation = new DeletedImageAnnotation();
                                objDeletedImageAnnotation.m_ImageAnnotation = ImageAnnotation.fromFirebase(itemImageAnnotation);
                                objDeletedImageAnnotation.__path = itemImageAnnotation.$key;

                                return objDeletedImageAnnotation;
                            }
                        );
                    }
                }
            );
    }

    exists(angularFire : AngularFire, userid : string, imageId : string, annotateId : string) : Subscription
    {
        let strPath : string = DeletedImageAnnotation.buildPath(userid, imageId, annotateId);
        return angularFire.database.object(strPath)
            .subscribe(
                (objDeletedImageAnnotation) =>
                {
                // TODO: change this once angularfire2 is updated to include $exists
                    return true; // objDeletedImageAnnotation.$exists();
                },
                () =>
                {
                    return false;
                }
            );
    }

    static buildPath(userid : string, imageId : string, strUuid? : string) : string
    {
        let strPath : string = "/images/" + userid + "/deleted/" + imageId + "/annotate";
        if (strUuid)
        {
            strPath += "/" + strUuid;
        }
        return strPath;
    }
}
