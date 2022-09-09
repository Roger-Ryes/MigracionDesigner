//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-loanssegrr-486868.model';
import { ViewState } from './model/vc-loanssegrr-486868-view-state';
import { VcLoanssegrr486868Custom } from './vc-loanssegrr-486868.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-loanssegrr-486868',
templateUrl: './vc-loanssegrr-486868.component.html'
})
export class VcLoanssegrr486868Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcLoanssegrr486868Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXPJQ_765929 = this.metaData.viewState["QV_DF84_XNN39"].columns.find((col: any) => col.field == 'clientName');
if (column_VA_TEXTINPUTBOXPJQ_765929 != undefined) {
const tplCell_VA_TEXTINPUTBOXPJQ_765929 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXPJQ_765929');
column_VA_TEXTINPUTBOXPJQ_765929.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXPJQ_765929?.templateRef;
const tplEdit_VA_TEXTINPUTBOXPJQ_765929 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXPJQ_765929');
column_VA_TEXTINPUTBOXPJQ_765929.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXPJQ_765929?.templateRef;
}
const column_VA_TEXTINPUTBOXWWS_842929 = this.metaData.viewState["QV_DF84_XNN39"].columns.find((col: any) => col.field == 'type');
if (column_VA_TEXTINPUTBOXWWS_842929 != undefined) {
const tplCell_VA_TEXTINPUTBOXWWS_842929 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXWWS_842929');
column_VA_TEXTINPUTBOXWWS_842929.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXWWS_842929?.templateRef;
const tplEdit_VA_TEXTINPUTBOXWWS_842929 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXWWS_842929');
column_VA_TEXTINPUTBOXWWS_842929.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXWWS_842929?.templateRef;
}
const column_VA_TEXTINPUTBOXDST_681929 = this.metaData.viewState["QV_DF84_XNN39"].columns.find((col: any) => col.field == 'amount');
if (column_VA_TEXTINPUTBOXDST_681929 != undefined) {
const tplCell_VA_TEXTINPUTBOXDST_681929 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXDST_681929');
column_VA_TEXTINPUTBOXDST_681929.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXDST_681929?.templateRef;
const tplEdit_VA_TEXTINPUTBOXDST_681929 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXDST_681929');
column_VA_TEXTINPUTBOXDST_681929.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXDST_681929?.templateRef;
}
const column_VA_DATEFIELDDLSZDZ_593929 = this.metaData.viewState["QV_DF84_XNN39"].columns.find((col: any) => col.field == 'dateValidityIni');
if (column_VA_DATEFIELDDLSZDZ_593929 != undefined) {
const tplCell_VA_DATEFIELDDLSZDZ_593929 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DATEFIELDDLSZDZ_593929');
column_VA_DATEFIELDDLSZDZ_593929.properties.cellTemplate = tplCell_VA_DATEFIELDDLSZDZ_593929?.templateRef;
const tplEdit_VA_DATEFIELDDLSZDZ_593929 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DATEFIELDDLSZDZ_593929');
column_VA_DATEFIELDDLSZDZ_593929.properties.editTemplate = tplEdit_VA_DATEFIELDDLSZDZ_593929?.templateRef;
}
const column_VA_DATEFIELDLZIUTE_366929 = this.metaData.viewState["QV_DF84_XNN39"].columns.find((col: any) => col.field == 'dateValidityFin');
if (column_VA_DATEFIELDLZIUTE_366929 != undefined) {
const tplCell_VA_DATEFIELDLZIUTE_366929 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DATEFIELDLZIUTE_366929');
column_VA_DATEFIELDLZIUTE_366929.properties.cellTemplate = tplCell_VA_DATEFIELDLZIUTE_366929?.templateRef;
const tplEdit_VA_DATEFIELDLZIUTE_366929 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DATEFIELDLZIUTE_366929');
column_VA_DATEFIELDLZIUTE_366929.properties.editTemplate = tplEdit_VA_DATEFIELDLZIUTE_366929?.templateRef;
}
const column_VA_TEXTINPUTBOXPLX_826929 = this.metaData.viewState["QV_DF84_XNN39"].columns.find((col: any) => col.field == 'folio');
if (column_VA_TEXTINPUTBOXPLX_826929 != undefined) {
const tplCell_VA_TEXTINPUTBOXPLX_826929 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXPLX_826929');
column_VA_TEXTINPUTBOXPLX_826929.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXPLX_826929?.templateRef;
const tplEdit_VA_TEXTINPUTBOXPLX_826929 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXPLX_826929');
column_VA_TEXTINPUTBOXPLX_826929.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXPLX_826929?.templateRef;
}
const column_VA_TEXTINPUTBOXLNM_225929 = this.metaData.viewState["QV_DF84_XNN39"].columns.find((col: any) => col.field == 'statusDesc');
if (column_VA_TEXTINPUTBOXLNM_225929 != undefined) {
const tplCell_VA_TEXTINPUTBOXLNM_225929 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXLNM_225929');
column_VA_TEXTINPUTBOXLNM_225929.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXLNM_225929?.templateRef;
const tplEdit_VA_TEXTINPUTBOXLNM_225929 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXLNM_225929');
column_VA_TEXTINPUTBOXLNM_225929.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXLNM_225929?.templateRef;
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
Seguros: viewState.T_ASSTSQMEVBPIH_868.controls.Seguros as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'QERYS', taskId: 'T_ASSTSQMEVBPIH_868', taskVersion: '1.0.0', vcId: 'VC_LOANSSEGRR_486868', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(false, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/QERYS/T_ASSTSQMEVBPIH_868', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_DF84_XNN39', { queryId: 'Q_SEGUSSRS_HF84', entityName: 'Seguros', filter: "", cobisRequestServerConfig: { pageSize :10 }, cache: 0, queryMemberParameters:[ {aliasQueryMember:'loanBankID' } , ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'QueryLoansSeguro' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
