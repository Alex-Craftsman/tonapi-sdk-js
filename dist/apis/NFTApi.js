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
exports.NFTApi = void 0;
const runtime = require("../runtime");
const models_1 = require("../models");
/**
 *
 */
class NFTApi extends runtime.BaseAPI {
    /**
     * Get NFT items by addresses
     */
    getNFTItemsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.addresses === null || requestParameters.addresses === undefined) {
                throw new runtime.RequiredError('addresses', 'Required parameter requestParameters.addresses was null or undefined when calling getNFTItems.');
            }
            const queryParameters = {};
            if (requestParameters.addresses) {
                queryParameters['addresses'] = requestParameters.addresses.join(runtime.COLLECTION_FORMATS["csv"]);
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
                path: `/v1/nft/getItems`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.NftItemsReprFromJSON)(jsonValue));
        });
    }
    /**
     * Get NFT items by addresses
     */
    getNFTItems(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getNFTItemsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get NFT collection by collection address
     */
    getNftCollectionRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.account === null || requestParameters.account === undefined) {
                throw new runtime.RequiredError('account', 'Required parameter requestParameters.account was null or undefined when calling getNftCollection.');
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
                path: `/v1/nft/getCollection`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.NftCollectionFromJSON)(jsonValue));
        });
    }
    /**
     * Get NFT collection by collection address
     */
    getNftCollection(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getNftCollectionRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get all NFT collections
     */
    getNftCollectionsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.limit !== undefined) {
                queryParameters['limit'] = requestParameters.limit;
            }
            if (requestParameters.offset !== undefined) {
                queryParameters['offset'] = requestParameters.offset;
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
                path: `/v1/nft/getCollections`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.NftCollectionsFromJSON)(jsonValue));
        });
    }
    /**
     * Get all NFT collections
     */
    getNftCollections(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getNftCollectionsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get NFT items for sale
     */
    getNftForSaleRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.account === null || requestParameters.account === undefined) {
                throw new runtime.RequiredError('account', 'Required parameter requestParameters.account was null or undefined when calling getNftForSale.');
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
                path: `/v1/nft/getNftForSale`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.NftSalesResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Get NFT items for sale
     */
    getNftForSale(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getNftForSaleRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get NFT item by its address
     */
    getNftItemByAddressRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.account === null || requestParameters.account === undefined) {
                throw new runtime.RequiredError('account', 'Required parameter requestParameters.account was null or undefined when calling getNftItemByAddress.');
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
                path: `/v1/nft/getItem`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.NftItemFromJSON)(jsonValue));
        });
    }
    /**
     * Get NFT item by its address
     */
    getNftItemByAddress(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getNftItemByAddressRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get all NFT items from collection by collection address
     */
    getNftItemsByCollectionAddressRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.account === null || requestParameters.account === undefined) {
                throw new runtime.RequiredError('account', 'Required parameter requestParameters.account was null or undefined when calling getNftItemsByCollectionAddress.');
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
                path: `/v1/nft/getItemsByCollectionAddress`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.NftItemsFromJSON)(jsonValue));
        });
    }
    /**
     * Get all NFT items from collection by collection address
     */
    getNftItemsByCollectionAddress(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getNftItemsByCollectionAddressRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get all NFT items by owner address
     */
    getNftItemsByOwnerAddressRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.account === null || requestParameters.account === undefined) {
                throw new runtime.RequiredError('account', 'Required parameter requestParameters.account was null or undefined when calling getNftItemsByOwnerAddress.');
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
                path: `/v1/nft/getItemsByOwnerAddress`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.NftItemsFromJSON)(jsonValue));
        });
    }
    /**
     * Get all NFT items by owner address
     */
    getNftItemsByOwnerAddress(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getNftItemsByOwnerAddressRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Search NFT items using filters
     */
    searchNFTItemsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.limit === null || requestParameters.limit === undefined) {
                throw new runtime.RequiredError('limit', 'Required parameter requestParameters.limit was null or undefined when calling searchNFTItems.');
            }
            if (requestParameters.offset === null || requestParameters.offset === undefined) {
                throw new runtime.RequiredError('offset', 'Required parameter requestParameters.offset was null or undefined when calling searchNFTItems.');
            }
            const queryParameters = {};
            if (requestParameters.owner !== undefined) {
                queryParameters['owner'] = requestParameters.owner;
            }
            if (requestParameters.collection !== undefined) {
                queryParameters['collection'] = requestParameters.collection;
            }
            if (requestParameters.includeOnSale !== undefined) {
                queryParameters['include_on_sale'] = requestParameters.includeOnSale;
            }
            if (requestParameters.limit !== undefined) {
                queryParameters['limit'] = requestParameters.limit;
            }
            if (requestParameters.offset !== undefined) {
                queryParameters['offset'] = requestParameters.offset;
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
                path: `/v1/nft/searchItems`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.NftItemsReprFromJSON)(jsonValue));
        });
    }
    /**
     * Search NFT items using filters
     */
    searchNFTItems(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.searchNFTItemsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.NFTApi = NFTApi;
