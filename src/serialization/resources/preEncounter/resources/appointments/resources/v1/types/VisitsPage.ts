/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as CandidApi from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { Visit } from "./Visit";
import { ResourcePage } from "../../../../common/types/ResourcePage";

export const VisitsPage: core.serialization.ObjectSchema<
    serializers.preEncounter.appointments.v1.VisitsPage.Raw,
    CandidApi.preEncounter.appointments.v1.VisitsPage
> = core.serialization
    .object({
        items: core.serialization.list(Visit),
    })
    .extend(ResourcePage);

export declare namespace VisitsPage {
    export interface Raw extends ResourcePage.Raw {
        items: Visit.Raw[];
    }
}
