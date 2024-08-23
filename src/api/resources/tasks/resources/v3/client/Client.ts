/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as CandidApi from "../../../../../index";
import * as serializers from "../../../../../../serialization/index";
import urlJoin from "url-join";

export declare namespace V3 {
    interface Options {
        environment?: core.Supplier<environments.CandidApiEnvironment | environments.CandidApiEnvironmentUrls>;
        token?: core.Supplier<core.BearerToken | undefined>;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
    }
}

export class V3 {
    constructor(protected readonly _options: V3.Options = {}) {}

    /**
     * @param {CandidApi.TaskId} taskId
     * @param {V3.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.tasks.v3.getActions(CandidApi.TaskId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"))
     */
    public async getActions(
        taskId: CandidApi.TaskId,
        requestOptions?: V3.RequestOptions
    ): Promise<core.APIResponse<CandidApi.tasks.v3.TaskActions, CandidApi.tasks.v3.getActions.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                `/api/tasks/v3/${encodeURIComponent(serializers.TaskId.jsonOrThrow(taskId))}/actions`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.28.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.tasks.v3.TaskActions.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.tasks.v3.getActions.Error._unknown(_response.error),
        };
    }

    /**
     * @param {CandidApi.tasks.v3.GetAllTasksRequest} request
     * @param {V3.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.tasks.v3.getMulti({
     *         limit: 1,
     *         pageToken: CandidApi.PageToken("eyJ0b2tlbiI6IjEiLCJwYWdlX3Rva2VuIjoiMiJ9"),
     *         status: CandidApi.tasks.TaskStatus.Finished,
     *         taskType: CandidApi.tasks.TaskType.CustomerDataRequest,
     *         categories: "string",
     *         updatedSince: new Date("2024-01-15T09:30:00.000Z"),
     *         encounterId: CandidApi.EncounterId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         searchTerm: "string",
     *         assignedToId: CandidApi.UserId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         dateOfServiceMin: "2023-01-15",
     *         dateOfServiceMax: "2023-01-15",
     *         billingProviderNpi: "string",
     *         sort: CandidApi.tasks.v3.TaskSortOptions.UpdatedAtAsc
     *     })
     */
    public async getMulti(
        request: CandidApi.tasks.v3.GetAllTasksRequest = {},
        requestOptions?: V3.RequestOptions
    ): Promise<core.APIResponse<CandidApi.tasks.v3.TaskPage, CandidApi.tasks.v3.getMulti.Error>> {
        const {
            limit,
            pageToken,
            status,
            taskType,
            categories,
            updatedSince,
            encounterId,
            searchTerm,
            assignedToId,
            dateOfServiceMin,
            dateOfServiceMax,
            billingProviderNpi,
            sort,
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (pageToken != null) {
            _queryParams["page_token"] = pageToken;
        }

        if (status != null) {
            _queryParams["status"] = status;
        }

        if (taskType != null) {
            _queryParams["task_type"] = taskType;
        }

        if (categories != null) {
            _queryParams["categories"] = categories;
        }

        if (updatedSince != null) {
            _queryParams["updated_since"] = updatedSince.toISOString();
        }

        if (encounterId != null) {
            _queryParams["encounter_id"] = encounterId;
        }

        if (searchTerm != null) {
            _queryParams["search_term"] = searchTerm;
        }

        if (assignedToId != null) {
            _queryParams["assigned_to_id"] = assignedToId;
        }

        if (dateOfServiceMin != null) {
            _queryParams["date_of_service_min"] = dateOfServiceMin;
        }

        if (dateOfServiceMax != null) {
            _queryParams["date_of_service_max"] = dateOfServiceMax;
        }

        if (billingProviderNpi != null) {
            _queryParams["billing_provider_npi"] = billingProviderNpi;
        }

        if (sort != null) {
            _queryParams["sort"] = sort;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                "/api/tasks/v3"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.28.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.tasks.v3.TaskPage.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.tasks.v3.getMulti.Error.Raw)?.errorName) {
                case "UnprocessableEntityError":
                    return {
                        ok: false,
                        error: serializers.tasks.v3.getMulti.Error.parseOrThrow(
                            _response.error.body as serializers.tasks.v3.getMulti.Error.Raw,
                            {
                                unrecognizedObjectKeys: "passthrough",
                                allowUnrecognizedUnionMembers: true,
                                allowUnrecognizedEnumValues: true,
                                breadcrumbsPrefix: ["response"],
                            }
                        ),
                    };
            }
        }

        return {
            ok: false,
            error: CandidApi.tasks.v3.getMulti.Error._unknown(_response.error),
        };
    }

    /**
     * @param {CandidApi.TaskId} taskId
     * @param {V3.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.tasks.v3.get(CandidApi.TaskId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"))
     */
    public async get(
        taskId: CandidApi.TaskId,
        requestOptions?: V3.RequestOptions
    ): Promise<core.APIResponse<CandidApi.tasks.v3.Task, CandidApi.tasks.v3.get.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                `/api/tasks/v3/${encodeURIComponent(serializers.TaskId.jsonOrThrow(taskId))}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.28.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.tasks.v3.Task.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.tasks.v3.get.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                case "UnauthorizedError":
                    return {
                        ok: false,
                        error: serializers.tasks.v3.get.Error.parseOrThrow(
                            _response.error.body as serializers.tasks.v3.get.Error.Raw,
                            {
                                unrecognizedObjectKeys: "passthrough",
                                allowUnrecognizedUnionMembers: true,
                                allowUnrecognizedEnumValues: true,
                                breadcrumbsPrefix: ["response"],
                            }
                        ),
                    };
            }
        }

        return {
            ok: false,
            error: CandidApi.tasks.v3.get.Error._unknown(_response.error),
        };
    }

    /**
     * @param {CandidApi.tasks.v3.TaskCreateV3} request
     * @param {V3.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.tasks.v3.create({
     *         encounterId: CandidApi.EncounterId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         taskType: CandidApi.tasks.TaskType.CustomerDataRequest,
     *         description: "string",
     *         blocksClaimSubmission: true,
     *         assigneeUserId: CandidApi.UserId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         category: CandidApi.tasks.TaskCategory.Other,
     *         workQueueId: CandidApi.WorkQueueId("string")
     *     })
     */
    public async create(
        request: CandidApi.tasks.v3.TaskCreateV3,
        requestOptions?: V3.RequestOptions
    ): Promise<core.APIResponse<CandidApi.tasks.v3.Task, CandidApi.tasks.v3.create.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                "/api/tasks/v3"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.28.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.tasks.v3.TaskCreateV3.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.tasks.v3.Task.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.tasks.v3.create.Error._unknown(_response.error),
        };
    }

    /**
     * @param {CandidApi.TaskId} taskId
     * @param {CandidApi.tasks.v3.TaskUpdateV3} request
     * @param {V3.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.tasks.v3.update(CandidApi.TaskId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"), {
     *         status: CandidApi.tasks.TaskStatus.Finished,
     *         assigneeUserId: CandidApi.UserId("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32"),
     *         blocksClaimSubmission: true
     *     })
     */
    public async update(
        taskId: CandidApi.TaskId,
        request: CandidApi.tasks.v3.TaskUpdateV3,
        requestOptions?: V3.RequestOptions
    ): Promise<core.APIResponse<CandidApi.tasks.v3.Task, CandidApi.tasks.v3.update.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                ((await core.Supplier.get(this._options.environment)) ?? environments.CandidApiEnvironment.Production)
                    .candidApi,
                `/api/tasks/v3/${encodeURIComponent(serializers.TaskId.jsonOrThrow(taskId))}`
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.28.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.tasks.v3.TaskUpdateV3.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: serializers.tasks.v3.Task.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as serializers.tasks.v3.update.Error.Raw)?.errorName) {
                case "EntityNotFoundError":
                case "UnauthorizedError":
                case "TaskUpdatedToDeprecatedStatusError":
                    return {
                        ok: false,
                        error: serializers.tasks.v3.update.Error.parseOrThrow(
                            _response.error.body as serializers.tasks.v3.update.Error.Raw,
                            {
                                unrecognizedObjectKeys: "passthrough",
                                allowUnrecognizedUnionMembers: true,
                                allowUnrecognizedEnumValues: true,
                                breadcrumbsPrefix: ["response"],
                            }
                        ),
                    };
            }
        }

        return {
            ok: false,
            error: CandidApi.tasks.v3.update.Error._unknown(_response.error),
        };
    }

    protected async _getAuthorizationHeader(): Promise<string | undefined> {
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
