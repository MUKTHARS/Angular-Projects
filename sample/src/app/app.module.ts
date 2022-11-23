import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestcmpComponent } from './testcmp/testcmp.component';
import { MatSliderModule} from '@angular/material/slider';
import{ MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import{MatToolbarModule} from '@angular/material/toolbar'
import { MatSidenavModule} from '@angular/material/sidenav'
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
@NgModule({
  declarations: [
    AppComponent,
    TestcmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatSliderModule,MatIconModule,MatFormFieldModule,
    MatButtonModule,MatToolbarModule,MatSidenavModule,MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
