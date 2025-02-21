/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as CandidApi from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";

export const OrganizationProvider: core.serialization.ObjectSchema<
    serializers.preEncounter.eligibilityChecks.v1.OrganizationProvider.Raw,
    CandidApi.preEncounter.eligibilityChecks.v1.OrganizationProvider
> = core.serialization.object({
    organizationName: core.serialization.property("organization_name", core.serialization.string().optional()),
    npi: core.serialization.string(),
});

export declare namespace OrganizationProvider {
    export interface Raw {
        organization_name?: string | null;
        npi: string;
    }
}
