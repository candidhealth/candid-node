/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../index";

/**
 * @example
 *     {
 *         eraId: CandidApi.EraId("4D844EF1-2253-43CD-A4F1-6DB7E65CB54B"),
 *         checkNumber: "CHK12345",
 *         checkDate: CandidApi.Date_("2023-10-12")
 *     }
 */
export interface Era extends CandidApi.EraBase {
    eraId: CandidApi.EraId;
}
