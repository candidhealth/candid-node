/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CandidApi } from "";
import * as core from "../../../../core";

export const CredentialingSpanStatus: core.serialization.Schema<
    serializers.CredentialingSpanStatus.Raw,
    CandidApi.CredentialingSpanStatus
> = core.serialization.enum_(["work_in_progress", "pending", "effective", "expired"]);

export declare namespace CredentialingSpanStatus {
    type Raw = "work_in_progress" | "pending" | "effective" | "expired";
}
