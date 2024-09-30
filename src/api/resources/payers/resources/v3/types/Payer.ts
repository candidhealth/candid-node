/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";

/**
 * @example
 *     {
 *         payerUuid: CandidApi.payers.v3.PayerUuid("A6431FD2-0712-4714-B1B1-DD094DAF9F42"),
 *         payerId: "12345",
 *         payerName: "Payer Name",
 *         availityPayerName: "Availity Payer Name",
 *         availityClaimsPayerId: "54321",
 *         availityEligibilityId: "54321",
 *         availityRemittancePayerId: "54321"
 *     }
 */
export interface Payer {
    /** Auto-generated ID set on creation. */
    payerUuid: CandidApi.payers.v3.PayerUuid;
    /** The primary national payer ID of the payer. */
    payerId: string;
    /** The primary display name of the payer. */
    payerName: string;
    /** The name of the payer as it appears in Availity. */
    availityPayerName?: string;
    /** The ID of the payer as it appears in Availity. */
    availityClaimsPayerId?: string;
    /** The eligibility ID of the payer as it appears in Availity. */
    availityEligibilityId?: string;
    /** The remittance ID of the payer as it appears in Availity. */
    availityRemittancePayerId?: string;
}
