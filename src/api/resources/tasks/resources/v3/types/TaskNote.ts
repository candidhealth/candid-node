/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../..";

export interface TaskNote {
    taskNoteId: CandidApi.TaskNoteId;
    text: string;
    createdAt: Date;
    authorName: string;
    authorOrganizationName: string;
}