// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Sep 06 21:07:01 AEST 2016

import {findIndex} from "lodash";

export class ActivityStatus
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
        return ActivityStatus.active;
    }

    static get planned() : ActivityStatus
    {
        return ActivityStatus.allValues.planned;
    }
    static get active() : ActivityStatus
    {
        return ActivityStatus.allValues.active;
    }
    static get complete() : ActivityStatus
    {
        return ActivityStatus.allValues.complete;
    }
    static get paid() : ActivityStatus
    {
        return ActivityStatus.allValues.paid;
    }
    static get deleted() : ActivityStatus
    {
        return ActivityStatus.allValues.deleted;
    }
    static get unknown() : ActivityStatus
    {
        return ActivityStatus.allValues.unknown;
    }

    static get allValues() : any
    {
        return {
            planned: new ActivityStatus(
                "planned",
                1,
                "Planned",
                "null",
                []
            ),
            active: new ActivityStatus(
                "active",
                2,
                "Active",
                "null",
                []
            ),
            complete: new ActivityStatus(
                "complete",
                3,
                "Complete",
                "null",
                []
            ),
            paid: new ActivityStatus(
                "paid",
                4,
                "Paid",
                "null",
                []
            ),
            deleted: new ActivityStatus(
                "deleted",
                5,
                "Deleted",
                "null",
                []
            ),
            unknown: new ActivityStatus(
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
        Object.keys(ActivityStatus.allValues).forEach(
            (key) =>
            {
                if (ActivityStatus.allValues[key].group.length === 0 || findIndex(ActivityStatus.allValues[key].group, strContext) >= 0)
                {
                    listReturn.push(ActivityStatus.allValues[key]);
                }
            }
        );
        return listReturn;
    }
}
