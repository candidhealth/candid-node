/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../..";

/**
 * @example
 *     {
 *         items: [{
 *                 npi: "1234567890",
 *                 isRendering: true,
 *                 isBilling: true,
 *                 firstName: "John",
 *                 lastName: "Doe",
 *                 organizationName: "Acme Medical",
 *                 providerType: CandidApi.organizationProviders.v2.ProviderType.Individual,
 *                 taxId: "123456789",
 *                 taxonomyCode: "1234567890",
 *                 licenseType: CandidApi.organizationProviders.v2.LicenseType.Md,
 *                 employmentStartDate: "2020-10-07",
 *                 employmentTerminationDate: "2021-10-07",
 *                 organizationProviderId: CandidApi.organizationProviders.v2.OrganizationProviderId("965A563A-0285-4910-9569-E3739C0F6EAB"),
 *                 qualifications: [{
 *                         identifierId: CandidApi.IdentifierId("123e4567-e89b-12d3-a456-426614174000"),
 *                         identifierCode: CandidApi.IdentifierCode.Mcr,
 *                         identifierValue: {
 *                             type: "medicare_provider_identifier",
 *                             state: CandidApi.State.Ca,
 *                             providerNumber: "1234567890"
 *                         }
 *                     }]
 *             }]
 *     }
 */
export interface OrganizationProviderPageV2 extends CandidApi.ResourcePage {
    items: CandidApi.organizationProviders.v3.OrganizationProviderV2[];
}