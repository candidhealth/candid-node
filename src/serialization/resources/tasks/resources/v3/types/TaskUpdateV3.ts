/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const TaskUpdateV3: core.serialization.ObjectSchema<
    serializers.tasks.v3.TaskUpdateV3.Raw,
    CandidApi.tasks.v3.TaskUpdateV3
> = core.serialization.object({
    status: core.serialization.lazy(async () => (await import("../../../../..")).tasks.TaskStatus).optional(),
    assigneeUserId: core.serialization.property(
        "assignee_user_id",
        core.serialization.lazy(async () => (await import("../../../../..")).UserId).optional()
    ),
    blocksClaimSubmission: core.serialization.property(
        "blocks_claim_submission",
        core.serialization.boolean().optional()
    ),
});

export declare namespace TaskUpdateV3 {
    interface Raw {
        status?: serializers.tasks.TaskStatus.Raw | null;
        assignee_user_id?: serializers.UserId.Raw | null;
        blocks_claim_submission?: boolean | null;
    }
}
