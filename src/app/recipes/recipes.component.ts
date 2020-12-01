import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeService]
})
export class RecipesComponent implements OnInit {
 seleceRecipeToShow:Recipe
  constructor(private mRecipeService:RecipeService) {
  
}

  ngOnInit(): void {
    this.mRecipeService.selectedItem.subscribe(
      (mRecipe:Recipe)=>{
        this.seleceRecipeToShow=mRecipe
      }
    )
  }
  selectRecipe(rec:Recipe)
  {
    this.seleceRecipeToShow=rec
  }

}
