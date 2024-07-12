/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";

export interface ServiceLineCreate {
    modifiers?: CandidApi.ProcedureModifier[];
    procedureCode: string;
    /**
     * String representation of a Decimal that can be parsed by most libraries.
     * A ServiceLine quantity cannot contain more than one digit of precision.
     * Example: 1.1 is valid, 1.11 is not.
     */
    quantity: CandidApi.Decimal;
    units: CandidApi.ServiceLineUnits;
    /**
     * The total amount charged for this service line taking quantity into account. For example, if a single unit
     * costs 100 cents and 2 units were rendered, the charge_amount_cents should be 200. Should be greater than or
     * equal to 0.
     */
    chargeAmountCents?: number;
    /** Indices (zero-indexed) of all the diagnoses this service line references */
    diagnosisPointers: number[];
    drugIdentification?: CandidApi.serviceLines.v2.DrugIdentification;
    placeOfServiceCode?: CandidApi.FacilityTypeCode;
    /** A free-form description to clarify the related data elements and their content. Maps to SV1-01, C003-07 on the 837-P. */
    description?: string;
    dateOfService?: string;
    endDateOfService?: string;
    /**
     * The final provider who referred the services that were rendered.
     * All physicians who order services or refer Medicare beneficiaries must
     * report this data.
     */
    referringProvider?: CandidApi.encounterProviders.v2.ReferringProvider;
    /**
     * The first provider who referred the services that were rendered.
     * All physicians who order services or refer Medicare beneficiaries must
     * report this data. This field cannot be populated unless referring_provider is first populated.
     */
    initialReferringProvider?: CandidApi.encounterProviders.v2.InitialReferringProvider;
    /** The provider who is supervising the rendering provider. */
    supervisingProvider?: CandidApi.encounterProviders.v2.SupervisingProvider;
    /** The provider who ordered the services that were rendered. */
    orderingProvider?: CandidApi.encounterProviders.v2.OrderingProvider;
}
