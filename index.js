/**
 * OCEANWAVE CORE MODULE
 * This is the index file of OCEANWAVE Core Modules.
 *  
 * @module com.oceanwavejs.core
 * @version 0.1.0
 * @since 0.1.0
 * @author orbitgw <orbitgw@foxmail.com>
 * @copyright 2023-2025 orbitgw <orbitgw@foxmail.com>
 * @license MIT
 */

import { _runtime } from './lib/runtime.js';
import { _systemInfo } from './lib/systemInfo.js';
import { OWException } from './lib/exception.js';

/** @namespace core */
export const core = {}

core.runtime = _runtime
core.systemInfo = _systemInfo

export { OWException }
