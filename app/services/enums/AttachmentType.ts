// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Sep 06 21:07:01 AEST 2016

import {findIndex} from "lodash";

export class AttachmentType
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
        return AttachmentType.document;
    }

    static get document() : AttachmentType
    {
        return AttachmentType.allValues.document;
    }
    static get image() : AttachmentType
    {
        return AttachmentType.allValues.image;
    }
    static get other() : AttachmentType
    {
        return AttachmentType.allValues.other;
    }
    static get unknown() : AttachmentType
    {
        return AttachmentType.allValues.unknown;
    }

    static get allValues() : any
    {
        return {
            document: new AttachmentType(
                "document",
                1,
                "Document",
                "null",
                []
            ),
            image: new AttachmentType(
                "image",
                2,
                "Image",
                "null",
                []
            ),
            other: new AttachmentType(
                "other",
                3,
                "Other",
                "null",
                []
            ),
            unknown: new AttachmentType(
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
        Object.keys(AttachmentType.allValues).forEach(
            (key) =>
            {
                if (AttachmentType.allValues[key].group.length === 0 || findIndex(AttachmentType.allValues[key].group, strContext) >= 0)
                {
                    listReturn.push(AttachmentType.allValues[key]);
                }
            }
        );
        return listReturn;
    }
}
