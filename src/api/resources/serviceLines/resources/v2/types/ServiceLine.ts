/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../..";

export interface ServiceLine {
    modifiers?: CandidApi.ProcedureModifier[];
    chargeAmountCents?: number;
    allowedAmountCents?: number;
    insuranceBalanceCents?: number;
    patientBalanceCents?: number;
    paidAmountCents?: number;
    patientResponsibilityCents?: number;
    diagnosisIdZero?: CandidApi.DiagnosisId;
    diagnosisIdOne?: CandidApi.DiagnosisId;
    diagnosisIdTwo?: CandidApi.DiagnosisId;
    diagnosisIdThree?: CandidApi.DiagnosisId;
    serviceLineEraData?: CandidApi.serviceLines.v2.ServiceLineEraData;
    serviceLineManualAdjustments?: CandidApi.serviceLines.v2.ServiceLineAdjustment[];
    relatedInvoices?: CandidApi.Invoice[];
    denialReason?: CandidApi.serviceLines.v2.ServiceLineDenialReason;
    placeOfServiceCode?: CandidApi.FacilityTypeCode;
    serviceLineId: CandidApi.ServiceLineId;
    procedureCode: string;
    /**
     * String representation of a Decimal that can be parsed by most libraries.
     * A ServiceLine quantity cannot contain more than one digit of precision.
     * Example: 1.1 is valid, 1.11 is not.
     *
     */
    quantity: CandidApi.Decimal;
    units: CandidApi.ServiceLineUnits;
    claimId: CandidApi.ClaimId;
    /**
     * A range of dates of service for this service line. If the service line is for a single date, the end date
     * will be empty.
     *
     */
    dateOfServiceRange: CandidApi.DateRangeOptionalEnd;
}
