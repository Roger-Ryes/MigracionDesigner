//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-loansdismm-305194.model';
import { ViewState } from './model/vc-loansdismm-305194-view-state';
import { VcLoansdismm305194Custom } from './vc-loansdismm-305194.custom';
import { LNSPRService} from 'src/app/LNSPR/service-modules/LNSPR.service';
@Component({
selector: 'cobis-vc-loansdismm-305194',
templateUrl: './vc-loansdismm-305194.component.html'
})
export class VcLoansdismm305194Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private lnspr: LNSPRService) {
super(new VcLoansdismm305194Custom(designer.cobisCommons,lnspr), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXLAB_524520 = this.metaData.viewState["QV_NW92_QCN40"].columns.find((col: any) => col.field == 'member');
if (column_VA_TEXTINPUTBOXLAB_524520 != undefined) {
const tplCell_VA_TEXTINPUTBOXLAB_524520 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXLAB_524520');
column_VA_TEXTINPUTBOXLAB_524520.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXLAB_524520?.templateRef;
const tplEdit_VA_TEXTINPUTBOXLAB_524520 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXLAB_524520');
column_VA_TEXTINPUTBOXLAB_524520.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXLAB_524520?.templateRef;
}
const column_VA_TEXTINPUTBOXDRG_443520 = this.metaData.viewState["QV_NW92_QCN40"].columns.find((col: any) => col.field == 'currency');
if (column_VA_TEXTINPUTBOXDRG_443520 != undefined) {
const tplCell_VA_TEXTINPUTBOXDRG_443520 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXDRG_443520');
column_VA_TEXTINPUTBOXDRG_443520.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXDRG_443520?.templateRef;
const tplEdit_VA_TEXTINPUTBOXDRG_443520 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXDRG_443520');
column_VA_TEXTINPUTBOXDRG_443520.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXDRG_443520?.templateRef;
}
const column_VA_TEXTINPUTBOXOYO_569520 = this.metaData.viewState["QV_NW92_QCN40"].columns.find((col: any) => col.field == 'amount');
if (column_VA_TEXTINPUTBOXOYO_569520 != undefined) {
const tplCell_VA_TEXTINPUTBOXOYO_569520 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXOYO_569520');
column_VA_TEXTINPUTBOXOYO_569520.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXOYO_569520?.templateRef;
const tplEdit_VA_TEXTINPUTBOXOYO_569520 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXOYO_569520');
column_VA_TEXTINPUTBOXOYO_569520.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXOYO_569520?.templateRef;
}
const column_VA_TEXTINPUTBOXSNW_442520 = this.metaData.viewState["QV_NW92_QCN40"].columns.find((col: any) => col.field == 'used');
if (column_VA_TEXTINPUTBOXSNW_442520 != undefined) {
const tplCell_VA_TEXTINPUTBOXSNW_442520 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXSNW_442520');
column_VA_TEXTINPUTBOXSNW_442520.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXSNW_442520?.templateRef;
const tplEdit_VA_TEXTINPUTBOXSNW_442520 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXSNW_442520');
column_VA_TEXTINPUTBOXSNW_442520.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXSNW_442520?.templateRef;
}
const column_VA_TEXTINPUTBOXNMX_649520 = this.metaData.viewState["QV_NW92_QCN40"].columns.find((col: any) => col.field == 'available');
if (column_VA_TEXTINPUTBOXNMX_649520 != undefined) {
const tplCell_VA_TEXTINPUTBOXNMX_649520 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXNMX_649520');
column_VA_TEXTINPUTBOXNMX_649520.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXNMX_649520?.templateRef;
const tplEdit_VA_TEXTINPUTBOXNMX_649520 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXNMX_649520');
column_VA_TEXTINPUTBOXNMX_649520.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXNMX_649520?.templateRef;
}
const column_VA_TEXTINPUTBOXOXC_144520 = this.metaData.viewState["QV_NW92_QCN40"].columns.find((col: any) => col.field == 'controlAmount');
if (column_VA_TEXTINPUTBOXOXC_144520 != undefined) {
const tplCell_VA_TEXTINPUTBOXOXC_144520 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXOXC_144520');
column_VA_TEXTINPUTBOXOXC_144520.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXOXC_144520?.templateRef;
const tplEdit_VA_TEXTINPUTBOXOXC_144520 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXOXC_144520');
column_VA_TEXTINPUTBOXOXC_144520.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXOXC_144520?.templateRef;
}
const column_VA_TEXTINPUTBOXQNR_943520 = this.metaData.viewState["QV_NW92_QCN40"].columns.find((col: any) => col.field == 'observations');
if (column_VA_TEXTINPUTBOXQNR_943520 != undefined) {
const tplCell_VA_TEXTINPUTBOXQNR_943520 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXQNR_943520');
column_VA_TEXTINPUTBOXQNR_943520.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXQNR_943520?.templateRef;
const tplEdit_VA_TEXTINPUTBOXQNR_943520 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXQNR_943520');
column_VA_TEXTINPUTBOXQNR_943520.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXQNR_943520?.templateRef;
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
Members: viewState.T_LNSPRNBKRHAIB_194.controls.Members as FormGroup ,
MemberDetail: viewState.T_LNSPRNBKRHAIB_194.controls.MemberDetail as FormGroup
};
this.metaData = { moduleId: 'LNSPR', subModuleId: 'OPRTN', taskId: 'T_LNSPRNBKRHAIB_194', taskVersion: '1.0.0', vcId: 'VC_LOANSDISMM_305194', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/LNSPR/OPRTN/T_LNSPRNBKRHAIB_194', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ['VA_3878VMYWQJKGBUI_207520', { catalogName: 'cl_moneda', filter: "", cobisRequestServerConfig: null, cache: 0 }], ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['VA_MEMBERXNGXBGLEO_835520', { queryId: 'Q_GROUEIRS_WN63', entityName: '', filter:"", cobisRequestServerConfig: {'filterType':'none'}, cache: 0 }], ['QV_NW92_QCN40', { queryId: 'Q_MEMBIAAA_BE92', entityName: 'MemberDetail', filter: "", cobisRequestServerConfig: { pageSize :5 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'LoansDistributionMembers' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
