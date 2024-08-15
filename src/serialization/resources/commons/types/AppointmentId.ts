/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CandidApi from "../../../../api/index";
import * as core from "../../../../core";

export const AppointmentId: core.serialization.Schema<serializers.AppointmentId.Raw, CandidApi.AppointmentId> =
    core.serialization.string().transform({
        transform: CandidApi.AppointmentId,
        untransform: (value) => value,
    });

export declare namespace AppointmentId {
    type Raw = string;
}
