import { Ingredient } from '../shared/Ingredient.model';

export class Laptops{
constructor(public mID:number,public mLapName:string,public mLapDesc: string,public mLapImg: string, public ingread :Ingredient[]){}
}