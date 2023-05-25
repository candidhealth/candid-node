/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const Medication: core.serialization.ObjectSchema<
    serializers.encounters.v4.Medication.Raw,
    CandidApi.encounters.v4.Medication
> = core.serialization.object({
    name: core.serialization.string(),
    rxCui: core.serialization.property(
        "rx_cui",
        core.serialization.lazy(async () => (await import("../../../../..")).encounters.v4.RxCui).optional()
    ),
    dosage: core.serialization.string().optional(),
    dosageForm: core.serialization.property("dosage_form", core.serialization.string().optional()),
    frequency: core.serialization.string().optional(),
    asNeeded: core.serialization.property("as_needed", core.serialization.boolean().optional()),
});

export declare namespace Medication {
    interface Raw {
        name: string;
        rx_cui?: serializers.encounters.v4.RxCui.Raw | null;
        dosage?: string | null;
        dosage_form?: string | null;
        frequency?: string | null;
        as_needed?: boolean | null;
    }
}