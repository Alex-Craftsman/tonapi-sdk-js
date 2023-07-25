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
exports.JettonTransferActionToJSON = exports.JettonTransferActionFromJSONTyped = exports.JettonTransferActionFromJSON = exports.instanceOfJettonTransferAction = void 0;
const runtime_1 = require("../runtime");
const AccountAddress_1 = require("./AccountAddress");
const EncryptedComment_1 = require("./EncryptedComment");
const JettonPreview_1 = require("./JettonPreview");
const Refund_1 = require("./Refund");
/**
 * Check if a given object implements the JettonTransferAction interface.
 */
function instanceOfJettonTransferAction(value) {
    let isInstance = true;
    isInstance = isInstance && "sendersWallet" in value;
    isInstance = isInstance && "recipientsWallet" in value;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "jetton" in value;
    return isInstance;
}
exports.instanceOfJettonTransferAction = instanceOfJettonTransferAction;
function JettonTransferActionFromJSON(json) {
    return JettonTransferActionFromJSONTyped(json, false);
}
exports.JettonTransferActionFromJSON = JettonTransferActionFromJSON;
function JettonTransferActionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'sender': !(0, runtime_1.exists)(json, 'sender') ? undefined : (0, AccountAddress_1.AccountAddressFromJSON)(json['sender']),
        'recipient': !(0, runtime_1.exists)(json, 'recipient') ? undefined : (0, AccountAddress_1.AccountAddressFromJSON)(json['recipient']),
        'sendersWallet': json['senders_wallet'],
        'recipientsWallet': json['recipients_wallet'],
        'amount': json['amount'],
        'comment': !(0, runtime_1.exists)(json, 'comment') ? undefined : json['comment'],
        'encryptedComment': !(0, runtime_1.exists)(json, 'encrypted_comment') ? undefined : (0, EncryptedComment_1.EncryptedCommentFromJSON)(json['encrypted_comment']),
        'refund': !(0, runtime_1.exists)(json, 'refund') ? undefined : (0, Refund_1.RefundFromJSON)(json['refund']),
        'jetton': (0, JettonPreview_1.JettonPreviewFromJSON)(json['jetton']),
    };
}
exports.JettonTransferActionFromJSONTyped = JettonTransferActionFromJSONTyped;
function JettonTransferActionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'sender': (0, AccountAddress_1.AccountAddressToJSON)(value.sender),
        'recipient': (0, AccountAddress_1.AccountAddressToJSON)(value.recipient),
        'senders_wallet': value.sendersWallet,
        'recipients_wallet': value.recipientsWallet,
        'amount': value.amount,
        'comment': value.comment,
        'encrypted_comment': (0, EncryptedComment_1.EncryptedCommentToJSON)(value.encryptedComment),
        'refund': (0, Refund_1.RefundToJSON)(value.refund),
        'jetton': (0, JettonPreview_1.JettonPreviewToJSON)(value.jetton),
    };
}
exports.JettonTransferActionToJSON = JettonTransferActionToJSON;
