//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-refinancle-514857.model';
import { ViewState } from './model/vc-refinancle-514857-view-state';
import { VcRefinancle514857Custom } from './vc-refinancle-514857.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-refinancle-514857',
templateUrl: './vc-refinancle-514857.component.html'
})
export class VcRefinancle514857Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcRefinancle514857Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXICW_312587 = this.metaData.viewState["QV_1949_60600"].columns.find((col: any) => col.field == 'transactionID');
if (column_VA_TEXTINPUTBOXICW_312587 != undefined) {
const tplCell_VA_TEXTINPUTBOXICW_312587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXICW_312587');
column_VA_TEXTINPUTBOXICW_312587.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXICW_312587?.templateRef;
const tplEdit_VA_TEXTINPUTBOXICW_312587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXICW_312587');
column_VA_TEXTINPUTBOXICW_312587.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXICW_312587?.templateRef;
}
const column_VA_TEXTINPUTBOXWTS_867587 = this.metaData.viewState["QV_1949_60600"].columns.find((col: any) => col.field == 'type');
if (column_VA_TEXTINPUTBOXWTS_867587 != undefined) {
const tplCell_VA_TEXTINPUTBOXWTS_867587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXWTS_867587');
column_VA_TEXTINPUTBOXWTS_867587.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXWTS_867587?.templateRef;
const tplEdit_VA_TEXTINPUTBOXWTS_867587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXWTS_867587');
column_VA_TEXTINPUTBOXWTS_867587.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXWTS_867587?.templateRef;
}
const column_VA_TEXTINPUTBOXLUN_357587 = this.metaData.viewState["QV_1949_60600"].columns.find((col: any) => col.field == 'loan');
if (column_VA_TEXTINPUTBOXLUN_357587 != undefined) {
const tplCell_VA_TEXTINPUTBOXLUN_357587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXLUN_357587');
column_VA_TEXTINPUTBOXLUN_357587.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXLUN_357587?.templateRef;
const tplEdit_VA_TEXTINPUTBOXLUN_357587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXLUN_357587');
column_VA_TEXTINPUTBOXLUN_357587.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXLUN_357587?.templateRef;
}
const column_VA_TEXTINPUTBOXDPQ_833587 = this.metaData.viewState["QV_1949_60600"].columns.find((col: any) => col.field == 'initialAmount');
if (column_VA_TEXTINPUTBOXDPQ_833587 != undefined) {
const tplCell_VA_TEXTINPUTBOXDPQ_833587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXDPQ_833587');
column_VA_TEXTINPUTBOXDPQ_833587.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXDPQ_833587?.templateRef;
const tplEdit_VA_TEXTINPUTBOXDPQ_833587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXDPQ_833587');
column_VA_TEXTINPUTBOXDPQ_833587.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXDPQ_833587?.templateRef;
}
const column_VA_TEXTINPUTBOXFFS_866587 = this.metaData.viewState["QV_1949_60600"].columns.find((col: any) => col.field == 'totalToRefinance');
if (column_VA_TEXTINPUTBOXFFS_866587 != undefined) {
const tplCell_VA_TEXTINPUTBOXFFS_866587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXFFS_866587');
column_VA_TEXTINPUTBOXFFS_866587.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXFFS_866587?.templateRef;
const tplEdit_VA_TEXTINPUTBOXFFS_866587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXFFS_866587');
column_VA_TEXTINPUTBOXFFS_866587.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXFFS_866587?.templateRef;
}
const column_VA_TEXTINPUTBOXJOJ_919587 = this.metaData.viewState["QV_1949_60600"].columns.find((col: any) => col.field == 'line');
if (column_VA_TEXTINPUTBOXJOJ_919587 != undefined) {
const tplCell_VA_TEXTINPUTBOXJOJ_919587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXJOJ_919587');
column_VA_TEXTINPUTBOXJOJ_919587.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXJOJ_919587?.templateRef;
const tplEdit_VA_TEXTINPUTBOXJOJ_919587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXJOJ_919587');
column_VA_TEXTINPUTBOXJOJ_919587.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXJOJ_919587?.templateRef;
}
const column_VA_TEXTINPUTBOXOYD_123587 = this.metaData.viewState["QV_1949_60600"].columns.find((col: any) => col.field == 'officialID');
if (column_VA_TEXTINPUTBOXOYD_123587 != undefined) {
const tplCell_VA_TEXTINPUTBOXOYD_123587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXOYD_123587');
column_VA_TEXTINPUTBOXOYD_123587.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXOYD_123587?.templateRef;
const tplEdit_VA_TEXTINPUTBOXOYD_123587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXOYD_123587');
column_VA_TEXTINPUTBOXOYD_123587.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXOYD_123587?.templateRef;
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
RefinanceLoans: viewState.T_REFINANCEDALA_857.controls.RefinanceLoans as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'QERYS', taskId: 'T_REFINANCEDALA_857', taskVersion: '1.0.0', vcId: 'VC_REFINANCLE_514857', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(false, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/QERYS/T_REFINANCEDALA_857', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_1949_60600', { queryId: 'Q_REFINAOS_1949', entityName: 'RefinanceLoans', filter: "", cobisRequestServerConfig: { pageSize :10 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'RefinancedLoansForm' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
