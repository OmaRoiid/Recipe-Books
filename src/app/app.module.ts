import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { laptopsComponent } from './laptops/laptops.component';
import { laptopsListComponent } from './laptops/laptops-list/laptops-list.component';
import { laptopsDetailComponent } from './laptops/laptops-detail/laptops-detail.component';
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
import { AuthComponent } from './auth/auth.component';
import { AngularFireModule } from '@angular/fire';
import { SpinnerLoading } from './shared/loading-spinner/loading-spinner.component';
// For Firebase JavaScript SDK v7.20.0 and later,
var firebaseConfig = {
  apiKey: 'AIzaSyABZUFItXNmc_ZMbsKMwQwgXNubL7zUm_o',
  authDomain: 'techbooks-838de-default-rtdb.firebaseio.com',
  databaseURL: 'https://techbooks-838de-default-rtdb.firebaseio.com',
  projectId: 'techbooks-838de',
  storageBucket: 'techbooks-838de-default-rtdb.appspot.com',
  messagingSenderId: '527301800952',
  appId: '1:65211879909:web:3ae38ef1cdcb2e01fe5f0c',
};

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
    LaptopEditComponent,
    AuthComponent,
    SpinnerLoading,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AppRouting,
  ],
  providers: [ShoppingService, LaptopService],
  bootstrap: [AppComponent],
})
export class AppModule {}
