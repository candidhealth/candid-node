/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const AuthorizedSignatoryUpdate: core.serialization.Schema<
    serializers.contracts.v2.AuthorizedSignatoryUpdate.Raw,
    CandidApi.contracts.v2.AuthorizedSignatoryUpdate
> = core.serialization
    .union("type", {
        set: core.serialization.lazyObject(
            async () => (await import("../../../../..")).contracts.v2.AuthorizedSignatory
        ),
        remove: core.serialization.object({}),
    })
    .transform<CandidApi.contracts.v2.AuthorizedSignatoryUpdate>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace AuthorizedSignatoryUpdate {
    type Raw = AuthorizedSignatoryUpdate.Set | AuthorizedSignatoryUpdate.Remove;

    interface Set extends serializers.contracts.v2.AuthorizedSignatory.Raw {
        type: "set";
    }

    interface Remove {
        type: "remove";
    }
}
