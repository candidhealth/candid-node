/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { WriteOff } from "./WriteOff";

export const CreateWriteOffsResponse: core.serialization.ObjectSchema<
    serializers.writeOffs.v1.CreateWriteOffsResponse.Raw,
    CandidApi.writeOffs.v1.CreateWriteOffsResponse
> = core.serialization.object({
    writeOffs: core.serialization.property("write_offs", core.serialization.list(WriteOff)),
});

export declare namespace CreateWriteOffsResponse {
    interface Raw {
        write_offs: WriteOff.Raw[];
    }
}
