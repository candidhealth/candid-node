/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../..";

export interface InsuranceAdjudication {
    insuranceAdjudicationId: CandidApi.insuranceAdjudication.v1.InsuranceAdjudicationId;
    payerUuid: CandidApi.payers.v3.PayerUuid;
    postDate?: string;
    payerClaimNumber: string;
    checkNumber?: string;
    checkDate: string;
    note?: string;
    claims: Record<CandidApi.ServiceLineId, CandidApi.insuranceAdjudication.v1.ClaimAdjudication>;
}
