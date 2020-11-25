import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstLoadedPart="recipe"
  onAfterPartSelected(part:string){
   this.firstLoadedPart=part
  }
}
