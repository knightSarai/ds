import {Linter} from './linter';

describe("linter", () => {
  let linter: Linter;

  beforeEach(() => {linter = new Linter()});

  it('should return true a valid JS passed', () => {
    expect(linter.lint('const obj = {array: [1, 2, 3]}')).toEqual(true);
  })

  it('should throw an error if a closing brace is missing', () => {
    expect(() => linter.lint('const obj = {array: [1, 2, 3]')).toThrowError('{ does not have closing brace');
  })

  it('should throw an error if an opening brace is missing', () => {
    expect(() => linter.lint('const obj = array: [1, 2, 3]}')).toThrowError("} doesn't have opening brace");
  });

  it('should throw an error if a closing brace is mismatched', () => {
    expect(() => linter.lint('const obj = {array: [1, 2, 3))')).toThrowError(') has mismatched opening brace');
  });

})
