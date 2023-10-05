/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const BillingNoteId: core.serialization.Schema<
    serializers.billingNotes.v2.BillingNoteId.Raw,
    CandidApi.billingNotes.v2.BillingNoteId
> = core.serialization.string().transform({
    transform: CandidApi.billingNotes.v2.BillingNoteId,
    untransform: (value) => value,
});

export declare namespace BillingNoteId {
    type Raw = string;
}
