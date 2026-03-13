/**
 * From Base tests
 *
 * @license Apache-2.0
 */
import TestRegister from "../../lib/TestRegister.mjs";

TestRegister.addTests([
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
