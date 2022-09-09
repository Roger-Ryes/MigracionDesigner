//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-loanpoliyy-967160.model';
import { ViewState } from './model/vc-loanpoliyy-967160-view-state';
import { VcLoanpoliyy967160Custom } from './vc-loanpoliyy-967160.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-loanpoliyy-967160',
templateUrl: './vc-loanpoliyy-967160.component.html'
})
export class VcLoanpoliyy967160Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcLoanpoliyy967160Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXUER_631251 = this.metaData.viewState["QV_CB44_DOX52"].columns.find((col: any) => col.field == 'insurance');
if (column_VA_TEXTINPUTBOXUER_631251 != undefined) {
const tplCell_VA_TEXTINPUTBOXUER_631251 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXUER_631251');
column_VA_TEXTINPUTBOXUER_631251.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXUER_631251?.templateRef;
const tplEdit_VA_TEXTINPUTBOXUER_631251 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXUER_631251');
column_VA_TEXTINPUTBOXUER_631251.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXUER_631251?.templateRef;
}
const column_VA_TEXTINPUTBOXCCT_547251 = this.metaData.viewState["QV_CB44_DOX52"].columns.find((col: any) => col.field == 'policy');
if (column_VA_TEXTINPUTBOXCCT_547251 != undefined) {
const tplCell_VA_TEXTINPUTBOXCCT_547251 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXCCT_547251');
column_VA_TEXTINPUTBOXCCT_547251.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXCCT_547251?.templateRef;
const tplEdit_VA_TEXTINPUTBOXCCT_547251 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXCCT_547251');
column_VA_TEXTINPUTBOXCCT_547251.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXCCT_547251?.templateRef;
}
const column_VA_TEXTINPUTBOXUCG_593251 = this.metaData.viewState["QV_CB44_DOX52"].columns.find((col: any) => col.field == 'codeExternal');
if (column_VA_TEXTINPUTBOXUCG_593251 != undefined) {
const tplCell_VA_TEXTINPUTBOXUCG_593251 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXUCG_593251');
column_VA_TEXTINPUTBOXUCG_593251.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXUCG_593251?.templateRef;
const tplEdit_VA_TEXTINPUTBOXUCG_593251 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXUCG_593251');
column_VA_TEXTINPUTBOXUCG_593251.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXUCG_593251?.templateRef;
}
const column_VA_DATEFIELDOIDBXX_771251 = this.metaData.viewState["QV_CB44_DOX52"].columns.find((col: any) => col.field == 'fvalidityStart');
if (column_VA_DATEFIELDOIDBXX_771251 != undefined) {
const tplCell_VA_DATEFIELDOIDBXX_771251 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DATEFIELDOIDBXX_771251');
column_VA_DATEFIELDOIDBXX_771251.properties.cellTemplate = tplCell_VA_DATEFIELDOIDBXX_771251?.templateRef;
const tplEdit_VA_DATEFIELDOIDBXX_771251 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DATEFIELDOIDBXX_771251');
column_VA_DATEFIELDOIDBXX_771251.properties.editTemplate = tplEdit_VA_DATEFIELDOIDBXX_771251?.templateRef;
}
const column_VA_DATEFIELDPOLKRL_707251 = this.metaData.viewState["QV_CB44_DOX52"].columns.find((col: any) => col.field == 'fvalidityEnd');
if (column_VA_DATEFIELDPOLKRL_707251 != undefined) {
const tplCell_VA_DATEFIELDPOLKRL_707251 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DATEFIELDPOLKRL_707251');
column_VA_DATEFIELDPOLKRL_707251.properties.cellTemplate = tplCell_VA_DATEFIELDPOLKRL_707251?.templateRef;
const tplEdit_VA_DATEFIELDPOLKRL_707251 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DATEFIELDPOLKRL_707251');
column_VA_DATEFIELDPOLKRL_707251.properties.editTemplate = tplEdit_VA_DATEFIELDPOLKRL_707251?.templateRef;
}
const column_VA_TEXTINPUTBOXQWT_716251 = this.metaData.viewState["QV_CB44_DOX52"].columns.find((col: any) => col.field == 'amountPolicy');
if (column_VA_TEXTINPUTBOXQWT_716251 != undefined) {
const tplCell_VA_TEXTINPUTBOXQWT_716251 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXQWT_716251');
column_VA_TEXTINPUTBOXQWT_716251.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXQWT_716251?.templateRef;
const tplEdit_VA_TEXTINPUTBOXQWT_716251 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXQWT_716251');
column_VA_TEXTINPUTBOXQWT_716251.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXQWT_716251?.templateRef;
}
const column_VA_TEXTINPUTBOXKQK_228251 = this.metaData.viewState["QV_CB44_DOX52"].columns.find((col: any) => col.field == 'amountEndorsement');
if (column_VA_TEXTINPUTBOXKQK_228251 != undefined) {
const tplCell_VA_TEXTINPUTBOXKQK_228251 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXKQK_228251');
column_VA_TEXTINPUTBOXKQK_228251.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXKQK_228251?.templateRef;
const tplEdit_VA_TEXTINPUTBOXKQK_228251 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXKQK_228251');
column_VA_TEXTINPUTBOXKQK_228251.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXKQK_228251?.templateRef;
}
const column_VA_DATEFIELDYMGFSH_428251 = this.metaData.viewState["QV_CB44_DOX52"].columns.find((col: any) => col.field == 'dateEndorsement');
if (column_VA_DATEFIELDYMGFSH_428251 != undefined) {
const tplCell_VA_DATEFIELDYMGFSH_428251 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DATEFIELDYMGFSH_428251');
column_VA_DATEFIELDYMGFSH_428251.properties.cellTemplate = tplCell_VA_DATEFIELDYMGFSH_428251?.templateRef;
const tplEdit_VA_DATEFIELDYMGFSH_428251 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DATEFIELDYMGFSH_428251');
column_VA_DATEFIELDYMGFSH_428251.properties.editTemplate = tplEdit_VA_DATEFIELDYMGFSH_428251?.templateRef;
}
const column_VA_DATEFIELDLFOJBP_849251 = this.metaData.viewState["QV_CB44_DOX52"].columns.find((col: any) => col.field == 'fendorsementEnd');
if (column_VA_DATEFIELDLFOJBP_849251 != undefined) {
const tplCell_VA_DATEFIELDLFOJBP_849251 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DATEFIELDLFOJBP_849251');
column_VA_DATEFIELDLFOJBP_849251.properties.cellTemplate = tplCell_VA_DATEFIELDLFOJBP_849251?.templateRef;
const tplEdit_VA_DATEFIELDLFOJBP_849251 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DATEFIELDLFOJBP_849251');
column_VA_DATEFIELDLFOJBP_849251.properties.editTemplate = tplEdit_VA_DATEFIELDLFOJBP_849251?.templateRef;
}
const column_VA_TEXTINPUTBOXKBW_831251 = this.metaData.viewState["QV_CB44_DOX52"].columns.find((col: any) => col.field == 'coverage');
if (column_VA_TEXTINPUTBOXKBW_831251 != undefined) {
const tplCell_VA_TEXTINPUTBOXKBW_831251 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXKBW_831251');
column_VA_TEXTINPUTBOXKBW_831251.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXKBW_831251?.templateRef;
const tplEdit_VA_TEXTINPUTBOXKBW_831251 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXKBW_831251');
column_VA_TEXTINPUTBOXKBW_831251.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXKBW_831251?.templateRef;
}
const column_VA_TEXTINPUTBOXYED_559251 = this.metaData.viewState["QV_CB44_DOX52"].columns.find((col: any) => col.field == 'description');
if (column_VA_TEXTINPUTBOXYED_559251 != undefined) {
const tplCell_VA_TEXTINPUTBOXYED_559251 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXYED_559251');
column_VA_TEXTINPUTBOXYED_559251.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXYED_559251?.templateRef;
const tplEdit_VA_TEXTINPUTBOXYED_559251 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXYED_559251');
column_VA_TEXTINPUTBOXYED_559251.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXYED_559251?.templateRef;
}
const column_VA_TEXTINPUTBOXHYG_463251 = this.metaData.viewState["QV_CB44_DOX52"].columns.find((col: any) => col.field == 'statePolicy');
if (column_VA_TEXTINPUTBOXHYG_463251 != undefined) {
const tplCell_VA_TEXTINPUTBOXHYG_463251 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXHYG_463251');
column_VA_TEXTINPUTBOXHYG_463251.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXHYG_463251?.templateRef;
const tplEdit_VA_TEXTINPUTBOXHYG_463251 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXHYG_463251');
column_VA_TEXTINPUTBOXHYG_463251.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXHYG_463251?.templateRef;
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
LoanPolicy: viewState.T_ASSTSMABINVRB_160.controls.LoanPolicy as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'QERYS', taskId: 'T_ASSTSMABINVRB_160', taskVersion: '1.0.0', vcId: 'VC_LOANPOLIYY_967160', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(false, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/QERYS/T_ASSTSMABINVRB_160', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_CB44_DOX52', { queryId: 'Q_LOANPIPY_QP44', entityName: 'LoanPolicy', filter: "", cobisRequestServerConfig: { pageSize :10 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'QueryLoanPolicyForm' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
