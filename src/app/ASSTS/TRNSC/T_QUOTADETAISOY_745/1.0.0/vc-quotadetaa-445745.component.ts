//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-quotadetaa-445745.model';
import { ViewState } from './model/vc-quotadetaa-445745-view-state';
import { VcQuotadetaa445745Custom } from './vc-quotadetaa-445745.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-quotadetaa-445745',
templateUrl: './vc-quotadetaa-445745.component.html'
})
export class VcQuotadetaa445745Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcQuotadetaa445745Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXXRD_924925 = this.metaData.viewState["QV_4705_99765"].columns.find((col: any) => col.field == 'numQuote');
if (column_VA_TEXTINPUTBOXXRD_924925 != undefined) {
const tplCell_VA_TEXTINPUTBOXXRD_924925 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXXRD_924925');
column_VA_TEXTINPUTBOXXRD_924925.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXXRD_924925?.templateRef;
const tplEdit_VA_TEXTINPUTBOXXRD_924925 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXXRD_924925');
column_VA_TEXTINPUTBOXXRD_924925.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXXRD_924925?.templateRef;
}
const column_VA_DATEFIELDKHRUFK_991925 = this.metaData.viewState["QV_4705_99765"].columns.find((col: any) => col.field == 'expired');
if (column_VA_DATEFIELDKHRUFK_991925 != undefined) {
const tplCell_VA_DATEFIELDKHRUFK_991925 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DATEFIELDKHRUFK_991925');
column_VA_DATEFIELDKHRUFK_991925.properties.cellTemplate = tplCell_VA_DATEFIELDKHRUFK_991925?.templateRef;
const tplEdit_VA_DATEFIELDKHRUFK_991925 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DATEFIELDKHRUFK_991925');
column_VA_DATEFIELDKHRUFK_991925.properties.editTemplate = tplEdit_VA_DATEFIELDKHRUFK_991925?.templateRef;
}
const column_VA_TEXTINPUTBOXGDJ_450925 = this.metaData.viewState["QV_4705_99765"].columns.find((col: any) => col.field == 'payment');
if (column_VA_TEXTINPUTBOXGDJ_450925 != undefined) {
const tplCell_VA_TEXTINPUTBOXGDJ_450925 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXGDJ_450925');
column_VA_TEXTINPUTBOXGDJ_450925.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXGDJ_450925?.templateRef;
const tplEdit_VA_TEXTINPUTBOXGDJ_450925 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXGDJ_450925');
column_VA_TEXTINPUTBOXGDJ_450925.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXGDJ_450925?.templateRef;
}
const column_VA_CHECKBOXHEMRRGX_743925 = this.metaData.viewState["QV_4705_99765"].columns.find((col: any) => col.field == 'status');
if (column_VA_CHECKBOXHEMRRGX_743925 != undefined) {
const tplCell_VA_CHECKBOXHEMRRGX_743925 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_CHECKBOXHEMRRGX_743925');
column_VA_CHECKBOXHEMRRGX_743925.properties.cellTemplate = tplCell_VA_CHECKBOXHEMRRGX_743925?.templateRef;
const tplEdit_VA_CHECKBOXHEMRRGX_743925 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_CHECKBOXHEMRRGX_743925');
column_VA_CHECKBOXHEMRRGX_743925.properties.editTemplate = tplEdit_VA_CHECKBOXHEMRRGX_743925?.templateRef;
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
QuoteDetailPayment: viewState.T_QUOTADETAISOY_745.controls.QuoteDetailPayment as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'TRNSC', taskId: 'T_QUOTADETAISOY_745', taskVersion: '1.0.0', vcId: 'VC_QUOTADETAA_445745', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/TRNSC/T_QUOTADETAISOY_745', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_4705_99765', { queryId: 'Q_QUOTEDPM_4705', entityName: 'QuoteDetailPayment', filter: "", cobisRequestServerConfig: { pageSize :10 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'QuotaDetailPaymentsModal' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
