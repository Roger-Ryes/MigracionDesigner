//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-passivepif-144956.model';
import { ViewState } from './model/vc-passivepif-144956-view-state';
import { VcPassivepif144956Custom } from './vc-passivepif-144956.custom';
import { LNSPRService} from 'src/app/LNSPR/service-modules/LNSPR.service';
@Component({
selector: 'cobis-vc-passivepif-144956',
templateUrl: './vc-passivepif-144956.component.html'
})
export class VcPassivepif144956Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private lnspr: LNSPRService) {
super(new VcPassivepif144956Custom(designer.cobisCommons,lnspr), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_ROLEKRZYEYCGEMZ_493899 = this.metaData.viewState["QV_MV07_KFL31"].columns.find((col: any) => col.field == 'role');
if (column_VA_ROLEKRZYEYCGEMZ_493899 != undefined) {
const tplCell_VA_ROLEKRZYEYCGEMZ_493899 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_ROLEKRZYEYCGEMZ_493899');
column_VA_ROLEKRZYEYCGEMZ_493899.properties.cellTemplate = tplCell_VA_ROLEKRZYEYCGEMZ_493899?.templateRef;
const tplEdit_VA_ROLEKRZYEYCGEMZ_493899 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_ROLEKRZYEYCGEMZ_493899');
column_VA_ROLEKRZYEYCGEMZ_493899.properties.editTemplate = tplEdit_VA_ROLEKRZYEYCGEMZ_493899?.templateRef;
}
const column_VA_FULLNAMEASFGYGC_205899 = this.metaData.viewState["QV_MV07_KFL31"].columns.find((col: any) => col.field == 'fullName');
if (column_VA_FULLNAMEASFGYGC_205899 != undefined) {
const tplCell_VA_FULLNAMEASFGYGC_205899 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_FULLNAMEASFGYGC_205899');
column_VA_FULLNAMEASFGYGC_205899.properties.cellTemplate = tplCell_VA_FULLNAMEASFGYGC_205899?.templateRef;
const tplEdit_VA_FULLNAMEASFGYGC_205899 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_FULLNAMEASFGYGC_205899');
column_VA_FULLNAMEASFGYGC_205899.properties.editTemplate = tplEdit_VA_FULLNAMEASFGYGC_205899?.templateRef;
}
const column_VA_IDNUMBEREAURXON_346899 = this.metaData.viewState["QV_MV07_KFL31"].columns.find((col: any) => col.field == 'idNumber');
if (column_VA_IDNUMBEREAURXON_346899 != undefined) {
const tplCell_VA_IDNUMBEREAURXON_346899 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_IDNUMBEREAURXON_346899');
column_VA_IDNUMBEREAURXON_346899.properties.cellTemplate = tplCell_VA_IDNUMBEREAURXON_346899?.templateRef;
const tplEdit_VA_IDNUMBEREAURXON_346899 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_IDNUMBEREAURXON_346899');
column_VA_IDNUMBEREAURXON_346899.properties.editTemplate = tplEdit_VA_IDNUMBEREAURXON_346899?.templateRef;
}
const column_VA_CODEYUQMXPUKHJW_271899 = this.metaData.viewState["QV_MV07_KFL31"].columns.find((col: any) => col.field == 'code');
if (column_VA_CODEYUQMXPUKHJW_271899 != undefined) {
const tplCell_VA_CODEYUQMXPUKHJW_271899 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_CODEYUQMXPUKHJW_271899');
column_VA_CODEYUQMXPUKHJW_271899.properties.cellTemplate = tplCell_VA_CODEYUQMXPUKHJW_271899?.templateRef;
const tplEdit_VA_CODEYUQMXPUKHJW_271899 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_CODEYUQMXPUKHJW_271899');
column_VA_CODEYUQMXPUKHJW_271899.properties.editTemplate = tplEdit_VA_CODEYUQMXPUKHJW_271899?.templateRef;
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
OperationCRUDFormEntity: viewState.T_LNSPRBYPIFLBG_956.controls.OperationCRUDFormEntity as FormGroup ,
DebtorEntity: viewState.T_LNSPRBYPIFLBG_956.controls.DebtorEntity as FormGroup ,
OperationEntity: viewState.T_LNSPRBYPIFLBG_956.controls.OperationEntity as FormGroup
};
this.metaData = { moduleId: 'LNSPR', subModuleId: 'OPRTN', taskId: 'T_LNSPRBYPIFLBG_956', taskVersion: '1.0.0', vcId: 'VC_PASSIVEPIF_144956', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, true), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/LNSPR/OPRTN/T_LNSPRBYPIFLBG_956', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ['VA_OFFICIALFUSJDJB_630899', { filter:"", cobisRequestServerConfig: {'filterType':'none'}, cache: 0 }], ['VA_UBICATIONEIZYDH_113899', { filter:"", cobisRequestServerConfig: {'filterType':'none'}, cache: 0 }], ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ['VA_TYPEOPERATIONNN_137899', { catalogName: 'ca_toperacion_pas', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_MONEYSNJCKOMHID_471899', { catalogName: 'cl_moneda', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_OFFICEFTYXFMUWA_267899', { catalogName: 'cl_oficina', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_PLAZODESCRIPCNC_494899', { catalogName: 'ca_tdividendo', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_CREDITORTYPEQDV_936899', { catalogName: 'ca_tipo_acreedor', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_DEBTTYPELMRNXVE_296899', { catalogName: 'ca_tipo_deuda', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_REPOSITIONJNYRG_258899', { catalogName: 'te_tipo_reposicion', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_SUBFINANCINGPJK_364899', { catalogName: 'ca_causa_fin', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_FINANMARKETQOEM_575899', { catalogName: 'ca_obj_fin', filter: "", cobisRequestServerConfig: null, cache: 0 }], ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_MV07_KFL31', { queryId: 'Q_DEBTORZN_LNSPR', entityName: 'DebtorEntity', filter: "", cobisRequestServerConfig: null, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'PassivePortfolioCreation' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
