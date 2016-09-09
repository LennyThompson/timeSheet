// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Sep 06 21:07:01 AEST 2016

import {findIndex} from "lodash";

export class ImageCategory
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
        return ImageCategory.family;
    }

    static get family() : ImageCategory
    {
        return ImageCategory.allValues.family;
    }
    static get friends() : ImageCategory
    {
        return ImageCategory.allValues.friends;
    }
    static get work() : ImageCategory
    {
        return ImageCategory.allValues.work;
    }
    static get other() : ImageCategory
    {
        return ImageCategory.allValues.other;
    }
    static get unknown() : ImageCategory
    {
        return ImageCategory.allValues.unknown;
    }

    static get allValues() : any
    {
        return {
            family: new ImageCategory(
                "family",
                1,
                "Family",
                "null",
                []
            ),
            friends: new ImageCategory(
                "friends",
                2,
                "Friends",
                "null",
                []
            ),
            work: new ImageCategory(
                "work",
                3,
                "Work",
                "null",
                []
            ),
            other: new ImageCategory(
                "other",
                4,
                "Other",
                "null",
                []
            ),
            unknown: new ImageCategory(
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
        Object.keys(ImageCategory.allValues).forEach(
            (key) =>
            {
                if (ImageCategory.allValues[key].group.length === 0 || findIndex(ImageCategory.allValues[key].group, strContext) >= 0)
                {
                    listReturn.push(ImageCategory.allValues[key]);
                }
            }
        );
        return listReturn;
    }
}
