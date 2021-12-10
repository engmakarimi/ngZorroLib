import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';


const NGZORRO = [
  NzTableModule,
  NzDropDownModule,
  NzButtonModule,
  NzInputModule,
  NzModalModule
];

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [NGZORRO],
})
export class ToolsModule {}
