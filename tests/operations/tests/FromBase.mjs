/**
 * From Base tests
 *
 * @license Apache-2.0
 */
import TestRegister from "../../lib/TestRegister.mjs";

TestRegister.addTests([
    {
        name: "From Base: binary integer",
        input: "1010",
        expectedOutput: "10",
        recipeConfig: [
            {
                op: "From Base",
                args: [2]
            },
        ],
    },
    {
        name: "From Base: decimal integer",
        input: "42",
        expectedOutput: "42",
        recipeConfig: [
            {
                op: "From Base",
                args: [10]
            },
        ],
    },
    {
        name: "From Base: hexadecimal integer",
        input: "A",
        expectedOutput: "10",
        recipeConfig: [
            {
                op: "From Base",
                args: [16]
            },
        ],
    },
    {
        name: "From Base: binary fraction",
        input: "10.1",
        expectedOutput: "2.5",
        recipeConfig: [
            {
                op: "From Base",
                args: [2]
            },
        ],
    },
    {
        name: "From Base: hexadecimal fraction",
        input: "A.F",
        expectedOutput: "10.9375",
        recipeConfig: [
            {
                op: "From Base",
                args: [16]
            },
        ],
    },
]);
