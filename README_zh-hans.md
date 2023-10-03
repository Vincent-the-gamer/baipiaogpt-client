<p align="center">
    <img src="./.github/ashley.png" style="height: 90px;"/>
</p>
<h1 align="center">BaipiaoGPT-Client</h1>
<p align="center">
    白嫖GPT对话的PC客户端
</p>
<p align="center">
    <a href="./README.md">English</a>
    <span style="margin: 0 5px;">·</span>
    <span>中文文档</span>
</p>

# 安装

从Release里面下载:

[https://github.com/Vincent-the-gamer/baipiaogpt-client/releases](https://github.com/Vincent-the-gamer/baipiaogpt-client/releases)

## 最新版本(v1.0.0)

* Windows: 

    [BaipiaoGPT_1.0.0_x64_en-US.msi](https://github.com/Vincent-the-gamer/baipiaogpt-client/releases/download/v1.0.0/BaipiaoGPT_1.0.0_x64_en-US.msi)

* macOS:
    * 英特尔(Intel)芯片: [BaipiaoGPT_1.0.0_x64.dmg](https://github.com/Vincent-the-gamer/baipiaogpt-client/releases/download/v1.0.0/BaipiaoGPT_1.0.0_x64.dmg)
    * 苹果自研芯片(Apple M1/M2 系列): [BaipiaoGPT_1.0.0_aarch64.dmg](https://github.com/Vincent-the-gamer/baipiaogpt-client/releases/download/v1.0.0/BaipiaoGPT_1.0.0_aarch64.dmg)

* Linux:
    * [baipiao-gpt_1.0.0_amd64.deb](https://github.com/Vincent-the-gamer/baipiaogpt-client/releases/download/v1.0.0/baipiao-gpt_1.0.0_amd64.deb)
    * [baipiao-gpt_1.0.0_amd64.AppImage](https://github.com/Vincent-the-gamer/baipiaogpt-client/releases/download/v1.0.0/baipiao-gpt_1.0.0_amd64.AppImage)

# 相关的代码仓库

核心仓库:

[https://github.com/Vincent-the-gamer/Rust-BaipiaoGPT](https://github.com/Vincent-the-gamer/Rust-BaipiaoGPT)

网页版的白嫖GPT:

[https://vincent-the-gamer.github.io/baipiaogpt-wasm-page/](https://vincent-the-gamer.github.io/baipiaogpt-wasm-page/)


# 从源代码构建

## 生成图标
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

## 自动化构建
使用 `Github Actions` 流水线。

```shell
git tag vX.X.X
git push --tag origin release
```

## 本地手动构建（仅当前平台）
```shell
pnpm tauri build
```

# 预览
![preview](./.github/preview.png)