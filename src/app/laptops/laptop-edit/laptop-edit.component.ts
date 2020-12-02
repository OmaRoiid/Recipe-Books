import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-laptop-edit',
  templateUrl: './laptop-edit.component.html',
  styleUrls: ['./laptop-edit.component.css']
})
export class LaptopEditComponent implements OnInit {
editableItemID:number
editableMode=false
  constructor( private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params:Params)=>{
        this.editableItemID= +params['id']
        this.editableMode =params['id'] !=null
        
      }
    )
  }


}
