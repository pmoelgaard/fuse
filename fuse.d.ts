/// <reference path="../../../typings/es6-promise/es6-promise.d.ts" />
/// <reference path='../../../typings/whatwg-fetch/whatwg-fetch.d.ts' />

declare function fetch(url: string|Request, init?: RequestInit) : Promise<Response>;