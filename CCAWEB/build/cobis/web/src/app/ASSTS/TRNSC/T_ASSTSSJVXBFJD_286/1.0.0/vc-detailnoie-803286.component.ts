//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-detailnoie-803286.model';
import { ViewState } from './model/vc-detailnoie-803286-view-state';
import { VcDetailnoie803286Custom } from './vc-detailnoie-803286.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-detailnoie-803286',
templateUrl: './vc-detailnoie-803286.component.html'
})
export class VcDetailnoie803286Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcDetailnoie803286Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXXDM_927842 = this.metaData.viewState["QV_RO76_OKE25"].columns.find((col: any) => col.field == 'tipo');
if (column_VA_TEXTINPUTBOXXDM_927842 != undefined) {
const tplCell_VA_TEXTINPUTBOXXDM_927842 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXXDM_927842');
column_VA_TEXTINPUTBOXXDM_927842.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXXDM_927842?.templateRef;
const tplEdit_VA_TEXTINPUTBOXXDM_927842 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXXDM_927842');
column_VA_TEXTINPUTBOXXDM_927842.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXXDM_927842?.templateRef;
}
const column_VA_TEXTINPUTBOXCRL_932842 = this.metaData.viewState["QV_RO76_OKE25"].columns.find((col: any) => col.field == 'concepto');
if (column_VA_TEXTINPUTBOXCRL_932842 != undefined) {
const tplCell_VA_TEXTINPUTBOXCRL_932842 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXCRL_932842');
column_VA_TEXTINPUTBOXCRL_932842.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXCRL_932842?.templateRef;
const tplEdit_VA_TEXTINPUTBOXCRL_932842 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXCRL_932842');
column_VA_TEXTINPUTBOXCRL_932842.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXCRL_932842?.templateRef;
}
const column_VA_TEXTINPUTBOXMRZ_790842 = this.metaData.viewState["QV_RO76_OKE25"].columns.find((col: any) => col.field == 'cuenta');
if (column_VA_TEXTINPUTBOXMRZ_790842 != undefined) {
const tplCell_VA_TEXTINPUTBOXMRZ_790842 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXMRZ_790842');
column_VA_TEXTINPUTBOXMRZ_790842.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXMRZ_790842?.templateRef;
const tplEdit_VA_TEXTINPUTBOXMRZ_790842 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXMRZ_790842');
column_VA_TEXTINPUTBOXMRZ_790842.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXMRZ_790842?.templateRef;
}
const column_VA_TEXTINPUTBOXRZI_579842 = this.metaData.viewState["QV_RO76_OKE25"].columns.find((col: any) => col.field == 'moneda');
if (column_VA_TEXTINPUTBOXRZI_579842 != undefined) {
const tplCell_VA_TEXTINPUTBOXRZI_579842 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXRZI_579842');
column_VA_TEXTINPUTBOXRZI_579842.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXRZI_579842?.templateRef;
const tplEdit_VA_TEXTINPUTBOXRZI_579842 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXRZI_579842');
column_VA_TEXTINPUTBOXRZI_579842.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXRZI_579842?.templateRef;
}
const column_VA_TEXTINPUTBOXSUW_480842 = this.metaData.viewState["QV_RO76_OKE25"].columns.find((col: any) => col.field == 'montoMPG');
if (column_VA_TEXTINPUTBOXSUW_480842 != undefined) {
const tplCell_VA_TEXTINPUTBOXSUW_480842 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXSUW_480842');
column_VA_TEXTINPUTBOXSUW_480842.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXSUW_480842?.templateRef;
const tplEdit_VA_TEXTINPUTBOXSUW_480842 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXSUW_480842');
column_VA_TEXTINPUTBOXSUW_480842.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXSUW_480842?.templateRef;
}
const column_VA_TEXTINPUTBOXDWE_890842 = this.metaData.viewState["QV_RO76_OKE25"].columns.find((col: any) => col.field == 'montoMOP');
if (column_VA_TEXTINPUTBOXDWE_890842 != undefined) {
const tplCell_VA_TEXTINPUTBOXDWE_890842 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXDWE_890842');
column_VA_TEXTINPUTBOXDWE_890842.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXDWE_890842?.templateRef;
const tplEdit_VA_TEXTINPUTBOXDWE_890842 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXDWE_890842');
column_VA_TEXTINPUTBOXDWE_890842.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXDWE_890842?.templateRef;
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
DetailNoAppliedPayment: viewState.T_ASSTSSJVXBFJD_286.controls.DetailNoAppliedPayment as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'TRNSC', taskId: 'T_ASSTSSJVXBFJD_286', taskVersion: '1.0.0', vcId: 'VC_DETAILNOIE_803286', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(false, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/TRNSC/T_ASSTSSJVXBFJD_286', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_RO76_OKE25', { queryId: 'Q_DETAYILY_DP76', entityName: 'DetailNoAppliedPayment', filter: "", cobisRequestServerConfig: { pageSize :10 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'DetailNoAppliedPaymentsForm' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
