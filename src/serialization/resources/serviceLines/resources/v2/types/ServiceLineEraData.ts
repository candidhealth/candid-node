/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { ServiceLineAdjustment } from "./ServiceLineAdjustment";

export const ServiceLineEraData: core.serialization.ObjectSchema<
    serializers.serviceLines.v2.ServiceLineEraData.Raw,
    CandidApi.serviceLines.v2.ServiceLineEraData
> = core.serialization.object({
    serviceLineAdjustments: core.serialization.property(
        "service_line_adjustments",
        core.serialization.list(ServiceLineAdjustment)
    ),
    remittanceAdviceRemarkCodes: core.serialization.property(
        "remittance_advice_remark_codes",
        core.serialization.list(core.serialization.string())
    ),
});

export declare namespace ServiceLineEraData {
    interface Raw {
        service_line_adjustments: ServiceLineAdjustment.Raw[];
        remittance_advice_remark_codes: string[];
    }
}