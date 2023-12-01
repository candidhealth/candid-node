/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../..";

export type Regions = CandidApi.Regions.States | CandidApi.Regions.National;

export declare namespace Regions {
    interface States extends CandidApi.RegionStates {
        type: "states";
    }

    interface National extends CandidApi.RegionNational {
        type: "national";
    }
}
