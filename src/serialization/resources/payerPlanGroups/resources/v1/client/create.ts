/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { EntityNotFoundErrorMessage } from "../../../../commons/types/EntityNotFoundErrorMessage";
import { PayerPlanGroupAlreadyExistsError } from "../types/PayerPlanGroupAlreadyExistsError";

export const Error: core.serialization.Schema<
    serializers.payerPlanGroups.v1.create.Error.Raw,
    CandidApi.payerPlanGroups.v1.create.Error
> = core.serialization
    .union("errorName", {
        EntityNotFoundError: core.serialization.object({
            content: EntityNotFoundErrorMessage,
        }),
        PayerPlanGroupAlreadyExistsHttpError: core.serialization.object({
            content: PayerPlanGroupAlreadyExistsError,
        }),
    })
    .transform<CandidApi.payerPlanGroups.v1.create.Error>({
        transform: (value) => {
            switch (value.errorName) {
                case "EntityNotFoundError":
                    return CandidApi.payerPlanGroups.v1.create.Error.entityNotFoundError(value.content);
                case "PayerPlanGroupAlreadyExistsHttpError":
                    return CandidApi.payerPlanGroups.v1.create.Error.payerPlanGroupAlreadyExistsHttpError(
                        value.content,
                    );
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace Error {
    export type Raw = Error.EntityNotFoundError | Error.PayerPlanGroupAlreadyExistsHttpError;

    export interface EntityNotFoundError {
        errorName: "EntityNotFoundError";
        content: EntityNotFoundErrorMessage.Raw;
    }

    export interface PayerPlanGroupAlreadyExistsHttpError {
        errorName: "PayerPlanGroupAlreadyExistsHttpError";
        content: PayerPlanGroupAlreadyExistsError.Raw;
    }
}
