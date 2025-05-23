/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";

/**
 * A dimensions object where all properties are optional.
 */
export interface OptionalDimensions {
    payerUuid?: CandidApi.payers.v3.PayerUuid;
    organizationBillingProviderId?: CandidApi.organizationProviders.v2.OrganizationProviderId;
    states: Set<CandidApi.State>;
    zipCodes: Set<string>;
    licenseTypes: Set<CandidApi.organizationProviders.v2.LicenseType>;
    facilityTypeCodes: Set<CandidApi.FacilityTypeCode>;
    networkTypes: Set<CandidApi.NetworkType>;
    payerPlanGroupIds: Set<CandidApi.PayerPlanGroupId>;
    cptCode?: string;
    modifiers: Set<CandidApi.ProcedureModifier>;
}
