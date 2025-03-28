/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";

export interface NonInsurancePayerWriteOff {
    writeOffId: CandidApi.writeOffs.v1.WriteOffId;
    nonInsurancePayer: CandidApi.nonInsurancePayers.v1.NonInsurancePayer;
    serviceLineId: CandidApi.ServiceLineId;
    writeOffTimestamp: Date;
    writeOffNote?: string;
    writeOffReason: CandidApi.writeOffs.v1.InsuranceWriteOffReason;
    revertsWriteOffId?: CandidApi.writeOffs.v1.WriteOffId;
    revertedByWriteOffId?: CandidApi.writeOffs.v1.WriteOffId;
    amountCents: number;
}
