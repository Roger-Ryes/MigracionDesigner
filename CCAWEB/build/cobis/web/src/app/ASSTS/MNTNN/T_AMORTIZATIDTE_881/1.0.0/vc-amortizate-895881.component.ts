//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-amortizate-895881.model';
import { ViewState } from './model/vc-amortizate-895881-view-state';
import { VcAmortizate895881Custom } from './vc-amortizate-895881.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-amortizate-895881',
templateUrl: './vc-amortizate-895881.component.html'
})
export class VcAmortizate895881Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcAmortizate895881Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXKBJ_160813 = this.metaData.viewState["QV_8477_65404"].columns.find((col: any) => col.field == 'item');
if (column_VA_TEXTINPUTBOXKBJ_160813 != undefined) {
const tplCell_VA_TEXTINPUTBOXKBJ_160813 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXKBJ_160813');
column_VA_TEXTINPUTBOXKBJ_160813.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXKBJ_160813?.templateRef;
const tplEdit_VA_TEXTINPUTBOXKBJ_160813 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXKBJ_160813');
column_VA_TEXTINPUTBOXKBJ_160813.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXKBJ_160813?.templateRef;
}
const column_VA_TEXTINPUTBOXOJL_993813 = this.metaData.viewState["QV_8477_65404"].columns.find((col: any) => col.field == 'statusItem');
if (column_VA_TEXTINPUTBOXOJL_993813 != undefined) {
const tplCell_VA_TEXTINPUTBOXOJL_993813 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXOJL_993813');
column_VA_TEXTINPUTBOXOJL_993813.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXOJL_993813?.templateRef;
const tplEdit_VA_TEXTINPUTBOXOJL_993813 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXOJL_993813');
column_VA_TEXTINPUTBOXOJL_993813.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXOJL_993813?.templateRef;
}
const column_VA_TEXTINPUTBOXAZT_394813 = this.metaData.viewState["QV_8477_65404"].columns.find((col: any) => col.field == 'period');
if (column_VA_TEXTINPUTBOXAZT_394813 != undefined) {
const tplCell_VA_TEXTINPUTBOXAZT_394813 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXAZT_394813');
column_VA_TEXTINPUTBOXAZT_394813.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXAZT_394813?.templateRef;
const tplEdit_VA_TEXTINPUTBOXAZT_394813 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXAZT_394813');
column_VA_TEXTINPUTBOXAZT_394813.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXAZT_394813?.templateRef;
}
const column_VA_TEXTINPUTBOXVZZ_676813 = this.metaData.viewState["QV_8477_65404"].columns.find((col: any) => col.field == 'quote');
if (column_VA_TEXTINPUTBOXVZZ_676813 != undefined) {
const tplCell_VA_TEXTINPUTBOXVZZ_676813 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXVZZ_676813');
column_VA_TEXTINPUTBOXVZZ_676813.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXVZZ_676813?.templateRef;
const tplEdit_VA_TEXTINPUTBOXVZZ_676813 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXVZZ_676813');
column_VA_TEXTINPUTBOXVZZ_676813.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXVZZ_676813?.templateRef;
}
const column_VA_TEXTINPUTBOXOKT_824813 = this.metaData.viewState["QV_8477_65404"].columns.find((col: any) => col.field == 'grace');
if (column_VA_TEXTINPUTBOXOKT_824813 != undefined) {
const tplCell_VA_TEXTINPUTBOXOKT_824813 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXOKT_824813');
column_VA_TEXTINPUTBOXOKT_824813.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXOKT_824813?.templateRef;
const tplEdit_VA_TEXTINPUTBOXOKT_824813 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXOKT_824813');
column_VA_TEXTINPUTBOXOKT_824813.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXOKT_824813?.templateRef;
}
const column_VA_TEXTINPUTBOXSWA_743813 = this.metaData.viewState["QV_8477_65404"].columns.find((col: any) => col.field == 'paid');
if (column_VA_TEXTINPUTBOXSWA_743813 != undefined) {
const tplCell_VA_TEXTINPUTBOXSWA_743813 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXSWA_743813');
column_VA_TEXTINPUTBOXSWA_743813.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXSWA_743813?.templateRef;
const tplEdit_VA_TEXTINPUTBOXSWA_743813 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXSWA_743813');
column_VA_TEXTINPUTBOXSWA_743813.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXSWA_743813?.templateRef;
}
const column_VA_TEXTINPUTBOXEEZ_207813 = this.metaData.viewState["QV_8477_65404"].columns.find((col: any) => col.field == 'accumulated');
if (column_VA_TEXTINPUTBOXEEZ_207813 != undefined) {
const tplCell_VA_TEXTINPUTBOXEEZ_207813 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXEEZ_207813');
column_VA_TEXTINPUTBOXEEZ_207813.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXEEZ_207813?.templateRef;
const tplEdit_VA_TEXTINPUTBOXEEZ_207813 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXEEZ_207813');
column_VA_TEXTINPUTBOXEEZ_207813.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXEEZ_207813?.templateRef;
}
const column_VA_TEXTINPUTBOXECP_560813 = this.metaData.viewState["QV_8477_65404"].columns.find((col: any) => col.field == 'sequential');
if (column_VA_TEXTINPUTBOXECP_560813 != undefined) {
const tplCell_VA_TEXTINPUTBOXECP_560813 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXECP_560813');
column_VA_TEXTINPUTBOXECP_560813.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXECP_560813?.templateRef;
const tplEdit_VA_TEXTINPUTBOXECP_560813 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXECP_560813');
column_VA_TEXTINPUTBOXECP_560813.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXECP_560813?.templateRef;
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
AmortizationQuoteDetail: viewState.T_AMORTIZATIDTE_881.controls.AmortizationQuoteDetail as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'MNTNN', taskId: 'T_AMORTIZATIDTE_881', taskVersion: '1.0.0', vcId: 'VC_AMORTIZATE_895881', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(false, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/MNTNN/T_AMORTIZATIDTE_881', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_8477_65404', { queryId: 'Q_AMORTITT_8477', entityName: 'AmortizationQuoteDetail', filter: "", cobisRequestServerConfig: { pageSize :10 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'AmortizationQuoteDetailForm' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
