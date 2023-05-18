/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CandidApi } from "";
import * as core from "../../../../core";

export const ServiceLineAdjustment: core.serialization.ObjectSchema<
    serializers.ServiceLineAdjustment.Raw,
    CandidApi.ServiceLineAdjustment
> = core.serialization.object({
    createdAt: core.serialization.property("created_at", core.serialization.date()),
    adjustmentGroupCode: core.serialization.property("adjustment_group_code", core.serialization.string().optional()),
    adjustmentReasonCode: core.serialization.property("adjustment_reason_code", core.serialization.string().optional()),
    adjustmentAmountCents: core.serialization.property(
        "adjustment_amount_cents",
        core.serialization.number().optional()
    ),
    adjustmentNote: core.serialization.property("adjustment_note", core.serialization.string().optional()),
});

export declare namespace ServiceLineAdjustment {
    interface Raw {
        created_at: string;
        adjustment_group_code?: string | null;
        adjustment_reason_code?: string | null;
        adjustment_amount_cents?: number | null;
        adjustment_note?: string | null;
    }
}
