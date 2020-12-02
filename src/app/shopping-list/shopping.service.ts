import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';

@Injectable(
)
export class ShoppingService {
   mIngredientAdded = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  constructor() { }

  getAllIngredients(){
    return this.ingredients;
  }

   AddIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.mIngredientAdded.emit(this.ingredients.slice())

  }
  AddIngredients(ingredient: Ingredient[]){
    this.ingredients.push(...ingredient)
     this.mIngredientAdded.emit(this.ingredients.slice())
  }
}
