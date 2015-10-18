/// <reference path="../es6-promise/es6-promise.d.ts" />
/// <reference path='../whatwg-fetch/whatwg-fetch.d.ts' />

/**
 * Type Definition File for FuseJS
 * copied from vscode-fuse (https://github.com/realignist/vscode-fuse)
 *
 * Created by Realignist, Thanks for Saschanaz, modified by PeterMoelgaard to use above dependencies by preference.
 */


/* -----------------------------------
 * Define Observable
 * require('FuseJS/Observable');
 * ---------------------------------- */

declare module "FuseJS/Observable" {
    module o {
        interface Observable {
            constructor(...object: any[]);
            value: any;
            length: number;
            getAt(index: number): any;
            add(value: any);
            remove(value: any);
            tryRemove(value: any);
            removeWhere(func: (any) => any);
            forEach(func: (any) => any);
            replaceAt(index: number, value: any);
            replaceAll(array: Array<any>);
            clear();
            indexOf(value: any): number;
            contains(value: any): boolean;
            refreshAll(newValues: any, compareFunc: (oldItem: any, newItem: any) => boolean,
                       updateFunc: (oldItem: any, newItem: any) => void, mapFunc: (newItem) => any);
            where(condition: (object: any) => boolean): Observable;
            map(func: (object: any) => any): Observable;
            count(): number;
            count(condition: (object: any) => boolean): Observable;
            not(): boolean;
            filter(condition: (object: any) => boolean): Observable;
            expand(): Observable;
        }
    }

    function o (...object: any[]): o.Observable;
    export = o;
}


/* -----------------------------------
 * Define Fetch API
 * ---------------------------------- */

declare function fetch (url: string | Request, init?: RequestInit): Promise<Response>;


/* -----------------------------------
 * Define Storage API
 * require('FuseJS/Storage');
 * ---------------------------------- */

declare module "FuseJS/Storage" {
    export function write (name: string, value: any): boolean;
    export function read (name: string): Promise<File>;
    export function writeSync (name: string, value: any): boolean;
    export function readSync (name: string): File;
    export function deleteSync (name: string): boolean;
}


/* -----------------------------------
 * Define Lifecycle API
 * require('FuseJS/Lifecycle');
 * ---------------------------------- */

declare module "FuseJS/Lifecycle" {
    export var onEnteringForeground: () => void;
    export var onEnteringBackground: () => void;
    export var onEnteringInteractive: () => void;
    export var onExitedInteractive: () => void;
    export var onTerminating: () => void;
}


/* -----------------------------------
 * Define Phone API
 * require('FuseJS/Phone');
 * ---------------------------------- */

declare module "FuseJS/Phone" {
    export function call (time: string): void;
}


/* -----------------------------------
 * Define Camera API
 * require('FuseJS/Camera');
 * ---------------------------------- */

declare module "FuseJS/Camera" {
    export function takePicture (config: any): Promise<File>;
}


/* -----------------------------------
 * Define Vibration API
 * require('FuseJS/Vibration');
 * ---------------------------------- */

declare module "FuseJS/Vibration" {
    export function vibrate (time: number): void;
}


/* -----------------------------------
 * Define InterApp API
 * require('FuseJS/InterApp');
 * ---------------------------------- */

declare module "FuseJS/InterApp" {
    export function launchUri (uri: string): void;
    export var onReceivedUri: (uri: string) => void;
}
