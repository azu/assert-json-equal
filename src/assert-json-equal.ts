import assert from "assert";

const normalizeJSON = <T extends any>(json: T) => {
    return JSON.parse(JSON.stringify(json));
};
/**
 * `assert.deepStrictEqual` for JSON object.
 * Same API with `assert.deepStrictEqual(a, b, [message])`
 * @param actual
 * @param expected
 * @param message
 */
export const assertJsonEqual = (actual: any, expected: any, message?: string | Error) => {
    assert.deepStrictEqual(normalizeJSON(actual), normalizeJSON(expected), message);
};
