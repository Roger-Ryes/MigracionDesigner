//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-deferredea-345975.model';
import { ViewState } from './model/vc-deferredea-345975-view-state';
import { VcDeferredea345975Custom } from './vc-deferredea-345975.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-deferredea-345975',
templateUrl: './vc-deferredea-345975.component.html'
})
export class VcDeferredea345975Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcDeferredea345975Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXCNB_210134 = this.metaData.viewState["QV_ZY19_NNJ12"].columns.find((col: any) => col.field == 'item');
if (column_VA_TEXTINPUTBOXCNB_210134 != undefined) {
const tplCell_VA_TEXTINPUTBOXCNB_210134 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXCNB_210134');
column_VA_TEXTINPUTBOXCNB_210134.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXCNB_210134?.templateRef;
const tplEdit_VA_TEXTINPUTBOXCNB_210134 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXCNB_210134');
column_VA_TEXTINPUTBOXCNB_210134.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXCNB_210134?.templateRef;
}
const column_VA_TEXTINPUTBOXYQS_545134 = this.metaData.viewState["QV_ZY19_NNJ12"].columns.find((col: any) => col.field == 'balance');
if (column_VA_TEXTINPUTBOXYQS_545134 != undefined) {
const tplCell_VA_TEXTINPUTBOXYQS_545134 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXYQS_545134');
column_VA_TEXTINPUTBOXYQS_545134.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXYQS_545134?.templateRef;
const tplEdit_VA_TEXTINPUTBOXYQS_545134 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXYQS_545134');
column_VA_TEXTINPUTBOXYQS_545134.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXYQS_545134?.templateRef;
}
const column_VA_TEXTINPUTBOXLRO_601134 = this.metaData.viewState["QV_ZY19_NNJ12"].columns.find((col: any) => col.field == 'earn');
if (column_VA_TEXTINPUTBOXLRO_601134 != undefined) {
const tplCell_VA_TEXTINPUTBOXLRO_601134 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXLRO_601134');
column_VA_TEXTINPUTBOXLRO_601134.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXLRO_601134?.templateRef;
const tplEdit_VA_TEXTINPUTBOXLRO_601134 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXLRO_601134');
column_VA_TEXTINPUTBOXLRO_601134.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXLRO_601134?.templateRef;
}
const column_VA_TEXTINPUTBOXMQJ_914134 = this.metaData.viewState["QV_ZY19_NNJ12"].columns.find((col: any) => col.field == 'acumulated');
if (column_VA_TEXTINPUTBOXMQJ_914134 != undefined) {
const tplCell_VA_TEXTINPUTBOXMQJ_914134 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXMQJ_914134');
column_VA_TEXTINPUTBOXMQJ_914134.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXMQJ_914134?.templateRef;
const tplEdit_VA_TEXTINPUTBOXMQJ_914134 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXMQJ_914134');
column_VA_TEXTINPUTBOXMQJ_914134.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXMQJ_914134?.templateRef;
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
DeferredItemsDetailList: viewState.T_ASSTSFLSVSFLG_975.controls.DeferredItemsDetailList as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'QERYS', taskId: 'T_ASSTSFLSVSFLG_975', taskVersion: '1.0.0', vcId: 'VC_DEFERREDEA_345975', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(false, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/QERYS/T_ASSTSFLSVSFLG_975', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_ZY19_NNJ12', { queryId: 'Q_DEFEDLIT_ZB19', entityName: 'DeferredItemsDetailList', filter: "", cobisRequestServerConfig: { pageSize :10 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'DeferredItemsDetailForm' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
