/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../index";

export type Regions = CandidApi.Regions.States | CandidApi.Regions.National;

export namespace Regions {
    export interface States extends CandidApi.RegionStates {
        type: "states";
    }

    export interface National extends CandidApi.RegionNational {
        type: "national";
    }
}
