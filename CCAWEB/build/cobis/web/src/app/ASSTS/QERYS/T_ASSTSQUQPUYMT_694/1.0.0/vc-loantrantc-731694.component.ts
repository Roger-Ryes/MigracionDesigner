//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-loantrantc-731694.model';
import { ViewState } from './model/vc-loantrantc-731694-view-state';
import { VcLoantrantc731694Custom } from './vc-loantrantc-731694.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-loantrantc-731694',
templateUrl: './vc-loantrantc-731694.component.html'
})
export class VcLoantrantc731694Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcLoantrantc731694Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXOQC_136261 = this.metaData.viewState["QV_HK73_UEC23"].columns.find((col: any) => col.field == 'transaction');
if (column_VA_TEXTINPUTBOXOQC_136261 != undefined) {
const tplCell_VA_TEXTINPUTBOXOQC_136261 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXOQC_136261');
column_VA_TEXTINPUTBOXOQC_136261.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXOQC_136261?.templateRef;
const tplEdit_VA_TEXTINPUTBOXOQC_136261 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXOQC_136261');
column_VA_TEXTINPUTBOXOQC_136261.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXOQC_136261?.templateRef;
}
const column_VA_TEXTINPUTBOXCIZ_585261 = this.metaData.viewState["QV_HK73_UEC23"].columns.find((col: any) => col.field == 'secuential');
if (column_VA_TEXTINPUTBOXCIZ_585261 != undefined) {
const tplCell_VA_TEXTINPUTBOXCIZ_585261 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXCIZ_585261');
column_VA_TEXTINPUTBOXCIZ_585261.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXCIZ_585261?.templateRef;
const tplEdit_VA_TEXTINPUTBOXCIZ_585261 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXCIZ_585261');
column_VA_TEXTINPUTBOXCIZ_585261.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXCIZ_585261?.templateRef;
}
const column_VA_TEXTINPUTBOXZGU_968261 = this.metaData.viewState["QV_HK73_UEC23"].columns.find((col: any) => col.field == 'operation');
if (column_VA_TEXTINPUTBOXZGU_968261 != undefined) {
const tplCell_VA_TEXTINPUTBOXZGU_968261 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXZGU_968261');
column_VA_TEXTINPUTBOXZGU_968261.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXZGU_968261?.templateRef;
const tplEdit_VA_TEXTINPUTBOXZGU_968261 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXZGU_968261');
column_VA_TEXTINPUTBOXZGU_968261.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXZGU_968261?.templateRef;
}
const column_VA_TEXTINPUTBOXHVV_957261 = this.metaData.viewState["QV_HK73_UEC23"].columns.find((col: any) => col.field == 'dateTransaction');
if (column_VA_TEXTINPUTBOXHVV_957261 != undefined) {
const tplCell_VA_TEXTINPUTBOXHVV_957261 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXHVV_957261');
column_VA_TEXTINPUTBOXHVV_957261.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXHVV_957261?.templateRef;
const tplEdit_VA_TEXTINPUTBOXHVV_957261 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXHVV_957261');
column_VA_TEXTINPUTBOXHVV_957261.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXHVV_957261?.templateRef;
}
const column_VA_TEXTINPUTBOXMIY_681261 = this.metaData.viewState["QV_HK73_UEC23"].columns.find((col: any) => col.field == 'dateReverd');
if (column_VA_TEXTINPUTBOXMIY_681261 != undefined) {
const tplCell_VA_TEXTINPUTBOXMIY_681261 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXMIY_681261');
column_VA_TEXTINPUTBOXMIY_681261.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXMIY_681261?.templateRef;
const tplEdit_VA_TEXTINPUTBOXMIY_681261 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXMIY_681261');
column_VA_TEXTINPUTBOXMIY_681261.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXMIY_681261?.templateRef;
}
const column_VA_TEXTINPUTBOXRSE_162261 = this.metaData.viewState["QV_HK73_UEC23"].columns.find((col: any) => col.field == 'state');
if (column_VA_TEXTINPUTBOXRSE_162261 != undefined) {
const tplCell_VA_TEXTINPUTBOXRSE_162261 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXRSE_162261');
column_VA_TEXTINPUTBOXRSE_162261.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXRSE_162261?.templateRef;
const tplEdit_VA_TEXTINPUTBOXRSE_162261 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXRSE_162261');
column_VA_TEXTINPUTBOXRSE_162261.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXRSE_162261?.templateRef;
}
const column_VA_TEXTINPUTBOXTEB_188261 = this.metaData.viewState["QV_HK73_UEC23"].columns.find((col: any) => col.field == 'user');
if (column_VA_TEXTINPUTBOXTEB_188261 != undefined) {
const tplCell_VA_TEXTINPUTBOXTEB_188261 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXTEB_188261');
column_VA_TEXTINPUTBOXTEB_188261.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXTEB_188261?.templateRef;
const tplEdit_VA_TEXTINPUTBOXTEB_188261 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXTEB_188261');
column_VA_TEXTINPUTBOXTEB_188261.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXTEB_188261?.templateRef;
}
const column_VA_TEXTINPUTBOXBLZ_114261 = this.metaData.viewState["QV_HK73_UEC23"].columns.find((col: any) => col.field == 'observation');
if (column_VA_TEXTINPUTBOXBLZ_114261 != undefined) {
const tplCell_VA_TEXTINPUTBOXBLZ_114261 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXBLZ_114261');
column_VA_TEXTINPUTBOXBLZ_114261.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXBLZ_114261?.templateRef;
const tplEdit_VA_TEXTINPUTBOXBLZ_114261 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXBLZ_114261');
column_VA_TEXTINPUTBOXBLZ_114261.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXBLZ_114261?.templateRef;
}
const column_VA_TEXTINPUTBOXAIY_111261 = this.metaData.viewState["QV_OB55_ZQG31"].columns.find((col: any) => col.field == 'transaction');
if (column_VA_TEXTINPUTBOXAIY_111261 != undefined) {
const tplCell_VA_TEXTINPUTBOXAIY_111261 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXAIY_111261');
column_VA_TEXTINPUTBOXAIY_111261.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXAIY_111261?.templateRef;
const tplEdit_VA_TEXTINPUTBOXAIY_111261 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXAIY_111261');
column_VA_TEXTINPUTBOXAIY_111261.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXAIY_111261?.templateRef;
}
const column_VA_TEXTINPUTBOXLVK_757261 = this.metaData.viewState["QV_OB55_ZQG31"].columns.find((col: any) => col.field == 'secuential');
if (column_VA_TEXTINPUTBOXLVK_757261 != undefined) {
const tplCell_VA_TEXTINPUTBOXLVK_757261 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXLVK_757261');
column_VA_TEXTINPUTBOXLVK_757261.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXLVK_757261?.templateRef;
const tplEdit_VA_TEXTINPUTBOXLVK_757261 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXLVK_757261');
column_VA_TEXTINPUTBOXLVK_757261.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXLVK_757261?.templateRef;
}
const column_VA_TEXTINPUTBOXUSP_618261 = this.metaData.viewState["QV_OB55_ZQG31"].columns.find((col: any) => col.field == 'operation');
if (column_VA_TEXTINPUTBOXUSP_618261 != undefined) {
const tplCell_VA_TEXTINPUTBOXUSP_618261 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXUSP_618261');
column_VA_TEXTINPUTBOXUSP_618261.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXUSP_618261?.templateRef;
const tplEdit_VA_TEXTINPUTBOXUSP_618261 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXUSP_618261');
column_VA_TEXTINPUTBOXUSP_618261.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXUSP_618261?.templateRef;
}
const column_VA_TEXTINPUTBOXSTF_666261 = this.metaData.viewState["QV_OB55_ZQG31"].columns.find((col: any) => col.field == 'dateTransaction');
if (column_VA_TEXTINPUTBOXSTF_666261 != undefined) {
const tplCell_VA_TEXTINPUTBOXSTF_666261 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXSTF_666261');
column_VA_TEXTINPUTBOXSTF_666261.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXSTF_666261?.templateRef;
const tplEdit_VA_TEXTINPUTBOXSTF_666261 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXSTF_666261');
column_VA_TEXTINPUTBOXSTF_666261.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXSTF_666261?.templateRef;
}
const column_VA_TEXTINPUTBOXDDL_288261 = this.metaData.viewState["QV_OB55_ZQG31"].columns.find((col: any) => col.field == 'dateReverd');
if (column_VA_TEXTINPUTBOXDDL_288261 != undefined) {
const tplCell_VA_TEXTINPUTBOXDDL_288261 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXDDL_288261');
column_VA_TEXTINPUTBOXDDL_288261.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXDDL_288261?.templateRef;
const tplEdit_VA_TEXTINPUTBOXDDL_288261 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXDDL_288261');
column_VA_TEXTINPUTBOXDDL_288261.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXDDL_288261?.templateRef;
}
const column_VA_TEXTINPUTBOXOWN_417261 = this.metaData.viewState["QV_OB55_ZQG31"].columns.find((col: any) => col.field == 'stare');
if (column_VA_TEXTINPUTBOXOWN_417261 != undefined) {
const tplCell_VA_TEXTINPUTBOXOWN_417261 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXOWN_417261');
column_VA_TEXTINPUTBOXOWN_417261.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXOWN_417261?.templateRef;
const tplEdit_VA_TEXTINPUTBOXOWN_417261 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXOWN_417261');
column_VA_TEXTINPUTBOXOWN_417261.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXOWN_417261?.templateRef;
}
const column_VA_TEXTINPUTBOXSLU_243261 = this.metaData.viewState["QV_OB55_ZQG31"].columns.find((col: any) => col.field == 'user');
if (column_VA_TEXTINPUTBOXSLU_243261 != undefined) {
const tplCell_VA_TEXTINPUTBOXSLU_243261 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXSLU_243261');
column_VA_TEXTINPUTBOXSLU_243261.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXSLU_243261?.templateRef;
const tplEdit_VA_TEXTINPUTBOXSLU_243261 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXSLU_243261');
column_VA_TEXTINPUTBOXSLU_243261.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXSLU_243261?.templateRef;
}
const column_VA_TEXTINPUTBOXSCZ_988261 = this.metaData.viewState["QV_OB55_ZQG31"].columns.find((col: any) => col.field == 'observation');
if (column_VA_TEXTINPUTBOXSCZ_988261 != undefined) {
const tplCell_VA_TEXTINPUTBOXSCZ_988261 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXSCZ_988261');
column_VA_TEXTINPUTBOXSCZ_988261.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXSCZ_988261?.templateRef;
const tplEdit_VA_TEXTINPUTBOXSCZ_988261 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXSCZ_988261');
column_VA_TEXTINPUTBOXSCZ_988261.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXSCZ_988261?.templateRef;
}
const column_VA_TEXTINPUTBOXQMP_236261 = this.metaData.viewState["QV_IY91_WMD36"].columns.find((col: any) => col.field == 'dateTransation');
if (column_VA_TEXTINPUTBOXQMP_236261 != undefined) {
const tplCell_VA_TEXTINPUTBOXQMP_236261 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXQMP_236261');
column_VA_TEXTINPUTBOXQMP_236261.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXQMP_236261?.templateRef;
const tplEdit_VA_TEXTINPUTBOXQMP_236261 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXQMP_236261');
column_VA_TEXTINPUTBOXQMP_236261.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXQMP_236261?.templateRef;
}
const column_VA_TEXTINPUTBOXZNB_496261 = this.metaData.viewState["QV_IY91_WMD36"].columns.find((col: any) => col.field == 'dateReverd');
if (column_VA_TEXTINPUTBOXZNB_496261 != undefined) {
const tplCell_VA_TEXTINPUTBOXZNB_496261 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXZNB_496261');
column_VA_TEXTINPUTBOXZNB_496261.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXZNB_496261?.templateRef;
const tplEdit_VA_TEXTINPUTBOXZNB_496261 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXZNB_496261');
column_VA_TEXTINPUTBOXZNB_496261.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXZNB_496261?.templateRef;
}
const column_VA_TEXTINPUTBOXNBV_612261 = this.metaData.viewState["QV_IY91_WMD36"].columns.find((col: any) => col.field == 'dividend');
if (column_VA_TEXTINPUTBOXNBV_612261 != undefined) {
const tplCell_VA_TEXTINPUTBOXNBV_612261 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXNBV_612261');
column_VA_TEXTINPUTBOXNBV_612261.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXNBV_612261?.templateRef;
const tplEdit_VA_TEXTINPUTBOXNBV_612261 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXNBV_612261');
column_VA_TEXTINPUTBOXNBV_612261.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXNBV_612261?.templateRef;
}
const column_VA_TEXTINPUTBOXVNW_997261 = this.metaData.viewState["QV_IY91_WMD36"].columns.find((col: any) => col.field == 'concept');
if (column_VA_TEXTINPUTBOXVNW_997261 != undefined) {
const tplCell_VA_TEXTINPUTBOXVNW_997261 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXVNW_997261');
column_VA_TEXTINPUTBOXVNW_997261.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXVNW_997261?.templateRef;
const tplEdit_VA_TEXTINPUTBOXVNW_997261 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXVNW_997261');
column_VA_TEXTINPUTBOXVNW_997261.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXVNW_997261?.templateRef;
}
const column_VA_TEXTINPUTBOXSQW_891261 = this.metaData.viewState["QV_IY91_WMD36"].columns.find((col: any) => col.field == 'coin');
if (column_VA_TEXTINPUTBOXSQW_891261 != undefined) {
const tplCell_VA_TEXTINPUTBOXSQW_891261 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXSQW_891261');
column_VA_TEXTINPUTBOXSQW_891261.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXSQW_891261?.templateRef;
const tplEdit_VA_TEXTINPUTBOXSQW_891261 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXSQW_891261');
column_VA_TEXTINPUTBOXSQW_891261.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXSQW_891261?.templateRef;
}
const column_VA_TEXTINPUTBOXOCJ_749261 = this.metaData.viewState["QV_IY91_WMD36"].columns.find((col: any) => col.field == 'amount');
if (column_VA_TEXTINPUTBOXOCJ_749261 != undefined) {
const tplCell_VA_TEXTINPUTBOXOCJ_749261 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXOCJ_749261');
column_VA_TEXTINPUTBOXOCJ_749261.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXOCJ_749261?.templateRef;
const tplEdit_VA_TEXTINPUTBOXOCJ_749261 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXOCJ_749261');
column_VA_TEXTINPUTBOXOCJ_749261.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXOCJ_749261?.templateRef;
}
const column_VA_TEXTINPUTBOXGPN_538261 = this.metaData.viewState["QV_IY91_WMD36"].columns.find((col: any) => col.field == 'amountMn');
if (column_VA_TEXTINPUTBOXGPN_538261 != undefined) {
const tplCell_VA_TEXTINPUTBOXGPN_538261 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXGPN_538261');
column_VA_TEXTINPUTBOXGPN_538261.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXGPN_538261?.templateRef;
const tplEdit_VA_TEXTINPUTBOXGPN_538261 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXGPN_538261');
column_VA_TEXTINPUTBOXGPN_538261.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXGPN_538261?.templateRef;
}
const column_VA_TEXTINPUTBOXFME_318261 = this.metaData.viewState["QV_IY91_WMD36"].columns.find((col: any) => col.field == 'state');
if (column_VA_TEXTINPUTBOXFME_318261 != undefined) {
const tplCell_VA_TEXTINPUTBOXFME_318261 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXFME_318261');
column_VA_TEXTINPUTBOXFME_318261.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXFME_318261?.templateRef;
const tplEdit_VA_TEXTINPUTBOXFME_318261 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXFME_318261');
column_VA_TEXTINPUTBOXFME_318261.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXFME_318261?.templateRef;
}
const column_VA_TEXTINPUTBOXIFY_228261 = this.metaData.viewState["QV_IY91_WMD36"].columns.find((col: any) => col.field == 'price');
if (column_VA_TEXTINPUTBOXIFY_228261 != undefined) {
const tplCell_VA_TEXTINPUTBOXIFY_228261 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXIFY_228261');
column_VA_TEXTINPUTBOXIFY_228261.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXIFY_228261?.templateRef;
const tplEdit_VA_TEXTINPUTBOXIFY_228261 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXIFY_228261');
column_VA_TEXTINPUTBOXIFY_228261.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXIFY_228261?.templateRef;
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
ActiveTransaction: viewState.T_ASSTSQUQPUYMT_694.controls.ActiveTransaction as FormGroup ,
ReversedTransaction: viewState.T_ASSTSQUQPUYMT_694.controls.ReversedTransaction as FormGroup ,
Causation: viewState.T_ASSTSQUQPUYMT_694.controls.Causation as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'QERYS', taskId: 'T_ASSTSQUQPUYMT_694', taskVersion: '1.0.0', vcId: 'VC_LOANTRANTC_731694', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(false, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/QERYS/T_ASSTSQUQPUYMT_694', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_HK73_UEC23', { queryId: 'Q_ACTIERNI_WO73', entityName: 'ActiveTransaction', filter: "", cobisRequestServerConfig: { pageSize :10 }, cache: 0, queryMemberParameters:[ ]}], ['QV_OB55_ZQG31', { queryId: 'Q_REVESETA_RO55', entityName: 'ReversedTransaction', filter: "", cobisRequestServerConfig: { pageSize :10 }, cache: 0, queryMemberParameters:[ ]}], ['QV_IY91_WMD36', { queryId: 'Q_CAUSAONT_HU91', entityName: 'Causation', filter: "", cobisRequestServerConfig: { pageSize :10 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'LoanTransactionsForm' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
