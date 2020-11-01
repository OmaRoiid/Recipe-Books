import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
   mIngredients:Ingredient[]=[
     new Ingredient("apples",5),
     new Ingredient("banana",10)
   ];

  constructor() { }

  ngOnInit(): void {
  }

}
