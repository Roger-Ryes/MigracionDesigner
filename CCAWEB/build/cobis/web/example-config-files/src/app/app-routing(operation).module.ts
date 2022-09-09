import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CobisProxyComponent, CobisCustomProxyComponent } from 'cobis-commons';

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

// TODO: Add manual controls imports


const routes: Routes = [
  {
    path: '',
    redirectTo: 'xxxx', // TODO: Add default path
    pathMatch: 'full',
  },

  /****************************** LOANSOPERATION ******************************/
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
