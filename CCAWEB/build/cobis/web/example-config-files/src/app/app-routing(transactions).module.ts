import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CobisProxyComponent, CobisCustomProxyComponent } from 'cobis-commons';

import { VcApplyclass521533Component } from './ASSTS/TRNSC/T_APPLYCLAUSEEE_533/1.0.0/vc-applyclass-521533.component';
import { VcLoansrestn297594Component } from './ASSTS/TRNSC/T_ASSTSAMRZIFMF_594/1.0.0/vc-loansrestn-297594.component';
import { VcSimulateut397915Component } from './ASSTS/TRNSC/T_ASSTSAXELGOQQ_915/1.0.0/vc-simulateut-397915.component';
import { VcRestructeg166525Component } from './ASSTS/TRNSC/T_ASSTSCNYHAQPM_525/1.0.0/vc-restructeg-166525.component';
import { VcLoanpartir265871Component } from './ASSTS/TRNSC/T_ASSTSEFYTNIXU_871/1.0.0/vc-loanpartir-265871.component';
import { VcRestructrr543289Component } from './ASSTS/TRNSC/T_ASSTSEGPPJJUA_289/1.0.0/vc-restructrr-543289.component';
import { VcCompaniecr302580Component } from './ASSTS/TRNSC/T_ASSTSGGBHCCXI_580/1.0.0/vc-companiecr-302580.component';
import { VcPaymentsou371604Component } from './ASSTS/TRNSC/T_ASSTSIOIYHVWE_604/1.0.0/vc-paymentsou-371604.component';
import { VcNoappliesa877579Component } from './ASSTS/TRNSC/T_ASSTSJRUQRHCH_579/1.0.0/vc-noappliesa-877579.component';
import { VcProjectirj862619Component } from './ASSTS/TRNSC/T_ASSTSPENVMXNQ_619/1.0.0/vc-projectirj-862619.component';
import { VcCompanieee220144Component } from './ASSTS/TRNSC/T_ASSTSROZTLMPE_144/1.0.0/vc-companieee-220144.component';
import { VcDetailnoie803286Component } from './ASSTS/TRNSC/T_ASSTSSJVXBFJD_286/1.0.0/vc-detailnoie-803286.component';
import { VcCompanieta879161Component } from './ASSTS/TRNSC/T_ASSTSSMJDYNLF_161/1.0.0/vc-companieta-879161.component';
import { VcSimulateaa568839Component } from './ASSTS/TRNSC/T_ASSTSSZCLDZTQ_839/1.0.0/vc-simulateaa-568839.component';
import { VcCompanycee242845Component } from './ASSTS/TRNSC/T_ASSTSVIKJRAKP_845/1.0.0/vc-companycee-242845.component';
import { VcBankaccott940944Component } from './ASSTS/TRNSC/T_BANKACCOUNTIS_944/1.0.0/vc-bankaccott-940944.component';
import { VcBankaccomu224777Component } from './ASSTS/TRNSC/T_BANKACCOUNTOA_777/1.0.0/vc-bankaccomu-224777.component';
import { VcCondonaton778532Component } from './ASSTS/TRNSC/T_CONDONATIOSNN_532/1.0.0/vc-condonaton-778532.component';
import { VcDisbursemt116810Component } from './ASSTS/TRNSC/T_DISBURSEMENNN_810/1.0.0/vc-disbursemt-116810.component';
import { VcLeftoverpm168459Component } from './ASSTS/TRNSC/T_LEFTOVERPALDD_459/1.0.0/vc-leftoverpm-168459.component';
import { VcLoandisbmn824275Component } from './ASSTS/TRNSC/T_LOANDISBURSAA_275/1.0.0/vc-loandisbmn-824275.component';
import { VcNegotiatoo775700Component } from './ASSTS/TRNSC/T_NEGOTIATIOTML_700/1.0.0/vc-negotiatoo-775700.component';
import { VcPaymentmde245368Component } from './ASSTS/TRNSC/T_PAYMENTMODEEE_368/1.0.0/vc-paymentmde-245368.component';
import { VcPaymentsan916157Component } from './ASSTS/TRNSC/T_PAYMENTSMANII_157/1.0.0/vc-paymentsan-916157.component';
import { VcPaymentsfw851850Component } from './ASSTS/TRNSC/T_PAYMENTSTENLV_850/1.0.0/vc-paymentsfw-851850.component';
import { VcPrioritiom989489Component } from './ASSTS/TRNSC/T_PRIORITIESENY_489/1.0.0/vc-prioritiom-989489.component';
import { VcQuotadetaa445745Component } from './ASSTS/TRNSC/T_QUOTADETAISOY_745/1.0.0/vc-quotadetaa-445745.component';
import { VcRefinancsl902781Component } from './ASSTS/TRNSC/T_REFINANCELISS_781/1.0.0/vc-refinancsl-902781.component';
import { VcValuedaten586689Component } from './ASSTS/TRNSC/T_VALUEDATEMINN_689/1.0.0/vc-valuedaten-586689.component';
import { VcValuedatee230861Component } from './ASSTS/TRNSC/T_VALUEDATEUVDU_861/1.0.0/vc-valuedatee-230861.component';

// TODO: Add manual controls imports


const routes: Routes = [
  {
    path: '',
    redirectTo: 'xxxx', // TODO: Add default path
    pathMatch: 'full',
  },

  /****************************** ASSTS ******************************/
  {
    path: 'assts/trnsc/t_applyclauseee_533/1.0.0/vc_applyclass_521533',
    component: VcApplyclass521533Component,
    loadChildren: () => import('./ASSTS/TRNSC/T_APPLYCLAUSEEE_533/1.0.0/vc-applyclass-521533.module').then(m=>m.VcApplyclass521533Module)
  },
  {
    path: 'assts/trnsc/t_asstsamrzifmf_594/1.0.0/vc_loansrestn_297594',
    component: VcLoansrestn297594Component,
    loadChildren: () => import('./ASSTS/TRNSC/T_ASSTSAMRZIFMF_594/1.0.0/vc-loansrestn-297594.module').then(m=>m.VcLoansrestn297594Module)
  },
  {
    path: 'assts/trnsc/t_asstsaxelgoqq_915/1.0.0/vc_simulateut_397915',
    component: VcSimulateut397915Component,
    loadChildren: () => import('./ASSTS/TRNSC/T_ASSTSAXELGOQQ_915/1.0.0/vc-simulateut-397915.module').then(m=>m.VcSimulateut397915Module)
  },
  {
    path: 'assts/trnsc/t_asstscnyhaqpm_525/1.0.0/vc_restructeg_166525',
    component: VcRestructeg166525Component,
    loadChildren: () => import('./ASSTS/TRNSC/T_ASSTSCNYHAQPM_525/1.0.0/vc-restructeg-166525.module').then(m=>m.VcRestructeg166525Module)
  },
  {
    path: 'assts/trnsc/t_asstsefytnixu_871/1.0.0/vc_loanpartir_265871',
    component: VcLoanpartir265871Component,
    loadChildren: () => import('./ASSTS/TRNSC/T_ASSTSEFYTNIXU_871/1.0.0/vc-loanpartir-265871.module').then(m=>m.VcLoanpartir265871Module)
  },
  {
    path: 'assts/trnsc/t_asstsegppjjua_289/1.0.0/vc_restructrr_543289',
    component: VcRestructrr543289Component,
    loadChildren: () => import('./ASSTS/TRNSC/T_ASSTSEGPPJJUA_289/1.0.0/vc-restructrr-543289.module').then(m=>m.VcRestructrr543289Module)
  },
  {
    path: 'assts/trnsc/t_asstsggbhccxi_580/1.0.0/vc_companiecr_302580',
    component: VcCompaniecr302580Component,
    loadChildren: () => import('./ASSTS/TRNSC/T_ASSTSGGBHCCXI_580/1.0.0/vc-companiecr-302580.module').then(m=>m.VcCompaniecr302580Module)
  },
  {
    path: 'assts/trnsc/t_asstsioiyhvwe_604/1.0.0/vc_paymentsou_371604',
    component: VcPaymentsou371604Component,
    loadChildren: () => import('./ASSTS/TRNSC/T_ASSTSIOIYHVWE_604/1.0.0/vc-paymentsou-371604.module').then(m=>m.VcPaymentsou371604Module)
  },
  {
    path: 'assts/trnsc/t_asstsjruqrhch_579/1.0.0/vc_noappliesa_877579',
    component: VcNoappliesa877579Component,
    loadChildren: () => import('./ASSTS/TRNSC/T_ASSTSJRUQRHCH_579/1.0.0/vc-noappliesa-877579.module').then(m=>m.VcNoappliesa877579Module)
  },
  {
    path: 'assts/trnsc/t_asstspenvmxnq_619/1.0.0/vc_projectirj_862619',
    component: VcProjectirj862619Component,
    loadChildren: () => import('./ASSTS/TRNSC/T_ASSTSPENVMXNQ_619/1.0.0/vc-projectirj-862619.module').then(m=>m.VcProjectirj862619Module)
  },
  {
    path: 'assts/trnsc/t_asstsroztlmpe_144/1.0.0/vc_companieee_220144',
    component: VcCompanieee220144Component,
    loadChildren: () => import('./ASSTS/TRNSC/T_ASSTSROZTLMPE_144/1.0.0/vc-companieee-220144.module').then(m=>m.VcCompanieee220144Module)
  },
  {
    path: 'assts/trnsc/t_asstssjvxbfjd_286/1.0.0/vc_detailnoie_803286',
    component: VcDetailnoie803286Component,
    loadChildren: () => import('./ASSTS/TRNSC/T_ASSTSSJVXBFJD_286/1.0.0/vc-detailnoie-803286.module').then(m=>m.VcDetailnoie803286Module)
  },
  {
    path: 'assts/trnsc/t_asstssmjdynlf_161/1.0.0/vc_companieta_879161',
    component: VcCompanieta879161Component,
    loadChildren: () => import('./ASSTS/TRNSC/T_ASSTSSMJDYNLF_161/1.0.0/vc-companieta-879161.module').then(m=>m.VcCompanieta879161Module)
  },
  {
    path: 'assts/trnsc/t_asstsszcldztq_839/1.0.0/vc_simulateaa_568839',
    component: VcSimulateaa568839Component,
    loadChildren: () => import('./ASSTS/TRNSC/T_ASSTSSZCLDZTQ_839/1.0.0/vc-simulateaa-568839.module').then(m=>m.VcSimulateaa568839Module)
  },
  {
    path: 'assts/trnsc/t_asstsvikjrakp_845/1.0.0/vc_companycee_242845',
    component: VcCompanycee242845Component,
    loadChildren: () => import('./ASSTS/TRNSC/T_ASSTSVIKJRAKP_845/1.0.0/vc-companycee-242845.module').then(m=>m.VcCompanycee242845Module)
  },
  {
    path: 'assts/trnsc/t_bankaccountis_944/1.0.0/vc_bankaccott_940944',
    component: VcBankaccott940944Component,
    loadChildren: () => import('./ASSTS/TRNSC/T_BANKACCOUNTIS_944/1.0.0/vc-bankaccott-940944.module').then(m=>m.VcBankaccott940944Module)
  },
  {
    path: 'assts/trnsc/t_bankaccountoa_777/1.0.0/vc_bankaccomu_224777',
    component: VcBankaccomu224777Component,
    loadChildren: () => import('./ASSTS/TRNSC/T_BANKACCOUNTOA_777/1.0.0/vc-bankaccomu-224777.module').then(m=>m.VcBankaccomu224777Module)
  },
  {
    path: 'assts/trnsc/t_condonatiosnn_532/1.0.0/vc_condonaton_778532',
    component: VcCondonaton778532Component,
    loadChildren: () => import('./ASSTS/TRNSC/T_CONDONATIOSNN_532/1.0.0/vc-condonaton-778532.module').then(m=>m.VcCondonaton778532Module)
  },
  {
    path: 'assts/trnsc/t_disbursemennn_810/1.0.0/vc_disbursemt_116810',
    component: VcDisbursemt116810Component,
    loadChildren: () => import('./ASSTS/TRNSC/T_DISBURSEMENNN_810/1.0.0/vc-disbursemt-116810.module').then(m=>m.VcDisbursemt116810Module)
  },
  {
    path: 'assts/trnsc/t_leftoverpaldd_459/1.0.0/vc_leftoverpm_168459',
    component: VcLeftoverpm168459Component,
    loadChildren: () => import('./ASSTS/TRNSC/T_LEFTOVERPALDD_459/1.0.0/vc-leftoverpm-168459.module').then(m=>m.VcLeftoverpm168459Module)
  },
  {
    path: 'assts/trnsc/t_loandisbursaa_275/1.0.0/vc_loandisbmn_824275',
    component: VcLoandisbmn824275Component,
    loadChildren: () => import('./ASSTS/TRNSC/T_LOANDISBURSAA_275/1.0.0/vc-loandisbmn-824275.module').then(m=>m.VcLoandisbmn824275Module)
  },
  {
    path: 'assts/trnsc/t_negotiatiotml_700/1.0.0/vc_negotiatoo_775700',
    component: VcNegotiatoo775700Component,
    loadChildren: () => import('./ASSTS/TRNSC/T_NEGOTIATIOTML_700/1.0.0/vc-negotiatoo-775700.module').then(m=>m.VcNegotiatoo775700Module)
  },
  {
    path: 'assts/trnsc/t_paymentmodeee_368/1.0.0/vc_paymentmde_245368',
    component: VcPaymentmde245368Component,
    loadChildren: () => import('./ASSTS/TRNSC/T_PAYMENTMODEEE_368/1.0.0/vc-paymentmde-245368.module').then(m=>m.VcPaymentmde245368Module)
  },
  {
    path: 'assts/trnsc/t_paymentsmanii_157/1.0.0/vc_paymentsan_916157',
    component: VcPaymentsan916157Component,
    loadChildren: () => import('./ASSTS/TRNSC/T_PAYMENTSMANII_157/1.0.0/vc-paymentsan-916157.module').then(m=>m.VcPaymentsan916157Module)
  },
  {
    path: 'assts/trnsc/t_paymentstenlv_850/1.0.0/vc_paymentsfw_851850',
    component: VcPaymentsfw851850Component,
    loadChildren: () => import('./ASSTS/TRNSC/T_PAYMENTSTENLV_850/1.0.0/vc-paymentsfw-851850.module').then(m=>m.VcPaymentsfw851850Module)
  },
  {
    path: 'assts/trnsc/t_prioritieseny_489/1.0.0/vc_prioritiom_989489',
    component: VcPrioritiom989489Component,
    loadChildren: () => import('./ASSTS/TRNSC/T_PRIORITIESENY_489/1.0.0/vc-prioritiom-989489.module').then(m=>m.VcPrioritiom989489Module)
  },
  {
    path: 'assts/trnsc/t_quotadetaisoy_745/1.0.0/vc_quotadetaa_445745',
    component: VcQuotadetaa445745Component,
    loadChildren: () => import('./ASSTS/TRNSC/T_QUOTADETAISOY_745/1.0.0/vc-quotadetaa-445745.module').then(m=>m.VcQuotadetaa445745Module)
  },
  {
    path: 'assts/trnsc/t_refinanceliss_781/1.0.0/vc_refinancsl_902781',
    component: VcRefinancsl902781Component,
    loadChildren: () => import('./ASSTS/TRNSC/T_REFINANCELISS_781/1.0.0/vc-refinancsl-902781.module').then(m=>m.VcRefinancsl902781Module)
  },
  {
    path: 'assts/trnsc/t_valuedateminn_689/1.0.0/vc_valuedaten_586689',
    component: VcValuedaten586689Component,
    loadChildren: () => import('./ASSTS/TRNSC/T_VALUEDATEMINN_689/1.0.0/vc-valuedaten-586689.module').then(m=>m.VcValuedaten586689Module)
  },
  {
    path: 'assts/trnsc/t_valuedateuvdu_861/1.0.0/vc_valuedatee_230861',
    component: VcValuedatee230861Component,
    loadChildren: () => import('./ASSTS/TRNSC/T_VALUEDATEUVDU_861/1.0.0/vc-valuedatee-230861.module').then(m=>m.VcValuedatee230861Module)
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
