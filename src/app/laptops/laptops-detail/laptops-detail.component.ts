import { Component, Input, OnInit } from '@angular/core';
import { Laptops } from '../laptop.model';

@Component({
  selector: 'app-laptops-detail',
  templateUrl: './laptops-detail.component.html',
  styleUrls: ['./laptops-detail.component.css']
})
export class laptopsDetailComponent implements OnInit {
 @Input() mLaptopDetail:Laptops
 
  constructor() { 
  }

  ngOnInit(): void {
  }
onclick(obj){
console.log(obj)
}

}
