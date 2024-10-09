/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";

export interface ServiceLineCreateStandalone {
    modifiers?: CandidApi.ProcedureModifier[];
    chargeAmountCents?: number;
    diagnosisIdZero?: CandidApi.DiagnosisId;
    diagnosisIdOne?: CandidApi.DiagnosisId;
    diagnosisIdTwo?: CandidApi.DiagnosisId;
    diagnosisIdThree?: CandidApi.DiagnosisId;
    denialReason?: CandidApi.serviceLines.v2.ServiceLineDenialReason;
    placeOfServiceCode?: CandidApi.FacilityTypeCode;
    procedureCode: string;
    /**
     * String representation of a Decimal that can be parsed by most libraries.
     * A ServiceLine quantity cannot contain more than one digit of precision.
     * Example: 1.1 is valid, 1.11 is not.
     */
    quantity: CandidApi.Decimal;
    units: CandidApi.ServiceLineUnits;
    claimId: CandidApi.ClaimId;
    /** A free-form description to clarify the related data elements and their content. Maps to SV1-01, C003-07 on the 837-P. */
    description?: string;
    dateOfService?: string;
    endDateOfService?: string;
    drugIdentification?: CandidApi.serviceLines.v2.DrugIdentification;
    /** Maps to MEA-02 on the 837-P. No more than 5 test results may be submitted per service line. */
    testResults?: CandidApi.serviceLines.v2.TestResult[];
}
