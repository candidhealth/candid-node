/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { Date_ } from "../../../../commons/types/Date_";
import { Regions } from "../../../../commons/types/Regions";
import { ContractStatus } from "./ContractStatus";
import { AuthorizedSignatory } from "./AuthorizedSignatory";
import { InsuranceTypes } from "./InsuranceTypes";

export const ContractBase: core.serialization.ObjectSchema<
    serializers.contracts.v2.ContractBase.Raw,
    CandidApi.contracts.v2.ContractBase
> = core.serialization.object({
    effectiveDate: core.serialization.property("effective_date", Date_),
    expirationDate: core.serialization.property("expiration_date", Date_.optional()),
    regions: Regions,
    contractStatus: core.serialization.property("contract_status", ContractStatus.optional()),
    authorizedSignatory: core.serialization.property("authorized_signatory", AuthorizedSignatory.optional()),
    commercialInsuranceTypes: core.serialization.property("commercial_insurance_types", InsuranceTypes),
    medicareInsuranceTypes: core.serialization.property("medicare_insurance_types", InsuranceTypes),
    medicaidInsuranceTypes: core.serialization.property("medicaid_insurance_types", InsuranceTypes),
});

export declare namespace ContractBase {
    export interface Raw {
        effective_date: Date_.Raw;
        expiration_date?: Date_.Raw | null;
        regions: Regions.Raw;
        contract_status?: ContractStatus.Raw | null;
        authorized_signatory?: AuthorizedSignatory.Raw | null;
        commercial_insurance_types: InsuranceTypes.Raw;
        medicare_insurance_types: InsuranceTypes.Raw;
        medicaid_insurance_types: InsuranceTypes.Raw;
    }
}
