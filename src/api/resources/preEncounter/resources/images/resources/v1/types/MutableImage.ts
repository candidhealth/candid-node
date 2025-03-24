/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../../../index";

/**
 * An object representing an Image.
 */
export interface MutableImage {
    fileName: string;
    displayName: string;
    fileType: string;
    status: CandidApi.preEncounter.images.v1.ImageStatus;
    coverage?: CandidApi.preEncounter.images.v1.CoverageAssociation;
    patient?: CandidApi.preEncounter.images.v1.PatientAssociation;
}
