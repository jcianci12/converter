import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ingredient } from '../recipeconverter.component';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {
  @Input() readonly: boolean
  _ingredient
  @Input() set ingredient(val: Ingredient) {
    this._ingredient = val
  }
  @Output() deleteIngredient = new EventEmitter()

  get ingredient() {
    return this._ingredient
  }



  @Output() updateIngredient = new EventEmitter<Ingredient>()
  constructor() { }

  ngOnInit(): void {
  }

  updateAmount(val) {
    this.ingredient.amount = val
    this.updateIngredient.emit(this._ingredient)
  }

  updateName(val) {
    this.ingredient.name = val
    this.updateIngredient.emit(this._ingredient)
  }
  removeIngredient() {
    console.log("emitting")
    this.deleteIngredient.emit()
  }


}
