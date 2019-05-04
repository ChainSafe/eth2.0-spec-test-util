export declare function describeSpecTest(
  testYamlPath: string,
  testFunc: Function,
  getInput?: (any) => any[],
  getExpected?: (any) => any,
  getActual?: (any) => any,
  shouldError?: (any, number, any) => boolean,
  shouldSkip?: (any, index, any) => boolean,
)
