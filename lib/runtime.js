/**
 * OCEANWAVE CORE RUNTIME ENVIRONMENT MODULE
 * This module provides a structure object of runtime environment.
 *  
 * @module com.oceanwavejs.core.runtime
 * @version 0.1.0
 * @since 0.1.0
 * @author orbitgw <orbitgw@foxmail.com>
 * @copyright 2023-2025 orbitgw <orbitgw@foxmail.com>
 * @license MIT
 */

/**
 * @typedef {object} OWCoreRuntimeEnvStructure
 * @prop {boolean} NODE           - Node.js Runtime Environment.
 * @prop {boolean} DENO           - Deno Runtime Environment.
 * @prop {boolean} BROWSER        - Web Browser Runtime Environment.
 * @prop {boolean} BUN            - Bun Runtime Environment.
 * @prop {boolean} ELECTRON       - Electron App Runtime Environment.
 * @prop {boolean} WEB_WORKER     - Web Worker Runtime Environment.
 * @prop {boolean} SERVICE_WORKER - Service Worker Runtime Environment.
 * @since 0.1.0
 */

/**
 * Runtime Environment Structure. 
 * It includes the boolean definitions of Node.js environment, Deno environment, Bun environment, Electron application environment, and browser environment. 
 * Users can use these environment definitions to build cross environment code abstraction layers.
 * @type {OWCoreRuntimeEnvStructure}
 * @since 0.1.0
 */
export const _runtime = {
    NODE:false,
    DENO:false,
    BROWSER:false,
    BUN:false,
    ELECTRON:false,
    WEB_WORKER:false,
    SERVICE_WORKER:false
}

/**
 * Internal function to initiallize the runtime environment structure.
 * @private
 * @since 0.1.0
 */
function _initRuntimeEnv(){
    // Check Deno
    if (typeof Deno !== "undefined" && Deno?.version?.deno) {
        _runtime.DENO = true
    }
    // Check Bun
    if (typeof Bun !== "undefined" && Bun?.version) {
        _runtime.BUN = true
    }
    // Check Node.js
    if (typeof process !== "undefined" && process?.versions?.node && !_runtime.DENO && !_runtime.BUN) {
        _runtime.NODE = true
    }
    // Check Electron
    if (typeof process !== "undefined" && process.versions.electron) {
        return "electron";
    }
    //Check Browser (including Web Worker & Service Worker)
    if (typeof window !== "undefined") {
        _runtime.BROWSER = true
        // Check Web Worker
        if (typeof self !== "undefined" && self?.constructor?.name === "DedicatedWorkerGlobalScope") {
            _runtime.WEB_WORKER = true
        }
        // Check Service Worker
        if (typeof self !== "undefined" && self?.constructor?.name === "ServiceWorkerGlobalScope") {
            _runtime.SERVICE_WORKER = true
        }
    }
}
_initRuntimeEnv()