import SetDifference from "./src/core/operations/SetDifference.mjs";
import SetIntersection from "./src/core/operations/SetIntersection.mjs";

console.log("=== Current Behavior ===\n");

// Test 1: Set Difference with duplicates
const diff = new SetDifference();
const input1 = "red,red,blue\n\nblue";
const result1 = diff.run(input1, ["\n\n", ","]);
console.log("Set Difference:");
console.log("  Input: 'red,red,blue' - 'blue'");
console.log("  Expected: 'red'");
console.log("  Actual:  '" + result1 + "'");
console.log("  Issue: Preserves duplicates\n");

// Test 2: Set Intersection with duplicates
const inter = new SetIntersection();
const input2 = "red,red,blue\n\nred,blue";
const result2 = inter.run(input2, ["\n\n", ","]);
console.log("Set Intersection:");
console.log("  Input: 'red,red,blue' ∩ 'red,blue'");
console.log("  Expected: 'red,blue'");
console.log("  Actual:  '" + result2 + "'");
console.log("  Issue: Preserves duplicates from first set\n");

// Additional test case from issue
const input3 = "y,y,z\n\ny";
const result3 = inter.run(input3, ["\n\n", ","]);
console.log("Set Intersection (issue case):");
console.log("  Input: 'y,y,z' ∩ 'y'");
console.log("  Expected: 'y'");
console.log("  Actual:  '" + result3 + "'");
