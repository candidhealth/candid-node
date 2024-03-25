/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const Error: core.serialization.Schema<
    serializers.patientPayments.v4.getMulti.Error.Raw,
    CandidApi.patientPayments.v4.getMulti.Error
> = core.serialization
    .union("errorName", {
        UnauthorizedError: core.serialization.object({
            content: core.serialization.lazyObject(
                async () => (await import("../../../../..")).UnauthorizedErrorMessage
            ),
        }),
        UnprocessableEntityError: core.serialization.object({
            content: core.serialization.lazyObject(
                async () => (await import("../../../../..")).UnprocessableEntityErrorMessage
            ),
        }),
    })
    .transform<CandidApi.patientPayments.v4.getMulti.Error>({
        transform: (value) => {
            switch (value.errorName) {
                case "UnauthorizedError":
                    return CandidApi.patientPayments.v4.getMulti.Error.unauthorizedError(value.content);
                case "UnprocessableEntityError":
                    return CandidApi.patientPayments.v4.getMulti.Error.unprocessableEntityError(value.content);
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace Error {
    type Raw = Error.UnauthorizedError | Error.UnprocessableEntityError;

    interface UnauthorizedError {
        errorName: "UnauthorizedError";
        content: serializers.UnauthorizedErrorMessage.Raw;
    }

    interface UnprocessableEntityError {
        errorName: "UnprocessableEntityError";
        content: serializers.UnprocessableEntityErrorMessage.Raw;
    }
}
