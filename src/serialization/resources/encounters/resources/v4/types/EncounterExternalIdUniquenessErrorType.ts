/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const EncounterExternalIdUniquenessErrorType: core.serialization.ObjectSchema<
    serializers.encounters.v4.EncounterExternalIdUniquenessErrorType.Raw,
    CandidApi.encounters.v4.EncounterExternalIdUniquenessErrorType
> = core.serialization.object({
    externalId: core.serialization.property(
        "external_id",
        core.serialization.lazy(async () => (await import("../../../../..")).EncounterExternalId).optional()
    ),
});

export declare namespace EncounterExternalIdUniquenessErrorType {
    interface Raw {
        external_id?: serializers.EncounterExternalId.Raw | null;
    }
}