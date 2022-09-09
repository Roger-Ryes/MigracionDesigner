//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-paymentdee-475722.model';
import { ViewState } from './model/vc-paymentdee-475722-view-state';
import { VcPaymentdee475722Custom } from './vc-paymentdee-475722.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-paymentdee-475722',
templateUrl: './vc-paymentdee-475722.component.html'
})
export class VcPaymentdee475722Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcPaymentdee475722Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXXNY_867485 = this.metaData.viewState["QV_1707_26229"].columns.find((col: any) => col.field == 'fee');
if (column_VA_TEXTINPUTBOXXNY_867485 != undefined) {
const tplCell_VA_TEXTINPUTBOXXNY_867485 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXXNY_867485');
column_VA_TEXTINPUTBOXXNY_867485.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXXNY_867485?.templateRef;
const tplEdit_VA_TEXTINPUTBOXXNY_867485 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXXNY_867485');
column_VA_TEXTINPUTBOXXNY_867485.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXXNY_867485?.templateRef;
}
const column_VA_TEXTINPUTBOXGVF_565485 = this.metaData.viewState["QV_1707_26229"].columns.find((col: any) => col.field == 'description');
if (column_VA_TEXTINPUTBOXGVF_565485 != undefined) {
const tplCell_VA_TEXTINPUTBOXGVF_565485 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXGVF_565485');
column_VA_TEXTINPUTBOXGVF_565485.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXGVF_565485?.templateRef;
const tplEdit_VA_TEXTINPUTBOXGVF_565485 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXGVF_565485');
column_VA_TEXTINPUTBOXGVF_565485.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXGVF_565485?.templateRef;
}
const column_VA_TEXTINPUTBOXKNL_859485 = this.metaData.viewState["QV_1707_26229"].columns.find((col: any) => col.field == 'statusDescription');
if (column_VA_TEXTINPUTBOXKNL_859485 != undefined) {
const tplCell_VA_TEXTINPUTBOXKNL_859485 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXKNL_859485');
column_VA_TEXTINPUTBOXKNL_859485.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXKNL_859485?.templateRef;
const tplEdit_VA_TEXTINPUTBOXKNL_859485 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXKNL_859485');
column_VA_TEXTINPUTBOXKNL_859485.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXKNL_859485?.templateRef;
}
const column_VA_TEXTINPUTBOXDMX_646485 = this.metaData.viewState["QV_1707_26229"].columns.find((col: any) => col.field == 'account');
if (column_VA_TEXTINPUTBOXDMX_646485 != undefined) {
const tplCell_VA_TEXTINPUTBOXDMX_646485 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXDMX_646485');
column_VA_TEXTINPUTBOXDMX_646485.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXDMX_646485?.templateRef;
const tplEdit_VA_TEXTINPUTBOXDMX_646485 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXDMX_646485');
column_VA_TEXTINPUTBOXDMX_646485.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXDMX_646485?.templateRef;
}
const column_VA_TEXTINPUTBOXQJY_953485 = this.metaData.viewState["QV_1707_26229"].columns.find((col: any) => col.field == 'moneyDescription');
if (column_VA_TEXTINPUTBOXQJY_953485 != undefined) {
const tplCell_VA_TEXTINPUTBOXQJY_953485 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXQJY_953485');
column_VA_TEXTINPUTBOXQJY_953485.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXQJY_953485?.templateRef;
const tplEdit_VA_TEXTINPUTBOXQJY_953485 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXQJY_953485');
column_VA_TEXTINPUTBOXQJY_953485.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXQJY_953485?.templateRef;
}
const column_VA_TEXTINPUTBOXHZF_700485 = this.metaData.viewState["QV_1707_26229"].columns.find((col: any) => col.field == 'amount');
if (column_VA_TEXTINPUTBOXHZF_700485 != undefined) {
const tplCell_VA_TEXTINPUTBOXHZF_700485 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXHZF_700485');
column_VA_TEXTINPUTBOXHZF_700485.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXHZF_700485?.templateRef;
const tplEdit_VA_TEXTINPUTBOXHZF_700485 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXHZF_700485');
column_VA_TEXTINPUTBOXHZF_700485.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXHZF_700485?.templateRef;
}
const column_VA_TEXTINPUTBOXRNJ_230485 = this.metaData.viewState["QV_1707_26229"].columns.find((col: any) => col.field == 'amountMn');
if (column_VA_TEXTINPUTBOXRNJ_230485 != undefined) {
const tplCell_VA_TEXTINPUTBOXRNJ_230485 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXRNJ_230485');
column_VA_TEXTINPUTBOXRNJ_230485.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXRNJ_230485?.templateRef;
const tplEdit_VA_TEXTINPUTBOXRNJ_230485 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXRNJ_230485');
column_VA_TEXTINPUTBOXRNJ_230485.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXRNJ_230485?.templateRef;
}
const column_VA_TEXTINPUTBOXUOF_222485 = this.metaData.viewState["QV_1707_26229"].columns.find((col: any) => col.field == 'sequential');
if (column_VA_TEXTINPUTBOXUOF_222485 != undefined) {
const tplCell_VA_TEXTINPUTBOXUOF_222485 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXUOF_222485');
column_VA_TEXTINPUTBOXUOF_222485.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXUOF_222485?.templateRef;
const tplEdit_VA_TEXTINPUTBOXUOF_222485 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXUOF_222485');
column_VA_TEXTINPUTBOXUOF_222485.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXUOF_222485?.templateRef;
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
PaymentDetail: viewState.T_PAYMENTDETMFP_722.controls.PaymentDetail as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'QERYS', taskId: 'T_PAYMENTDETMFP_722', taskVersion: '1.0.0', vcId: 'VC_PAYMENTDEE_475722', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(false, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/QERYS/T_PAYMENTDETMFP_722', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_1707_26229', { queryId: 'Q_PAYMENTT_1707', entityName: 'PaymentDetail', filter: "", cobisRequestServerConfig: { pageSize :20 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'PaymentDetForm' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
