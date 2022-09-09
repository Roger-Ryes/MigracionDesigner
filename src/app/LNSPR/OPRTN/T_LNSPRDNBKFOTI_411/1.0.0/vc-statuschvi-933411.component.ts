//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-statuschvi-933411.model';
import { ViewState } from './model/vc-statuschvi-933411-view-state';
import { VcStatuschvi933411Custom } from './vc-statuschvi-933411.custom';
import { LNSPRService} from 'src/app/LNSPR/service-modules/LNSPR.service';
@Component({
selector: 'cobis-vc-statuschvi-933411',
templateUrl: './vc-statuschvi-933411.component.html'
})
export class VcStatuschvi933411Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private lnspr: LNSPRService) {
super(new VcStatuschvi933411Custom(designer.cobisCommons,lnspr), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXZSM_763293 = this.metaData.viewState["QV_TP50_URT26"].columns.find((col: any) => col.field == 'desOperationType');
if (column_VA_TEXTINPUTBOXZSM_763293 != undefined) {
const tplCell_VA_TEXTINPUTBOXZSM_763293 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXZSM_763293');
column_VA_TEXTINPUTBOXZSM_763293.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXZSM_763293?.templateRef;
const tplEdit_VA_TEXTINPUTBOXZSM_763293 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXZSM_763293');
column_VA_TEXTINPUTBOXZSM_763293.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXZSM_763293?.templateRef;
}
const column_VA_TEXTINPUTBOXHFD_192293 = this.metaData.viewState["QV_TP50_URT26"].columns.find((col: any) => col.field == 'loanBankID');
if (column_VA_TEXTINPUTBOXHFD_192293 != undefined) {
const tplCell_VA_TEXTINPUTBOXHFD_192293 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXHFD_192293');
column_VA_TEXTINPUTBOXHFD_192293.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXHFD_192293?.templateRef;
const tplEdit_VA_TEXTINPUTBOXHFD_192293 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXHFD_192293');
column_VA_TEXTINPUTBOXHFD_192293.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXHFD_192293?.templateRef;
}
const column_VA_TEXTINPUTBOXBLY_505293 = this.metaData.viewState["QV_TP50_URT26"].columns.find((col: any) => col.field == 'clientCode');
if (column_VA_TEXTINPUTBOXBLY_505293 != undefined) {
const tplCell_VA_TEXTINPUTBOXBLY_505293 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXBLY_505293');
column_VA_TEXTINPUTBOXBLY_505293.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXBLY_505293?.templateRef;
const tplEdit_VA_TEXTINPUTBOXBLY_505293 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXBLY_505293');
column_VA_TEXTINPUTBOXBLY_505293.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXBLY_505293?.templateRef;
}
const column_VA_TEXTINPUTBOXGED_407293 = this.metaData.viewState["QV_TP50_URT26"].columns.find((col: any) => col.field == 'client');
if (column_VA_TEXTINPUTBOXGED_407293 != undefined) {
const tplCell_VA_TEXTINPUTBOXGED_407293 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXGED_407293');
column_VA_TEXTINPUTBOXGED_407293.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXGED_407293?.templateRef;
const tplEdit_VA_TEXTINPUTBOXGED_407293 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXGED_407293');
column_VA_TEXTINPUTBOXGED_407293.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXGED_407293?.templateRef;
}
const column_VA_TEXTINPUTBOXDJF_550293 = this.metaData.viewState["QV_TP50_URT26"].columns.find((col: any) => col.field == 'amount');
if (column_VA_TEXTINPUTBOXDJF_550293 != undefined) {
const tplCell_VA_TEXTINPUTBOXDJF_550293 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXDJF_550293');
column_VA_TEXTINPUTBOXDJF_550293.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXDJF_550293?.templateRef;
const tplEdit_VA_TEXTINPUTBOXDJF_550293 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXDJF_550293');
column_VA_TEXTINPUTBOXDJF_550293.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXDJF_550293?.templateRef;
}
const column_VA_TEXTINPUTBOXRKM_748293 = this.metaData.viewState["QV_TP50_URT26"].columns.find((col: any) => col.field == 'state');
if (column_VA_TEXTINPUTBOXRKM_748293 != undefined) {
const tplCell_VA_TEXTINPUTBOXRKM_748293 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXRKM_748293');
column_VA_TEXTINPUTBOXRKM_748293.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXRKM_748293?.templateRef;
const tplEdit_VA_TEXTINPUTBOXRKM_748293 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXRKM_748293');
column_VA_TEXTINPUTBOXRKM_748293.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXRKM_748293?.templateRef;
}
const column_VA_TEXTINPUTBOXELE_418293 = this.metaData.viewState["QV_TP50_URT26"].columns.find((col: any) => col.field == 'currency');
if (column_VA_TEXTINPUTBOXELE_418293 != undefined) {
const tplCell_VA_TEXTINPUTBOXELE_418293 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXELE_418293');
column_VA_TEXTINPUTBOXELE_418293.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXELE_418293?.templateRef;
const tplEdit_VA_TEXTINPUTBOXELE_418293 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXELE_418293');
column_VA_TEXTINPUTBOXELE_418293.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXELE_418293?.templateRef;
}
const column_VA_TEXTINPUTBOXVHW_271293 = this.metaData.viewState["QV_TP50_URT26"].columns.find((col: any) => col.field == 'numProcedure');
if (column_VA_TEXTINPUTBOXVHW_271293 != undefined) {
const tplCell_VA_TEXTINPUTBOXVHW_271293 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXVHW_271293');
column_VA_TEXTINPUTBOXVHW_271293.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXVHW_271293?.templateRef;
const tplEdit_VA_TEXTINPUTBOXVHW_271293 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXVHW_271293');
column_VA_TEXTINPUTBOXVHW_271293.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXVHW_271293?.templateRef;
}
const column_VA_TEXTINPUTBOXRUJ_835293 = this.metaData.viewState["QV_TP50_URT26"].columns.find((col: any) => col.field == 'descriptionMistake');
if (column_VA_TEXTINPUTBOXRUJ_835293 != undefined) {
const tplCell_VA_TEXTINPUTBOXRUJ_835293 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXRUJ_835293');
column_VA_TEXTINPUTBOXRUJ_835293.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXRUJ_835293?.templateRef;
const tplEdit_VA_TEXTINPUTBOXRUJ_835293 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXRUJ_835293');
column_VA_TEXTINPUTBOXRUJ_835293.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXRUJ_835293?.templateRef;
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
LoanSearchFilter: viewState.T_LNSPRDNBKFOTI_411.controls.LoanSearchFilter as FormGroup ,
StatesAssetsLoan: viewState.T_LNSPRDNBKFOTI_411.controls.StatesAssetsLoan as FormGroup ,
LoanList: viewState.T_LNSPRDNBKFOTI_411.controls.LoanList as FormGroup
};
this.metaData = { moduleId: 'LNSPR', subModuleId: 'OPRTN', taskId: 'T_LNSPRDNBKFOTI_411', taskVersion: '1.0.0', vcId: 'VC_STATUSCHVI_933411', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, true), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/LNSPR/OPRTN/T_LNSPRDNBKFOTI_411', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ['VA_OFFICEOKJCKNOJM_266293', { catalogName: 'cl_oficina', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_CODCURRENCYNEWR_137293', { catalogName: 'cl_moneda', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_TYPEFPEZUZQRCCT_308293', { catalogName: 'ca_toperacion', filter: "", cobisRequestServerConfig: null, cache: 0 }], ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['VA_STATESICWPQOPFM_485293', { queryId: 'Q_STATSTSS_LA52', entityName: '', filter:"", cobisRequestServerConfig: {'filterType':'none'}, cache: 0 }], ['VA_DESCSTATUSKOPMT_184293', { queryId: 'Q_STATSTTL_MS41', entityName: '', filter:"", cobisRequestServerConfig: {'filterType':'none'}, cache: 0 }], ['QV_TP50_URT26', { queryId: 'Q_LOANSILT_NX50', entityName: 'LoanList', filter: "", cobisRequestServerConfig: { pageSize :10 }, cache: 0, queryMemberParameters:[ {aliasQueryMember:'loanBankID' } , {aliasQueryMember:'state' } , {aliasQueryMember:'currency' } , {aliasQueryMember:'numProcedure' } , {aliasQueryMember:'disbursementDate' } , {aliasQueryMember:'migratedOperation' } , {aliasQueryMember:'officer' } , {aliasQueryMember:'office' } , {aliasQueryMember:'typeClass' } , {aliasQueryMember:'operation' } , {aliasQueryMember:'process' } , {aliasQueryMember:'type' } , {aliasQueryMember:'categoryGroup' } , {aliasQueryMember:'condition' } , {aliasQueryMember:'oficial' } , {aliasQueryMember:'historical' } , {aliasQueryMember:'daysPastDue' } , {aliasQueryMember:'numIdentification' } ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'LNSPR.LBL_LNSPR_CAMBIOEVD_13994' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
