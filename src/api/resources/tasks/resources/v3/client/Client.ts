/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as CandidApi from "../../../../..";
import * as serializers from "../../../../../../serialization";
import urlJoin from "url-join";
import URLSearchParams from "@ungap/url-search-params";

export declare namespace V3 {
    interface Options {
        environment?: environments.CandidApiEnvironment | string;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class V3 {
    constructor(protected readonly options: V3.Options) {}

    public async getActions(
        taskId: CandidApi.TaskId
    ): Promise<core.APIResponse<CandidApi.tasks.v3.TaskActions, CandidApi.tasks.v3.getActions.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CandidApiEnvironment.Production,
                `/api/tasks/v3/${await serializers.TaskId.jsonOrThrow(taskId)}/actions`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.17.3",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.tasks.v3.TaskActions.parseOrThrow(_response.body, {
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

    public async getMulti(
        request: CandidApi.tasks.v3.GetAllTasksRequest = {}
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
        const _queryParams = new URLSearchParams();
        if (limit != null) {
            _queryParams.append("limit", limit.toString());
        }

        if (pageToken != null) {
            _queryParams.append("page_token", pageToken);
        }

        if (status != null) {
            _queryParams.append("status", status);
        }

        if (taskType != null) {
            _queryParams.append("task_type", taskType);
        }

        if (categories != null) {
            _queryParams.append("categories", categories);
        }

        if (updatedSince != null) {
            _queryParams.append("updated_since", updatedSince.toISOString());
        }

        if (encounterId != null) {
            _queryParams.append("encounter_id", encounterId);
        }

        if (searchTerm != null) {
            _queryParams.append("search_term", searchTerm);
        }

        if (assignedToId != null) {
            _queryParams.append("assigned_to_id", assignedToId);
        }

        if (dateOfServiceMin != null) {
            _queryParams.append("date_of_service_min", dateOfServiceMin);
        }

        if (dateOfServiceMax != null) {
            _queryParams.append("date_of_service_max", dateOfServiceMax);
        }

        if (billingProviderNpi != null) {
            _queryParams.append("billing_provider_npi", billingProviderNpi);
        }

        if (sort != null) {
            _queryParams.append("sort", sort);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.CandidApiEnvironment.Production, "/api/tasks/v3"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.17.3",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.tasks.v3.TaskPage.parseOrThrow(_response.body, {
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
                        error: await serializers.tasks.v3.getMulti.Error.parseOrThrow(
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

    public async get(
        taskId: CandidApi.TaskId
    ): Promise<core.APIResponse<CandidApi.tasks.v3.Task, CandidApi.tasks.v3.get.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CandidApiEnvironment.Production,
                `/api/tasks/v3/${await serializers.TaskId.jsonOrThrow(taskId)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.17.3",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.tasks.v3.Task.parseOrThrow(_response.body, {
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
                        error: await serializers.tasks.v3.get.Error.parseOrThrow(
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

    public async create(
        request: CandidApi.tasks.v3.TaskCreateV3
    ): Promise<core.APIResponse<CandidApi.tasks.v3.Task, CandidApi.tasks.v3.create.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.CandidApiEnvironment.Production, "/api/tasks/v3"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.17.3",
            },
            contentType: "application/json",
            body: await serializers.tasks.v3.TaskCreateV3.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.tasks.v3.Task.parseOrThrow(_response.body, {
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

    public async update(
        taskId: CandidApi.TaskId,
        request: CandidApi.tasks.v3.TaskUpdateV3
    ): Promise<core.APIResponse<CandidApi.tasks.v3.Task, CandidApi.tasks.v3.update.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CandidApiEnvironment.Production,
                `/api/tasks/v3/${await serializers.TaskId.jsonOrThrow(taskId)}`
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.17.3",
            },
            contentType: "application/json",
            body: await serializers.tasks.v3.TaskUpdateV3.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.tasks.v3.Task.parseOrThrow(_response.body, {
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
                        error: await serializers.tasks.v3.update.Error.parseOrThrow(
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

    protected async _getAuthorizationHeader() {
        const bearer = await core.Supplier.get(this.options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
