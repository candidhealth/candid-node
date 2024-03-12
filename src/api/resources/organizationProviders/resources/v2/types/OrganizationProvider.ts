/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../..";

export interface OrganizationProvider extends CandidApi.organizationProviders.v2.OrganizationProviderBase {
    /** Auto-generated ID set on creation */
    organizationProviderId: CandidApi.organizationProviders.v2.OrganizationProviderId;
    /** The employment status for the provider. */
    employmentStatus: CandidApi.organizationProviders.v2.EmploymentStatus;
    /** The employment start date for the provider. */
    employmentStartDate?: CandidApi.Date_;
    /** The employment termination date for the provider. */
    employmentTerminationDate?: CandidApi.Date_;
}