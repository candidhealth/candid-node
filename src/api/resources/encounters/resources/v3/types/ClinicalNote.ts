/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { CandidApi } from "";

export interface ClinicalNote {
    text: string;
    authorName: string;
    authorNpi?: CandidApi.Npi;
    timestamp: Date;
}
