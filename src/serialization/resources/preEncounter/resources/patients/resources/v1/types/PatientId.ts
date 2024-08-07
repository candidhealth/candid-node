/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as CandidApi from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";

export const PatientId: core.serialization.Schema<
    serializers.preEncounter.patients.v1.PatientId.Raw,
    CandidApi.preEncounter.patients.v1.PatientId
> = core.serialization.string().transform({
    transform: CandidApi.preEncounter.patients.v1.PatientId,
    untransform: (value) => value,
});

export declare namespace PatientId {
    type Raw = string;
}
