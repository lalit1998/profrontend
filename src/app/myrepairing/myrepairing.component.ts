import { Component, OnInit } from '@angular/core';
import { RepairService } from '../service/repair.service';

@Component({
  selector: 'app-myrepairing',
  templateUrl: './myrepairing.component.html',
  styleUrls: ['./myrepairing.component.css']
})
export class MyrepairingComponent implements OnInit {

  constructor(private _repair:RepairService) { }

  ngOnInit() {
  //   this._repair.getAllRepairingOrder().subscribe(
  //     (data:any)=>{
  //         this.cat_arr=data;
  //     }
  //   );
  // }

  }
}
