"use strict";
/* tslint:disable */
/* eslint-disable */
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTimeLiteServer200ResponseToJSON = exports.GetTimeLiteServer200ResponseFromJSONTyped = exports.GetTimeLiteServer200ResponseFromJSON = exports.instanceOfGetTimeLiteServer200Response = void 0;
/**
 * Check if a given object implements the GetTimeLiteServer200Response interface.
 */
function instanceOfGetTimeLiteServer200Response(value) {
    let isInstance = true;
    isInstance = isInstance && "time" in value;
    return isInstance;
}
exports.instanceOfGetTimeLiteServer200Response = instanceOfGetTimeLiteServer200Response;
function GetTimeLiteServer200ResponseFromJSON(json) {
    return GetTimeLiteServer200ResponseFromJSONTyped(json, false);
}
exports.GetTimeLiteServer200ResponseFromJSON = GetTimeLiteServer200ResponseFromJSON;
function GetTimeLiteServer200ResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'time': json['time'],
    };
}
exports.GetTimeLiteServer200ResponseFromJSONTyped = GetTimeLiteServer200ResponseFromJSONTyped;
function GetTimeLiteServer200ResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'time': value.time,
    };
}
exports.GetTimeLiteServer200ResponseToJSON = GetTimeLiteServer200ResponseToJSON;
