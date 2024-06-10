/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { Regions } from "../../../../commons/types/Regions";

export const RegionsUpdate: core.serialization.Schema<
    serializers.contracts.v2.RegionsUpdate.Raw,
    CandidApi.contracts.v2.RegionsUpdate
> = core.serialization
    .union("type", {
        set: core.serialization.object({
            value: Regions,
        }),
        remove: core.serialization.object({}),
    })
    .transform<CandidApi.contracts.v2.RegionsUpdate>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace RegionsUpdate {
    type Raw = RegionsUpdate.Set | RegionsUpdate.Remove;

    interface Set {
        type: "set";
        value: Regions.Raw;
    }

    interface Remove {
        type: "remove";
    }
}
