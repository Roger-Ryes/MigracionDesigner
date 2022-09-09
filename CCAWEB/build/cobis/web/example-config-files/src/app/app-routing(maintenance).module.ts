import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CobisProxyComponent, CobisCustomProxyComponent } from 'cobis-commons';

import { VcAmortizate895881Component } from './ASSTS/MNTNN/T_AMORTIZATIDTE_881/1.0.0/vc-amortizate-895881.component';
import { VcAssociatai871506Component } from './ASSTS/MNTNN/T_ASSTSABPPZROU_506/1.0.0/vc-associatai-871506.component';
import { VcLoanitemss778957Component } from './ASSTS/MNTNN/T_ASSTSDXZMZWIL_957/1.0.0/vc-loanitemss-778957.component';
import { VcModalloais799445Component } from './ASSTS/MNTNN/T_ASSTSFPNDGGEH_445/1.0.0/vc-modalloais-799445.component';
import { VcOnerankgvl254473Component } from './ASSTS/MNTNN/T_ASSTSGICMCPEO_473/1.0.0/vc-onerankgvl-254473.component';
import { VcAggregatrt463195Component } from './ASSTS/MNTNN/T_ASSTSHRTAYJID_195/1.0.0/vc-aggregatrt-463195.component';
import { VcChangepayy935171Component } from './ASSTS/MNTNN/T_ASSTSLFJQNQTJ_171/1.0.0/vc-changepayy-935171.component';
import { VcFundwjclll877237Component } from './ASSTS/MNTNN/T_ASSTSUFGAMLTW_237/1.0.0/vc-fundwjclll-877237.component';
import { VcTworangess307887Component } from './ASSTS/MNTNN/T_ASSTSWJQZCYYQ_887/1.0.0/vc-tworangess-307887.component';
import { VcRaterangee778821Component } from './ASSTS/MNTNN/T_ASSTSXWJMINKN_821/1.0.0/vc-raterangee-778821.component';
import { VcDocumentpp352678Component } from './ASSTS/MNTNN/T_DOCUMENTPRIII_678/1.0.0/vc-documentpp-352678.component';
import { VcExtendsquo800575Component } from './ASSTS/MNTNN/T_EXTENDSQUOATT_575/1.0.0/vc-extendsquo-800575.component';
import { VcExtendsqmn712926Component } from './ASSTS/MNTNN/T_EXTENDSQUONTA_926/1.0.0/vc-extendsqmn-712926.component';
import { VcPaymentmda338828Component } from './ASSTS/MNTNN/T_PAYMENTMAIDLT_828/1.0.0/vc-paymentmda-338828.component';
import { VcPaymentmne706586Component } from './ASSTS/MNTNN/T_PAYMENTMAIETA_586/1.0.0/vc-paymentmne-706586.component';
import { VcProjectiaa407344Component } from './ASSTS/MNTNN/T_PROJECTINGSTR_344/1.0.0/vc-projectiaa-407344.component';
import { VcProjectito707621Component } from './ASSTS/MNTNN/T_PROJECTIONATU_621/1.0.0/vc-projectito-707621.component';
import { VcProjectiiu405244Component } from './ASSTS/MNTNN/T_PROJECTIONNQI_244/1.0.0/vc-projectiiu-405244.component';
import { VcProjectigr817425Component } from './ASSTS/MNTNN/T_PROJECTIONTOG_425/1.0.0/vc-projectigr-817425.component';
import { VcRatesmodal789953Component } from './ASSTS/MNTNN/T_RATESMODALKUB_953/1.0.0/vc-ratesmodal-789953.component';
import { VcReajustemf738801Component } from './ASSTS/MNTNN/T_REAJUSTECAMMB_801/1.0.0/vc-reajustemf-738801.component';
import { VcReajustemf502264Component } from './ASSTS/MNTNN/T_REAJUSTEDEFTF_264/1.0.0/vc-reajustemf-502264.component';
import { VcReajustekp207872Component } from './ASSTS/MNTNN/T_REAJUSTESRCSN_872/1.0.0/vc-reajustekp-207872.component';
import { VcTestbkyolo973756Component } from './ASSTS/MNTNN/T_TESTWKHELVLBD_756/1.0.0/vc-testbkyolo-973756.component';
import { VcTyperateda850545Component } from './ASSTS/MNTNN/T_TYPERATESMALA_545/1.0.0/vc-typerateda-850545.component';
import { VcValueratee334932Component } from './ASSTS/MNTNN/T_VALUERATESFBO_932/1.0.0/vc-valueratee-334932.component';

// TODO: Add manual controls imports


const routes: Routes = [
  {
    path: '',
    redirectTo: 'xxxx', // TODO: Add default path
    pathMatch: 'full',
  },

  /****************************** ASSTS ******************************/
  {
    path: 'assts/mntnn/t_amortizatidte_881/1.0.0/vc_amortizate_895881',
    component: VcAmortizate895881Component,
    loadChildren: () => import('./ASSTS/MNTNN/T_AMORTIZATIDTE_881/1.0.0/vc-amortizate-895881.module').then(m=>m.VcAmortizate895881Module)
  },
  {
    path: 'assts/mntnn/t_asstsabppzrou_506/1.0.0/vc_associatai_871506',
    component: VcAssociatai871506Component,
    loadChildren: () => import('./ASSTS/MNTNN/T_ASSTSABPPZROU_506/1.0.0/vc-associatai-871506.module').then(m=>m.VcAssociatai871506Module)
  },
  {
    path: 'assts/mntnn/t_asstsdxzmzwil_957/1.0.0/vc_loanitemss_778957',
    component: VcLoanitemss778957Component,
    loadChildren: () => import('./ASSTS/MNTNN/T_ASSTSDXZMZWIL_957/1.0.0/vc-loanitemss-778957.module').then(m=>m.VcLoanitemss778957Module)
  },
  {
    path: 'assts/mntnn/t_asstsfpndggeh_445/1.0.0/vc_modalloais_799445',
    component: VcModalloais799445Component,
    loadChildren: () => import('./ASSTS/MNTNN/T_ASSTSFPNDGGEH_445/1.0.0/vc-modalloais-799445.module').then(m=>m.VcModalloais799445Module)
  },
  {
    path: 'assts/mntnn/t_asstsgicmcpeo_473/1.0.0/vc_onerankgvl_254473',
    component: VcOnerankgvl254473Component,
    loadChildren: () => import('./ASSTS/MNTNN/T_ASSTSGICMCPEO_473/1.0.0/vc-onerankgvl-254473.module').then(m=>m.VcOnerankgvl254473Module)
  },
  {
    path: 'assts/mntnn/t_asstshrtayjid_195/1.0.0/vc_aggregatrt_463195',
    component: VcAggregatrt463195Component,
    loadChildren: () => import('./ASSTS/MNTNN/T_ASSTSHRTAYJID_195/1.0.0/vc-aggregatrt-463195.module').then(m=>m.VcAggregatrt463195Module)
  },
  {
    path: 'assts/mntnn/t_asstslfjqnqtj_171/1.0.0/vc_changepayy_935171',
    component: VcChangepayy935171Component,
    loadChildren: () => import('./ASSTS/MNTNN/T_ASSTSLFJQNQTJ_171/1.0.0/vc-changepayy-935171.module').then(m=>m.VcChangepayy935171Module)
  },
  {
    path: 'assts/mntnn/t_asstsufgamltw_237/1.0.0/vc_fundwjclll_877237',
    component: VcFundwjclll877237Component,
    loadChildren: () => import('./ASSTS/MNTNN/T_ASSTSUFGAMLTW_237/1.0.0/vc-fundwjclll-877237.module').then(m=>m.VcFundwjclll877237Module)
  },
  {
    path: 'assts/mntnn/t_asstswjqzcyyq_887/1.0.0/vc_tworangess_307887',
    component: VcTworangess307887Component,
    loadChildren: () => import('./ASSTS/MNTNN/T_ASSTSWJQZCYYQ_887/1.0.0/vc-tworangess-307887.module').then(m=>m.VcTworangess307887Module)
  },
  {
    path: 'assts/mntnn/t_asstsxwjminkn_821/1.0.0/vc_raterangee_778821',
    component: VcRaterangee778821Component,
    loadChildren: () => import('./ASSTS/MNTNN/T_ASSTSXWJMINKN_821/1.0.0/vc-raterangee-778821.module').then(m=>m.VcRaterangee778821Module)
  },
  {
    path: 'assts/mntnn/t_documentpriii_678/1.0.0/vc_documentpp_352678',
    component: VcDocumentpp352678Component,
    loadChildren: () => import('./ASSTS/MNTNN/T_DOCUMENTPRIII_678/1.0.0/vc-documentpp-352678.module').then(m=>m.VcDocumentpp352678Module)
  },
  {
    path: 'assts/mntnn/t_extendsquoatt_575/1.0.0/vc_extendsquo_800575',
    component: VcExtendsquo800575Component,
    loadChildren: () => import('./ASSTS/MNTNN/T_EXTENDSQUOATT_575/1.0.0/vc-extendsquo-800575.module').then(m=>m.VcExtendsquo800575Module)
  },
  {
    path: 'assts/mntnn/t_extendsquonta_926/1.0.0/vc_extendsqmn_712926',
    component: VcExtendsqmn712926Component,
    loadChildren: () => import('./ASSTS/MNTNN/T_EXTENDSQUONTA_926/1.0.0/vc-extendsqmn-712926.module').then(m=>m.VcExtendsqmn712926Module)
  },
  {
    path: 'assts/mntnn/t_paymentmaidlt_828/1.0.0/vc_paymentmda_338828',
    component: VcPaymentmda338828Component,
    loadChildren: () => import('./ASSTS/MNTNN/T_PAYMENTMAIDLT_828/1.0.0/vc-paymentmda-338828.module').then(m=>m.VcPaymentmda338828Module)
  },
  {
    path: 'assts/mntnn/t_paymentmaieta_586/1.0.0/vc_paymentmne_706586',
    component: VcPaymentmne706586Component,
    loadChildren: () => import('./ASSTS/MNTNN/T_PAYMENTMAIETA_586/1.0.0/vc-paymentmne-706586.module').then(m=>m.VcPaymentmne706586Module)
  },
  {
    path: 'assts/mntnn/t_projectingstr_344/1.0.0/vc_projectiaa_407344',
    component: VcProjectiaa407344Component,
    loadChildren: () => import('./ASSTS/MNTNN/T_PROJECTINGSTR_344/1.0.0/vc-projectiaa-407344.module').then(m=>m.VcProjectiaa407344Module)
  },
  {
    path: 'assts/mntnn/t_projectionatu_621/1.0.0/vc_projectito_707621',
    component: VcProjectito707621Component,
    loadChildren: () => import('./ASSTS/MNTNN/T_PROJECTIONATU_621/1.0.0/vc-projectito-707621.module').then(m=>m.VcProjectito707621Module)
  },
  {
    path: 'assts/mntnn/t_projectionnqi_244/1.0.0/vc_projectiiu_405244',
    component: VcProjectiiu405244Component,
    loadChildren: () => import('./ASSTS/MNTNN/T_PROJECTIONNQI_244/1.0.0/vc-projectiiu-405244.module').then(m=>m.VcProjectiiu405244Module)
  },
  {
    path: 'assts/mntnn/t_projectiontog_425/1.0.0/vc_projectigr_817425',
    component: VcProjectigr817425Component,
    loadChildren: () => import('./ASSTS/MNTNN/T_PROJECTIONTOG_425/1.0.0/vc-projectigr-817425.module').then(m=>m.VcProjectigr817425Module)
  },
  {
    path: 'assts/mntnn/t_ratesmodalkub_953/1.0.0/vc_ratesmodal_789953',
    component: VcRatesmodal789953Component,
    loadChildren: () => import('./ASSTS/MNTNN/T_RATESMODALKUB_953/1.0.0/vc-ratesmodal-789953.module').then(m=>m.VcRatesmodal789953Module)
  },
  {
    path: 'assts/mntnn/t_reajustecammb_801/1.0.0/vc_reajustemf_738801',
    component: VcReajustemf738801Component,
    loadChildren: () => import('./ASSTS/MNTNN/T_REAJUSTECAMMB_801/1.0.0/vc-reajustemf-738801.module').then(m=>m.VcReajustemf738801Module)
  },
  {
    path: 'assts/mntnn/t_reajustedeftf_264/1.0.0/vc_reajustemf_502264',
    component: VcReajustemf502264Component,
    loadChildren: () => import('./ASSTS/MNTNN/T_REAJUSTEDEFTF_264/1.0.0/vc-reajustemf-502264.module').then(m=>m.VcReajustemf502264Module)
  },
  {
    path: 'assts/mntnn/t_reajustesrcsn_872/1.0.0/vc_reajustekp_207872',
    component: VcReajustekp207872Component,
    loadChildren: () => import('./ASSTS/MNTNN/T_REAJUSTESRCSN_872/1.0.0/vc-reajustekp-207872.module').then(m=>m.VcReajustekp207872Module)
  },
  {
    path: 'assts/mntnn/t_testwkhelvlbd_756/1.0.0/vc_testbkyolo_973756',
    component: VcTestbkyolo973756Component,
    loadChildren: () => import('./ASSTS/MNTNN/T_TESTWKHELVLBD_756/1.0.0/vc-testbkyolo-973756.module').then(m=>m.VcTestbkyolo973756Module)
  },
  {
    path: 'assts/mntnn/t_typeratesmala_545/1.0.0/vc_typerateda_850545',
    component: VcTyperateda850545Component,
    loadChildren: () => import('./ASSTS/MNTNN/T_TYPERATESMALA_545/1.0.0/vc-typerateda-850545.module').then(m=>m.VcTyperateda850545Module)
  },
  {
    path: 'assts/mntnn/t_valueratesfbo_932/1.0.0/vc_valueratee_334932',
    component: VcValueratee334932Component,
    loadChildren: () => import('./ASSTS/MNTNN/T_VALUERATESFBO_932/1.0.0/vc-valueratee-334932.module').then(m=>m.VcValueratee334932Module)
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
