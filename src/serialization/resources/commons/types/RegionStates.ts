/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CandidApi from "../../../../api/index";
import * as core from "../../../../core";
import { State } from "./State";

export const RegionStates: core.serialization.ObjectSchema<serializers.RegionStates.Raw, CandidApi.RegionStates> =
    core.serialization.object({
        states: core.serialization.list(State),
    });

export declare namespace RegionStates {
    interface Raw {
        states: State.Raw[];
    }
}
