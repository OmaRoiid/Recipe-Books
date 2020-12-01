import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  mIngredients: Ingredient[]

  constructor( private mShoppingService:ShoppingService) { }

  ngOnInit() {
    this.mIngredients=this.mShoppingService.getAllIngredients()
    this.mShoppingService.mIngredientAdded.subscribe(
      (mNewItem:Ingredient[])=>{
        this.mIngredients=mNewItem
      }
    )
  }
}
