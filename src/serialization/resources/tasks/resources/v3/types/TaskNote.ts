/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { TaskNoteId } from "../../../../commons/types/TaskNoteId";

export const TaskNote: core.serialization.ObjectSchema<serializers.tasks.v3.TaskNote.Raw, CandidApi.tasks.v3.TaskNote> =
    core.serialization.object({
        taskNoteId: core.serialization.property("task_note_id", TaskNoteId),
        text: core.serialization.string(),
        createdAt: core.serialization.property("created_at", core.serialization.date()),
        authorName: core.serialization.property("author_name", core.serialization.string()),
        authorOrganizationName: core.serialization.property("author_organization_name", core.serialization.string()),
    });

export declare namespace TaskNote {
    export interface Raw {
        task_note_id: TaskNoteId.Raw;
        text: string;
        created_at: string;
        author_name: string;
        author_organization_name: string;
    }
}
