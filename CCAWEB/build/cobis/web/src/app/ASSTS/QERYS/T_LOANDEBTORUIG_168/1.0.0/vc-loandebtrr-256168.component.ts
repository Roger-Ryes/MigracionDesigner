//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-loandebtrr-256168.model';
import { ViewState } from './model/vc-loandebtrr-256168-view-state';
import { VcLoandebtrr256168Custom } from './vc-loandebtrr-256168.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-loandebtrr-256168',
templateUrl: './vc-loandebtrr-256168.component.html'
})
export class VcLoandebtrr256168Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcLoandebtrr256168Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXEKG_185252 = this.metaData.viewState["QV_6719_92672"].columns.find((col: any) => col.field == 'customerID');
if (column_VA_TEXTINPUTBOXEKG_185252 != undefined) {
const tplCell_VA_TEXTINPUTBOXEKG_185252 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXEKG_185252');
column_VA_TEXTINPUTBOXEKG_185252.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXEKG_185252?.templateRef;
const tplEdit_VA_TEXTINPUTBOXEKG_185252 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXEKG_185252');
column_VA_TEXTINPUTBOXEKG_185252.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXEKG_185252?.templateRef;
}
const column_VA_TEXTINPUTBOXRPO_508252 = this.metaData.viewState["QV_6719_92672"].columns.find((col: any) => col.field == 'identityCard');
if (column_VA_TEXTINPUTBOXRPO_508252 != undefined) {
const tplCell_VA_TEXTINPUTBOXRPO_508252 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXRPO_508252');
column_VA_TEXTINPUTBOXRPO_508252.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXRPO_508252?.templateRef;
const tplEdit_VA_TEXTINPUTBOXRPO_508252 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXRPO_508252');
column_VA_TEXTINPUTBOXRPO_508252.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXRPO_508252?.templateRef;
}
const column_VA_TEXTINPUTBOXOOO_135252 = this.metaData.viewState["QV_6719_92672"].columns.find((col: any) => col.field == 'role');
if (column_VA_TEXTINPUTBOXOOO_135252 != undefined) {
const tplCell_VA_TEXTINPUTBOXOOO_135252 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXOOO_135252');
column_VA_TEXTINPUTBOXOOO_135252.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXOOO_135252?.templateRef;
const tplEdit_VA_TEXTINPUTBOXOOO_135252 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXOOO_135252');
column_VA_TEXTINPUTBOXOOO_135252.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXOOO_135252?.templateRef;
}
const column_VA_TEXTINPUTBOXBZS_504252 = this.metaData.viewState["QV_6719_92672"].columns.find((col: any) => col.field == 'customerName');
if (column_VA_TEXTINPUTBOXBZS_504252 != undefined) {
const tplCell_VA_TEXTINPUTBOXBZS_504252 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXBZS_504252');
column_VA_TEXTINPUTBOXBZS_504252.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXBZS_504252?.templateRef;
const tplEdit_VA_TEXTINPUTBOXBZS_504252 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXBZS_504252');
column_VA_TEXTINPUTBOXBZS_504252.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXBZS_504252?.templateRef;
}
const column_VA_TEXTINPUTBOXJET_751252 = this.metaData.viewState["QV_6719_92672"].columns.find((col: any) => col.field == 'phone');
if (column_VA_TEXTINPUTBOXJET_751252 != undefined) {
const tplCell_VA_TEXTINPUTBOXJET_751252 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXJET_751252');
column_VA_TEXTINPUTBOXJET_751252.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXJET_751252?.templateRef;
const tplEdit_VA_TEXTINPUTBOXJET_751252 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXJET_751252');
column_VA_TEXTINPUTBOXJET_751252.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXJET_751252?.templateRef;
}
const column_VA_TEXTINPUTBOXHKU_739252 = this.metaData.viewState["QV_6719_92672"].columns.find((col: any) => col.field == 'address');
if (column_VA_TEXTINPUTBOXHKU_739252 != undefined) {
const tplCell_VA_TEXTINPUTBOXHKU_739252 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXHKU_739252');
column_VA_TEXTINPUTBOXHKU_739252.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXHKU_739252?.templateRef;
const tplEdit_VA_TEXTINPUTBOXHKU_739252 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXHKU_739252');
column_VA_TEXTINPUTBOXHKU_739252.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXHKU_739252?.templateRef;
}
const column_VA_TEXTINPUTBOXXKU_150252 = this.metaData.viewState["QV_6719_92672"].columns.find((col: any) => col.field == 'centralCollection');
if (column_VA_TEXTINPUTBOXXKU_150252 != undefined) {
const tplCell_VA_TEXTINPUTBOXXKU_150252 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXXKU_150252');
column_VA_TEXTINPUTBOXXKU_150252.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXXKU_150252?.templateRef;
const tplEdit_VA_TEXTINPUTBOXXKU_150252 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXXKU_150252');
column_VA_TEXTINPUTBOXXKU_150252.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXXKU_150252?.templateRef;
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
LoanDebtor: viewState.T_LOANDEBTORUIG_168.controls.LoanDebtor as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'QERYS', taskId: 'T_LOANDEBTORUIG_168', taskVersion: '1.0.0', vcId: 'VC_LOANDEBTRR_256168', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(false, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/QERYS/T_LOANDEBTORUIG_168', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_6719_92672', { queryId: 'Q_LOANDEBB_6719', entityName: 'LoanDebtor', filter: "", cobisRequestServerConfig: { pageSize :10 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'QueryLoanDebtorForm' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
