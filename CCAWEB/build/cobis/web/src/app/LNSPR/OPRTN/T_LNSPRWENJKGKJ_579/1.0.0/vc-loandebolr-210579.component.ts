//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-loandebolr-210579.model';
import { ViewState } from './model/vc-loandebolr-210579-view-state';
import { VcLoandebolr210579Custom } from './vc-loandebolr-210579.custom';
import { LNSPRService} from 'src/app/LNSPR/service-modules/LNSPR.service';
@Component({
selector: 'cobis-vc-loandebolr-210579',
templateUrl: './vc-loandebolr-210579.component.html'
})
export class VcLoandebolr210579Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private lnspr: LNSPRService) {
super(new VcLoandebolr210579Custom(designer.cobisCommons,lnspr), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXILW_913445 = this.metaData.viewState["QV_VI44_NQR57"].columns.find((col: any) => col.field == 'client');
if (column_VA_TEXTINPUTBOXILW_913445 != undefined) {
const tplCell_VA_TEXTINPUTBOXILW_913445 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXILW_913445');
column_VA_TEXTINPUTBOXILW_913445.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXILW_913445?.templateRef;
const tplEdit_VA_TEXTINPUTBOXILW_913445 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXILW_913445');
column_VA_TEXTINPUTBOXILW_913445.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXILW_913445?.templateRef;
}
const column_VA_TEXTINPUTBOXHWA_904445 = this.metaData.viewState["QV_VI44_NQR57"].columns.find((col: any) => col.field == 'clientRol');
if (column_VA_TEXTINPUTBOXHWA_904445 != undefined) {
const tplCell_VA_TEXTINPUTBOXHWA_904445 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXHWA_904445');
column_VA_TEXTINPUTBOXHWA_904445.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXHWA_904445?.templateRef;
const tplEdit_VA_TEXTINPUTBOXHWA_904445 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXHWA_904445');
column_VA_TEXTINPUTBOXHWA_904445.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXHWA_904445?.templateRef;
}
const column_VA_TEXTINPUTBOXKKE_296445 = this.metaData.viewState["QV_VI44_NQR57"].columns.find((col: any) => col.field == 'clientId');
if (column_VA_TEXTINPUTBOXKKE_296445 != undefined) {
const tplCell_VA_TEXTINPUTBOXKKE_296445 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXKKE_296445');
column_VA_TEXTINPUTBOXKKE_296445.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXKKE_296445?.templateRef;
const tplEdit_VA_TEXTINPUTBOXKKE_296445 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXKKE_296445');
column_VA_TEXTINPUTBOXKKE_296445.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXKKE_296445?.templateRef;
}
const column_VA_TEXTINPUTBOXMAG_163445 = this.metaData.viewState["QV_VI44_NQR57"].columns.find((col: any) => col.field == 'clientName');
if (column_VA_TEXTINPUTBOXMAG_163445 != undefined) {
const tplCell_VA_TEXTINPUTBOXMAG_163445 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXMAG_163445');
column_VA_TEXTINPUTBOXMAG_163445.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXMAG_163445?.templateRef;
const tplEdit_VA_TEXTINPUTBOXMAG_163445 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXMAG_163445');
column_VA_TEXTINPUTBOXMAG_163445.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXMAG_163445?.templateRef;
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
DebtorList: viewState.T_LNSPRWENJKGKJ_579.controls.DebtorList as FormGroup
};
this.metaData = { moduleId: 'LNSPR', subModuleId: 'OPRTN', taskId: 'T_LNSPRWENJKGKJ_579', taskVersion: '1.0.0', vcId: 'VC_LOANDEBOLR_210579', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(false, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/LNSPR/OPRTN/T_LNSPRWENJKGKJ_579', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_VI44_NQR57', { queryId: 'Q_DEBTSOLR_XT44', entityName: 'DebtorList', filter: "", cobisRequestServerConfig: { pageSize :5 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'LoanDeborList' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
