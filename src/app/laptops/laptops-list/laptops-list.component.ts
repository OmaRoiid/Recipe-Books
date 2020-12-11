import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Laptops } from '../laptop.model';
import { LaptopService } from '../laptop.service';



@Component({
  selector: 'app-laptops-list',
  templateUrl: './laptops-list.component.html',
  styleUrls: ['./laptops-list.component.css'],
})
export class laptopsListComponent implements OnInit,OnDestroy {
subscription:Subscription
  mLaps:Laptops[];

  constructor(private mLapTopService:LaptopService,private route:ActivatedRoute,private router :Router) { }



  ngOnInit(): void {
   this.subscription= this.mLapTopService.laptopchanged.subscribe(
      (newLaptops:Laptops[])=>{
        this.mLaps=newLaptops
      }
    )
this.mLaps=this.mLapTopService.getLaptops();
  }
  OnNewLapAdded(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }
 
  ngOnDestroy(): void {
  this.subscription.unsubscribe()
}
}
