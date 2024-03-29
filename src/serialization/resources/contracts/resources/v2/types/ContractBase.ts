/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const ContractBase: core.serialization.ObjectSchema<
    serializers.contracts.v2.ContractBase.Raw,
    CandidApi.contracts.v2.ContractBase
> = core.serialization.object({
    effectiveDate: core.serialization.property(
        "effective_date",
        core.serialization.lazy(async () => (await import("../../../../..")).Date_)
    ),
    expirationDate: core.serialization.property(
        "expiration_date",
        core.serialization.lazy(async () => (await import("../../../../..")).Date_).optional()
    ),
    regions: core.serialization.lazy(async () => (await import("../../../../..")).Regions),
    contractStatus: core.serialization.property(
        "contract_status",
        core.serialization.lazy(async () => (await import("../../../../..")).contracts.v2.ContractStatus).optional()
    ),
    authorizedSignatory: core.serialization.property(
        "authorized_signatory",
        core.serialization
            .lazyObject(async () => (await import("../../../../..")).contracts.v2.AuthorizedSignatory)
            .optional()
    ),
    commercialInsuranceTypes: core.serialization.property(
        "commercial_insurance_types",
        core.serialization.lazy(async () => (await import("../../../../..")).contracts.v2.InsuranceTypes)
    ),
    medicareInsuranceTypes: core.serialization.property(
        "medicare_insurance_types",
        core.serialization.lazy(async () => (await import("../../../../..")).contracts.v2.InsuranceTypes)
    ),
    medicaidInsuranceTypes: core.serialization.property(
        "medicaid_insurance_types",
        core.serialization.lazy(async () => (await import("../../../../..")).contracts.v2.InsuranceTypes)
    ),
});

export declare namespace ContractBase {
    interface Raw {
        effective_date: serializers.Date_.Raw;
        expiration_date?: serializers.Date_.Raw | null;
        regions: serializers.Regions.Raw;
        contract_status?: serializers.contracts.v2.ContractStatus.Raw | null;
        authorized_signatory?: serializers.contracts.v2.AuthorizedSignatory.Raw | null;
        commercial_insurance_types: serializers.contracts.v2.InsuranceTypes.Raw;
        medicare_insurance_types: serializers.contracts.v2.InsuranceTypes.Raw;
        medicaid_insurance_types: serializers.contracts.v2.InsuranceTypes.Raw;
    }
}
