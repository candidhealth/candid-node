/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const InsuranceCardCreate: core.serialization.ObjectSchema<
    serializers.insuranceCards.v2.InsuranceCardCreate.Raw,
    CandidApi.insuranceCards.v2.InsuranceCardCreate
> = core.serialization
    .object({
        memberId: core.serialization.property("member_id", core.serialization.string()),
        payerName: core.serialization.property("payer_name", core.serialization.string()),
        payerId: core.serialization.property("payer_id", core.serialization.string()),
        rxBin: core.serialization.property("rx_bin", core.serialization.string().optional()),
        rxPcn: core.serialization.property("rx_pcn", core.serialization.string().optional()),
        imageUrlFront: core.serialization.property("image_url_front", core.serialization.string().optional()),
        imageUrlBack: core.serialization.property("image_url_back", core.serialization.string().optional()),
        emrPayerCrosswalk: core.serialization.property(
            "emr_payer_crosswalk",
            core.serialization.lazy(async () => (await import("../../../../..")).EmrPayerCrosswalk).optional()
        ),
    })
    .extend(
        core.serialization.lazyObject(async () => (await import("../../../../..")).insuranceCards.v2.InsuranceCardBase)
    );

export declare namespace InsuranceCardCreate {
    interface Raw extends serializers.insuranceCards.v2.InsuranceCardBase.Raw {
        member_id: string;
        payer_name: string;
        payer_id: string;
        rx_bin?: string | null;
        rx_pcn?: string | null;
        image_url_front?: string | null;
        image_url_back?: string | null;
        emr_payer_crosswalk?: serializers.EmrPayerCrosswalk.Raw | null;
    }
}
