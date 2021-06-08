import { Component, OnInit } from '@angular/core';
import { HttpService } from '@services/http.service';
import { OverlayService } from '@services/overlay.service'
import { MerchantPopupComponent} from '@components/merchant-popup/merchant-popup.component'


@Component({
  selector: 'app-merchant-list',
  templateUrl: './merchant-list.component.html',
  styleUrls: ['./merchant-list.component.scss']
})
export class MerchantListComponent implements OnInit {
  public merchantList: any;
  constructor(private httpService:HttpService, private overlayService: OverlayService) { }

  ngOnInit(): void {
/*   this.httpService.fetchMerchantList().subscribe ((data) => {
      console.log(data);
      this.merchantList = data;

     }) */

     this.merchantList = this.httpService.fetchMerchantList(); //async 
  }

  open(data) {
    console.log(data);
     const ref = this.overlayService.open(MerchantPopupComponent, data);

    ref.afterClosed$.subscribe(res => {
    
    }); 
  }

}
