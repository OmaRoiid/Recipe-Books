import { NgForOfContext } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Laptops } from '../laptop.model';
import { LaptopService } from '../laptop.service';

@Component({
  selector: 'app-laptop-edit',
  templateUrl: './laptop-edit.component.html',
  styleUrls: ['./laptop-edit.component.css']
})
export class LaptopEditComponent implements OnInit {
editableItemID:number
editableMode=false
 laptopForm :FormGroup;
  constructor( private route:ActivatedRoute,private mLapTopService:LaptopService, private router :Router) { }

  ngOnInit(): void {
    this.route.params
    .subscribe( 
      (params:Params)=>{
        this.editableItemID= +params['id']
        this.editableMode =params['id'] !=null
        this.onInitForm()
        
      }
    )
  }
  onInitForm(){
     let lapTopId:number;
    let lapTopname='';
    let lapTopImage='';
    let lapTopDesc='';
    let lapTopsIngredients= new FormArray([])
    if( this.editableMode){
      const currentLapTop=this.mLapTopService.getLaptopById(this.editableItemID)
      lapTopId=this.editableItemID
      lapTopname=currentLapTop.mLapName;
      lapTopImage=currentLapTop.mLapImg;
      lapTopDesc=currentLapTop.mLapDesc;
      if(currentLapTop['ingredients']){
        for(let i of currentLapTop.ingredients){
          lapTopsIngredients.push(
            new FormGroup(
              {name : new FormControl(i.name,Validators.required),
               amount: new FormControl(i.amount,[
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)])
              }
            )
          )
        }

      }
    }
    this.laptopForm= new FormGroup(
      {
        'mID':new FormControl(lapTopId,Validators.required),
        'mLapName':new FormControl(lapTopname,Validators.required),
        'mLapImg':new FormControl(lapTopImage,Validators.required),
        'mLapDesc':new FormControl(lapTopDesc,Validators.required),
        'ingredients':lapTopsIngredients
      }
    )
  }
get controls() { 
  return (<FormArray>this.laptopForm.get('ingredients')).controls;
}
AddNewIngredient()
{
   (<FormArray>this.laptopForm.get('ingredients')).push(
    new FormGroup(
      {
        "name":new FormControl(null,Validators.required),
        "amount":new FormControl(null,[
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)])
      }
    )
  )
}
onSubmit(){
console.log(this.laptopForm.value)
  if(this.editableMode){
    this.mLapTopService.updateLapTop(this.editableItemID,this.laptopForm.value)
  }
  else{
    this.mLapTopService.addNewLapTop(this.laptopForm.value)
  }
  this.router.navigate(['../'],{relativeTo:this.route})
}
onCancel(){
this.router.navigate(['../'],{relativeTo:this.route})
}
onDeleteIng(index:number)
{
  (<FormArray>this.laptopForm.get('ingredients')).removeAt(index)

}

}
