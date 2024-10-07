/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { ProcedureModifier } from "../../../../commons/types/ProcedureModifier";
import { DiagnosisId } from "../../../../diagnoses/types/DiagnosisId";
import { DrugIdentification } from "./DrugIdentification";
import { ServiceLineDenialReason } from "./ServiceLineDenialReason";
import { FacilityTypeCode } from "../../../../commons/types/FacilityTypeCode";
import { ServiceLineUnits } from "../../../../commons/types/ServiceLineUnits";
import { Decimal } from "../../../../commons/types/Decimal";
import { TestResult } from "./TestResult";

export const ServiceLineUpdate: core.serialization.ObjectSchema<
    serializers.serviceLines.v2.ServiceLineUpdate.Raw,
    CandidApi.serviceLines.v2.ServiceLineUpdate
> = core.serialization.object({
    editReason: core.serialization.property("edit_reason", core.serialization.string().optional()),
    modifiers: core.serialization.list(ProcedureModifier).optional(),
    chargeAmountCents: core.serialization.property("charge_amount_cents", core.serialization.number().optional()),
    diagnosisIdZero: core.serialization.property("diagnosis_id_zero", DiagnosisId.optional()),
    diagnosisIdOne: core.serialization.property("diagnosis_id_one", DiagnosisId.optional()),
    diagnosisIdTwo: core.serialization.property("diagnosis_id_two", DiagnosisId.optional()),
    diagnosisIdThree: core.serialization.property("diagnosis_id_three", DiagnosisId.optional()),
    drugIdentification: core.serialization.property("drug_identification", DrugIdentification.optional()),
    denialReason: core.serialization.property("denial_reason", ServiceLineDenialReason.optional()),
    placeOfServiceCode: core.serialization.property("place_of_service_code", FacilityTypeCode.optional()),
    units: ServiceLineUnits.optional(),
    procedureCode: core.serialization.property("procedure_code", core.serialization.string().optional()),
    quantity: Decimal.optional(),
    description: core.serialization.string().optional(),
    dateOfService: core.serialization.property("date_of_service", core.serialization.string().optional()),
    endDateOfService: core.serialization.property("end_date_of_service", core.serialization.string().optional()),
    testResults: core.serialization.property("test_results", core.serialization.list(TestResult).optional()),
});

export declare namespace ServiceLineUpdate {
    interface Raw {
        edit_reason?: string | null;
        modifiers?: ProcedureModifier.Raw[] | null;
        charge_amount_cents?: number | null;
        diagnosis_id_zero?: DiagnosisId.Raw | null;
        diagnosis_id_one?: DiagnosisId.Raw | null;
        diagnosis_id_two?: DiagnosisId.Raw | null;
        diagnosis_id_three?: DiagnosisId.Raw | null;
        drug_identification?: DrugIdentification.Raw | null;
        denial_reason?: ServiceLineDenialReason.Raw | null;
        place_of_service_code?: FacilityTypeCode.Raw | null;
        units?: ServiceLineUnits.Raw | null;
        procedure_code?: string | null;
        quantity?: Decimal.Raw | null;
        description?: string | null;
        date_of_service?: string | null;
        end_date_of_service?: string | null;
        test_results?: TestResult.Raw[] | null;
    }
}
