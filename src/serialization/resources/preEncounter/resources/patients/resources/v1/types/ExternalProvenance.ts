/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as CandidApi from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";

export const ExternalProvenance: core.serialization.ObjectSchema<
    serializers.preEncounter.patients.v1.ExternalProvenance.Raw,
    CandidApi.preEncounter.patients.v1.ExternalProvenance
> = core.serialization.object({
    externalId: core.serialization.property("external_id", core.serialization.string()),
    systemName: core.serialization.property("system_name", core.serialization.string()),
});

export declare namespace ExternalProvenance {
    interface Raw {
        external_id: string;
        system_name: string;
    }
}