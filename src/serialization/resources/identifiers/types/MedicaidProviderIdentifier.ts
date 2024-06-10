/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as CandidApi from "../../../../api/index";
import * as core from "../../../../core";
import { State } from "../../commons/types/State";

export const MedicaidProviderIdentifier: core.serialization.ObjectSchema<
    serializers.MedicaidProviderIdentifier.Raw,
    CandidApi.MedicaidProviderIdentifier
> = core.serialization.object({
    state: State,
    providerNumber: core.serialization.property("provider_number", core.serialization.string()),
});

export declare namespace MedicaidProviderIdentifier {
    interface Raw {
        state: State.Raw;
        provider_number: string;
    }
}
