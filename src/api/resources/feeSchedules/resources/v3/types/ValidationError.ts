/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";

export type ValidationError =
    | CandidApi.feeSchedules.v3.ValidationError.OverlappingRateEntries
    | CandidApi.feeSchedules.v3.ValidationError.VersionConflict
    | CandidApi.feeSchedules.v3.ValidationError.OrganizationProviderNotFound
    | CandidApi.feeSchedules.v3.ValidationError.DuplicateRate
    | CandidApi.feeSchedules.v3.ValidationError.EmptyEntries;

export namespace ValidationError {
    export interface OverlappingRateEntries extends CandidApi.feeSchedules.v3.OverlappingRateEntriesError {
        type: "overlapping_rate_entries";
    }

    export interface VersionConflict extends CandidApi.EntityConflictErrorMessage {
        type: "version_conflict";
    }

    export interface OrganizationProviderNotFound extends CandidApi.EntityNotFoundErrorMessage {
        type: "organization_provider_not_found";
    }

    export interface DuplicateRate {
        type: "duplicate_rate";
    }

    export interface EmptyEntries {
        type: "empty_entries";
    }
}
