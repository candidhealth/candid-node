/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../..";

/**
 * Action to perform on claim(s)
 *
 * @example
 *     {
 *         type: "resubmit_fresh_claim_action"
 *     }
 */
export type ClaimAction =
    | CandidApi.ClaimAction.VoidClaimAction
    | CandidApi.ClaimAction.ResubmitFreshClaimAction
    | CandidApi.ClaimAction.ResubmitCorrectedClaimAction
    | CandidApi.ClaimAction.CloseTasksAndProcessClaimAction
    | CandidApi.ClaimAction.MoveToWorkQueueClaimAction;

export declare namespace ClaimAction {
    interface VoidClaimAction extends CandidApi.VoidClaimAction {
        type: "void_claim_action";
    }

    interface ResubmitFreshClaimAction extends CandidApi.ResubmitFreshClaimAction {
        type: "resubmit_fresh_claim_action";
    }

    interface ResubmitCorrectedClaimAction extends CandidApi.ResubmitCorrectedClaimAction {
        type: "resubmit_corrected_claim_action";
    }

    interface CloseTasksAndProcessClaimAction extends CandidApi.CloseTasksAndProcessClaimAction {
        type: "close_tasks_and_process_claim_action";
    }

    interface MoveToWorkQueueClaimAction extends CandidApi.MoveToWorkQueueClaimAction {
        type: "move_to_work_queue_claim_action";
    }
}
