"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: contact@fslabs.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JettonMetadataToJSON = exports.JettonMetadataFromJSONTyped = exports.JettonMetadataFromJSON = exports.instanceOfJettonMetadata = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the JettonMetadata interface.
 */
function instanceOfJettonMetadata(value) {
    let isInstance = true;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "decimals" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "symbol" in value;
    return isInstance;
}
exports.instanceOfJettonMetadata = instanceOfJettonMetadata;
function JettonMetadataFromJSON(json) {
    return JettonMetadataFromJSONTyped(json, false);
}
exports.JettonMetadataFromJSON = JettonMetadataFromJSON;
function JettonMetadataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'address': json['address'],
        'catalogs': !(0, runtime_1.exists)(json, 'catalogs') ? undefined : json['catalogs'],
        'decimals': json['decimals'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'image': !(0, runtime_1.exists)(json, 'image') ? undefined : json['image'],
        'name': json['name'],
        'social': !(0, runtime_1.exists)(json, 'social') ? undefined : json['social'],
        'symbol': json['symbol'],
        'websites': !(0, runtime_1.exists)(json, 'websites') ? undefined : json['websites'],
    };
}
exports.JettonMetadataFromJSONTyped = JettonMetadataFromJSONTyped;
function JettonMetadataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'address': value.address,
        'catalogs': value.catalogs,
        'decimals': value.decimals,
        'description': value.description,
        'image': value.image,
        'name': value.name,
        'social': value.social,
        'symbol': value.symbol,
        'websites': value.websites,
    };
}
exports.JettonMetadataToJSON = JettonMetadataToJSON;
