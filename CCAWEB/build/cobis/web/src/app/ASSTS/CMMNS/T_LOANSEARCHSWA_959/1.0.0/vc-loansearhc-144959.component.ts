//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-loansearhc-144959.model';
import { ViewState } from './model/vc-loansearhc-144959-view-state';
import { VcLoansearhc144959Custom } from './vc-loansearhc-144959.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-loansearhc-144959',
templateUrl: './vc-loansearhc-144959.component.html'
})
export class VcLoansearhc144959Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcLoansearhc144959Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXDAN_761508 = this.metaData.viewState["QV_3009_96085"].columns.find((col: any) => col.field == 'desOperationType');
if (column_VA_TEXTINPUTBOXDAN_761508 != undefined) {
const tplCell_VA_TEXTINPUTBOXDAN_761508 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXDAN_761508');
column_VA_TEXTINPUTBOXDAN_761508.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXDAN_761508?.templateRef;
const tplEdit_VA_TEXTINPUTBOXDAN_761508 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXDAN_761508');
column_VA_TEXTINPUTBOXDAN_761508.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXDAN_761508?.templateRef;
}
const column_VA_TEXTINPUTBOXFXZ_333508 = this.metaData.viewState["QV_3009_96085"].columns.find((col: any) => col.field == 'loanBankID');
if (column_VA_TEXTINPUTBOXFXZ_333508 != undefined) {
const tplCell_VA_TEXTINPUTBOXFXZ_333508 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXFXZ_333508');
column_VA_TEXTINPUTBOXFXZ_333508.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXFXZ_333508?.templateRef;
const tplEdit_VA_TEXTINPUTBOXFXZ_333508 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXFXZ_333508');
column_VA_TEXTINPUTBOXFXZ_333508.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXFXZ_333508?.templateRef;
}
const column_VA_TEXTINPUTBOXEUM_243508 = this.metaData.viewState["QV_3009_96085"].columns.find((col: any) => col.field == 'clientID');
if (column_VA_TEXTINPUTBOXEUM_243508 != undefined) {
const tplCell_VA_TEXTINPUTBOXEUM_243508 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXEUM_243508');
column_VA_TEXTINPUTBOXEUM_243508.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXEUM_243508?.templateRef;
const tplEdit_VA_TEXTINPUTBOXEUM_243508 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXEUM_243508');
column_VA_TEXTINPUTBOXEUM_243508.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXEUM_243508?.templateRef;
}
const column_VA_TEXTINPUTBOXBPY_504508 = this.metaData.viewState["QV_3009_96085"].columns.find((col: any) => col.field == 'clientName');
if (column_VA_TEXTINPUTBOXBPY_504508 != undefined) {
const tplCell_VA_TEXTINPUTBOXBPY_504508 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXBPY_504508');
column_VA_TEXTINPUTBOXBPY_504508.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXBPY_504508?.templateRef;
const tplEdit_VA_TEXTINPUTBOXBPY_504508 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXBPY_504508');
column_VA_TEXTINPUTBOXBPY_504508.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXBPY_504508?.templateRef;
}
const column_VA_TEXTINPUTBOXWLO_792508 = this.metaData.viewState["QV_3009_96085"].columns.find((col: any) => col.field == 'amount');
if (column_VA_TEXTINPUTBOXWLO_792508 != undefined) {
const tplCell_VA_TEXTINPUTBOXWLO_792508 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXWLO_792508');
column_VA_TEXTINPUTBOXWLO_792508.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXWLO_792508?.templateRef;
const tplEdit_VA_TEXTINPUTBOXWLO_792508 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXWLO_792508');
column_VA_TEXTINPUTBOXWLO_792508.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXWLO_792508?.templateRef;
}
const column_VA_TEXTINPUTBOXLLX_842508 = this.metaData.viewState["QV_3009_96085"].columns.find((col: any) => col.field == 'status');
if (column_VA_TEXTINPUTBOXLLX_842508 != undefined) {
const tplCell_VA_TEXTINPUTBOXLLX_842508 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXLLX_842508');
column_VA_TEXTINPUTBOXLLX_842508.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXLLX_842508?.templateRef;
const tplEdit_VA_TEXTINPUTBOXLLX_842508 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXLLX_842508');
column_VA_TEXTINPUTBOXLLX_842508.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXLLX_842508?.templateRef;
}
const column_VA_DATEFIELDDDLJHB_303508 = this.metaData.viewState["QV_3009_96085"].columns.find((col: any) => col.field == 'expirationDate');
if (column_VA_DATEFIELDDDLJHB_303508 != undefined) {
const tplCell_VA_DATEFIELDDDLJHB_303508 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DATEFIELDDDLJHB_303508');
column_VA_DATEFIELDDDLJHB_303508.properties.cellTemplate = tplCell_VA_DATEFIELDDDLJHB_303508?.templateRef;
const tplEdit_VA_DATEFIELDDDLJHB_303508 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DATEFIELDDDLJHB_303508');
column_VA_DATEFIELDDDLJHB_303508.properties.editTemplate = tplEdit_VA_DATEFIELDDDLJHB_303508?.templateRef;
}
const column_VA_TEXTINPUTBOXVFT_322508 = this.metaData.viewState["QV_3009_96085"].columns.find((col: any) => col.field == 'codCurrency');
if (column_VA_TEXTINPUTBOXVFT_322508 != undefined) {
const tplCell_VA_TEXTINPUTBOXVFT_322508 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXVFT_322508');
column_VA_TEXTINPUTBOXVFT_322508.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXVFT_322508?.templateRef;
const tplEdit_VA_TEXTINPUTBOXVFT_322508 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXVFT_322508');
column_VA_TEXTINPUTBOXVFT_322508.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXVFT_322508?.templateRef;
}
const column_VA_DATEFIELDLYQLTD_622508 = this.metaData.viewState["QV_3009_96085"].columns.find((col: any) => col.field == 'disbursementDate');
if (column_VA_DATEFIELDLYQLTD_622508 != undefined) {
const tplCell_VA_DATEFIELDLYQLTD_622508 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DATEFIELDLYQLTD_622508');
column_VA_DATEFIELDLYQLTD_622508.properties.cellTemplate = tplCell_VA_DATEFIELDLYQLTD_622508?.templateRef;
const tplEdit_VA_DATEFIELDLYQLTD_622508 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DATEFIELDLYQLTD_622508');
column_VA_DATEFIELDLYQLTD_622508.properties.editTemplate = tplEdit_VA_DATEFIELDLYQLTD_622508?.templateRef;
}
const column_VA_TEXTINPUTBOXXJI_412508 = this.metaData.viewState["QV_3009_96085"].columns.find((col: any) => col.field == 'numProcedure');
if (column_VA_TEXTINPUTBOXXJI_412508 != undefined) {
const tplCell_VA_TEXTINPUTBOXXJI_412508 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXXJI_412508');
column_VA_TEXTINPUTBOXXJI_412508.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXXJI_412508?.templateRef;
const tplEdit_VA_TEXTINPUTBOXXJI_412508 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXXJI_412508');
column_VA_TEXTINPUTBOXXJI_412508.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXXJI_412508?.templateRef;
}
const column_VA_TEXTINPUTBOXBHQ_121508 = this.metaData.viewState["QV_3009_96085"].columns.find((col: any) => col.field == 'group');
if (column_VA_TEXTINPUTBOXBHQ_121508 != undefined) {
const tplCell_VA_TEXTINPUTBOXBHQ_121508 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXBHQ_121508');
column_VA_TEXTINPUTBOXBHQ_121508.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXBHQ_121508?.templateRef;
const tplEdit_VA_TEXTINPUTBOXBHQ_121508 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXBHQ_121508');
column_VA_TEXTINPUTBOXBHQ_121508.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXBHQ_121508?.templateRef;
}
const column_VA_TEXTINPUTBOXGYK_201508 = this.metaData.viewState["QV_3009_96085"].columns.find((col: any) => col.field == 'categoryGroup');
if (column_VA_TEXTINPUTBOXGYK_201508 != undefined) {
const tplCell_VA_TEXTINPUTBOXGYK_201508 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXGYK_201508');
column_VA_TEXTINPUTBOXGYK_201508.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXGYK_201508?.templateRef;
const tplEdit_VA_TEXTINPUTBOXGYK_201508 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXGYK_201508');
column_VA_TEXTINPUTBOXGYK_201508.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXGYK_201508?.templateRef;
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
LoanSearchFilter: viewState.T_LOANSEARCHSWA_959.controls.LoanSearchFilter as FormGroup ,
Loan: viewState.T_LOANSEARCHSWA_959.controls.Loan as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'CMMNS', taskId: 'T_LOANSEARCHSWA_959', taskVersion: '1.0.0', vcId: 'VC_LOANSEARHC_144959', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/CMMNS/T_LOANSEARCHSWA_959', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ['VA_OFFICEVEGBCEQOG_104508', { catalogName: 'cl_oficina', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_CODCURRENCYKYKA_122508', { catalogName: 'cl_moneda', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_TYPEDCJJSHZRQGI_148508', { catalogName: 'ca_toperacion', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_TEXTINPUTBOXVFT_322508', { catalogName: 'cl_moneda', filter: "", cobisRequestServerConfig: null, cache: 0 , controlGridInfo: { queryViewId: "QV_3009_96085", columnId: "codCurrency" } }], ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['VA_STATUSRUGGOTSMF_965508', { queryId: 'Q_LISTSEAD_QV44', entityName: '', filter:"", cobisRequestServerConfig: null, cache: 0 }], ['QV_3009_96085', { queryId: 'Q_LOANDPQM_3009', entityName: 'Loan', filter: "", cobisRequestServerConfig: { pageSize :5 }, cache: 0, queryMemberParameters:[ {aliasQueryMember:'loanBankID' , entityName : 'LoanSearchFilter', attributeName : 'operation' } , {aliasQueryMember:'clientID' , entityName : 'LoanSearchFilter', attributeName : 'codClient' } , {aliasQueryMember:'status' , entityName : 'LoanSearchFilter', attributeName : 'status' } , {aliasQueryMember:'codCurrency' , entityName : 'LoanSearchFilter', attributeName : 'codCurrency' } , {aliasQueryMember:'disbursementDate' , entityName : 'LoanSearchFilter', attributeName : 'disbursementDate' } , {aliasQueryMember:'numProcedure' , entityName : 'LoanSearchFilter', attributeName : 'numProcedures' } , {aliasQueryMember:'group' } , {aliasQueryMember:'isDisbursment' } , {aliasQueryMember:'category' } , {aliasQueryMember:'migratedOper' , entityName : 'LoanSearchFilter', attributeName : 'migratedOper' } , {aliasQueryMember:'identityCardNumber' , entityName : 'LoanSearchFilter', attributeName : 'numIdentification' } , {aliasQueryMember:'officeID' , entityName : 'LoanSearchFilter', attributeName : 'office' } ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'ASSTS.LBL_ASSTS_BSQUEDASS_55923' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
