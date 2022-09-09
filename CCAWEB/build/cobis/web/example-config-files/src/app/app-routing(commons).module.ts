import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CobisProxyComponent, CobisCustomProxyComponent } from 'cobis-commons';

import { VcAmortizaii339261Component } from './ASSTS/CMMNS/T_AMORTIZATIOON_261/1.0.0/vc-amortizaii-339261.component';
import { VcAdvancedar764220Component } from './ASSTS/CMMNS/T_ASSTSEUKYTEJC_220/1.0.0/vc-advancedar-764220.component';
import { VcAmortizatt397548Component } from './ASSTS/CMMNS/T_ASSTSRQJVFXXE_548/1.0.0/vc-amortizatt-397548.component';
import { VcLoanheadfo861316Component } from './ASSTS/CMMNS/T_LOANHEADERNFI_316/1.0.0/vc-loanheadfo-861316.component';
import { VcLoansearhc144959Component } from './ASSTS/CMMNS/T_LOANSEARCHSWA_959/1.0.0/vc-loansearhc-144959.component';
import { VcLoanstatce588120Component } from './ASSTS/CMMNS/T_LOANSTATUSGNI_120/1.0.0/vc-loanstatce-588120.component';
import { VcLoanstatuh801840Component } from './ASSTS/CMMNS/T_LOANSTATUSNGH_840/1.0.0/vc-loanstatuh-801840.component';

// TODO: Add manual controls imports


const routes: Routes = [
  {
    path: '',
    redirectTo: 'xxxx', // TODO: Add default path
    pathMatch: 'full',
  },

  /****************************** ASSTS ******************************/
  {
    path: 'assts/cmmns/t_amortizatioon_261/1.0.0/vc_amortizaii_339261',
    component: VcAmortizaii339261Component,
    loadChildren: () => import('./ASSTS/CMMNS/T_AMORTIZATIOON_261/1.0.0/vc-amortizaii-339261.module').then(m=>m.VcAmortizaii339261Module)
  },
  {
    path: 'assts/cmmns/t_asstseukytejc_220/1.0.0/vc_advancedar_764220',
    component: VcAdvancedar764220Component,
    loadChildren: () => import('./ASSTS/CMMNS/T_ASSTSEUKYTEJC_220/1.0.0/vc-advancedar-764220.module').then(m=>m.VcAdvancedar764220Module)
  },
  {
    path: 'assts/cmmns/t_asstsrqjvfxxe_548/1.0.0/vc_amortizatt_397548',
    component: VcAmortizatt397548Component,
    loadChildren: () => import('./ASSTS/CMMNS/T_ASSTSRQJVFXXE_548/1.0.0/vc-amortizatt-397548.module').then(m=>m.VcAmortizatt397548Module)
  },
  {
    path: 'assts/cmmns/t_loanheadernfi_316/1.0.0/vc_loanheadfo_861316',
    component: VcLoanheadfo861316Component,
    loadChildren: () => import('./ASSTS/CMMNS/T_LOANHEADERNFI_316/1.0.0/vc-loanheadfo-861316.module').then(m=>m.VcLoanheadfo861316Module)
  },
  {
    path: 'assts/cmmns/t_loansearchswa_959/1.0.0/vc_loansearhc_144959',
    component: VcLoansearhc144959Component,
    loadChildren: () => import('./ASSTS/CMMNS/T_LOANSEARCHSWA_959/1.0.0/vc-loansearhc-144959.module').then(m=>m.VcLoansearhc144959Module)
  },
  {
    path: 'assts/cmmns/t_loanstatusgni_120/1.0.0/vc_loanstatce_588120',
    component: VcLoanstatce588120Component,
    loadChildren: () => import('./ASSTS/CMMNS/T_LOANSTATUSGNI_120/1.0.0/vc-loanstatce-588120.module').then(m=>m.VcLoanstatce588120Module)
  },
  {
    path: 'assts/cmmns/t_loanstatusngh_840/1.0.0/vc_loanstatuh_801840',
    component: VcLoanstatuh801840Component,
    loadChildren: () => import('./ASSTS/CMMNS/T_LOANSTATUSNGH_840/1.0.0/vc-loanstatuh-801840.module').then(m=>m.VcLoanstatuh801840Module)
  },

  /****************************** MANUAL ROUTES ******************************/
  // TODO: Specify paths for manual controls
  /****************************** PROXY ******************************/
  {
    path: 'dsg/:m/:s/:t/:v/:vc',
    component: CobisProxyComponent
  },
  {
    path: 'mnl/:m/:p',
    component: CobisCustomProxyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
