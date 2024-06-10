/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { PayerUuid } from "../../../../payers/resources/v3/types/PayerUuid";
import { OrganizationProviderId } from "../../../../organizationProviders/resources/v2/types/OrganizationProviderId";
import { State } from "../../../../commons/types/State";
import { LicenseType } from "../../../../organizationProviders/resources/v2/types/LicenseType";
import { FacilityTypeCode } from "../../../../commons/types/FacilityTypeCode";
import { NetworkType } from "../../../../commons/types/NetworkType";
import { ProcedureModifier } from "../../../../commons/types/ProcedureModifier";

export const OptionalDimensions: core.serialization.ObjectSchema<
    serializers.feeSchedules.v3.OptionalDimensions.Raw,
    CandidApi.feeSchedules.v3.OptionalDimensions
> = core.serialization.object({
    payerUuid: core.serialization.property("payer_uuid", PayerUuid.optional()),
    organizationBillingProviderId: core.serialization.property(
        "organization_billing_provider_id",
        OrganizationProviderId.optional()
    ),
    states: core.serialization.set(State),
    zipCodes: core.serialization.property("zip_codes", core.serialization.set(core.serialization.string())),
    licenseTypes: core.serialization.property("license_types", core.serialization.set(LicenseType)),
    facilityTypeCodes: core.serialization.property("facility_type_codes", core.serialization.set(FacilityTypeCode)),
    networkTypes: core.serialization.property("network_types", core.serialization.set(NetworkType)),
    cptCode: core.serialization.property("cpt_code", core.serialization.string().optional()),
    modifiers: core.serialization.set(ProcedureModifier),
});

export declare namespace OptionalDimensions {
    interface Raw {
        payer_uuid?: PayerUuid.Raw | null;
        organization_billing_provider_id?: OrganizationProviderId.Raw | null;
        states: State.Raw[];
        zip_codes: string[];
        license_types: LicenseType.Raw[];
        facility_type_codes: FacilityTypeCode.Raw[];
        network_types: NetworkType.Raw[];
        cpt_code?: string | null;
        modifiers: ProcedureModifier.Raw[];
    }
}
