import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  selectedItem=new EventEmitter<Recipe>()
private mRecipes:Recipe[]=[
  new Recipe("Big Mac",
  "Super Teasty Burger",
  "https://cf5.s3.souqcdn.com/item/2020/09/30/13/18/58/91/8/item_XL_131858918_9e887409ab129.jpg",[
    new Ingredient("Meat",2),
     new Ingredient("Fries",10),
  ] ),
   new Recipe("Big Mac",
  "Super Teasty Burger",
  "https://cf5.s3.souqcdn.com/item/2020/09/30/13/18/58/91/8/item_XL_131858918_9e887409ab129.jpg",[
    new Ingredient("Meat",2),
     new Ingredient("Fries",10),
  ] )
];
  constructor() { }
  getRecipes(){
    return this.mRecipes.slice();
  }
}
