/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { Decimal } from "../../../../commons/types/Decimal";
import { ServiceLineUnits } from "../../../../commons/types/ServiceLineUnits";
import { DrugIdentification } from "../../../../serviceLines/resources/v2/types/DrugIdentification";
import { ProcedureModifier } from "../../../../commons/types/ProcedureModifier";

export const MedicationDispenseCreate: core.serialization.ObjectSchema<
    serializers.medicationDispense.v1.MedicationDispenseCreate.Raw,
    CandidApi.medicationDispense.v1.MedicationDispenseCreate
> = core.serialization.object({
    medicationDispenseExternalId: core.serialization.property(
        "medication_dispense_external_id",
        core.serialization.string(),
    ),
    patientExternalId: core.serialization.property("patient_external_id", core.serialization.string()),
    procedureCode: core.serialization.property("procedure_code", core.serialization.string()),
    quantity: Decimal,
    units: ServiceLineUnits,
    dateOfService: core.serialization.property("date_of_service", core.serialization.string()),
    drugIdentification: core.serialization.property("drug_identification", DrugIdentification.optional()),
    description: core.serialization.string().optional(),
    modifiers: core.serialization.list(ProcedureModifier).optional(),
});

export declare namespace MedicationDispenseCreate {
    export interface Raw {
        medication_dispense_external_id: string;
        patient_external_id: string;
        procedure_code: string;
        quantity: Decimal.Raw;
        units: ServiceLineUnits.Raw;
        date_of_service: string;
        drug_identification?: DrugIdentification.Raw | null;
        description?: string | null;
        modifiers?: ProcedureModifier.Raw[] | null;
    }
}
