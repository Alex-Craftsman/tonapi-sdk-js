/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@tonkeeper.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { BlockRaw } from './BlockRaw';
/**
 *
 * @export
 * @interface GetAllShardsInfoLiteServer200Response
 */
export interface GetAllShardsInfoLiteServer200Response {
    /**
     *
     * @type {BlockRaw}
     * @memberof GetAllShardsInfoLiteServer200Response
     */
    id: BlockRaw;
    /**
     *
     * @type {string}
     * @memberof GetAllShardsInfoLiteServer200Response
     */
    proof: string;
    /**
     *
     * @type {string}
     * @memberof GetAllShardsInfoLiteServer200Response
     */
    data: string;
}
/**
 * Check if a given object implements the GetAllShardsInfoLiteServer200Response interface.
 */
export declare function instanceOfGetAllShardsInfoLiteServer200Response(value: object): boolean;
export declare function GetAllShardsInfoLiteServer200ResponseFromJSON(json: any): GetAllShardsInfoLiteServer200Response;
export declare function GetAllShardsInfoLiteServer200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetAllShardsInfoLiteServer200Response;
export declare function GetAllShardsInfoLiteServer200ResponseToJSON(value?: GetAllShardsInfoLiteServer200Response | null): any;
