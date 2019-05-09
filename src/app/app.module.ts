import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { ActiveNeetsComponent } from './modules/active-neets/active-neets.component';
import { AbsoruteZeroComponent } from './modules/absorute-zero/absorute-zero.component';
import { AkatsukiRecordsComponent } from './modules/akatsuki-records/akatsuki-records.component';
import { DemetoriComponent } from './modules/demetori/demetori.component';
import { JynxComponent } from './modules/jynx/jynx.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ActiveNeetsComponent,
    AbsoruteZeroComponent,
    AkatsukiRecordsComponent,
    DemetoriComponent,
    JynxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
