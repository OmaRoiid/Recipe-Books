import { Component, OnInit } from '@angular/core';
import { Laptops } from './laptop.model';
import { LaptopService } from './laptop.service';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css'],
  providers:[LaptopService]
})
export class laptopsComponent implements OnInit {
 seleceLaptopsToShow:Laptops
  constructor(private mLapTopService:LaptopService) {
  
}

  ngOnInit(): void {
    this.mLapTopService.selectedItem.subscribe(
      (mRecipe:Laptops)=>{
        this.seleceLaptopsToShow=mRecipe
      }
    )
  }
  selectRecipe(rec:Laptops)
  {
    this.seleceLaptopsToShow=rec
  }

}
