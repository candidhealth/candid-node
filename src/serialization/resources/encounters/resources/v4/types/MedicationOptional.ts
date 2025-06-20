/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { RxCui } from "./RxCui";

export const MedicationOptional: core.serialization.ObjectSchema<
    serializers.encounters.v4.MedicationOptional.Raw,
    CandidApi.encounters.v4.MedicationOptional
> = core.serialization.object({
    name: core.serialization.string().optional(),
    rxCui: core.serialization.property("rx_cui", RxCui.optional()),
    dosage: core.serialization.string().optional(),
    dosageForm: core.serialization.property("dosage_form", core.serialization.string().optional()),
    frequency: core.serialization.string().optional(),
    asNeeded: core.serialization.property("as_needed", core.serialization.boolean().optional()),
});

export declare namespace MedicationOptional {
    export interface Raw {
        name?: string | null;
        rx_cui?: RxCui.Raw | null;
        dosage?: string | null;
        dosage_form?: string | null;
        frequency?: string | null;
        as_needed?: boolean | null;
    }
}
