//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-projectiaa-407344.model';
import { ViewState } from './model/vc-projectiaa-407344-view-state';
import { VcProjectiaa407344Custom } from './vc-projectiaa-407344.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-projectiaa-407344',
templateUrl: './vc-projectiaa-407344.component.html'
})
export class VcProjectiaa407344Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcProjectiaa407344Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXVRY_167888 = this.metaData.viewState["QV_8396_63374"].columns.find((col: any) => col.field == 'sequential');
if (column_VA_TEXTINPUTBOXVRY_167888 != undefined) {
const tplCell_VA_TEXTINPUTBOXVRY_167888 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXVRY_167888');
column_VA_TEXTINPUTBOXVRY_167888.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXVRY_167888?.templateRef;
const tplEdit_VA_TEXTINPUTBOXVRY_167888 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXVRY_167888');
column_VA_TEXTINPUTBOXVRY_167888.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXVRY_167888?.templateRef;
}
const column_VA_TEXTINPUTBOXFHW_169888 = this.metaData.viewState["QV_8396_63374"].columns.find((col: any) => col.field == 'iniDiv');
if (column_VA_TEXTINPUTBOXFHW_169888 != undefined) {
const tplCell_VA_TEXTINPUTBOXFHW_169888 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXFHW_169888');
column_VA_TEXTINPUTBOXFHW_169888.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXFHW_169888?.templateRef;
const tplEdit_VA_TEXTINPUTBOXFHW_169888 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXFHW_169888');
column_VA_TEXTINPUTBOXFHW_169888.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXFHW_169888?.templateRef;
}
const column_VA_TEXTINPUTBOXCDO_902888 = this.metaData.viewState["QV_8396_63374"].columns.find((col: any) => col.field == 'divUp');
if (column_VA_TEXTINPUTBOXCDO_902888 != undefined) {
const tplCell_VA_TEXTINPUTBOXCDO_902888 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXCDO_902888');
column_VA_TEXTINPUTBOXCDO_902888.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXCDO_902888?.templateRef;
const tplEdit_VA_TEXTINPUTBOXCDO_902888 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXCDO_902888');
column_VA_TEXTINPUTBOXCDO_902888.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXCDO_902888?.templateRef;
}
const column_VA_DATEFIELDZFVCGN_770888 = this.metaData.viewState["QV_8396_63374"].columns.find((col: any) => col.field == 'date');
if (column_VA_DATEFIELDZFVCGN_770888 != undefined) {
const tplCell_VA_DATEFIELDZFVCGN_770888 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DATEFIELDZFVCGN_770888');
column_VA_DATEFIELDZFVCGN_770888.properties.cellTemplate = tplCell_VA_DATEFIELDZFVCGN_770888?.templateRef;
const tplEdit_VA_DATEFIELDZFVCGN_770888 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DATEFIELDZFVCGN_770888');
column_VA_DATEFIELDZFVCGN_770888.properties.editTemplate = tplEdit_VA_DATEFIELDZFVCGN_770888?.templateRef;
}
const column_VA_TEXTINPUTBOXYVX_228888 = this.metaData.viewState["QV_8396_63374"].columns.find((col: any) => col.field == 'concept');
if (column_VA_TEXTINPUTBOXYVX_228888 != undefined) {
const tplCell_VA_TEXTINPUTBOXYVX_228888 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXYVX_228888');
column_VA_TEXTINPUTBOXYVX_228888.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXYVX_228888?.templateRef;
const tplEdit_VA_TEXTINPUTBOXYVX_228888 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXYVX_228888');
column_VA_TEXTINPUTBOXYVX_228888.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXYVX_228888?.templateRef;
}
const column_VA_TEXTINPUTBOXPSH_886888 = this.metaData.viewState["QV_8396_63374"].columns.find((col: any) => col.field == 'value');
if (column_VA_TEXTINPUTBOXPSH_886888 != undefined) {
const tplCell_VA_TEXTINPUTBOXPSH_886888 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXPSH_886888');
column_VA_TEXTINPUTBOXPSH_886888.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXPSH_886888?.templateRef;
const tplEdit_VA_TEXTINPUTBOXPSH_886888 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXPSH_886888');
column_VA_TEXTINPUTBOXPSH_886888.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXPSH_886888?.templateRef;
}
const column_VA_TEXTINPUTBOXRKL_324888 = this.metaData.viewState["QV_8396_63374"].columns.find((col: any) => col.field == 'commentary');
if (column_VA_TEXTINPUTBOXRKL_324888 != undefined) {
const tplCell_VA_TEXTINPUTBOXRKL_324888 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXRKL_324888');
column_VA_TEXTINPUTBOXRKL_324888.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXRKL_324888?.templateRef;
const tplEdit_VA_TEXTINPUTBOXRKL_324888 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXRKL_324888');
column_VA_TEXTINPUTBOXRKL_324888.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXRKL_324888?.templateRef;
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
Loan: viewState.T_PROJECTINGSTR_344.controls.Loan as FormGroup ,
OtherCharges: viewState.T_PROJECTINGSTR_344.controls.OtherCharges as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'MNTNN', taskId: 'T_PROJECTINGSTR_344', taskVersion: '1.0.0', vcId: 'VC_PROJECTIAA_407344', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, true), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/MNTNN/T_PROJECTINGSTR_344', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_8396_63374', { queryId: 'Q_INGOTRSR_8396', entityName: 'OtherCharges', filter: "", cobisRequestServerConfig: { pageSize :10 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'ASSTS.LBL_ASSTS_INGRESOOR_92676' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
beforeOpenGridDialogQV_8396_63374(event: any) {
this.beforeOpenGridDialog(event, {
hasBeforeOpenDialogEvent: false,
hasAfterCloseDialogEvent: false,
moduleId: "ASSTS",
subModuleId: "MNTNN",
taskId: "T_TESTWKHELVLBD_756",
taskVersion: "1.0.0",
viewContainerId: "VC_TESTBKYOLO_973756",
title: ''
});
};
}
