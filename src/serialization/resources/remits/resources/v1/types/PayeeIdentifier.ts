/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as CandidApi from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { Npi } from "../../../../commons/types/Npi";
import { TaxId } from "../../../../commons/types/TaxId";

export const PayeeIdentifier: core.serialization.Schema<
    serializers.remits.v1.PayeeIdentifier.Raw,
    CandidApi.remits.v1.PayeeIdentifier
> = core.serialization
    .union("type", {
        npi: core.serialization.object({
            value: Npi,
        }),
        tin: core.serialization.object({
            value: TaxId,
        }),
        cms_plan_id: core.serialization.object({
            value: core.serialization.string(),
        }),
    })
    .transform<CandidApi.remits.v1.PayeeIdentifier>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace PayeeIdentifier {
    type Raw = PayeeIdentifier.Npi | PayeeIdentifier.Tin | PayeeIdentifier.CmsPlanId;

    interface Npi {
        type: "npi";
        value: Npi.Raw;
    }

    interface Tin {
        type: "tin";
        value: TaxId.Raw;
    }

    interface CmsPlanId {
        type: "cms_plan_id";
        value: string;
    }
}
