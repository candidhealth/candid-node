/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { PatientWriteOffCreate } from "./PatientWriteOffCreate";
import { InsuranceWriteOffCreate } from "./InsuranceWriteOffCreate";
import { NonInsurancePayerWriteOffCreate } from "./NonInsurancePayerWriteOffCreate";

export const WriteOffCreate: core.serialization.Schema<
    serializers.writeOffs.v1.WriteOffCreate.Raw,
    CandidApi.writeOffs.v1.WriteOffCreate
> = core.serialization
    .union("type", {
        patient: PatientWriteOffCreate,
        insurance: InsuranceWriteOffCreate,
        non_insurance_payer: NonInsurancePayerWriteOffCreate,
    })
    .transform<CandidApi.writeOffs.v1.WriteOffCreate>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace WriteOffCreate {
    export type Raw = WriteOffCreate.Patient | WriteOffCreate.Insurance | WriteOffCreate.NonInsurancePayer;

    export interface Patient extends PatientWriteOffCreate.Raw {
        type: "patient";
    }

    export interface Insurance extends InsuranceWriteOffCreate.Raw {
        type: "insurance";
    }

    export interface NonInsurancePayer extends NonInsurancePayerWriteOffCreate.Raw {
        type: "non_insurance_payer";
    }
}
