const { clearNpmCache, runJestCommand } = require('../helpers');

beforeEach(async () => {
  await clearNpmCache(__dirname);
});

afterAll(async () => {
  await clearNpmCache(__dirname);
});

test('jest script', async () => {
  const result = await runJestCommand(__dirname);

  // Test Jest config in package.json is working
  expect(result).toContain("Running 'setupFilesAfterEnv'");
  // Ensure Jest ran the included tests successfully
  expect(result).not.toMatch(/failed/);
});
