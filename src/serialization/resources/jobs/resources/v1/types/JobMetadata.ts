/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const JobMetadata: core.serialization.Schema<
    serializers.jobs.v1.JobMetadata.Raw,
    CandidApi.jobs.v1.JobMetadata
> = core.serialization
    .union("type", {
        claim_job_metadata: core.serialization.lazyObject(
            async () => (await import("../../../../..")).jobs.v1.ClaimJobMetadata
        ),
    })
    .transform<CandidApi.jobs.v1.JobMetadata>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace JobMetadata {
    type Raw = JobMetadata.ClaimJobMetadata;

    interface ClaimJobMetadata extends serializers.jobs.v1.ClaimJobMetadata.Raw {
        type: "claim_job_metadata";
    }
}
