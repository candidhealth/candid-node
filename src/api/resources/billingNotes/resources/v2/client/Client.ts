/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as CandidApi from "../../../../..";
import * as serializers from "../../../../../../serialization";
import urlJoin from "url-join";

export declare namespace V2 {
    interface Options {
        environment?: environments.CandidApiEnvironment | string;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class V2 {
    constructor(protected readonly options: V2.Options) {}

    public async create(
        request: CandidApi.billingNotes.v2.StandaloneBillingNoteCreate
    ): Promise<core.APIResponse<CandidApi.billingNotes.v2.BillingNote, CandidApi.billingNotes.v2.create.Error>> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CandidApiEnvironment.Production,
                "/api/billing_notes/v2"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "candidhealth",
                "X-Fern-SDK-Version": "0.18.0",
            },
            contentType: "application/json",
            body: await serializers.billingNotes.v2.StandaloneBillingNoteCreate.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return {
                ok: true,
                body: await serializers.billingNotes.v2.BillingNote.parseOrThrow(_response.body, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }),
            };
        }

        return {
            ok: false,
            error: CandidApi.billingNotes.v2.create.Error._unknown(_response.error),
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
