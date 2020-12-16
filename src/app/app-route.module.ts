import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { LaptopEditComponent } from './laptops/laptop-edit/laptop-edit.component';
import { laptopsDetailComponent } from './laptops/laptops-detail/laptops-detail.component';
import { LaptopsStateComponent } from './laptops/laptops-state/laptops-state.component';
import { laptopsComponent } from './laptops/laptops.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
const appRoute: Routes = [
  { path: '', redirectTo: '/laptops', pathMatch: 'full' },
  {
    path: 'laptops',
    component: laptopsComponent,
    canActivate:[AuthGuard],
    children: [
      { path: '', component: LaptopsStateComponent },
      { path: 'new', component: LaptopEditComponent },
      { path: ':id', component: laptopsDetailComponent },
      { path: ':id/edit', component: LaptopEditComponent },
    ],
  },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'auth', component: AuthComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule],
})
export class AppRouting {}
