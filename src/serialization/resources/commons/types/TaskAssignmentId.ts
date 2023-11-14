/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as CandidApi from "../../../../api";
import * as core from "../../../../core";

export const TaskAssignmentId: core.serialization.Schema<serializers.TaskAssignmentId.Raw, CandidApi.TaskAssignmentId> =
    core.serialization.string().transform({
        transform: CandidApi.TaskAssignmentId,
        untransform: (value) => value,
    });

export declare namespace TaskAssignmentId {
    type Raw = string;
}