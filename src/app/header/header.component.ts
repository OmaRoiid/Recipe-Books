import { Component, EventEmitter, Output } from '@angular/core';
import { from } from 'rxjs';

 
@Component({
    selector:"app-header",
    templateUrl: "./header.component.html",
    styleUrls: ['./header.component.css']
})
export class HeaderComponent{
@Output() partSelected=new EventEmitter<string>()

    onSelect(part:string)
    {
        this.partSelected.emit(part)
    }
}