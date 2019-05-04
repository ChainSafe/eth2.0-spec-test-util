export declare function describeSpecTest(
  testYamlPath: string,
  testFunc: Function,
  getInput?: (testCase: any) => any[],
  getExpected?: (testCase: any) => any,
  getActual?: (result: any) => any,
  shouldError?: (testCase: any, index: number, testSpec: any) => boolean,
  shouldSkip?: (testCase: any, index: number, testSpec: any) => boolean,
): void
