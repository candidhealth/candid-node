/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";

export type RegionsUpdate = CandidApi.contracts.v2.RegionsUpdate.Set | CandidApi.contracts.v2.RegionsUpdate.Remove;

export declare namespace RegionsUpdate {
    interface Set {
        type: "set";
        value: CandidApi.Regions;
    }

    interface Remove {
        type: "remove";
    }
}
