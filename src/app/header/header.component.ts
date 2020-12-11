import { Component } from '@angular/core';
import { from } from 'rxjs';
import { DataServiceStorage } from '../shared/data-storage.service';

 
@Component({
    selector:"app-header",
    templateUrl: "./header.component.html",
    styleUrls: ['./header.component.css']
})
export class HeaderComponent{
    constructor(private mDataStorageService:DataServiceStorage){}


    SaveDataIntoFireBase(){
        this.mDataStorageService.storeLapTops()
        .subscribe(
            res=>{
                if(res.status==200){
                    alert("Your Data saved Succssefully")
                }
            }
        )
}
onFetchLAptops(){
this.mDataStorageService.fetchLaptops().subscribe()
 alert("You get last updated data")
}

}