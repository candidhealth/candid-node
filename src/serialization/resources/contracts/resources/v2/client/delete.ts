/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { ContractIsLinkedToFeeScheduleError } from "../types/ContractIsLinkedToFeeScheduleError";

export const Error: core.serialization.Schema<
    serializers.contracts.v2.delete.Error.Raw,
    CandidApi.contracts.v2.delete.Error
> = core.serialization
    .union("errorName", {
        ContractIsLinkedToFeeScheduleHttpError: core.serialization.object({
            content: ContractIsLinkedToFeeScheduleError,
        }),
    })
    .transform<CandidApi.contracts.v2.delete.Error>({
        transform: (value) => {
            switch (value.errorName) {
                case "ContractIsLinkedToFeeScheduleHttpError":
                    return CandidApi.contracts.v2.delete.Error.contractIsLinkedToFeeScheduleHttpError(value.content);
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace Error {
    export type Raw = Error.ContractIsLinkedToFeeScheduleHttpError;

    export interface ContractIsLinkedToFeeScheduleHttpError {
        errorName: "ContractIsLinkedToFeeScheduleHttpError";
        content: ContractIsLinkedToFeeScheduleError.Raw;
    }
}
