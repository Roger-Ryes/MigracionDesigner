import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CobisCustomProxyComponent, CobisProxyComponent } from 'cobis-commons';

import { VcAmortizaii339261Component } from './ASSTS/CMMNS/T_AMORTIZATIOON_261/1.0.0/vc-amortizaii-339261.component';
import { VcAdvancedar764220Component } from './ASSTS/CMMNS/T_ASSTSEUKYTEJC_220/1.0.0/vc-advancedar-764220.component';
import { VcAmortizatt397548Component } from './ASSTS/CMMNS/T_ASSTSRQJVFXXE_548/1.0.0/vc-amortizatt-397548.component';
import { VcLoanheadfo861316Component } from './ASSTS/CMMNS/T_LOANHEADERNFI_316/1.0.0/vc-loanheadfo-861316.component';
import { VcLoansearhc144959Component } from './ASSTS/CMMNS/T_LOANSEARCHSWA_959/1.0.0/vc-loansearhc-144959.component';
import { VcLoanstatce588120Component } from './ASSTS/CMMNS/T_LOANSTATUSGNI_120/1.0.0/vc-loanstatce-588120.component';
import { VcLoanstatuh801840Component } from './ASSTS/CMMNS/T_LOANSTATUSNGH_840/1.0.0/vc-loanstatuh-801840.component';
// MAINTENANCE
import { VcAmortizate895881Component } from './ASSTS/MNTNN/T_AMORTIZATIDTE_881/1.0.0/vc-amortizate-895881.component';
import { VcAssociatai871506Component } from './ASSTS/MNTNN/T_ASSTSABPPZROU_506/1.0.0/vc-associatai-871506.component';
import { VcLoanitemss778957Component } from './ASSTS/MNTNN/T_ASSTSDXZMZWIL_957/1.0.0/vc-loanitemss-778957.component';
import { VcModalloais799445Component } from './ASSTS/MNTNN/T_ASSTSFPNDGGEH_445/1.0.0/vc-modalloais-799445.component';
import { VcOnerankgvl254473Component } from './ASSTS/MNTNN/T_ASSTSGICMCPEO_473/1.0.0/vc-onerankgvl-254473.component';
import { VcChangepayy935171Component } from './ASSTS/MNTNN/T_ASSTSLFJQNQTJ_171/1.0.0/vc-changepayy-935171.component';
import { VcAggregatrt463195Component } from './ASSTS/MNTNN/T_ASSTSHRTAYJID_195/1.0.0/vc-aggregatrt-463195.component';
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
// OPERATION
import { VcRepaymentt461527Component } from './LNSPR/OPRTN/T_LNSPRACJAQDUP_527/1.0.0/vc-repaymentt-461527.component';
import { VcCurrentssn601551Component } from './LNSPR/OPRTN/T_LNSPRASFFUCSU_551/1.0.0/vc-currentssn-601551.component';
import { VcPassivepif144956Component } from './LNSPR/OPRTN/T_LNSPRBYPIFLBG_956/1.0.0/vc-passivepif-144956.component';
import { VcStatuschvi933411Component } from './LNSPR/OPRTN/T_LNSPRDNBKFOTI_411/1.0.0/vc-statuschvi-933411.component';
import { VcOperationl208539Component } from './LNSPR/OPRTN/T_LNSPRDTSDFSKQ_539/1.0.0/vc-operationl-208539.component';
import { VcMemberslnn871923Component } from './LNSPR/OPRTN/T_LNSPREHKSWWGN_923/1.0.0/vc-memberslnn-871923.component';
import { VcLoanslinss962737Component } from './LNSPR/OPRTN/T_LNSPRFYCKEVVP_737/1.0.0/vc-loanslinss-962737.component';
import { VcOperatiopa648633Component } from './LNSPR/OPRTN/T_LNSPRGNPCEXYE_633/1.0.0/vc-operatiopa-648633.component';
import { VcOperatioee354330Component } from './LNSPR/OPRTN/T_LNSPRHWGYLNWJ_330/1.0.0/vc-operatioee-354330.component';
import { VcAccontsopt347664Component } from './LNSPR/OPRTN/T_LNSPRHZIKGUNT_664/1.0.0/vc-accontsopt-347664.component';
import { VcLoansaleva321572Component } from './LNSPR/OPRTN/T_LNSPRIIYONZUA_572/1.0.0/vc-loansaleva-321572.component';
import { VcModaloperi484830Component } from './LNSPR/OPRTN/T_LNSPRJXWYQVOK_830/1.0.0/vc-modaloperi-484830.component';
import { VcOperationn207785Component } from './LNSPR/OPRTN/T_LNSPRKEGMFGIE_785/1.0.0/vc-operationn-207785.component';
import { VcProjectorc636575Component } from './LNSPR/OPRTN/T_LNSPRKWSPLJPI_575/1.0.0/vc-projectorc-636575.component';
import { VcLoanscreaa299193Component } from './LNSPR/OPRTN/T_LNSPRMBVLAOGA_193/1.0.0/vc-loanscreaa-299193.component';
import { VcLoansearch100921Component } from './LNSPR/OPRTN/T_LNSPRMFFWJGJE_921/1.0.0/vc-loansearch-100921.component';
import { VcLoansdismm305194Component } from './LNSPR/OPRTN/T_LNSPRNBKRHAIB_194/1.0.0/vc-loansdismm-305194.component';
import { VcGeneralian158721Component } from './LNSPR/OPRTN/T_LNSPRNRRVDNTA_721/1.0.0/vc-generalian-158721.component';
import { VcLoansliner641705Component } from './LNSPR/OPRTN/T_LNSPRQGEMJIOM_705/1.0.0/vc-loansliner-641705.component';
import { VcLoanliness983793Component } from './LNSPR/OPRTN/T_LNSPRRLRKZDAH_793/1.0.0/vc-loanliness-983793.component';
import { VcProductlin542181Component } from './LNSPR/OPRTN/T_LNSPRSBSNRATX_181/1.0.0/vc-productlin-542181.component';
import { VcSyndicatdi660858Component } from './LNSPR/OPRTN/T_LNSPRSCSIDSOD_858/1.0.0/vc-syndicatdi-660858.component';
import { VcLoansopetn404268Component } from './LNSPR/OPRTN/T_LNSPRSHDBNXGH_268/1.0.0/vc-loansopetn-404268.component';
import { VcLoansalede341511Component } from './LNSPR/OPRTN/T_LNSPRSZYOCYQK_511/1.0.0/vc-loansalede-341511.component';
import { VcLoanssimoo401626Component } from './LNSPR/OPRTN/T_LNSPRTZAAOTEC_626/1.0.0/vc-loanssimoo-401626.component';
import { VcAdvancedae402451Component } from './LNSPR/OPRTN/T_LNSPRUJMIKLPE_451/1.0.0/vc-advancedae-402451.component';
import { VcModalrefte678446Component } from './LNSPR/OPRTN/T_LNSPRUPDQTUXI_446/1.0.0/vc-modalrefte-678446.component';
import { VcLoansupdee628908Component } from './LNSPR/OPRTN/T_LNSPRVJAKOEIC_908/1.0.0/vc-loansupdee-628908.component';
import { VcLoandebolr210579Component } from './LNSPR/OPRTN/T_LNSPRWENJKGKJ_579/1.0.0/vc-loandebolr-210579.component';
import { VcBatchmasss336618Component } from './LNSPR/OPRTN/T_LNSPRWQVPGSSG_618/1.0.0/vc-batchmasss-336618.component';
import { VcLoanlinens928556Component } from './LNSPR/OPRTN/T_LNSPRXLZJGUMH_556/1.0.0/vc-loanlinens-928556.component';
import { VcOfficialnf999423Component } from './LNSPR/OPRTN/T_LNSPRXNWEODPH_423/1.0.0/vc-officialnf-999423.component';
import { VcPassivepte108832Component } from './LNSPR/OPRTN/T_LNSPRYTTPAWOT_832/1.0.0/vc-passivepte-108832.component';
import { VcPaymentsgr815507Component } from './LNSPR/OPRTN/T_LNSPRZYRPKNSX_507/1.0.0/vc-paymentsgr-815507.component';
// ASSTS - QUERIES
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
// TRANSACTIONS
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
/****************************** ASSTS - MAINTENANCE******************************/
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
  path: 'assts/mntnn/t_asstslfjqnqtj_171/1.0.0/vc_changepayy_935171',
  component: VcChangepayy935171Component,
  loadChildren: () => import('./ASSTS/MNTNN/T_ASSTSLFJQNQTJ_171/1.0.0/vc-changepayy-935171.module').then(m=>m.VcChangepayy935171Module)
},
{
  path: 'assts/mntnn/t_asstshrtayjid_195/1.0.0/vc_aggregatrt_463195',
  component: VcAggregatrt463195Component,
  loadChildren: () => import('./ASSTS/MNTNN/T_ASSTSHRTAYJID_195/1.0.0/vc-aggregatrt-463195.module').then(m=>m.VcAggregatrt463195Module)
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
 /****************************** LOANSOPERATION - OPERATION ******************************/
 {
  path: 'lnspr/oprtn/t_lnspracjaqdup_527/1.0.0/vc_repaymentt_461527',
  component: VcRepaymentt461527Component,
  loadChildren: () => import('./LNSPR/OPRTN/T_LNSPRACJAQDUP_527/1.0.0/vc-repaymentt-461527.module').then(m=>m.VcRepaymentt461527Module)
},
{
  path: 'lnspr/oprtn/t_lnsprasffucsu_551/1.0.0/vc_currentssn_601551',
  component: VcCurrentssn601551Component,
  loadChildren: () => import('./LNSPR/OPRTN/T_LNSPRASFFUCSU_551/1.0.0/vc-currentssn-601551.module').then(m=>m.VcCurrentssn601551Module)
},
{
  path: 'lnspr/oprtn/t_lnsprbypiflbg_956/1.0.0/vc_passivepif_144956',
  component: VcPassivepif144956Component,
  loadChildren: () => import('./LNSPR/OPRTN/T_LNSPRBYPIFLBG_956/1.0.0/vc-passivepif-144956.module').then(m=>m.VcPassivepif144956Module)
},
{
  path: 'lnspr/oprtn/t_lnsprdnbkfoti_411/1.0.0/vc_statuschvi_933411',
  component: VcStatuschvi933411Component,
  loadChildren: () => import('./LNSPR/OPRTN/T_LNSPRDNBKFOTI_411/1.0.0/vc-statuschvi-933411.module').then(m=>m.VcStatuschvi933411Module)
},
{
  path: 'lnspr/oprtn/t_lnsprdtsdfskq_539/1.0.0/vc_operationl_208539',
  component: VcOperationl208539Component,
  loadChildren: () => import('./LNSPR/OPRTN/T_LNSPRDTSDFSKQ_539/1.0.0/vc-operationl-208539.module').then(m=>m.VcOperationl208539Module)
},
{
  path: 'lnspr/oprtn/t_lnsprehkswwgn_923/1.0.0/vc_memberslnn_871923',
  component: VcMemberslnn871923Component,
  loadChildren: () => import('./LNSPR/OPRTN/T_LNSPREHKSWWGN_923/1.0.0/vc-memberslnn-871923.module').then(m=>m.VcMemberslnn871923Module)
},
{
  path: 'lnspr/oprtn/t_lnsprfyckevvp_737/1.0.0/vc_loanslinss_962737',
  component: VcLoanslinss962737Component,
  loadChildren: () => import('./LNSPR/OPRTN/T_LNSPRFYCKEVVP_737/1.0.0/vc-loanslinss-962737.module').then(m=>m.VcLoanslinss962737Module)
},
{
  path: 'lnspr/oprtn/t_lnsprgnpcexye_633/1.0.0/vc_operatiopa_648633',
  component: VcOperatiopa648633Component,
  loadChildren: () => import('./LNSPR/OPRTN/T_LNSPRGNPCEXYE_633/1.0.0/vc-operatiopa-648633.module').then(m=>m.VcOperatiopa648633Module)
},
{
  path: 'lnspr/oprtn/t_lnsprhwgylnwj_330/1.0.0/vc_operatioee_354330',
  component: VcOperatioee354330Component,
  loadChildren: () => import('./LNSPR/OPRTN/T_LNSPRHWGYLNWJ_330/1.0.0/vc-operatioee-354330.module').then(m=>m.VcOperatioee354330Module)
},
{
  path: 'lnspr/oprtn/t_lnsprhzikgunt_664/1.0.0/vc_accontsopt_347664',
  component: VcAccontsopt347664Component,
  loadChildren: () => import('./LNSPR/OPRTN/T_LNSPRHZIKGUNT_664/1.0.0/vc-accontsopt-347664.module').then(m=>m.VcAccontsopt347664Module)
},
{
  path: 'lnspr/oprtn/t_lnspriiyonzua_572/1.0.0/vc_loansaleva_321572',
  component: VcLoansaleva321572Component,
  loadChildren: () => import('./LNSPR/OPRTN/T_LNSPRIIYONZUA_572/1.0.0/vc-loansaleva-321572.module').then(m=>m.VcLoansaleva321572Module)
},
{
  path: 'lnspr/oprtn/t_lnsprjxwyqvok_830/1.0.0/vc_modaloperi_484830',
  component: VcModaloperi484830Component,
  loadChildren: () => import('./LNSPR/OPRTN/T_LNSPRJXWYQVOK_830/1.0.0/vc-modaloperi-484830.module').then(m=>m.VcModaloperi484830Module)
},
{
  path: 'lnspr/oprtn/t_lnsprkegmfgie_785/1.0.0/vc_operationn_207785',
  component: VcOperationn207785Component,
  loadChildren: () => import('./LNSPR/OPRTN/T_LNSPRKEGMFGIE_785/1.0.0/vc-operationn-207785.module').then(m=>m.VcOperationn207785Module)
},
{
  path: 'lnspr/oprtn/t_lnsprkwspljpi_575/1.0.0/vc_projectorc_636575',
  component: VcProjectorc636575Component,
  loadChildren: () => import('./LNSPR/OPRTN/T_LNSPRKWSPLJPI_575/1.0.0/vc-projectorc-636575.module').then(m=>m.VcProjectorc636575Module)
},
{
  path: 'lnspr/oprtn/t_lnsprmbvlaoga_193/1.0.0/vc_loanscreaa_299193',
  component: VcLoanscreaa299193Component,
  loadChildren: () => import('./LNSPR/OPRTN/T_LNSPRMBVLAOGA_193/1.0.0/vc-loanscreaa-299193.module').then(m=>m.VcLoanscreaa299193Module)
},
{
  path: 'lnspr/oprtn/t_lnsprmffwjgje_921/1.0.0/vc_loansearch_100921',
  component: VcLoansearch100921Component,
  loadChildren: () => import('./LNSPR/OPRTN/T_LNSPRMFFWJGJE_921/1.0.0/vc-loansearch-100921.module').then(m=>m.VcLoansearch100921Module)
},
{
  path: 'lnspr/oprtn/t_lnsprnbkrhaib_194/1.0.0/vc_loansdismm_305194',
  component: VcLoansdismm305194Component,
  loadChildren: () => import('./LNSPR/OPRTN/T_LNSPRNBKRHAIB_194/1.0.0/vc-loansdismm-305194.module').then(m=>m.VcLoansdismm305194Module)
},
{
  path: 'lnspr/oprtn/t_lnsprnrrvdnta_721/1.0.0/vc_generalian_158721',
  component: VcGeneralian158721Component,
  loadChildren: () => import('./LNSPR/OPRTN/T_LNSPRNRRVDNTA_721/1.0.0/vc-generalian-158721.module').then(m=>m.VcGeneralian158721Module)
},
{
  path: 'lnspr/oprtn/t_lnsprqgemjiom_705/1.0.0/vc_loansliner_641705',
  component: VcLoansliner641705Component,
  loadChildren: () => import('./LNSPR/OPRTN/T_LNSPRQGEMJIOM_705/1.0.0/vc-loansliner-641705.module').then(m=>m.VcLoansliner641705Module)
},
{
  path: 'lnspr/oprtn/t_lnsprrlrkzdah_793/1.0.0/vc_loanliness_983793',
  component: VcLoanliness983793Component,
  loadChildren: () => import('./LNSPR/OPRTN/T_LNSPRRLRKZDAH_793/1.0.0/vc-loanliness-983793.module').then(m=>m.VcLoanliness983793Module)
},
{
  path: 'lnspr/oprtn/t_lnsprsbsnratx_181/1.0.0/vc_productlin_542181',
  component: VcProductlin542181Component,
  loadChildren: () => import('./LNSPR/OPRTN/T_LNSPRSBSNRATX_181/1.0.0/vc-productlin-542181.module').then(m=>m.VcProductlin542181Module)
},
{
  path: 'lnspr/oprtn/t_lnsprscsidsod_858/1.0.0/vc_syndicatdi_660858',
  component: VcSyndicatdi660858Component,
  loadChildren: () => import('./LNSPR/OPRTN/T_LNSPRSCSIDSOD_858/1.0.0/vc-syndicatdi-660858.module').then(m=>m.VcSyndicatdi660858Module)
},
{
  path: 'lnspr/oprtn/t_lnsprshdbnxgh_268/1.0.0/vc_loansopetn_404268',
  component: VcLoansopetn404268Component,
  loadChildren: () => import('./LNSPR/OPRTN/T_LNSPRSHDBNXGH_268/1.0.0/vc-loansopetn-404268.module').then(m=>m.VcLoansopetn404268Module)
},
{
  path: 'lnspr/oprtn/t_lnsprszyocyqk_511/1.0.0/vc_loansalede_341511',
  component: VcLoansalede341511Component,
  loadChildren: () => import('./LNSPR/OPRTN/T_LNSPRSZYOCYQK_511/1.0.0/vc-loansalede-341511.module').then(m=>m.VcLoansalede341511Module)
},
{
  path: 'lnspr/oprtn/t_lnsprtzaaotec_626/1.0.0/vc_loanssimoo_401626',
  component: VcLoanssimoo401626Component,
  loadChildren: () => import('./LNSPR/OPRTN/T_LNSPRTZAAOTEC_626/1.0.0/vc-loanssimoo-401626.module').then(m=>m.VcLoanssimoo401626Module)
},
{
  path: 'lnspr/oprtn/t_lnsprujmiklpe_451/1.0.0/vc_advancedae_402451',
  component: VcAdvancedae402451Component,
  loadChildren: () => import('./LNSPR/OPRTN/T_LNSPRUJMIKLPE_451/1.0.0/vc-advancedae-402451.module').then(m=>m.VcAdvancedae402451Module)
},
{
  path: 'lnspr/oprtn/t_lnsprupdqtuxi_446/1.0.0/vc_modalrefte_678446',
  component: VcModalrefte678446Component,
  loadChildren: () => import('./LNSPR/OPRTN/T_LNSPRUPDQTUXI_446/1.0.0/vc-modalrefte-678446.module').then(m=>m.VcModalrefte678446Module)
},
{
  path: 'lnspr/oprtn/t_lnsprvjakoeic_908/1.0.0/vc_loansupdee_628908',
  component: VcLoansupdee628908Component,
  loadChildren: () => import('./LNSPR/OPRTN/T_LNSPRVJAKOEIC_908/1.0.0/vc-loansupdee-628908.module').then(m=>m.VcLoansupdee628908Module)
},
{
  path: 'lnspr/oprtn/t_lnsprwenjkgkj_579/1.0.0/vc_loandebolr_210579',
  component: VcLoandebolr210579Component,
  loadChildren: () => import('./LNSPR/OPRTN/T_LNSPRWENJKGKJ_579/1.0.0/vc-loandebolr-210579.module').then(m=>m.VcLoandebolr210579Module)
},
{
  path: 'lnspr/oprtn/t_lnsprwqvpgssg_618/1.0.0/vc_batchmasss_336618',
  component: VcBatchmasss336618Component,
  loadChildren: () => import('./LNSPR/OPRTN/T_LNSPRWQVPGSSG_618/1.0.0/vc-batchmasss-336618.module').then(m=>m.VcBatchmasss336618Module)
},
{
  path: 'lnspr/oprtn/t_lnsprxlzjgumh_556/1.0.0/vc_loanlinens_928556',
  component: VcLoanlinens928556Component,
  loadChildren: () => import('./LNSPR/OPRTN/T_LNSPRXLZJGUMH_556/1.0.0/vc-loanlinens-928556.module').then(m=>m.VcLoanlinens928556Module)
},
{
  path: 'lnspr/oprtn/t_lnsprxnweodph_423/1.0.0/vc_officialnf_999423',
  component: VcOfficialnf999423Component,
  loadChildren: () => import('./LNSPR/OPRTN/T_LNSPRXNWEODPH_423/1.0.0/vc-officialnf-999423.module').then(m=>m.VcOfficialnf999423Module)
},
{
  path: 'lnspr/oprtn/t_lnspryttpawot_832/1.0.0/vc_passivepte_108832',
  component: VcPassivepte108832Component,
  loadChildren: () => import('./LNSPR/OPRTN/T_LNSPRYTTPAWOT_832/1.0.0/vc-passivepte-108832.module').then(m=>m.VcPassivepte108832Module)
},
{
  path: 'lnspr/oprtn/t_lnsprzyrpknsx_507/1.0.0/vc_paymentsgr_815507',
  component: VcPaymentsgr815507Component,
  loadChildren: () => import('./LNSPR/OPRTN/T_LNSPRZYRPKNSX_507/1.0.0/vc-paymentsgr-815507.module').then(m=>m.VcPaymentsgr815507Module)
},
 /****************************** ASSTS - QUERIES ******************************/
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
/****************************** ASSTS -TRANSACTIONS ******************************/
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
