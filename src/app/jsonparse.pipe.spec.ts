import { JSONparsePipe } from './jsonparse.pipe';

describe('JSONparsePipe', () => {
  it('create an instance', () => {
    const pipe = new JSONparsePipe();
    expect(pipe).toBeTruthy();
  });
});
