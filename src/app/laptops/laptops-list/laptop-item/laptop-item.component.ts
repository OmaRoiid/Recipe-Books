import { Component, Input, OnInit } from '@angular/core';
import { Laptops } from '../../laptop.model';
import { LaptopService } from '../../laptop.service';


@Component({
  selector: 'app-laptop-item',
  templateUrl: './laptop-item.component.html',
  styleUrls: ['./laptop-item.component.css']
})
export class laptopsItemComponent implements OnInit {
  @Input() mLaptopItem:Laptops

  constructor(private mLapTopService:LaptopService) {

   }

  ngOnInit(): void {
  }
  onRecpieSlected(){
  this.mLapTopService.selectedItem.emit(this.mLaptopItem)
  }

}
