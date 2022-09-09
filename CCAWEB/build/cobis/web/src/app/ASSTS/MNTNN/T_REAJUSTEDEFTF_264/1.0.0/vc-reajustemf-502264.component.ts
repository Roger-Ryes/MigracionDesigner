//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-reajustemf-502264.model';
import { ViewState } from './model/vc-reajustemf-502264-view-state';
import { VcReajustemf502264Custom } from './vc-reajustemf-502264.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-reajustemf-502264',
templateUrl: './vc-reajustemf-502264.component.html'
})
export class VcReajustemf502264Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcReajustemf502264Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXVNC_178141 = this.metaData.viewState["QV_2618_23821"].columns.find((col: any) => col.field == 'concepto');
if (column_VA_TEXTINPUTBOXVNC_178141 != undefined) {
const tplCell_VA_TEXTINPUTBOXVNC_178141 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXVNC_178141');
column_VA_TEXTINPUTBOXVNC_178141.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXVNC_178141?.templateRef;
const tplEdit_VA_TEXTINPUTBOXVNC_178141 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXVNC_178141');
column_VA_TEXTINPUTBOXVNC_178141.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXVNC_178141?.templateRef;
}
const column_VA_TEXTINPUTBOXFYD_123141 = this.metaData.viewState["QV_2618_23821"].columns.find((col: any) => col.field == 'referencial');
if (column_VA_TEXTINPUTBOXFYD_123141 != undefined) {
const tplCell_VA_TEXTINPUTBOXFYD_123141 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXFYD_123141');
column_VA_TEXTINPUTBOXFYD_123141.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXFYD_123141?.templateRef;
const tplEdit_VA_TEXTINPUTBOXFYD_123141 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXFYD_123141');
column_VA_TEXTINPUTBOXFYD_123141.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXFYD_123141?.templateRef;
}
const column_VA_TEXTINPUTBOXIEY_291141 = this.metaData.viewState["QV_2618_23821"].columns.find((col: any) => col.field == 'signo');
if (column_VA_TEXTINPUTBOXIEY_291141 != undefined) {
const tplCell_VA_TEXTINPUTBOXIEY_291141 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXIEY_291141');
column_VA_TEXTINPUTBOXIEY_291141.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXIEY_291141?.templateRef;
const tplEdit_VA_TEXTINPUTBOXIEY_291141 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXIEY_291141');
column_VA_TEXTINPUTBOXIEY_291141.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXIEY_291141?.templateRef;
}
const column_VA_TEXTINPUTBOXYTY_525141 = this.metaData.viewState["QV_2618_23821"].columns.find((col: any) => col.field == 'factor');
if (column_VA_TEXTINPUTBOXYTY_525141 != undefined) {
const tplCell_VA_TEXTINPUTBOXYTY_525141 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXYTY_525141');
column_VA_TEXTINPUTBOXYTY_525141.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXYTY_525141?.templateRef;
const tplEdit_VA_TEXTINPUTBOXYTY_525141 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXYTY_525141');
column_VA_TEXTINPUTBOXYTY_525141.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXYTY_525141?.templateRef;
}
const column_VA_TEXTINPUTBOXAAA_377141 = this.metaData.viewState["QV_2618_23821"].columns.find((col: any) => col.field == 'porcentaje');
if (column_VA_TEXTINPUTBOXAAA_377141 != undefined) {
const tplCell_VA_TEXTINPUTBOXAAA_377141 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXAAA_377141');
column_VA_TEXTINPUTBOXAAA_377141.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXAAA_377141?.templateRef;
const tplEdit_VA_TEXTINPUTBOXAAA_377141 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXAAA_377141');
column_VA_TEXTINPUTBOXAAA_377141.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXAAA_377141?.templateRef;
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
ReadjustmentDetalilsLoan: viewState.T_REAJUSTEDEFTF_264.controls.ReadjustmentDetalilsLoan as FormGroup ,
Loan: viewState.T_REAJUSTEDEFTF_264.controls.Loan as FormGroup ,
ReadjustmentLoanCab: viewState.T_REAJUSTEDEFTF_264.controls.ReadjustmentLoanCab as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'MNTNN', taskId: 'T_REAJUSTEDEFTF_264', taskVersion: '1.0.0', vcId: 'VC_REAJUSTEMF_502264', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/MNTNN/T_REAJUSTEDEFTF_264', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ['VA_TEXTINPUTBOXFYD_123141', { filter:"", cobisRequestServerConfig: {'filterType':'none'}, cache: 0 , controlGridInfo: { queryViewId: "QV_2618_23821", columnId: "referencial" }}], ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ['VA_TEXTINPUTBOXIEY_291141', { catalogName: 'ca_signo', filter: "", cobisRequestServerConfig: null, cache: 0 , controlGridInfo: { queryViewId: "QV_2618_23821", columnId: "signo" } }], ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_2618_23821', { queryId: 'Q_REAJUSTE_2618', entityName: 'ReadjustmentDetalilsLoan', filter: "", cobisRequestServerConfig: { pageSize :5 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'ASSTS.LBL_ASSTS_DETALLEEE_62584' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
