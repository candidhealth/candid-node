/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as CandidApi from "../../..";
import * as serializers from "../../../../serialization";
import urlJoin from "url-join";

export declare namespace BillingNotes {
    interface Options {
        environment: string;
        token: core.Supplier<core.BearerToken>;
    }
}

export class BillingNotes {
    constructor(protected readonly options: BillingNotes.Options) {}

    public async create(
        request: CandidApi.StandaloneBillingNoteCreate
    ): Promise<core.APIResponse<CandidApi.BillingNote, CandidApi.billingNotes.create.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "/api/billing_notes/v2"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.0.8",
            },
            contentType: "application/json",
            body: await serializers.StandaloneBillingNoteCreate.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.BillingNote.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.billingNotes.create.Error._unknown(_response.error),
        };
    }

    protected async _getAuthorizationHeader() {
        return `Bearer ${await core.Supplier.get(this.options.token)}`;
    }
}
