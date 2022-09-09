//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-valueratee-334932.model';
import { ViewState } from './model/vc-valueratee-334932-view-state';
import { VcValueratee334932Custom } from './vc-valueratee-334932.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-valueratee-334932',
templateUrl: './vc-valueratee-334932.component.html'
})
export class VcValueratee334932Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcValueratee334932Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXJPR_423476 = this.metaData.viewState["QV_1722_99596"].columns.find((col: any) => col.field == 'identifier');
if (column_VA_TEXTINPUTBOXJPR_423476 != undefined) {
const tplCell_VA_TEXTINPUTBOXJPR_423476 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXJPR_423476');
column_VA_TEXTINPUTBOXJPR_423476.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXJPR_423476?.templateRef;
const tplEdit_VA_TEXTINPUTBOXJPR_423476 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXJPR_423476');
column_VA_TEXTINPUTBOXJPR_423476.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXJPR_423476?.templateRef;
}
const column_VA_TEXTINPUTBOXDHV_388476 = this.metaData.viewState["QV_1722_99596"].columns.find((col: any) => col.field == 'description');
if (column_VA_TEXTINPUTBOXDHV_388476 != undefined) {
const tplCell_VA_TEXTINPUTBOXDHV_388476 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXDHV_388476');
column_VA_TEXTINPUTBOXDHV_388476.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXDHV_388476?.templateRef;
const tplEdit_VA_TEXTINPUTBOXDHV_388476 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXDHV_388476');
column_VA_TEXTINPUTBOXDHV_388476.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXDHV_388476?.templateRef;
}
const column_VA_TEXTINPUTBOXNWQ_921476 = this.metaData.viewState["QV_1722_99596"].columns.find((col: any) => col.field == 'clase');
if (column_VA_TEXTINPUTBOXNWQ_921476 != undefined) {
const tplCell_VA_TEXTINPUTBOXNWQ_921476 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXNWQ_921476');
column_VA_TEXTINPUTBOXNWQ_921476.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXNWQ_921476?.templateRef;
const tplEdit_VA_TEXTINPUTBOXNWQ_921476 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXNWQ_921476');
column_VA_TEXTINPUTBOXNWQ_921476.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXNWQ_921476?.templateRef;
}
const column_VA_TEXTINPUTBOXZYD_294476 = this.metaData.viewState["QV_1722_99596"].columns.find((col: any) => col.field == 'ratePit');
if (column_VA_TEXTINPUTBOXZYD_294476 != undefined) {
const tplCell_VA_TEXTINPUTBOXZYD_294476 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXZYD_294476');
column_VA_TEXTINPUTBOXZYD_294476.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXZYD_294476?.templateRef;
const tplEdit_VA_TEXTINPUTBOXZYD_294476 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXZYD_294476');
column_VA_TEXTINPUTBOXZYD_294476.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXZYD_294476?.templateRef;
}
const column_VA_TEXTINPUTBOXDPU_105476 = this.metaData.viewState["QV_5693_54772"].columns.find((col: any) => col.field == 'portfolioClass');
if (column_VA_TEXTINPUTBOXDPU_105476 != undefined) {
const tplCell_VA_TEXTINPUTBOXDPU_105476 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXDPU_105476');
column_VA_TEXTINPUTBOXDPU_105476.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXDPU_105476?.templateRef;
const tplEdit_VA_TEXTINPUTBOXDPU_105476 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXDPU_105476');
column_VA_TEXTINPUTBOXDPU_105476.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXDPU_105476?.templateRef;
}
const column_VA_TEXTINPUTBOXKJK_302476 = this.metaData.viewState["QV_5693_54772"].columns.find((col: any) => col.field == 'signDefault');
if (column_VA_TEXTINPUTBOXKJK_302476 != undefined) {
const tplCell_VA_TEXTINPUTBOXKJK_302476 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXKJK_302476');
column_VA_TEXTINPUTBOXKJK_302476.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXKJK_302476?.templateRef;
const tplEdit_VA_TEXTINPUTBOXKJK_302476 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXKJK_302476');
column_VA_TEXTINPUTBOXKJK_302476.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXKJK_302476?.templateRef;
}
const column_VA_TEXTINPUTBOXAYP_243476 = this.metaData.viewState["QV_5693_54772"].columns.find((col: any) => col.field == 'valueDeafult');
if (column_VA_TEXTINPUTBOXAYP_243476 != undefined) {
const tplCell_VA_TEXTINPUTBOXAYP_243476 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXAYP_243476');
column_VA_TEXTINPUTBOXAYP_243476.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXAYP_243476?.templateRef;
const tplEdit_VA_TEXTINPUTBOXAYP_243476 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXAYP_243476');
column_VA_TEXTINPUTBOXAYP_243476.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXAYP_243476?.templateRef;
}
const column_VA_TEXTINPUTBOXMNM_532476 = this.metaData.viewState["QV_5693_54772"].columns.find((col: any) => col.field == 'signMin');
if (column_VA_TEXTINPUTBOXMNM_532476 != undefined) {
const tplCell_VA_TEXTINPUTBOXMNM_532476 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXMNM_532476');
column_VA_TEXTINPUTBOXMNM_532476.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXMNM_532476?.templateRef;
const tplEdit_VA_TEXTINPUTBOXMNM_532476 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXMNM_532476');
column_VA_TEXTINPUTBOXMNM_532476.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXMNM_532476?.templateRef;
}
const column_VA_TEXTINPUTBOXXGJ_686476 = this.metaData.viewState["QV_5693_54772"].columns.find((col: any) => col.field == 'valueMin');
if (column_VA_TEXTINPUTBOXXGJ_686476 != undefined) {
const tplCell_VA_TEXTINPUTBOXXGJ_686476 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXXGJ_686476');
column_VA_TEXTINPUTBOXXGJ_686476.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXXGJ_686476?.templateRef;
const tplEdit_VA_TEXTINPUTBOXXGJ_686476 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXXGJ_686476');
column_VA_TEXTINPUTBOXXGJ_686476.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXXGJ_686476?.templateRef;
}
const column_VA_TEXTINPUTBOXUQS_969476 = this.metaData.viewState["QV_5693_54772"].columns.find((col: any) => col.field == 'signMax');
if (column_VA_TEXTINPUTBOXUQS_969476 != undefined) {
const tplCell_VA_TEXTINPUTBOXUQS_969476 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXUQS_969476');
column_VA_TEXTINPUTBOXUQS_969476.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXUQS_969476?.templateRef;
const tplEdit_VA_TEXTINPUTBOXUQS_969476 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXUQS_969476');
column_VA_TEXTINPUTBOXUQS_969476.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXUQS_969476?.templateRef;
}
const column_VA_TEXTINPUTBOXOWX_809476 = this.metaData.viewState["QV_5693_54772"].columns.find((col: any) => col.field == 'valueMax');
if (column_VA_TEXTINPUTBOXOWX_809476 != undefined) {
const tplCell_VA_TEXTINPUTBOXOWX_809476 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXOWX_809476');
column_VA_TEXTINPUTBOXOWX_809476.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXOWX_809476?.templateRef;
const tplEdit_VA_TEXTINPUTBOXOWX_809476 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXOWX_809476');
column_VA_TEXTINPUTBOXOWX_809476.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXOWX_809476?.templateRef;
}
const column_VA_TEXTINPUTBOXYSN_932476 = this.metaData.viewState["QV_5693_54772"].columns.find((col: any) => col.field == 'referenceValue');
if (column_VA_TEXTINPUTBOXYSN_932476 != undefined) {
const tplCell_VA_TEXTINPUTBOXYSN_932476 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXYSN_932476');
column_VA_TEXTINPUTBOXYSN_932476.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXYSN_932476?.templateRef;
const tplEdit_VA_TEXTINPUTBOXYSN_932476 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXYSN_932476');
column_VA_TEXTINPUTBOXYSN_932476.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXYSN_932476?.templateRef;
}
const column_VA_TEXTINPUTBOXIDK_995476 = this.metaData.viewState["QV_5693_54772"].columns.find((col: any) => col.field == 'typePoints');
if (column_VA_TEXTINPUTBOXIDK_995476 != undefined) {
const tplCell_VA_TEXTINPUTBOXIDK_995476 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXIDK_995476');
column_VA_TEXTINPUTBOXIDK_995476.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXIDK_995476?.templateRef;
const tplEdit_VA_TEXTINPUTBOXIDK_995476 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXIDK_995476');
column_VA_TEXTINPUTBOXIDK_995476.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXIDK_995476?.templateRef;
}
const column_VA_TEXTINPUTBOXYOK_680476 = this.metaData.viewState["QV_5693_54772"].columns.find((col: any) => col.field == 'numberDecimals');
if (column_VA_TEXTINPUTBOXYOK_680476 != undefined) {
const tplCell_VA_TEXTINPUTBOXYOK_680476 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXYOK_680476');
column_VA_TEXTINPUTBOXYOK_680476.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXYOK_680476?.templateRef;
const tplEdit_VA_TEXTINPUTBOXYOK_680476 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXYOK_680476');
column_VA_TEXTINPUTBOXYOK_680476.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXYOK_680476?.templateRef;
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
TypeRates: viewState.T_VALUERATESFBO_932.controls.TypeRates as FormGroup ,
Rates: viewState.T_VALUERATESFBO_932.controls.Rates as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'MNTNN', taskId: 'T_VALUERATESFBO_932', taskVersion: '1.0.0', vcId: 'VC_VALUERATEE_334932', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, true), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/MNTNN/T_VALUERATESFBO_932', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_1722_99596', { queryId: 'Q_TYPERASE_1722', entityName: 'TypeRates', filter: "", cobisRequestServerConfig: { pageSize :4 }, cache: 0, queryMemberParameters:[ ]}], ['QV_5693_54772', { queryId: 'Q_RATESEXU_5693', entityName: 'Rates', filter: "", cobisRequestServerConfig: { pageSize :4 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'ASSTS.LBL_ASSTS_VALORESIP_53552' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
beforeOpenGridDialogQV_1722_99596(event: any) {
this.beforeOpenGridDialog(event, {
hasBeforeOpenDialogEvent: false,
hasAfterCloseDialogEvent: false,
moduleId: "ASSTS",
subModuleId: "MNTNN",
taskId: "T_TYPERATESMALA_545",
taskVersion: "1.0.0",
viewContainerId: "VC_TYPERATEDA_850545",
title: 'ASSTS.LBL_ASSTS_TASAQDBMK_45779'
,size: 'md'
});
};
beforeOpenGridDialogQV_5693_54772(event: any) {
this.beforeOpenGridDialog(event, {
hasBeforeOpenDialogEvent: false,
hasAfterCloseDialogEvent: false,
moduleId: "ASSTS",
subModuleId: "MNTNN",
taskId: "T_RATESMODALKUB_953",
taskVersion: "1.0.0",
viewContainerId: "VC_RATESMODAL_789953",
title: 'ASSTS.LBL_ASSTS_DETALLESS_52831'
,size: 'lg'
});
};
}
