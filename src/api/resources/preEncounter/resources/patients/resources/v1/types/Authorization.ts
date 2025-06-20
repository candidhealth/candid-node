/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../../../index";

export interface Authorization {
    payerId: CandidApi.preEncounter.PayerId;
    payerName: string;
    additionalPayerInformation?: CandidApi.preEncounter.AdditionalPayerInformation;
    authorizationNumber: string;
    cptCode: string;
    /** If true, then the authorization will apply for all claims for the payer that fall in range the `period`. */
    applyForAllCptCodes?: boolean;
    /** If true, indicates that prior authorization is not required and prior authorization number will not be set on the claim for this authorization. */
    noPriorAuthorizationRequired?: boolean;
    units: CandidApi.preEncounter.patients.v1.AuthorizationUnit;
    quantity?: number;
    period?: CandidApi.preEncounter.Period;
    notes?: string;
}
