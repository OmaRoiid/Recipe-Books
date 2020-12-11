import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule}   from '@angular/forms';
import{ HttpClientModule} from '@angular/common/http'
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
import { AppRouting } from './app-route.module';
import { LaptopsStateComponent } from './laptops/laptops-state/laptops-state.component';
import { LaptopEditComponent } from './laptops/laptop-edit/laptop-edit.component';
import { LaptopService } from './laptops/laptop.service';



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
    DropDownDirective,
    LaptopsStateComponent,
    LaptopEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRouting
  ],
  providers: [ShoppingService,LaptopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
