import { Component, Input, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
@Component({
  selector: 'user-location',
  templateUrl: './user-location.component.html',
  styleUrls: ['./user-location.component.scss']
})
export class UserLocationComponent implements OnInit {
  @Input() data:any
  constructor(private modal: NzModalRef) { }

  ngOnInit(): void {
    console.log(this.data)
  }
  destroyModal(): void {
    this.modal.destroy({ data: 'close' });
  }
}
