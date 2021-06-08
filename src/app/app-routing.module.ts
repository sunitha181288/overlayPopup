import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  redirectTo: 'merchant-list',
  pathMatch: 'full'
}, {
  path: 'merchant-list',
  loadChildren: () => import('./pages/merchant-list/merchant-list.module').then(m => m.MerchantListModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
