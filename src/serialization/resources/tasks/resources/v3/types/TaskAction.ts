/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { TaskActionExecutionMethod } from "./TaskActionExecutionMethod";
import { TaskActionType } from "./TaskActionType";

export const TaskAction: core.serialization.ObjectSchema<
    serializers.tasks.v3.TaskAction.Raw,
    CandidApi.tasks.v3.TaskAction
> = core.serialization.object({
    displayName: core.serialization.property("display_name", core.serialization.string()),
    executionMethod: core.serialization.property("execution_method", TaskActionExecutionMethod),
    type: TaskActionType,
});

export declare namespace TaskAction {
    interface Raw {
        display_name: string;
        execution_method: TaskActionExecutionMethod.Raw;
        type: TaskActionType.Raw;
    }
}
