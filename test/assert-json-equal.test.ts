import { assertJsonEqual } from "../src/assert-json-equal";
import * as assert from "assert";

describe('assertJsonEqual', function () {
    it("should compare objects with deepStrictEqual", () => {
        assertJsonEqual({a: {b: {c: 1}}}, {a: {b: {c: 1}}});
    });
    it("should ignore difference between undefined value and missing property", () => {
        const a = {};
        const b = {
            undef: undefined
        };
        assertJsonEqual(a, b);
    });
    it("Example assert.deepStrictEqual", () => {
        const a = {};
        const b = {
            undef: undefined
        };
        assert.throws(() => {
            assert.deepStrictEqual(a, b);
        });
    });
});
