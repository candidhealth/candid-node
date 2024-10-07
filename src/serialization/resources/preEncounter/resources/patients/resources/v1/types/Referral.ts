/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as CandidApi from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { ExternalProvider } from "../../../../common/types/ExternalProvider";
import { Period } from "../../../../common/types/Period";

export const Referral: core.serialization.ObjectSchema<
    serializers.preEncounter.patients.v1.Referral.Raw,
    CandidApi.preEncounter.patients.v1.Referral
> = core.serialization.object({
    provider: ExternalProvider,
    referralNumber: core.serialization.property("referral_number", core.serialization.string()),
    period: Period.optional(),
    notes: core.serialization.string().optional(),
});

export declare namespace Referral {
    interface Raw {
        provider: ExternalProvider.Raw;
        referral_number: string;
        period?: Period.Raw | null;
        notes?: string | null;
    }
}