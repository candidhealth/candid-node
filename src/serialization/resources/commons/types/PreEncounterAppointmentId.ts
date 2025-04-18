/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CandidApi from "../../../../api/index";
import * as core from "../../../../core";

export const PreEncounterAppointmentId: core.serialization.Schema<
    serializers.PreEncounterAppointmentId.Raw,
    CandidApi.PreEncounterAppointmentId
> = core.serialization.string().transform({
    transform: CandidApi.PreEncounterAppointmentId,
    untransform: (value) => value,
});

export declare namespace PreEncounterAppointmentId {
    export type Raw = string;
}
