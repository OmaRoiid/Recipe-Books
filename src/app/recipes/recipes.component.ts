import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
 seleceRecipeToShow:Recipe
  constructor() {
  
   console.log(this.seleceRecipeToShow)
   }

  ngOnInit(): void {
  }
  selectRecipe(rec:Recipe)
  {
    this.seleceRecipeToShow=rec
  }

}
