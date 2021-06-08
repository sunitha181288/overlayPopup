import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-merchant-item',
  templateUrl: './merchant-item.component.html',
  styleUrls: ['./merchant-item.component.scss']
})
export class MerchantItemComponent implements OnInit {
  @Output() merchantView = new EventEmitter();
  @Input() merchant:any;
  constructor() { }

  ngOnInit(): void {
  }

  onClickCard() {
    this.merchantView.emit(this.merchant);
  }

}
