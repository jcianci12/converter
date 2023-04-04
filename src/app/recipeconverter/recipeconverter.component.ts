import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RecipePipe } from '../recipe.pipe';

@Component({
  selector: 'app-recipeconverter',
  templateUrl: './recipeconverter.component.html',
  styleUrls: ['./recipeconverter.component.css'], providers: [RecipePipe]
})
export class RecipeconverterComponent implements OnInit {
  recipe = new Recipe()
  _ratio: number
  get ratio() {
    return this._ratio
  }
  set ratio(val) {
    this._ratio = val
  }



  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.recipe = { "ingredients": [{ name: "Flour", amount: 1, ratio: true, unit: "servings" }, { "name": "Eggs", amount: 1, ratio: true, unit: "servings" }] }
    this.ratio = 1
  }

  addIngredient() {
    this.recipe.ingredients.push(new Ingredient("New ingredient", 1))
    this.updateIngredients()
  }

  updateItem(item, index) {
    console.log(item, index)
    this.recipe.ingredients[index] = item
    this.updateIngredients()
  }

  updateIngredients() {
    const newobj = Object.assign(new Recipe(), this.recipe)
    this.recipe = newobj
    this.ratio++
    this.cdr.detectChanges()
    this.ratio--

  }

  updateRatio(value: any) {
    console.log(value)
    this.ratio = value
  }
  removeIngredient(index) {
    console.log(index)
    this.recipe.ingredients.splice(index, 1)
    this.updateIngredients()
  }

  // get ratio() {
  //   return this._ratio
  // }
  // set ratio(value: number) {
  //   this._ratio = value
  //   // this.convertedRecipe.ingredients = new RecipePipe().transform(this.recipe.ingredients,this._ratio)

  //   console.log("_ratio",this._ratio,this.recipe,this.convertedRecipe)
  // }

}

export class Recipe {
  constructor() {
    this.ingredients = []
  }
  ingredients: Array<Ingredient>
}
export class Ingredient {
  constructor(name, amount) {
    this.name = name
    this.amount = amount

  }
  ratio: boolean
  name: string
  amount: number
  unit: string
}
