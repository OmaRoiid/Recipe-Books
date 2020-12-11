import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

import { DataServiceStorage } from '../shared/data-storage.service';
import { LaptopService } from './laptop.service';
import { Laptops } from './laptop.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
//the resolver will suvscribe   on the streem of data
export class LaptopResolverService implements Resolve<Laptops[]> {
  constructor(
    private dataStorageService: DataServiceStorage,
    private mLaptopService: LaptopService
  ) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const laptops = this.mLaptopService.getLaptops();
    if (laptops.length === 0) {
      return this.dataStorageService.fetchLaptops();
    } else {
      return laptops;
    }
  }
}
