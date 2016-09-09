// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Sep 06 21:07:01 AEST 2016

import {findIndex} from "lodash";

export class AlertType
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
        return AlertType.timer;
    }

    static get timer() : AlertType
    {
        return AlertType.allValues.timer;
    }
    static get overdue() : AlertType
    {
        return AlertType.allValues.overdue;
    }
    static get user_defined() : AlertType
    {
        return AlertType.allValues.user_defined;
    }
    static get threshhold() : AlertType
    {
        return AlertType.allValues.threshhold;
    }
    static get system() : AlertType
    {
        return AlertType.allValues.system;
    }
    static get unknown() : AlertType
    {
        return AlertType.allValues.unknown;
    }

    static get allValues() : any
    {
        return {
            timer: new AlertType(
                "timer",
                1,
                "Timer",
                "null",
                []
            ),
            overdue: new AlertType(
                "overdue",
                2,
                "Overdue",
                "null",
                []
            ),
            user_defined: new AlertType(
                "user_defined",
                3,
                "User Defined",
                "null",
                []
            ),
            threshhold: new AlertType(
                "threshhold",
                4,
                "Threshhold",
                "null",
                []
            ),
            system: new AlertType(
                "system",
                5,
                "System",
                "null",
                []
            ),
            unknown: new AlertType(
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
        Object.keys(AlertType.allValues).forEach(
            (key) =>
            {
                if (AlertType.allValues[key].group.length === 0 || findIndex(AlertType.allValues[key].group, strContext) >= 0)
                {
                    listReturn.push(AlertType.allValues[key]);
                }
            }
        );
        return listReturn;
    }
}
