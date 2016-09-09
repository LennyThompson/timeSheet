// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Sep 06 21:07:01 AEST 2016

import {findIndex} from "lodash";

export class LockStatus
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
        return LockStatus.system_locked;
    }

    static get unlocked() : LockStatus
    {
        return LockStatus.allValues.unlocked;
    }
    static get user_locked() : LockStatus
    {
        return LockStatus.allValues.user_locked;
    }
    static get system_locked() : LockStatus
    {
        return LockStatus.allValues.system_locked;
    }
    static get unknown() : LockStatus
    {
        return LockStatus.allValues.unknown;
    }

    static get allValues() : any
    {
        return {
            unlocked: new LockStatus(
                "unlocked",
                1,
                "Unlocked",
                "null",
                []
            ),
            user_locked: new LockStatus(
                "user_locked",
                2,
                "Locked By User",
                "null",
                []
            ),
            system_locked: new LockStatus(
                "system_locked",
                3,
                "Locked By System",
                "null",
                []
            ),
            unknown: new LockStatus(
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
        Object.keys(LockStatus.allValues).forEach(
            (key) =>
            {
                if (LockStatus.allValues[key].group.length === 0 || findIndex(LockStatus.allValues[key].group, strContext) >= 0)
                {
                    listReturn.push(LockStatus.allValues[key]);
                }
            }
        );
        return listReturn;
    }
}
