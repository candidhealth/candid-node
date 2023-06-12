/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../..";

export interface UserV2 {
    userId: CandidApi.users.v2.UserId;
    idpMetadata: CandidApi.users.v2.IdpUserMetadata[];
    primaryOrganizationId: CandidApi.OrganizationId;
    userMetadata: CandidApi.users.v2.UserMetadata;
    accessibleOrganizationIds: CandidApi.OrganizationId[];
}
