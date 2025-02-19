/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type TaskStatus =
    | "finished"
    | "addressed_by_provider_group"
    | "sent_to_provider_group"
    | "open"
    | "blocked"
    | "waiting_for_review"
    | "in_progress";
export const TaskStatus = {
    Finished: "finished",
    AddressedByProviderGroup: "addressed_by_provider_group",
    SentToProviderGroup: "sent_to_provider_group",
    OpenTask: "open",
    Blocked: "blocked",
    WaitingForReview: "waiting_for_review",
    InProgress: "in_progress",
} as const;
