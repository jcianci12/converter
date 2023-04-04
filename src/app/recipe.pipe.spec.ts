import { RecipePipe } from './recipe.pipe';

describe('RecipePipe', () => {
  it('create an instance', () => {
    const pipe = new RecipePipe();
    expect(pipe).toBeTruthy();
  });
});
