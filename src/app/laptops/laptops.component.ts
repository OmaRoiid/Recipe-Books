import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { LaptopService } from './laptop.service';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css'],
})
export class laptopsComponent implements OnInit{
  constructor() {
}

  ngOnInit(){
  }

}
