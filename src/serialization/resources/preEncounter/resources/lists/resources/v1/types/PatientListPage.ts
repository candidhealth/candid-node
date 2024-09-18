/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as CandidApi from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { PatientListItem } from "./PatientListItem";
import { ResourcePage } from "../../../../common/types/ResourcePage";

export const PatientListPage: core.serialization.ObjectSchema<
    serializers.preEncounter.lists.v1.PatientListPage.Raw,
    CandidApi.preEncounter.lists.v1.PatientListPage
> = core.serialization
    .object({
        items: core.serialization.list(PatientListItem),
    })
    .extend(ResourcePage);

export declare namespace PatientListPage {
    interface Raw extends ResourcePage.Raw {
        items: PatientListItem.Raw[];
    }
}
