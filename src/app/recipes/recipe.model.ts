import { Ingredient } from '../shared/Ingredient.model';

export class Recipe{
constructor(public mRecipeName:string,public mRecipeDesc: string,public mRecipeImg: string, public ingread :Ingredient[]){}
}