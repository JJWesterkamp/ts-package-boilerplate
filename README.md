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


 
1. To get started quickly [generate your repository][generator] from template on Github, or alternatively setup manually
by cloning the repository and setup your git configuration:

    ```text
    $ git clone git@github.com:JJWesterkamp/ts-package-boilerplate.git
    $ cd ts-package-boilerplate
    $ rm -rf .git
    $ git init

    ...setup your repo, remotes etc.

    $ npm install
    ```

2. Edit file contents as follows:

    The boilerplate uses values as `"package-name"` and `"PackageName"` as default values for various pointers, hooks etc. Rename these to your preference:

    - Rename entry point keys in `webpack.config.js`
    - Rename `output.library` in `webpack.config.js`
    - Rename `PackageName` in `package-name.d.ts`
    - Rename `package-name.d.ts` to your package name
    - Update update `package.json:types` value to point to renamed declaration file.


## License

 Copyright (c) 2018 Jeffrey Westerkamp

 Permission is hereby granted, free of charge, to any person
 obtaining a copy of this software and associated documentation
 files (the "Software"), to deal in the Software without
 restriction, including without limitation the rights to use,
 copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the
 Software is furnished to do so, subject to the following
 conditions:

 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 OTHER DEALINGS IN THE SOFTWARE.

[generator]: https://github.com/JJWesterkamp/ts-package-boilerplate/generate
