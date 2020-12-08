import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingredient } from '../../shared/Ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit ,OnDestroy{
  @ViewChild('mForm',{static:false}) mForm :NgForm
  mSubscrirption:Subscription
  editMode=false;
  editedItem: Ingredient;
  editItemIndex:number;
  constructor(private mShoppingService:ShoppingService) { }


  ngOnInit() {
   this.mSubscrirption= this.mShoppingService.startedEditing
    .subscribe(
      (index:number)=>{
        this.editMode=true;
        this.editItemIndex=index;
        this.editedItem=this.mShoppingService.getIngreadientsById(index)
        this.mForm.setValue({
          name:this.editedItem.name,
          amount:this.editedItem.amount
        })
      }
    )
  }

  onAddNewItem(form :NgForm) {
    const valueOfForm=form.value
    const newIngredient = new Ingredient(valueOfForm.name, valueOfForm.amount);
    if(this.editMode){
      this.mShoppingService.updateIngredient(this.editItemIndex,newIngredient)
      return
    }
    this.mShoppingService.AddIngredient(newIngredient)
  }
  onCLearForm(){
this.mForm.reset()
this.editMode=false
  }
  onDeleteItem(){
    this.mShoppingService.deleteIngredient(this.editItemIndex)
    this.onCLearForm()
    
  }
    ngOnDestroy() {
    this.mSubscrirption.unsubscribe()

}
}
