//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-raterangee-778821.model';
import { ViewState } from './model/vc-raterangee-778821-view-state';
import { VcRaterangee778821Custom } from './vc-raterangee-778821.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-raterangee-778821',
templateUrl: './vc-raterangee-778821.component.html'
})
export class VcRaterangee778821Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcRaterangee778821Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXEGT_745502 = this.metaData.viewState["QV_MD41_JYZ75"].columns.find((col: any) => col.field == 'rank');
if (column_VA_TEXTINPUTBOXEGT_745502 != undefined) {
const tplCell_VA_TEXTINPUTBOXEGT_745502 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXEGT_745502');
column_VA_TEXTINPUTBOXEGT_745502.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXEGT_745502?.templateRef;
const tplEdit_VA_TEXTINPUTBOXEGT_745502 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXEGT_745502');
column_VA_TEXTINPUTBOXEGT_745502.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXEGT_745502?.templateRef;
}
const column_VA_TEXTINPUTBOXRAX_680502 = this.metaData.viewState["QV_MD41_JYZ75"].columns.find((col: any) => col.field == 'rangeName');
if (column_VA_TEXTINPUTBOXRAX_680502 != undefined) {
const tplCell_VA_TEXTINPUTBOXRAX_680502 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXRAX_680502');
column_VA_TEXTINPUTBOXRAX_680502.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXRAX_680502?.templateRef;
const tplEdit_VA_TEXTINPUTBOXRAX_680502 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXRAX_680502');
column_VA_TEXTINPUTBOXRAX_680502.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXRAX_680502?.templateRef;
}
const column_VA_TEXTINPUTBOXDAG_434502 = this.metaData.viewState["QV_MD41_JYZ75"].columns.find((col: any) => col.field == 'concept');
if (column_VA_TEXTINPUTBOXDAG_434502 != undefined) {
const tplCell_VA_TEXTINPUTBOXDAG_434502 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXDAG_434502');
column_VA_TEXTINPUTBOXDAG_434502.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXDAG_434502?.templateRef;
const tplEdit_VA_TEXTINPUTBOXDAG_434502 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXDAG_434502');
column_VA_TEXTINPUTBOXDAG_434502.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXDAG_434502?.templateRef;
}
const column_VA_TEXTINPUTBOXLDL_816502 = this.metaData.viewState["QV_MD41_JYZ75"].columns.find((col: any) => col.field == 'title1');
if (column_VA_TEXTINPUTBOXLDL_816502 != undefined) {
const tplCell_VA_TEXTINPUTBOXLDL_816502 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXLDL_816502');
column_VA_TEXTINPUTBOXLDL_816502.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXLDL_816502?.templateRef;
const tplEdit_VA_TEXTINPUTBOXLDL_816502 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXLDL_816502');
column_VA_TEXTINPUTBOXLDL_816502.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXLDL_816502?.templateRef;
}
const column_VA_TEXTINPUTBOXKUY_720502 = this.metaData.viewState["QV_MD41_JYZ75"].columns.find((col: any) => col.field == 'dataType1');
if (column_VA_TEXTINPUTBOXKUY_720502 != undefined) {
const tplCell_VA_TEXTINPUTBOXKUY_720502 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXKUY_720502');
column_VA_TEXTINPUTBOXKUY_720502.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXKUY_720502?.templateRef;
const tplEdit_VA_TEXTINPUTBOXKUY_720502 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXKUY_720502');
column_VA_TEXTINPUTBOXKUY_720502.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXKUY_720502?.templateRef;
}
const column_VA_TEXTINPUTBOXCGB_940502 = this.metaData.viewState["QV_MD41_JYZ75"].columns.find((col: any) => col.field == 'title2');
if (column_VA_TEXTINPUTBOXCGB_940502 != undefined) {
const tplCell_VA_TEXTINPUTBOXCGB_940502 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXCGB_940502');
column_VA_TEXTINPUTBOXCGB_940502.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXCGB_940502?.templateRef;
const tplEdit_VA_TEXTINPUTBOXCGB_940502 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXCGB_940502');
column_VA_TEXTINPUTBOXCGB_940502.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXCGB_940502?.templateRef;
}
const column_VA_TEXTINPUTBOXGBW_739502 = this.metaData.viewState["QV_MD41_JYZ75"].columns.find((col: any) => col.field == 'dataType2');
if (column_VA_TEXTINPUTBOXGBW_739502 != undefined) {
const tplCell_VA_TEXTINPUTBOXGBW_739502 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXGBW_739502');
column_VA_TEXTINPUTBOXGBW_739502.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXGBW_739502?.templateRef;
const tplEdit_VA_TEXTINPUTBOXGBW_739502 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXGBW_739502');
column_VA_TEXTINPUTBOXGBW_739502.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXGBW_739502?.templateRef;
}
const column_VA_TEXTINPUTBOXLKU_748502 = this.metaData.viewState["QV_MD41_JYZ75"].columns.find((col: any) => col.field == 'result2');
if (column_VA_TEXTINPUTBOXLKU_748502 != undefined) {
const tplCell_VA_TEXTINPUTBOXLKU_748502 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXLKU_748502');
column_VA_TEXTINPUTBOXLKU_748502.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXLKU_748502?.templateRef;
const tplEdit_VA_TEXTINPUTBOXLKU_748502 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXLKU_748502');
column_VA_TEXTINPUTBOXLKU_748502.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXLKU_748502?.templateRef;
}
const column_VA_TEXTINPUTBOXQFM_150502 = this.metaData.viewState["QV_MD41_JYZ75"].columns.find((col: any) => col.field == 'dataTypeR2');
if (column_VA_TEXTINPUTBOXQFM_150502 != undefined) {
const tplCell_VA_TEXTINPUTBOXQFM_150502 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXQFM_150502');
column_VA_TEXTINPUTBOXQFM_150502.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXQFM_150502?.templateRef;
const tplEdit_VA_TEXTINPUTBOXQFM_150502 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXQFM_150502');
column_VA_TEXTINPUTBOXQFM_150502.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXQFM_150502?.templateRef;
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
RateRangeList: viewState.T_ASSTSXWJMINKN_821.controls.RateRangeList as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'MNTNN', taskId: 'T_ASSTSXWJMINKN_821', taskVersion: '1.0.0', vcId: 'VC_RATERANGEE_778821', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(false, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/MNTNN/T_ASSTSXWJMINKN_821', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_MD41_JYZ75', { queryId: 'Q_RATEGLSL_WM41', entityName: 'RateRangeList', filter: "", cobisRequestServerConfig: { pageSize :5 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ [ 'VA_TEXTINPUTBOXEGT_745502',{ data : [ new CobisModelCatalog ( '1' , '1' ), new CobisModelCatalog ( '2' , '2' )] , controlGridInfo: { queryViewId: "QV_MD41_JYZ75", columnId: "rank" } }], [ 'VA_TEXTINPUTBOXKUY_720502',{ data : [ new CobisModelCatalog ( 'I' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_INTBQVBSN_86454') ), new CobisModelCatalog ( 'C' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_CHARGWZVY_64273') ), new CobisModelCatalog ( 'M' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_MONEYLUXP_51730') ), new CobisModelCatalog ( 'F' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_FLOATRICU_42226') )] , controlGridInfo: { queryViewId: "QV_MD41_JYZ75", columnId: "dataType1" } }], [ 'VA_TEXTINPUTBOXGBW_739502',{ data : [ new CobisModelCatalog ( 'I' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_INTBQVBSN_86454') ), new CobisModelCatalog ( 'C' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_CHARGWZVY_64273') ), new CobisModelCatalog ( 'M' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_MONEYLUXP_51730') ), new CobisModelCatalog ( 'F' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_FLOATRICU_42226') )] , controlGridInfo: { queryViewId: "QV_MD41_JYZ75", columnId: "dataType2" } }], [ 'VA_TEXTINPUTBOXQFM_150502',{ data : [ new CobisModelCatalog ( 'I' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_INTBQVBSN_86454') ), new CobisModelCatalog ( 'C' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_CHARGWZVY_64273') ), new CobisModelCatalog ( 'M' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_MONEYLUXP_51730') ), new CobisModelCatalog ( 'F' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_FLOATRICU_42226') )] , controlGridInfo: { queryViewId: "QV_MD41_JYZ75", columnId: "dataTypeR2" } }], ]) , label: 'ASSTS.LBL_ASSTS_RANGOVAAA_60267' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
