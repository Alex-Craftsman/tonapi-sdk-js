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
exports.WalletToJSON = exports.WalletFromJSONTyped = exports.WalletFromJSON = void 0;
function WalletFromJSON(json) {
    return WalletFromJSONTyped(json, false);
}
exports.WalletFromJSON = WalletFromJSON;
function WalletFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'address': json['address'],
        'interfaces': json['interfaces'],
    };
}
exports.WalletFromJSONTyped = WalletFromJSONTyped;
function WalletToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'address': value.address,
        'interfaces': value.interfaces,
    };
}
exports.WalletToJSON = WalletToJSON;
