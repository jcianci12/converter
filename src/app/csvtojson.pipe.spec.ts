import { CsvtojsonPipe } from './csvtojson.pipe';

describe('CsvtojsonPipe', () => {
  it('create an instance', () => {
    const pipe = new CsvtojsonPipe();
    expect(pipe).toBeTruthy();
  });
});
