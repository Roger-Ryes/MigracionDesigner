//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-operationl-208539.model';
import { ViewState } from './model/vc-operationl-208539-view-state';
import { VcOperationl208539Custom } from './vc-operationl-208539.custom';
import { LNSPRService} from 'src/app/LNSPR/service-modules/LNSPR.service';
@Component({
selector: 'cobis-vc-operationl-208539',
templateUrl: './vc-operationl-208539.component.html'
})
export class VcOperationl208539Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private lnspr: LNSPRService) {
super(new VcOperationl208539Custom(designer.cobisCommons,lnspr), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXZUG_289221 = this.metaData.viewState["QV_YWPR_NOE85"].columns.find((col: any) => col.field == 'role');
if (column_VA_TEXTINPUTBOXZUG_289221 != undefined) {
const tplCell_VA_TEXTINPUTBOXZUG_289221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXZUG_289221');
column_VA_TEXTINPUTBOXZUG_289221.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXZUG_289221?.templateRef;
const tplEdit_VA_TEXTINPUTBOXZUG_289221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXZUG_289221');
column_VA_TEXTINPUTBOXZUG_289221.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXZUG_289221?.templateRef;
}
const column_VA_TEXTINPUTBOXQZW_792221 = this.metaData.viewState["QV_YWPR_NOE85"].columns.find((col: any) => col.field == 'fullName');
if (column_VA_TEXTINPUTBOXQZW_792221 != undefined) {
const tplCell_VA_TEXTINPUTBOXQZW_792221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXQZW_792221');
column_VA_TEXTINPUTBOXQZW_792221.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXQZW_792221?.templateRef;
const tplEdit_VA_TEXTINPUTBOXQZW_792221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXQZW_792221');
column_VA_TEXTINPUTBOXQZW_792221.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXQZW_792221?.templateRef;
}
const column_VA_TEXTINPUTBOXKNN_822221 = this.metaData.viewState["QV_YWPR_NOE85"].columns.find((col: any) => col.field == 'idNumber');
if (column_VA_TEXTINPUTBOXKNN_822221 != undefined) {
const tplCell_VA_TEXTINPUTBOXKNN_822221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXKNN_822221');
column_VA_TEXTINPUTBOXKNN_822221.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXKNN_822221?.templateRef;
const tplEdit_VA_TEXTINPUTBOXKNN_822221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXKNN_822221');
column_VA_TEXTINPUTBOXKNN_822221.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXKNN_822221?.templateRef;
}
const column_VA_TEXTINPUTBOXMWJ_600221 = this.metaData.viewState["QV_YWPR_NOE85"].columns.find((col: any) => col.field == 'code');
if (column_VA_TEXTINPUTBOXMWJ_600221 != undefined) {
const tplCell_VA_TEXTINPUTBOXMWJ_600221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXMWJ_600221');
column_VA_TEXTINPUTBOXMWJ_600221.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXMWJ_600221?.templateRef;
const tplEdit_VA_TEXTINPUTBOXMWJ_600221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXMWJ_600221');
column_VA_TEXTINPUTBOXMWJ_600221.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXMWJ_600221?.templateRef;
}
const column_VA_TEXTINPUTBOXPQA_963221 = this.metaData.viewState["QV_YWPR_NOE85"].columns.find((col: any) => col.field == 'score');
if (column_VA_TEXTINPUTBOXPQA_963221 != undefined) {
const tplCell_VA_TEXTINPUTBOXPQA_963221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXPQA_963221');
column_VA_TEXTINPUTBOXPQA_963221.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXPQA_963221?.templateRef;
const tplEdit_VA_TEXTINPUTBOXPQA_963221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXPQA_963221');
column_VA_TEXTINPUTBOXPQA_963221.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXPQA_963221?.templateRef;
}
const column_VA_TEXTINPUTBOXQYS_536221 = this.metaData.viewState["QV_YWPR_NOE85"].columns.find((col: any) => col.field == 'type');
if (column_VA_TEXTINPUTBOXQYS_536221 != undefined) {
const tplCell_VA_TEXTINPUTBOXQYS_536221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXQYS_536221');
column_VA_TEXTINPUTBOXQYS_536221.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXQYS_536221?.templateRef;
const tplEdit_VA_TEXTINPUTBOXQYS_536221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXQYS_536221');
column_VA_TEXTINPUTBOXQYS_536221.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXQYS_536221?.templateRef;
}
const column_VA_TEXTINPUTBOXARW_788221 = this.metaData.viewState["QV_YWPR_NOE85"].columns.find((col: any) => col.field == 'description');
if (column_VA_TEXTINPUTBOXARW_788221 != undefined) {
const tplCell_VA_TEXTINPUTBOXARW_788221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXARW_788221');
column_VA_TEXTINPUTBOXARW_788221.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXARW_788221?.templateRef;
const tplEdit_VA_TEXTINPUTBOXARW_788221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXARW_788221');
column_VA_TEXTINPUTBOXARW_788221.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXARW_788221?.templateRef;
}
const column_VA_TEXTINPUTBOXGMY_944221 = this.metaData.viewState["QV_VE29_XZB37"].columns.find((col: any) => col.field == 'codParticipants');
if (column_VA_TEXTINPUTBOXGMY_944221 != undefined) {
const tplCell_VA_TEXTINPUTBOXGMY_944221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXGMY_944221');
column_VA_TEXTINPUTBOXGMY_944221.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXGMY_944221?.templateRef;
const tplEdit_VA_TEXTINPUTBOXGMY_944221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXGMY_944221');
column_VA_TEXTINPUTBOXGMY_944221.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXGMY_944221?.templateRef;
}
const column_VA_TEXTINPUTBOXLLS_457221 = this.metaData.viewState["QV_VE29_XZB37"].columns.find((col: any) => col.field == 'nameParticipants');
if (column_VA_TEXTINPUTBOXLLS_457221 != undefined) {
const tplCell_VA_TEXTINPUTBOXLLS_457221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXLLS_457221');
column_VA_TEXTINPUTBOXLLS_457221.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXLLS_457221?.templateRef;
const tplEdit_VA_TEXTINPUTBOXLLS_457221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXLLS_457221');
column_VA_TEXTINPUTBOXLLS_457221.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXLLS_457221?.templateRef;
}
const column_VA_CHECKBOXOAJDOYG_553221 = this.metaData.viewState["QV_VE29_XZB37"].columns.find((col: any) => col.field == 'percentageParticipants');
if (column_VA_CHECKBOXOAJDOYG_553221 != undefined) {
const tplCell_VA_CHECKBOXOAJDOYG_553221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_CHECKBOXOAJDOYG_553221');
column_VA_CHECKBOXOAJDOYG_553221.properties.cellTemplate = tplCell_VA_CHECKBOXOAJDOYG_553221?.templateRef;
const tplEdit_VA_CHECKBOXOAJDOYG_553221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_CHECKBOXOAJDOYG_553221');
column_VA_CHECKBOXOAJDOYG_553221.properties.editTemplate = tplEdit_VA_CHECKBOXOAJDOYG_553221?.templateRef;
}
const column_VA_TEXTINPUTBOXEVS_762221 = this.metaData.viewState["QV_VE29_XZB37"].columns.find((col: any) => col.field == 'roleP');
if (column_VA_TEXTINPUTBOXEVS_762221 != undefined) {
const tplCell_VA_TEXTINPUTBOXEVS_762221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXEVS_762221');
column_VA_TEXTINPUTBOXEVS_762221.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXEVS_762221?.templateRef;
const tplEdit_VA_TEXTINPUTBOXEVS_762221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXEVS_762221');
column_VA_TEXTINPUTBOXEVS_762221.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXEVS_762221?.templateRef;
}
const column_VA_TEXTINPUTBOXBBV_472221 = this.metaData.viewState["QV_VE29_XZB37"].columns.find((col: any) => col.field == 'mail');
if (column_VA_TEXTINPUTBOXBBV_472221 != undefined) {
const tplCell_VA_TEXTINPUTBOXBBV_472221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXBBV_472221');
column_VA_TEXTINPUTBOXBBV_472221.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXBBV_472221?.templateRef;
const tplEdit_VA_TEXTINPUTBOXBBV_472221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXBBV_472221');
column_VA_TEXTINPUTBOXBBV_472221.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXBBV_472221?.templateRef;
}
const column_VA_TEXTINPUTBOXXUQ_742221 = this.metaData.viewState["QV_VE29_XZB37"].columns.find((col: any) => col.field == 'amountParticipants');
if (column_VA_TEXTINPUTBOXXUQ_742221 != undefined) {
const tplCell_VA_TEXTINPUTBOXXUQ_742221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXXUQ_742221');
column_VA_TEXTINPUTBOXXUQ_742221.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXXUQ_742221?.templateRef;
const tplEdit_VA_TEXTINPUTBOXXUQ_742221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXXUQ_742221');
column_VA_TEXTINPUTBOXXUQ_742221.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXXUQ_742221?.templateRef;
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
OperationCRUDFormEntity: viewState.T_LNSPRDTSDFSKQ_539.controls.OperationCRUDFormEntity as FormGroup ,
DebtorEntity: viewState.T_LNSPRDTSDFSKQ_539.controls.DebtorEntity as FormGroup ,
OperationEntity: viewState.T_LNSPRDTSDFSKQ_539.controls.OperationEntity as FormGroup ,
SyndicatedList: viewState.T_LNSPRDTSDFSKQ_539.controls.SyndicatedList as FormGroup
};
this.metaData = { moduleId: 'LNSPR', subModuleId: 'OPRTN', taskId: 'T_LNSPRDTSDFSKQ_539', taskVersion: '1.0.0', vcId: 'VC_OPERATIONL_208539', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, true), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/LNSPR/OPRTN/T_LNSPRDTSDFSKQ_539', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ['VA_OFFICIALHKVNOOZ_385221', { filter:"", cobisRequestServerConfig: null, cache: 0 }], ['VA_UBICATIONZGLTDO_878221', { filter:"", cobisRequestServerConfig: null, cache: 0 }], ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ['VA_TYPEOPERATIONNN_788221', { catalogName: 'ca_toperacion', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_MONEYWCCBPJYWVL_470221', { catalogName: 'cl_moneda', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_FINANCIALDESINN_226221', { catalogName: 'cr_destino', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_ECONOMICACTITIV_812221', { catalogName: 'cl_actividad_ec', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_OFFICELAHOKRIFT_376221', { catalogName: 'cl_oficina', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_SECTORNYVKRJHJU_797221', { catalogName: 'cc_sector', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_PLAZODESCRIPCNN_983221', { catalogName: 'ca_tdividendo', filter: "", cobisRequestServerConfig: null, cache: 0 }], ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_YWPR_NOE85', { queryId: 'Q_DEBTORZN_LNSPR', entityName: 'DebtorEntity', filter: "", cobisRequestServerConfig: null, cache: 0, queryMemberParameters:[ ]}], ['QV_VE29_XZB37', { queryId: 'Q_SYNDATCT_WX29', entityName: 'SyndicatedList', filter: "", cobisRequestServerConfig: null, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ [ 'VA_TYPESYNDICATEEE_795221',{ data : [ new CobisModelCatalog ( 'A' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_ADMINISOR_58032') ), new CobisModelCatalog ( 'G' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_AGENTEJJZ_36060') )] }], ]) , label: 'OperationLoansForm' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
