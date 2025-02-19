/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { OverlappingRateEntriesError } from "./OverlappingRateEntriesError";
import { EntityConflictErrorMessage } from "../../../../commons/types/EntityConflictErrorMessage";
import { EntityNotFoundErrorMessage } from "../../../../commons/types/EntityNotFoundErrorMessage";

export const ValidationError: core.serialization.Schema<
    serializers.feeSchedules.v3.ValidationError.Raw,
    CandidApi.feeSchedules.v3.ValidationError
> = core.serialization
    .union("type", {
        overlapping_rate_entries: OverlappingRateEntriesError,
        version_conflict: EntityConflictErrorMessage,
        organization_provider_not_found: EntityNotFoundErrorMessage,
        duplicate_rate: core.serialization.object({}),
        empty_entries: core.serialization.object({}),
    })
    .transform<CandidApi.feeSchedules.v3.ValidationError>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace ValidationError {
    export type Raw =
        | ValidationError.OverlappingRateEntries
        | ValidationError.VersionConflict
        | ValidationError.OrganizationProviderNotFound
        | ValidationError.DuplicateRate
        | ValidationError.EmptyEntries;

    export interface OverlappingRateEntries extends OverlappingRateEntriesError.Raw {
        type: "overlapping_rate_entries";
    }

    export interface VersionConflict extends EntityConflictErrorMessage.Raw {
        type: "version_conflict";
    }

    export interface OrganizationProviderNotFound extends EntityNotFoundErrorMessage.Raw {
        type: "organization_provider_not_found";
    }

    export interface DuplicateRate {
        type: "duplicate_rate";
    }

    export interface EmptyEntries {
        type: "empty_entries";
    }
}
