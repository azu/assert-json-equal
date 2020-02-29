# assert-json-equal

`assert.deepStrictEqual` for JSON object.

assert-json-equal provide a `assertJsonEqual` function.

`assert.deepStrictEqual` discriminate `undefined` value and missing property.

```js
const a = {};
const b = {
    undef: undefined
};
assert.throws(() => {
    assert.deepStrictEqual(a, b); // => throw
});
```

`assertJsonEqual` does not discriminate `undefined` value and missing property.
It is useful for comparing JSON objects.

```js
import { assertJsonEqual } from "assert-json-equal"
const a = {};
const b = {
    undef: undefined
};
assertJsonEqual(a, b); // => pass
```

## Install

Install with [npm](https://www.npmjs.com/):

    npm install assert-json-equal

## Usage

```ts
/**
 * `assert.deepStrictEqual` for JSON object.
 * Same API with `assert.deepStrictEqual(a, b, [message])`
 */
export declare const assertJsonEqual: (actual: any, expected: any, message?: string | Error | undefined) => void;
```

## Changelog

See [Releases page](https://github.com/azu/assert-json-equal/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/assert-json-equal/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](https://twitter.com/azu_re)

## License

MIT © azu
