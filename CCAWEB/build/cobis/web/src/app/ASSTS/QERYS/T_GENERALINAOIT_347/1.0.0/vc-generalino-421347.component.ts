//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-generalino-421347.model';
import { ViewState } from './model/vc-generalino-421347-view-state';
import { VcGeneralino421347Custom } from './vc-generalino-421347.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-generalino-421347',
templateUrl: './vc-generalino-421347.component.html'
})
export class VcGeneralino421347Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcGeneralino421347Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
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
ColumnsDataValue: viewState.T_GENERALINAOIT_347.controls.ColumnsDataValue as FormGroup ,
OperationPaymentColumn: viewState.T_GENERALINAOIT_347.controls.OperationPaymentColumn as FormGroup ,
LoanInstancia: viewState.T_GENERALINAOIT_347.controls.LoanInstancia as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'QERYS', taskId: 'T_GENERALINAOIT_347', taskVersion: '1.0.0', vcId: 'VC_GENERALINO_421347', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/QERYS/T_GENERALINAOIT_347', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ]), listsValues: new Map<string, ICobisListValuesInfo>([ [ 'VA_1FGSVHUUVWIKFUH_287203',{ data : [ new CobisModelCatalog ( 'A' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_PAGLOSILN_96114') ), new CobisModelCatalog ( 'P' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_PAGLOSIEP_96130') )] }], [ 'VA_2SRBPZVHVQZKGLJ_978203',{ data : [ new CobisModelCatalog ( 'D' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_PAGOSPORU_97832') ), new CobisModelCatalog ( 'N' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_PAGOSPOOR_85715') )] }], [ 'VA_7HLMTHMOBEPUKDK_450203',{ data : [ new CobisModelCatalog ( 'N' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_PAGONORAM_52650') ), new CobisModelCatalog ( 'C' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_PAGOEXTDI_51205') ), new CobisModelCatalog ( 'T' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_PAGOEXTTR_95610') )] }], [ 'VA_3NNEJBUKBEXSHGE_308203',{ data : [ new CobisModelCatalog ( 'S' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_SIJWWZUQL_76896') ), new CobisModelCatalog ( 'N' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_NOTNCMKBQ_41776') )] }], [ 'VA_4FLCMFUIKOOYYCR_921203',{ data : [ new CobisModelCatalog ( 'S' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_SIJWWZUQL_76896') ), new CobisModelCatalog ( 'N' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_NOTNCMKBQ_41776') )] }], [ 'VA_5KYGLTQZCBSQIFR_819203',{ data : [ new CobisModelCatalog ( 'S' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_SIJWWZUQL_76896') ), new CobisModelCatalog ( 'N' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_NOTNCMKBQ_41776') )] }], [ 'VA_6ECRCCEMLGMWTWN_816203',{ data : [ new CobisModelCatalog ( 'S' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_SIJWWZUQL_76896') ), new CobisModelCatalog ( 'N' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_NOTNCMKBQ_41776') )] }], ]) , label: 'GeneralInformationForm' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
