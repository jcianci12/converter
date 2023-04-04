import { JsontocsvPipe } from './jsontocsv.pipe';

describe('JsontocsvPipe', () => {
  it('create an instance', () => {
    const pipe = new JsontocsvPipe();
    expect(pipe).toBeTruthy();
  });
});
