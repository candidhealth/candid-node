/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const Dimensions: core.serialization.ObjectSchema<
    serializers.feeSchedules.v3.Dimensions.Raw,
    CandidApi.feeSchedules.v3.Dimensions
> = core.serialization.object({
    payerUuid: core.serialization.property(
        "payer_uuid",
        core.serialization.lazy(async () => (await import("../../../../..")).payers.v3.PayerUuid)
    ),
    organizationBillingProviderId: core.serialization.property(
        "organization_billing_provider_id",
        core.serialization.lazy(
            async () => (await import("../../../../..")).organizationProviders.v2.OrganizationProviderId
        )
    ),
    states: core.serialization.list(core.serialization.lazy(async () => (await import("../../../../..")).State)),
    zipCodes: core.serialization.property("zip_codes", core.serialization.set(core.serialization.string())),
    licenseTypes: core.serialization.property(
        "license_types",
        core.serialization.list(
            core.serialization.lazy(async () => (await import("../../../../..")).organizationProviders.v2.LicenseType)
        )
    ),
    facilityTypeCodes: core.serialization.property(
        "facility_type_codes",
        core.serialization.list(core.serialization.lazy(async () => (await import("../../../../..")).FacilityTypeCode))
    ),
    networkTypes: core.serialization.property(
        "network_types",
        core.serialization.list(core.serialization.lazy(async () => (await import("../../../../..")).NetworkType))
    ),
    cptCode: core.serialization.property("cpt_code", core.serialization.string()),
    modifiers: core.serialization.list(
        core.serialization.lazy(async () => (await import("../../../../..")).ProcedureModifier)
    ),
});

export declare namespace Dimensions {
    interface Raw {
        payer_uuid: serializers.payers.v3.PayerUuid.Raw;
        organization_billing_provider_id: serializers.organizationProviders.v2.OrganizationProviderId.Raw;
        states: serializers.State.Raw[];
        zip_codes: string[];
        license_types: serializers.organizationProviders.v2.LicenseType.Raw[];
        facility_type_codes: serializers.FacilityTypeCode.Raw[];
        network_types: serializers.NetworkType.Raw[];
        cpt_code: string;
        modifiers: serializers.ProcedureModifier.Raw[];
    }
}