# eslint-plugin-bignumber

[![NPM](https://img.shields.io/npm/v/eslint-plugin-bignumber.svg)](https://www.npmjs.com/package/eslint-plugin-bignumber)

Enforces use of [BigNumber](https://www.npmjs.com/package/bignumber.js) instead of `parseFloat`.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```console
$ yarn add -D eslint-plugin-bignumber
```

## Usage

Add `bignumber` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["bignumber"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "bignumber/no-parsefloat": "error"
  }
}
```

You can also extend the recommended configuration (defaults to `warn`).

```json
{
  "plugins": ["bignumber"],
  "extends": ["plugin:bignumber/recommended"]
}
```

## License

(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
