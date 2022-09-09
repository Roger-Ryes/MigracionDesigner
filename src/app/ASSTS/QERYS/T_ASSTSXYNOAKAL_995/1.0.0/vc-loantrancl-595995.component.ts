//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-loantrancl-595995.model';
import { ViewState } from './model/vc-loantrancl-595995-view-state';
import { VcLoantrancl595995Custom } from './vc-loantrancl-595995.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-loantrancl-595995',
templateUrl: './vc-loantrancl-595995.component.html'
})
export class VcLoantrancl595995Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcLoantrancl595995Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXFOG_660343 = this.metaData.viewState["QV_RT22_BLD64"].columns.find((col: any) => col.field == 'dividend');
if (column_VA_TEXTINPUTBOXFOG_660343 != undefined) {
const tplCell_VA_TEXTINPUTBOXFOG_660343 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXFOG_660343');
column_VA_TEXTINPUTBOXFOG_660343.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXFOG_660343?.templateRef;
const tplEdit_VA_TEXTINPUTBOXFOG_660343 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXFOG_660343');
column_VA_TEXTINPUTBOXFOG_660343.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXFOG_660343?.templateRef;
}
const column_VA_TEXTINPUTBOXBYW_928343 = this.metaData.viewState["QV_RT22_BLD64"].columns.find((col: any) => col.field == 'heading');
if (column_VA_TEXTINPUTBOXBYW_928343 != undefined) {
const tplCell_VA_TEXTINPUTBOXBYW_928343 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXBYW_928343');
column_VA_TEXTINPUTBOXBYW_928343.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXBYW_928343?.templateRef;
const tplEdit_VA_TEXTINPUTBOXBYW_928343 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXBYW_928343');
column_VA_TEXTINPUTBOXBYW_928343.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXBYW_928343?.templateRef;
}
const column_VA_TEXTINPUTBOXEVO_191343 = this.metaData.viewState["QV_RT22_BLD64"].columns.find((col: any) => col.field == 'state');
if (column_VA_TEXTINPUTBOXEVO_191343 != undefined) {
const tplCell_VA_TEXTINPUTBOXEVO_191343 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXEVO_191343');
column_VA_TEXTINPUTBOXEVO_191343.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXEVO_191343?.templateRef;
const tplEdit_VA_TEXTINPUTBOXEVO_191343 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXEVO_191343');
column_VA_TEXTINPUTBOXEVO_191343.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXEVO_191343?.templateRef;
}
const column_VA_TEXTINPUTBOXMGX_367343 = this.metaData.viewState["QV_RT22_BLD64"].columns.find((col: any) => col.field == 'coin');
if (column_VA_TEXTINPUTBOXMGX_367343 != undefined) {
const tplCell_VA_TEXTINPUTBOXMGX_367343 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXMGX_367343');
column_VA_TEXTINPUTBOXMGX_367343.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXMGX_367343?.templateRef;
const tplEdit_VA_TEXTINPUTBOXMGX_367343 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXMGX_367343');
column_VA_TEXTINPUTBOXMGX_367343.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXMGX_367343?.templateRef;
}
const column_VA_TEXTINPUTBOXISA_496343 = this.metaData.viewState["QV_RT22_BLD64"].columns.find((col: any) => col.field == 'amount');
if (column_VA_TEXTINPUTBOXISA_496343 != undefined) {
const tplCell_VA_TEXTINPUTBOXISA_496343 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXISA_496343');
column_VA_TEXTINPUTBOXISA_496343.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXISA_496343?.templateRef;
const tplEdit_VA_TEXTINPUTBOXISA_496343 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXISA_496343');
column_VA_TEXTINPUTBOXISA_496343.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXISA_496343?.templateRef;
}
const column_VA_TEXTINPUTBOXSJW_967343 = this.metaData.viewState["QV_RT22_BLD64"].columns.find((col: any) => col.field == 'amountMn');
if (column_VA_TEXTINPUTBOXSJW_967343 != undefined) {
const tplCell_VA_TEXTINPUTBOXSJW_967343 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXSJW_967343');
column_VA_TEXTINPUTBOXSJW_967343.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXSJW_967343?.templateRef;
const tplEdit_VA_TEXTINPUTBOXSJW_967343 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXSJW_967343');
column_VA_TEXTINPUTBOXSJW_967343.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXSJW_967343?.templateRef;
}
const column_VA_TEXTINPUTBOXNWR_661343 = this.metaData.viewState["QV_RT22_BLD64"].columns.find((col: any) => col.field == 'price');
if (column_VA_TEXTINPUTBOXNWR_661343 != undefined) {
const tplCell_VA_TEXTINPUTBOXNWR_661343 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXNWR_661343');
column_VA_TEXTINPUTBOXNWR_661343.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXNWR_661343?.templateRef;
const tplEdit_VA_TEXTINPUTBOXNWR_661343 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXNWR_661343');
column_VA_TEXTINPUTBOXNWR_661343.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXNWR_661343?.templateRef;
}
const column_VA_TEXTINPUTBOXYJD_436343 = this.metaData.viewState["QV_RT22_BLD64"].columns.find((col: any) => col.field == 'codeValue');
if (column_VA_TEXTINPUTBOXYJD_436343 != undefined) {
const tplCell_VA_TEXTINPUTBOXYJD_436343 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXYJD_436343');
column_VA_TEXTINPUTBOXYJD_436343.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXYJD_436343?.templateRef;
const tplEdit_VA_TEXTINPUTBOXYJD_436343 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXYJD_436343');
column_VA_TEXTINPUTBOXYJD_436343.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXYJD_436343?.templateRef;
}
const column_VA_TEXTINPUTBOXYVP_542343 = this.metaData.viewState["QV_RT22_BLD64"].columns.find((col: any) => col.field == 'affectation');
if (column_VA_TEXTINPUTBOXYVP_542343 != undefined) {
const tplCell_VA_TEXTINPUTBOXYVP_542343 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXYVP_542343');
column_VA_TEXTINPUTBOXYVP_542343.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXYVP_542343?.templateRef;
const tplEdit_VA_TEXTINPUTBOXYVP_542343 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXYVP_542343');
column_VA_TEXTINPUTBOXYVP_542343.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXYVP_542343?.templateRef;
}
const column_VA_TEXTINPUTBOXGVY_493343 = this.metaData.viewState["QV_RT22_BLD64"].columns.find((col: any) => col.field == 'bill');
if (column_VA_TEXTINPUTBOXGVY_493343 != undefined) {
const tplCell_VA_TEXTINPUTBOXGVY_493343 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXGVY_493343');
column_VA_TEXTINPUTBOXGVY_493343.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXGVY_493343?.templateRef;
const tplEdit_VA_TEXTINPUTBOXGVY_493343 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXGVY_493343');
column_VA_TEXTINPUTBOXGVY_493343.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXGVY_493343?.templateRef;
}
const column_VA_TEXTINPUTBOXGVD_595343 = this.metaData.viewState["QV_RT22_BLD64"].columns.find((col: any) => col.field == 'beneficiary');
if (column_VA_TEXTINPUTBOXGVD_595343 != undefined) {
const tplCell_VA_TEXTINPUTBOXGVD_595343 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXGVD_595343');
column_VA_TEXTINPUTBOXGVD_595343.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXGVD_595343?.templateRef;
const tplEdit_VA_TEXTINPUTBOXGVD_595343 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXGVD_595343');
column_VA_TEXTINPUTBOXGVD_595343.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXGVD_595343?.templateRef;
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
DetailTransaction: viewState.T_ASSTSXYNOAKAL_995.controls.DetailTransaction as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'QERYS', taskId: 'T_ASSTSXYNOAKAL_995', taskVersion: '1.0.0', vcId: 'VC_LOANTRANCL_595995', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/QERYS/T_ASSTSXYNOAKAL_995', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_RT22_BLD64', { queryId: 'Q_DETASSOL_MC22', entityName: 'DetailTransaction', filter: "", cobisRequestServerConfig: { pageSize :10 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'LoanTransactionDetailForm' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
