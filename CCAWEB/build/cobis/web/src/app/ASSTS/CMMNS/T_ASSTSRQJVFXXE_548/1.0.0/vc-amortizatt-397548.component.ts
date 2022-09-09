//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-amortizatt-397548.model';
import { ViewState } from './model/vc-amortizatt-397548-view-state';
import { VcAmortizatt397548Custom } from './vc-amortizatt-397548.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-amortizatt-397548',
templateUrl: './vc-amortizatt-397548.component.html'
})
export class VcAmortizatt397548Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcAmortizatt397548Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXEBY_458244 = this.metaData.viewState["QV_QV37_LCP47"].columns.find((col: any) => col.field == 'share');
if (column_VA_TEXTINPUTBOXEBY_458244 != undefined) {
const tplCell_VA_TEXTINPUTBOXEBY_458244 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXEBY_458244');
column_VA_TEXTINPUTBOXEBY_458244.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXEBY_458244?.templateRef;
const tplEdit_VA_TEXTINPUTBOXEBY_458244 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXEBY_458244');
column_VA_TEXTINPUTBOXEBY_458244.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXEBY_458244?.templateRef;
}
const column_VA_DATEFIELDMUGVCO_937244 = this.metaData.viewState["QV_QV37_LCP47"].columns.find((col: any) => col.field == 'expiration');
if (column_VA_DATEFIELDMUGVCO_937244 != undefined) {
const tplCell_VA_DATEFIELDMUGVCO_937244 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DATEFIELDMUGVCO_937244');
column_VA_DATEFIELDMUGVCO_937244.properties.cellTemplate = tplCell_VA_DATEFIELDMUGVCO_937244?.templateRef;
const tplEdit_VA_DATEFIELDMUGVCO_937244 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DATEFIELDMUGVCO_937244');
column_VA_DATEFIELDMUGVCO_937244.properties.editTemplate = tplEdit_VA_DATEFIELDMUGVCO_937244?.templateRef;
}
const column_VA_TEXTINPUTBOXAJH_441244 = this.metaData.viewState["QV_QV37_LCP47"].columns.find((col: any) => col.field == 'days');
if (column_VA_TEXTINPUTBOXAJH_441244 != undefined) {
const tplCell_VA_TEXTINPUTBOXAJH_441244 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXAJH_441244');
column_VA_TEXTINPUTBOXAJH_441244.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXAJH_441244?.templateRef;
const tplEdit_VA_TEXTINPUTBOXAJH_441244 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXAJH_441244');
column_VA_TEXTINPUTBOXAJH_441244.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXAJH_441244?.templateRef;
}
const column_VA_TEXTINPUTBOXEBB_845244 = this.metaData.viewState["QV_QV37_LCP47"].columns.find((col: any) => col.field == 'balanceCap');
if (column_VA_TEXTINPUTBOXEBB_845244 != undefined) {
const tplCell_VA_TEXTINPUTBOXEBB_845244 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXEBB_845244');
column_VA_TEXTINPUTBOXEBB_845244.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXEBB_845244?.templateRef;
const tplEdit_VA_TEXTINPUTBOXEBB_845244 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXEBB_845244');
column_VA_TEXTINPUTBOXEBB_845244.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXEBB_845244?.templateRef;
}
const column_VA_TEXTINPUTBOXXIE_368244 = this.metaData.viewState["QV_QV37_LCP47"].columns.find((col: any) => col.field == 'items1');
if (column_VA_TEXTINPUTBOXXIE_368244 != undefined) {
const tplCell_VA_TEXTINPUTBOXXIE_368244 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXXIE_368244');
column_VA_TEXTINPUTBOXXIE_368244.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXXIE_368244?.templateRef;
const tplEdit_VA_TEXTINPUTBOXXIE_368244 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXXIE_368244');
column_VA_TEXTINPUTBOXXIE_368244.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXXIE_368244?.templateRef;
}
const column_VA_TEXTINPUTBOXECP_389244 = this.metaData.viewState["QV_QV37_LCP47"].columns.find((col: any) => col.field == 'items2');
if (column_VA_TEXTINPUTBOXECP_389244 != undefined) {
const tplCell_VA_TEXTINPUTBOXECP_389244 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXECP_389244');
column_VA_TEXTINPUTBOXECP_389244.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXECP_389244?.templateRef;
const tplEdit_VA_TEXTINPUTBOXECP_389244 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXECP_389244');
column_VA_TEXTINPUTBOXECP_389244.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXECP_389244?.templateRef;
}
const column_VA_TEXTINPUTBOXIQG_995244 = this.metaData.viewState["QV_QV37_LCP47"].columns.find((col: any) => col.field == 'items3');
if (column_VA_TEXTINPUTBOXIQG_995244 != undefined) {
const tplCell_VA_TEXTINPUTBOXIQG_995244 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXIQG_995244');
column_VA_TEXTINPUTBOXIQG_995244.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXIQG_995244?.templateRef;
const tplEdit_VA_TEXTINPUTBOXIQG_995244 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXIQG_995244');
column_VA_TEXTINPUTBOXIQG_995244.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXIQG_995244?.templateRef;
}
const column_VA_TEXTINPUTBOXCZG_232244 = this.metaData.viewState["QV_QV37_LCP47"].columns.find((col: any) => col.field == 'items4');
if (column_VA_TEXTINPUTBOXCZG_232244 != undefined) {
const tplCell_VA_TEXTINPUTBOXCZG_232244 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXCZG_232244');
column_VA_TEXTINPUTBOXCZG_232244.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXCZG_232244?.templateRef;
const tplEdit_VA_TEXTINPUTBOXCZG_232244 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXCZG_232244');
column_VA_TEXTINPUTBOXCZG_232244.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXCZG_232244?.templateRef;
}
const column_VA_TEXTINPUTBOXYJC_667244 = this.metaData.viewState["QV_QV37_LCP47"].columns.find((col: any) => col.field == 'items5');
if (column_VA_TEXTINPUTBOXYJC_667244 != undefined) {
const tplCell_VA_TEXTINPUTBOXYJC_667244 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXYJC_667244');
column_VA_TEXTINPUTBOXYJC_667244.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXYJC_667244?.templateRef;
const tplEdit_VA_TEXTINPUTBOXYJC_667244 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXYJC_667244');
column_VA_TEXTINPUTBOXYJC_667244.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXYJC_667244?.templateRef;
}
const column_VA_TEXTINPUTBOXZCC_660244 = this.metaData.viewState["QV_QV37_LCP47"].columns.find((col: any) => col.field == 'shareValue');
if (column_VA_TEXTINPUTBOXZCC_660244 != undefined) {
const tplCell_VA_TEXTINPUTBOXZCC_660244 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXZCC_660244');
column_VA_TEXTINPUTBOXZCC_660244.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXZCC_660244?.templateRef;
const tplEdit_VA_TEXTINPUTBOXZCC_660244 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXZCC_660244');
column_VA_TEXTINPUTBOXZCC_660244.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXZCC_660244?.templateRef;
}
const column_VA_TEXTINPUTBOXEKM_962244 = this.metaData.viewState["QV_QV37_LCP47"].columns.find((col: any) => col.field == 'items6');
if (column_VA_TEXTINPUTBOXEKM_962244 != undefined) {
const tplCell_VA_TEXTINPUTBOXEKM_962244 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXEKM_962244');
column_VA_TEXTINPUTBOXEKM_962244.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXEKM_962244?.templateRef;
const tplEdit_VA_TEXTINPUTBOXEKM_962244 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXEKM_962244');
column_VA_TEXTINPUTBOXEKM_962244.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXEKM_962244?.templateRef;
}
const column_VA_TEXTINPUTBOXAZY_732244 = this.metaData.viewState["QV_QV37_LCP47"].columns.find((col: any) => col.field == 'state');
if (column_VA_TEXTINPUTBOXAZY_732244 != undefined) {
const tplCell_VA_TEXTINPUTBOXAZY_732244 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXAZY_732244');
column_VA_TEXTINPUTBOXAZY_732244.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXAZY_732244?.templateRef;
const tplEdit_VA_TEXTINPUTBOXAZY_732244 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXAZY_732244');
column_VA_TEXTINPUTBOXAZY_732244.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXAZY_732244?.templateRef;
}
const column_VA_TEXTINPUTBOXBOQ_761244 = this.metaData.viewState["QV_QV37_LCP47"].columns.find((col: any) => col.field == 'porroga');
if (column_VA_TEXTINPUTBOXBOQ_761244 != undefined) {
const tplCell_VA_TEXTINPUTBOXBOQ_761244 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXBOQ_761244');
column_VA_TEXTINPUTBOXBOQ_761244.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXBOQ_761244?.templateRef;
const tplEdit_VA_TEXTINPUTBOXBOQ_761244 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXBOQ_761244');
column_VA_TEXTINPUTBOXBOQ_761244.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXBOQ_761244?.templateRef;
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
Amortization: viewState.T_ASSTSRQJVFXXE_548.controls.Amortization as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'CMMNS', taskId: 'T_ASSTSRQJVFXXE_548', taskVersion: '1.0.0', vcId: 'VC_AMORTIZATT_397548', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/CMMNS/T_ASSTSRQJVFXXE_548', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_QV37_LCP47', { queryId: 'Q_AMORTIAN_8237', entityName: 'Amortization', filter: "", cobisRequestServerConfig: { pageSize :10 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'AmortizationModal' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
