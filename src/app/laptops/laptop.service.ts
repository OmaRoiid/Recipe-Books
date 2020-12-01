import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';
import { Laptops } from './laptop.model';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {
  selectedItem=new EventEmitter<Laptops>()
private mRecipes:Laptops[]=[
  new Laptops("Big Mac",
  "Super Teasty Burger",
  "https://cf5.s3.souqcdn.com/item/2020/09/30/13/18/58/91/8/item_XL_131858918_9e887409ab129.jpg",[
    new Ingredient("Meat",2),
     new Ingredient("Fries",10),
  ] ),
   new Laptops("Big Mac",
  "Super Teasty Burger",
  "https://cf5.s3.souqcdn.com/item/2020/09/30/13/18/58/91/8/item_XL_131858918_9e887409ab129.jpg",[
    new Ingredient("Meat",2),
     new Ingredient("Fries",10),
  ] )
];
  constructor() { }
  getLaptops(){
    return this.mRecipes.slice();
  }
}
