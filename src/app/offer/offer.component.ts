import { Component, OnInit } from '@angular/core';
import { OfferService } from '../service/offer.service';
import { product } from '../classes/product';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  pro_arr:product[]=[];

  constructor(private _offer:OfferService) { }

  ngOnInit() {
    this._offer.getHighRatedProduct().subscribe(
      (data:any)=>{
          this.pro_arr=data;
          console.log(data);
      }
    );
  }

}
