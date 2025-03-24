/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";

export interface NonInsurancePayerWriteOffCreate {
    nonInsurancePayerId: CandidApi.nonInsurancePayers.v1.NonInsurancePayerId;
    serviceLineId: CandidApi.ServiceLineId;
    writeOffTimestamp: Date;
    writeOffNote?: string;
    writeOffReason: CandidApi.writeOffs.v1.InsuranceWriteOffReason;
    amountCents: number;
}
