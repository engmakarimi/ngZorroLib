import { Component, Input, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { Address } from '../_models/user.model';
@Component({
  selector: 'user-location',
  templateUrl: './user-location.component.html',
  styleUrls: ['./user-location.component.scss']
})
export class UserLocationComponent implements OnInit {
  @Input() data:any;
  address:string=''
  constructor(private modal: NzModalRef) { }

  ngOnInit(): void {
     if(this.data){
      this.address=`${this.data.address.city},${this.data.address.street},${this.data.address.suite}`
     }
  }
  destroyModal(): void {
    this.modal.destroy({ data: 'close' });
  }
}
