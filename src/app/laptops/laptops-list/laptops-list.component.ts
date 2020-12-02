import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Laptops } from '../laptop.model';
import { LaptopService } from '../laptop.service';



@Component({
  selector: 'app-laptops-list',
  templateUrl: './laptops-list.component.html',
  styleUrls: ['./laptops-list.component.css'],
})
export class laptopsListComponent implements OnInit {

  mLaps:Laptops[];

  constructor(private mLapTopService:LaptopService,private route:ActivatedRoute,private router :Router) { }


  ngOnInit(): void {
this.mLaps=this.mLapTopService.getLaptops();
  }
  OnNewLapAdded(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }
 

}
