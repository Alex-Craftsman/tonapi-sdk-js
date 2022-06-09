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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Trace
 */
export interface Trace {
    /**
     * 
     * @type {string}
     * @memberof Trace
     */
    id: string;
    /**
     * 
     * @type {number}
     * @memberof Trace
     */
    utime: number;
}

export function TraceFromJSON(json: any): Trace {
    return TraceFromJSONTyped(json, false);
}

export function TraceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Trace {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'utime': json['utime'],
    };
}

export function TraceToJSON(value?: Trace | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'utime': value.utime,
    };
}

