//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-paymentmne-706586.model';
import { ViewState } from './model/vc-paymentmne-706586-view-state';
import { VcPaymentmne706586Custom } from './vc-paymentmne-706586.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-paymentmne-706586',
templateUrl: './vc-paymentmne-706586.component.html'
})
export class VcPaymentmne706586Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcPaymentmne706586Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXPMD_289448 = this.metaData.viewState["QV_7546_25470"].columns.find((col: any) => col.field == 'product');
if (column_VA_TEXTINPUTBOXPMD_289448 != undefined) {
const tplCell_VA_TEXTINPUTBOXPMD_289448 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXPMD_289448');
column_VA_TEXTINPUTBOXPMD_289448.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXPMD_289448?.templateRef;
const tplEdit_VA_TEXTINPUTBOXPMD_289448 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXPMD_289448');
column_VA_TEXTINPUTBOXPMD_289448.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXPMD_289448?.templateRef;
}
const column_VA_TEXTINPUTBOXWRT_921448 = this.metaData.viewState["QV_7546_25470"].columns.find((col: any) => col.field == 'description');
if (column_VA_TEXTINPUTBOXWRT_921448 != undefined) {
const tplCell_VA_TEXTINPUTBOXWRT_921448 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXWRT_921448');
column_VA_TEXTINPUTBOXWRT_921448.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXWRT_921448?.templateRef;
const tplEdit_VA_TEXTINPUTBOXWRT_921448 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXWRT_921448');
column_VA_TEXTINPUTBOXWRT_921448.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXWRT_921448?.templateRef;
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
MethodsRetention: viewState.T_PAYMENTMAIETA_586.controls.MethodsRetention as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'MNTNN', taskId: 'T_PAYMENTMAIETA_586', taskVersion: '1.0.0', vcId: 'VC_PAYMENTMNE_706586', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, true), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/MNTNN/T_PAYMENTMAIETA_586', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_7546_25470', { queryId: 'Q_METHODIR_7546', entityName: 'MethodsRetention', filter: "", cobisRequestServerConfig: { pageSize :10 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'ASSTS.LBL_ASSTS_MANTENIAO_32034' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
beforeOpenGridDialogQV_7546_25470(event: any) {
this.beforeOpenGridDialog(event, {
hasBeforeOpenDialogEvent: false,
hasAfterCloseDialogEvent: false,
moduleId: "ASSTS",
subModuleId: "MNTNN",
taskId: "T_PAYMENTMAIDLT_828",
taskVersion: "1.0.0",
viewContainerId: "VC_PAYMENTMDA_338828",
title: 'ASSTS.LBL_ASSTS_APAGOPQXA_89595'
,size: 'md'
});
};
}
