//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-loansaleva-321572.model';
import { ViewState } from './model/vc-loansaleva-321572-view-state';
import { VcLoansaleva321572Custom } from './vc-loansaleva-321572.custom';
import { LNSPRService} from 'src/app/LNSPR/service-modules/LNSPR.service';
@Component({
selector: 'cobis-vc-loansaleva-321572',
templateUrl: './vc-loansaleva-321572.component.html'
})
export class VcLoansaleva321572Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private lnspr: LNSPRService) {
super(new VcLoansaleva321572Custom(designer.cobisCommons,lnspr), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXKDG_927584 = this.metaData.viewState["QV_PT51_RHB11"].columns.find((col: any) => col.field == 'sequential');
if (column_VA_TEXTINPUTBOXKDG_927584 != undefined) {
const tplCell_VA_TEXTINPUTBOXKDG_927584 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXKDG_927584');
column_VA_TEXTINPUTBOXKDG_927584.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXKDG_927584?.templateRef;
const tplEdit_VA_TEXTINPUTBOXKDG_927584 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXKDG_927584');
column_VA_TEXTINPUTBOXKDG_927584.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXKDG_927584?.templateRef;
}
const column_VA_DATEFIELDIWXIWV_937584 = this.metaData.viewState["QV_PT51_RHB11"].columns.find((col: any) => col.field == 'date');
if (column_VA_DATEFIELDIWXIWV_937584 != undefined) {
const tplCell_VA_DATEFIELDIWXIWV_937584 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DATEFIELDIWXIWV_937584');
column_VA_DATEFIELDIWXIWV_937584.properties.cellTemplate = tplCell_VA_DATEFIELDIWXIWV_937584?.templateRef;
const tplEdit_VA_DATEFIELDIWXIWV_937584 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DATEFIELDIWXIWV_937584');
column_VA_DATEFIELDIWXIWV_937584.properties.editTemplate = tplEdit_VA_DATEFIELDIWXIWV_937584?.templateRef;
}
const column_VA_TEXTINPUTBOXYMP_457584 = this.metaData.viewState["QV_PT51_RHB11"].columns.find((col: any) => col.field == 'company');
if (column_VA_TEXTINPUTBOXYMP_457584 != undefined) {
const tplCell_VA_TEXTINPUTBOXYMP_457584 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXYMP_457584');
column_VA_TEXTINPUTBOXYMP_457584.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXYMP_457584?.templateRef;
const tplEdit_VA_TEXTINPUTBOXYMP_457584 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXYMP_457584');
column_VA_TEXTINPUTBOXYMP_457584.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXYMP_457584?.templateRef;
}
const column_VA_TEXTINPUTBOXMDL_871584 = this.metaData.viewState["QV_PT51_RHB11"].columns.find((col: any) => col.field == 'state');
if (column_VA_TEXTINPUTBOXMDL_871584 != undefined) {
const tplCell_VA_TEXTINPUTBOXMDL_871584 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXMDL_871584');
column_VA_TEXTINPUTBOXMDL_871584.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXMDL_871584?.templateRef;
const tplEdit_VA_TEXTINPUTBOXMDL_871584 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXMDL_871584');
column_VA_TEXTINPUTBOXMDL_871584.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXMDL_871584?.templateRef;
}
const column_VA_TEXTINPUTBOXVEK_392584 = this.metaData.viewState["QV_PT51_RHB11"].columns.find((col: any) => col.field == 'archive');
if (column_VA_TEXTINPUTBOXVEK_392584 != undefined) {
const tplCell_VA_TEXTINPUTBOXVEK_392584 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXVEK_392584');
column_VA_TEXTINPUTBOXVEK_392584.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXVEK_392584?.templateRef;
const tplEdit_VA_TEXTINPUTBOXVEK_392584 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXVEK_392584');
column_VA_TEXTINPUTBOXVEK_392584.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXVEK_392584?.templateRef;
}
const column_VA_TEXTINPUTBOXYDI_851584 = this.metaData.viewState["QV_PT51_RHB11"].columns.find((col: any) => col.field == 'user');
if (column_VA_TEXTINPUTBOXYDI_851584 != undefined) {
const tplCell_VA_TEXTINPUTBOXYDI_851584 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXYDI_851584');
column_VA_TEXTINPUTBOXYDI_851584.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXYDI_851584?.templateRef;
const tplEdit_VA_TEXTINPUTBOXYDI_851584 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXYDI_851584');
column_VA_TEXTINPUTBOXYDI_851584.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXYDI_851584?.templateRef;
}
const column_VA_TEXTINPUTBOXMZG_108584 = this.metaData.viewState["QV_PK48_JNB79"].columns.find((col: any) => col.field == 'operation');
if (column_VA_TEXTINPUTBOXMZG_108584 != undefined) {
const tplCell_VA_TEXTINPUTBOXMZG_108584 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXMZG_108584');
column_VA_TEXTINPUTBOXMZG_108584.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXMZG_108584?.templateRef;
const tplEdit_VA_TEXTINPUTBOXMZG_108584 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXMZG_108584');
column_VA_TEXTINPUTBOXMZG_108584.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXMZG_108584?.templateRef;
}
const column_VA_DATEFIELDXMVZLZ_375584 = this.metaData.viewState["QV_PK48_JNB79"].columns.find((col: any) => col.field == 'dateSale');
if (column_VA_DATEFIELDXMVZLZ_375584 != undefined) {
const tplCell_VA_DATEFIELDXMVZLZ_375584 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DATEFIELDXMVZLZ_375584');
column_VA_DATEFIELDXMVZLZ_375584.properties.cellTemplate = tplCell_VA_DATEFIELDXMVZLZ_375584?.templateRef;
const tplEdit_VA_DATEFIELDXMVZLZ_375584 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DATEFIELDXMVZLZ_375584');
column_VA_DATEFIELDXMVZLZ_375584.properties.editTemplate = tplEdit_VA_DATEFIELDXMVZLZ_375584?.templateRef;
}
const column_VA_TEXTINPUTBOXQTT_624584 = this.metaData.viewState["QV_PK48_JNB79"].columns.find((col: any) => col.field == 'state');
if (column_VA_TEXTINPUTBOXQTT_624584 != undefined) {
const tplCell_VA_TEXTINPUTBOXQTT_624584 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXQTT_624584');
column_VA_TEXTINPUTBOXQTT_624584.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXQTT_624584?.templateRef;
const tplEdit_VA_TEXTINPUTBOXQTT_624584 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXQTT_624584');
column_VA_TEXTINPUTBOXQTT_624584.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXQTT_624584?.templateRef;
}
const column_VA_TEXTINPUTBOXHLJ_366584 = this.metaData.viewState["QV_PK48_JNB79"].columns.find((col: any) => col.field == 'error');
if (column_VA_TEXTINPUTBOXHLJ_366584 != undefined) {
const tplCell_VA_TEXTINPUTBOXHLJ_366584 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXHLJ_366584');
column_VA_TEXTINPUTBOXHLJ_366584.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXHLJ_366584?.templateRef;
const tplEdit_VA_TEXTINPUTBOXHLJ_366584 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXHLJ_366584');
column_VA_TEXTINPUTBOXHLJ_366584.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXHLJ_366584?.templateRef;
}
const column_VA_TEXTINPUTBOXZJU_162584 = this.metaData.viewState["QV_PK48_JNB79"].columns.find((col: any) => col.field == 'errorDescription');
if (column_VA_TEXTINPUTBOXZJU_162584 != undefined) {
const tplCell_VA_TEXTINPUTBOXZJU_162584 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXZJU_162584');
column_VA_TEXTINPUTBOXZJU_162584.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXZJU_162584?.templateRef;
const tplEdit_VA_TEXTINPUTBOXZJU_162584 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXZJU_162584');
column_VA_TEXTINPUTBOXZJU_162584.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXZJU_162584?.templateRef;
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
LoanSaleFilter: viewState.T_LNSPRIIYONZUA_572.controls.LoanSaleFilter as FormGroup ,
LoanSaleList: viewState.T_LNSPRIIYONZUA_572.controls.LoanSaleList as FormGroup ,
LoanSaleDetailList: viewState.T_LNSPRIIYONZUA_572.controls.LoanSaleDetailList as FormGroup
};
this.metaData = { moduleId: 'LNSPR', subModuleId: 'OPRTN', taskId: 'T_LNSPRIIYONZUA_572', taskVersion: '1.0.0', vcId: 'VC_LOANSALEVA_321572', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/LNSPR/OPRTN/T_LNSPRIIYONZUA_572', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ['VA_1TLZKSACKIJLFKK_217584', { catalogName: 'ca_empresas', filter: "", cobisRequestServerConfig: null, cache: 0 }], ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_PT51_RHB11', { queryId: 'Q_LOANAELE_GZ51', entityName: 'LoanSaleList', filter: "", cobisRequestServerConfig: { pageSize :10 }, cache: 0, queryMemberParameters:[ ]}], ['QV_PK48_JNB79', { queryId: 'Q_LOANELLL_AR48', entityName: 'LoanSaleDetailList', filter: "", cobisRequestServerConfig: { pageSize :5 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'LNSPR.LBL_LNSPR_VENTACAET_55114' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
