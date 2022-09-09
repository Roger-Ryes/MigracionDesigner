//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-loanitemss-778957.model';
import { ViewState } from './model/vc-loanitemss-778957-view-state';
import { VcLoanitemss778957Custom } from './vc-loanitemss-778957.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-loanitemss-778957',
templateUrl: './vc-loanitemss-778957.component.html'
})
export class VcLoanitemss778957Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcLoanitemss778957Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXZNG_253116 = this.metaData.viewState["QV_FL15_OEC17"].columns.find((col: any) => col.field == 'item');
if (column_VA_TEXTINPUTBOXZNG_253116 != undefined) {
const tplCell_VA_TEXTINPUTBOXZNG_253116 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXZNG_253116');
column_VA_TEXTINPUTBOXZNG_253116.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXZNG_253116?.templateRef;
const tplEdit_VA_TEXTINPUTBOXZNG_253116 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXZNG_253116');
column_VA_TEXTINPUTBOXZNG_253116.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXZNG_253116?.templateRef;
}
const column_VA_TEXTINPUTBOXXAO_213116 = this.metaData.viewState["QV_FL15_OEC17"].columns.find((col: any) => col.field == 'description');
if (column_VA_TEXTINPUTBOXXAO_213116 != undefined) {
const tplCell_VA_TEXTINPUTBOXXAO_213116 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXXAO_213116');
column_VA_TEXTINPUTBOXXAO_213116.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXXAO_213116?.templateRef;
const tplEdit_VA_TEXTINPUTBOXXAO_213116 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXXAO_213116');
column_VA_TEXTINPUTBOXXAO_213116.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXXAO_213116?.templateRef;
}
const column_VA_TEXTINPUTBOXAWL_778116 = this.metaData.viewState["QV_FL15_OEC17"].columns.find((col: any) => col.field == 'typeItem');
if (column_VA_TEXTINPUTBOXAWL_778116 != undefined) {
const tplCell_VA_TEXTINPUTBOXAWL_778116 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXAWL_778116');
column_VA_TEXTINPUTBOXAWL_778116.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXAWL_778116?.templateRef;
const tplEdit_VA_TEXTINPUTBOXAWL_778116 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXAWL_778116');
column_VA_TEXTINPUTBOXAWL_778116.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXAWL_778116?.templateRef;
}
const column_VA_COMBOBOXZFLUYZQ_585116 = this.metaData.viewState["QV_FL15_OEC17"].columns.find((col: any) => col.field == 'paymentMethod');
if (column_VA_COMBOBOXZFLUYZQ_585116 != undefined) {
const tplCell_VA_COMBOBOXZFLUYZQ_585116 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_COMBOBOXZFLUYZQ_585116');
column_VA_COMBOBOXZFLUYZQ_585116.properties.cellTemplate = tplCell_VA_COMBOBOXZFLUYZQ_585116?.templateRef;
const tplEdit_VA_COMBOBOXZFLUYZQ_585116 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_COMBOBOXZFLUYZQ_585116');
column_VA_COMBOBOXZFLUYZQ_585116.properties.editTemplate = tplEdit_VA_COMBOBOXZFLUYZQ_585116?.templateRef;
}
const column_VA_COMBOBOXOSALCHV_886116 = this.metaData.viewState["QV_FL15_OEC17"].columns.find((col: any) => col.field == 'signo');
if (column_VA_COMBOBOXOSALCHV_886116 != undefined) {
const tplCell_VA_COMBOBOXOSALCHV_886116 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_COMBOBOXOSALCHV_886116');
column_VA_COMBOBOXOSALCHV_886116.properties.cellTemplate = tplCell_VA_COMBOBOXOSALCHV_886116?.templateRef;
const tplEdit_VA_COMBOBOXOSALCHV_886116 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_COMBOBOXOSALCHV_886116');
column_VA_COMBOBOXOSALCHV_886116.properties.editTemplate = tplEdit_VA_COMBOBOXOSALCHV_886116?.templateRef;
}
const column_VA_TEXTINPUTBOXVXI_250116 = this.metaData.viewState["QV_FL15_OEC17"].columns.find((col: any) => col.field == 'priority');
if (column_VA_TEXTINPUTBOXVXI_250116 != undefined) {
const tplCell_VA_TEXTINPUTBOXVXI_250116 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXVXI_250116');
column_VA_TEXTINPUTBOXVXI_250116.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXVXI_250116?.templateRef;
const tplEdit_VA_TEXTINPUTBOXVXI_250116 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXVXI_250116');
column_VA_TEXTINPUTBOXVXI_250116.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXVXI_250116?.templateRef;
}
const column_VA_TEXTINPUTBOXYJB_774116 = this.metaData.viewState["QV_FL15_OEC17"].columns.find((col: any) => col.field == 'factor');
if (column_VA_TEXTINPUTBOXYJB_774116 != undefined) {
const tplCell_VA_TEXTINPUTBOXYJB_774116 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXYJB_774116');
column_VA_TEXTINPUTBOXYJB_774116.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXYJB_774116?.templateRef;
const tplEdit_VA_TEXTINPUTBOXYJB_774116 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXYJB_774116');
column_VA_TEXTINPUTBOXYJB_774116.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXYJB_774116?.templateRef;
}
const column_VA_TEXTINPUTBOXIMW_617116 = this.metaData.viewState["QV_FL15_OEC17"].columns.find((col: any) => col.field == 'reference');
if (column_VA_TEXTINPUTBOXIMW_617116 != undefined) {
const tplCell_VA_TEXTINPUTBOXIMW_617116 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXIMW_617116');
column_VA_TEXTINPUTBOXIMW_617116.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXIMW_617116?.templateRef;
const tplEdit_VA_TEXTINPUTBOXIMW_617116 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXIMW_617116');
column_VA_TEXTINPUTBOXIMW_617116.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXIMW_617116?.templateRef;
}
const column_VA_COMBOBOXONGSBYC_922116 = this.metaData.viewState["QV_FL15_OEC17"].columns.find((col: any) => col.field == 'signReadjustment');
if (column_VA_COMBOBOXONGSBYC_922116 != undefined) {
const tplCell_VA_COMBOBOXONGSBYC_922116 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_COMBOBOXONGSBYC_922116');
column_VA_COMBOBOXONGSBYC_922116.properties.cellTemplate = tplCell_VA_COMBOBOXONGSBYC_922116?.templateRef;
const tplEdit_VA_COMBOBOXONGSBYC_922116 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_COMBOBOXONGSBYC_922116');
column_VA_COMBOBOXONGSBYC_922116.properties.editTemplate = tplEdit_VA_COMBOBOXONGSBYC_922116?.templateRef;
}
const column_VA_TEXTINPUTBOXOSD_293116 = this.metaData.viewState["QV_FL15_OEC17"].columns.find((col: any) => col.field == 'referenceReadjustment');
if (column_VA_TEXTINPUTBOXOSD_293116 != undefined) {
const tplCell_VA_TEXTINPUTBOXOSD_293116 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXOSD_293116');
column_VA_TEXTINPUTBOXOSD_293116.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXOSD_293116?.templateRef;
const tplEdit_VA_TEXTINPUTBOXOSD_293116 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXOSD_293116');
column_VA_TEXTINPUTBOXOSD_293116.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXOSD_293116?.templateRef;
}
const column_VA_TEXTINPUTBOXAOJ_660116 = this.metaData.viewState["QV_FL15_OEC17"].columns.find((col: any) => col.field == 'factorReadjustment');
if (column_VA_TEXTINPUTBOXAOJ_660116 != undefined) {
const tplCell_VA_TEXTINPUTBOXAOJ_660116 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXAOJ_660116');
column_VA_TEXTINPUTBOXAOJ_660116.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXAOJ_660116?.templateRef;
const tplEdit_VA_TEXTINPUTBOXAOJ_660116 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXAOJ_660116');
column_VA_TEXTINPUTBOXAOJ_660116.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXAOJ_660116?.templateRef;
}
const column_VA_TEXTINPUTBOXYOR_905116 = this.metaData.viewState["QV_FL15_OEC17"].columns.find((col: any) => col.field == 'calculationBase');
if (column_VA_TEXTINPUTBOXYOR_905116 != undefined) {
const tplCell_VA_TEXTINPUTBOXYOR_905116 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXYOR_905116');
column_VA_TEXTINPUTBOXYOR_905116.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXYOR_905116?.templateRef;
const tplEdit_VA_TEXTINPUTBOXYOR_905116 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXYOR_905116');
column_VA_TEXTINPUTBOXYOR_905116.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXYOR_905116?.templateRef;
}
const column_VA_TEXTINPUTBOXJKV_990116 = this.metaData.viewState["QV_FL15_OEC17"].columns.find((col: any) => col.field == 'amount');
if (column_VA_TEXTINPUTBOXJKV_990116 != undefined) {
const tplCell_VA_TEXTINPUTBOXJKV_990116 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXJKV_990116');
column_VA_TEXTINPUTBOXJKV_990116.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXJKV_990116?.templateRef;
const tplEdit_VA_TEXTINPUTBOXJKV_990116 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXJKV_990116');
column_VA_TEXTINPUTBOXJKV_990116.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXJKV_990116?.templateRef;
}
const column_VA_TEXTINPUTBOXTSW_966116 = this.metaData.viewState["QV_FL15_OEC17"].columns.find((col: any) => col.field == 'percentage');
if (column_VA_TEXTINPUTBOXTSW_966116 != undefined) {
const tplCell_VA_TEXTINPUTBOXTSW_966116 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXTSW_966116');
column_VA_TEXTINPUTBOXTSW_966116.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXTSW_966116?.templateRef;
const tplEdit_VA_TEXTINPUTBOXTSW_966116 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXTSW_966116');
column_VA_TEXTINPUTBOXTSW_966116.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXTSW_966116?.templateRef;
}
const column_VA_COMBOBOXVAJAEZI_442116 = this.metaData.viewState["QV_FL15_OEC17"].columns.find((col: any) => col.field == 'financed');
if (column_VA_COMBOBOXVAJAEZI_442116 != undefined) {
const tplCell_VA_COMBOBOXVAJAEZI_442116 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_COMBOBOXVAJAEZI_442116');
column_VA_COMBOBOXVAJAEZI_442116.properties.cellTemplate = tplCell_VA_COMBOBOXVAJAEZI_442116?.templateRef;
const tplEdit_VA_COMBOBOXVAJAEZI_442116 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_COMBOBOXVAJAEZI_442116');
column_VA_COMBOBOXVAJAEZI_442116.properties.editTemplate = tplEdit_VA_COMBOBOXVAJAEZI_442116?.templateRef;
}
const column_VA_TEXTINPUTBOXORP_574116 = this.metaData.viewState["QV_FL15_OEC17"].columns.find((col: any) => col.field == 'minRate');
if (column_VA_TEXTINPUTBOXORP_574116 != undefined) {
const tplCell_VA_TEXTINPUTBOXORP_574116 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXORP_574116');
column_VA_TEXTINPUTBOXORP_574116.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXORP_574116?.templateRef;
const tplEdit_VA_TEXTINPUTBOXORP_574116 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXORP_574116');
column_VA_TEXTINPUTBOXORP_574116.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXORP_574116?.templateRef;
}
const column_VA_TEXTINPUTBOXCQL_961116 = this.metaData.viewState["QV_FL15_OEC17"].columns.find((col: any) => col.field == 'maxRate');
if (column_VA_TEXTINPUTBOXCQL_961116 != undefined) {
const tplCell_VA_TEXTINPUTBOXCQL_961116 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXCQL_961116');
column_VA_TEXTINPUTBOXCQL_961116.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXCQL_961116?.templateRef;
const tplEdit_VA_TEXTINPUTBOXCQL_961116 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXCQL_961116');
column_VA_TEXTINPUTBOXCQL_961116.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXCQL_961116?.templateRef;
}
const column_VA_TEXTINPUTBOXBEM_346116 = this.metaData.viewState["QV_FL15_OEC17"].columns.find((col: any) => col.field == 'associate');
if (column_VA_TEXTINPUTBOXBEM_346116 != undefined) {
const tplCell_VA_TEXTINPUTBOXBEM_346116 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXBEM_346116');
column_VA_TEXTINPUTBOXBEM_346116.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXBEM_346116?.templateRef;
const tplEdit_VA_TEXTINPUTBOXBEM_346116 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXBEM_346116');
column_VA_TEXTINPUTBOXBEM_346116.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXBEM_346116?.templateRef;
}
const column_VA_TEXTINPUTBOXVRP_738116 = this.metaData.viewState["QV_FL15_OEC17"].columns.find((col: any) => col.field == 'associateValue');
if (column_VA_TEXTINPUTBOXVRP_738116 != undefined) {
const tplCell_VA_TEXTINPUTBOXVRP_738116 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXVRP_738116');
column_VA_TEXTINPUTBOXVRP_738116.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXVRP_738116?.templateRef;
const tplEdit_VA_TEXTINPUTBOXVRP_738116 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXVRP_738116');
column_VA_TEXTINPUTBOXVRP_738116.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXVRP_738116?.templateRef;
}
const column_VA_TEXTINPUTBOXWEZ_892116 = this.metaData.viewState["QV_FL15_OEC17"].columns.find((col: any) => col.field == 'insurance');
if (column_VA_TEXTINPUTBOXWEZ_892116 != undefined) {
const tplCell_VA_TEXTINPUTBOXWEZ_892116 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXWEZ_892116');
column_VA_TEXTINPUTBOXWEZ_892116.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXWEZ_892116?.templateRef;
const tplEdit_VA_TEXTINPUTBOXWEZ_892116 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXWEZ_892116');
column_VA_TEXTINPUTBOXWEZ_892116.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXWEZ_892116?.templateRef;
}
const column_VA_TEXTINPUTBOXWKW_397116 = this.metaData.viewState["QV_FL15_OEC17"].columns.find((col: any) => col.field == 'insuranceType');
if (column_VA_TEXTINPUTBOXWKW_397116 != undefined) {
const tplCell_VA_TEXTINPUTBOXWKW_397116 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXWKW_397116');
column_VA_TEXTINPUTBOXWKW_397116.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXWKW_397116?.templateRef;
const tplEdit_VA_TEXTINPUTBOXWKW_397116 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXWKW_397116');
column_VA_TEXTINPUTBOXWKW_397116.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXWKW_397116?.templateRef;
}
const column_VA_TEXTINPUTBOXECB_925116 = this.metaData.viewState["QV_FL15_OEC17"].columns.find((col: any) => col.field == 'rank');
if (column_VA_TEXTINPUTBOXECB_925116 != undefined) {
const tplCell_VA_TEXTINPUTBOXECB_925116 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXECB_925116');
column_VA_TEXTINPUTBOXECB_925116.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXECB_925116?.templateRef;
const tplEdit_VA_TEXTINPUTBOXECB_925116 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXECB_925116');
column_VA_TEXTINPUTBOXECB_925116.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXECB_925116?.templateRef;
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
LoanItemsList: viewState.T_ASSTSDXZMZWIL_957.controls.LoanItemsList as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'MNTNN', taskId: 'T_ASSTSDXZMZWIL_957', taskVersion: '1.0.0', vcId: 'VC_LOANITEMSS_778957', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(false, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/MNTNN/T_ASSTSDXZMZWIL_957', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ['VA_TEXTINPUTBOXWEZ_892116', { catalogName: 'cu_des_aseguradora', filter: "", cobisRequestServerConfig: null, cache: 0 , controlGridInfo: { queryViewId: "QV_FL15_OEC17", columnId: "insurance" } }], ['VA_TEXTINPUTBOXWKW_397116', { catalogName: 'cu_tipo_seguro', filter: "", cobisRequestServerConfig: null, cache: 0 , controlGridInfo: { queryViewId: "QV_FL15_OEC17", columnId: "insuranceType" } }], ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_FL15_OEC17', { queryId: 'Q_LOANMSEM_ZL15', entityName: 'LoanItemsList', filter: "", cobisRequestServerConfig: { pageSize :5 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ [ 'VA_COMBOBOXZFLUYZQ_585116',{ data : [ new CobisModelCatalog ( 'P' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_PERIDICAA_14004') ), new CobisModelCatalog ( 'L' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_ENELDESEO_77264') ), new CobisModelCatalog ( 'M' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_MULTAOTRR_71146') ), new CobisModelCatalog ( 'F' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_FINANCIDD_35713') ), new CobisModelCatalog ( 'A' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_ANTICIPDD_31369') ), new CobisModelCatalog ( 'B' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_ANTICIPTD_37731') )] , controlGridInfo: { queryViewId: "QV_FL15_OEC17", columnId: "paymentMethod" } }], [ 'VA_COMBOBOXOSALCHV_886116',{ data : [ new CobisModelCatalog ( '+' , '+' ), new CobisModelCatalog ( '-' , '-' ), new CobisModelCatalog ( '*' , '*' ), new CobisModelCatalog ( '/' , '/' )] , controlGridInfo: { queryViewId: "QV_FL15_OEC17", columnId: "signo" } }], [ 'VA_COMBOBOXONGSBYC_922116',{ data : [ new CobisModelCatalog ( '+' , '+' ), new CobisModelCatalog ( '-' , '-' ), new CobisModelCatalog ( '*' , '*' ), new CobisModelCatalog ( '/' , '/' )] , controlGridInfo: { queryViewId: "QV_FL15_OEC17", columnId: "signReadjustment" } }], [ 'VA_COMBOBOXVAJAEZI_442116',{ data : [ new CobisModelCatalog ( 'S' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_SIJWWZUQL_76896') ), new CobisModelCatalog ( 'N' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_NOTNCMKBQ_41776') )] , controlGridInfo: { queryViewId: "QV_FL15_OEC17", columnId: "financed" } }], ]) , label: 'LoanItemsForm' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
