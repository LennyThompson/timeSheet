// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Sep 06 21:07:01 AEST 2016

import {findIndex} from "lodash";

export class JobType
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
        return JobType.billable;
    }

    static get billable() : JobType
    {
        return JobType.allValues.billable;
    }
    static get unbillable() : JobType
    {
        return JobType.allValues.unbillable;
    }
    static get user_defined() : JobType
    {
        return JobType.allValues.user_defined;
    }
    static get system() : JobType
    {
        return JobType.allValues.system;
    }
    static get unknown() : JobType
    {
        return JobType.allValues.unknown;
    }

    static get allValues() : any
    {
        return {
            billable: new JobType(
                "billable",
                1,
                "Billable",
                "null",
                []
            ),
            unbillable: new JobType(
                "unbillable",
                2,
                "Unbillable",
                "null",
                []
            ),
            user_defined: new JobType(
                "user_defined",
                3,
                "User Defined",
                "null",
                []
            ),
            system: new JobType(
                "system",
                4,
                "System",
                "null",
                []
            ),
            unknown: new JobType(
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
        Object.keys(JobType.allValues).forEach(
            (key) =>
            {
                if (JobType.allValues[key].group.length === 0 || findIndex(JobType.allValues[key].group, strContext) >= 0)
                {
                    listReturn.push(JobType.allValues[key]);
                }
            }
        );
        return listReturn;
    }
}
