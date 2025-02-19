/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { EntityNotFoundErrorMessage } from "../../../../commons/types/EntityNotFoundErrorMessage";

export const Error: core.serialization.Schema<
    serializers.encounterProviders.v2.deleteInitialReferringProvider.Error.Raw,
    CandidApi.encounterProviders.v2.deleteInitialReferringProvider.Error
> = core.serialization
    .union("errorName", {
        EntityNotFoundError: core.serialization.object({
            content: EntityNotFoundErrorMessage,
        }),
    })
    .transform<CandidApi.encounterProviders.v2.deleteInitialReferringProvider.Error>({
        transform: (value) => {
            switch (value.errorName) {
                case "EntityNotFoundError":
                    return CandidApi.encounterProviders.v2.deleteInitialReferringProvider.Error.entityNotFoundError(
                        value.content,
                    );
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace Error {
    export type Raw = Error.EntityNotFoundError;

    export interface EntityNotFoundError {
        errorName: "EntityNotFoundError";
        content: EntityNotFoundErrorMessage.Raw;
    }
}
