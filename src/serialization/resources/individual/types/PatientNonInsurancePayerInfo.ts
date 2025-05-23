/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CandidApi from "../../../../api/index";
import * as core from "../../../../core";
import { NonInsurancePayer } from "../../nonInsurancePayers/resources/v1/types/NonInsurancePayer";
import { PatientClinicalTrialInfo } from "./PatientClinicalTrialInfo";

export const PatientNonInsurancePayerInfo: core.serialization.ObjectSchema<
    serializers.PatientNonInsurancePayerInfo.Raw,
    CandidApi.PatientNonInsurancePayerInfo
> = core.serialization.object({
    nonInsurancePayer: core.serialization.property("non_insurance_payer", NonInsurancePayer),
    memberId: core.serialization.property("member_id", core.serialization.string().optional()),
    clinicalTrialInfo: core.serialization.property(
        "clinical_trial_info",
        core.serialization.list(PatientClinicalTrialInfo),
    ),
});

export declare namespace PatientNonInsurancePayerInfo {
    export interface Raw {
        non_insurance_payer: NonInsurancePayer.Raw;
        member_id?: string | null;
        clinical_trial_info: PatientClinicalTrialInfo.Raw[];
    }
}
