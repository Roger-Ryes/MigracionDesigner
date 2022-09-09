//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-paymentsfw-851850.model';
import { ViewState } from './model/vc-paymentsfw-851850-view-state';
import { VcPaymentsfw851850Custom } from './vc-paymentsfw-851850.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-paymentsfw-851850',
templateUrl: './vc-paymentsfw-851850.component.html'
})
export class VcPaymentsfw851850Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcPaymentsfw851850Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXEYP_949141 = this.metaData.viewState["QV_2540_50573"].columns.find((col: any) => col.field == 'description');
if (column_VA_TEXTINPUTBOXEYP_949141 != undefined) {
const tplCell_VA_TEXTINPUTBOXEYP_949141 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXEYP_949141');
column_VA_TEXTINPUTBOXEYP_949141.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXEYP_949141?.templateRef;
const tplEdit_VA_TEXTINPUTBOXEYP_949141 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXEYP_949141');
column_VA_TEXTINPUTBOXEYP_949141.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXEYP_949141?.templateRef;
}
const column_VA_TEXTINPUTBOXVNN_469141 = this.metaData.viewState["QV_2540_50573"].columns.find((col: any) => col.field == 'expired');
if (column_VA_TEXTINPUTBOXVNN_469141 != undefined) {
const tplCell_VA_TEXTINPUTBOXVNN_469141 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXVNN_469141');
column_VA_TEXTINPUTBOXVNN_469141.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXVNN_469141?.templateRef;
const tplEdit_VA_TEXTINPUTBOXVNN_469141 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXVNN_469141');
column_VA_TEXTINPUTBOXVNN_469141.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXVNN_469141?.templateRef;
}
const column_VA_TEXTINPUTBOXJHA_669141 = this.metaData.viewState["QV_2540_50573"].columns.find((col: any) => col.field == 'active');
if (column_VA_TEXTINPUTBOXJHA_669141 != undefined) {
const tplCell_VA_TEXTINPUTBOXJHA_669141 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXJHA_669141');
column_VA_TEXTINPUTBOXJHA_669141.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXJHA_669141?.templateRef;
const tplEdit_VA_TEXTINPUTBOXJHA_669141 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXJHA_669141');
column_VA_TEXTINPUTBOXJHA_669141.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXJHA_669141?.templateRef;
}
const column_VA_TEXTINPUTBOXBDE_877141 = this.metaData.viewState["QV_2540_50573"].columns.find((col: any) => col.field == 'inactive');
if (column_VA_TEXTINPUTBOXBDE_877141 != undefined) {
const tplCell_VA_TEXTINPUTBOXBDE_877141 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXBDE_877141');
column_VA_TEXTINPUTBOXBDE_877141.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXBDE_877141?.templateRef;
const tplEdit_VA_TEXTINPUTBOXBDE_877141 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXBDE_877141');
column_VA_TEXTINPUTBOXBDE_877141.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXBDE_877141?.templateRef;
}
const column_VA_TEXTINPUTBOXQVI_445141 = this.metaData.viewState["QV_2540_50573"].columns.find((col: any) => col.field == 'total');
if (column_VA_TEXTINPUTBOXQVI_445141 != undefined) {
const tplCell_VA_TEXTINPUTBOXQVI_445141 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXQVI_445141');
column_VA_TEXTINPUTBOXQVI_445141.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXQVI_445141?.templateRef;
const tplEdit_VA_TEXTINPUTBOXQVI_445141 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXQVI_445141');
column_VA_TEXTINPUTBOXQVI_445141.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXQVI_445141?.templateRef;
}
const column_VA_TEXTINPUTBOXGTG_989141 = this.metaData.viewState["QV_QG32_ZBS32"].columns.find((col: any) => col.field == 'item');
if (column_VA_TEXTINPUTBOXGTG_989141 != undefined) {
const tplCell_VA_TEXTINPUTBOXGTG_989141 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXGTG_989141');
column_VA_TEXTINPUTBOXGTG_989141.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXGTG_989141?.templateRef;
const tplEdit_VA_TEXTINPUTBOXGTG_989141 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXGTG_989141');
column_VA_TEXTINPUTBOXGTG_989141.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXGTG_989141?.templateRef;
}
const column_VA_TEXTINPUTBOXHII_669141 = this.metaData.viewState["QV_QG32_ZBS32"].columns.find((col: any) => col.field == 'value');
if (column_VA_TEXTINPUTBOXHII_669141 != undefined) {
const tplCell_VA_TEXTINPUTBOXHII_669141 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXHII_669141');
column_VA_TEXTINPUTBOXHII_669141.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXHII_669141?.templateRef;
const tplEdit_VA_TEXTINPUTBOXHII_669141 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXHII_669141');
column_VA_TEXTINPUTBOXHII_669141.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXHII_669141?.templateRef;
}
const column_VA_TEXTINPUTBOXOEB_684141 = this.metaData.viewState["QV_QG32_ZBS32"].columns.find((col: any) => col.field == 'ingress');
if (column_VA_TEXTINPUTBOXOEB_684141 != undefined) {
const tplCell_VA_TEXTINPUTBOXOEB_684141 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXOEB_684141');
column_VA_TEXTINPUTBOXOEB_684141.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXOEB_684141?.templateRef;
const tplEdit_VA_TEXTINPUTBOXOEB_684141 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXOEB_684141');
column_VA_TEXTINPUTBOXOEB_684141.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXOEB_684141?.templateRef;
}
const column_VA_TEXTINPUTBOXRNV_593141 = this.metaData.viewState["QV_3510_91785"].columns.find((col: any) => col.field == 'item');
if (column_VA_TEXTINPUTBOXRNV_593141 != undefined) {
const tplCell_VA_TEXTINPUTBOXRNV_593141 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXRNV_593141');
column_VA_TEXTINPUTBOXRNV_593141.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXRNV_593141?.templateRef;
const tplEdit_VA_TEXTINPUTBOXRNV_593141 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXRNV_593141');
column_VA_TEXTINPUTBOXRNV_593141.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXRNV_593141?.templateRef;
}
const column_VA_TEXTINPUTBOXPSA_455141 = this.metaData.viewState["QV_3510_91785"].columns.find((col: any) => col.field == 'priority');
if (column_VA_TEXTINPUTBOXPSA_455141 != undefined) {
const tplCell_VA_TEXTINPUTBOXPSA_455141 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXPSA_455141');
column_VA_TEXTINPUTBOXPSA_455141.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXPSA_455141?.templateRef;
const tplEdit_VA_TEXTINPUTBOXPSA_455141 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXPSA_455141');
column_VA_TEXTINPUTBOXPSA_455141.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXPSA_455141?.templateRef;
}
const column_VA_TEXTINPUTBOXZKD_152141 = this.metaData.viewState["QV_1156_30060"].columns.find((col: any) => col.field == 'currencyType');
if (column_VA_TEXTINPUTBOXZKD_152141 != undefined) {
const tplCell_VA_TEXTINPUTBOXZKD_152141 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXZKD_152141');
column_VA_TEXTINPUTBOXZKD_152141.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXZKD_152141?.templateRef;
const tplEdit_VA_TEXTINPUTBOXZKD_152141 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXZKD_152141');
column_VA_TEXTINPUTBOXZKD_152141.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXZKD_152141?.templateRef;
}
const column_VA_DATEFIELDMQBLSD_801141 = this.metaData.viewState["QV_1156_30060"].columns.find((col: any) => col.field == 'date');
if (column_VA_DATEFIELDMQBLSD_801141 != undefined) {
const tplCell_VA_DATEFIELDMQBLSD_801141 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DATEFIELDMQBLSD_801141');
column_VA_DATEFIELDMQBLSD_801141.properties.cellTemplate = tplCell_VA_DATEFIELDMQBLSD_801141?.templateRef;
const tplEdit_VA_DATEFIELDMQBLSD_801141 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DATEFIELDMQBLSD_801141');
column_VA_DATEFIELDMQBLSD_801141.properties.editTemplate = tplEdit_VA_DATEFIELDMQBLSD_801141?.templateRef;
}
const column_VA_TEXTINPUTBOXUVG_286141 = this.metaData.viewState["QV_1156_30060"].columns.find((col: any) => col.field == 'value');
if (column_VA_TEXTINPUTBOXUVG_286141 != undefined) {
const tplCell_VA_TEXTINPUTBOXUVG_286141 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXUVG_286141');
column_VA_TEXTINPUTBOXUVG_286141.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXUVG_286141?.templateRef;
const tplEdit_VA_TEXTINPUTBOXUVG_286141 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXUVG_286141');
column_VA_TEXTINPUTBOXUVG_286141.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXUVG_286141?.templateRef;
}
const column_VA_TEXTINPUTBOXBHX_855141 = this.metaData.viewState["QV_1156_30060"].columns.find((col: any) => col.field == 'result');
if (column_VA_TEXTINPUTBOXBHX_855141 != undefined) {
const tplCell_VA_TEXTINPUTBOXBHX_855141 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXBHX_855141');
column_VA_TEXTINPUTBOXBHX_855141.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXBHX_855141?.templateRef;
const tplEdit_VA_TEXTINPUTBOXBHX_855141 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXBHX_855141');
column_VA_TEXTINPUTBOXBHX_855141.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXBHX_855141?.templateRef;
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
Payment: viewState.T_PAYMENTSTENLV_850.controls.Payment as FormGroup ,
QuoteDetails: viewState.T_PAYMENTSTENLV_850.controls.QuoteDetails as FormGroup ,
DeferredRefundList: viewState.T_PAYMENTSTENLV_850.controls.DeferredRefundList as FormGroup ,
Priorities: viewState.T_PAYMENTSTENLV_850.controls.Priorities as FormGroup ,
QuotationCurrency: viewState.T_PAYMENTSTENLV_850.controls.QuotationCurrency as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'TRNSC', taskId: 'T_PAYMENTSTENLV_850', taskVersion: '1.0.0', vcId: 'VC_PAYMENTSFW_851850', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(false, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/TRNSC/T_PAYMENTSTENLV_850', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ['VA_TEXTINPUTBOXSJQ_831141', { filter:"", cobisRequestServerConfig: null, cache: 0 }], ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ['VA_CURRENCYSPEYFQA_285141', { catalogName: 'cl_moneda', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_OPERATIONCURYEE_868141', { catalogName: 'cl_moneda', filter: "", cobisRequestServerConfig: null, cache: 0 }], ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['VA_TEXTINPUTBOXCFY_310141', { queryId: 'Q_LISTOOGA_DP31', entityName: '', filter:"", cobisRequestServerConfig: null, cache: 0 }], ['QV_2540_50573', { queryId: 'Q_QUOTEDLA_2540', entityName: 'QuoteDetails', filter: "", cobisRequestServerConfig: null, cache: 0, queryMemberParameters:[ ]}], ['QV_QG32_ZBS32', { queryId: 'Q_DEFETRFT_LJ32', entityName: 'DeferredRefundList', filter: "", cobisRequestServerConfig: { pageSize :5 }, cache: 0, queryMemberParameters:[ ]}], ['QV_3510_91785', { queryId: 'Q_PRIORIIT_3510', entityName: 'Priorities', filter: "", cobisRequestServerConfig: null, cache: 0, queryMemberParameters:[ ]}], ['QV_1156_30060', { queryId: 'Q_QUOTATNU_1156', entityName: 'QuotationCurrency', filter: "", cobisRequestServerConfig: null, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'PaymentsForm' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
