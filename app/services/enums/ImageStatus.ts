// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Sep 06 21:07:01 AEST 2016

import {findIndex} from "lodash";

export class ImageStatus
{

    constructor(
        public name : string,
        public value : number,
        public display : string,
        public icon : string,
        public group : string[]
    )
    {
    }
    static get defaultValue()
    {
        return ImageStatus.storage;
    }

    static get storage() : ImageStatus
    {
        return ImageStatus.allValues.storage;
    }
    static get local() : ImageStatus
    {
        return ImageStatus.allValues.local;
    }
    static get deleted() : ImageStatus
    {
        return ImageStatus.allValues.deleted;
    }
    static get unknown() : ImageStatus
    {
        return ImageStatus.allValues.unknown;
    }

    static get allValues() : any
    {
        return {
            storage: new ImageStatus(
                "storage",
                1,
                "Storage",
                "null",
                []
            ),
            local: new ImageStatus(
                "local",
                2,
                "Local",
                "null",
                []
            ),
            deleted: new ImageStatus(
                "deleted",
                3,
                "Deleted",
                "null",
                []
            ),
            unknown: new ImageStatus(
                "unknown",
                100,
                "Unknown",
                "null",
                []
            )
        };
    }

    static getValuesForContext(strContext)
    {
        let listReturn = [];
        Object.keys(ImageStatus.allValues).forEach(
            (key) =>
            {
                if (ImageStatus.allValues[key].group.length === 0 || findIndex(ImageStatus.allValues[key].group, strContext) >= 0)
                {
                    listReturn.push(ImageStatus.allValues[key]);
                }
            }
        );
        return listReturn;
    }
}
