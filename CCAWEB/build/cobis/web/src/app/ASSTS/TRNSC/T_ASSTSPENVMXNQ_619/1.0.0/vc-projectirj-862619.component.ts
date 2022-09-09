//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerWithHeaderComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-projectirj-862619.model';
import { ViewState } from './model/vc-projectirj-862619-view-state';
import { VcProjectirj862619Custom } from './vc-projectirj-862619.custom';
import { header_HD_HEADERLSO_968 as headerJsonFile } from '../../../patterns/header_HD_HEADERLSO_968';
import { Actions_HD_HEADERLSO_968} from '../../../patterns/Actions_HD_HEADERLSO_968';
import { HD_HEADERLSO_968_Custom } from '../../../patterns/HD_HEADERLSO_968.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-projectirj-862619',
templateUrl: './vc-projectirj-862619.component.html'
})
export class VcProjectirj862619Component extends CobisDesignerWithHeaderComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcProjectirj862619Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute, new HD_HEADERLSO_968_Custom(), headerJsonFile, new Actions_HD_HEADERLSO_968());
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXIRV_798798 = this.metaData.viewState["QV_EB77_IIB88"].columns.find((col: any) => col.field == 'dividend');
if (column_VA_TEXTINPUTBOXIRV_798798 != undefined) {
const tplCell_VA_TEXTINPUTBOXIRV_798798 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXIRV_798798');
column_VA_TEXTINPUTBOXIRV_798798.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXIRV_798798?.templateRef;
const tplEdit_VA_TEXTINPUTBOXIRV_798798 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXIRV_798798');
column_VA_TEXTINPUTBOXIRV_798798.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXIRV_798798?.templateRef;
}
const column_VA_TEXTINPUTBOXJOX_193798 = this.metaData.viewState["QV_EB77_IIB88"].columns.find((col: any) => col.field == 'saleDate');
if (column_VA_TEXTINPUTBOXJOX_193798 != undefined) {
const tplCell_VA_TEXTINPUTBOXJOX_193798 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXJOX_193798');
column_VA_TEXTINPUTBOXJOX_193798.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXJOX_193798?.templateRef;
const tplEdit_VA_TEXTINPUTBOXJOX_193798 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXJOX_193798');
column_VA_TEXTINPUTBOXJOX_193798.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXJOX_193798?.templateRef;
}
const column_VA_TEXTINPUTBOXVFQ_438798 = this.metaData.viewState["QV_EB77_IIB88"].columns.find((col: any) => col.field == 'quotaDay');
if (column_VA_TEXTINPUTBOXVFQ_438798 != undefined) {
const tplCell_VA_TEXTINPUTBOXVFQ_438798 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXVFQ_438798');
column_VA_TEXTINPUTBOXVFQ_438798.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXVFQ_438798?.templateRef;
const tplEdit_VA_TEXTINPUTBOXVFQ_438798 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXVFQ_438798');
column_VA_TEXTINPUTBOXVFQ_438798.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXVFQ_438798?.templateRef;
}
const column_VA_TEXTINPUTBOXEMA_362798 = this.metaData.viewState["QV_EB77_IIB88"].columns.find((col: any) => col.field == 'balance');
if (column_VA_TEXTINPUTBOXEMA_362798 != undefined) {
const tplCell_VA_TEXTINPUTBOXEMA_362798 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXEMA_362798');
column_VA_TEXTINPUTBOXEMA_362798.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXEMA_362798?.templateRef;
const tplEdit_VA_TEXTINPUTBOXEMA_362798 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXEMA_362798');
column_VA_TEXTINPUTBOXEMA_362798.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXEMA_362798?.templateRef;
}
const column_VA_TEXTINPUTBOXULR_853798 = this.metaData.viewState["QV_EB77_IIB88"].columns.find((col: any) => col.field == 'items1');
if (column_VA_TEXTINPUTBOXULR_853798 != undefined) {
const tplCell_VA_TEXTINPUTBOXULR_853798 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXULR_853798');
column_VA_TEXTINPUTBOXULR_853798.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXULR_853798?.templateRef;
const tplEdit_VA_TEXTINPUTBOXULR_853798 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXULR_853798');
column_VA_TEXTINPUTBOXULR_853798.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXULR_853798?.templateRef;
}
const column_VA_TEXTINPUTBOXPNQ_361798 = this.metaData.viewState["QV_EB77_IIB88"].columns.find((col: any) => col.field == 'items2');
if (column_VA_TEXTINPUTBOXPNQ_361798 != undefined) {
const tplCell_VA_TEXTINPUTBOXPNQ_361798 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXPNQ_361798');
column_VA_TEXTINPUTBOXPNQ_361798.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXPNQ_361798?.templateRef;
const tplEdit_VA_TEXTINPUTBOXPNQ_361798 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXPNQ_361798');
column_VA_TEXTINPUTBOXPNQ_361798.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXPNQ_361798?.templateRef;
}
const column_VA_TEXTINPUTBOXSDM_686798 = this.metaData.viewState["QV_EB77_IIB88"].columns.find((col: any) => col.field == 'items3');
if (column_VA_TEXTINPUTBOXSDM_686798 != undefined) {
const tplCell_VA_TEXTINPUTBOXSDM_686798 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXSDM_686798');
column_VA_TEXTINPUTBOXSDM_686798.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXSDM_686798?.templateRef;
const tplEdit_VA_TEXTINPUTBOXSDM_686798 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXSDM_686798');
column_VA_TEXTINPUTBOXSDM_686798.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXSDM_686798?.templateRef;
}
const column_VA_TEXTINPUTBOXBRK_956798 = this.metaData.viewState["QV_EB77_IIB88"].columns.find((col: any) => col.field == 'items4');
if (column_VA_TEXTINPUTBOXBRK_956798 != undefined) {
const tplCell_VA_TEXTINPUTBOXBRK_956798 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXBRK_956798');
column_VA_TEXTINPUTBOXBRK_956798.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXBRK_956798?.templateRef;
const tplEdit_VA_TEXTINPUTBOXBRK_956798 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXBRK_956798');
column_VA_TEXTINPUTBOXBRK_956798.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXBRK_956798?.templateRef;
}
const column_VA_TEXTINPUTBOXMFC_126798 = this.metaData.viewState["QV_EB77_IIB88"].columns.find((col: any) => col.field == 'items5');
if (column_VA_TEXTINPUTBOXMFC_126798 != undefined) {
const tplCell_VA_TEXTINPUTBOXMFC_126798 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXMFC_126798');
column_VA_TEXTINPUTBOXMFC_126798.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXMFC_126798?.templateRef;
const tplEdit_VA_TEXTINPUTBOXMFC_126798 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXMFC_126798');
column_VA_TEXTINPUTBOXMFC_126798.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXMFC_126798?.templateRef;
}
const column_VA_TEXTINPUTBOXXFA_745798 = this.metaData.viewState["QV_EB77_IIB88"].columns.find((col: any) => col.field == 'items6');
if (column_VA_TEXTINPUTBOXXFA_745798 != undefined) {
const tplCell_VA_TEXTINPUTBOXXFA_745798 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXXFA_745798');
column_VA_TEXTINPUTBOXXFA_745798.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXXFA_745798?.templateRef;
const tplEdit_VA_TEXTINPUTBOXXFA_745798 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXXFA_745798');
column_VA_TEXTINPUTBOXXFA_745798.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXXFA_745798?.templateRef;
}
const column_VA_TEXTINPUTBOXJHE_279798 = this.metaData.viewState["QV_EB77_IIB88"].columns.find((col: any) => col.field == 'items7');
if (column_VA_TEXTINPUTBOXJHE_279798 != undefined) {
const tplCell_VA_TEXTINPUTBOXJHE_279798 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXJHE_279798');
column_VA_TEXTINPUTBOXJHE_279798.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXJHE_279798?.templateRef;
const tplEdit_VA_TEXTINPUTBOXJHE_279798 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXJHE_279798');
column_VA_TEXTINPUTBOXJHE_279798.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXJHE_279798?.templateRef;
}
const column_VA_TEXTINPUTBOXMZY_199798 = this.metaData.viewState["QV_EB77_IIB88"].columns.find((col: any) => col.field == 'items8');
if (column_VA_TEXTINPUTBOXMZY_199798 != undefined) {
const tplCell_VA_TEXTINPUTBOXMZY_199798 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXMZY_199798');
column_VA_TEXTINPUTBOXMZY_199798.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXMZY_199798?.templateRef;
const tplEdit_VA_TEXTINPUTBOXMZY_199798 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXMZY_199798');
column_VA_TEXTINPUTBOXMZY_199798.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXMZY_199798?.templateRef;
}
const column_VA_TEXTINPUTBOXXFI_631798 = this.metaData.viewState["QV_EB77_IIB88"].columns.find((col: any) => col.field == 'items9');
if (column_VA_TEXTINPUTBOXXFI_631798 != undefined) {
const tplCell_VA_TEXTINPUTBOXXFI_631798 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXXFI_631798');
column_VA_TEXTINPUTBOXXFI_631798.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXXFI_631798?.templateRef;
const tplEdit_VA_TEXTINPUTBOXXFI_631798 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXXFI_631798');
column_VA_TEXTINPUTBOXXFI_631798.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXXFI_631798?.templateRef;
}
const column_VA_TEXTINPUTBOXUTO_178798 = this.metaData.viewState["QV_EB77_IIB88"].columns.find((col: any) => col.field == 'items10');
if (column_VA_TEXTINPUTBOXUTO_178798 != undefined) {
const tplCell_VA_TEXTINPUTBOXUTO_178798 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXUTO_178798');
column_VA_TEXTINPUTBOXUTO_178798.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXUTO_178798?.templateRef;
const tplEdit_VA_TEXTINPUTBOXUTO_178798 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXUTO_178798');
column_VA_TEXTINPUTBOXUTO_178798.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXUTO_178798?.templateRef;
}
const column_VA_TEXTINPUTBOXUGQ_329798 = this.metaData.viewState["QV_EB77_IIB88"].columns.find((col: any) => col.field == 'items11');
if (column_VA_TEXTINPUTBOXUGQ_329798 != undefined) {
const tplCell_VA_TEXTINPUTBOXUGQ_329798 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXUGQ_329798');
column_VA_TEXTINPUTBOXUGQ_329798.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXUGQ_329798?.templateRef;
const tplEdit_VA_TEXTINPUTBOXUGQ_329798 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXUGQ_329798');
column_VA_TEXTINPUTBOXUGQ_329798.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXUGQ_329798?.templateRef;
}
const column_VA_TEXTINPUTBOXRLU_443798 = this.metaData.viewState["QV_EB77_IIB88"].columns.find((col: any) => col.field == 'items12');
if (column_VA_TEXTINPUTBOXRLU_443798 != undefined) {
const tplCell_VA_TEXTINPUTBOXRLU_443798 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXRLU_443798');
column_VA_TEXTINPUTBOXRLU_443798.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXRLU_443798?.templateRef;
const tplEdit_VA_TEXTINPUTBOXRLU_443798 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXRLU_443798');
column_VA_TEXTINPUTBOXRLU_443798.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXRLU_443798?.templateRef;
}
const column_VA_TEXTINPUTBOXQYU_619798 = this.metaData.viewState["QV_EB77_IIB88"].columns.find((col: any) => col.field == 'items13');
if (column_VA_TEXTINPUTBOXQYU_619798 != undefined) {
const tplCell_VA_TEXTINPUTBOXQYU_619798 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXQYU_619798');
column_VA_TEXTINPUTBOXQYU_619798.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXQYU_619798?.templateRef;
const tplEdit_VA_TEXTINPUTBOXQYU_619798 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXQYU_619798');
column_VA_TEXTINPUTBOXQYU_619798.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXQYU_619798?.templateRef;
}
const column_VA_TEXTINPUTBOXJEN_944798 = this.metaData.viewState["QV_EB77_IIB88"].columns.find((col: any) => col.field == 'items14');
if (column_VA_TEXTINPUTBOXJEN_944798 != undefined) {
const tplCell_VA_TEXTINPUTBOXJEN_944798 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXJEN_944798');
column_VA_TEXTINPUTBOXJEN_944798.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXJEN_944798?.templateRef;
const tplEdit_VA_TEXTINPUTBOXJEN_944798 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXJEN_944798');
column_VA_TEXTINPUTBOXJEN_944798.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXJEN_944798?.templateRef;
}
const column_VA_TEXTINPUTBOXEED_699798 = this.metaData.viewState["QV_EB77_IIB88"].columns.find((col: any) => col.field == 'items15');
if (column_VA_TEXTINPUTBOXEED_699798 != undefined) {
const tplCell_VA_TEXTINPUTBOXEED_699798 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXEED_699798');
column_VA_TEXTINPUTBOXEED_699798.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXEED_699798?.templateRef;
const tplEdit_VA_TEXTINPUTBOXEED_699798 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXEED_699798');
column_VA_TEXTINPUTBOXEED_699798.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXEED_699798?.templateRef;
}
const column_VA_TEXTINPUTBOXOFN_496798 = this.metaData.viewState["QV_EB77_IIB88"].columns.find((col: any) => col.field == 'quota');
if (column_VA_TEXTINPUTBOXOFN_496798 != undefined) {
const tplCell_VA_TEXTINPUTBOXOFN_496798 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXOFN_496798');
column_VA_TEXTINPUTBOXOFN_496798.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXOFN_496798?.templateRef;
const tplEdit_VA_TEXTINPUTBOXOFN_496798 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXOFN_496798');
column_VA_TEXTINPUTBOXOFN_496798.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXOFN_496798?.templateRef;
}
const column_VA_TEXTINPUTBOXVFJ_525798 = this.metaData.viewState["QV_EB77_IIB88"].columns.find((col: any) => col.field == 'state');
if (column_VA_TEXTINPUTBOXVFJ_525798 != undefined) {
const tplCell_VA_TEXTINPUTBOXVFJ_525798 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXVFJ_525798');
column_VA_TEXTINPUTBOXVFJ_525798.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXVFJ_525798?.templateRef;
const tplEdit_VA_TEXTINPUTBOXVFJ_525798 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXVFJ_525798');
column_VA_TEXTINPUTBOXVFJ_525798.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXVFJ_525798?.templateRef;
}
const column_VA_TEXTINPUTBOXHQO_214798 = this.metaData.viewState["QV_EB77_IIB88"].columns.find((col: any) => col.field == 'porroga');
if (column_VA_TEXTINPUTBOXHQO_214798 != undefined) {
const tplCell_VA_TEXTINPUTBOXHQO_214798 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXHQO_214798');
column_VA_TEXTINPUTBOXHQO_214798.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXHQO_214798?.templateRef;
const tplEdit_VA_TEXTINPUTBOXHQO_214798 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXHQO_214798');
column_VA_TEXTINPUTBOXHQO_214798.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXHQO_214798?.templateRef;
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
SearchProjectionReadjustement: viewState.T_ASSTSPENVMXNQ_619.controls.SearchProjectionReadjustement as FormGroup ,
ListProjectionReadjustement: viewState.T_ASSTSPENVMXNQ_619.controls.ListProjectionReadjustement as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'TRNSC', taskId: 'T_ASSTSPENVMXNQ_619', taskVersion: '1.0.0', vcId: 'VC_PROJECTIRJ_862619', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/TRNSC/T_ASSTSPENVMXNQ_619', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_EB77_IIB88', { queryId: 'Q_LISTCEEE_FJ77', entityName: 'ListProjectionReadjustement', filter: "", cobisRequestServerConfig: { pageSize :12 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'ASSTS.LBL_ASSTS_PROYECCIN_27776' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params, true);
});
super.inicializar();
};
}
