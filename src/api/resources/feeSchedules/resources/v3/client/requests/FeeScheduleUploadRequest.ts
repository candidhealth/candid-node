/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../../index";

/**
 * @example
 *     {
 *         dryRun: true,
 *         rates: [{
 *                 type: "new_rate",
 *                 dimensions: {
 *                     payerUuid: CandidApi.payers.v3.PayerUuid("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
 *                     organizationBillingProviderId: CandidApi.organizationProviders.v2.OrganizationProviderId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
 *                     states: new Set(["AA"]),
 *                     zipCodes: new Set(["string"]),
 *                     licenseTypes: new Set(["MD"]),
 *                     facilityTypeCodes: new Set(["01"]),
 *                     networkTypes: new Set(["12"]),
 *                     cptCode: "string",
 *                     modifiers: new Set(["22"])
 *                 },
 *                 entries: [{
 *                         startDate: "2024-04-11",
 *                         rateCents: 33000,
 *                         isDeactivated: false
 *                     }]
 *             }]
 *     }
 */
export interface FeeScheduleUploadRequest {
    dryRun: boolean;
    rates: CandidApi.feeSchedules.v3.RateUpload[];
}
