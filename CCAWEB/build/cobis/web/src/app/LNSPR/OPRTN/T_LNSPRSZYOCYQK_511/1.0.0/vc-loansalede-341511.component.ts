//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-loansalede-341511.model';
import { ViewState } from './model/vc-loansalede-341511-view-state';
import { VcLoansalede341511Custom } from './vc-loansalede-341511.custom';
import { LNSPRService} from 'src/app/LNSPR/service-modules/LNSPR.service';
@Component({
selector: 'cobis-vc-loansalede-341511',
templateUrl: './vc-loansalede-341511.component.html'
})
export class VcLoansalede341511Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private lnspr: LNSPRService) {
super(new VcLoansalede341511Custom(designer.cobisCommons,lnspr), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXUVP_819754 = this.metaData.viewState["QV_HF48_XTR41"].columns.find((col: any) => col.field == 'operation');
if (column_VA_TEXTINPUTBOXUVP_819754 != undefined) {
const tplCell_VA_TEXTINPUTBOXUVP_819754 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXUVP_819754');
column_VA_TEXTINPUTBOXUVP_819754.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXUVP_819754?.templateRef;
const tplEdit_VA_TEXTINPUTBOXUVP_819754 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXUVP_819754');
column_VA_TEXTINPUTBOXUVP_819754.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXUVP_819754?.templateRef;
}
const column_VA_DATEFIELDDMPRTD_928754 = this.metaData.viewState["QV_HF48_XTR41"].columns.find((col: any) => col.field == 'dateSale');
if (column_VA_DATEFIELDDMPRTD_928754 != undefined) {
const tplCell_VA_DATEFIELDDMPRTD_928754 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DATEFIELDDMPRTD_928754');
column_VA_DATEFIELDDMPRTD_928754.properties.cellTemplate = tplCell_VA_DATEFIELDDMPRTD_928754?.templateRef;
const tplEdit_VA_DATEFIELDDMPRTD_928754 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DATEFIELDDMPRTD_928754');
column_VA_DATEFIELDDMPRTD_928754.properties.editTemplate = tplEdit_VA_DATEFIELDDMPRTD_928754?.templateRef;
}
const column_VA_TEXTINPUTBOXVIO_501754 = this.metaData.viewState["QV_HF48_XTR41"].columns.find((col: any) => col.field == 'state');
if (column_VA_TEXTINPUTBOXVIO_501754 != undefined) {
const tplCell_VA_TEXTINPUTBOXVIO_501754 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXVIO_501754');
column_VA_TEXTINPUTBOXVIO_501754.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXVIO_501754?.templateRef;
const tplEdit_VA_TEXTINPUTBOXVIO_501754 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXVIO_501754');
column_VA_TEXTINPUTBOXVIO_501754.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXVIO_501754?.templateRef;
}
const column_VA_TEXTINPUTBOXCLS_106754 = this.metaData.viewState["QV_HF48_XTR41"].columns.find((col: any) => col.field == 'error');
if (column_VA_TEXTINPUTBOXCLS_106754 != undefined) {
const tplCell_VA_TEXTINPUTBOXCLS_106754 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXCLS_106754');
column_VA_TEXTINPUTBOXCLS_106754.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXCLS_106754?.templateRef;
const tplEdit_VA_TEXTINPUTBOXCLS_106754 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXCLS_106754');
column_VA_TEXTINPUTBOXCLS_106754.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXCLS_106754?.templateRef;
}
const column_VA_TEXTINPUTBOXCPG_885754 = this.metaData.viewState["QV_HF48_XTR41"].columns.find((col: any) => col.field == 'errorDescription');
if (column_VA_TEXTINPUTBOXCPG_885754 != undefined) {
const tplCell_VA_TEXTINPUTBOXCPG_885754 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXCPG_885754');
column_VA_TEXTINPUTBOXCPG_885754.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXCPG_885754?.templateRef;
const tplEdit_VA_TEXTINPUTBOXCPG_885754 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXCPG_885754');
column_VA_TEXTINPUTBOXCPG_885754.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXCPG_885754?.templateRef;
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
LoanSaleDetailList: viewState.T_LNSPRSZYOCYQK_511.controls.LoanSaleDetailList as FormGroup
};
this.metaData = { moduleId: 'LNSPR', subModuleId: 'OPRTN', taskId: 'T_LNSPRSZYOCYQK_511', taskVersion: '1.0.0', vcId: 'VC_LOANSALEDE_341511', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/LNSPR/OPRTN/T_LNSPRSZYOCYQK_511', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_HF48_XTR41', { queryId: 'Q_LOANELLL_AR48', entityName: 'LoanSaleDetailList', filter: "", cobisRequestServerConfig: { pageSize :5 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'LoanSaleDetailForm' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
