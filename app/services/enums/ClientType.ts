// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Sep 06 21:07:01 AEST 2016

import {findIndex} from "lodash";

export class ClientType
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
        return ClientType.primary;
    }

    static get primary() : ClientType
    {
        return ClientType.allValues.primary;
    }
    static get secondary() : ClientType
    {
        return ClientType.allValues.secondary;
    }
    static get unknown() : ClientType
    {
        return ClientType.allValues.unknown;
    }

    static get allValues() : any
    {
        return {
            primary: new ClientType(
                "primary",
                1,
                "Primary",
                "null",
                []
            ),
            secondary: new ClientType(
                "secondary",
                2,
                "Secondary",
                "null",
                []
            ),
            unknown: new ClientType(
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
        Object.keys(ClientType.allValues).forEach(
            (key) =>
            {
                if (ClientType.allValues[key].group.length === 0 || findIndex(ClientType.allValues[key].group, strContext) >= 0)
                {
                    listReturn.push(ClientType.allValues[key]);
                }
            }
        );
        return listReturn;
    }
}
