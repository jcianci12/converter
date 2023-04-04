import { ValidjsonPipe } from './validjson.pipe';

describe('ValidjsonPipe', () => {
  it('create an instance', () => {
    const pipe = new ValidjsonPipe();
    expect(pipe).toBeTruthy();
  });
});
