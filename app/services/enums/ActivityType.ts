// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Sep 06 21:07:01 AEST 2016

import {findIndex} from "lodash";

export class ActivityType
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
        return ActivityType.break;
    }

    static get work() : ActivityType
    {
        return ActivityType.allValues.work;
    }
    static get meeting() : ActivityType
    {
        return ActivityType.allValues.meeting;
    }
    static get user_defined() : ActivityType
    {
        return ActivityType.allValues.user_defined;
    }
    static get break() : ActivityType
    {
        return ActivityType.allValues.break;
    }
    static get unknown() : ActivityType
    {
        return ActivityType.allValues.unknown;
    }

    static get allValues() : any
    {
        return {
            work: new ActivityType(
                "work",
                1,
                "Work",
                "null",
                []
            ),
            meeting: new ActivityType(
                "meeting",
                2,
                "Meeting",
                "null",
                []
            ),
            user_defined: new ActivityType(
                "user_defined",
                3,
                "User Defined",
                "null",
                []
            ),
            break: new ActivityType(
                "break",
                4,
                "Break",
                "null",
                []
            ),
            unknown: new ActivityType(
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
        Object.keys(ActivityType.allValues).forEach(
            (key) =>
            {
                if (ActivityType.allValues[key].group.length === 0 || findIndex(ActivityType.allValues[key].group, strContext) >= 0)
                {
                    listReturn.push(ActivityType.allValues[key]);
                }
            }
        );
        return listReturn;
    }
}
