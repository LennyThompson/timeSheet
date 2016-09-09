// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Sep 06 21:07:01 AEST 2016

import {findIndex} from "lodash";

export class JobStatus
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
        return JobStatus.pending;
    }

    static get pending() : JobStatus
    {
        return JobStatus.allValues.pending;
    }
    static get active() : JobStatus
    {
        return JobStatus.allValues.active;
    }
    static get inactive() : JobStatus
    {
        return JobStatus.allValues.inactive;
    }
    static get complate() : JobStatus
    {
        return JobStatus.allValues.complate;
    }
    static get billed() : JobStatus
    {
        return JobStatus.allValues.billed;
    }
    static get paid() : JobStatus
    {
        return JobStatus.allValues.paid;
    }
    static get unknown() : JobStatus
    {
        return JobStatus.allValues.unknown;
    }

    static get allValues() : any
    {
        return {
            pending: new JobStatus(
                "pending",
                1,
                "Pending",
                "null",
                []
            ),
            active: new JobStatus(
                "active",
                2,
                "Active",
                "null",
                []
            ),
            inactive: new JobStatus(
                "inactive",
                3,
                "Inactive",
                "null",
                []
            ),
            complate: new JobStatus(
                "complate",
                4,
                "Complate",
                "null",
                []
            ),
            billed: new JobStatus(
                "billed",
                5,
                "Billed",
                "null",
                []
            ),
            paid: new JobStatus(
                "paid",
                6,
                "Paid",
                "null",
                []
            ),
            unknown: new JobStatus(
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
        Object.keys(JobStatus.allValues).forEach(
            (key) =>
            {
                if (JobStatus.allValues[key].group.length === 0 || findIndex(JobStatus.allValues[key].group, strContext) >= 0)
                {
                    listReturn.push(JobStatus.allValues[key]);
                }
            }
        );
        return listReturn;
    }
}
