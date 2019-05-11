import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ActiveNeetsComponent } from './modules/active-neets/active-neets.component';
import { AbsoruteZeroComponent } from './modules/absorute-zero/absorute-zero.component';
import { AkatsukiRecordsComponent } from './modules/akatsuki-records/akatsuki-records.component';
import { DemetoriComponent } from './modules/demetori/demetori.component';
import { JynxComponent } from './modules/jynx/jynx.component';
import { OlifejapanComponent } from './modules/olifejapan/olifejapan.component';
import { ShibayanrecordsComponent } from './modules/shibayanrecords/shibayanrecords.component';
import { SoundholicComponent } from './modules/soundholic/soundholic.component';
import { TamusicComponent } from './modules/tamusic/tamusic.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'active_neets', component: ActiveNeetsComponent },
  { path: 'absorute_zero', component: AbsoruteZeroComponent },
  { path: 'akatsuki_records', component: AkatsukiRecordsComponent },
  { path: 'demetori', component: DemetoriComponent },
  { path: 'jynx', component: JynxComponent },
  { path: 'olifejapan', component: OlifejapanComponent },
  { path: 'shibayanrecords', component: ShibayanrecordsComponent },
  { path: 'soundholic', component: SoundholicComponent },
  { path: 'tamusic', component: TamusicComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }

];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }


