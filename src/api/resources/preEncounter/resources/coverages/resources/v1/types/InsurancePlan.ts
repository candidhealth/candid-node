/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../../../index";

export interface InsurancePlan {
    memberId: string;
    payerId: CandidApi.preEncounter.PayerId;
    payerName: string;
    groupNumber?: string;
    name?: string;
    planType?: CandidApi.preEncounter.coverages.v1.NetworkType;
    type?: CandidApi.preEncounter.coverages.v1.InsuranceTypeCode;
    period?: CandidApi.preEncounter.Period;
    insuranceCardImageLocator?: string;
}
