import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';
import { Laptops } from './laptop.model';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {
  laptopchanged=new Subject<Laptops[]>() //helps you to subscribe from out side  the  class and get updated wthis  the  new  data 
private mLaptops:Laptops[];
  constructor(private slService:ShoppingService) { }

  //add new laptops from the server 
  setlapTops(newLaptops:Laptops[]){
  this.mLaptops=newLaptops
  this.laptopchanged.next(this.mLaptops.slice())
  }
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
