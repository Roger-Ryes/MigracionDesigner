//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-deferredit-242203.model';
import { ViewState } from './model/vc-deferredit-242203-view-state';
import { VcDeferredit242203Custom } from './vc-deferredit-242203.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-deferredit-242203',
templateUrl: './vc-deferredit-242203.component.html'
})
export class VcDeferredit242203Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcDeferredit242203Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXHPX_798268 = this.metaData.viewState["QV_JT23_FZW47"].columns.find((col: any) => col.field == 'dividend');
if (column_VA_TEXTINPUTBOXHPX_798268 != undefined) {
const tplCell_VA_TEXTINPUTBOXHPX_798268 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXHPX_798268');
column_VA_TEXTINPUTBOXHPX_798268.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXHPX_798268?.templateRef;
const tplEdit_VA_TEXTINPUTBOXHPX_798268 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXHPX_798268');
column_VA_TEXTINPUTBOXHPX_798268.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXHPX_798268?.templateRef;
}
const column_VA_TEXTINPUTBOXCBH_717268 = this.metaData.viewState["QV_JT23_FZW47"].columns.find((col: any) => col.field == 'items1');
if (column_VA_TEXTINPUTBOXCBH_717268 != undefined) {
const tplCell_VA_TEXTINPUTBOXCBH_717268 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXCBH_717268');
column_VA_TEXTINPUTBOXCBH_717268.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXCBH_717268?.templateRef;
const tplEdit_VA_TEXTINPUTBOXCBH_717268 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXCBH_717268');
column_VA_TEXTINPUTBOXCBH_717268.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXCBH_717268?.templateRef;
}
const column_VA_TEXTINPUTBOXXUQ_699268 = this.metaData.viewState["QV_JT23_FZW47"].columns.find((col: any) => col.field == 'items2');
if (column_VA_TEXTINPUTBOXXUQ_699268 != undefined) {
const tplCell_VA_TEXTINPUTBOXXUQ_699268 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXXUQ_699268');
column_VA_TEXTINPUTBOXXUQ_699268.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXXUQ_699268?.templateRef;
const tplEdit_VA_TEXTINPUTBOXXUQ_699268 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXXUQ_699268');
column_VA_TEXTINPUTBOXXUQ_699268.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXXUQ_699268?.templateRef;
}
const column_VA_TEXTINPUTBOXGJK_987268 = this.metaData.viewState["QV_JT23_FZW47"].columns.find((col: any) => col.field == 'items3');
if (column_VA_TEXTINPUTBOXGJK_987268 != undefined) {
const tplCell_VA_TEXTINPUTBOXGJK_987268 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXGJK_987268');
column_VA_TEXTINPUTBOXGJK_987268.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXGJK_987268?.templateRef;
const tplEdit_VA_TEXTINPUTBOXGJK_987268 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXGJK_987268');
column_VA_TEXTINPUTBOXGJK_987268.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXGJK_987268?.templateRef;
}
const column_VA_TEXTINPUTBOXLBK_475268 = this.metaData.viewState["QV_JT23_FZW47"].columns.find((col: any) => col.field == 'items4');
if (column_VA_TEXTINPUTBOXLBK_475268 != undefined) {
const tplCell_VA_TEXTINPUTBOXLBK_475268 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXLBK_475268');
column_VA_TEXTINPUTBOXLBK_475268.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXLBK_475268?.templateRef;
const tplEdit_VA_TEXTINPUTBOXLBK_475268 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXLBK_475268');
column_VA_TEXTINPUTBOXLBK_475268.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXLBK_475268?.templateRef;
}
const column_VA_TEXTINPUTBOXPZP_415268 = this.metaData.viewState["QV_JT23_FZW47"].columns.find((col: any) => col.field == 'items5');
if (column_VA_TEXTINPUTBOXPZP_415268 != undefined) {
const tplCell_VA_TEXTINPUTBOXPZP_415268 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXPZP_415268');
column_VA_TEXTINPUTBOXPZP_415268.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXPZP_415268?.templateRef;
const tplEdit_VA_TEXTINPUTBOXPZP_415268 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXPZP_415268');
column_VA_TEXTINPUTBOXPZP_415268.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXPZP_415268?.templateRef;
}
const column_VA_TEXTINPUTBOXEFM_768268 = this.metaData.viewState["QV_JT23_FZW47"].columns.find((col: any) => col.field == 'items6');
if (column_VA_TEXTINPUTBOXEFM_768268 != undefined) {
const tplCell_VA_TEXTINPUTBOXEFM_768268 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXEFM_768268');
column_VA_TEXTINPUTBOXEFM_768268.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXEFM_768268?.templateRef;
const tplEdit_VA_TEXTINPUTBOXEFM_768268 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXEFM_768268');
column_VA_TEXTINPUTBOXEFM_768268.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXEFM_768268?.templateRef;
}
const column_VA_TEXTINPUTBOXAPF_709268 = this.metaData.viewState["QV_JT23_FZW47"].columns.find((col: any) => col.field == 'items7');
if (column_VA_TEXTINPUTBOXAPF_709268 != undefined) {
const tplCell_VA_TEXTINPUTBOXAPF_709268 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXAPF_709268');
column_VA_TEXTINPUTBOXAPF_709268.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXAPF_709268?.templateRef;
const tplEdit_VA_TEXTINPUTBOXAPF_709268 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXAPF_709268');
column_VA_TEXTINPUTBOXAPF_709268.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXAPF_709268?.templateRef;
}
const column_VA_TEXTINPUTBOXWTY_756268 = this.metaData.viewState["QV_JT23_FZW47"].columns.find((col: any) => col.field == 'items8');
if (column_VA_TEXTINPUTBOXWTY_756268 != undefined) {
const tplCell_VA_TEXTINPUTBOXWTY_756268 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXWTY_756268');
column_VA_TEXTINPUTBOXWTY_756268.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXWTY_756268?.templateRef;
const tplEdit_VA_TEXTINPUTBOXWTY_756268 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXWTY_756268');
column_VA_TEXTINPUTBOXWTY_756268.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXWTY_756268?.templateRef;
}
const column_VA_TEXTINPUTBOXUMB_869268 = this.metaData.viewState["QV_JT23_FZW47"].columns.find((col: any) => col.field == 'items9');
if (column_VA_TEXTINPUTBOXUMB_869268 != undefined) {
const tplCell_VA_TEXTINPUTBOXUMB_869268 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXUMB_869268');
column_VA_TEXTINPUTBOXUMB_869268.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXUMB_869268?.templateRef;
const tplEdit_VA_TEXTINPUTBOXUMB_869268 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXUMB_869268');
column_VA_TEXTINPUTBOXUMB_869268.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXUMB_869268?.templateRef;
}
const column_VA_TEXTINPUTBOXHPS_267268 = this.metaData.viewState["QV_JT23_FZW47"].columns.find((col: any) => col.field == 'items10');
if (column_VA_TEXTINPUTBOXHPS_267268 != undefined) {
const tplCell_VA_TEXTINPUTBOXHPS_267268 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXHPS_267268');
column_VA_TEXTINPUTBOXHPS_267268.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXHPS_267268?.templateRef;
const tplEdit_VA_TEXTINPUTBOXHPS_267268 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXHPS_267268');
column_VA_TEXTINPUTBOXHPS_267268.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXHPS_267268?.templateRef;
}
const column_VA_TEXTINPUTBOXRWQ_403268 = this.metaData.viewState["QV_JT23_FZW47"].columns.find((col: any) => col.field == 'items11');
if (column_VA_TEXTINPUTBOXRWQ_403268 != undefined) {
const tplCell_VA_TEXTINPUTBOXRWQ_403268 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXRWQ_403268');
column_VA_TEXTINPUTBOXRWQ_403268.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXRWQ_403268?.templateRef;
const tplEdit_VA_TEXTINPUTBOXRWQ_403268 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXRWQ_403268');
column_VA_TEXTINPUTBOXRWQ_403268.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXRWQ_403268?.templateRef;
}
const column_VA_TEXTINPUTBOXZBL_716268 = this.metaData.viewState["QV_JT23_FZW47"].columns.find((col: any) => col.field == 'items12');
if (column_VA_TEXTINPUTBOXZBL_716268 != undefined) {
const tplCell_VA_TEXTINPUTBOXZBL_716268 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXZBL_716268');
column_VA_TEXTINPUTBOXZBL_716268.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXZBL_716268?.templateRef;
const tplEdit_VA_TEXTINPUTBOXZBL_716268 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXZBL_716268');
column_VA_TEXTINPUTBOXZBL_716268.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXZBL_716268?.templateRef;
}
const column_VA_TEXTINPUTBOXLGX_921268 = this.metaData.viewState["QV_JT23_FZW47"].columns.find((col: any) => col.field == 'items13');
if (column_VA_TEXTINPUTBOXLGX_921268 != undefined) {
const tplCell_VA_TEXTINPUTBOXLGX_921268 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXLGX_921268');
column_VA_TEXTINPUTBOXLGX_921268.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXLGX_921268?.templateRef;
const tplEdit_VA_TEXTINPUTBOXLGX_921268 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXLGX_921268');
column_VA_TEXTINPUTBOXLGX_921268.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXLGX_921268?.templateRef;
}
const column_VA_TEXTINPUTBOXRCZ_367268 = this.metaData.viewState["QV_JT23_FZW47"].columns.find((col: any) => col.field == 'items14');
if (column_VA_TEXTINPUTBOXRCZ_367268 != undefined) {
const tplCell_VA_TEXTINPUTBOXRCZ_367268 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXRCZ_367268');
column_VA_TEXTINPUTBOXRCZ_367268.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXRCZ_367268?.templateRef;
const tplEdit_VA_TEXTINPUTBOXRCZ_367268 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXRCZ_367268');
column_VA_TEXTINPUTBOXRCZ_367268.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXRCZ_367268?.templateRef;
}
const column_VA_TEXTINPUTBOXCBB_218268 = this.metaData.viewState["QV_JT23_FZW47"].columns.find((col: any) => col.field == 'items15');
if (column_VA_TEXTINPUTBOXCBB_218268 != undefined) {
const tplCell_VA_TEXTINPUTBOXCBB_218268 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXCBB_218268');
column_VA_TEXTINPUTBOXCBB_218268.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXCBB_218268?.templateRef;
const tplEdit_VA_TEXTINPUTBOXCBB_218268 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXCBB_218268');
column_VA_TEXTINPUTBOXCBB_218268.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXCBB_218268?.templateRef;
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
DeferredItemsList: viewState.T_ASSTSKMGDPSCM_203.controls.DeferredItemsList as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'QERYS', taskId: 'T_ASSTSKMGDPSCM_203', taskVersion: '1.0.0', vcId: 'VC_DEFERREDIT_242203', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/QERYS/T_ASSTSKMGDPSCM_203', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_JT23_FZW47', { queryId: 'Q_DEFEMTIT_WQ23', entityName: 'DeferredItemsList', filter: "", cobisRequestServerConfig: { pageSize :10 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'DeferredItemsForm' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
