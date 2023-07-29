export class Linter {
  stack = [];

  lint(text: string): boolean {
    for(const char of text) {
      if(this.isOpeningBrace(char)) {
        this.stack.push(char);
      }

      if(this.isClosingBrace(char)) {
        const popedOpeningBrace = this.stack.pop();

        if(!popedOpeningBrace) {
          throw new Error(`${char} doesn't have opening brace`);
        }

        if (!this.isMatch(popedOpeningBrace, char)) {
          throw new Error(`${char} has mismatched opening brace`);
        }
      }
    }

    if (this.stack.length) {
      throw new Error(`${this.stack[this.stack.length - 1]} does not have closing brace`)
    }

    return true
  }

  isOpeningBrace(char: string): boolean{
    return ["(", "{", "["].includes(char);
  }

  isClosingBrace(char: string): boolean{
    return [")", "}", "]"].includes(char);
  }

  isMatch(openingBrace: string, closingBrace: string): boolean {
    return closingBrace === {
      '(': ')',
      '[': ']',
      '{': '}'
    }[openingBrace]
  }
}
