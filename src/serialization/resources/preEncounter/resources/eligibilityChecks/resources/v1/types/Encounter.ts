/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as CandidApi from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";

export const Encounter: core.serialization.ObjectSchema<
    serializers.preEncounter.eligibilityChecks.v1.Encounter.Raw,
    CandidApi.preEncounter.eligibilityChecks.v1.Encounter
> = core.serialization.object({
    dateOfService: core.serialization.property("date_of_service", core.serialization.string().optional()),
    serviceTypeCodes: core.serialization.property(
        "service_type_codes",
        core.serialization.list(core.serialization.string()).optional(),
    ),
});

export declare namespace Encounter {
    export interface Raw {
        date_of_service?: string | null;
        service_type_codes?: string[] | null;
    }
}
