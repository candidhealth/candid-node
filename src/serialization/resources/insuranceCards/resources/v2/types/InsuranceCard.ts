/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as CandidApi from "../../../../../../api";
import * as core from "../../../../../../core";

export const InsuranceCard: core.serialization.ObjectSchema<
    serializers.insuranceCards.v2.InsuranceCard.Raw,
    CandidApi.insuranceCards.v2.InsuranceCard
> = core.serialization
    .object({
        insuranceCardId: core.serialization.property(
            "insurance_card_id",
            core.serialization.lazy(async () => (await import("../../../../..")).insuranceCards.v2.InsuranceCardId)
        ),
        memberId: core.serialization.property("member_id", core.serialization.string()),
        payerName: core.serialization.property("payer_name", core.serialization.string()),
        payerId: core.serialization.property("payer_id", core.serialization.string()),
        rxBin: core.serialization.property("rx_bin", core.serialization.string().optional()),
        rxPcn: core.serialization.property("rx_pcn", core.serialization.string().optional()),
        imageUrlFront: core.serialization.property("image_url_front", core.serialization.string().optional()),
        imageUrlBack: core.serialization.property("image_url_back", core.serialization.string().optional()),
    })
    .extend(
        core.serialization.lazyObject(async () => (await import("../../../../..")).insuranceCards.v2.InsuranceCardBase)
    );

export declare namespace InsuranceCard {
    interface Raw extends serializers.insuranceCards.v2.InsuranceCardBase.Raw {
        insurance_card_id: serializers.insuranceCards.v2.InsuranceCardId.Raw;
        member_id: string;
        payer_name: string;
        payer_id: string;
        rx_bin?: string | null;
        rx_pcn?: string | null;
        image_url_front?: string | null;
        image_url_back?: string | null;
    }
}
