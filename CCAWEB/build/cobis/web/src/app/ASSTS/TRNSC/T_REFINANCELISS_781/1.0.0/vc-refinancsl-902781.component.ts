//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-refinancsl-902781.model';
import { ViewState } from './model/vc-refinancsl-902781-view-state';
import { VcRefinancsl902781Custom } from './vc-refinancsl-902781.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-refinancsl-902781',
templateUrl: './vc-refinancsl-902781.component.html'
})
export class VcRefinancsl902781Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcRefinancsl902781Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXMHS_260515 = this.metaData.viewState["QV_3375_11342"].columns.find((col: any) => col.field == 'loan');
if (column_VA_TEXTINPUTBOXMHS_260515 != undefined) {
const tplCell_VA_TEXTINPUTBOXMHS_260515 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXMHS_260515');
column_VA_TEXTINPUTBOXMHS_260515.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXMHS_260515?.templateRef;
const tplEdit_VA_TEXTINPUTBOXMHS_260515 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXMHS_260515');
column_VA_TEXTINPUTBOXMHS_260515.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXMHS_260515?.templateRef;
}
const column_VA_TEXTINPUTBOXSSV_745515 = this.metaData.viewState["QV_3375_11342"].columns.find((col: any) => col.field == 'line');
if (column_VA_TEXTINPUTBOXSSV_745515 != undefined) {
const tplCell_VA_TEXTINPUTBOXSSV_745515 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXSSV_745515');
column_VA_TEXTINPUTBOXSSV_745515.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXSSV_745515?.templateRef;
const tplEdit_VA_TEXTINPUTBOXSSV_745515 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXSSV_745515');
column_VA_TEXTINPUTBOXSSV_745515.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXSSV_745515?.templateRef;
}
const column_VA_TEXTINPUTBOXYEW_490515 = this.metaData.viewState["QV_3375_11342"].columns.find((col: any) => col.field == 'currencyType');
if (column_VA_TEXTINPUTBOXYEW_490515 != undefined) {
const tplCell_VA_TEXTINPUTBOXYEW_490515 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXYEW_490515');
column_VA_TEXTINPUTBOXYEW_490515.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXYEW_490515?.templateRef;
const tplEdit_VA_TEXTINPUTBOXYEW_490515 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXYEW_490515');
column_VA_TEXTINPUTBOXYEW_490515.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXYEW_490515?.templateRef;
}
const column_VA_TEXTINPUTBOXFDY_704515 = this.metaData.viewState["QV_3375_11342"].columns.find((col: any) => col.field == 'initialAmount');
if (column_VA_TEXTINPUTBOXFDY_704515 != undefined) {
const tplCell_VA_TEXTINPUTBOXFDY_704515 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXFDY_704515');
column_VA_TEXTINPUTBOXFDY_704515.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXFDY_704515?.templateRef;
const tplEdit_VA_TEXTINPUTBOXFDY_704515 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXFDY_704515');
column_VA_TEXTINPUTBOXFDY_704515.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXFDY_704515?.templateRef;
}
const column_VA_TEXTINPUTBOXFFP_550515 = this.metaData.viewState["QV_3375_11342"].columns.find((col: any) => col.field == 'originalTerm');
if (column_VA_TEXTINPUTBOXFFP_550515 != undefined) {
const tplCell_VA_TEXTINPUTBOXFFP_550515 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXFFP_550515');
column_VA_TEXTINPUTBOXFFP_550515.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXFFP_550515?.templateRef;
const tplEdit_VA_TEXTINPUTBOXFFP_550515 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXFFP_550515');
column_VA_TEXTINPUTBOXFFP_550515.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXFFP_550515?.templateRef;
}
const column_VA_TEXTINPUTBOXROR_675515 = this.metaData.viewState["QV_3375_11342"].columns.find((col: any) => col.field == 'capitalBalance');
if (column_VA_TEXTINPUTBOXROR_675515 != undefined) {
const tplCell_VA_TEXTINPUTBOXROR_675515 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXROR_675515');
column_VA_TEXTINPUTBOXROR_675515.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXROR_675515?.templateRef;
const tplEdit_VA_TEXTINPUTBOXROR_675515 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXROR_675515');
column_VA_TEXTINPUTBOXROR_675515.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXROR_675515?.templateRef;
}
const column_VA_TEXTINPUTBOXPZA_248515 = this.metaData.viewState["QV_3375_11342"].columns.find((col: any) => col.field == 'interestBalance');
if (column_VA_TEXTINPUTBOXPZA_248515 != undefined) {
const tplCell_VA_TEXTINPUTBOXPZA_248515 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXPZA_248515');
column_VA_TEXTINPUTBOXPZA_248515.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXPZA_248515?.templateRef;
const tplEdit_VA_TEXTINPUTBOXPZA_248515 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXPZA_248515');
column_VA_TEXTINPUTBOXPZA_248515.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXPZA_248515?.templateRef;
}
const column_VA_TEXTINPUTBOXEQH_169515 = this.metaData.viewState["QV_3375_11342"].columns.find((col: any) => col.field == 'defaultBalance');
if (column_VA_TEXTINPUTBOXEQH_169515 != undefined) {
const tplCell_VA_TEXTINPUTBOXEQH_169515 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXEQH_169515');
column_VA_TEXTINPUTBOXEQH_169515.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXEQH_169515?.templateRef;
const tplEdit_VA_TEXTINPUTBOXEQH_169515 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXEQH_169515');
column_VA_TEXTINPUTBOXEQH_169515.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXEQH_169515?.templateRef;
}
const column_VA_TEXTINPUTBOXIKG_248515 = this.metaData.viewState["QV_3375_11342"].columns.find((col: any) => col.field == 'otherConceptsBalance');
if (column_VA_TEXTINPUTBOXIKG_248515 != undefined) {
const tplCell_VA_TEXTINPUTBOXIKG_248515 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXIKG_248515');
column_VA_TEXTINPUTBOXIKG_248515.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXIKG_248515?.templateRef;
const tplEdit_VA_TEXTINPUTBOXIKG_248515 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXIKG_248515');
column_VA_TEXTINPUTBOXIKG_248515.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXIKG_248515?.templateRef;
}
const column_VA_TEXTINPUTBOXMUB_575515 = this.metaData.viewState["QV_3375_11342"].columns.find((col: any) => col.field == 'residualTerm');
if (column_VA_TEXTINPUTBOXMUB_575515 != undefined) {
const tplCell_VA_TEXTINPUTBOXMUB_575515 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXMUB_575515');
column_VA_TEXTINPUTBOXMUB_575515.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXMUB_575515?.templateRef;
const tplEdit_VA_TEXTINPUTBOXMUB_575515 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXMUB_575515');
column_VA_TEXTINPUTBOXMUB_575515.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXMUB_575515?.templateRef;
}
const column_VA_TEXTINPUTBOXIFR_825515 = this.metaData.viewState["QV_3375_11342"].columns.find((col: any) => col.field == 'overdueFees');
if (column_VA_TEXTINPUTBOXIFR_825515 != undefined) {
const tplCell_VA_TEXTINPUTBOXIFR_825515 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXIFR_825515');
column_VA_TEXTINPUTBOXIFR_825515.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXIFR_825515?.templateRef;
const tplEdit_VA_TEXTINPUTBOXIFR_825515 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXIFR_825515');
column_VA_TEXTINPUTBOXIFR_825515.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXIFR_825515?.templateRef;
}
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
RefinanceLoanFilter: viewState.T_REFINANCELISS_781.controls.RefinanceLoanFilter as FormGroup ,
RefinanceLoans: viewState.T_REFINANCELISS_781.controls.RefinanceLoans as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'TRNSC', taskId: 'T_REFINANCELISS_781', taskVersion: '1.0.0', vcId: 'VC_REFINANCSL_902781', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, true), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/TRNSC/T_REFINANCELISS_781', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ['VA_PREVENTIONPRRAM_747515', { filter:"", cobisRequestServerConfig: null, cache: 0 }], ['VA_BASICINSURANCEC_861515', { filter:"", cobisRequestServerConfig: null, cache: 0 }], ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ['VA_TEXTINPUTBOXYEW_490515', { catalogName: 'cl_moneda', filter: "", cobisRequestServerConfig: null, cache: 0 , controlGridInfo: { queryViewId: "QV_3375_11342", columnId: "currencyType" } }], ['VA_OPERATIONTYPEEE_619515', { catalogName: 'ca_toperacion', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_NEWLOANCURRENNN_364515', { catalogName: 'cl_moneda', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_PERIODICITYSUIR_653515', { catalogName: 'ca_tdividendo', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_TYPEFEENRTBGEUS_485515', { catalogName: 'ca_tdividendo', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_TYPERENOVATIONO_499515', { catalogName: 'ca_tipo_renovacion', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_PAYMETHODCURCYE_344515', { catalogName: 'cl_moneda', filter: "", cobisRequestServerConfig: null, cache: 0 }], ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_3375_11342', { queryId: 'Q_REFINAAA_3375', entityName: 'RefinanceLoans', filter: "", cobisRequestServerConfig: { pageSize :4 }, cache: 0, queryMemberParameters:[ ]}], ['VA_ADDICIONALPAYOH_649515', { queryId: 'Q_LISTOOGA_DP31', entityName: '', filter:"", cobisRequestServerConfig: null, cache: 0 }], ]), listsValues: new Map<string, ICobisListValuesInfo>([ [ 'VA_CAPITALIZEBANNE_580515',{ data : [ new CobisModelCatalog ( 'S' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_SIJWWZUQL_76896') ), new CobisModelCatalog ( 'N' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_NOTNCMKBQ_41776') )] }], [ 'VA_OVERDUEVFBXKALY_348515',{ data : [ new CobisModelCatalog ( 'SI' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_SIJWWZUQL_76896') ), new CobisModelCatalog ( 'NO' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_NOTNCMKBQ_41776') )] }], [ 'VA_PAYMENTDAYUXWKU_656515',{ data : [ new CobisModelCatalog ( '0' , '0' ), new CobisModelCatalog ( '1' , '1' ), new CobisModelCatalog ( '2' , '2' ), new CobisModelCatalog ( '3' , '3' ), new CobisModelCatalog ( '4' , '4' ), new CobisModelCatalog ( '5' , '5' ), new CobisModelCatalog ( '6' , '6' ), new CobisModelCatalog ( '7' , '7' ), new CobisModelCatalog ( '8' , '8' ), new CobisModelCatalog ( '9' , '9' ), new CobisModelCatalog ( '10' , '10' ), new CobisModelCatalog ( '11' , '11' ), new CobisModelCatalog ( '12' , '12' ), new CobisModelCatalog ( '13' , '13' ), new CobisModelCatalog ( '14' , '14' ), new CobisModelCatalog ( '15' , '15' ), new CobisModelCatalog ( '16' , '16' ), new CobisModelCatalog ( '17' , '17' ), new CobisModelCatalog ( '18' , '18' ), new CobisModelCatalog ( '19' , '19' ), new CobisModelCatalog ( '20' , '20' ), new CobisModelCatalog ( '21' , '21' ), new CobisModelCatalog ( '22' , '22' ), new CobisModelCatalog ( '23' , '23' ), new CobisModelCatalog ( '24' , '24' ), new CobisModelCatalog ( '25' , '25' ), new CobisModelCatalog ( '26' , '26' ), new CobisModelCatalog ( '27' , '27' ), new CobisModelCatalog ( '28' , '28' ), new CobisModelCatalog ( '29' , '29' ), new CobisModelCatalog ( '30' , '30' ), new CobisModelCatalog ( '31' , '31' )] }], [ 'VA_TYPEGRACECCQFCY_562515',{ data : [ new CobisModelCatalog ( 'S' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_ENCUOTANS_97139') ), new CobisModelCatalog ( 'N' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_ENPRIMEAA_18469') ), new CobisModelCatalog ( 'M' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_PERIODORR_35761') )] }], ]) , label: 'ASSTS.LBL_ASSTS_RENOVACMA_67253' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
