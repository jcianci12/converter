import { IsnullPipe } from './isnull.pipe';

describe('IsnullPipe', () => {
  it('create an instance', () => {
    const pipe = new IsnullPipe();
    expect(pipe).toBeTruthy();
  });
});
