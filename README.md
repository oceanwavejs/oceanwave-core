# OCEANWAVE CORE

<img alt="GitHub License" src="https://img.shields.io/github/license/oceanwavejs/oceanwave-core">

<img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/oceanwavejs/oceanwave-core">

<img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/oceanwavejs/oceanwave-core">


Core Modules for OCEANWAVE Projects.

!!! note The package is still under development. Everything has the potential to change.

## Install

Currently, only npm is available as one installation method.

### NPM Install
```bash
npm i oceanwave@core
```
## Examples
Write a cross-platform API:
```js
import {core} from "@oceanwave/core";

const api = () => {
  if(core.systemInfo.platform.WIN32){
    //Windows implement
  }
  if(core.systemInfo.platform.DARWIN){
    //MacOS implement
  }
}
```

## License
MIT License

***
© 2023-2025 orbitgw <orbitgw@foxmail.com>