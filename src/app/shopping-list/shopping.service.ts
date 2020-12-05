import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';
import {Subject} from 'rxjs'

@Injectable(
)
export class ShoppingService {
   mIngredientAdded = new Subject<Ingredient[]>();
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
    this.mIngredientAdded.next(this.ingredients.slice())

  }
  AddIngredients(ingredient: Ingredient[]){
    this.ingredients.push(...ingredient)
     this.mIngredientAdded.next(this.ingredients.slice())
  }
}
