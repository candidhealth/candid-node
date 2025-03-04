/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { LicenseType } from "../../../../organizationProviders/resources/v2/types/LicenseType";

export const MatchLicenseType: core.serialization.ObjectSchema<
    serializers.feeSchedules.v3.MatchLicenseType.Raw,
    CandidApi.feeSchedules.v3.MatchLicenseType
> = core.serialization.object({
    value: LicenseType.optional(),
    match: core.serialization.boolean(),
    explanation: core.serialization.string(),
});

export declare namespace MatchLicenseType {
    export interface Raw {
        value?: LicenseType.Raw | null;
        match: boolean;
        explanation: string;
    }
}
