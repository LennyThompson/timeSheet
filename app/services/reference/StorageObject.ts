import {Observable} from "rxjs/Rx";
import {AngularFire} from "angularfire2/angularfire2";
import { storage } from "firebase";
import UploadMetadata = firebase.storage.UploadMetadata;

export abstract class StorageObject
{
    private m_objectFile : any;
    private m_storagePath : string;
    private m_uuid : string;


    constructor(storagePath? : string, fireObject? : any, uuid? : string)
    {
        this.m_storagePath = storagePath;
        this.m_objectFile = fireObject;
        this.m_uuid = uuid;
    }

    get objectFile() : any
    {
        return this.m_objectFile;
    }
    get storagePath() : string
    {
        return this.m_storagePath;
    }
    get uuid() : string
    {
        return this.m_uuid;
    }



    setStorageRoot(strRoot : string) : void
    {
        this.m_storagePath = strRoot;
    }

    setStorageObject(storageObject : any) : void
    {
        this.m_objectFile = storageObject;
    }

    saveToFirebase(angularFire : AngularFire) : Promise<boolean>
    {
        let strPath : string = this.m_storagePath ? this.m_storagePath : this.buildPath(angularFire, this.m_uuid);
        let objectMetadata : any = {
            contentType: this.m_objectFile.type
        };
        let objectTask = storage().ref().child(strPath).put(this.m_objectFile.file, objectMetadata);
        return new Promise<boolean>(
            (resolve, reject) =>
            {
                objectTask.on(storage.TaskEvent.STATE_CHANGED,
                    {
                        next: () =>
                        {
                        },
                        error: (error) =>
                        {
                            reject(error);
                        },
                        complete: () =>
                        {
                            resolve(true);
                        }
                    }
                );
            }
        );
    }

    abstract buildPath(angularFire : AngularFire, strUuid : string) : string;
}