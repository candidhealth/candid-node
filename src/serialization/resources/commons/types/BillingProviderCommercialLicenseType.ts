/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CandidApi from "../../../../api/index";
import * as core from "../../../../core";

export const BillingProviderCommercialLicenseType: core.serialization.Schema<
    serializers.BillingProviderCommercialLicenseType.Raw,
    CandidApi.BillingProviderCommercialLicenseType
> = core.serialization.enum_(["0", "A", "B", "C", "D", "E", "F", "G", "H", "I"]);

export declare namespace BillingProviderCommercialLicenseType {
    export type Raw = "0" | "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I";
}
