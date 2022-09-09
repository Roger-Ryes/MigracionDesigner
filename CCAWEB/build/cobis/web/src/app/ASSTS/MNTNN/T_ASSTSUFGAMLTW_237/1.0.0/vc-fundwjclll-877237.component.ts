//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-fundwjclll-877237.model';
import { ViewState } from './model/vc-fundwjclll-877237-view-state';
import { VcFundwjclll877237Custom } from './vc-fundwjclll-877237.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-fundwjclll-877237',
templateUrl: './vc-fundwjclll-877237.component.html'
})
export class VcFundwjclll877237Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcFundwjclll877237Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXGIY_595448 = this.metaData.viewState["QV_8975_37395"].columns.find((col: any) => col.field == 'fundName');
if (column_VA_TEXTINPUTBOXGIY_595448 != undefined) {
const tplCell_VA_TEXTINPUTBOXGIY_595448 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXGIY_595448');
column_VA_TEXTINPUTBOXGIY_595448.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXGIY_595448?.templateRef;
const tplEdit_VA_TEXTINPUTBOXGIY_595448 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXGIY_595448');
column_VA_TEXTINPUTBOXGIY_595448.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXGIY_595448?.templateRef;
}
const column_VA_TEXTINPUTBOXASY_494448 = this.metaData.viewState["QV_8975_37395"].columns.find((col: any) => col.field == 'sponsorId');
if (column_VA_TEXTINPUTBOXASY_494448 != undefined) {
const tplCell_VA_TEXTINPUTBOXASY_494448 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXASY_494448');
column_VA_TEXTINPUTBOXASY_494448.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXASY_494448?.templateRef;
const tplEdit_VA_TEXTINPUTBOXASY_494448 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXASY_494448');
column_VA_TEXTINPUTBOXASY_494448.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXASY_494448?.templateRef;
}
const column_VA_TEXTINPUTBOXNUB_725448 = this.metaData.viewState["QV_8975_37395"].columns.find((col: any) => col.field == 'amountSource');
if (column_VA_TEXTINPUTBOXNUB_725448 != undefined) {
const tplCell_VA_TEXTINPUTBOXNUB_725448 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXNUB_725448');
column_VA_TEXTINPUTBOXNUB_725448.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXNUB_725448?.templateRef;
const tplEdit_VA_TEXTINPUTBOXNUB_725448 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXNUB_725448');
column_VA_TEXTINPUTBOXNUB_725448.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXNUB_725448?.templateRef;
}
const column_VA_TEXTINPUTBOXGDY_608448 = this.metaData.viewState["QV_8975_37395"].columns.find((col: any) => col.field == 'usedValue');
if (column_VA_TEXTINPUTBOXGDY_608448 != undefined) {
const tplCell_VA_TEXTINPUTBOXGDY_608448 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXGDY_608448');
column_VA_TEXTINPUTBOXGDY_608448.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXGDY_608448?.templateRef;
const tplEdit_VA_TEXTINPUTBOXGDY_608448 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXGDY_608448');
column_VA_TEXTINPUTBOXGDY_608448.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXGDY_608448?.templateRef;
}
const column_VA_TEXTINPUTBOXLLE_233448 = this.metaData.viewState["QV_8975_37395"].columns.find((col: any) => col.field == 'availableBalance');
if (column_VA_TEXTINPUTBOXLLE_233448 != undefined) {
const tplCell_VA_TEXTINPUTBOXLLE_233448 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXLLE_233448');
column_VA_TEXTINPUTBOXLLE_233448.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXLLE_233448?.templateRef;
const tplEdit_VA_TEXTINPUTBOXLLE_233448 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXLLE_233448');
column_VA_TEXTINPUTBOXLLE_233448.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXLLE_233448?.templateRef;
}
const column_VA_TEXTINPUTBOXHTK_710448 = this.metaData.viewState["QV_8975_37395"].columns.find((col: any) => col.field == 'statusCode');
if (column_VA_TEXTINPUTBOXHTK_710448 != undefined) {
const tplCell_VA_TEXTINPUTBOXHTK_710448 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXHTK_710448');
column_VA_TEXTINPUTBOXHTK_710448.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXHTK_710448?.templateRef;
const tplEdit_VA_TEXTINPUTBOXHTK_710448 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXHTK_710448');
column_VA_TEXTINPUTBOXHTK_710448.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXHTK_710448?.templateRef;
}
const column_VA_DATEFIELDFFPDVP_590448 = this.metaData.viewState["QV_8975_37395"].columns.find((col: any) => col.field == 'validityDate');
if (column_VA_DATEFIELDFFPDVP_590448 != undefined) {
const tplCell_VA_DATEFIELDFFPDVP_590448 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DATEFIELDFFPDVP_590448');
column_VA_DATEFIELDFFPDVP_590448.properties.cellTemplate = tplCell_VA_DATEFIELDFFPDVP_590448?.templateRef;
const tplEdit_VA_DATEFIELDFFPDVP_590448 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DATEFIELDFFPDVP_590448');
column_VA_DATEFIELDFFPDVP_590448.properties.editTemplate = tplEdit_VA_DATEFIELDFFPDVP_590448?.templateRef;
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
Fund: viewState.T_ASSTSUFGAMLTW_237.controls.Fund as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'MNTNN', taskId: 'T_ASSTSUFGAMLTW_237', taskVersion: '1.0.0', vcId: 'VC_FUNDWJCLLL_877237', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(false, true), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/MNTNN/T_ASSTSUFGAMLTW_237', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ['VA_TEXTINPUTBOXASY_494448', { catalogName: 'ca_fuente_recurso', filter: "", cobisRequestServerConfig: null, cache: 0 , controlGridInfo: { queryViewId: "QV_8975_37395", columnId: "sponsorId" } }], ['VA_TEXTINPUTBOXHTK_710448', { catalogName: 'cl_estado_ser', filter: "", cobisRequestServerConfig: null, cache: 0 , controlGridInfo: { queryViewId: "QV_8975_37395", columnId: "statusCode" } }], ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_8975_37395', { queryId: 'Q_FUNDQJFL_8975', entityName: 'Fund', filter: "", cobisRequestServerConfig: { pageSize :10 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'ASSTS.LBL_ASSTS_MANEJOFOO_89494' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
