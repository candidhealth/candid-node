/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../../../core";
import * as CandidApi from "../../../../..";
import URLSearchParams from "@ungap/url-search-params";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization";

export declare namespace V3 {
    interface Options {
        environment: string;
        token: core.Supplier<core.BearerToken>;
    }
}

export class V3 {
    constructor(protected readonly options: V3.Options) {}

    public async getAll(
        request: CandidApi.encounters.v3.GetAllEncountersRequest = {}
    ): Promise<core.APIResponse<CandidApi.encounters.v3.EncounterPage, CandidApi.encounters.v3.getAll.Error>> {
        const {
            limit,
            claimStatus,
            sort,
            pageToken,
            dateOfServiceMin,
            dateOfServiceMax,
            primaryPayerNames,
            searchTerm,
            externalId,
            diagnosesUpdatedSince,
            tagIds,
            doNotBill,
        } = request;
        const _queryParams = new URLSearchParams();
        if (limit != null) {
            _queryParams.append("limit", limit.toString());
        }

        if (claimStatus != null) {
            _queryParams.append("claim_status", claimStatus);
        }

        if (sort != null) {
            _queryParams.append("sort", sort);
        }

        if (pageToken != null) {
            _queryParams.append("page_token", pageToken);
        }

        if (dateOfServiceMin != null) {
            _queryParams.append("date_of_service_min", dateOfServiceMin);
        }

        if (dateOfServiceMax != null) {
            _queryParams.append("date_of_service_max", dateOfServiceMax);
        }

        if (primaryPayerNames != null) {
            _queryParams.append("primary_payer_names", primaryPayerNames);
        }

        if (searchTerm != null) {
            _queryParams.append("search_term", searchTerm);
        }

        if (externalId != null) {
            _queryParams.append("external_id", externalId);
        }

        if (diagnosesUpdatedSince != null) {
            _queryParams.append("diagnoses_updated_since", diagnosesUpdatedSince.toISOString());
        }

        if (tagIds != null) {
            if (Array.isArray(tagIds)) {
                for (const _item of tagIds) {
                    _queryParams.append("tag_ids", _item);
                }
            } else {
                _queryParams.append("tag_ids", tagIds);
            }
        }

        if (doNotBill != null) {
            _queryParams.append("do_not_bill", doNotBill.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "/api/encounters/v3"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.0.8",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.encounters.v3.EncounterPage.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.encounters.v3.getAll.Error._unknown(_response.error),
        };
    }

    public async get(
        encounterId: CandidApi.EncounterId
    ): Promise<core.APIResponse<CandidApi.encounters.v3.Encounter, CandidApi.encounters.v3.get.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment,
                `/api/encounters/v3/${await serializers.EncounterId.jsonOrThrow(encounterId)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.0.8",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.encounters.v3.Encounter.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.encounters.v3.get.Error._unknown(_response.error),
        };
    }

    public async create(
        request: CandidApi.encounters.v3.EncounterCreate
    ): Promise<core.APIResponse<CandidApi.encounters.v3.Encounter, CandidApi.encounters.v3.create.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "/api/encounters/v3"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.0.8",
            },
            contentType: "application/json",
            body: await serializers.encounters.v3.EncounterCreate.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.encounters.v3.Encounter.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.encounters.v3.create.Error._unknown(_response.error),
        };
    }

    public async update(
        encounterId: CandidApi.EncounterId,
        request: CandidApi.encounters.v3.EncounterUpdate = {}
    ): Promise<core.APIResponse<CandidApi.encounters.v3.Encounter, CandidApi.encounters.v3.update.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment,
                `/api/encounters/v3/${await serializers.EncounterId.jsonOrThrow(encounterId)}`
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.0.8",
            },
            contentType: "application/json",
            body: await serializers.encounters.v3.EncounterUpdate.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.encounters.v3.Encounter.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.encounters.v3.update.Error._unknown(_response.error),
        };
    }

    public async getAttachments(
        encounterId: CandidApi.EncounterId
    ): Promise<
        core.APIResponse<CandidApi.encounters.v3.EncounterAttachment[], CandidApi.encounters.v3.getAttachments.Error>
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment,
                `/api/encounters/v3/${await serializers.EncounterId.jsonOrThrow(encounterId)}/attachments`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.0.8",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.encounters.v3.getAttachments.Response.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.encounters.v3.getAttachments.Error._unknown(_response.error),
        };
    }

    public async generateClinicalNotesPdf(
        encounterId: CandidApi.EncounterId
    ): Promise<
        core.APIResponse<
            CandidApi.encounters.v3.GenerateClinicalNotesPdfResponse,
            CandidApi.encounters.v3.generateClinicalNotesPdf.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment,
                `/api/encounters/v3/${await serializers.EncounterId.jsonOrThrow(
                    encounterId
                )}/clinical-notes-pdf/generate`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.0.8",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.encounters.v3.GenerateClinicalNotesPdfResponse.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.encounters.v3.generateClinicalNotesPdf.Error._unknown(_response.error),
        };
    }

    /**
     * Initiates a re-calculation of the contracting status
     */
    public async recomputeNetworkStatusResults(
        encounterId: CandidApi.EncounterId
    ): Promise<
        core.APIResponse<
            CandidApi.encounters.v3.NetworkStatusComputationResults,
            CandidApi.encounters.v3.recomputeNetworkStatusResults.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment,
                `/api/encounters/v3/${await serializers.EncounterId.jsonOrThrow(encounterId)}/network-status-results`
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.0.8",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.encounters.v3.NetworkStatusComputationResults.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.encounters.v3.recomputeNetworkStatusResults.Error._unknown(_response.error),
        };
    }

    public async markAsNotBillable(
        encounterId: CandidApi.EncounterId
    ): Promise<
        core.APIResponse<
            CandidApi.encounters.v3.MarkAsNotBillableResponse,
            CandidApi.encounters.v3.markAsNotBillable.Error
        >
    > {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment,
                `/api/encounters/v3/${await serializers.EncounterId.jsonOrThrow(encounterId)}/mark-as-not-billable`
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.0.8",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.encounters.v3.MarkAsNotBillableResponse.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.encounters.v3.markAsNotBillable.Error._unknown(_response.error),
        };
    }

    protected async _getAuthorizationHeader() {
        return `Bearer ${await core.Supplier.get(this.options.token)}`;
    }
}
