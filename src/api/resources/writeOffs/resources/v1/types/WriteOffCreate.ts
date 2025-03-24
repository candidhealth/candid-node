/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";

export type WriteOffCreate =
    | CandidApi.writeOffs.v1.WriteOffCreate.Patient
    | CandidApi.writeOffs.v1.WriteOffCreate.Insurance
    | CandidApi.writeOffs.v1.WriteOffCreate.NonInsurancePayer;

export namespace WriteOffCreate {
    export interface Patient extends CandidApi.writeOffs.v1.PatientWriteOffCreate {
        type: "patient";
    }

    export interface Insurance extends CandidApi.writeOffs.v1.InsuranceWriteOffCreate {
        type: "insurance";
    }

    export interface NonInsurancePayer extends CandidApi.writeOffs.v1.NonInsurancePayerWriteOffCreate {
        type: "non_insurance_payer";
    }
}
