/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../../index";

/**
 * @example
 *     {
 *         name: "General Medicine and Health",
 *         description: "Values collected during all visits",
 *         fieldsToAdd: [{
 *                 key: "visit_type",
 *                 type: CandidApi.Primitive.String
 *             }]
 *     }
 */
export interface SchemaUpdate {
    name?: string;
    description?: string;
    /** A list of typed entries to add to schema. Only additive modifications are permitted. */
    fieldsToAdd?: CandidApi.customSchemas.v1.SchemaField[];
}