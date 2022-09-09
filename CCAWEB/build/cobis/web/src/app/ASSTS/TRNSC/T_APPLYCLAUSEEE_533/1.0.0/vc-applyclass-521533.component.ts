//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-applyclass-521533.model';
import { ViewState } from './model/vc-applyclass-521533-view-state';
import { VcApplyclass521533Custom } from './vc-applyclass-521533.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-applyclass-521533',
templateUrl: './vc-applyclass-521533.component.html'
})
export class VcApplyclass521533Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcApplyclass521533Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXZUA_304871 = this.metaData.viewState["QV_LM37_VTI26"].columns.find((col: any) => col.field == 'share');
if (column_VA_TEXTINPUTBOXZUA_304871 != undefined) {
const tplCell_VA_TEXTINPUTBOXZUA_304871 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXZUA_304871');
column_VA_TEXTINPUTBOXZUA_304871.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXZUA_304871?.templateRef;
const tplEdit_VA_TEXTINPUTBOXZUA_304871 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXZUA_304871');
column_VA_TEXTINPUTBOXZUA_304871.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXZUA_304871?.templateRef;
}
const column_VA_DATEFIELDBPQSTR_142871 = this.metaData.viewState["QV_LM37_VTI26"].columns.find((col: any) => col.field == 'expiration');
if (column_VA_DATEFIELDBPQSTR_142871 != undefined) {
const tplCell_VA_DATEFIELDBPQSTR_142871 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DATEFIELDBPQSTR_142871');
column_VA_DATEFIELDBPQSTR_142871.properties.cellTemplate = tplCell_VA_DATEFIELDBPQSTR_142871?.templateRef;
const tplEdit_VA_DATEFIELDBPQSTR_142871 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DATEFIELDBPQSTR_142871');
column_VA_DATEFIELDBPQSTR_142871.properties.editTemplate = tplEdit_VA_DATEFIELDBPQSTR_142871?.templateRef;
}
const column_VA_TEXTINPUTBOXMMN_363871 = this.metaData.viewState["QV_LM37_VTI26"].columns.find((col: any) => col.field == 'days');
if (column_VA_TEXTINPUTBOXMMN_363871 != undefined) {
const tplCell_VA_TEXTINPUTBOXMMN_363871 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXMMN_363871');
column_VA_TEXTINPUTBOXMMN_363871.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXMMN_363871?.templateRef;
const tplEdit_VA_TEXTINPUTBOXMMN_363871 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXMMN_363871');
column_VA_TEXTINPUTBOXMMN_363871.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXMMN_363871?.templateRef;
}
const column_VA_TEXTINPUTBOXTWI_476871 = this.metaData.viewState["QV_LM37_VTI26"].columns.find((col: any) => col.field == 'balanceCap');
if (column_VA_TEXTINPUTBOXTWI_476871 != undefined) {
const tplCell_VA_TEXTINPUTBOXTWI_476871 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXTWI_476871');
column_VA_TEXTINPUTBOXTWI_476871.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXTWI_476871?.templateRef;
const tplEdit_VA_TEXTINPUTBOXTWI_476871 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXTWI_476871');
column_VA_TEXTINPUTBOXTWI_476871.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXTWI_476871?.templateRef;
}
const column_VA_TEXTINPUTBOXZNS_485871 = this.metaData.viewState["QV_LM37_VTI26"].columns.find((col: any) => col.field == 'items1');
if (column_VA_TEXTINPUTBOXZNS_485871 != undefined) {
const tplCell_VA_TEXTINPUTBOXZNS_485871 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXZNS_485871');
column_VA_TEXTINPUTBOXZNS_485871.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXZNS_485871?.templateRef;
const tplEdit_VA_TEXTINPUTBOXZNS_485871 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXZNS_485871');
column_VA_TEXTINPUTBOXZNS_485871.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXZNS_485871?.templateRef;
}
const column_VA_TEXTINPUTBOXRER_848871 = this.metaData.viewState["QV_LM37_VTI26"].columns.find((col: any) => col.field == 'items2');
if (column_VA_TEXTINPUTBOXRER_848871 != undefined) {
const tplCell_VA_TEXTINPUTBOXRER_848871 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXRER_848871');
column_VA_TEXTINPUTBOXRER_848871.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXRER_848871?.templateRef;
const tplEdit_VA_TEXTINPUTBOXRER_848871 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXRER_848871');
column_VA_TEXTINPUTBOXRER_848871.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXRER_848871?.templateRef;
}
const column_VA_TEXTINPUTBOXBVN_129871 = this.metaData.viewState["QV_LM37_VTI26"].columns.find((col: any) => col.field == 'items3');
if (column_VA_TEXTINPUTBOXBVN_129871 != undefined) {
const tplCell_VA_TEXTINPUTBOXBVN_129871 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXBVN_129871');
column_VA_TEXTINPUTBOXBVN_129871.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXBVN_129871?.templateRef;
const tplEdit_VA_TEXTINPUTBOXBVN_129871 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXBVN_129871');
column_VA_TEXTINPUTBOXBVN_129871.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXBVN_129871?.templateRef;
}
const column_VA_TEXTINPUTBOXYCQ_383871 = this.metaData.viewState["QV_LM37_VTI26"].columns.find((col: any) => col.field == 'items4');
if (column_VA_TEXTINPUTBOXYCQ_383871 != undefined) {
const tplCell_VA_TEXTINPUTBOXYCQ_383871 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXYCQ_383871');
column_VA_TEXTINPUTBOXYCQ_383871.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXYCQ_383871?.templateRef;
const tplEdit_VA_TEXTINPUTBOXYCQ_383871 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXYCQ_383871');
column_VA_TEXTINPUTBOXYCQ_383871.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXYCQ_383871?.templateRef;
}
const column_VA_TEXTINPUTBOXOFJ_503871 = this.metaData.viewState["QV_LM37_VTI26"].columns.find((col: any) => col.field == 'items5');
if (column_VA_TEXTINPUTBOXOFJ_503871 != undefined) {
const tplCell_VA_TEXTINPUTBOXOFJ_503871 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXOFJ_503871');
column_VA_TEXTINPUTBOXOFJ_503871.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXOFJ_503871?.templateRef;
const tplEdit_VA_TEXTINPUTBOXOFJ_503871 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXOFJ_503871');
column_VA_TEXTINPUTBOXOFJ_503871.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXOFJ_503871?.templateRef;
}
const column_VA_TEXTINPUTBOXCGS_176871 = this.metaData.viewState["QV_LM37_VTI26"].columns.find((col: any) => col.field == 'items7');
if (column_VA_TEXTINPUTBOXCGS_176871 != undefined) {
const tplCell_VA_TEXTINPUTBOXCGS_176871 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXCGS_176871');
column_VA_TEXTINPUTBOXCGS_176871.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXCGS_176871?.templateRef;
const tplEdit_VA_TEXTINPUTBOXCGS_176871 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXCGS_176871');
column_VA_TEXTINPUTBOXCGS_176871.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXCGS_176871?.templateRef;
}
const column_VA_TEXTINPUTBOXLPC_409871 = this.metaData.viewState["QV_LM37_VTI26"].columns.find((col: any) => col.field == 'items8');
if (column_VA_TEXTINPUTBOXLPC_409871 != undefined) {
const tplCell_VA_TEXTINPUTBOXLPC_409871 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXLPC_409871');
column_VA_TEXTINPUTBOXLPC_409871.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXLPC_409871?.templateRef;
const tplEdit_VA_TEXTINPUTBOXLPC_409871 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXLPC_409871');
column_VA_TEXTINPUTBOXLPC_409871.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXLPC_409871?.templateRef;
}
const column_VA_TEXTINPUTBOXQLU_499871 = this.metaData.viewState["QV_LM37_VTI26"].columns.find((col: any) => col.field == 'items9');
if (column_VA_TEXTINPUTBOXQLU_499871 != undefined) {
const tplCell_VA_TEXTINPUTBOXQLU_499871 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXQLU_499871');
column_VA_TEXTINPUTBOXQLU_499871.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXQLU_499871?.templateRef;
const tplEdit_VA_TEXTINPUTBOXQLU_499871 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXQLU_499871');
column_VA_TEXTINPUTBOXQLU_499871.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXQLU_499871?.templateRef;
}
const column_VA_TEXTINPUTBOXYBZ_761871 = this.metaData.viewState["QV_LM37_VTI26"].columns.find((col: any) => col.field == 'items10');
if (column_VA_TEXTINPUTBOXYBZ_761871 != undefined) {
const tplCell_VA_TEXTINPUTBOXYBZ_761871 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXYBZ_761871');
column_VA_TEXTINPUTBOXYBZ_761871.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXYBZ_761871?.templateRef;
const tplEdit_VA_TEXTINPUTBOXYBZ_761871 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXYBZ_761871');
column_VA_TEXTINPUTBOXYBZ_761871.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXYBZ_761871?.templateRef;
}
const column_VA_TEXTINPUTBOXOUD_939871 = this.metaData.viewState["QV_LM37_VTI26"].columns.find((col: any) => col.field == 'items11');
if (column_VA_TEXTINPUTBOXOUD_939871 != undefined) {
const tplCell_VA_TEXTINPUTBOXOUD_939871 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXOUD_939871');
column_VA_TEXTINPUTBOXOUD_939871.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXOUD_939871?.templateRef;
const tplEdit_VA_TEXTINPUTBOXOUD_939871 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXOUD_939871');
column_VA_TEXTINPUTBOXOUD_939871.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXOUD_939871?.templateRef;
}
const column_VA_TEXTINPUTBOXZPT_760871 = this.metaData.viewState["QV_LM37_VTI26"].columns.find((col: any) => col.field == 'items12');
if (column_VA_TEXTINPUTBOXZPT_760871 != undefined) {
const tplCell_VA_TEXTINPUTBOXZPT_760871 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXZPT_760871');
column_VA_TEXTINPUTBOXZPT_760871.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXZPT_760871?.templateRef;
const tplEdit_VA_TEXTINPUTBOXZPT_760871 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXZPT_760871');
column_VA_TEXTINPUTBOXZPT_760871.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXZPT_760871?.templateRef;
}
const column_VA_TEXTINPUTBOXADC_261871 = this.metaData.viewState["QV_LM37_VTI26"].columns.find((col: any) => col.field == 'items14');
if (column_VA_TEXTINPUTBOXADC_261871 != undefined) {
const tplCell_VA_TEXTINPUTBOXADC_261871 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXADC_261871');
column_VA_TEXTINPUTBOXADC_261871.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXADC_261871?.templateRef;
const tplEdit_VA_TEXTINPUTBOXADC_261871 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXADC_261871');
column_VA_TEXTINPUTBOXADC_261871.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXADC_261871?.templateRef;
}
const column_VA_TEXTINPUTBOXHQL_468871 = this.metaData.viewState["QV_LM37_VTI26"].columns.find((col: any) => col.field == 'items15');
if (column_VA_TEXTINPUTBOXHQL_468871 != undefined) {
const tplCell_VA_TEXTINPUTBOXHQL_468871 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXHQL_468871');
column_VA_TEXTINPUTBOXHQL_468871.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXHQL_468871?.templateRef;
const tplEdit_VA_TEXTINPUTBOXHQL_468871 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXHQL_468871');
column_VA_TEXTINPUTBOXHQL_468871.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXHQL_468871?.templateRef;
}
const column_VA_TEXTINPUTBOXPNI_341871 = this.metaData.viewState["QV_LM37_VTI26"].columns.find((col: any) => col.field == 'items6');
if (column_VA_TEXTINPUTBOXPNI_341871 != undefined) {
const tplCell_VA_TEXTINPUTBOXPNI_341871 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXPNI_341871');
column_VA_TEXTINPUTBOXPNI_341871.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXPNI_341871?.templateRef;
const tplEdit_VA_TEXTINPUTBOXPNI_341871 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXPNI_341871');
column_VA_TEXTINPUTBOXPNI_341871.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXPNI_341871?.templateRef;
}
const column_VA_TEXTINPUTBOXUWA_570871 = this.metaData.viewState["QV_LM37_VTI26"].columns.find((col: any) => col.field == 'items13');
if (column_VA_TEXTINPUTBOXUWA_570871 != undefined) {
const tplCell_VA_TEXTINPUTBOXUWA_570871 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXUWA_570871');
column_VA_TEXTINPUTBOXUWA_570871.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXUWA_570871?.templateRef;
const tplEdit_VA_TEXTINPUTBOXUWA_570871 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXUWA_570871');
column_VA_TEXTINPUTBOXUWA_570871.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXUWA_570871?.templateRef;
}
const column_VA_TEXTINPUTBOXSXJ_950871 = this.metaData.viewState["QV_LM37_VTI26"].columns.find((col: any) => col.field == 'shareValue');
if (column_VA_TEXTINPUTBOXSXJ_950871 != undefined) {
const tplCell_VA_TEXTINPUTBOXSXJ_950871 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXSXJ_950871');
column_VA_TEXTINPUTBOXSXJ_950871.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXSXJ_950871?.templateRef;
const tplEdit_VA_TEXTINPUTBOXSXJ_950871 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXSXJ_950871');
column_VA_TEXTINPUTBOXSXJ_950871.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXSXJ_950871?.templateRef;
}
const column_VA_TEXTINPUTBOXEED_382871 = this.metaData.viewState["QV_LM37_VTI26"].columns.find((col: any) => col.field == 'state');
if (column_VA_TEXTINPUTBOXEED_382871 != undefined) {
const tplCell_VA_TEXTINPUTBOXEED_382871 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXEED_382871');
column_VA_TEXTINPUTBOXEED_382871.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXEED_382871?.templateRef;
const tplEdit_VA_TEXTINPUTBOXEED_382871 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXEED_382871');
column_VA_TEXTINPUTBOXEED_382871.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXEED_382871?.templateRef;
}
const column_VA_TEXTINPUTBOXGOC_946871 = this.metaData.viewState["QV_LM37_VTI26"].columns.find((col: any) => col.field == 'porroga');
if (column_VA_TEXTINPUTBOXGOC_946871 != undefined) {
const tplCell_VA_TEXTINPUTBOXGOC_946871 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXGOC_946871');
column_VA_TEXTINPUTBOXGOC_946871.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXGOC_946871?.templateRef;
const tplEdit_VA_TEXTINPUTBOXGOC_946871 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXGOC_946871');
column_VA_TEXTINPUTBOXGOC_946871.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXGOC_946871?.templateRef;
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
Loan: viewState.T_APPLYCLAUSEEE_533.controls.Loan as FormGroup ,
Amortization: viewState.T_APPLYCLAUSEEE_533.controls.Amortization as FormGroup ,
ItemsLoan: viewState.T_APPLYCLAUSEEE_533.controls.ItemsLoan as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'TRNSC', taskId: 'T_APPLYCLAUSEEE_533', taskVersion: '1.0.0', vcId: 'VC_APPLYCLASS_521533', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/TRNSC/T_APPLYCLAUSEEE_533', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_LM37_VTI26', { queryId: 'Q_AMORTIAN_8237', entityName: 'Amortization', filter: "", cobisRequestServerConfig: { pageSize :12 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'ASSTS.LBL_ASSTS_CLAUSULRI_36820' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
