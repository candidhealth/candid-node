/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { HumanName } from "./HumanName";
import { ExternalProviderType } from "./ExternalProviderType";
import { ContactPoint } from "./ContactPoint";
import { Address } from "./Address";
import { Period } from "./Period";
import { CanonicalProviderId } from "./CanonicalProviderId";

export const ExternalProvider: core.serialization.ObjectSchema<
    serializers.preEncounter.ExternalProvider.Raw,
    CandidApi.preEncounter.ExternalProvider
> = core.serialization.object({
    name: HumanName,
    type: ExternalProviderType.optional(),
    npi: core.serialization.string().optional(),
    telecoms: core.serialization.list(ContactPoint),
    addresses: core.serialization.list(Address).optional(),
    period: Period.optional(),
    canonicalId: core.serialization.property("canonical_id", CanonicalProviderId.optional()),
    fax: core.serialization.string().optional(),
});

export declare namespace ExternalProvider {
    export interface Raw {
        name: HumanName.Raw;
        type?: ExternalProviderType.Raw | null;
        npi?: string | null;
        telecoms: ContactPoint.Raw[];
        addresses?: Address.Raw[] | null;
        period?: Period.Raw | null;
        canonical_id?: CanonicalProviderId.Raw | null;
        fax?: string | null;
    }
}
