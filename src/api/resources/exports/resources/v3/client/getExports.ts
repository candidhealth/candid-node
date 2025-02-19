/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";
import * as core from "../../../../../../core";

export type Error =
    | CandidApi.exports.v3.getExports.Error.HttpRequestValidationsError
    | CandidApi.exports.v3.getExports.Error.ExportFilesUnavailableError
    | CandidApi.exports.v3.getExports.Error.MissingDailyIncrementalExportFileError
    | CandidApi.exports.v3.getExports.Error.ExportNotYetAvailableError
    | CandidApi.exports.v3.getExports.Error.ExportDateTooEarlyError
    | CandidApi.exports.v3.getExports.Error._Unknown;

export namespace Error {
    export interface HttpRequestValidationsError extends _Utils {
        errorName: "HttpRequestValidationsError";
        content: CandidApi.RequestValidationError[];
    }

    export interface ExportFilesUnavailableError extends _Utils {
        errorName: "ExportFilesUnavailableError";
        content: CandidApi.ErrorMessage;
    }

    export interface MissingDailyIncrementalExportFileError extends _Utils {
        errorName: "MissingDailyIncrementalExportFileError";
        content: CandidApi.ErrorMessage;
    }

    export interface ExportNotYetAvailableError extends _Utils {
        errorName: "ExportNotYetAvailableError";
        content: CandidApi.ErrorMessage;
    }

    export interface ExportDateTooEarlyError extends _Utils {
        errorName: "ExportDateTooEarlyError";
        content: CandidApi.ErrorMessage;
    }

    export interface _Unknown extends _Utils {
        errorName: void;
        content: core.Fetcher.Error;
    }

    export interface _Utils {
        _visit: <_Result>(visitor: CandidApi.exports.v3.getExports.Error._Visitor<_Result>) => _Result;
    }

    export interface _Visitor<_Result> {
        httpRequestValidationsError: (value: CandidApi.RequestValidationError[]) => _Result;
        exportFilesUnavailableError: (value: CandidApi.ErrorMessage) => _Result;
        missingDailyIncrementalExportFileError: (value: CandidApi.ErrorMessage) => _Result;
        exportNotYetAvailableError: (value: CandidApi.ErrorMessage) => _Result;
        exportDateTooEarlyError: (value: CandidApi.ErrorMessage) => _Result;
        _other: (value: core.Fetcher.Error) => _Result;
    }
}

export const Error = {
    httpRequestValidationsError: (
        value: CandidApi.RequestValidationError[],
    ): CandidApi.exports.v3.getExports.Error.HttpRequestValidationsError => {
        return {
            content: value,
            errorName: "HttpRequestValidationsError",
            _visit: function <_Result>(
                this: CandidApi.exports.v3.getExports.Error.HttpRequestValidationsError,
                visitor: CandidApi.exports.v3.getExports.Error._Visitor<_Result>,
            ) {
                return CandidApi.exports.v3.getExports.Error._visit(this, visitor);
            },
        };
    },

    exportFilesUnavailableError: (
        value: CandidApi.ErrorMessage,
    ): CandidApi.exports.v3.getExports.Error.ExportFilesUnavailableError => {
        return {
            content: value,
            errorName: "ExportFilesUnavailableError",
            _visit: function <_Result>(
                this: CandidApi.exports.v3.getExports.Error.ExportFilesUnavailableError,
                visitor: CandidApi.exports.v3.getExports.Error._Visitor<_Result>,
            ) {
                return CandidApi.exports.v3.getExports.Error._visit(this, visitor);
            },
        };
    },

    missingDailyIncrementalExportFileError: (
        value: CandidApi.ErrorMessage,
    ): CandidApi.exports.v3.getExports.Error.MissingDailyIncrementalExportFileError => {
        return {
            content: value,
            errorName: "MissingDailyIncrementalExportFileError",
            _visit: function <_Result>(
                this: CandidApi.exports.v3.getExports.Error.MissingDailyIncrementalExportFileError,
                visitor: CandidApi.exports.v3.getExports.Error._Visitor<_Result>,
            ) {
                return CandidApi.exports.v3.getExports.Error._visit(this, visitor);
            },
        };
    },

    exportNotYetAvailableError: (
        value: CandidApi.ErrorMessage,
    ): CandidApi.exports.v3.getExports.Error.ExportNotYetAvailableError => {
        return {
            content: value,
            errorName: "ExportNotYetAvailableError",
            _visit: function <_Result>(
                this: CandidApi.exports.v3.getExports.Error.ExportNotYetAvailableError,
                visitor: CandidApi.exports.v3.getExports.Error._Visitor<_Result>,
            ) {
                return CandidApi.exports.v3.getExports.Error._visit(this, visitor);
            },
        };
    },

    exportDateTooEarlyError: (
        value: CandidApi.ErrorMessage,
    ): CandidApi.exports.v3.getExports.Error.ExportDateTooEarlyError => {
        return {
            content: value,
            errorName: "ExportDateTooEarlyError",
            _visit: function <_Result>(
                this: CandidApi.exports.v3.getExports.Error.ExportDateTooEarlyError,
                visitor: CandidApi.exports.v3.getExports.Error._Visitor<_Result>,
            ) {
                return CandidApi.exports.v3.getExports.Error._visit(this, visitor);
            },
        };
    },

    _unknown: (fetcherError: core.Fetcher.Error): CandidApi.exports.v3.getExports.Error._Unknown => {
        return {
            errorName: undefined,
            content: fetcherError,
            _visit: function <_Result>(
                this: CandidApi.exports.v3.getExports.Error._Unknown,
                visitor: CandidApi.exports.v3.getExports.Error._Visitor<_Result>,
            ) {
                return CandidApi.exports.v3.getExports.Error._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: CandidApi.exports.v3.getExports.Error,
        visitor: CandidApi.exports.v3.getExports.Error._Visitor<_Result>,
    ): _Result => {
        switch (value.errorName) {
            case "HttpRequestValidationsError":
                return visitor.httpRequestValidationsError(value.content);
            case "ExportFilesUnavailableError":
                return visitor.exportFilesUnavailableError(value.content);
            case "MissingDailyIncrementalExportFileError":
                return visitor.missingDailyIncrementalExportFileError(value.content);
            case "ExportNotYetAvailableError":
                return visitor.exportNotYetAvailableError(value.content);
            case "ExportDateTooEarlyError":
                return visitor.exportDateTooEarlyError(value.content);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
