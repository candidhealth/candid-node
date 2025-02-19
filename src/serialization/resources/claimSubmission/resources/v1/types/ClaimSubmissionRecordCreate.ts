/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { ClaimFrequencyTypeCode } from "./ClaimFrequencyTypeCode";
import { ClaimSubmissionPayerResponsibilityType } from "../../../../commons/types/ClaimSubmissionPayerResponsibilityType";
import { IntendedSubmissionMedium } from "../../../../commons/types/IntendedSubmissionMedium";

export const ClaimSubmissionRecordCreate: core.serialization.ObjectSchema<
    serializers.claimSubmission.v1.ClaimSubmissionRecordCreate.Raw,
    CandidApi.claimSubmission.v1.ClaimSubmissionRecordCreate
> = core.serialization.object({
    submittedAt: core.serialization.property("submitted_at", core.serialization.date()),
    claimFrequencyCode: core.serialization.property("claim_frequency_code", ClaimFrequencyTypeCode.optional()),
    payerResponsibility: core.serialization.property(
        "payer_responsibility",
        ClaimSubmissionPayerResponsibilityType.optional(),
    ),
    intendedSubmissionMedium: core.serialization.property(
        "intended_submission_medium",
        IntendedSubmissionMedium.optional(),
    ),
});

export declare namespace ClaimSubmissionRecordCreate {
    export interface Raw {
        submitted_at: string;
        claim_frequency_code?: ClaimFrequencyTypeCode.Raw | null;
        payer_responsibility?: ClaimSubmissionPayerResponsibilityType.Raw | null;
        intended_submission_medium?: IntendedSubmissionMedium.Raw | null;
    }
}
