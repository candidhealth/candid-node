/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const CredentialingSpanStatus: core.serialization.Schema<
    serializers.credentialing.v2.CredentialingSpanStatus.Raw,
    CandidApi.credentialing.v2.CredentialingSpanStatus
> = core.serialization.enum_(["work_in_progress", "pending", "effective", "expired"]);

export declare namespace CredentialingSpanStatus {
    export type Raw = "work_in_progress" | "pending" | "effective" | "expired";
}
