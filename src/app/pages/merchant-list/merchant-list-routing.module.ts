import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MerchantListComponent } from './merchant-list.component';

const routes: Routes = [{
  path: '',
  component: MerchantListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchantListRoutingModule { }
