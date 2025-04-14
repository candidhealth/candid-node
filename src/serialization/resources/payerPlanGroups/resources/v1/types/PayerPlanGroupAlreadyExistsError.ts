/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { PayerPlanGroupId } from "../../../../commons/types/PayerPlanGroupId";

export const PayerPlanGroupAlreadyExistsError: core.serialization.ObjectSchema<
    serializers.payerPlanGroups.v1.PayerPlanGroupAlreadyExistsError.Raw,
    CandidApi.payerPlanGroups.v1.PayerPlanGroupAlreadyExistsError
> = core.serialization.object({
    message: core.serialization.string(),
    id: PayerPlanGroupId,
});

export declare namespace PayerPlanGroupAlreadyExistsError {
    export interface Raw {
        message: string;
        id: PayerPlanGroupId.Raw;
    }
}
