//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-paymentsan-916157.model';
import { ViewState } from './model/vc-paymentsan-916157-view-state';
import { VcPaymentsan916157Custom } from './vc-paymentsan-916157.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-paymentsan-916157',
templateUrl: './vc-paymentsan-916157.component.html'
})
export class VcPaymentsan916157Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcPaymentsan916157Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
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
const column_VA_TEXTINPUTBOXNNP_119816 = this.metaData.viewState["QV_YE76_DAK33"].columns.find((col: any) => col.field == 'etiqueta');
if (column_VA_TEXTINPUTBOXNNP_119816 != undefined) {
const tplCell_VA_TEXTINPUTBOXNNP_119816 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXNNP_119816');
column_VA_TEXTINPUTBOXNNP_119816.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXNNP_119816?.templateRef;
const tplEdit_VA_TEXTINPUTBOXNNP_119816 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXNNP_119816');
column_VA_TEXTINPUTBOXNNP_119816.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXNNP_119816?.templateRef;
}
const column_VA_TEXTINPUTBOXLGR_859816 = this.metaData.viewState["QV_YE76_DAK33"].columns.find((col: any) => col.field == 'codigo');
if (column_VA_TEXTINPUTBOXLGR_859816 != undefined) {
const tplCell_VA_TEXTINPUTBOXLGR_859816 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXLGR_859816');
column_VA_TEXTINPUTBOXLGR_859816.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXLGR_859816?.templateRef;
const tplEdit_VA_TEXTINPUTBOXLGR_859816 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXLGR_859816');
column_VA_TEXTINPUTBOXLGR_859816.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXLGR_859816?.templateRef;
}
const column_VA_TEXTINPUTBOXTET_747816 = this.metaData.viewState["QV_YE76_DAK33"].columns.find((col: any) => col.field == 'descripcion');
if (column_VA_TEXTINPUTBOXTET_747816 != undefined) {
const tplCell_VA_TEXTINPUTBOXTET_747816 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXTET_747816');
column_VA_TEXTINPUTBOXTET_747816.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXTET_747816?.templateRef;
const tplEdit_VA_TEXTINPUTBOXTET_747816 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXTET_747816');
column_VA_TEXTINPUTBOXTET_747816.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXTET_747816?.templateRef;
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
Payment: viewState.T_PAYMENTSMANII_157.controls.Payment as FormGroup ,
QuoteDetails: viewState.T_PAYMENTSMANII_157.controls.QuoteDetails as FormGroup ,
DeferredRefundList: viewState.T_PAYMENTSMANII_157.controls.DeferredRefundList as FormGroup ,
Priorities: viewState.T_PAYMENTSMANII_157.controls.Priorities as FormGroup ,
QuotationCurrency: viewState.T_PAYMENTSMANII_157.controls.QuotationCurrency as FormGroup ,
PaymentListGroupClient: viewState.T_PAYMENTSMANII_157.controls.PaymentListGroupClient as FormGroup ,
LoanPaymentGroup: viewState.T_PAYMENTSMANII_157.controls.LoanPaymentGroup as FormGroup ,
PaymentGroup: viewState.T_PAYMENTSMANII_157.controls.PaymentGroup as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'TRNSC', taskId: 'T_PAYMENTSMANII_157', taskVersion: '1.0.0', vcId: 'VC_PAYMENTSAN_916157', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, true), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/TRNSC/T_PAYMENTSMANII_157', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ['VA_TEXTINPUTBOXSJQ_831141', { filter:"", cobisRequestServerConfig: null, cache: 0 }], ['VA_1MVJRDIJAIBEKBY_880816', { filter:"", cobisRequestServerConfig: null, cache: 0 }], ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ['VA_CURRENCYSPEYFQA_285141', { catalogName: 'cl_moneda', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_OPERATIONCURYEE_868141', { catalogName: 'cl_moneda', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_3NOEHOUBCWRSQSM_770816', { catalogName: 'cl_moneda', filter: "", cobisRequestServerConfig: null, cache: 0 }], ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['VA_TEXTINPUTBOXCFY_310141', { queryId: 'Q_LISTOOGA_DP31', entityName: '', filter:"", cobisRequestServerConfig: null, cache: 0 }], ['QV_2540_50573', { queryId: 'Q_QUOTEDLA_2540', entityName: 'QuoteDetails', filter: "", cobisRequestServerConfig: null, cache: 0, queryMemberParameters:[ ]}], ['QV_QG32_ZBS32', { queryId: 'Q_DEFETRFT_LJ32', entityName: 'DeferredRefundList', filter: "", cobisRequestServerConfig: { pageSize :5 }, cache: 0, queryMemberParameters:[ ]}], ['QV_3510_91785', { queryId: 'Q_PRIORIIT_3510', entityName: 'Priorities', filter: "", cobisRequestServerConfig: null, cache: 0, queryMemberParameters:[ ]}], ['QV_1156_30060', { queryId: 'Q_QUOTATNU_1156', entityName: 'QuotationCurrency', filter: "", cobisRequestServerConfig: null, cache: 0, queryMemberParameters:[ ]}], ['QV_YE76_DAK33', { queryId: 'Q_PAYMGPOE_BC76', entityName: 'PaymentListGroupClient', filter: "", cobisRequestServerConfig: null, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'ViewContainerBase' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
