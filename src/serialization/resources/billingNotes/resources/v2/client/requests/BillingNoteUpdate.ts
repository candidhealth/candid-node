/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index";
import * as CandidApi from "../../../../../../../api/index";
import * as core from "../../../../../../../core";

export const BillingNoteUpdate: core.serialization.Schema<
    serializers.billingNotes.v2.BillingNoteUpdate.Raw,
    CandidApi.billingNotes.v2.BillingNoteUpdate
> = core.serialization.object({
    text: core.serialization.string(),
});

export declare namespace BillingNoteUpdate {
    interface Raw {
        text: string;
    }
}