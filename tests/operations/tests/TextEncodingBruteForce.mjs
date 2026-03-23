/**
 * Text Encoding Brute Force tests.
 *
 * @author Cynser
 *
 * @copyright Crown Copyright 2018
 * @license Apache-2.0
 */
import TestRegister from "../../lib/TestRegister.mjs";

TestRegister.addTests([
    {
        name: "Text Encoding Brute Force - Encode",
        input: "Р‘СѓР»РєС– РїСЂР°Р· Р»СЏРЅС–РІР° СЃР°Р±Р°РєСѓ.",
        expectedMatch: /Windows-1251 Cyrillic \(1251\).{1,10}Булкі праз ляніва сабаку\./,
        recipeConfig: [
            {
                op: "Text Encoding Brute Force",
                args: ["Encode"],
            },
        ],
    },
    {
        name: "Text Encoding Brute Force - Decode",
        input: "Áóëê³ ïðàç ëÿí³âà ñàáàêó.",
        expectedMatch: /Windows-1251 Cyrillic \(1251\).{1,10}Булкі праз ляніва сабаку\./,
        recipeConfig: [
            {
                op: "Text Encoding Brute Force",
                args: ["Decode"],
            },
        ],
    },
    {
        name: "Text Encoding Brute Force - Decode UTF-8 bytes",
        // The bytes 63 61 66 c3 a9 ("café" in UTF-8), as a byte string.
        input: "caf\u00c3\u00a9",
        expectedMatch: /IBM EBCDIC International \(500\).{1,10}Ä\/ÃCz/,
        recipeConfig: [
            {
                op: "Text Encoding Brute Force",
                args: ["Decode"],
            },
        ],
    }
]);

