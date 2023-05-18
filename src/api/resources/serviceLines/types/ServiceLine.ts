/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../..";

export interface ServiceLine extends CandidApi.ServiceLineBaseWithOptionals {
    serviceLineId: CandidApi.ServiceLineId;
    procedureCode: string;
    quantity: string;
    units: CandidApi.ServiceLineUnits;
    claimId: CandidApi.ClaimId;
}
