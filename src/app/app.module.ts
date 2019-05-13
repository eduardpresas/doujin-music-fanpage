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
import { OlifejapanComponent } from './modules/olifejapan/olifejapan.component';
import { ShibayanrecordsComponent } from './modules/shibayanrecords/shibayanrecords.component';
import { SoundholicComponent } from './modules/soundholic/soundholic.component';
import { TamusicComponent } from './modules/tamusic/tamusic.component';
import { TuttisoundComponent } from './modules/tuttisound/tuttisound.component';
import { Ui70Component } from './modules/ui70/ui70.component';
import { UndeadcorporationComponent } from './modules/undeadcorporation/undeadcorporation.component';
import { XionComponent } from './modules/xion/xion.component';
import { RdsoundsComponent } from './modules/rdsounds/rdsounds.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ActiveNeetsComponent,
    AbsoruteZeroComponent,
    AkatsukiRecordsComponent,
    DemetoriComponent,
    JynxComponent,
    OlifejapanComponent,
    ShibayanrecordsComponent,
    SoundholicComponent,
    TamusicComponent,
    TuttisoundComponent,
    Ui70Component,
    UndeadcorporationComponent,
    XionComponent,
    RdsoundsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
