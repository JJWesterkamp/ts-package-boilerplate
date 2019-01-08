# TS package boilerplate

A boilerplate package for Typescript NPM package development. This boilerplate targets Javascript-only packages, and thus has no Sass-loaders, extract-text plugins and the lot configured. Features include:

### Multiple builds

The boilerplate comes with various build scripts:

- `npm run build:cjs` builds CommonJS modules into the `cjs` folder with the typescript compiler
- `npm run build:esm` builds ES Modules into the `esm` folder with the typescript compiler
- `npm run build:umd` builds UMD bundles (minified and non-minified) into the `umd` folder with webpack + ts-loader

All builds are run concurrently with `npm run build`. If some builds are unnecessary for your project you can simply remove the scripts from package.json.

### Decoupled client interface

Uses a declaration file pointed to by `package.json`. The interfaces declared there are imported and implemented by the actual package. This ensures that implementation details like class signatures are hidden from package consumers. This is a personal preference, and can be altered as required.

### Testing framework all set-up

By default a Karma configuration is included. The boilerplate also installs Mocha, Chai and Sinon, and their respective type declarations. The Karma configuration uses `ChromeHeadless` as testing environment. Code coverage is measured over the `src` folder, and reported into the (ignored) `coverage` folder.

Note: The boilerplate assumes usage of TravisCI and Coveralls as CI environment - also by personal preference. See `karma.conf.js` for details. The coveralls reporter must be disabled if you do not use coveralls, otherwise testing processes might fail.

## Setup

### 1. Pull in the repository and setup git

```bash
$ git clone <this-repository>
$ cd ts-package-boilerplate
$ rm -rf .git
$ git init

    ...setup your repo, remotes etc.
```

### 2. Edit file contents as follows

The boilerplate uses values as `"package-name"` and `"PackageName"` as default values for various pointers, hooks etc. Rename these to your preference:

- Rename entry point keys in `webpack.config.js`
- Rename `output.library` in `webpack.config.js`
- Rename `PackageName` in `package-name.d.ts`
- Rename `package-name.d.ts` to your package name
- Update update `package.json:types` value to point to renamed declaration file.

### 3. Good to go!
