/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface ChargeCaptureClaimCreationSummary {
    /** The count of charge captures which are not part of a Claim Creation. */
    chargeCaptureChargesNotLinkedToClaimsCount: number;
    /** The count of charge capture claim_creations that have a Claim Creation status of NOT_STARTED. */
    chargeCaptureClaimCreationsNotStartedCount: number;
    /** The count of charge capture claim_creations that have a Claim Creation status of HELD. */
    chargeCaptureHeldClaimCreationsCount: number;
    /** The count of charge capture claim_creations that have a Claim Creation status of IN_ERROR. */
    chargeCaptureClaimCreationsInErrorCount: number;
    /** The number of ChargeCapturePostBilledChange items that are unresolved. */
    chargeCaptureUnresolvedChangeCount: number;
}
