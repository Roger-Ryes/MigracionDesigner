//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-repaymentt-461527.model';
import { ViewState } from './model/vc-repaymentt-461527-view-state';
import { VcRepaymentt461527Custom } from './vc-repaymentt-461527.custom';
import { LNSPRService} from 'src/app/LNSPR/service-modules/LNSPR.service';
@Component({
selector: 'cobis-vc-repaymentt-461527',
templateUrl: './vc-repaymentt-461527.component.html'
})
export class VcRepaymentt461527Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private lnspr: LNSPRService) {
super(new VcRepaymentt461527Custom(designer.cobisCommons,lnspr), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXSSG_996232 = this.metaData.viewState["QV_WX74_OJZ40"].columns.find((col: any) => col.field == 'account');
if (column_VA_TEXTINPUTBOXSSG_996232 != undefined) {
const tplCell_VA_TEXTINPUTBOXSSG_996232 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXSSG_996232');
column_VA_TEXTINPUTBOXSSG_996232.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXSSG_996232?.templateRef;
const tplEdit_VA_TEXTINPUTBOXSSG_996232 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXSSG_996232');
column_VA_TEXTINPUTBOXSSG_996232.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXSSG_996232?.templateRef;
}
const column_VA_TEXTINPUTBOXPVU_726232 = this.metaData.viewState["QV_WX74_OJZ40"].columns.find((col: any) => col.field == 'percentage');
if (column_VA_TEXTINPUTBOXPVU_726232 != undefined) {
const tplCell_VA_TEXTINPUTBOXPVU_726232 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXPVU_726232');
column_VA_TEXTINPUTBOXPVU_726232.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXPVU_726232?.templateRef;
const tplEdit_VA_TEXTINPUTBOXPVU_726232 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXPVU_726232');
column_VA_TEXTINPUTBOXPVU_726232.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXPVU_726232?.templateRef;
}
const column_VA_TEXTINPUTBOXVWX_985232 = this.metaData.viewState["QV_WX74_OJZ40"].columns.find((col: any) => col.field == 'clientRole');
if (column_VA_TEXTINPUTBOXVWX_985232 != undefined) {
const tplCell_VA_TEXTINPUTBOXVWX_985232 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXVWX_985232');
column_VA_TEXTINPUTBOXVWX_985232.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXVWX_985232?.templateRef;
const tplEdit_VA_TEXTINPUTBOXVWX_985232 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXVWX_985232');
column_VA_TEXTINPUTBOXVWX_985232.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXVWX_985232?.templateRef;
}
const column_VA_TEXTINPUTBOXRUK_881232 = this.metaData.viewState["QV_WX74_OJZ40"].columns.find((col: any) => col.field == 'client');
if (column_VA_TEXTINPUTBOXRUK_881232 != undefined) {
const tplCell_VA_TEXTINPUTBOXRUK_881232 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXRUK_881232');
column_VA_TEXTINPUTBOXRUK_881232.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXRUK_881232?.templateRef;
const tplEdit_VA_TEXTINPUTBOXRUK_881232 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXRUK_881232');
column_VA_TEXTINPUTBOXRUK_881232.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXRUK_881232?.templateRef;
}
const column_VA_TEXTINPUTBOXCQZ_584232 = this.metaData.viewState["QV_WX74_OJZ40"].columns.find((col: any) => col.field == 'clientName');
if (column_VA_TEXTINPUTBOXCQZ_584232 != undefined) {
const tplCell_VA_TEXTINPUTBOXCQZ_584232 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXCQZ_584232');
column_VA_TEXTINPUTBOXCQZ_584232.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXCQZ_584232?.templateRef;
const tplEdit_VA_TEXTINPUTBOXCQZ_584232 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXCQZ_584232');
column_VA_TEXTINPUTBOXCQZ_584232.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXCQZ_584232?.templateRef;
}
const column_VA_TEXTINPUTBOXSEI_725232 = this.metaData.viewState["QV_WX74_OJZ40"].columns.find((col: any) => col.field == 'paymentMethod');
if (column_VA_TEXTINPUTBOXSEI_725232 != undefined) {
const tplCell_VA_TEXTINPUTBOXSEI_725232 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXSEI_725232');
column_VA_TEXTINPUTBOXSEI_725232.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXSEI_725232?.templateRef;
const tplEdit_VA_TEXTINPUTBOXSEI_725232 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXSEI_725232');
column_VA_TEXTINPUTBOXSEI_725232.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXSEI_725232?.templateRef;
}
const column_VA_TEXTINPUTBOXGMQ_949232 = this.metaData.viewState["QV_WX74_OJZ40"].columns.find((col: any) => col.field == 'institutionName');
if (column_VA_TEXTINPUTBOXGMQ_949232 != undefined) {
const tplCell_VA_TEXTINPUTBOXGMQ_949232 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXGMQ_949232');
column_VA_TEXTINPUTBOXGMQ_949232.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXGMQ_949232?.templateRef;
const tplEdit_VA_TEXTINPUTBOXGMQ_949232 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXGMQ_949232');
column_VA_TEXTINPUTBOXGMQ_949232.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXGMQ_949232?.templateRef;
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
PaymentAutomatic: viewState.T_LNSPRACJAQDUP_527.controls.PaymentAutomatic as FormGroup ,
PaymentAutomaticList: viewState.T_LNSPRACJAQDUP_527.controls.PaymentAutomaticList as FormGroup
};
this.metaData = { moduleId: 'LNSPR', subModuleId: 'OPRTN', taskId: 'T_LNSPRACJAQDUP_527', taskVersion: '1.0.0', vcId: 'VC_REPAYMENTT_461527', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, true), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/LNSPR/OPRTN/T_LNSPRACJAQDUP_527', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_WX74_OJZ40', { queryId: 'Q_PAYMANAM_TY74', entityName: 'PaymentAutomaticList', filter: "", cobisRequestServerConfig: { pageSize :5 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'RepaymentCreateForm' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
