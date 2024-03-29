/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const Error: core.serialization.Schema<
    serializers.exports.v3.getExports.Error.Raw,
    CandidApi.exports.v3.getExports.Error
> = core.serialization
    .union("errorName", {
        HttpRequestValidationsError: core.serialization.object({
            content: core.serialization.list(
                core.serialization.lazyObject(async () => (await import("../../../../..")).RequestValidationError)
            ),
        }),
        ExportFilesUnavailableError: core.serialization.object({
            content: core.serialization.lazy(async () => (await import("../../../../..")).ErrorMessage),
        }),
        MissingDailyIncrementalExportFileError: core.serialization.object({
            content: core.serialization.lazy(async () => (await import("../../../../..")).ErrorMessage),
        }),
        ExportNotYetAvailableError: core.serialization.object({
            content: core.serialization.lazy(async () => (await import("../../../../..")).ErrorMessage),
        }),
        ExportDateTooEarlyError: core.serialization.object({
            content: core.serialization.lazy(async () => (await import("../../../../..")).ErrorMessage),
        }),
    })
    .transform<CandidApi.exports.v3.getExports.Error>({
        transform: (value) => {
            switch (value.errorName) {
                case "HttpRequestValidationsError":
                    return CandidApi.exports.v3.getExports.Error.httpRequestValidationsError(value.content);
                case "ExportFilesUnavailableError":
                    return CandidApi.exports.v3.getExports.Error.exportFilesUnavailableError(value.content);
                case "MissingDailyIncrementalExportFileError":
                    return CandidApi.exports.v3.getExports.Error.missingDailyIncrementalExportFileError(value.content);
                case "ExportNotYetAvailableError":
                    return CandidApi.exports.v3.getExports.Error.exportNotYetAvailableError(value.content);
                case "ExportDateTooEarlyError":
                    return CandidApi.exports.v3.getExports.Error.exportDateTooEarlyError(value.content);
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace Error {
    type Raw =
        | Error.HttpRequestValidationsError
        | Error.ExportFilesUnavailableError
        | Error.MissingDailyIncrementalExportFileError
        | Error.ExportNotYetAvailableError
        | Error.ExportDateTooEarlyError;

    interface HttpRequestValidationsError {
        errorName: "HttpRequestValidationsError";
        content: serializers.RequestValidationError.Raw[];
    }

    interface ExportFilesUnavailableError {
        errorName: "ExportFilesUnavailableError";
        content: serializers.ErrorMessage.Raw;
    }

    interface MissingDailyIncrementalExportFileError {
        errorName: "MissingDailyIncrementalExportFileError";
        content: serializers.ErrorMessage.Raw;
    }

    interface ExportNotYetAvailableError {
        errorName: "ExportNotYetAvailableError";
        content: serializers.ErrorMessage.Raw;
    }

    interface ExportDateTooEarlyError {
        errorName: "ExportDateTooEarlyError";
        content: serializers.ErrorMessage.Raw;
    }
}
