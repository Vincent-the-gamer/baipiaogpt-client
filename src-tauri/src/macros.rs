// requires reqwest crate
#[macro_export]
macro_rules! headermap {
    ($( $key: expr => $val: expr ),*) => {{
        let mut map = reqwest::header::HeaderMap::new();
        $( map.insert($key, reqwest::header::HeaderValue::from_static($val)); )*
        map
    }}
}
