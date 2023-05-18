/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as CandidApi from "../../../../api";
import * as core from "../../../../core";

export const ServiceLineCreate: core.serialization.ObjectSchema<
    serializers.ServiceLineCreate.Raw,
    CandidApi.ServiceLineCreate
> = core.serialization
    .object({
        procedureCode: core.serialization.property("procedure_code", core.serialization.string()),
        quantity: core.serialization.string(),
        units: core.serialization.lazy(async () => (await import("../../..")).ServiceLineUnits),
        chargeAmountCents: core.serialization.property("charge_amount_cents", core.serialization.number()),
        diagnosisPointers: core.serialization.property(
            "diagnosis_pointers",
            core.serialization.list(core.serialization.number())
        ),
        drugIdentification: core.serialization.property(
            "drug_identification",
            core.serialization.lazyObject(async () => (await import("../../..")).DrugIdentification).optional()
        ),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).ServiceLineBase));

export declare namespace ServiceLineCreate {
    interface Raw extends serializers.ServiceLineBase.Raw {
        procedure_code: string;
        quantity: string;
        units: serializers.ServiceLineUnits.Raw;
        charge_amount_cents: number;
        diagnosis_pointers: number[];
        drug_identification?: serializers.DrugIdentification.Raw | null;
    }
}
