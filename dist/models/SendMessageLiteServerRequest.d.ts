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
/**
 *
 * @export
 * @interface SendMessageLiteServerRequest
 */
export interface SendMessageLiteServerRequest {
    /**
     *
     * @type {string}
     * @memberof SendMessageLiteServerRequest
     */
    body: string;
}
/**
 * Check if a given object implements the SendMessageLiteServerRequest interface.
 */
export declare function instanceOfSendMessageLiteServerRequest(value: object): boolean;
export declare function SendMessageLiteServerRequestFromJSON(json: any): SendMessageLiteServerRequest;
export declare function SendMessageLiteServerRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SendMessageLiteServerRequest;
export declare function SendMessageLiteServerRequestToJSON(value?: SendMessageLiteServerRequest | null): any;
