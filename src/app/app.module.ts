import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule}   from '@angular/forms';
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {laptopsComponent } from './laptops/laptops.component';
import {laptopsListComponent} from './laptops/laptops-list/laptops-list.component';
import{laptopsDetailComponent} from './laptops/laptops-detail/laptops-detail.component'
import { laptopsItemComponent } from './laptops/laptops-list/laptop-item/laptop-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { from } from 'rxjs';
import { DropDownDirective } from './shared/dropdown.directive';
import { ShoppingService } from './shopping-list/shopping.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    laptopsComponent,
    laptopsListComponent,
    laptopsDetailComponent,
    laptopsItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropDownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
