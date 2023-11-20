/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const JobGroupId: core.serialization.Schema<serializers.jobs.v1.JobGroupId.Raw, CandidApi.jobs.v1.JobGroupId> =
    core.serialization.string().transform({
        transform: CandidApi.jobs.v1.JobGroupId,
        untransform: (value) => value,
    });

export declare namespace JobGroupId {
    type Raw = string;
}
