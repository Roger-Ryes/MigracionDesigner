//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-loansrestn-297594.model';
import { ViewState } from './model/vc-loansrestn-297594-view-state';
import { VcLoansrestn297594Custom } from './vc-loansrestn-297594.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-loansrestn-297594',
templateUrl: './vc-loansrestn-297594.component.html'
})
export class VcLoansrestn297594Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcLoansrestn297594Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXMPG_686701 = this.metaData.viewState["QV_UY75_AYT30"].columns.find((col: any) => col.field == 'bank');
if (column_VA_TEXTINPUTBOXMPG_686701 != undefined) {
const tplCell_VA_TEXTINPUTBOXMPG_686701 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXMPG_686701');
column_VA_TEXTINPUTBOXMPG_686701.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXMPG_686701?.templateRef;
const tplEdit_VA_TEXTINPUTBOXMPG_686701 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXMPG_686701');
column_VA_TEXTINPUTBOXMPG_686701.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXMPG_686701?.templateRef;
}
const column_VA_TEXTINPUTBOXYHJ_995701 = this.metaData.viewState["QV_UY75_AYT30"].columns.find((col: any) => col.field == 'typeLoan');
if (column_VA_TEXTINPUTBOXYHJ_995701 != undefined) {
const tplCell_VA_TEXTINPUTBOXYHJ_995701 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXYHJ_995701');
column_VA_TEXTINPUTBOXYHJ_995701.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXYHJ_995701?.templateRef;
const tplEdit_VA_TEXTINPUTBOXYHJ_995701 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXYHJ_995701');
column_VA_TEXTINPUTBOXYHJ_995701.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXYHJ_995701?.templateRef;
}
const column_VA_TEXTINPUTBOXHQI_717701 = this.metaData.viewState["QV_UY75_AYT30"].columns.find((col: any) => col.field == 'currency');
if (column_VA_TEXTINPUTBOXHQI_717701 != undefined) {
const tplCell_VA_TEXTINPUTBOXHQI_717701 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXHQI_717701');
column_VA_TEXTINPUTBOXHQI_717701.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXHQI_717701?.templateRef;
const tplEdit_VA_TEXTINPUTBOXHQI_717701 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXHQI_717701');
column_VA_TEXTINPUTBOXHQI_717701.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXHQI_717701?.templateRef;
}
const column_VA_TEXTINPUTBOXFNP_829701 = this.metaData.viewState["QV_UY75_AYT30"].columns.find((col: any) => col.field == 'residualTerm');
if (column_VA_TEXTINPUTBOXFNP_829701 != undefined) {
const tplCell_VA_TEXTINPUTBOXFNP_829701 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXFNP_829701');
column_VA_TEXTINPUTBOXFNP_829701.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXFNP_829701?.templateRef;
const tplEdit_VA_TEXTINPUTBOXFNP_829701 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXFNP_829701');
column_VA_TEXTINPUTBOXFNP_829701.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXFNP_829701?.templateRef;
}
const column_VA_TEXTINPUTBOXPFN_631701 = this.metaData.viewState["QV_UY75_AYT30"].columns.find((col: any) => col.field == 'state');
if (column_VA_TEXTINPUTBOXPFN_631701 != undefined) {
const tplCell_VA_TEXTINPUTBOXPFN_631701 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXPFN_631701');
column_VA_TEXTINPUTBOXPFN_631701.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXPFN_631701?.templateRef;
const tplEdit_VA_TEXTINPUTBOXPFN_631701 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXPFN_631701');
column_VA_TEXTINPUTBOXPFN_631701.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXPFN_631701?.templateRef;
}
const column_VA_TEXTINPUTBOXHAH_699701 = this.metaData.viewState["QV_UY75_AYT30"].columns.find((col: any) => col.field == 'overduesFees');
if (column_VA_TEXTINPUTBOXHAH_699701 != undefined) {
const tplCell_VA_TEXTINPUTBOXHAH_699701 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXHAH_699701');
column_VA_TEXTINPUTBOXHAH_699701.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXHAH_699701?.templateRef;
const tplEdit_VA_TEXTINPUTBOXHAH_699701 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXHAH_699701');
column_VA_TEXTINPUTBOXHAH_699701.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXHAH_699701?.templateRef;
}
const column_VA_TEXTINPUTBOXFFY_513701 = this.metaData.viewState["QV_UY75_AYT30"].columns.find((col: any) => col.field == 'capitalBalance');
if (column_VA_TEXTINPUTBOXFFY_513701 != undefined) {
const tplCell_VA_TEXTINPUTBOXFFY_513701 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXFFY_513701');
column_VA_TEXTINPUTBOXFFY_513701.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXFFY_513701?.templateRef;
const tplEdit_VA_TEXTINPUTBOXFFY_513701 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXFFY_513701');
column_VA_TEXTINPUTBOXFFY_513701.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXFFY_513701?.templateRef;
}
const column_VA_TEXTINPUTBOXPZN_547701 = this.metaData.viewState["QV_UY75_AYT30"].columns.find((col: any) => col.field == 'interestBalance');
if (column_VA_TEXTINPUTBOXPZN_547701 != undefined) {
const tplCell_VA_TEXTINPUTBOXPZN_547701 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXPZN_547701');
column_VA_TEXTINPUTBOXPZN_547701.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXPZN_547701?.templateRef;
const tplEdit_VA_TEXTINPUTBOXPZN_547701 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXPZN_547701');
column_VA_TEXTINPUTBOXPZN_547701.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXPZN_547701?.templateRef;
}
const column_VA_TEXTINPUTBOXAAY_819701 = this.metaData.viewState["QV_UY75_AYT30"].columns.find((col: any) => col.field == 'otherItems');
if (column_VA_TEXTINPUTBOXAAY_819701 != undefined) {
const tplCell_VA_TEXTINPUTBOXAAY_819701 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXAAY_819701');
column_VA_TEXTINPUTBOXAAY_819701.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXAAY_819701?.templateRef;
const tplEdit_VA_TEXTINPUTBOXAAY_819701 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXAAY_819701');
column_VA_TEXTINPUTBOXAAY_819701.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXAAY_819701?.templateRef;
}
const column_VA_TEXTINPUTBOXMIP_743701 = this.metaData.viewState["QV_UY75_AYT30"].columns.find((col: any) => col.field == 'totalCap');
if (column_VA_TEXTINPUTBOXMIP_743701 != undefined) {
const tplCell_VA_TEXTINPUTBOXMIP_743701 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXMIP_743701');
column_VA_TEXTINPUTBOXMIP_743701.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXMIP_743701?.templateRef;
const tplEdit_VA_TEXTINPUTBOXMIP_743701 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXMIP_743701');
column_VA_TEXTINPUTBOXMIP_743701.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXMIP_743701?.templateRef;
}
const column_VA_TEXTINPUTBOXMBP_763701 = this.metaData.viewState["QV_UY75_AYT30"].columns.find((col: any) => col.field == 'toPay');
if (column_VA_TEXTINPUTBOXMBP_763701 != undefined) {
const tplCell_VA_TEXTINPUTBOXMBP_763701 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXMBP_763701');
column_VA_TEXTINPUTBOXMBP_763701.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXMBP_763701?.templateRef;
const tplEdit_VA_TEXTINPUTBOXMBP_763701 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXMBP_763701');
column_VA_TEXTINPUTBOXMBP_763701.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXMBP_763701?.templateRef;
}
const column_VA_TEXTINPUTBOXLJF_575701 = this.metaData.viewState["QV_UY75_AYT30"].columns.find((col: any) => col.field == 'capitalize');
if (column_VA_TEXTINPUTBOXLJF_575701 != undefined) {
const tplCell_VA_TEXTINPUTBOXLJF_575701 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXLJF_575701');
column_VA_TEXTINPUTBOXLJF_575701.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXLJF_575701?.templateRef;
const tplEdit_VA_TEXTINPUTBOXLJF_575701 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXLJF_575701');
column_VA_TEXTINPUTBOXLJF_575701.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXLJF_575701?.templateRef;
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
RestructuringFilter: viewState.T_ASSTSAMRZIFMF_594.controls.RestructuringFilter as FormGroup ,
RestructuringList: viewState.T_ASSTSAMRZIFMF_594.controls.RestructuringList as FormGroup ,
RestructuringSummary: viewState.T_ASSTSAMRZIFMF_594.controls.RestructuringSummary as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'TRNSC', taskId: 'T_ASSTSAMRZIFMF_594', taskVersion: '1.0.0', vcId: 'VC_LOANSRESTN_297594', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, true), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/TRNSC/T_ASSTSAMRZIFMF_594', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ['VA_TEXTINPUTBOXHQI_717701', { catalogName: 'cl_moneda', filter: "", cobisRequestServerConfig: null, cache: 0 , controlGridInfo: { queryViewId: "QV_UY75_AYT30", columnId: "currency" } }], ['VA_TEXTINPUTBOXLJF_575701', { catalogName: 'cr_monto_rees', filter: "", cobisRequestServerConfig: null, cache: 0 , controlGridInfo: { queryViewId: "QV_UY75_AYT30", columnId: "capitalize" } }], ['VA_RESTRUCTURINPGP_926701', { catalogName: 'ca_tipo_reestructuracion', filter: "", cobisRequestServerConfig: null, cache: 0 }], ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['VA_TEXTINPUTBOXPFN_631701', { queryId: 'Q_LISTSEAD_QV44', entityName: '', filter:"", cobisRequestServerConfig: {'filterType':'none'}, cache: 0 , controlGridInfo: { queryViewId: "QV_UY75_AYT30", columnId: "state" }}], ['QV_UY75_AYT30', { queryId: 'Q_RESTTITU_BM75', entityName: 'RestructuringList', filter: "", cobisRequestServerConfig: { pageSize :5 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'ASSTS.LBL_ASSTS_REESTRURC_23393' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
