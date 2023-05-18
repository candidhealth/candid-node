/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CandidApi } from "";
import * as core from "../../../../core";

export const ContractBase: core.serialization.ObjectSchema<serializers.ContractBase.Raw, CandidApi.ContractBase> =
    core.serialization.object({
        effectiveDate: core.serialization.property(
            "effective_date",
            core.serialization.lazy(async () => (await import("../../..")).Date)
        ),
        expirationDate: core.serialization.property(
            "expiration_date",
            core.serialization.lazy(async () => (await import("../../..")).Date).optional()
        ),
        regions: core.serialization.lazy(async () => (await import("../../..")).Regions),
        contractStatus: core.serialization.property(
            "contract_status",
            core.serialization.lazy(async () => (await import("../../..")).ContractStatus).optional()
        ),
        authorizedSignatory: core.serialization.property(
            "authorized_signatory",
            core.serialization.lazyObject(async () => (await import("../../..")).AuthorizedSignatory).optional()
        ),
    });

export declare namespace ContractBase {
    interface Raw {
        effective_date: serializers.Date.Raw;
        expiration_date?: serializers.Date.Raw | null;
        regions: serializers.Regions.Raw;
        contract_status?: serializers.ContractStatus.Raw | null;
        authorized_signatory?: serializers.AuthorizedSignatory.Raw | null;
    }
}
