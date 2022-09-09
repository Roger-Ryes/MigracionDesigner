//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-detailtrsn-444431.model';
import { ViewState } from './model/vc-detailtrsn-444431-view-state';
import { VcDetailtrsn444431Custom } from './vc-detailtrsn-444431.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-detailtrsn-444431',
templateUrl: './vc-detailtrsn-444431.component.html'
})
export class VcDetailtrsn444431Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcDetailtrsn444431Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXHDH_459352 = this.metaData.viewState["QV_GS51_LPN26"].columns.find((col: any) => col.field == 'dividend');
if (column_VA_TEXTINPUTBOXHDH_459352 != undefined) {
const tplCell_VA_TEXTINPUTBOXHDH_459352 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXHDH_459352');
column_VA_TEXTINPUTBOXHDH_459352.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXHDH_459352?.templateRef;
const tplEdit_VA_TEXTINPUTBOXHDH_459352 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXHDH_459352');
column_VA_TEXTINPUTBOXHDH_459352.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXHDH_459352?.templateRef;
}
const column_VA_TEXTINPUTBOXYCY_184352 = this.metaData.viewState["QV_GS51_LPN26"].columns.find((col: any) => col.field == 'entry');
if (column_VA_TEXTINPUTBOXYCY_184352 != undefined) {
const tplCell_VA_TEXTINPUTBOXYCY_184352 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXYCY_184352');
column_VA_TEXTINPUTBOXYCY_184352.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXYCY_184352?.templateRef;
const tplEdit_VA_TEXTINPUTBOXYCY_184352 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXYCY_184352');
column_VA_TEXTINPUTBOXYCY_184352.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXYCY_184352?.templateRef;
}
const column_VA_TEXTINPUTBOXGNY_317352 = this.metaData.viewState["QV_GS51_LPN26"].columns.find((col: any) => col.field == 'state');
if (column_VA_TEXTINPUTBOXGNY_317352 != undefined) {
const tplCell_VA_TEXTINPUTBOXGNY_317352 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXGNY_317352');
column_VA_TEXTINPUTBOXGNY_317352.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXGNY_317352?.templateRef;
const tplEdit_VA_TEXTINPUTBOXGNY_317352 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXGNY_317352');
column_VA_TEXTINPUTBOXGNY_317352.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXGNY_317352?.templateRef;
}
const column_VA_TEXTINPUTBOXLBX_392352 = this.metaData.viewState["QV_GS51_LPN26"].columns.find((col: any) => col.field == 'money');
if (column_VA_TEXTINPUTBOXLBX_392352 != undefined) {
const tplCell_VA_TEXTINPUTBOXLBX_392352 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXLBX_392352');
column_VA_TEXTINPUTBOXLBX_392352.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXLBX_392352?.templateRef;
const tplEdit_VA_TEXTINPUTBOXLBX_392352 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXLBX_392352');
column_VA_TEXTINPUTBOXLBX_392352.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXLBX_392352?.templateRef;
}
const column_VA_TEXTINPUTBOXOYL_188352 = this.metaData.viewState["QV_GS51_LPN26"].columns.find((col: any) => col.field == 'amount');
if (column_VA_TEXTINPUTBOXOYL_188352 != undefined) {
const tplCell_VA_TEXTINPUTBOXOYL_188352 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXOYL_188352');
column_VA_TEXTINPUTBOXOYL_188352.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXOYL_188352?.templateRef;
const tplEdit_VA_TEXTINPUTBOXOYL_188352 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXOYL_188352');
column_VA_TEXTINPUTBOXOYL_188352.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXOYL_188352?.templateRef;
}
const column_VA_TEXTINPUTBOXKPQ_191352 = this.metaData.viewState["QV_GS51_LPN26"].columns.find((col: any) => col.field == 'amountMN');
if (column_VA_TEXTINPUTBOXKPQ_191352 != undefined) {
const tplCell_VA_TEXTINPUTBOXKPQ_191352 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXKPQ_191352');
column_VA_TEXTINPUTBOXKPQ_191352.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXKPQ_191352?.templateRef;
const tplEdit_VA_TEXTINPUTBOXKPQ_191352 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXKPQ_191352');
column_VA_TEXTINPUTBOXKPQ_191352.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXKPQ_191352?.templateRef;
}
const column_VA_TEXTINPUTBOXCDZ_127352 = this.metaData.viewState["QV_GS51_LPN26"].columns.find((col: any) => col.field == 'codValor');
if (column_VA_TEXTINPUTBOXCDZ_127352 != undefined) {
const tplCell_VA_TEXTINPUTBOXCDZ_127352 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXCDZ_127352');
column_VA_TEXTINPUTBOXCDZ_127352.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXCDZ_127352?.templateRef;
const tplEdit_VA_TEXTINPUTBOXCDZ_127352 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXCDZ_127352');
column_VA_TEXTINPUTBOXCDZ_127352.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXCDZ_127352?.templateRef;
}
const column_VA_TEXTINPUTBOXFAU_872352 = this.metaData.viewState["QV_GS51_LPN26"].columns.find((col: any) => col.field == 'affectation');
if (column_VA_TEXTINPUTBOXFAU_872352 != undefined) {
const tplCell_VA_TEXTINPUTBOXFAU_872352 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXFAU_872352');
column_VA_TEXTINPUTBOXFAU_872352.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXFAU_872352?.templateRef;
const tplEdit_VA_TEXTINPUTBOXFAU_872352 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXFAU_872352');
column_VA_TEXTINPUTBOXFAU_872352.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXFAU_872352?.templateRef;
}
const column_VA_TEXTINPUTBOXRGA_997352 = this.metaData.viewState["QV_GS51_LPN26"].columns.find((col: any) => col.field == 'account');
if (column_VA_TEXTINPUTBOXRGA_997352 != undefined) {
const tplCell_VA_TEXTINPUTBOXRGA_997352 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXRGA_997352');
column_VA_TEXTINPUTBOXRGA_997352.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXRGA_997352?.templateRef;
const tplEdit_VA_TEXTINPUTBOXRGA_997352 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXRGA_997352');
column_VA_TEXTINPUTBOXRGA_997352.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXRGA_997352?.templateRef;
}
const column_VA_TEXTINPUTBOXEDP_822352 = this.metaData.viewState["QV_GS51_LPN26"].columns.find((col: any) => col.field == 'beneficiary');
if (column_VA_TEXTINPUTBOXEDP_822352 != undefined) {
const tplCell_VA_TEXTINPUTBOXEDP_822352 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXEDP_822352');
column_VA_TEXTINPUTBOXEDP_822352.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXEDP_822352?.templateRef;
const tplEdit_VA_TEXTINPUTBOXEDP_822352 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXEDP_822352');
column_VA_TEXTINPUTBOXEDP_822352.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXEDP_822352?.templateRef;
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
DetailTransactionQuery: viewState.T_ASSTSECRXYFPY_431.controls.DetailTransactionQuery as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'QERYS', taskId: 'T_ASSTSECRXYFPY_431', taskVersion: '1.0.0', vcId: 'VC_DETAILTRSN_444431', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(false, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/QERYS/T_ASSTSECRXYFPY_431', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_GS51_LPN26', { queryId: 'Q_DETARTNC_LQ51', entityName: 'DetailTransactionQuery', filter: "", cobisRequestServerConfig: { pageSize :10 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'ASSTS.LBL_ASSTS_DETALLEIT_38069' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
