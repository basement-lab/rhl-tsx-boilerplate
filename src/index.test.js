
const _env = 'test';

/** ************************************************************************* */

it(`Ensure process.env.NODE_ENV is '${_env}'`, () => {
  expect(process.env.NODE_ENV).toEqual(_env);
});

it(`Ensure process.env.BABEL_ENV is '${_env}'`, () => {
  expect(process.env.BABEL_ENV).toEqual(_env);
});

it('Ensure __DEV__ is in the global namespace', () => {
  expect(__DEV__).toBeDefined();
});

it('Ensure DEBUG is in the global namespace', () => {
  expect(DEBUG).toBeDefined();
});
