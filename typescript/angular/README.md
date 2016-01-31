### General

Install: `npm install -g typescript tsd karma-cli && npm install && tsd install`

### Application

Transpile: `tsc --sourcemap --out components/button/app.js components/button/src/references.ts`

### Unit tests

Transpile: `tsc --out components/button/button-unit-spec.js components/button/test/button-unit-spec.ts`
Run: `karma start karma.conf.js`