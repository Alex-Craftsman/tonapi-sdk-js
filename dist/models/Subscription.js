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
exports.SubscriptionToJSON = exports.SubscriptionFromJSONTyped = exports.SubscriptionFromJSON = void 0;
function SubscriptionFromJSON(json) {
    return SubscriptionFromJSONTyped(json, false);
}
exports.SubscriptionFromJSON = SubscriptionFromJSON;
function SubscriptionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'address': json['address'],
        'amount': json['amount'],
        'beneficiaryAddress': json['beneficiary_address'],
        'failedAttempts': json['failed_attempts'],
        'lastPaymentTime': json['last_payment_time'],
        'lastRequestTime': json['last_request_time'],
        'period': json['period'],
        'startTime': json['start_time'],
        'subscriptionId': json['subscription_id'],
        'timeout': json['timeout'],
        'walletAddress': json['wallet_address'],
    };
}
exports.SubscriptionFromJSONTyped = SubscriptionFromJSONTyped;
function SubscriptionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'address': value.address,
        'amount': value.amount,
        'beneficiary_address': value.beneficiaryAddress,
        'failed_attempts': value.failedAttempts,
        'last_payment_time': value.lastPaymentTime,
        'last_request_time': value.lastRequestTime,
        'period': value.period,
        'start_time': value.startTime,
        'subscription_id': value.subscriptionId,
        'timeout': value.timeout,
        'wallet_address': value.walletAddress,
    };
}
exports.SubscriptionToJSON = SubscriptionToJSON;
