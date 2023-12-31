<p align="center">
    <img src="./.github/ashley.png" style="height: 90px;"/>
</p>
<h1 align="center">BaipiaoGPT-Client</h1>
<p align="center">
    Free chatting with gpt-3.5-turbo in app.
</p>
<p align="center">
    <span>English</span>
    <span style="margin: 0 5px;">·</span>
    <a href="./README_zh-hans.md">中文文档</a>
</p>

# Installation

Download from release and install:

[https://github.com/Vincent-the-gamer/baipiaogpt-client/releases](https://github.com/Vincent-the-gamer/baipiaogpt-client/releases)

## Latest(v1.0.0)

* Windows: 

    [BaipiaoGPT_1.0.0_x64_en-US.msi](https://github.com/Vincent-the-gamer/baipiaogpt-client/releases/download/v1.0.0/BaipiaoGPT_1.0.0_x64_en-US.msi)

* macOS:
    * Intel Silicon: [BaipiaoGPT_1.0.0_x64.dmg](https://github.com/Vincent-the-gamer/baipiaogpt-client/releases/download/v1.0.0/BaipiaoGPT_1.0.0_x64.dmg)
    * Apple Silicon: [BaipiaoGPT_1.0.0_aarch64.dmg](https://github.com/Vincent-the-gamer/baipiaogpt-client/releases/download/v1.0.0/BaipiaoGPT_1.0.0_aarch64.dmg)

* Linux:
    * [baipiao-gpt_1.0.0_amd64.deb](https://github.com/Vincent-the-gamer/baipiaogpt-client/releases/download/v1.0.0/baipiao-gpt_1.0.0_amd64.deb)
    * [baipiao-gpt_1.0.0_amd64.AppImage](https://github.com/Vincent-the-gamer/baipiaogpt-client/releases/download/v1.0.0/baipiao-gpt_1.0.0_amd64.AppImage)

# Relative Repo

Core repository:

[https://github.com/Vincent-the-gamer/Rust-BaipiaoGPT](https://github.com/Vincent-the-gamer/Rust-BaipiaoGPT)

Webpage Version:

[https://vincent-the-gamer.github.io/baipiaogpt-wasm-page/](https://vincent-the-gamer.github.io/baipiaogpt-wasm-page/)


# Build from source

## Generate Icons
```shell
> cargo tauri icon --help
cargo-tauri-icon 1.1.0

Generates various icons for all major platforms

USAGE:
    cargo tauri icon [OPTIONS] [INPUT]

ARGS:
    <INPUT>    Path to the source icon (png, 1024x1024px with transparency) [default: ./app-icon.png]

OPTIONS:
    -h, --help               Print help information
    -o, --output <OUTPUT>    Output directory. Default: 'icons' directory next to the tauri.conf.json file
    -v, --verbose            Enables verbose logging
    -V, --version            Print version information
```

## Automatic
Using `Github Actions`.

```shell
git tag vX.X.X
git push --tag origin release
```

## Manual (Current platform only)
```shell
pnpm tauri build
```

# Preview
![preview](./.github/preview.png)