/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";

export interface DrugIdentificationOptional {
    serviceIdQualifier?: CandidApi.serviceLines.v2.ServiceIdQualifier;
    nationalDrugCode?: string;
    nationalDrugUnitCount?: string;
    measurementUnitCode?: CandidApi.serviceLines.v2.MeasurementUnitCode;
    linkSequenceNumber?: string;
    pharmacyPrescriptionNumber?: string;
    conversionFormula?: string;
    drugDescription?: string;
}
