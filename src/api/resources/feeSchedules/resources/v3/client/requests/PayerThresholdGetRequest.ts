/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../../index";

/**
 * @example
 *     {
 *         payerUuids: CandidApi.payers.v3.PayerUuid("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32")
 *     }
 */
export interface PayerThresholdGetRequest {
    payerUuids: CandidApi.payers.v3.PayerUuid | CandidApi.payers.v3.PayerUuid[];
}
