import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';
import { Laptops } from './laptop.model';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {
  laptopchanged=new Subject<Laptops[]>()
private mLaptops:Laptops[]=[
  new Laptops(
   0,
    "Big Mac",
      "https://cf5.s3.souqcdn.com/item/2020/09/30/13/18/58/91/8/item_XL_131858918_9e887409ab129.jpg",
  "Super Teasty Burger",
[
    new Ingredient("Meat",2),
     new Ingredient("Fries",10),
  ] ),
   new Laptops(
        1,
     "Big Mac",
      "https://cf5.s3.souqcdn.com/item/2020/09/30/13/18/58/91/8/item_XL_131858918_9e887409ab129.jpg",
  "Super Teasty Burger",
 [
    new Ingredient("Meat",2),
     new Ingredient("Fries",10),
  ] )
];
  constructor(private slService:ShoppingService) { }
  getLaptops(){
    return this.mLaptops.slice();
  }
    getLaptopById(id:number){
    return this.mLaptops[id];
  }
  addItemToShoppingList(ingreadnt:Ingredient[]){
this.slService.AddIngredients(ingreadnt)
  }
  addNewLapTop(mlapTop:Laptops){
this.mLaptops.push(mlapTop)
this.laptopchanged.next(this.mLaptops.slice())
  }
  updateLapTop(index:number,newLaptop:Laptops){
     this.mLaptops[index]=newLaptop
     this.laptopchanged.next(this.mLaptops.slice())

  }
  deleteLapTop(id:number){
    this.mLaptops.splice(id,1)
     this.laptopchanged.next(this.mLaptops.slice())
  }

}
