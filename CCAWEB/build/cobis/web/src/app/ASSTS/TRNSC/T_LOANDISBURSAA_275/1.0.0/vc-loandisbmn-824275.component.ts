//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-loandisbmn-824275.model';
import { ViewState } from './model/vc-loandisbmn-824275-view-state';
import { VcLoandisbmn824275Custom } from './vc-loandisbmn-824275.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-loandisbmn-824275',
templateUrl: './vc-loandisbmn-824275.component.html'
})
export class VcLoandisbmn824275Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcLoandisbmn824275Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXBKP_698405 = this.metaData.viewState["QV_1603_21320"].columns.find((col: any) => col.field == 'description');
if (column_VA_TEXTINPUTBOXBKP_698405 != undefined) {
const tplCell_VA_TEXTINPUTBOXBKP_698405 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXBKP_698405');
column_VA_TEXTINPUTBOXBKP_698405.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXBKP_698405?.templateRef;
const tplEdit_VA_TEXTINPUTBOXBKP_698405 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXBKP_698405');
column_VA_TEXTINPUTBOXBKP_698405.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXBKP_698405?.templateRef;
}
const column_VA_TEXTINPUTBOXXMW_735405 = this.metaData.viewState["QV_1603_21320"].columns.find((col: any) => col.field == 'value');
if (column_VA_TEXTINPUTBOXXMW_735405 != undefined) {
const tplCell_VA_TEXTINPUTBOXXMW_735405 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXXMW_735405');
column_VA_TEXTINPUTBOXXMW_735405.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXXMW_735405?.templateRef;
const tplEdit_VA_TEXTINPUTBOXXMW_735405 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXXMW_735405');
column_VA_TEXTINPUTBOXXMW_735405.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXXMW_735405?.templateRef;
}
const column_VA_TEXTINPUTBOXHUQ_857405 = this.metaData.viewState["QV_5973_48889"].columns.find((col: any) => col.field == 'disbursementId');
if (column_VA_TEXTINPUTBOXHUQ_857405 != undefined) {
const tplCell_VA_TEXTINPUTBOXHUQ_857405 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXHUQ_857405');
column_VA_TEXTINPUTBOXHUQ_857405.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXHUQ_857405?.templateRef;
const tplEdit_VA_TEXTINPUTBOXHUQ_857405 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXHUQ_857405');
column_VA_TEXTINPUTBOXHUQ_857405.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXHUQ_857405?.templateRef;
}
const column_VA_TEXTINPUTBOXOKM_482405 = this.metaData.viewState["QV_5973_48889"].columns.find((col: any) => col.field == 'disbursementrate');
if (column_VA_TEXTINPUTBOXOKM_482405 != undefined) {
const tplCell_VA_TEXTINPUTBOXOKM_482405 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXOKM_482405');
column_VA_TEXTINPUTBOXOKM_482405.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXOKM_482405?.templateRef;
const tplEdit_VA_TEXTINPUTBOXOKM_482405 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXOKM_482405');
column_VA_TEXTINPUTBOXOKM_482405.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXOKM_482405?.templateRef;
}
const column_VA_TEXTINPUTBOXDPF_455405 = this.metaData.viewState["QV_5973_48889"].columns.find((col: any) => col.field == 'currencyId');
if (column_VA_TEXTINPUTBOXDPF_455405 != undefined) {
const tplCell_VA_TEXTINPUTBOXDPF_455405 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXDPF_455405');
column_VA_TEXTINPUTBOXDPF_455405.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXDPF_455405?.templateRef;
const tplEdit_VA_TEXTINPUTBOXDPF_455405 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXDPF_455405');
column_VA_TEXTINPUTBOXDPF_455405.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXDPF_455405?.templateRef;
}
const column_VA_TEXTINPUTBOXLVA_650405 = this.metaData.viewState["QV_5973_48889"].columns.find((col: any) => col.field == 'currencyDescription');
if (column_VA_TEXTINPUTBOXLVA_650405 != undefined) {
const tplCell_VA_TEXTINPUTBOXLVA_650405 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXLVA_650405');
column_VA_TEXTINPUTBOXLVA_650405.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXLVA_650405?.templateRef;
const tplEdit_VA_TEXTINPUTBOXLVA_650405 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXLVA_650405');
column_VA_TEXTINPUTBOXLVA_650405.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXLVA_650405?.templateRef;
}
const column_VA_TEXTINPUTBOXAKE_256405 = this.metaData.viewState["QV_5973_48889"].columns.find((col: any) => col.field == 'amount');
if (column_VA_TEXTINPUTBOXAKE_256405 != undefined) {
const tplCell_VA_TEXTINPUTBOXAKE_256405 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXAKE_256405');
column_VA_TEXTINPUTBOXAKE_256405.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXAKE_256405?.templateRef;
const tplEdit_VA_TEXTINPUTBOXAKE_256405 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXAKE_256405');
column_VA_TEXTINPUTBOXAKE_256405.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXAKE_256405?.templateRef;
}
const column_VA_TEXTINPUTBOXPIY_824405 = this.metaData.viewState["QV_5973_48889"].columns.find((col: any) => col.field == 'typeQuotation');
if (column_VA_TEXTINPUTBOXPIY_824405 != undefined) {
const tplCell_VA_TEXTINPUTBOXPIY_824405 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXPIY_824405');
column_VA_TEXTINPUTBOXPIY_824405.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXPIY_824405?.templateRef;
const tplEdit_VA_TEXTINPUTBOXPIY_824405 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXPIY_824405');
column_VA_TEXTINPUTBOXPIY_824405.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXPIY_824405?.templateRef;
}
const column_VA_TEXTINPUTBOXFBW_549405 = this.metaData.viewState["QV_5973_48889"].columns.find((col: any) => col.field == 'quote');
if (column_VA_TEXTINPUTBOXFBW_549405 != undefined) {
const tplCell_VA_TEXTINPUTBOXFBW_549405 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXFBW_549405');
column_VA_TEXTINPUTBOXFBW_549405.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXFBW_549405?.templateRef;
const tplEdit_VA_TEXTINPUTBOXFBW_549405 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXFBW_549405');
column_VA_TEXTINPUTBOXFBW_549405.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXFBW_549405?.templateRef;
}
const column_VA_TEXTINPUTBOXNRM_694405 = this.metaData.viewState["QV_5973_48889"].columns.find((col: any) => col.field == 'amountOp');
if (column_VA_TEXTINPUTBOXNRM_694405 != undefined) {
const tplCell_VA_TEXTINPUTBOXNRM_694405 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXNRM_694405');
column_VA_TEXTINPUTBOXNRM_694405.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXNRM_694405?.templateRef;
const tplEdit_VA_TEXTINPUTBOXNRM_694405 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXNRM_694405');
column_VA_TEXTINPUTBOXNRM_694405.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXNRM_694405?.templateRef;
}
const column_VA_TEXTINPUTBOXGJS_417405 = this.metaData.viewState["QV_5973_48889"].columns.find((col: any) => col.field == 'quoteTypeOp');
if (column_VA_TEXTINPUTBOXGJS_417405 != undefined) {
const tplCell_VA_TEXTINPUTBOXGJS_417405 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXGJS_417405');
column_VA_TEXTINPUTBOXGJS_417405.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXGJS_417405?.templateRef;
const tplEdit_VA_TEXTINPUTBOXGJS_417405 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXGJS_417405');
column_VA_TEXTINPUTBOXGJS_417405.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXGJS_417405?.templateRef;
}
const column_VA_TEXTINPUTBOXHKY_687405 = this.metaData.viewState["QV_5973_48889"].columns.find((col: any) => col.field == 'quoteOp');
if (column_VA_TEXTINPUTBOXHKY_687405 != undefined) {
const tplCell_VA_TEXTINPUTBOXHKY_687405 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXHKY_687405');
column_VA_TEXTINPUTBOXHKY_687405.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXHKY_687405?.templateRef;
const tplEdit_VA_TEXTINPUTBOXHKY_687405 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXHKY_687405');
column_VA_TEXTINPUTBOXHKY_687405.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXHKY_687405?.templateRef;
}
const column_VA_TEXTINPUTBOXOQY_980405 = this.metaData.viewState["QV_5973_48889"].columns.find((col: any) => col.field == 'amountMn');
if (column_VA_TEXTINPUTBOXOQY_980405 != undefined) {
const tplCell_VA_TEXTINPUTBOXOQY_980405 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXOQY_980405');
column_VA_TEXTINPUTBOXOQY_980405.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXOQY_980405?.templateRef;
const tplEdit_VA_TEXTINPUTBOXOQY_980405 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXOQY_980405');
column_VA_TEXTINPUTBOXOQY_980405.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXOQY_980405?.templateRef;
}
const column_VA_TEXTINPUTBOXRFX_333405 = this.metaData.viewState["QV_5973_48889"].columns.find((col: any) => col.field == 'account');
if (column_VA_TEXTINPUTBOXRFX_333405 != undefined) {
const tplCell_VA_TEXTINPUTBOXRFX_333405 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXRFX_333405');
column_VA_TEXTINPUTBOXRFX_333405.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXRFX_333405?.templateRef;
const tplEdit_VA_TEXTINPUTBOXRFX_333405 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXRFX_333405');
column_VA_TEXTINPUTBOXRFX_333405.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXRFX_333405?.templateRef;
}
const column_VA_TEXTINPUTBOXPHT_403405 = this.metaData.viewState["QV_5973_48889"].columns.find((col: any) => col.field == 'beneficiary');
if (column_VA_TEXTINPUTBOXPHT_403405 != undefined) {
const tplCell_VA_TEXTINPUTBOXPHT_403405 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXPHT_403405');
column_VA_TEXTINPUTBOXPHT_403405.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXPHT_403405?.templateRef;
const tplEdit_VA_TEXTINPUTBOXPHT_403405 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXPHT_403405');
column_VA_TEXTINPUTBOXPHT_403405.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXPHT_403405?.templateRef;
}
const column_VA_TEXTINPUTBOXEZU_598405 = this.metaData.viewState["QV_5973_48889"].columns.find((col: any) => col.field == 'officeId');
if (column_VA_TEXTINPUTBOXEZU_598405 != undefined) {
const tplCell_VA_TEXTINPUTBOXEZU_598405 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXEZU_598405');
column_VA_TEXTINPUTBOXEZU_598405.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXEZU_598405?.templateRef;
const tplEdit_VA_TEXTINPUTBOXEZU_598405 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXEZU_598405');
column_VA_TEXTINPUTBOXEZU_598405.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXEZU_598405?.templateRef;
}
const column_VA_TEXTINPUTBOXUJF_534405 = this.metaData.viewState["QV_5973_48889"].columns.find((col: any) => col.field == 'officeName');
if (column_VA_TEXTINPUTBOXUJF_534405 != undefined) {
const tplCell_VA_TEXTINPUTBOXUJF_534405 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXUJF_534405');
column_VA_TEXTINPUTBOXUJF_534405.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXUJF_534405?.templateRef;
const tplEdit_VA_TEXTINPUTBOXUJF_534405 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXUJF_534405');
column_VA_TEXTINPUTBOXUJF_534405.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXUJF_534405?.templateRef;
}
const column_VA_TEXTINPUTBOXIMM_485405 = this.metaData.viewState["QV_5973_48889"].columns.find((col: any) => col.field == 'sequential');
if (column_VA_TEXTINPUTBOXIMM_485405 != undefined) {
const tplCell_VA_TEXTINPUTBOXIMM_485405 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXIMM_485405');
column_VA_TEXTINPUTBOXIMM_485405.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXIMM_485405?.templateRef;
const tplEdit_VA_TEXTINPUTBOXIMM_485405 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXIMM_485405');
column_VA_TEXTINPUTBOXIMM_485405.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXIMM_485405?.templateRef;
}
const column_VA_TEXTINPUTBOXXLH_478405 = this.metaData.viewState["QV_5973_48889"].columns.find((col: any) => col.field == 'productCategory');
if (column_VA_TEXTINPUTBOXXLH_478405 != undefined) {
const tplCell_VA_TEXTINPUTBOXXLH_478405 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXXLH_478405');
column_VA_TEXTINPUTBOXXLH_478405.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXXLH_478405?.templateRef;
const tplEdit_VA_TEXTINPUTBOXXLH_478405 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXXLH_478405');
column_VA_TEXTINPUTBOXXLH_478405.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXXLH_478405?.templateRef;
}
const column_VA_TEXTINPUTBOXAPS_637405 = this.metaData.viewState["QV_5973_48889"].columns.find((col: any) => col.field == 'preNotification');
if (column_VA_TEXTINPUTBOXAPS_637405 != undefined) {
const tplCell_VA_TEXTINPUTBOXAPS_637405 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXAPS_637405');
column_VA_TEXTINPUTBOXAPS_637405.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXAPS_637405?.templateRef;
const tplEdit_VA_TEXTINPUTBOXAPS_637405 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXAPS_637405');
column_VA_TEXTINPUTBOXAPS_637405.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXAPS_637405?.templateRef;
}
const column_VA_TEXTINPUTBOXKEH_204405 = this.metaData.viewState["QV_5973_48889"].columns.find((col: any) => col.field == 'observations');
if (column_VA_TEXTINPUTBOXKEH_204405 != undefined) {
const tplCell_VA_TEXTINPUTBOXKEH_204405 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXKEH_204405');
column_VA_TEXTINPUTBOXKEH_204405.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXKEH_204405?.templateRef;
const tplEdit_VA_TEXTINPUTBOXKEH_204405 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXKEH_204405');
column_VA_TEXTINPUTBOXKEH_204405.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXKEH_204405?.templateRef;
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
Loan: viewState.T_LOANDISBURSAA_275.controls.Loan as FormGroup ,
LoanAdditionalInformation: viewState.T_LOANDISBURSAA_275.controls.LoanAdditionalInformation as FormGroup ,
DetailAmountsToCancel: viewState.T_LOANDISBURSAA_275.controls.DetailAmountsToCancel as FormGroup ,
DetailPaymentForm: viewState.T_LOANDISBURSAA_275.controls.DetailPaymentForm as FormGroup ,
LiquidateResult: viewState.T_LOANDISBURSAA_275.controls.LiquidateResult as FormGroup ,
DisbursementResult: viewState.T_LOANDISBURSAA_275.controls.DisbursementResult as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'TRNSC', taskId: 'T_LOANDISBURSAA_275', taskVersion: '1.0.0', vcId: 'VC_LOANDISBMN_824275', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, true), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/TRNSC/T_LOANDISBURSAA_275', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ['VA_CURRENCYOPUEQVI_819405', { catalogName: 'cl_moneda', filter: "", cobisRequestServerConfig: null, cache: 0 }], ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_1603_21320', { queryId: 'Q_DETAILTM_1603', entityName: 'DetailAmountsToCancel', filter: "", cobisRequestServerConfig: null, cache: 0, queryMemberParameters:[ ]}], ['QV_5973_48889', { queryId: 'Q_DETAILAP_5973', entityName: 'DetailPaymentForm', filter: "", cobisRequestServerConfig: { pageSize :5 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'ViewContainerBase' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
