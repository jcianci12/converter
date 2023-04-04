import { Pipe, PipeTransform } from '@angular/core';
import { Ingredient } from './recipeconverter/recipeconverter.component';

@Pipe({
  name: 'recipePipe'
})
export class RecipePipe implements PipeTransform {

  transform(ing: Ingredient[], ratio: number): Ingredient[] {
    const newINgredients = ing.map(r => {

      return Object.assign({}, r, {
        amount: r.amount * ratio
      })
    })
    return newINgredients
  }

}
