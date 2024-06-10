/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const BillingNoteBase: core.serialization.ObjectSchema<
    serializers.billingNotes.v2.BillingNoteBase.Raw,
    CandidApi.billingNotes.v2.BillingNoteBase
> = core.serialization.object({
    text: core.serialization.string(),
});

export declare namespace BillingNoteBase {
    interface Raw {
        text: string;
    }
}
