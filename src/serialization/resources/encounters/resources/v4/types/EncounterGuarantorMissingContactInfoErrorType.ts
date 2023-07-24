/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const EncounterGuarantorMissingContactInfoErrorType: core.serialization.ObjectSchema<
    serializers.encounters.v4.EncounterGuarantorMissingContactInfoErrorType.Raw,
    CandidApi.encounters.v4.EncounterGuarantorMissingContactInfoErrorType
> = core.serialization.object({
    missingFields: core.serialization.property("missing_fields", core.serialization.list(core.serialization.string())),
});

export declare namespace EncounterGuarantorMissingContactInfoErrorType {
    interface Raw {
        missing_fields: string[];
    }
}