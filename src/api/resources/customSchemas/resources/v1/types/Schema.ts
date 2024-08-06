/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as CandidApi from "../../../../../index";

/**
 * @example
 *     {
 *         id: CandidApi.SchemaId("ec096b13-f80a-471d-aaeb-54b021c9d582"),
 *         name: "General Medicine",
 *         description: "Values associated with a generic visit",
 *         fields: [{
 *                 key: "provider_category",
 *                 type: CandidApi.Primitive.String
 *             }, {
 *                 key: "is_urgent_care",
 *                 type: CandidApi.Primitive.Boolean
 *             }, {
 *                 key: "bmi",
 *                 type: CandidApi.Primitive.Double
 *             }, {
 *                 key: "age",
 *                 type: CandidApi.Primitive.Integer
 *             }]
 *     }
 *
 * @example
 *     {
 *         id: CandidApi.SchemaId("ec096b13-f80a-471d-aaeb-54b021c9d582"),
 *         name: "General Medicine and Health",
 *         description: "Values collected during all visits",
 *         fields: [{
 *                 key: "provider_category",
 *                 type: CandidApi.Primitive.String
 *             }, {
 *                 key: "is_urgent_care",
 *                 type: CandidApi.Primitive.Boolean
 *             }, {
 *                 key: "bmi",
 *                 type: CandidApi.Primitive.Double
 *             }, {
 *                 key: "age",
 *                 type: CandidApi.Primitive.Integer
 *             }, {
 *                 key: "visit_type",
 *                 type: CandidApi.Primitive.String
 *             }]
 *     }
 */
export interface Schema {
    id: CandidApi.SchemaId;
    name: string;
    description?: string;
    fields: CandidApi.customSchemas.v1.SchemaField[];
}
