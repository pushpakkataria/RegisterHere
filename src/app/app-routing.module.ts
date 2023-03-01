import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HrrComponent } from './mod/hrr/hrr.component';
import { SellerComponent } from './seller/seller.component';

const routes: Routes = [
  {
    path: 'Home', component: HomeComponent
  },
  {
    path: 'seller', component: SellerComponent
  },
  {path:'hrr',component:HrrComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
