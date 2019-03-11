import { Component, OnInit } from '@angular/core';
import { product } from '../classes/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductserviceService } from '../service/productservice.service';

@Component({
  selector: 'app-compareproduct',
  templateUrl: './compareproduct.component.html',
  styleUrls: ['./compareproduct.component.css']
})
export class CompareproductComponent implements OnInit {
flag:boolean=true;
flag1:boolean=false;
pro_id:number;
  pro_id1:number;
  pro_arr:product[]=[];
  pro_name:string;
  pro_arr1:product[]=[];
  pro_arr2:product[]=[];

  constructor(private _pro:ProductserviceService,private _router:Router,private _acroute:ActivatedRoute) { }
  addform(f){}
  onChange(){

  }
  onAdd()
  {
      if (this.flag1) {
        this.flag1=false;
      } else {
        this.flag1=true;
      }
      this._pro.getProductById(this.pro_id).subscribe(
        (data:any)=>{
          this.pro_arr1=data;
        }
      );
      this._pro.getProductById(this.pro_id1).subscribe(
        (data:any)=>{
          this.pro_arr2=data;
        }
      );
    }



  ngOnInit() {
    this._pro.getAllProduct().subscribe(
      (data:any)=>{
        this.pro_arr=data;
        }
    );
        this.pro_id=this._acroute.snapshot.params['pro_id'];
        this._pro.getProductById(this.pro_id).subscribe(
          (data:product[])=>{
            this.pro_id1=data[0].pro_id;
            console.log(this.pro_id1)
            this.pro_name=data[0].pro_name;
            console.log(this.pro_name);
          }
        )


  }

}
