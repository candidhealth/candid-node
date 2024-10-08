/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";

export interface PatientWriteOff {
    writeOffId: CandidApi.writeOffs.v1.WriteOffId;
    writeOffTimestamp: Date;
    writeOffNote?: string;
    writeOffReason: CandidApi.writeOffs.v1.PatientWriteOffReason;
    patientExternalId: CandidApi.PatientExternalId;
    claimId: CandidApi.ClaimId;
    serviceLineId: CandidApi.ServiceLineId;
    revertsWriteOffId?: CandidApi.writeOffs.v1.WriteOffId;
    revertedByWriteOffId?: CandidApi.writeOffs.v1.WriteOffId;
    amountCents: number;
}
