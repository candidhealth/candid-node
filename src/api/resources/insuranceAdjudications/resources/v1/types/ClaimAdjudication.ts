/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../..";

export interface ClaimAdjudication {
    insuranceAllowedAmountCents?: number;
    insurancePaidAmountCents?: number;
    serviceLines: Record<CandidApi.ServiceLineId, CandidApi.insuranceAdjudications.v1.ServiceLineAdjudication>;
    carcs: CandidApi.insuranceAdjudications.v1.ClaimAdjustmentReasonCode[];
}