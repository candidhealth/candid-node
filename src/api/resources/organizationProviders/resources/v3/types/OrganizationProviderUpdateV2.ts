/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";

export interface OrganizationProviderUpdateV2 {
    /** The NPI of the provider. This must be all digits [0-9] and exactly 10 characters long. */
    npi?: string;
    /** Whether the provider can be used to render services. */
    isRendering?: boolean;
    /** Whether the provider can be used to bill services. */
    isBilling?: boolean;
    /** The first name of the provider, if the provider is an individual. */
    firstName?: string;
    /** The last name of the provider, if the provider is an individual. */
    lastName?: string;
    /** The name of the provider, if the provider is an organization. */
    organizationName?: string;
    /** Whether the provider is an individual (NPPES Type 1) or organization (NPPES Type 2) provider. */
    providerType?: CandidApi.organizationProviders.v2.ProviderType;
    /** If the provider has a contract with insurance, this must be the same tax ID given to the payer on an IRS W-9 form completed during contracting. */
    taxId?: string;
    /** A code designating classification and specialization. */
    taxonomyCode?: string;
    /** The type of license that the provider holds. */
    licenseType?: CandidApi.organizationProviders.v2.LicenseType;
    /** The addresses associated with this provider. */
    addresses?: CandidApi.organizationProviders.v2.OrganizationProviderAddress[];
    /** The employment start date for the provider. */
    employmentStartDate?: CandidApi.Date_;
    /** The employment termination date for the provider. */
    employmentTerminationDate?: CandidApi.Date_;
    /** Provider's qualifications (medicare provider number, medicaid provider number, etc.) */
    qualifications?: CandidApi.UpdatableIdentifier[];
}
