#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use baipiaogpt_client::services::{chat, regenerate, clear_context};

#[tauri::command]
async fn page_chat(content: &str) -> Result<String, String> {
   match chat(content).await {
     Ok(result) => Ok(result),
     Err(err) => Err(err.to_string())
   }
}

#[tauri::command]
async fn page_regenerate() -> Result<String, String> {
    match regenerate().await {
        Ok(result) => Ok(result),
        Err(err) => Err(err.to_string())
    }
}

#[tauri::command]
fn page_clear_context() {
    clear_context()
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(
            tauri::generate_handler![
                page_chat,
                page_regenerate,
                page_clear_context
            ]
        )
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
