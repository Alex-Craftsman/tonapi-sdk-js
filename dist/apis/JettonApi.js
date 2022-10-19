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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JettonApi = void 0;
const runtime = require("../runtime");
const models_1 = require("../models");
/**
 *
 */
class JettonApi extends runtime.BaseAPI {
    /**
     * Get all Jetton transfers for account
     */
    getJettonHistoryRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.account === null || requestParameters.account === undefined) {
                throw new runtime.RequiredError('account', 'Required parameter requestParameters.account was null or undefined when calling getJettonHistory.');
            }
            if (requestParameters.limit === null || requestParameters.limit === undefined) {
                throw new runtime.RequiredError('limit', 'Required parameter requestParameters.limit was null or undefined when calling getJettonHistory.');
            }
            const queryParameters = {};
            if (requestParameters.account !== undefined) {
                queryParameters['account'] = requestParameters.account;
            }
            if (requestParameters.jettonMaster !== undefined) {
                queryParameters['jetton_master'] = requestParameters.jettonMaster;
            }
            if (requestParameters.limit !== undefined) {
                queryParameters['limit'] = requestParameters.limit;
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("JWTAuth", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/v1/jetton/getHistory`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.AccountEventsFromJSON)(jsonValue));
        });
    }
    /**
     * Get all Jetton transfers for account
     */
    getJettonHistory(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getJettonHistoryRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get jetton metadata by jetton master address
     */
    getJettonInfoRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.account === null || requestParameters.account === undefined) {
                throw new runtime.RequiredError('account', 'Required parameter requestParameters.account was null or undefined when calling getJettonInfo.');
            }
            const queryParameters = {};
            if (requestParameters.account !== undefined) {
                queryParameters['account'] = requestParameters.account;
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("JWTAuth", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/v1/jetton/getInfo`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.JettonInfoFromJSON)(jsonValue));
        });
    }
    /**
     * Get jetton metadata by jetton master address
     */
    getJettonInfo(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getJettonInfoRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get all Jettons balances by owner address
     */
    getJettonsBalancesRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.account === null || requestParameters.account === undefined) {
                throw new runtime.RequiredError('account', 'Required parameter requestParameters.account was null or undefined when calling getJettonsBalances.');
            }
            const queryParameters = {};
            if (requestParameters.account !== undefined) {
                queryParameters['account'] = requestParameters.account;
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("JWTAuth", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/v1/jetton/getBalances`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.JettonsBalancesFromJSON)(jsonValue));
        });
    }
    /**
     * Get all Jettons balances by owner address
     */
    getJettonsBalances(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getJettonsBalancesRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.JettonApi = JettonApi;
