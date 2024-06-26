/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../../index";

/**
 * @example
 *     {
 *         writeOffs: [{
 *                 type: "patient",
 *                 writeOffTimestamp: new Date("2024-01-15T09:30:00.000Z"),
 *                 writeOffNote: "string",
 *                 writeOffReason: CandidApi.writeOffs.v1.PatientWriteOffReason.SmallBalance,
 *                 serviceLineId: CandidApi.ServiceLineId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
 *                 amountCents: 1
 *             }]
 *     }
 */
export interface CreateWriteOffsRequest {
    writeOffs: CandidApi.writeOffs.v1.WriteOffCreate[];
}
