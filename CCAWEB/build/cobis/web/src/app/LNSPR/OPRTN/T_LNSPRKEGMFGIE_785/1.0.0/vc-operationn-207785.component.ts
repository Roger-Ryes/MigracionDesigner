//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-operationn-207785.model';
import { ViewState } from './model/vc-operationn-207785-view-state';
import { VcOperationn207785Custom } from './vc-operationn-207785.custom';
import { LNSPRService} from 'src/app/LNSPR/service-modules/LNSPR.service';
@Component({
selector: 'cobis-vc-operationn-207785',
templateUrl: './vc-operationn-207785.component.html'
})
export class VcOperationn207785Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private lnspr: LNSPRService) {
super(new VcOperationn207785Custom(designer.cobisCommons,lnspr), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
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
GeneralParametersQuery: viewState.T_LNSPRKEGMFGIE_785.controls.GeneralParametersQuery as FormGroup
};
this.metaData = { moduleId: 'LNSPR', subModuleId: 'OPRTN', taskId: 'T_LNSPRKEGMFGIE_785', taskVersion: '1.0.0', vcId: 'VC_OPERATIONN_207785', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, true), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/LNSPR/OPRTN/T_LNSPRKEGMFGIE_785', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ['VA_9193TCVDUUBRZAN_137309', { catalogName: 'ca_base_tasa_desc', filter: "", cobisRequestServerConfig: null, cache: 0 }], ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['VA_PAYMENTMETHODDD_220309', { queryId: 'Q_APAGOOOO_YV30', entityName: '', filter:"", cobisRequestServerConfig: {'filterType':'none'}, cache: 0 }], ]), listsValues: new Map<string, ICobisListValuesInfo>([ [ 'VA_ALLOWSRENEWALLL_150309',{ data : [ new CobisModelCatalog ( 'S' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_SIBZYIGKU_69312') ), new CobisModelCatalog ( 'N' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_NOWLDIIOP_91697') )] }], [ 'VA_READJUSTABLELXP_279309',{ data : [ new CobisModelCatalog ( 'S' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_SIBZYIGKU_69312') ), new CobisModelCatalog ( 'N' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_NOWLDIIOP_91697') )] }], [ 'VA_RESTRUCTURINGGG_731309',{ data : [ new CobisModelCatalog ( 'S' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_SIBZYIGKU_69312') ), new CobisModelCatalog ( 'N' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_NOWLDIIOP_91697') )] }], [ 'VA_ACCEPTADDITIYNN_323309',{ data : [ new CobisModelCatalog ( 'S' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_SIBZYIGKU_69312') ), new CobisModelCatalog ( 'N' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_NOWLDIIOP_91697') )] }], [ 'VA_INTERESTPAYMNNE_508309',{ data : [ new CobisModelCatalog ( 'A' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_PAGAINTLD_26849') ), new CobisModelCatalog ( 'P' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_PAGAINTOE_93286') )] }], [ 'VA_PAYFULLFEEVHEVU_441309',{ data : [ new CobisModelCatalog ( 'S' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_SIBZYIGKU_69312') ), new CobisModelCatalog ( 'N' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_NOWLDIIOP_91697') )] }], [ 'VA_KINDPAYMENTDUCW_586309',{ data : [ new CobisModelCatalog ( 'D' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_PAGOSPORC_41308') ), new CobisModelCatalog ( 'N' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_PAGOSPORU_93417') )] }], [ 'VA_CASHPAYMENTSUUG_169309',{ data : [ new CobisModelCatalog ( 'S' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_SIBZYIGKU_69312') ), new CobisModelCatalog ( 'N' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_NOWLDIIOP_91697') )] }], [ 'VA_TYPEPAYMENTNPPY_513309',{ data : [ new CobisModelCatalog ( 'N' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_PAGONORAA_14475') ), new CobisModelCatalog ( 'C' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_PAGOEXTRC_38468') ), new CobisModelCatalog ( 'T' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_PAGOEXTDR_53649') )] }], ]) , label: 'OperationLoansGeneralParametersForm' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
