/**
 * OCEANWAVE CORE EXCEPTION MODULE
 * This module provides a base exception.
 *  
 * @module com.oceanwavejs.core.exception
 * @version 0.1.0
 * @since 0.0.1
 * @author orbitgw <orbitgw@foxmail.com>
 * @copyright 2023-2025 orbitgw <orbitgw@foxmail.com>
 * @license MIT
 */

/**
 * OCEANWAVE Base Exception Class
 * @extends Error
 * @version 0.1.0
 * @since 0.0.1
 */
export class OWException extends Error {
  /**
   * OCEANWAVE Base Exception Constructor
   * This class is the base exception of OCEANWAVE. 
   * @param {string}  msg_header                   - A brief summary of the error.
   * @param {string} [msg_body=null]               - A detailed description of the error. (default: null)
   * @param {string} [type='UnknownError']         - Error type. (default: 'UnknownError')
   * @param {string} [module='ow.core.exception']  - Module that throws exceptions. (default: ow.core.exception)
   * @param {string} [cause=null]                  - The cause of this error. (default: null)
   * @version 0.1.0
   * @since 0.0.1
   */
  constructor(msg_header, msg_body = null, type = 'UnknownError', module = 'ow.core.exception', cause = null) {
    super()
    this.name = `${module}.${type}`
    this.message = msg_header + (msg_body == null ? '' : `\n  ${msg_body}`)
    this.cause = cause
    Error.captureStackTrace(this, this.constructor)
  }
  /**
   * Transform Error Object to printable format
   * @returns {string} Printable formatted string.
   * @since 0.0.1
   */
  toString(){
    return this.stack + ((this.cause != null) ? `\n  cause: ${this.cause}` : '')
  }
}