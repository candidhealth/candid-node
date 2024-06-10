/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const InsuranceWriteOffReason: core.serialization.Schema<
    serializers.writeOffs.v1.InsuranceWriteOffReason.Raw,
    CandidApi.writeOffs.v1.InsuranceWriteOffReason
> = core.serialization.enum_([
    "SMALL_BALANCE",
    "NO_AUTHORIZATION_REFERRAL",
    "TIMELY_FILING",
    "STALE_DATE",
    "TIMELY_FILING_LATE_ENCOUNTER",
    "CREDENTIALING_OR_CONTRACTING",
    "NON_COVERED_MAX_BENEFIT",
    "NOT_MEDICALLY_NECESSARY",
    "BUNDLED_OR_INCLUSIVE",
    "UNCOLLECTIBLE_OR_NON_BILLABLE",
    "EFFORTS_EXHAUSTED",
    "ADMINISTRATIVE_WRITE_OFF",
    "CASE_RATE_OR_CAPITATED",
    "OTHER",
    "UNKNOWN",
]);

export declare namespace InsuranceWriteOffReason {
    type Raw =
        | "SMALL_BALANCE"
        | "NO_AUTHORIZATION_REFERRAL"
        | "TIMELY_FILING"
        | "STALE_DATE"
        | "TIMELY_FILING_LATE_ENCOUNTER"
        | "CREDENTIALING_OR_CONTRACTING"
        | "NON_COVERED_MAX_BENEFIT"
        | "NOT_MEDICALLY_NECESSARY"
        | "BUNDLED_OR_INCLUSIVE"
        | "UNCOLLECTIBLE_OR_NON_BILLABLE"
        | "EFFORTS_EXHAUSTED"
        | "ADMINISTRATIVE_WRITE_OFF"
        | "CASE_RATE_OR_CAPITATED"
        | "OTHER"
        | "UNKNOWN";
}
