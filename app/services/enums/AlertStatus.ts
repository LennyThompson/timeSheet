// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Sep 06 21:07:01 AEST 2016

import {findIndex} from "lodash";

export class AlertStatus
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
        return AlertStatus.acknowledged;
    }

    static get acknowledged() : AlertStatus
    {
        return AlertStatus.allValues.acknowledged;
    }
    static get ignored() : AlertStatus
    {
        return AlertStatus.allValues.ignored;
    }
    static get pending() : AlertStatus
    {
        return AlertStatus.allValues.pending;
    }
    static get stale() : AlertStatus
    {
        return AlertStatus.allValues.stale;
    }
    static get deleted() : AlertStatus
    {
        return AlertStatus.allValues.deleted;
    }
    static get unknown() : AlertStatus
    {
        return AlertStatus.allValues.unknown;
    }

    static get allValues() : any
    {
        return {
            acknowledged: new AlertStatus(
                "acknowledged",
                1,
                "Acknowledged",
                "null",
                []
            ),
            ignored: new AlertStatus(
                "ignored",
                2,
                "Ignored",
                "null",
                []
            ),
            pending: new AlertStatus(
                "pending",
                3,
                "Pending",
                "null",
                []
            ),
            stale: new AlertStatus(
                "stale",
                4,
                "Stale",
                "null",
                []
            ),
            deleted: new AlertStatus(
                "deleted",
                5,
                "Deleted",
                "null",
                []
            ),
            unknown: new AlertStatus(
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
        Object.keys(AlertStatus.allValues).forEach(
            (key) =>
            {
                if (AlertStatus.allValues[key].group.length === 0 || findIndex(AlertStatus.allValues[key].group, strContext) >= 0)
                {
                    listReturn.push(AlertStatus.allValues[key]);
                }
            }
        );
        return listReturn;
    }
}
