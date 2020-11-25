import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
 @Input() recipe:Recipe
 
  constructor() { 
    console.log(this.recipe)
  }

  ngOnInit(): void {
  }
onclick(ss){
console.log(ss)
}

}
