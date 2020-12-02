import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Laptops } from '../laptop.model';
import { LaptopService } from '../laptop.service';

@Component({
  selector: 'app-laptops-detail',
  templateUrl: './laptops-detail.component.html',
  styleUrls: ['./laptops-detail.component.css']
})
export class laptopsDetailComponent implements OnInit {
 mLaptopDetail:Laptops
 id:number
 
  constructor( private laptopService:LaptopService,private route:ActivatedRoute,private router :Router) { 
  }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (prams:Params)=>{
      this.id= +prams["id"]
      this.mLaptopDetail=this.laptopService.getLaptopById(this.id)
      }
    )
  }
onclick(obj){
console.log(obj)
}
AddToShoppingList(){
this.laptopService.addItemToShoppingList(this.mLaptopDetail.ingread)
}
  onEditItem(){
    this.router.navigate(['edit'],{relativeTo:this.route})
  }

}
