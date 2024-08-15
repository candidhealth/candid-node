/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";

export interface ServiceLineUpdate {
    editReason?: string;
    modifiers?: CandidApi.ProcedureModifier[];
    chargeAmountCents?: number;
    diagnosisIdZero?: CandidApi.DiagnosisId;
    diagnosisIdOne?: CandidApi.DiagnosisId;
    diagnosisIdTwo?: CandidApi.DiagnosisId;
    diagnosisIdThree?: CandidApi.DiagnosisId;
    denialReason?: CandidApi.serviceLines.v2.ServiceLineDenialReason;
    placeOfServiceCode?: CandidApi.FacilityTypeCode;
    units?: CandidApi.ServiceLineUnits;
    procedureCode?: string;
    /**
     * String representation of a Decimal that can be parsed by most libraries.
     * A ServiceLine quantity cannot contain more than one digit of precision.
     * Example: 1.1 is valid, 1.11 is not.
     */
    quantity?: CandidApi.Decimal;
    /** A free-form description to clarify the related data elements and their content. Maps to SV1-01, C003-07 on the 837-P. */
    description?: string;
    /** date_of_service must be defined on either the encounter or the service lines but not both. */
    dateOfService?: string;
    endDateOfService?: string;
}