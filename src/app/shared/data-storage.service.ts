import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { map,tap } from 'rxjs/operators'
import {HttpClient } from '@angular/common/http'
import { Laptops } from '../laptops/laptop.model';
import { LaptopService } from '../laptops/laptop.service';

 @Injectable({
providedIn:'root'
 })
 export class DataServiceStorage{
    constructor(private mHttpClient: HttpClient,private mLapTopService: LaptopService){

    }
    storeLapTops(){
    const lapTops=this.mLapTopService.getLaptops();
       //set a starter laptops data into the server 
    return this.mHttpClient.put('https://techbooks-838de-default-rtdb.firebaseio.com/laptops.json',lapTops,{
        observe:'response'
    })
}

 fetchLaptops(){
     return this.mHttpClient
     .get<Laptops[]>('https://techbooks-838de-default-rtdb.firebaseio.com/laptops.json')
     .pipe(map( laptops=>{
         return laptops.map( laptop=>{                                                    // cus ingredients is  option in the  add form and if it's empty 
                                                                                          // you should insure it will work will and not make a bug in the structure of the json file in firebase
             return {...laptop,ingredients:laptop.ingredients ? laptop.ingredients:[]}    // if it's empty set an empty arr filed in the  file jseon 
         })

     })
     ,tap(
         res=>{
             this.mLapTopService.setlapTops(res)
         })
     )
   
 }


}
