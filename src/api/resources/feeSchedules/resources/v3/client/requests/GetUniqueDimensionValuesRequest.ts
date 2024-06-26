/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../../index";

/**
 * @example
 *     {
 *         pageToken: CandidApi.PageToken("eyJ0b2tlbiI6IjEiLCJwYWdlX3Rva2VuIjoiMiJ9"),
 *         limit: 1,
 *         pivotDimension: CandidApi.feeSchedules.v3.DimensionName.PayerUuid,
 *         payerUuid: CandidApi.payers.v3.PayerUuid("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
 *         organizationBillingProviderId: CandidApi.organizationProviders.v2.OrganizationProviderId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
 *         states: CandidApi.State.Aa,
 *         zipCodes: "string",
 *         licenseTypes: CandidApi.organizationProviders.v2.LicenseType.Md,
 *         facilityTypeCodes: CandidApi.FacilityTypeCode.Pharmacy,
 *         networkTypes: CandidApi.NetworkType.Ppo,
 *         cptCode: "string",
 *         modifiers: CandidApi.ProcedureModifier.TwentyTwo
 *     }
 */
export interface GetUniqueDimensionValuesRequest {
    pageToken?: CandidApi.PageToken;
    /**
     * Max number of values returned. Defaults to 1000. Max is 1000.
     */
    limit?: number;
    /**
     * The name of the dimension to fetch unique values for.
     */
    pivotDimension: CandidApi.feeSchedules.v3.DimensionName;
    payerUuid?: CandidApi.payers.v3.PayerUuid;
    organizationBillingProviderId?: CandidApi.organizationProviders.v2.OrganizationProviderId;
    states?: CandidApi.State | CandidApi.State[];
    zipCodes?: string | string[];
    licenseTypes?: CandidApi.organizationProviders.v2.LicenseType | CandidApi.organizationProviders.v2.LicenseType[];
    facilityTypeCodes?: CandidApi.FacilityTypeCode | CandidApi.FacilityTypeCode[];
    networkTypes?: CandidApi.NetworkType | CandidApi.NetworkType[];
    cptCode?: string;
    modifiers?: CandidApi.ProcedureModifier | CandidApi.ProcedureModifier[];
}
