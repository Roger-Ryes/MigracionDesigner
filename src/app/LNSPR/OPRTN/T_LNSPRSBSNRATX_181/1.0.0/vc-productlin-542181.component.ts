//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-productlin-542181.model';
import { ViewState } from './model/vc-productlin-542181-view-state';
import { VcProductlin542181Custom } from './vc-productlin-542181.custom';
import { LNSPRService} from 'src/app/LNSPR/service-modules/LNSPR.service';
@Component({
selector: 'cobis-vc-productlin-542181',
templateUrl: './vc-productlin-542181.component.html'
})
export class VcProductlin542181Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private lnspr: LNSPRService) {
super(new VcProductlin542181Custom(designer.cobisCommons,lnspr), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXGPM_735676 = this.metaData.viewState["QV_QF17_TGN52"].columns.find((col: any) => col.field == 'product');
if (column_VA_TEXTINPUTBOXGPM_735676 != undefined) {
const tplCell_VA_TEXTINPUTBOXGPM_735676 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXGPM_735676');
column_VA_TEXTINPUTBOXGPM_735676.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXGPM_735676?.templateRef;
const tplEdit_VA_TEXTINPUTBOXGPM_735676 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXGPM_735676');
column_VA_TEXTINPUTBOXGPM_735676.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXGPM_735676?.templateRef;
}
const column_VA_TEXTINPUTBOXXWZ_991676 = this.metaData.viewState["QV_QF17_TGN52"].columns.find((col: any) => col.field == 'clientCod');
if (column_VA_TEXTINPUTBOXXWZ_991676 != undefined) {
const tplCell_VA_TEXTINPUTBOXXWZ_991676 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXXWZ_991676');
column_VA_TEXTINPUTBOXXWZ_991676.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXXWZ_991676?.templateRef;
const tplEdit_VA_TEXTINPUTBOXXWZ_991676 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXXWZ_991676');
column_VA_TEXTINPUTBOXXWZ_991676.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXXWZ_991676?.templateRef;
}
const column_VA_TEXTINPUTBOXTMQ_302676 = this.metaData.viewState["QV_QF17_TGN52"].columns.find((col: any) => col.field == 'opType');
if (column_VA_TEXTINPUTBOXTMQ_302676 != undefined) {
const tplCell_VA_TEXTINPUTBOXTMQ_302676 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXTMQ_302676');
column_VA_TEXTINPUTBOXTMQ_302676.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXTMQ_302676?.templateRef;
const tplEdit_VA_TEXTINPUTBOXTMQ_302676 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXTMQ_302676');
column_VA_TEXTINPUTBOXTMQ_302676.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXTMQ_302676?.templateRef;
}
const column_VA_TEXTINPUTBOXWUH_488676 = this.metaData.viewState["QV_QF17_TGN52"].columns.find((col: any) => col.field == 'descCurrency');
if (column_VA_TEXTINPUTBOXWUH_488676 != undefined) {
const tplCell_VA_TEXTINPUTBOXWUH_488676 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXWUH_488676');
column_VA_TEXTINPUTBOXWUH_488676.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXWUH_488676?.templateRef;
const tplEdit_VA_TEXTINPUTBOXWUH_488676 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXWUH_488676');
column_VA_TEXTINPUTBOXWUH_488676.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXWUH_488676?.templateRef;
}
const column_VA_TEXTINPUTBOXFSY_298676 = this.metaData.viewState["QV_QF17_TGN52"].columns.find((col: any) => col.field == 'amount');
if (column_VA_TEXTINPUTBOXFSY_298676 != undefined) {
const tplCell_VA_TEXTINPUTBOXFSY_298676 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXFSY_298676');
column_VA_TEXTINPUTBOXFSY_298676.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXFSY_298676?.templateRef;
const tplEdit_VA_TEXTINPUTBOXFSY_298676 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXFSY_298676');
column_VA_TEXTINPUTBOXFSY_298676.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXFSY_298676?.templateRef;
}
const column_VA_TEXTINPUTBOXGAX_318676 = this.metaData.viewState["QV_QF17_TGN52"].columns.find((col: any) => col.field == 'used');
if (column_VA_TEXTINPUTBOXGAX_318676 != undefined) {
const tplCell_VA_TEXTINPUTBOXGAX_318676 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXGAX_318676');
column_VA_TEXTINPUTBOXGAX_318676.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXGAX_318676?.templateRef;
const tplEdit_VA_TEXTINPUTBOXGAX_318676 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXGAX_318676');
column_VA_TEXTINPUTBOXGAX_318676.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXGAX_318676?.templateRef;
}
const column_VA_TEXTINPUTBOXMJV_319676 = this.metaData.viewState["QV_QF17_TGN52"].columns.find((col: any) => col.field == 'available');
if (column_VA_TEXTINPUTBOXMJV_319676 != undefined) {
const tplCell_VA_TEXTINPUTBOXMJV_319676 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXMJV_319676');
column_VA_TEXTINPUTBOXMJV_319676.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXMJV_319676?.templateRef;
const tplEdit_VA_TEXTINPUTBOXMJV_319676 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXMJV_319676');
column_VA_TEXTINPUTBOXMJV_319676.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXMJV_319676?.templateRef;
}
const column_VA_TEXTINPUTBOXJDM_289676 = this.metaData.viewState["QV_QF17_TGN52"].columns.find((col: any) => col.field == 'controlsAmount');
if (column_VA_TEXTINPUTBOXJDM_289676 != undefined) {
const tplCell_VA_TEXTINPUTBOXJDM_289676 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXJDM_289676');
column_VA_TEXTINPUTBOXJDM_289676.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXJDM_289676?.templateRef;
const tplEdit_VA_TEXTINPUTBOXJDM_289676 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXJDM_289676');
column_VA_TEXTINPUTBOXJDM_289676.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXJDM_289676?.templateRef;
}
const column_VA_TEXTINPUTBOXNPR_928676 = this.metaData.viewState["QV_QF17_TGN52"].columns.find((col: any) => col.field == 'observations');
if (column_VA_TEXTINPUTBOXNPR_928676 != undefined) {
const tplCell_VA_TEXTINPUTBOXNPR_928676 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXNPR_928676');
column_VA_TEXTINPUTBOXNPR_928676.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXNPR_928676?.templateRef;
const tplEdit_VA_TEXTINPUTBOXNPR_928676 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXNPR_928676');
column_VA_TEXTINPUTBOXNPR_928676.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXNPR_928676?.templateRef;
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
ProductLineDistribution: viewState.T_LNSPRSBSNRATX_181.controls.ProductLineDistribution as FormGroup ,
ProductLineDistributionList: viewState.T_LNSPRSBSNRATX_181.controls.ProductLineDistributionList as FormGroup
};
this.metaData = { moduleId: 'LNSPR', subModuleId: 'OPRTN', taskId: 'T_LNSPRSBSNRATX_181', taskVersion: '1.0.0', vcId: 'VC_PRODUCTLIN_542181', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/LNSPR/OPRTN/T_LNSPRSBSNRATX_181', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ['VA_CURRENCYIMFFWXD_243676', { catalogName: 'cl_moneda', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_TEXTINPUTBOXYAX_314676', { catalogName: 'cl_moneda', filter: "", cobisRequestServerConfig: null, cache: 0 , controlGridInfo: { queryViewId: "QV_QF17_TGN52", columnId: "codCurrency" } }], ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['VA_PRODUCTWKWZPDFA_211676', { queryId: 'Q_PRODTSNI_WK98', entityName: '', filter:"", cobisRequestServerConfig: {'filterType':'none'}, cache: 0 }], ['VA_CLIENTCODHNEWWJ_288676', { queryId: 'Q_LINEIERT_DW35', entityName: '', filter:"", cobisRequestServerConfig: {'filterType':'none'}, cache: 0 }], ['VA_OPTYPEACPEUXTGS_100676', { queryId: 'Q_OPEREEOA_SH40', entityName: '', filter:"", cobisRequestServerConfig: {'filterType':'none'}, cache: 0 }], ['VA_OPTYPEPASINULZZ_450676', { queryId: 'Q_OPEREEOA_SH40', entityName: '', filter:"", cobisRequestServerConfig: {'filterType':'none'}, cache: 0 }], ['QV_QF17_TGN52', { queryId: 'Q_PRODLUDT_UJ17', entityName: 'ProductLineDistributionList', filter: "", cobisRequestServerConfig: { pageSize :5 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'ProductLineDistributionForm' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
