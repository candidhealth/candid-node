/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { ProviderType } from "../../v2/types/ProviderType";
import { LicenseType } from "../../v2/types/LicenseType";
import { OrganizationProviderAddress } from "../../v2/types/OrganizationProviderAddress";
import { OrganizationProviderId } from "../../v2/types/OrganizationProviderId";
import { Identifier } from "../../../../identifiers/types/Identifier";

export const OrganizationProviderV2: core.serialization.ObjectSchema<
    serializers.organizationProviders.v3.OrganizationProviderV2.Raw,
    CandidApi.organizationProviders.v3.OrganizationProviderV2
> = core.serialization.object({
    npi: core.serialization.string(),
    isRendering: core.serialization.property("is_rendering", core.serialization.boolean()),
    isBilling: core.serialization.property("is_billing", core.serialization.boolean()),
    firstName: core.serialization.property("first_name", core.serialization.string().optional()),
    lastName: core.serialization.property("last_name", core.serialization.string().optional()),
    organizationName: core.serialization.property("organization_name", core.serialization.string().optional()),
    providerType: core.serialization.property("provider_type", ProviderType),
    taxId: core.serialization.property("tax_id", core.serialization.string().optional()),
    taxonomyCode: core.serialization.property("taxonomy_code", core.serialization.string().optional()),
    licenseType: core.serialization.property("license_type", LicenseType),
    addresses: core.serialization.list(OrganizationProviderAddress).optional(),
    employmentStartDate: core.serialization.property("employment_start_date", core.serialization.string().optional()),
    employmentTerminationDate: core.serialization.property(
        "employment_termination_date",
        core.serialization.string().optional(),
    ),
    organizationProviderId: core.serialization.property("organization_provider_id", OrganizationProviderId),
    qualifications: core.serialization.list(Identifier),
});

export declare namespace OrganizationProviderV2 {
    export interface Raw {
        npi: string;
        is_rendering: boolean;
        is_billing: boolean;
        first_name?: string | null;
        last_name?: string | null;
        organization_name?: string | null;
        provider_type: ProviderType.Raw;
        tax_id?: string | null;
        taxonomy_code?: string | null;
        license_type: LicenseType.Raw;
        addresses?: OrganizationProviderAddress.Raw[] | null;
        employment_start_date?: string | null;
        employment_termination_date?: string | null;
        organization_provider_id: OrganizationProviderId.Raw;
        qualifications: Identifier.Raw[];
    }
}
