//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-ratesvlywt-596186.model';
import { ViewState } from './model/vc-ratesvlywt-596186-view-state';
import { VcRatesvlywt596186Custom } from './vc-ratesvlywt-596186.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-ratesvlywt-596186',
templateUrl: './vc-ratesvlywt-596186.component.html'
})
export class VcRatesvlywt596186Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcRatesvlywt596186Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXVAQ_545660 = this.metaData.viewState["QV_7625_68514"].columns.find((col: any) => col.field == 'sequential');
if (column_VA_TEXTINPUTBOXVAQ_545660 != undefined) {
const tplCell_VA_TEXTINPUTBOXVAQ_545660 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXVAQ_545660');
column_VA_TEXTINPUTBOXVAQ_545660.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXVAQ_545660?.templateRef;
const tplEdit_VA_TEXTINPUTBOXVAQ_545660 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXVAQ_545660');
column_VA_TEXTINPUTBOXVAQ_545660.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXVAQ_545660?.templateRef;
}
const column_VA_TEXTINPUTBOXKWQ_686660 = this.metaData.viewState["QV_7625_68514"].columns.find((col: any) => col.field == 'updatedOn');
if (column_VA_TEXTINPUTBOXKWQ_686660 != undefined) {
const tplCell_VA_TEXTINPUTBOXKWQ_686660 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXKWQ_686660');
column_VA_TEXTINPUTBOXKWQ_686660.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXKWQ_686660?.templateRef;
const tplEdit_VA_TEXTINPUTBOXKWQ_686660 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXKWQ_686660');
column_VA_TEXTINPUTBOXKWQ_686660.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXKWQ_686660?.templateRef;
}
const column_VA_TEXTINPUTBOXGAR_184660 = this.metaData.viewState["QV_7625_68514"].columns.find((col: any) => col.field == 'quota');
if (column_VA_TEXTINPUTBOXGAR_184660 != undefined) {
const tplCell_VA_TEXTINPUTBOXGAR_184660 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXGAR_184660');
column_VA_TEXTINPUTBOXGAR_184660.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXGAR_184660?.templateRef;
const tplEdit_VA_TEXTINPUTBOXGAR_184660 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXGAR_184660');
column_VA_TEXTINPUTBOXGAR_184660.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXGAR_184660?.templateRef;
}
const column_VA_TEXTINPUTBOXRSO_292660 = this.metaData.viewState["QV_7625_68514"].columns.find((col: any) => col.field == 'item');
if (column_VA_TEXTINPUTBOXRSO_292660 != undefined) {
const tplCell_VA_TEXTINPUTBOXRSO_292660 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXRSO_292660');
column_VA_TEXTINPUTBOXRSO_292660.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXRSO_292660?.templateRef;
const tplEdit_VA_TEXTINPUTBOXRSO_292660 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXRSO_292660');
column_VA_TEXTINPUTBOXRSO_292660.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXRSO_292660?.templateRef;
}
const column_VA_TEXTINPUTBOXFFC_765660 = this.metaData.viewState["QV_7625_68514"].columns.find((col: any) => col.field == 'valueToApply');
if (column_VA_TEXTINPUTBOXFFC_765660 != undefined) {
const tplCell_VA_TEXTINPUTBOXFFC_765660 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXFFC_765660');
column_VA_TEXTINPUTBOXFFC_765660.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXFFC_765660?.templateRef;
const tplEdit_VA_TEXTINPUTBOXFFC_765660 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXFFC_765660');
column_VA_TEXTINPUTBOXFFC_765660.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXFFC_765660?.templateRef;
}
const column_VA_TEXTINPUTBOXYGA_388660 = this.metaData.viewState["QV_7625_68514"].columns.find((col: any) => col.field == 'signToApply');
if (column_VA_TEXTINPUTBOXYGA_388660 != undefined) {
const tplCell_VA_TEXTINPUTBOXYGA_388660 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXYGA_388660');
column_VA_TEXTINPUTBOXYGA_388660.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXYGA_388660?.templateRef;
const tplEdit_VA_TEXTINPUTBOXYGA_388660 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXYGA_388660');
column_VA_TEXTINPUTBOXYGA_388660.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXYGA_388660?.templateRef;
}
const column_VA_TEXTINPUTBOXLAZ_256660 = this.metaData.viewState["QV_7625_68514"].columns.find((col: any) => col.field == 'spreadApply');
if (column_VA_TEXTINPUTBOXLAZ_256660 != undefined) {
const tplCell_VA_TEXTINPUTBOXLAZ_256660 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXLAZ_256660');
column_VA_TEXTINPUTBOXLAZ_256660.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXLAZ_256660?.templateRef;
const tplEdit_VA_TEXTINPUTBOXLAZ_256660 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXLAZ_256660');
column_VA_TEXTINPUTBOXLAZ_256660.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXLAZ_256660?.templateRef;
}
const column_VA_TEXTINPUTBOXHTZ_428660 = this.metaData.viewState["QV_7625_68514"].columns.find((col: any) => col.field == 'currentRate');
if (column_VA_TEXTINPUTBOXHTZ_428660 != undefined) {
const tplCell_VA_TEXTINPUTBOXHTZ_428660 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXHTZ_428660');
column_VA_TEXTINPUTBOXHTZ_428660.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXHTZ_428660?.templateRef;
const tplEdit_VA_TEXTINPUTBOXHTZ_428660 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXHTZ_428660');
column_VA_TEXTINPUTBOXHTZ_428660.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXHTZ_428660?.templateRef;
}
const column_VA_TEXTINPUTBOXYKA_140660 = this.metaData.viewState["QV_7625_68514"].columns.find((col: any) => col.field == 'anualEffectiveRate');
if (column_VA_TEXTINPUTBOXYKA_140660 != undefined) {
const tplCell_VA_TEXTINPUTBOXYKA_140660 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXYKA_140660');
column_VA_TEXTINPUTBOXYKA_140660.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXYKA_140660?.templateRef;
const tplEdit_VA_TEXTINPUTBOXYKA_140660 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXYKA_140660');
column_VA_TEXTINPUTBOXYKA_140660.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXYKA_140660?.templateRef;
}
const column_VA_TEXTINPUTBOXQOD_800660 = this.metaData.viewState["QV_7625_68514"].columns.find((col: any) => col.field == 'dateReferenceRate');
if (column_VA_TEXTINPUTBOXQOD_800660 != undefined) {
const tplCell_VA_TEXTINPUTBOXQOD_800660 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXQOD_800660');
column_VA_TEXTINPUTBOXQOD_800660.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXQOD_800660?.templateRef;
const tplEdit_VA_TEXTINPUTBOXQOD_800660 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXQOD_800660');
column_VA_TEXTINPUTBOXQOD_800660.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXQOD_800660?.templateRef;
}
const column_VA_TEXTINPUTBOXUWM_511660 = this.metaData.viewState["QV_7625_68514"].columns.find((col: any) => col.field == 'referentialRate');
if (column_VA_TEXTINPUTBOXUWM_511660 != undefined) {
const tplCell_VA_TEXTINPUTBOXUWM_511660 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXUWM_511660');
column_VA_TEXTINPUTBOXUWM_511660.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXUWM_511660?.templateRef;
const tplEdit_VA_TEXTINPUTBOXUWM_511660 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXUWM_511660');
column_VA_TEXTINPUTBOXUWM_511660.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXUWM_511660?.templateRef;
}
const column_VA_TEXTINPUTBOXMSZ_323660 = this.metaData.viewState["QV_7625_68514"].columns.find((col: any) => col.field == 'valueReferenceRate');
if (column_VA_TEXTINPUTBOXMSZ_323660 != undefined) {
const tplCell_VA_TEXTINPUTBOXMSZ_323660 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXMSZ_323660');
column_VA_TEXTINPUTBOXMSZ_323660.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXMSZ_323660?.templateRef;
const tplEdit_VA_TEXTINPUTBOXMSZ_323660 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXMSZ_323660');
column_VA_TEXTINPUTBOXMSZ_323660.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXMSZ_323660?.templateRef;
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
LoanRates: viewState.T_RATESPTSITVKK_186.controls.LoanRates as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'QERYS', taskId: 'T_RATESPTSITVKK_186', taskVersion: '1.0.0', vcId: 'VC_RATESVLYWT_596186', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(false, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/QERYS/T_RATESPTSITVKK_186', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_7625_68514', { queryId: 'Q_LOANRATE_7625', entityName: 'LoanRates', filter: "", cobisRequestServerConfig: { pageSize :10 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'QueryRatesForm' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
