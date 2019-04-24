import { Component, OnInit } from '@angular/core';
import { OfferService } from '../service/offer.service';
import { product } from '../classes/product';
import { ProductserviceService } from '../service/productservice.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  pro_arr:product[]=[];

  constructor(private _pro:ProductserviceService) { }

  ngOnInit() {
    this._pro.getAllProduct().subscribe(
      (data:any)=>{
          this.pro_arr=data;
          console.log(data);
      }
    );
  }

}
