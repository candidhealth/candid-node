/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as CandidApi from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { CoverageValue } from "./CoverageValue";

export const ServiceCoverageDetails: core.serialization.ObjectSchema<
    serializers.preEncounter.coverages.v1.ServiceCoverageDetails.Raw,
    CandidApi.preEncounter.coverages.v1.ServiceCoverageDetails
> = core.serialization.object({
    copay: CoverageValue.optional(),
    coinsurance: CoverageValue.optional(),
    visits: CoverageValue.optional(),
    visitsRemaining: core.serialization.property("visits_remaining", CoverageValue.optional()),
    additionalNotes: core.serialization.property("additional_notes", core.serialization.string().optional()),
});

export declare namespace ServiceCoverageDetails {
    interface Raw {
        copay?: CoverageValue.Raw | null;
        coinsurance?: CoverageValue.Raw | null;
        visits?: CoverageValue.Raw | null;
        visits_remaining?: CoverageValue.Raw | null;
        additional_notes?: string | null;
    }
}
