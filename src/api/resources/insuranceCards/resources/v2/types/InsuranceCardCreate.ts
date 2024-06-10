/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../..";

export interface InsuranceCardCreate extends CandidApi.insuranceCards.v2.InsuranceCardBase {
    memberId: string;
    payerName: string;
    payerId: string;
    rxBin?: string;
    rxPcn?: string;
    imageUrlFront?: string;
    imageUrlBack?: string;
    emrPayerCrosswalk?: CandidApi.EmrPayerCrosswalk;
}
