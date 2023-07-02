import {main  } from './main';

describe('test init', () => {
    it('should work', () => {
        expect(main()).toEqual('Hello World!');
    })
})
