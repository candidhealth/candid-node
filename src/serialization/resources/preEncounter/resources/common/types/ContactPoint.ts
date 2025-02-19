/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { ContactPointUse } from "./ContactPointUse";
import { Period } from "./Period";

export const ContactPoint: core.serialization.ObjectSchema<
    serializers.preEncounter.ContactPoint.Raw,
    CandidApi.preEncounter.ContactPoint
> = core.serialization.object({
    value: core.serialization.string(),
    use: ContactPointUse,
    period: Period.optional(),
});

export declare namespace ContactPoint {
    export interface Raw {
        value: string;
        use: ContactPointUse.Raw;
        period?: Period.Raw | null;
    }
}
