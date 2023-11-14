/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type TaskSortOptions =
    | "updated_at:asc"
    | "updated_at:desc"
    | "patient_name:asc"
    | "patient_name:desc"
    | "patient_external_id:asc"
    | "patient_external_id:desc"
    | "payer_name:asc"
    | "payer_name:desc"
    | "payer_id:asc"
    | "payer_id:desc"
    | "status:asc"
    | "status:desc"
    | "task_type:asc"
    | "task_type:desc"
    | "category:asc"
    | "category:desc"
    | "agg_updated_at:asc"
    | "agg_updated_at:desc"
    | "date_of_service:asc"
    | "date_of_service:desc"
    | "blocks_claim_submission:asc"
    | "blocks_claim_submission:desc";

export const TaskSortOptions = {
    UpdatedAtAsc: "updated_at:asc",
    UpdatedAtDesc: "updated_at:desc",
    PatientNameAsc: "patient_name:asc",
    PatientNameDesc: "patient_name:desc",
    PatientExternalIdAsc: "patient_external_id:asc",
    PatientExternalIdDesc: "patient_external_id:desc",
    PayerNameAsc: "payer_name:asc",
    PayerNameDesc: "payer_name:desc",
    PayerIdAsc: "payer_id:asc",
    PayerIdDesc: "payer_id:desc",
    StatusAsc: "status:asc",
    StatusDesc: "status:desc",
    TaskTypeAsc: "task_type:asc",
    TaskTypeDesc: "task_type:desc",
    CategoryAsc: "category:asc",
    CategoryDesc: "category:desc",
    AggUpdatedAtAsc: "agg_updated_at:asc",
    AggUpdatedAtDesc: "agg_updated_at:desc",
    DateOfServiceAsc: "date_of_service:asc",
    DateOfServiceDesc: "date_of_service:desc",
    BlocksClaimSubmissionAsc: "blocks_claim_submission:asc",
    BlocksClaimSubmissionDesc: "blocks_claim_submission:desc",
} as const;