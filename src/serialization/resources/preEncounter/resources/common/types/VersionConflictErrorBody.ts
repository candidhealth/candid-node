/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { ErrorBase4Xx } from "./ErrorBase4Xx";

export const VersionConflictErrorBody: core.serialization.ObjectSchema<
    serializers.preEncounter.VersionConflictErrorBody.Raw,
    CandidApi.preEncounter.VersionConflictErrorBody
> = core.serialization
    .object({
        latestVersion: core.serialization.property("latest_version", core.serialization.number().optional()),
    })
    .extend(ErrorBase4Xx);

export declare namespace VersionConflictErrorBody {
    interface Raw extends ErrorBase4Xx.Raw {
        latest_version?: number | null;
    }
}
