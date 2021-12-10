
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserListComponent, UserLocationComponent } from './_components/user';
import { ToolsModule } from './@tools/@tools.module';
import { MapComponent } from './_components/map/map.component';
import { NzIconModule } from 'ng-zorro-antd/icon';

registerLocaleData(en);

const COMPONENTS=[UserListComponent,UserLocationComponent,MapComponent,]
@NgModule({
  declarations: [
    AppComponent,
    COMPONENTS,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToolsModule,
    ReactiveFormsModule,
    NzIconModule,


  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
