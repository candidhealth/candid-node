/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";

export interface BaseModel {
    /** The organization that owns this object. */
    organizationId: CandidApi.preEncounter.OrganizationId;
    /** True if the object is deactivated. Deactivated objects are not returned in search results but are returned in all other endpoints including scan. */
    deactivated: boolean;
    /** The version of the object. Any update to any property of an object object will create a new version. */
    version: number;
    updatedAt: Date;
    /** The user ID of the user who last updated the object. */
    updatingUserId: CandidApi.preEncounter.UserId;
}
