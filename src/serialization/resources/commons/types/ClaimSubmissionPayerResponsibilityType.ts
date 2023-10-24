/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as CandidApi from "../../../../api";
import * as core from "../../../../core";

export const ClaimSubmissionPayerResponsibilityType: core.serialization.Schema<
    serializers.ClaimSubmissionPayerResponsibilityType.Raw,
    CandidApi.ClaimSubmissionPayerResponsibilityType
> = core.serialization.enum_(["primary", "secondary"]);

export declare namespace ClaimSubmissionPayerResponsibilityType {
    type Raw = "primary" | "secondary";
}
