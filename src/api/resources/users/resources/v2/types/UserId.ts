/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../..";

export type UserId = string & {
    users_v2_UserId: void;
};

export function UserId(value: string): CandidApi.users.v2.UserId {
    return value as unknown as CandidApi.users.v2.UserId;
}
