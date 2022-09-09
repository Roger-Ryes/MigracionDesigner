//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-onerankgvl-254473.model';
import { ViewState } from './model/vc-onerankgvl-254473-view-state';
import { VcOnerankgvl254473Custom } from './vc-onerankgvl-254473.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-onerankgvl-254473',
templateUrl: './vc-onerankgvl-254473.component.html'
})
export class VcOnerankgvl254473Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcOnerankgvl254473Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXVHD_917961 = this.metaData.viewState["QV_SK42_AAN67"].columns.find((col: any) => col.field == 'sequential');
if (column_VA_TEXTINPUTBOXVHD_917961 != undefined) {
const tplCell_VA_TEXTINPUTBOXVHD_917961 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXVHD_917961');
column_VA_TEXTINPUTBOXVHD_917961.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXVHD_917961?.templateRef;
const tplEdit_VA_TEXTINPUTBOXVHD_917961 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXVHD_917961');
column_VA_TEXTINPUTBOXVHD_917961.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXVHD_917961?.templateRef;
}
const column_VA_TEXTINPUTBOXZMN_916961 = this.metaData.viewState["QV_SK42_AAN67"].columns.find((col: any) => col.field == 'minValue');
if (column_VA_TEXTINPUTBOXZMN_916961 != undefined) {
const tplCell_VA_TEXTINPUTBOXZMN_916961 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXZMN_916961');
column_VA_TEXTINPUTBOXZMN_916961.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXZMN_916961?.templateRef;
const tplEdit_VA_TEXTINPUTBOXZMN_916961 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXZMN_916961');
column_VA_TEXTINPUTBOXZMN_916961.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXZMN_916961?.templateRef;
}
const column_VA_TEXTINPUTBOXARB_656961 = this.metaData.viewState["QV_SK42_AAN67"].columns.find((col: any) => col.field == 'maxValue');
if (column_VA_TEXTINPUTBOXARB_656961 != undefined) {
const tplCell_VA_TEXTINPUTBOXARB_656961 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXARB_656961');
column_VA_TEXTINPUTBOXARB_656961.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXARB_656961?.templateRef;
const tplEdit_VA_TEXTINPUTBOXARB_656961 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXARB_656961');
column_VA_TEXTINPUTBOXARB_656961.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXARB_656961?.templateRef;
}
const column_VA_TEXTINPUTBOXSMN_309961 = this.metaData.viewState["QV_SK42_AAN67"].columns.find((col: any) => col.field == 'rate');
if (column_VA_TEXTINPUTBOXSMN_309961 != undefined) {
const tplCell_VA_TEXTINPUTBOXSMN_309961 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXSMN_309961');
column_VA_TEXTINPUTBOXSMN_309961.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXSMN_309961?.templateRef;
const tplEdit_VA_TEXTINPUTBOXSMN_309961 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXSMN_309961');
column_VA_TEXTINPUTBOXSMN_309961.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXSMN_309961?.templateRef;
}
const column_VA_TEXTINPUTBOXQYX_438961 = this.metaData.viewState["QV_SK42_AAN67"].columns.find((col: any) => col.field == 'value');
if (column_VA_TEXTINPUTBOXQYX_438961 != undefined) {
const tplCell_VA_TEXTINPUTBOXQYX_438961 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXQYX_438961');
column_VA_TEXTINPUTBOXQYX_438961.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXQYX_438961?.templateRef;
const tplEdit_VA_TEXTINPUTBOXQYX_438961 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXQYX_438961');
column_VA_TEXTINPUTBOXQYX_438961.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXQYX_438961?.templateRef;
}
const column_VA_DATEFIELDWSQSCW_492961 = this.metaData.viewState["QV_SK42_AAN67"].columns.find((col: any) => col.field == 'date');
if (column_VA_DATEFIELDWSQSCW_492961 != undefined) {
const tplCell_VA_DATEFIELDWSQSCW_492961 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DATEFIELDWSQSCW_492961');
column_VA_DATEFIELDWSQSCW_492961.properties.cellTemplate = tplCell_VA_DATEFIELDWSQSCW_492961?.templateRef;
const tplEdit_VA_DATEFIELDWSQSCW_492961 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DATEFIELDWSQSCW_492961');
column_VA_DATEFIELDWSQSCW_492961.properties.editTemplate = tplEdit_VA_DATEFIELDWSQSCW_492961?.templateRef;
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
OneRankFilter: viewState.T_ASSTSGICMCPEO_473.controls.OneRankFilter as FormGroup ,
OneRankList: viewState.T_ASSTSGICMCPEO_473.controls.OneRankList as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'MNTNN', taskId: 'T_ASSTSGICMCPEO_473', taskVersion: '1.0.0', vcId: 'VC_ONERANKGVL_254473', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/MNTNN/T_ASSTSGICMCPEO_473', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_SK42_AAN67', { queryId: 'Q_ONERIAAL_UR42', entityName: 'OneRankList', filter: "", cobisRequestServerConfig: { pageSize :5 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'OneRankForm' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
