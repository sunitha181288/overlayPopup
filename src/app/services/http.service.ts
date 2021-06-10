import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment/environment';
import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  fetchMerchantList () {
    return this.httpClient.get<Array<any>>('assets/stub/merchant.json');

  }

  fetchOffers (id) {
    return new Promise((resolve, reject) => {
   
    return this.httpClient.get<Array<any>>('assets/stub/offer.json').subscribe((result) => {
      console.log(result);
      const filterOffer = result.find((offerItem) => {
        return offerItem.offerId === id;
        console.log(filterOffer);
      })
      resolve(filterOffer);

    },reject)
  }); 

  
  }
}
