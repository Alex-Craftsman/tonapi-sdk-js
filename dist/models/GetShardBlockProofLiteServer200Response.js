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
exports.GetShardBlockProofLiteServer200ResponseToJSON = exports.GetShardBlockProofLiteServer200ResponseFromJSONTyped = exports.GetShardBlockProofLiteServer200ResponseFromJSON = exports.instanceOfGetShardBlockProofLiteServer200Response = void 0;
const BlockRaw_1 = require("./BlockRaw");
const GetShardBlockProofLiteServer200ResponseLinksInner_1 = require("./GetShardBlockProofLiteServer200ResponseLinksInner");
/**
 * Check if a given object implements the GetShardBlockProofLiteServer200Response interface.
 */
function instanceOfGetShardBlockProofLiteServer200Response(value) {
    let isInstance = true;
    isInstance = isInstance && "masterchainId" in value;
    isInstance = isInstance && "links" in value;
    return isInstance;
}
exports.instanceOfGetShardBlockProofLiteServer200Response = instanceOfGetShardBlockProofLiteServer200Response;
function GetShardBlockProofLiteServer200ResponseFromJSON(json) {
    return GetShardBlockProofLiteServer200ResponseFromJSONTyped(json, false);
}
exports.GetShardBlockProofLiteServer200ResponseFromJSON = GetShardBlockProofLiteServer200ResponseFromJSON;
function GetShardBlockProofLiteServer200ResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'masterchainId': (0, BlockRaw_1.BlockRawFromJSON)(json['masterchain_id']),
        'links': (json['links'].map(GetShardBlockProofLiteServer200ResponseLinksInner_1.GetShardBlockProofLiteServer200ResponseLinksInnerFromJSON)),
    };
}
exports.GetShardBlockProofLiteServer200ResponseFromJSONTyped = GetShardBlockProofLiteServer200ResponseFromJSONTyped;
function GetShardBlockProofLiteServer200ResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'masterchain_id': (0, BlockRaw_1.BlockRawToJSON)(value.masterchainId),
        'links': (value.links.map(GetShardBlockProofLiteServer200ResponseLinksInner_1.GetShardBlockProofLiteServer200ResponseLinksInnerToJSON)),
    };
}
exports.GetShardBlockProofLiteServer200ResponseToJSON = GetShardBlockProofLiteServer200ResponseToJSON;
