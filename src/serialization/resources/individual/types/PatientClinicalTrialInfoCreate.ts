/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CandidApi from "../../../../api/index";
import * as core from "../../../../core";
import { ClinicalTrialId } from "../../commons/types/ClinicalTrialId";

export const PatientClinicalTrialInfoCreate: core.serialization.ObjectSchema<
    serializers.PatientClinicalTrialInfoCreate.Raw,
    CandidApi.PatientClinicalTrialInfoCreate
> = core.serialization.object({
    clinicalTrialArm: core.serialization.property("clinical_trial_arm", core.serialization.string().optional()),
    clinicalTrialId: core.serialization.property("clinical_trial_id", ClinicalTrialId),
});

export declare namespace PatientClinicalTrialInfoCreate {
    export interface Raw {
        clinical_trial_arm?: string | null;
        clinical_trial_id: ClinicalTrialId.Raw;
    }
}
