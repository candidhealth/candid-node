/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../..";

/**
 * @example
 *     {
 *         category: CandidApi.encounters.v4.PatientHistoryCategoryEnum.PresentIllness,
 *         questions: [{
 *                 id: CandidApi.encounters.v4.IntakeQuestionId("6E7FBCE4-A8EA-46D0-A8D8-FF83CA3BB176"),
 *                 text: "Do you have any allergies?",
 *                 responses: [{
 *                         response: "No allergies",
 *                         followUps: [{
 *                                 id: CandidApi.encounters.v4.IntakeFollowUpId("4F3D57F9-AC94-49D6-87E4-E804B709917A"),
 *                                 text: "Do you have any allergies?",
 *                                 response: "No allergies"
 *                             }]
 *                     }]
 *             }]
 *     }
 */
export interface PatientHistoryCategory {
    category: CandidApi.encounters.v4.PatientHistoryCategoryEnum;
    /** Must contain at least one item. */
    questions: CandidApi.encounters.v4.IntakeQuestion[];
}
