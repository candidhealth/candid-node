/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as CandidApi from "../../../../api";
import * as core from "../../../../core";

export const BillingNote: core.serialization.ObjectSchema<serializers.BillingNote.Raw, CandidApi.BillingNote> =
    core.serialization
        .object({
            billingNoteId: core.serialization.property(
                "billing_note_id",
                core.serialization.lazy(async () => (await import("../../..")).BillingNoteId)
            ),
            encounterId: core.serialization.property(
                "encounter_id",
                core.serialization.lazy(async () => (await import("../../..")).EncounterId)
            ),
            createdAt: core.serialization.property("created_at", core.serialization.date()),
            authorAuth0Id: core.serialization.property("author_auth0_id", core.serialization.string().optional()),
            authorName: core.serialization.property("author_name", core.serialization.string().optional()),
        })
        .extend(core.serialization.lazyObject(async () => (await import("../../..")).BillingNoteBase));

export declare namespace BillingNote {
    interface Raw extends serializers.BillingNoteBase.Raw {
        billing_note_id: serializers.BillingNoteId.Raw;
        encounter_id: serializers.EncounterId.Raw;
        created_at: string;
        author_auth0_id?: string | null;
        author_name?: string | null;
    }
}
