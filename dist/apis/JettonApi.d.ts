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
import * as runtime from '../runtime';
import type { JettonHistory, JettonInfo, JettonsBalances } from '../models';
export interface GetJettonHistoryRequest {
    account: string;
}
export interface GetJettonInfoRequest {
    account: string;
}
export interface GetJettonsBalancesRequest {
    account: string;
}
/**
 * JettonApi - interface
 *
 * @export
 * @interface JettonApiInterface
 */
export interface JettonApiInterface {
    /**
     * Get all Jetton transfers for account. EXPERIMENTAL METHOD!!!
     * @param {string} account address in raw (hex without 0x) or base64url format
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JettonApiInterface
     */
    getJettonHistoryRaw(requestParameters: GetJettonHistoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JettonHistory>>;
    /**
     * Get all Jetton transfers for account. EXPERIMENTAL METHOD!!!
     */
    getJettonHistory(requestParameters: GetJettonHistoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JettonHistory>;
    /**
     * Get jetton metadata by jetton master address
     * @param {string} account address in raw (hex without 0x) or base64url format
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JettonApiInterface
     */
    getJettonInfoRaw(requestParameters: GetJettonInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JettonInfo>>;
    /**
     * Get jetton metadata by jetton master address
     */
    getJettonInfo(requestParameters: GetJettonInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JettonInfo>;
    /**
     * Get all Jettons balances by owner address
     * @param {string} account address in raw (hex without 0x) or base64url format
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JettonApiInterface
     */
    getJettonsBalancesRaw(requestParameters: GetJettonsBalancesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JettonsBalances>>;
    /**
     * Get all Jettons balances by owner address
     */
    getJettonsBalances(requestParameters: GetJettonsBalancesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JettonsBalances>;
}
/**
 *
 */
export declare class JettonApi extends runtime.BaseAPI implements JettonApiInterface {
    /**
     * Get all Jetton transfers for account. EXPERIMENTAL METHOD!!!
     */
    getJettonHistoryRaw(requestParameters: GetJettonHistoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JettonHistory>>;
    /**
     * Get all Jetton transfers for account. EXPERIMENTAL METHOD!!!
     */
    getJettonHistory(requestParameters: GetJettonHistoryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JettonHistory>;
    /**
     * Get jetton metadata by jetton master address
     */
    getJettonInfoRaw(requestParameters: GetJettonInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JettonInfo>>;
    /**
     * Get jetton metadata by jetton master address
     */
    getJettonInfo(requestParameters: GetJettonInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JettonInfo>;
    /**
     * Get all Jettons balances by owner address
     */
    getJettonsBalancesRaw(requestParameters: GetJettonsBalancesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JettonsBalances>>;
    /**
     * Get all Jettons balances by owner address
     */
    getJettonsBalances(requestParameters: GetJettonsBalancesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JettonsBalances>;
}
