//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-paymentmda-338828.model';
import { ViewState } from './model/vc-paymentmda-338828-view-state';
import { VcPaymentmda338828Custom } from './vc-paymentmda-338828.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-paymentmda-338828',
templateUrl: './vc-paymentmda-338828.component.html'
})
export class VcPaymentmda338828Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcPaymentmda338828Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
this.changeDetector.detectChanges();
}
ngAfterContentChecked() {
this.changeDetector.detectChanges()
}
inicializar() {
this.suscripQueryParams = this.activatedRoute.queryParams.subscribe((params) => {
let viewState = new ViewState(this.designer.cobisCommons, this.formBuilder, this.getMode(params));
this.initRefViewState(this.refViewState, viewState);
let formGroupArray = {
MethodsRetention: viewState.T_PAYMENTMAIDLT_828.controls.MethodsRetention as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'MNTNN', taskId: 'T_PAYMENTMAIDLT_828', taskVersion: '1.0.0', vcId: 'VC_PAYMENTMDA_338828', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/MNTNN/T_PAYMENTMAIDLT_828', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ['VA_PAYMENTMETHODSD_816701', { filter:"", cobisRequestServerConfig: null, cache: 0 }], ['VA_PCOBISNSCZVLGJB_151701', { filter:"", cobisRequestServerConfig: null, cache: 0 }], ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ['VA_CURRENCYRETETTO_736701', { catalogName: 'cl_moneda', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_CATEGORYPGXZQCK_157701', { catalogName: 'cl_cforma', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_CANALAHHGQQRYXT_909701', { catalogName: 'cl_canal', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_STATEUKNKICEOOK_121701', { catalogName: 'cl_estado_ser', filter: "", cobisRequestServerConfig: null, cache: 0 }], ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ]), listsValues: new Map<string, ICobisListValuesInfo>([ [ 'VA_ACTIVEPASSIVEEE_865701',{ data : [ new CobisModelCatalog ( 'A' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_ACTIVAPDK_42550') ), new CobisModelCatalog ( 'P' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_PASIVAVBI_65646') ), new CobisModelCatalog ( 'T' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_ACTIVAYIV_42469') )] }], [ 'VA_DISBURSEMENTDSI_289701',{ data : [ new CobisModelCatalog ( 'S' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_SIJWWZUQL_76896') ), new CobisModelCatalog ( 'N' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_NOTNCMKBQ_41776') )] }], [ 'VA_BANKSERVICESDQR_160701',{ data : [ new CobisModelCatalog ( 'S' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_SIJWWZUQL_76896') ), new CobisModelCatalog ( 'N' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_NOTNCMKBQ_41776') )] }], [ 'VA_PAYMENTATXPGDKX_602701',{ data : [ new CobisModelCatalog ( 'S' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_SIJWWZUQL_76896') ), new CobisModelCatalog ( 'N' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_NOTNCMKBQ_41776') )] }], [ 'VA_PAYMENTAUTLPCHV_485701',{ data : [ new CobisModelCatalog ( 'S' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_SIJWWZUQL_76896') ), new CobisModelCatalog ( 'N' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_NOTNCMKBQ_41776') )] }], [ 'VA_PAYMENTKWAZXHOL_773701',{ data : [ new CobisModelCatalog ( 'S' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_SIJWWZUQL_76896') ), new CobisModelCatalog ( 'N' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_NOTNCMKBQ_41776') )] }], [ 'VA_4075QLSXXQCUIPT_367701',{ data : [ new CobisModelCatalog ( 'S' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_SIJWWZUQL_76896') ), new CobisModelCatalog ( 'N' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_NOTNCMKBQ_41776') )] }], [ 'VA_TRANSACCTIONKAF_634701',{ data : [ new CobisModelCatalog ( 'D' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_DBITOKBTP_87929') ), new CobisModelCatalog ( 'C' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_CRDITOPCP_29618') )] }], ]) , label: 'PaymentMaintenanceModal' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
