### General

Install: `brew install dart --with-content-shell --with-dartium && pub get`

### Application

Transpile: `pub build` or `dart2js --out=web/app.js web/main.dart`
Run native: `cd web && python -m SimpleHTTPServer` then run `dartium` and navigate to `http://localhost:8000/dart.html`

### Unit tests

Run: `dartium test/button-unit-spec.html`