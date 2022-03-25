import { generateHelloWorld } from '@lib/helper/helloworld';

describe('Generate Hello World', () => {
  it('should return Hello World!', () => {
    expect(generateHelloWorld()).toBe('Hello World!');
  });
});
