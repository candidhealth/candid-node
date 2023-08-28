/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const ServiceLineCreate: core.serialization.ObjectSchema<
    serializers.serviceLines.v2.ServiceLineCreate.Raw,
    CandidApi.serviceLines.v2.ServiceLineCreate
> = core.serialization.object({
    modifiers: core.serialization
        .list(core.serialization.lazy(async () => (await import("../../../../..")).ProcedureModifier))
        .optional(),
    procedureCode: core.serialization.property("procedure_code", core.serialization.string()),
    quantity: core.serialization.lazy(async () => (await import("../../../../..")).Decimal),
    units: core.serialization.lazy(async () => (await import("../../../../..")).ServiceLineUnits),
    chargeAmountCents: core.serialization.property("charge_amount_cents", core.serialization.number().optional()),
    diagnosisPointers: core.serialization.property(
        "diagnosis_pointers",
        core.serialization.list(core.serialization.number())
    ),
    drugIdentification: core.serialization.property(
        "drug_identification",
        core.serialization
            .lazyObject(async () => (await import("../../../../..")).serviceLines.v2.DrugIdentification)
            .optional()
    ),
    placeOfServiceCode: core.serialization.property(
        "place_of_service_code",
        core.serialization.lazy(async () => (await import("../../../../..")).FacilityTypeCode).optional()
    ),
});

export declare namespace ServiceLineCreate {
    interface Raw {
        modifiers?: serializers.ProcedureModifier.Raw[] | null;
        procedure_code: string;
        quantity: serializers.Decimal.Raw;
        units: serializers.ServiceLineUnits.Raw;
        charge_amount_cents?: number | null;
        diagnosis_pointers: number[];
        drug_identification?: serializers.serviceLines.v2.DrugIdentification.Raw | null;
        place_of_service_code?: serializers.FacilityTypeCode.Raw | null;
    }
}
