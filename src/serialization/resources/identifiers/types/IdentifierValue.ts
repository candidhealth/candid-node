/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as CandidApi from "../../../../api";
import * as core from "../../../../core";

export const IdentifierValue: core.serialization.Schema<serializers.IdentifierValue.Raw, CandidApi.IdentifierValue> =
    core.serialization
        .union("type", {
            medicare_provider_identifier: core.serialization.lazyObject(
                async () => (await import("../../..")).MedicareProviderIdentifier
            ),
            medicaid_provider_identifier: core.serialization.lazyObject(
                async () => (await import("../../..")).MedicaidProviderIdentifier
            ),
        })
        .transform<CandidApi.IdentifierValue>({
            transform: (value) => value,
            untransform: (value) => value,
        });

export declare namespace IdentifierValue {
    type Raw = IdentifierValue.MedicareProviderIdentifier | IdentifierValue.MedicaidProviderIdentifier;

    interface MedicareProviderIdentifier extends serializers.MedicareProviderIdentifier.Raw {
        type: "medicare_provider_identifier";
    }

    interface MedicaidProviderIdentifier extends serializers.MedicaidProviderIdentifier.Raw {
        type: "medicaid_provider_identifier";
    }
}