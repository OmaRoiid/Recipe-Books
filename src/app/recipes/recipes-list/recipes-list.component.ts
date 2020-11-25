import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() selectedRecipe=new EventEmitter<Recipe>()
mRecipes:Recipe[]=[
  new Recipe("Test","This is  tast","https://cf3.s3.souqcdn.com/item/2020/09/17/13/18/03/41/8/item_L_131803418_a44a48ac5152b.jpg"),
  new Recipe("Test","This is  tast","https://cf3.s3.souqcdn.com/item/2020/09/17/13/18/03/41/8/item_L_131803418_a44a48ac5152b.jpg")
];
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(mPassedRecipe:Recipe){
  this.selectedRecipe.emit(mPassedRecipe)
  }

}
