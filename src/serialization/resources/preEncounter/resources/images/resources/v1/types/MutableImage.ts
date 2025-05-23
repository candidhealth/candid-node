/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as CandidApi from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { ImageStatus } from "./ImageStatus";
import { CoverageAssociation } from "./CoverageAssociation";
import { PatientAssociation } from "./PatientAssociation";

export const MutableImage: core.serialization.ObjectSchema<
    serializers.preEncounter.images.v1.MutableImage.Raw,
    CandidApi.preEncounter.images.v1.MutableImage
> = core.serialization.object({
    fileName: core.serialization.property("file_name", core.serialization.string()),
    displayName: core.serialization.property("display_name", core.serialization.string()),
    fileType: core.serialization.property("file_type", core.serialization.string()),
    status: ImageStatus,
    coverage: CoverageAssociation.optional(),
    patient: PatientAssociation.optional(),
});

export declare namespace MutableImage {
    export interface Raw {
        file_name: string;
        display_name: string;
        file_type: string;
        status: ImageStatus.Raw;
        coverage?: CoverageAssociation.Raw | null;
        patient?: PatientAssociation.Raw | null;
    }
}
