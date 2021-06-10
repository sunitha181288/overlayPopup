import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AppOverlayRef } from '@app/overlay-ref';
import { HttpService } from '@services/http.service';


@Component({
  selector: 'app-merchant-popup',
  templateUrl: './merchant-popup.component.html',
  styleUrls: ['./merchant-popup.component.scss']
})
export class MerchantPopupComponent implements OnInit {
  constructor(private appOverlayRef: AppOverlayRef, private httpService: HttpService) { }
  merchantData;
  merchantOffer;

  ngOnInit(): void {
    this.merchantData = this.appOverlayRef.data;
    this.loadOffer();
  }
  
  async loadOffer() {
    this.merchantOffer = await this.httpService.fetchOffers(this.merchantData.offerId);
  }

}
