/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";

export interface MedicationDispenseCreate {
    medicationDispenseExternalId: string;
    patientExternalId: string;
    procedureCode: string;
    quantity: CandidApi.Decimal;
    units: CandidApi.ServiceLineUnits;
    dateOfService: string;
    drugIdentification?: CandidApi.serviceLines.v2.DrugIdentification;
    description?: string;
    modifiers?: CandidApi.ProcedureModifier[];
}