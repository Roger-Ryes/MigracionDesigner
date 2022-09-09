//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-transacton-836272.model';
import { ViewState } from './model/vc-transacton-836272-view-state';
import { VcTransacton836272Custom } from './vc-transacton-836272.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-transacton-836272',
templateUrl: './vc-transacton-836272.component.html'
})
export class VcTransacton836272Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcTransacton836272Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXTHJ_614396 = this.metaData.viewState["QV_LM28_ZKS23"].columns.find((col: any) => col.field == 'numberLoan');
if (column_VA_TEXTINPUTBOXTHJ_614396 != undefined) {
const tplCell_VA_TEXTINPUTBOXTHJ_614396 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXTHJ_614396');
column_VA_TEXTINPUTBOXTHJ_614396.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXTHJ_614396?.templateRef;
const tplEdit_VA_TEXTINPUTBOXTHJ_614396 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXTHJ_614396');
column_VA_TEXTINPUTBOXTHJ_614396.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXTHJ_614396?.templateRef;
}
const column_VA_TEXTINPUTBOXAIP_743396 = this.metaData.viewState["QV_LM28_ZKS23"].columns.find((col: any) => col.field == 'sequential');
if (column_VA_TEXTINPUTBOXAIP_743396 != undefined) {
const tplCell_VA_TEXTINPUTBOXAIP_743396 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXAIP_743396');
column_VA_TEXTINPUTBOXAIP_743396.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXAIP_743396?.templateRef;
const tplEdit_VA_TEXTINPUTBOXAIP_743396 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXAIP_743396');
column_VA_TEXTINPUTBOXAIP_743396.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXAIP_743396?.templateRef;
}
const column_VA_TEXTINPUTBOXMDP_710396 = this.metaData.viewState["QV_LM28_ZKS23"].columns.find((col: any) => col.field == 'transaction');
if (column_VA_TEXTINPUTBOXMDP_710396 != undefined) {
const tplCell_VA_TEXTINPUTBOXMDP_710396 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXMDP_710396');
column_VA_TEXTINPUTBOXMDP_710396.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXMDP_710396?.templateRef;
const tplEdit_VA_TEXTINPUTBOXMDP_710396 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXMDP_710396');
column_VA_TEXTINPUTBOXMDP_710396.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXMDP_710396?.templateRef;
}
const column_VA_DATEFIELDRXGTEP_703396 = this.metaData.viewState["QV_LM28_ZKS23"].columns.find((col: any) => col.field == 'transactionDate');
if (column_VA_DATEFIELDRXGTEP_703396 != undefined) {
const tplCell_VA_DATEFIELDRXGTEP_703396 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DATEFIELDRXGTEP_703396');
column_VA_DATEFIELDRXGTEP_703396.properties.cellTemplate = tplCell_VA_DATEFIELDRXGTEP_703396?.templateRef;
const tplEdit_VA_DATEFIELDRXGTEP_703396 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DATEFIELDRXGTEP_703396');
column_VA_DATEFIELDRXGTEP_703396.properties.editTemplate = tplEdit_VA_DATEFIELDRXGTEP_703396?.templateRef;
}
const column_VA_DATEFIELDCJWTBQ_397396 = this.metaData.viewState["QV_LM28_ZKS23"].columns.find((col: any) => col.field == 'transactionRef');
if (column_VA_DATEFIELDCJWTBQ_397396 != undefined) {
const tplCell_VA_DATEFIELDCJWTBQ_397396 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DATEFIELDCJWTBQ_397396');
column_VA_DATEFIELDCJWTBQ_397396.properties.cellTemplate = tplCell_VA_DATEFIELDCJWTBQ_397396?.templateRef;
const tplEdit_VA_DATEFIELDCJWTBQ_397396 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DATEFIELDCJWTBQ_397396');
column_VA_DATEFIELDCJWTBQ_397396.properties.editTemplate = tplEdit_VA_DATEFIELDCJWTBQ_397396?.templateRef;
}
const column_VA_TEXTINPUTBOXIWQ_254396 = this.metaData.viewState["QV_LM28_ZKS23"].columns.find((col: any) => col.field == 'state');
if (column_VA_TEXTINPUTBOXIWQ_254396 != undefined) {
const tplCell_VA_TEXTINPUTBOXIWQ_254396 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXIWQ_254396');
column_VA_TEXTINPUTBOXIWQ_254396.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXIWQ_254396?.templateRef;
const tplEdit_VA_TEXTINPUTBOXIWQ_254396 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXIWQ_254396');
column_VA_TEXTINPUTBOXIWQ_254396.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXIWQ_254396?.templateRef;
}
const column_VA_TEXTINPUTBOXXNU_308396 = this.metaData.viewState["QV_LM28_ZKS23"].columns.find((col: any) => col.field == 'user');
if (column_VA_TEXTINPUTBOXXNU_308396 != undefined) {
const tplCell_VA_TEXTINPUTBOXXNU_308396 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXXNU_308396');
column_VA_TEXTINPUTBOXXNU_308396.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXXNU_308396?.templateRef;
const tplEdit_VA_TEXTINPUTBOXXNU_308396 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXXNU_308396');
column_VA_TEXTINPUTBOXXNU_308396.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXXNU_308396?.templateRef;
}
const column_VA_TEXTINPUTBOXXMY_442396 = this.metaData.viewState["QV_LM28_ZKS23"].columns.find((col: any) => col.field == 'codCliente');
if (column_VA_TEXTINPUTBOXXMY_442396 != undefined) {
const tplCell_VA_TEXTINPUTBOXXMY_442396 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXXMY_442396');
column_VA_TEXTINPUTBOXXMY_442396.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXXMY_442396?.templateRef;
const tplEdit_VA_TEXTINPUTBOXXMY_442396 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXXMY_442396');
column_VA_TEXTINPUTBOXXMY_442396.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXXMY_442396?.templateRef;
}
const column_VA_TEXTINPUTBOXQXA_683396 = this.metaData.viewState["QV_LM28_ZKS23"].columns.find((col: any) => col.field == 'secOpe');
if (column_VA_TEXTINPUTBOXQXA_683396 != undefined) {
const tplCell_VA_TEXTINPUTBOXQXA_683396 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXQXA_683396');
column_VA_TEXTINPUTBOXQXA_683396.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXQXA_683396?.templateRef;
const tplEdit_VA_TEXTINPUTBOXQXA_683396 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXQXA_683396');
column_VA_TEXTINPUTBOXQXA_683396.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXQXA_683396?.templateRef;
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
FilterTransactionQuery: viewState.T_ASSTSKIAARTLC_272.controls.FilterTransactionQuery as FormGroup ,
ListTransactionQuery: viewState.T_ASSTSKIAARTLC_272.controls.ListTransactionQuery as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'QERYS', taskId: 'T_ASSTSKIAARTLC_272', taskVersion: '1.0.0', vcId: 'VC_TRANSACTON_836272', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/QERYS/T_ASSTSKIAARTLC_272', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['VA_TYPETRANSACTONO_872396', { queryId: 'Q_TYPESIAO_HG77', entityName: '', filter:"", cobisRequestServerConfig: null, cache: 0 }], ['QV_LM28_ZKS23', { queryId: 'Q_LISTCACN_AT28', entityName: 'ListTransactionQuery', filter: "", cobisRequestServerConfig: { pageSize :5 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ [ 'VA_STATEHXTRROIKBR_543396',{ data : [ new CobisModelCatalog ( 'ING' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_INGRESAOO_96917') ), new CobisModelCatalog ( 'CON' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_CONTABIAD_65635') ), new CobisModelCatalog ( 'RV' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_REVERSADO_37326') )] }], ]) , label: 'ASSTS.LBL_ASSTS_TRANSACCN_70941' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
