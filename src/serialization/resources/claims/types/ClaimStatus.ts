/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CandidApi } from "";
import * as core from "../../../../core";

export const ClaimStatus: core.serialization.Schema<serializers.ClaimStatus.Raw, CandidApi.ClaimStatus> =
    core.serialization.enum_([
        "biller_received",
        "coded",
        "submitted_to_payer",
        "missing_information",
        "not_billable",
        "waiting_for_provider",
        "era_received",
        "rejected",
        "denied",
        "paid",
        "paid_incorrectly",
        "finalized_paid",
        "finalized_denied",
        "held_by_customer",
    ]);

export declare namespace ClaimStatus {
    type Raw =
        | "biller_received"
        | "coded"
        | "submitted_to_payer"
        | "missing_information"
        | "not_billable"
        | "waiting_for_provider"
        | "era_received"
        | "rejected"
        | "denied"
        | "paid"
        | "paid_incorrectly"
        | "finalized_paid"
        | "finalized_denied"
        | "held_by_customer";
}
