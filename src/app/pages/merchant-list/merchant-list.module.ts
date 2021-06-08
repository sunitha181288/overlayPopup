import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MerchantListComponent} from './merchant-list.component';
import { MerchantListRoutingModule } from './merchant-list-routing.module';
import { MerchantItemComponent } from '@components/merchant-item/merchant-item.component';
import { OverlayComponent } from '@components/overlay/overlay.component';
import { MerchantPopupComponent } from '@components/merchant-popup/merchant-popup.component'
import { MaterialModule } from '@app/material.module';
import { from } from 'rxjs';

@NgModule({
  declarations: [MerchantListComponent,MerchantItemComponent, OverlayComponent, MerchantPopupComponent],
  imports: [
    CommonModule,
    MerchantListRoutingModule,
    MaterialModule
  ],
  entryComponents: [OverlayComponent, MerchantPopupComponent]
})
export class MerchantListModule { }
