import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {

  mRecipes:Recipe[];

  constructor(private mRecipeService:RecipeService) { }


  ngOnInit(): void {
this.mRecipes=this.mRecipeService.getRecipes();
  }
 

}
