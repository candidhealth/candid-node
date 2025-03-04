/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const DimensionName: core.serialization.Schema<
    serializers.feeSchedules.v3.DimensionName.Raw,
    CandidApi.feeSchedules.v3.DimensionName
> = core.serialization.enum_(["payer_uuid", "organization_billing_provider_id", "cpt_code"]);

export declare namespace DimensionName {
    export type Raw = "payer_uuid" | "organization_billing_provider_id" | "cpt_code";
}
