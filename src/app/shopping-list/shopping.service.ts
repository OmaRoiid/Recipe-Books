import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';
import {Subject} from 'rxjs'

@Injectable(
)
export class ShoppingService {
   mIngredientAdded = new Subject<Ingredient[]>();
   startedEditing= new Subject<number>()
    private ingredients: Ingredient[] = [
    new Ingredient('Dell', 5),
    new Ingredient('Mac', 10),
  ];
  constructor() { }

  getAllIngredients(){
    return this.ingredients;
  }
  getIngreadientsById(index:number)
  {
    return this.ingredients[index]

  }

   AddIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.mIngredientAdded.next(this.ingredients.slice())

  }
  AddIngredients(ingredient: Ingredient[]){
    this.ingredients.push(...ingredient)
     this.mIngredientAdded.next(this.ingredients.slice())
  }
  updateIngredient(index:number,newItem :Ingredient){
    this.ingredients[index]=newItem
    this.mIngredientAdded.next(this.ingredients.slice())
  }
  deleteIngredient(mIndex:number){
    this.ingredients.slice(mIndex,1)
      this.mIngredientAdded.next(this.ingredients.slice())
  }
}
