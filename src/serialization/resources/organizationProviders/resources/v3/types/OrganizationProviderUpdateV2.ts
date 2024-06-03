/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { ProviderType } from "../../v2/types/ProviderType";
import { LicenseType } from "../../v2/types/LicenseType";
import { OrganizationProviderAddress } from "../../v2/types/OrganizationProviderAddress";
import { Date_ } from "../../../../commons/types/Date_";
import { UpdatableIdentifier } from "../../../../identifiers/types/UpdatableIdentifier";

export const OrganizationProviderUpdateV2: core.serialization.ObjectSchema<
    serializers.organizationProviders.v3.OrganizationProviderUpdateV2.Raw,
    CandidApi.organizationProviders.v3.OrganizationProviderUpdateV2
> = core.serialization.object({
    npi: core.serialization.string().optional(),
    isRendering: core.serialization.property("is_rendering", core.serialization.boolean().optional()),
    isBilling: core.serialization.property("is_billing", core.serialization.boolean().optional()),
    firstName: core.serialization.property("first_name", core.serialization.string().optional()),
    lastName: core.serialization.property("last_name", core.serialization.string().optional()),
    organizationName: core.serialization.property("organization_name", core.serialization.string().optional()),
    providerType: core.serialization.property("provider_type", ProviderType.optional()),
    taxId: core.serialization.property("tax_id", core.serialization.string().optional()),
    taxonomyCode: core.serialization.property("taxonomy_code", core.serialization.string().optional()),
    licenseType: core.serialization.property("license_type", LicenseType.optional()),
    addresses: core.serialization.list(OrganizationProviderAddress).optional(),
    employmentStartDate: core.serialization.property("employment_start_date", Date_.optional()),
    employmentTerminationDate: core.serialization.property("employment_termination_date", Date_.optional()),
    qualifications: core.serialization.list(UpdatableIdentifier).optional(),
});

export declare namespace OrganizationProviderUpdateV2 {
    interface Raw {
        npi?: string | null;
        is_rendering?: boolean | null;
        is_billing?: boolean | null;
        first_name?: string | null;
        last_name?: string | null;
        organization_name?: string | null;
        provider_type?: ProviderType.Raw | null;
        tax_id?: string | null;
        taxonomy_code?: string | null;
        license_type?: LicenseType.Raw | null;
        addresses?: OrganizationProviderAddress.Raw[] | null;
        employment_start_date?: Date_.Raw | null;
        employment_termination_date?: Date_.Raw | null;
        qualifications?: UpdatableIdentifier.Raw[] | null;
    }
}
