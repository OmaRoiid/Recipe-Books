import { Component, OnInit } from '@angular/core';
import { Laptops } from '../laptop.model';
import { LaptopService } from '../laptop.service';



@Component({
  selector: 'app-laptops-list',
  templateUrl: './laptops-list.component.html',
  styleUrls: ['./laptops-list.component.css'],
})
export class laptopsListComponent implements OnInit {

  mLaps:Laptops[];

  constructor(private mLapTopService:LaptopService) { }


  ngOnInit(): void {
this.mLaps=this.mLapTopService.getLaptops();
  }
 

}
