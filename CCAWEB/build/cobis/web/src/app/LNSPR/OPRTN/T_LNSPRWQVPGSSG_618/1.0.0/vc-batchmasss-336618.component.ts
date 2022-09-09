//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-batchmasss-336618.model';
import { ViewState } from './model/vc-batchmasss-336618-view-state';
import { VcBatchmasss336618Custom } from './vc-batchmasss-336618.custom';
import { LNSPRService} from 'src/app/LNSPR/service-modules/LNSPR.service';
@Component({
selector: 'cobis-vc-batchmasss-336618',
templateUrl: './vc-batchmasss-336618.component.html'
})
export class VcBatchmasss336618Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private lnspr: LNSPRService) {
super(new VcBatchmasss336618Custom(designer.cobisCommons,lnspr), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_DATEFIELDRJLBIW_571436 = this.metaData.viewState["QV_WR71_MYK57"].columns.find((col: any) => col.field == 'datePayment');
if (column_VA_DATEFIELDRJLBIW_571436 != undefined) {
const tplCell_VA_DATEFIELDRJLBIW_571436 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DATEFIELDRJLBIW_571436');
column_VA_DATEFIELDRJLBIW_571436.properties.cellTemplate = tplCell_VA_DATEFIELDRJLBIW_571436?.templateRef;
const tplEdit_VA_DATEFIELDRJLBIW_571436 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DATEFIELDRJLBIW_571436');
column_VA_DATEFIELDRJLBIW_571436.properties.editTemplate = tplEdit_VA_DATEFIELDRJLBIW_571436?.templateRef;
}
const column_VA_TEXTINPUTBOXESE_841436 = this.metaData.viewState["QV_WR71_MYK57"].columns.find((col: any) => col.field == 'numberBank');
if (column_VA_TEXTINPUTBOXESE_841436 != undefined) {
const tplCell_VA_TEXTINPUTBOXESE_841436 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXESE_841436');
column_VA_TEXTINPUTBOXESE_841436.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXESE_841436?.templateRef;
const tplEdit_VA_TEXTINPUTBOXESE_841436 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXESE_841436');
column_VA_TEXTINPUTBOXESE_841436.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXESE_841436?.templateRef;
}
const column_VA_TEXTINPUTBOXCLK_733436 = this.metaData.viewState["QV_WR71_MYK57"].columns.find((col: any) => col.field == 'customerName');
if (column_VA_TEXTINPUTBOXCLK_733436 != undefined) {
const tplCell_VA_TEXTINPUTBOXCLK_733436 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXCLK_733436');
column_VA_TEXTINPUTBOXCLK_733436.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXCLK_733436?.templateRef;
const tplEdit_VA_TEXTINPUTBOXCLK_733436 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXCLK_733436');
column_VA_TEXTINPUTBOXCLK_733436.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXCLK_733436?.templateRef;
}
const column_VA_TEXTINPUTBOXJJV_466436 = this.metaData.viewState["QV_WR71_MYK57"].columns.find((col: any) => col.field == 'currencyPayment');
if (column_VA_TEXTINPUTBOXJJV_466436 != undefined) {
const tplCell_VA_TEXTINPUTBOXJJV_466436 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXJJV_466436');
column_VA_TEXTINPUTBOXJJV_466436.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXJJV_466436?.templateRef;
const tplEdit_VA_TEXTINPUTBOXJJV_466436 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXJJV_466436');
column_VA_TEXTINPUTBOXJJV_466436.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXJJV_466436?.templateRef;
}
const column_VA_TEXTINPUTBOXTSE_297436 = this.metaData.viewState["QV_WR71_MYK57"].columns.find((col: any) => col.field == 'formPayment');
if (column_VA_TEXTINPUTBOXTSE_297436 != undefined) {
const tplCell_VA_TEXTINPUTBOXTSE_297436 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXTSE_297436');
column_VA_TEXTINPUTBOXTSE_297436.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXTSE_297436?.templateRef;
const tplEdit_VA_TEXTINPUTBOXTSE_297436 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXTSE_297436');
column_VA_TEXTINPUTBOXTSE_297436.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXTSE_297436?.templateRef;
}
const column_VA_TEXTINPUTBOXQST_156436 = this.metaData.viewState["QV_WR71_MYK57"].columns.find((col: any) => col.field == 'valuePay');
if (column_VA_TEXTINPUTBOXQST_156436 != undefined) {
const tplCell_VA_TEXTINPUTBOXQST_156436 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXQST_156436');
column_VA_TEXTINPUTBOXQST_156436.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXQST_156436?.templateRef;
const tplEdit_VA_TEXTINPUTBOXQST_156436 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXQST_156436');
column_VA_TEXTINPUTBOXQST_156436.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXQST_156436?.templateRef;
}
const column_VA_TEXTINPUTBOXPVE_204436 = this.metaData.viewState["QV_WR71_MYK57"].columns.find((col: any) => col.field == 'numberAccount');
if (column_VA_TEXTINPUTBOXPVE_204436 != undefined) {
const tplCell_VA_TEXTINPUTBOXPVE_204436 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXPVE_204436');
column_VA_TEXTINPUTBOXPVE_204436.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXPVE_204436?.templateRef;
const tplEdit_VA_TEXTINPUTBOXPVE_204436 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXPVE_204436');
column_VA_TEXTINPUTBOXPVE_204436.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXPVE_204436?.templateRef;
}
const column_VA_TEXTINPUTBOXTAV_198436 = this.metaData.viewState["QV_WR71_MYK57"].columns.find((col: any) => col.field == 'description');
if (column_VA_TEXTINPUTBOXTAV_198436 != undefined) {
const tplCell_VA_TEXTINPUTBOXTAV_198436 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXTAV_198436');
column_VA_TEXTINPUTBOXTAV_198436.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXTAV_198436?.templateRef;
const tplEdit_VA_TEXTINPUTBOXTAV_198436 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXTAV_198436');
column_VA_TEXTINPUTBOXTAV_198436.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXTAV_198436?.templateRef;
}
const column_VA_TEXTINPUTBOXJFS_403436 = this.metaData.viewState["QV_WR71_MYK57"].columns.find((col: any) => col.field == 'errorPM');
if (column_VA_TEXTINPUTBOXJFS_403436 != undefined) {
const tplCell_VA_TEXTINPUTBOXJFS_403436 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXJFS_403436');
column_VA_TEXTINPUTBOXJFS_403436.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXJFS_403436?.templateRef;
const tplEdit_VA_TEXTINPUTBOXJFS_403436 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXJFS_403436');
column_VA_TEXTINPUTBOXJFS_403436.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXJFS_403436?.templateRef;
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
LoanSearchFilter: viewState.T_LNSPRWQVPGSSG_618.controls.LoanSearchFilter as FormGroup ,
MassivePayments: viewState.T_LNSPRWQVPGSSG_618.controls.MassivePayments as FormGroup
};
this.metaData = { moduleId: 'LNSPR', subModuleId: 'OPRTN', taskId: 'T_LNSPRWQVPGSSG_618', taskVersion: '1.0.0', vcId: 'VC_BATCHMASSS_336618', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(false, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/LNSPR/OPRTN/T_LNSPRWQVPGSSG_618', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_WR71_MYK57', { queryId: 'Q_MASSTENM_SJ71', entityName: 'MassivePayments', filter: "", cobisRequestServerConfig: { pageSize :10 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'LNSPR.LBL_LNSPR_PAGOSMAVH_34904' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
