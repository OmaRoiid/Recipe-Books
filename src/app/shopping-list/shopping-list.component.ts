import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  mIngredients: Ingredient[]
  private igChanged:Subscription

  constructor( private mShoppingService:ShoppingService) { }
 

  ngOnInit() {
    this.mIngredients=this.mShoppingService.getAllIngredients()
    this.igChanged=this.mShoppingService.mIngredientAdded.subscribe(
      (mNewItem:Ingredient[])=>{
        this.mIngredients=mNewItem
      }
    )
  }

  OnEditItem(index:number){
    this.mShoppingService.startedEditing.next(index)
  
  }
  ngOnDestroy(): void {
  this.igChanged.unsubscribe();
  }
}
