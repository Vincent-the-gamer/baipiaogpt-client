<p align="center">
    <img src="./.github/ashley.png" style="height: 90px;"/>
</p>
<h1 align="center">BaipiaoGPT-Client</h1>
<p align="center">
    Free chatting with gpt-3.5-turbo in app.
</p>

# Notice
This repo is in progress.

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

## Build
```shell
pnpm tauri build
```

# Preview
![preview](./.github/preview.png)