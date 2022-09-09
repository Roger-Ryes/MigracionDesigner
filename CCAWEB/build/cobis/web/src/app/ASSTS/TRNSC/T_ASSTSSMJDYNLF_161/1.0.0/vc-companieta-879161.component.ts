//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-companieta-879161.model';
import { ViewState } from './model/vc-companieta-879161-view-state';
import { VcCompanieta879161Custom } from './vc-companieta-879161.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-companieta-879161',
templateUrl: './vc-companieta-879161.component.html'
})
export class VcCompanieta879161Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcCompanieta879161Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXZRB_273908 = this.metaData.viewState["QV_OM63_SRI96"].columns.find((col: any) => col.field == 'sequential');
if (column_VA_TEXTINPUTBOXZRB_273908 != undefined) {
const tplCell_VA_TEXTINPUTBOXZRB_273908 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXZRB_273908');
column_VA_TEXTINPUTBOXZRB_273908.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXZRB_273908?.templateRef;
const tplEdit_VA_TEXTINPUTBOXZRB_273908 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXZRB_273908');
column_VA_TEXTINPUTBOXZRB_273908.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXZRB_273908?.templateRef;
}
const column_VA_TEXTINPUTBOXYYL_108908 = this.metaData.viewState["QV_OM63_SRI96"].columns.find((col: any) => col.field == 'statusName');
if (column_VA_TEXTINPUTBOXYYL_108908 != undefined) {
const tplCell_VA_TEXTINPUTBOXYYL_108908 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXYYL_108908');
column_VA_TEXTINPUTBOXYYL_108908.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXYYL_108908?.templateRef;
const tplEdit_VA_TEXTINPUTBOXYYL_108908 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXYYL_108908');
column_VA_TEXTINPUTBOXYYL_108908.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXYYL_108908?.templateRef;
}
const column_VA_DATEFIELDBLAQQL_205908 = this.metaData.viewState["QV_OM63_SRI96"].columns.find((col: any) => col.field == 'dateCreate');
if (column_VA_DATEFIELDBLAQQL_205908 != undefined) {
const tplCell_VA_DATEFIELDBLAQQL_205908 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DATEFIELDBLAQQL_205908');
column_VA_DATEFIELDBLAQQL_205908.properties.cellTemplate = tplCell_VA_DATEFIELDBLAQQL_205908?.templateRef;
const tplEdit_VA_DATEFIELDBLAQQL_205908 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DATEFIELDBLAQQL_205908');
column_VA_DATEFIELDBLAQQL_205908.properties.editTemplate = tplEdit_VA_DATEFIELDBLAQQL_205908?.templateRef;
}
const column_VA_DATEFIELDFEDKJJ_584908 = this.metaData.viewState["QV_OM63_SRI96"].columns.find((col: any) => col.field == 'dateMove');
if (column_VA_DATEFIELDFEDKJJ_584908 != undefined) {
const tplCell_VA_DATEFIELDFEDKJJ_584908 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DATEFIELDFEDKJJ_584908');
column_VA_DATEFIELDFEDKJJ_584908.properties.cellTemplate = tplCell_VA_DATEFIELDFEDKJJ_584908?.templateRef;
const tplEdit_VA_DATEFIELDFEDKJJ_584908 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DATEFIELDFEDKJJ_584908');
column_VA_DATEFIELDFEDKJJ_584908.properties.editTemplate = tplEdit_VA_DATEFIELDFEDKJJ_584908?.templateRef;
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
CompaniesBatchList: viewState.T_ASSTSSMJDYNLF_161.controls.CompaniesBatchList as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'TRNSC', taskId: 'T_ASSTSSMJDYNLF_161', taskVersion: '1.0.0', vcId: 'VC_COMPANIETA_879161', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(false, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/TRNSC/T_ASSTSSMJDYNLF_161', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_OM63_SRI96', { queryId: 'Q_COMPATAT_EY63', entityName: 'CompaniesBatchList', filter: "", cobisRequestServerConfig: { pageSize :10 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ [ 'VA_COMBOBOXSATJCLI_822908',{ data : [ new CobisModelCatalog ( 'S' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_SIJWWZUQL_76896') ), new CobisModelCatalog ( 'N' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_NOTNCMKBQ_41776') )] , controlGridInfo: { queryViewId: "QV_OM63_SRI96", columnId: "executeOnline" } }], ]) , label: 'CompaniesBatchForm' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
