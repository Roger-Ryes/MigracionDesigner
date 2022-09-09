import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CobisProxyComponent, CobisCustomProxyComponent } from 'cobis-commons';

import { VcLoanguarne277791Component } from './ASSTS/QERYS/T_ASSTSABVOMTUL_791/1.0.0/vc-loanguarne-277791.component';
import { VcGeneraliao289119Component } from './ASSTS/QERYS/T_ASSTSBIBQRXFV_119/1.0.0/vc-generaliao-289119.component';
import { VcDetailtrsn444431Component } from './ASSTS/QERYS/T_ASSTSECRXYFPY_431/1.0.0/vc-detailtrsn-444431.component';
import { VcLoansintre184621Component } from './ASSTS/QERYS/T_ASSTSEYKPQBME_621/1.0.0/vc-loansintre-184621.component';
import { VcDeferredea345975Component } from './ASSTS/QERYS/T_ASSTSFLSVSFLG_975/1.0.0/vc-deferredea-345975.component';
import { VcTransacton836272Component } from './ASSTS/QERYS/T_ASSTSKIAARTLC_272/1.0.0/vc-transacton-836272.component';
import { VcDeferredit242203Component } from './ASSTS/QERYS/T_ASSTSKMGDPSCM_203/1.0.0/vc-deferredit-242203.component';
import { VcLoanpoliyy967160Component } from './ASSTS/QERYS/T_ASSTSMABINVRB_160/1.0.0/vc-loanpoliyy-967160.component';
import { VcPassivepof610117Component } from './ASSTS/QERYS/T_ASSTSNXKZRVUH_117/1.0.0/vc-passivepof-610117.component';
import { VcLoanshisoo808949Component } from './ASSTS/QERYS/T_ASSTSOGDWIAAO_949/1.0.0/vc-loanshisoo-808949.component';
import { VcLoanssegrr486868Component } from './ASSTS/QERYS/T_ASSTSQMEVBPIH_868/1.0.0/vc-loanssegrr-486868.component';
import { VcLoantrantc731694Component } from './ASSTS/QERYS/T_ASSTSQUQPUYMT_694/1.0.0/vc-loantrantc-731694.component';
import { VcLoansyndie790991Component } from './ASSTS/QERYS/T_ASSTSUHBKGFUE_991/1.0.0/vc-loansyndie-790991.component';
import { VcLoanschile317288Component } from './ASSTS/QERYS/T_ASSTSVDYQFQAP_288/1.0.0/vc-loanschile-317288.component';
import { VcLoantrancl595995Component } from './ASSTS/QERYS/T_ASSTSXYNOAKAL_995/1.0.0/vc-loantrancl-595995.component';
import { VcLoansbenif286571Component } from './ASSTS/QERYS/T_ASSTSZHWXXEQV_571/1.0.0/vc-loansbenif-286571.component';
import { VcGeneralino421347Component } from './ASSTS/QERYS/T_GENERALINAOIT_347/1.0.0/vc-generalino-421347.component';
import { VcGeneraliat927866Component } from './ASSTS/QERYS/T_GENERALINFFHA_866/1.0.0/vc-generaliat-927866.component';
import { VcItemsloann757712Component } from './ASSTS/QERYS/T_ITEMSLOANSUXI_712/1.0.0/vc-itemsloann-757712.component';
import { VcLoandebtrr256168Component } from './ASSTS/QERYS/T_LOANDEBTORUIG_168/1.0.0/vc-loandebtrr-256168.component';
import { VcLoanwarrtt422123Component } from './ASSTS/QERYS/T_LOANWARRANTYT_123/1.0.0/vc-loanwarrtt-422123.component';
import { VcPaymentdee475722Component } from './ASSTS/QERYS/T_PAYMENTDETMFP_722/1.0.0/vc-paymentdee-475722.component';
import { VcPaymentzmn922714Component } from './ASSTS/QERYS/T_PAYMENTUTOUGP_714/1.0.0/vc-paymentzmn-922714.component';
import { VcRatesvlywt596186Component } from './ASSTS/QERYS/T_RATESPTSITVKK_186/1.0.0/vc-ratesvlywt-596186.component';
import { VcRefinancle514857Component } from './ASSTS/QERYS/T_REFINANCEDALA_857/1.0.0/vc-refinancle-514857.component';

// TODO: Add manual controls imports


const routes: Routes = [
  {
    path: '',
    redirectTo: 'xxxx', // TODO: Add default path
    pathMatch: 'full',
  },

  /****************************** ASSTS ******************************/
  {
    path: 'assts/qerys/t_asstsabvomtul_791/1.0.0/vc_loanguarne_277791',
    component: VcLoanguarne277791Component,
    loadChildren: () => import('./ASSTS/QERYS/T_ASSTSABVOMTUL_791/1.0.0/vc-loanguarne-277791.module').then(m=>m.VcLoanguarne277791Module)
  },
  {
    path: 'assts/qerys/t_asstsbibqrxfv_119/1.0.0/vc_generaliao_289119',
    component: VcGeneraliao289119Component,
    loadChildren: () => import('./ASSTS/QERYS/T_ASSTSBIBQRXFV_119/1.0.0/vc-generaliao-289119.module').then(m=>m.VcGeneraliao289119Module)
  },
  {
    path: 'assts/qerys/t_asstsecrxyfpy_431/1.0.0/vc_detailtrsn_444431',
    component: VcDetailtrsn444431Component,
    loadChildren: () => import('./ASSTS/QERYS/T_ASSTSECRXYFPY_431/1.0.0/vc-detailtrsn-444431.module').then(m=>m.VcDetailtrsn444431Module)
  },
  {
    path: 'assts/qerys/t_asstseykpqbme_621/1.0.0/vc_loansintre_184621',
    component: VcLoansintre184621Component,
    loadChildren: () => import('./ASSTS/QERYS/T_ASSTSEYKPQBME_621/1.0.0/vc-loansintre-184621.module').then(m=>m.VcLoansintre184621Module)
  },
  {
    path: 'assts/qerys/t_asstsflsvsflg_975/1.0.0/vc_deferredea_345975',
    component: VcDeferredea345975Component,
    loadChildren: () => import('./ASSTS/QERYS/T_ASSTSFLSVSFLG_975/1.0.0/vc-deferredea-345975.module').then(m=>m.VcDeferredea345975Module)
  },
  {
    path: 'assts/qerys/t_asstskiaartlc_272/1.0.0/vc_transacton_836272',
    component: VcTransacton836272Component,
    loadChildren: () => import('./ASSTS/QERYS/T_ASSTSKIAARTLC_272/1.0.0/vc-transacton-836272.module').then(m=>m.VcTransacton836272Module)
  },
  {
    path: 'assts/qerys/t_asstskmgdpscm_203/1.0.0/vc_deferredit_242203',
    component: VcDeferredit242203Component,
    loadChildren: () => import('./ASSTS/QERYS/T_ASSTSKMGDPSCM_203/1.0.0/vc-deferredit-242203.module').then(m=>m.VcDeferredit242203Module)
  },
  {
    path: 'assts/qerys/t_asstsmabinvrb_160/1.0.0/vc_loanpoliyy_967160',
    component: VcLoanpoliyy967160Component,
    loadChildren: () => import('./ASSTS/QERYS/T_ASSTSMABINVRB_160/1.0.0/vc-loanpoliyy-967160.module').then(m=>m.VcLoanpoliyy967160Module)
  },
  {
    path: 'assts/qerys/t_asstsnxkzrvuh_117/1.0.0/vc_passivepof_610117',
    component: VcPassivepof610117Component,
    loadChildren: () => import('./ASSTS/QERYS/T_ASSTSNXKZRVUH_117/1.0.0/vc-passivepof-610117.module').then(m=>m.VcPassivepof610117Module)
  },
  {
    path: 'assts/qerys/t_asstsogdwiaao_949/1.0.0/vc_loanshisoo_808949',
    component: VcLoanshisoo808949Component,
    loadChildren: () => import('./ASSTS/QERYS/T_ASSTSOGDWIAAO_949/1.0.0/vc-loanshisoo-808949.module').then(m=>m.VcLoanshisoo808949Module)
  },
  {
    path: 'assts/qerys/t_asstsqmevbpih_868/1.0.0/vc_loanssegrr_486868',
    component: VcLoanssegrr486868Component,
    loadChildren: () => import('./ASSTS/QERYS/T_ASSTSQMEVBPIH_868/1.0.0/vc-loanssegrr-486868.module').then(m=>m.VcLoanssegrr486868Module)
  },
  {
    path: 'assts/qerys/t_asstsquqpuymt_694/1.0.0/vc_loantrantc_731694',
    component: VcLoantrantc731694Component,
    loadChildren: () => import('./ASSTS/QERYS/T_ASSTSQUQPUYMT_694/1.0.0/vc-loantrantc-731694.module').then(m=>m.VcLoantrantc731694Module)
  },
  {
    path: 'assts/qerys/t_asstsuhbkgfue_991/1.0.0/vc_loansyndie_790991',
    component: VcLoansyndie790991Component,
    loadChildren: () => import('./ASSTS/QERYS/T_ASSTSUHBKGFUE_991/1.0.0/vc-loansyndie-790991.module').then(m=>m.VcLoansyndie790991Module)
  },
  {
    path: 'assts/qerys/t_asstsvdyqfqap_288/1.0.0/vc_loanschile_317288',
    component: VcLoanschile317288Component,
    loadChildren: () => import('./ASSTS/QERYS/T_ASSTSVDYQFQAP_288/1.0.0/vc-loanschile-317288.module').then(m=>m.VcLoanschile317288Module)
  },
  {
    path: 'assts/qerys/t_asstsxynoakal_995/1.0.0/vc_loantrancl_595995',
    component: VcLoantrancl595995Component,
    loadChildren: () => import('./ASSTS/QERYS/T_ASSTSXYNOAKAL_995/1.0.0/vc-loantrancl-595995.module').then(m=>m.VcLoantrancl595995Module)
  },
  {
    path: 'assts/qerys/t_asstszhwxxeqv_571/1.0.0/vc_loansbenif_286571',
    component: VcLoansbenif286571Component,
    loadChildren: () => import('./ASSTS/QERYS/T_ASSTSZHWXXEQV_571/1.0.0/vc-loansbenif-286571.module').then(m=>m.VcLoansbenif286571Module)
  },
  {
    path: 'assts/qerys/t_generalinaoit_347/1.0.0/vc_generalino_421347',
    component: VcGeneralino421347Component,
    loadChildren: () => import('./ASSTS/QERYS/T_GENERALINAOIT_347/1.0.0/vc-generalino-421347.module').then(m=>m.VcGeneralino421347Module)
  },
  {
    path: 'assts/qerys/t_generalinffha_866/1.0.0/vc_generaliat_927866',
    component: VcGeneraliat927866Component,
    loadChildren: () => import('./ASSTS/QERYS/T_GENERALINFFHA_866/1.0.0/vc-generaliat-927866.module').then(m=>m.VcGeneraliat927866Module)
  },
  {
    path: 'assts/qerys/t_itemsloansuxi_712/1.0.0/vc_itemsloann_757712',
    component: VcItemsloann757712Component,
    loadChildren: () => import('./ASSTS/QERYS/T_ITEMSLOANSUXI_712/1.0.0/vc-itemsloann-757712.module').then(m=>m.VcItemsloann757712Module)
  },
  {
    path: 'assts/qerys/t_loandebtoruig_168/1.0.0/vc_loandebtrr_256168',
    component: VcLoandebtrr256168Component,
    loadChildren: () => import('./ASSTS/QERYS/T_LOANDEBTORUIG_168/1.0.0/vc-loandebtrr-256168.module').then(m=>m.VcLoandebtrr256168Module)
  },
  {
    path: 'assts/qerys/t_loanwarrantyt_123/1.0.0/vc_loanwarrtt_422123',
    component: VcLoanwarrtt422123Component,
    loadChildren: () => import('./ASSTS/QERYS/T_LOANWARRANTYT_123/1.0.0/vc-loanwarrtt-422123.module').then(m=>m.VcLoanwarrtt422123Module)
  },
  {
    path: 'assts/qerys/t_paymentdetmfp_722/1.0.0/vc_paymentdee_475722',
    component: VcPaymentdee475722Component,
    loadChildren: () => import('./ASSTS/QERYS/T_PAYMENTDETMFP_722/1.0.0/vc-paymentdee-475722.module').then(m=>m.VcPaymentdee475722Module)
  },
  {
    path: 'assts/qerys/t_paymentutougp_714/1.0.0/vc_paymentzmn_922714',
    component: VcPaymentzmn922714Component,
    loadChildren: () => import('./ASSTS/QERYS/T_PAYMENTUTOUGP_714/1.0.0/vc-paymentzmn-922714.module').then(m=>m.VcPaymentzmn922714Module)
  },
  {
    path: 'assts/qerys/t_ratesptsitvkk_186/1.0.0/vc_ratesvlywt_596186',
    component: VcRatesvlywt596186Component,
    loadChildren: () => import('./ASSTS/QERYS/T_RATESPTSITVKK_186/1.0.0/vc-ratesvlywt-596186.module').then(m=>m.VcRatesvlywt596186Module)
  },
  {
    path: 'assts/qerys/t_refinancedala_857/1.0.0/vc_refinancle_514857',
    component: VcRefinancle514857Component,
    loadChildren: () => import('./ASSTS/QERYS/T_REFINANCEDALA_857/1.0.0/vc-refinancle-514857.module').then(m=>m.VcRefinancle514857Module)
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
