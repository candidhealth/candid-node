/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index";
import * as CandidApi from "../../../../../../../api/index";
import * as core from "../../../../../../../core";
import { WriteOffCreate } from "../../types/WriteOffCreate";

export const CreateWriteOffsRequest: core.serialization.Schema<
    serializers.writeOffs.v1.CreateWriteOffsRequest.Raw,
    CandidApi.writeOffs.v1.CreateWriteOffsRequest
> = core.serialization.object({
    writeOffs: core.serialization.property("write_offs", core.serialization.list(WriteOffCreate)),
});

export declare namespace CreateWriteOffsRequest {
    export interface Raw {
        write_offs: WriteOffCreate.Raw[];
    }
}
