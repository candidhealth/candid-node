/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { PatientWriteOff } from "./PatientWriteOff";
import { InsuranceWriteOff } from "./InsuranceWriteOff";
import { NonInsurancePayerWriteOff } from "./NonInsurancePayerWriteOff";

export const WriteOff: core.serialization.Schema<
    serializers.writeOffs.v1.WriteOff.Raw,
    CandidApi.writeOffs.v1.WriteOff
> = core.serialization
    .union("type", {
        patient: PatientWriteOff,
        insurance: InsuranceWriteOff,
        non_insurance_payer: NonInsurancePayerWriteOff,
    })
    .transform<CandidApi.writeOffs.v1.WriteOff>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace WriteOff {
    export type Raw = WriteOff.Patient | WriteOff.Insurance | WriteOff.NonInsurancePayer;

    export interface Patient extends PatientWriteOff.Raw {
        type: "patient";
    }

    export interface Insurance extends InsuranceWriteOff.Raw {
        type: "insurance";
    }

    export interface NonInsurancePayer extends NonInsurancePayerWriteOff.Raw {
        type: "non_insurance_payer";
    }
}
