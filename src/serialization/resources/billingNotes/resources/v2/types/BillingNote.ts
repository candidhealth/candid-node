/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { BillingNoteId } from "./BillingNoteId";
import { EncounterId } from "../../../../commons/types/EncounterId";
import { BillingNoteBase } from "./BillingNoteBase";

export const BillingNote: core.serialization.ObjectSchema<
    serializers.billingNotes.v2.BillingNote.Raw,
    CandidApi.billingNotes.v2.BillingNote
> = core.serialization
    .object({
        billingNoteId: core.serialization.property("billing_note_id", BillingNoteId),
        encounterId: core.serialization.property("encounter_id", EncounterId),
        createdAt: core.serialization.property("created_at", core.serialization.date()),
        authorAuth0Id: core.serialization.property("author_auth0_id", core.serialization.string().optional()),
        authorName: core.serialization.property("author_name", core.serialization.string().optional()),
    })
    .extend(BillingNoteBase);

export declare namespace BillingNote {
    interface Raw extends BillingNoteBase.Raw {
        billing_note_id: BillingNoteId.Raw;
        encounter_id: EncounterId.Raw;
        created_at: string;
        author_auth0_id?: string | null;
        author_name?: string | null;
    }
}
