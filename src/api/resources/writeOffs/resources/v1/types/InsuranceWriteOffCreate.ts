/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../..";

export interface InsuranceWriteOffCreate {
    payerIdentifier: CandidApi.payers.v3.PayerIdentifier;
    writeOffTarget: CandidApi.writeOffs.v1.InsuranceWriteOffTarget;
    writeOffTimestamp: Date;
    writeOffNote?: string;
    writeOffReason: CandidApi.writeOffs.v1.InsuranceWriteOffReason;
    amountCents: number;
}
