//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-paymentzmn-922714.model';
import { ViewState } from './model/vc-paymentzmn-922714-view-state';
import { VcPaymentzmn922714Custom } from './vc-paymentzmn-922714.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-paymentzmn-922714',
templateUrl: './vc-paymentzmn-922714.component.html'
})
export class VcPaymentzmn922714Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcPaymentzmn922714Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXUWP_909154 = this.metaData.viewState["QV_5030_22532"].columns.find((col: any) => col.field == 'status');
if (column_VA_TEXTINPUTBOXUWP_909154 != undefined) {
const tplCell_VA_TEXTINPUTBOXUWP_909154 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXUWP_909154');
column_VA_TEXTINPUTBOXUWP_909154.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXUWP_909154?.templateRef;
const tplEdit_VA_TEXTINPUTBOXUWP_909154 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXUWP_909154');
column_VA_TEXTINPUTBOXUWP_909154.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXUWP_909154?.templateRef;
}
const column_VA_TEXTINPUTBOXMUO_385154 = this.metaData.viewState["QV_5030_22532"].columns.find((col: any) => col.field == 'sequential');
if (column_VA_TEXTINPUTBOXMUO_385154 != undefined) {
const tplCell_VA_TEXTINPUTBOXMUO_385154 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXMUO_385154');
column_VA_TEXTINPUTBOXMUO_385154.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXMUO_385154?.templateRef;
const tplEdit_VA_TEXTINPUTBOXMUO_385154 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXMUO_385154');
column_VA_TEXTINPUTBOXMUO_385154.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXMUO_385154?.templateRef;
}
const column_VA_TEXTINPUTBOXBSJ_689154 = this.metaData.viewState["QV_5030_22532"].columns.find((col: any) => col.field == 'sequentialPay');
if (column_VA_TEXTINPUTBOXBSJ_689154 != undefined) {
const tplCell_VA_TEXTINPUTBOXBSJ_689154 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXBSJ_689154');
column_VA_TEXTINPUTBOXBSJ_689154.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXBSJ_689154?.templateRef;
const tplEdit_VA_TEXTINPUTBOXBSJ_689154 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXBSJ_689154');
column_VA_TEXTINPUTBOXBSJ_689154.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXBSJ_689154?.templateRef;
}
const column_VA_DATEFIELDPDCJAA_495154 = this.metaData.viewState["QV_5030_22532"].columns.find((col: any) => col.field == 'date');
if (column_VA_DATEFIELDPDCJAA_495154 != undefined) {
const tplCell_VA_DATEFIELDPDCJAA_495154 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DATEFIELDPDCJAA_495154');
column_VA_DATEFIELDPDCJAA_495154.properties.cellTemplate = tplCell_VA_DATEFIELDPDCJAA_495154?.templateRef;
const tplEdit_VA_DATEFIELDPDCJAA_495154 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DATEFIELDPDCJAA_495154');
column_VA_DATEFIELDPDCJAA_495154.properties.editTemplate = tplEdit_VA_DATEFIELDPDCJAA_495154?.templateRef;
}
const column_VA_DATEFIELDEMXTST_413154 = this.metaData.viewState["QV_5030_22532"].columns.find((col: any) => col.field == 'datePay');
if (column_VA_DATEFIELDEMXTST_413154 != undefined) {
const tplCell_VA_DATEFIELDEMXTST_413154 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DATEFIELDEMXTST_413154');
column_VA_DATEFIELDEMXTST_413154.properties.cellTemplate = tplCell_VA_DATEFIELDEMXTST_413154?.templateRef;
const tplEdit_VA_DATEFIELDEMXTST_413154 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DATEFIELDEMXTST_413154');
column_VA_DATEFIELDEMXTST_413154.properties.editTemplate = tplEdit_VA_DATEFIELDEMXTST_413154?.templateRef;
}
const column_VA_TEXTINPUTBOXXSF_766154 = this.metaData.viewState["QV_5030_22532"].columns.find((col: any) => col.field == 'paymentType');
if (column_VA_TEXTINPUTBOXXSF_766154 != undefined) {
const tplCell_VA_TEXTINPUTBOXXSF_766154 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXXSF_766154');
column_VA_TEXTINPUTBOXXSF_766154.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXXSF_766154?.templateRef;
const tplEdit_VA_TEXTINPUTBOXXSF_766154 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXXSF_766154');
column_VA_TEXTINPUTBOXXSF_766154.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXXSF_766154?.templateRef;
}
const column_VA_TEXTINPUTBOXZVE_754154 = this.metaData.viewState["QV_5030_22532"].columns.find((col: any) => col.field == 'amount');
if (column_VA_TEXTINPUTBOXZVE_754154 != undefined) {
const tplCell_VA_TEXTINPUTBOXZVE_754154 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXZVE_754154');
column_VA_TEXTINPUTBOXZVE_754154.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXZVE_754154?.templateRef;
const tplEdit_VA_TEXTINPUTBOXZVE_754154 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXZVE_754154');
column_VA_TEXTINPUTBOXZVE_754154.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXZVE_754154?.templateRef;
}
const column_VA_TEXTINPUTBOXDLC_207154 = this.metaData.viewState["QV_5030_22532"].columns.find((col: any) => col.field == 'currencyType');
if (column_VA_TEXTINPUTBOXDLC_207154 != undefined) {
const tplCell_VA_TEXTINPUTBOXDLC_207154 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXDLC_207154');
column_VA_TEXTINPUTBOXDLC_207154.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXDLC_207154?.templateRef;
const tplEdit_VA_TEXTINPUTBOXDLC_207154 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXDLC_207154');
column_VA_TEXTINPUTBOXDLC_207154.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXDLC_207154?.templateRef;
}
const column_VA_TEXTINPUTBOXBYZ_445154 = this.metaData.viewState["QV_5030_22532"].columns.find((col: any) => col.field == 'user');
if (column_VA_TEXTINPUTBOXBYZ_445154 != undefined) {
const tplCell_VA_TEXTINPUTBOXBYZ_445154 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXBYZ_445154');
column_VA_TEXTINPUTBOXBYZ_445154.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXBYZ_445154?.templateRef;
const tplEdit_VA_TEXTINPUTBOXBYZ_445154 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXBYZ_445154');
column_VA_TEXTINPUTBOXBYZ_445154.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXBYZ_445154?.templateRef;
}
const column_VA_TEXTINPUTBOXPKV_144154 = this.metaData.viewState["QV_5030_22532"].columns.find((col: any) => col.field == 'entireFee');
if (column_VA_TEXTINPUTBOXPKV_144154 != undefined) {
const tplCell_VA_TEXTINPUTBOXPKV_144154 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXPKV_144154');
column_VA_TEXTINPUTBOXPKV_144154.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXPKV_144154?.templateRef;
const tplEdit_VA_TEXTINPUTBOXPKV_144154 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXPKV_144154');
column_VA_TEXTINPUTBOXPKV_144154.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXPKV_144154?.templateRef;
}
const column_VA_TEXTINPUTBOXRRC_423154 = this.metaData.viewState["QV_5030_22532"].columns.find((col: any) => col.field == 'advance');
if (column_VA_TEXTINPUTBOXRRC_423154 != undefined) {
const tplCell_VA_TEXTINPUTBOXRRC_423154 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXRRC_423154');
column_VA_TEXTINPUTBOXRRC_423154.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXRRC_423154?.templateRef;
const tplEdit_VA_TEXTINPUTBOXRRC_423154 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXRRC_423154');
column_VA_TEXTINPUTBOXRRC_423154.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXRRC_423154?.templateRef;
}
const column_VA_TEXTINPUTBOXHER_720154 = this.metaData.viewState["QV_5030_22532"].columns.find((col: any) => col.field == 'reductionType');
if (column_VA_TEXTINPUTBOXHER_720154 != undefined) {
const tplCell_VA_TEXTINPUTBOXHER_720154 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXHER_720154');
column_VA_TEXTINPUTBOXHER_720154.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXHER_720154?.templateRef;
const tplEdit_VA_TEXTINPUTBOXHER_720154 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXHER_720154');
column_VA_TEXTINPUTBOXHER_720154.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXHER_720154?.templateRef;
}
const column_VA_TEXTINPUTBOXMFE_161154 = this.metaData.viewState["QV_5030_22532"].columns.find((col: any) => col.field == 'collectionType');
if (column_VA_TEXTINPUTBOXMFE_161154 != undefined) {
const tplCell_VA_TEXTINPUTBOXMFE_161154 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXMFE_161154');
column_VA_TEXTINPUTBOXMFE_161154.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXMFE_161154?.templateRef;
const tplEdit_VA_TEXTINPUTBOXMFE_161154 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXMFE_161154');
column_VA_TEXTINPUTBOXMFE_161154.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXMFE_161154?.templateRef;
}
const column_VA_TEXTINPUTBOXQCM_915154 = this.metaData.viewState["QV_5030_22532"].columns.find((col: any) => col.field == 'category');
if (column_VA_TEXTINPUTBOXQCM_915154 != undefined) {
const tplCell_VA_TEXTINPUTBOXQCM_915154 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXQCM_915154');
column_VA_TEXTINPUTBOXQCM_915154.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXQCM_915154?.templateRef;
const tplEdit_VA_TEXTINPUTBOXQCM_915154 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXQCM_915154');
column_VA_TEXTINPUTBOXQCM_915154.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXQCM_915154?.templateRef;
}
const column_VA_TEXTINPUTBOXKJZ_326154 = this.metaData.viewState["QV_5030_22532"].columns.find((col: any) => col.field == 'referencedAccount');
if (column_VA_TEXTINPUTBOXKJZ_326154 != undefined) {
const tplCell_VA_TEXTINPUTBOXKJZ_326154 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXKJZ_326154');
column_VA_TEXTINPUTBOXKJZ_326154.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXKJZ_326154?.templateRef;
const tplEdit_VA_TEXTINPUTBOXKJZ_326154 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXKJZ_326154');
column_VA_TEXTINPUTBOXKJZ_326154.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXKJZ_326154?.templateRef;
}
const column_VA_TEXTINPUTBOXGMT_221154 = this.metaData.viewState["QV_5030_22532"].columns.find((col: any) => col.field == 'note');
if (column_VA_TEXTINPUTBOXGMT_221154 != undefined) {
const tplCell_VA_TEXTINPUTBOXGMT_221154 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXGMT_221154');
column_VA_TEXTINPUTBOXGMT_221154.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXGMT_221154?.templateRef;
const tplEdit_VA_TEXTINPUTBOXGMT_221154 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXGMT_221154');
column_VA_TEXTINPUTBOXGMT_221154.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXGMT_221154?.templateRef;
}
const column_VA_TEXTINPUTBOXZNQ_252154 = this.metaData.viewState["QV_5030_22532"].columns.find((col: any) => col.field == 'regional');
if (column_VA_TEXTINPUTBOXZNQ_252154 != undefined) {
const tplCell_VA_TEXTINPUTBOXZNQ_252154 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXZNQ_252154');
column_VA_TEXTINPUTBOXZNQ_252154.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXZNQ_252154?.templateRef;
const tplEdit_VA_TEXTINPUTBOXZNQ_252154 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXZNQ_252154');
column_VA_TEXTINPUTBOXZNQ_252154.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXZNQ_252154?.templateRef;
}
const column_VA_TEXTINPUTBOXZQK_755154 = this.metaData.viewState["QV_5030_22532"].columns.find((col: any) => col.field == 'retention');
if (column_VA_TEXTINPUTBOXZQK_755154 != undefined) {
const tplCell_VA_TEXTINPUTBOXZQK_755154 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXZQK_755154');
column_VA_TEXTINPUTBOXZQK_755154.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXZQK_755154?.templateRef;
const tplEdit_VA_TEXTINPUTBOXZQK_755154 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXZQK_755154');
column_VA_TEXTINPUTBOXZQK_755154.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXZQK_755154?.templateRef;
}
const column_VA_TEXTINPUTBOXEXW_393154 = this.metaData.viewState["QV_5030_22532"].columns.find((col: any) => col.field == 'querySequential');
if (column_VA_TEXTINPUTBOXEXW_393154 != undefined) {
const tplCell_VA_TEXTINPUTBOXEXW_393154 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXEXW_393154');
column_VA_TEXTINPUTBOXEXW_393154.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXEXW_393154?.templateRef;
const tplEdit_VA_TEXTINPUTBOXEXW_393154 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXEXW_393154');
column_VA_TEXTINPUTBOXEXW_393154.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXEXW_393154?.templateRef;
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
Payment: viewState.T_PAYMENTUTOUGP_714.controls.Payment as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'QERYS', taskId: 'T_PAYMENTUTOUGP_714', taskVersion: '1.0.0', vcId: 'VC_PAYMENTZMN_922714', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/QERYS/T_PAYMENTUTOUGP_714', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_5030_22532', { queryId: 'Q_PAYMENTT_5030', entityName: 'Payment', filter: "", cobisRequestServerConfig: { pageSize :10 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'PaymentQueryForm' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
