//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-loanwarrtt-422123.model';
import { ViewState } from './model/vc-loanwarrtt-422123-view-state';
import { VcLoanwarrtt422123Custom } from './vc-loanwarrtt-422123.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-loanwarrtt-422123',
templateUrl: './vc-loanwarrtt-422123.component.html'
})
export class VcLoanwarrtt422123Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcLoanwarrtt422123Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXASD_283867 = this.metaData.viewState["QV_1941_28530"].columns.find((col: any) => col.field == 'warranty');
if (column_VA_TEXTINPUTBOXASD_283867 != undefined) {
const tplCell_VA_TEXTINPUTBOXASD_283867 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXASD_283867');
column_VA_TEXTINPUTBOXASD_283867.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXASD_283867?.templateRef;
const tplEdit_VA_TEXTINPUTBOXASD_283867 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXASD_283867');
column_VA_TEXTINPUTBOXASD_283867.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXASD_283867?.templateRef;
}
const column_VA_TEXTINPUTBOXLGJ_305867 = this.metaData.viewState["QV_1941_28530"].columns.find((col: any) => col.field == 'statusWarranty');
if (column_VA_TEXTINPUTBOXLGJ_305867 != undefined) {
const tplCell_VA_TEXTINPUTBOXLGJ_305867 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXLGJ_305867');
column_VA_TEXTINPUTBOXLGJ_305867.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXLGJ_305867?.templateRef;
const tplEdit_VA_TEXTINPUTBOXLGJ_305867 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXLGJ_305867');
column_VA_TEXTINPUTBOXLGJ_305867.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXLGJ_305867?.templateRef;
}
const column_VA_TEXTINPUTBOXGCL_579867 = this.metaData.viewState["QV_1941_28530"].columns.find((col: any) => col.field == 'description');
if (column_VA_TEXTINPUTBOXGCL_579867 != undefined) {
const tplCell_VA_TEXTINPUTBOXGCL_579867 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXGCL_579867');
column_VA_TEXTINPUTBOXGCL_579867.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXGCL_579867?.templateRef;
const tplEdit_VA_TEXTINPUTBOXGCL_579867 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXGCL_579867');
column_VA_TEXTINPUTBOXGCL_579867.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXGCL_579867?.templateRef;
}
const column_VA_TEXTINPUTBOXYZM_796867 = this.metaData.viewState["QV_1941_28530"].columns.find((col: any) => col.field == 'customerID');
if (column_VA_TEXTINPUTBOXYZM_796867 != undefined) {
const tplCell_VA_TEXTINPUTBOXYZM_796867 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXYZM_796867');
column_VA_TEXTINPUTBOXYZM_796867.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXYZM_796867?.templateRef;
const tplEdit_VA_TEXTINPUTBOXYZM_796867 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXYZM_796867');
column_VA_TEXTINPUTBOXYZM_796867.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXYZM_796867?.templateRef;
}
const column_VA_TEXTINPUTBOXYSC_521867 = this.metaData.viewState["QV_1941_28530"].columns.find((col: any) => col.field == 'customer');
if (column_VA_TEXTINPUTBOXYSC_521867 != undefined) {
const tplCell_VA_TEXTINPUTBOXYSC_521867 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXYSC_521867');
column_VA_TEXTINPUTBOXYSC_521867.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXYSC_521867?.templateRef;
const tplEdit_VA_TEXTINPUTBOXYSC_521867 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXYSC_521867');
column_VA_TEXTINPUTBOXYSC_521867.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXYSC_521867?.templateRef;
}
const column_VA_TEXTINPUTBOXIAU_379867 = this.metaData.viewState["QV_1941_28530"].columns.find((col: any) => col.field == 'currentValue');
if (column_VA_TEXTINPUTBOXIAU_379867 != undefined) {
const tplCell_VA_TEXTINPUTBOXIAU_379867 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXIAU_379867');
column_VA_TEXTINPUTBOXIAU_379867.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXIAU_379867?.templateRef;
const tplEdit_VA_TEXTINPUTBOXIAU_379867 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXIAU_379867');
column_VA_TEXTINPUTBOXIAU_379867.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXIAU_379867?.templateRef;
}
const column_VA_TEXTINPUTBOXVWC_252867 = this.metaData.viewState["QV_1941_28530"].columns.find((col: any) => col.field == 'currencyID');
if (column_VA_TEXTINPUTBOXVWC_252867 != undefined) {
const tplCell_VA_TEXTINPUTBOXVWC_252867 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXVWC_252867');
column_VA_TEXTINPUTBOXVWC_252867.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXVWC_252867?.templateRef;
const tplEdit_VA_TEXTINPUTBOXVWC_252867 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXVWC_252867');
column_VA_TEXTINPUTBOXVWC_252867.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXVWC_252867?.templateRef;
}
const column_VA_TEXTINPUTBOXRQN_217867 = this.metaData.viewState["QV_1941_28530"].columns.find((col: any) => col.field == 'createdOn');
if (column_VA_TEXTINPUTBOXRQN_217867 != undefined) {
const tplCell_VA_TEXTINPUTBOXRQN_217867 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXRQN_217867');
column_VA_TEXTINPUTBOXRQN_217867.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXRQN_217867?.templateRef;
const tplEdit_VA_TEXTINPUTBOXRQN_217867 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXRQN_217867');
column_VA_TEXTINPUTBOXRQN_217867.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXRQN_217867?.templateRef;
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
LoanWarranty: viewState.T_LOANWARRANTYT_123.controls.LoanWarranty as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'QERYS', taskId: 'T_LOANWARRANTYT_123', taskVersion: '1.0.0', vcId: 'VC_LOANWARRTT_422123', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(false, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/QERYS/T_LOANWARRANTYT_123', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_1941_28530', { queryId: 'Q_LOANWATN_1941', entityName: 'LoanWarranty', filter: "", cobisRequestServerConfig: { pageSize :10 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'QueryLoanWarrantyForm' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
