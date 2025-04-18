/**
 * OCEANWAVE CORE SYSTEM INFORMATION MODULE
 * This module provides a structure object of operating system informations.
 *  
 * @module com.oceanwavejs.core.systemInfo
 * @version 0.1.0
 * @since 0.1.0
 * @author orbitgw <orbitgw@foxmail.com>
 * @copyright 2023-2025 orbitgw <orbitgw@foxmail.com>
 * @license MIT
 */

import { _runtime } from "./runtime.js"; 

/**
 * @typedef {object} OWCoreOSPlatformStructure
 * @prop {boolean} WIN32     - Microsoft Windows.
 * @prop {boolean} LINUX     - Linux.
 * @prop {boolean} DARWIN    - Apple MacOS.
 * @prop {boolean} AIX       - IBM AIX.
 * @prop {boolean} FREEBSD   - Free BSD.
 * @prop {boolean} OPENBSD   - Open BSD.
 * @prop {boolean} SUNOS     - Solaris/SunOS.
 * @prop {boolean} ANDROID   - Google Android.
 * @prop {boolean} IOS       - Apple IOS.
 * @prop {boolean} HMOS      - HUAWEI HarmonyOS.
 * @since 0.1.0
 */

/**
 * @typedef {object} OWCoreArchitectureStructure
 * @prop {boolean} IA32      - Intel/AMD 32-bit (x86, IA-32).
 * @prop {boolean} AMD64     - Intel/AMD 64-bit (x86-64, AMD64).
 * @prop {boolean} ARM       - ARM 32-bit (ARMv7, ARMv6).
 * @prop {boolean} ARM64     - ARM 64-bit (AArch64, ARMv8).
 * @prop {boolean} MIPS      - MIPS architecture.
 * @prop {boolean} MIPSEL    - MIPS (Little Endian).
 * @prop {boolean} PPC       - PowerPC 32-bit.
 * @prop {boolean} PPC64     - PowerPC 64-bit.
 * @prop {boolean} RISCV64   - RISC-V 64-bit.
 * @prop {boolean} S390      - IBM System/390 (31-bit).
 * @prop {boolean} S390X     - IBM z/Architecture (64-bit).
 * @prop {boolean} LOONG64   - LoongArch 64-bit.
 * @prop {boolean} IA64      - Intel Itanium (IA-64).
 * @since 0.1.0
 */

/**
 * @typedef {object} OWCoreSystemInfo
 * @prop {OWCoreOSPlatformStructure}   platform  - Operating system information.
 * @prop {OWCoreArchitectureStructure} arch      - CPU architecture information.
 * @since 0.1.0
 */

/**
 * System Information Structure.
 * It contains operating system information and CPU architecture information.
 * @type {OWCoreSystemInfo}
 * @since 0.1.0
 */
export const _systemInfo = {
    platform:{
        WIN32:false,
        LINUX:false,
        DARWIN:false,
        AIX:false,
        FREEBSD:false,
        OPENBSD:false,
        SUNOS:false,
        ANDROID:false,
        IOS:false,
        HMOS:false
    },
    arch:{
        IA32:false,
        AMD64:false,
        ARM:false,
        ARM64:false,
        MIPS:false,
        MIPSEL:false,
        PPC:false,
        PPC64:false,
        RISCV64:false,
        S390:false,
        S390X:false,
        LOONG64:false,
        IA64:false
    }
}

/**
 * @typedef {object} PlatformAndArchResult
 * @prop {string} platform - Platform result.
 * @prop {string} arch - Architecture result.
 * @private
 * @since 0.1.0
 */

/**
 * Internal function to get platform and arch from different runtime envs.
 * In this function, it also handle difference platform and arch identifier in different runtime envs and normalize it. 
 * @todo Need to implement detection in browser and mobile envs.
 * @returns {PlatformAndArchResult}
 * @private
 * @since 0.1.0
 */
function _getPlatformAndArch(){
    if(_runtime.NODE){
        return {
            platform: process.platform,
            arch: process.arch
        }
    }
    if(_runtime.BUN){
        return {
            platform: typeof Bun.os === 'string' ? Bun.os : process.platform,
            arch: typeof Bun.arch === 'string' ? Bun.arch : process.arch
        }
    }
    if(_runtime.DENO){
        let _platform = Deno.build.os
        let _arch = Deno.build.arch
        return {
            platform:_platform === 'windows' ? 'win32' : _platform,
            arch:_arch === 'aarch64' ? 'arm64' :
                 _arch === 'x86_64'  ? 'x64'   :
                 _arch 
        }
    }
    return { platform:null, arch:null }
}

/**
 * Internal function to initialize system information structure.
 * @private
 * @since 0.1.0
 */
function _initSysInfo(){
    let res = _getPlatformAndArch()
    switch (res.platform) {
        case 'win32':    _systemInfo.platform.WIN32   = true;  break;
        case 'linux':    _systemInfo.platform.LINUX   = true;  break;
        case 'darwin':   _systemInfo.platform.DARWIN  = true;  break;
        case 'aix':      _systemInfo.platform.AIX     = true;  break;
        case 'freebsd':  _systemInfo.platform.FREEBSD = true;  break;
        case 'openbsd':  _systemInfo.platform.OPENBSD = true;  break;
        case 'sunos':    _systemInfo.platform.SUNOS   = true;  break;
        case 'android':  _systemInfo.platform.ANDROID = true;  break;
    }
    switch (res.arch) {
        case 'ia32':     _systemInfo.arch.IA32        = true;  break;
        case 'x64':      _systemInfo.arch.AMD64       = true;  break;
        case 'arm':      _systemInfo.arch.ARM         = true;  break;
        case 'arm64':    _systemInfo.arch.ARM64       = true;  break;
        case 'mips':     _systemInfo.arch.MIPS        = true;  break;
        case 'mipsel':   _systemInfo.arch.MIPSEL      = true;  break;
        case 'ppc':      _systemInfo.arch.PPC         = true;  break;
        case 'ppc64':    _systemInfo.arch.PPC64       = true;  break;
        case 'riscv64':  _systemInfo.arch.RISCV64     = true;  break;
        case 's390':     _systemInfo.arch.S390        = true;  break;
        case 's390x':    _systemInfo.arch.S390X       = true;  break;
        case 'loong64':  _systemInfo.arch.LOONG64     = true;  break;
        case 'ia64':     _systemInfo.arch.IA64        = true;  break;
    }
}
_initSysInfo()