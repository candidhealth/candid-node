/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { Date_ } from "../../../../commons/types/Date_";

export const DateUpdate: core.serialization.Schema<
    serializers.contracts.v2.DateUpdate.Raw,
    CandidApi.contracts.v2.DateUpdate
> = core.serialization
    .union("type", {
        set: core.serialization.object({
            value: Date_,
        }),
        remove: core.serialization.object({}),
    })
    .transform<CandidApi.contracts.v2.DateUpdate>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace DateUpdate {
    export type Raw = DateUpdate.Set | DateUpdate.Remove;

    export interface Set {
        type: "set";
        value: Date_.Raw;
    }

    export interface Remove {
        type: "remove";
    }
}
