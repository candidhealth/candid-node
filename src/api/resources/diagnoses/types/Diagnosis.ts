/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../index";

/**
 * @example
 *     {
 *         diagnosisId: CandidApi.DiagnosisId("5C770E00-4BBF-42AF-A73F-99C5E91FC0DB"),
 *         createdAt: new Date("2023-01-01T00:00:00.000Z"),
 *         updatedAt: new Date("2023-01-01T00:00:00.000Z"),
 *         encounterId: CandidApi.EncounterId("3F63985B-51A4-4DD4-9418-7D50B2520792"),
 *         name: "John Doe",
 *         codeType: CandidApi.DiagnosisTypeCode.Abf,
 *         code: "I10"
 *     }
 */
export interface Diagnosis extends CandidApi.StandaloneDiagnosisCreate {
    diagnosisId: CandidApi.DiagnosisId;
    createdAt: Date;
    updatedAt: Date;
}
