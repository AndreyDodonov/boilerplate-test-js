import assert from 'node:assert';
import { testOfTests } from '../src/index.js';

try {
  assert.strictEqual(testOfTests([1, 2, 3]), 6);
  assert.strictEqual(testOfTests([-1, 5, 0]), 4);
  assert.strictEqual(testOfTests([]), 0);
  console.log("all tests is done!");
} catch (err) {
  console.error("test is bad", err.message);
  process.exit(1);
}