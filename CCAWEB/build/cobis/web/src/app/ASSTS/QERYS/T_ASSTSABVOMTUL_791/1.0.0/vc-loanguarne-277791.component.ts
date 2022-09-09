//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-loanguarne-277791.model';
import { ViewState } from './model/vc-loanguarne-277791-view-state';
import { VcLoanguarne277791Custom } from './vc-loanguarne-277791.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-loanguarne-277791',
templateUrl: './vc-loanguarne-277791.component.html'
})
export class VcLoanguarne277791Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcLoanguarne277791Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXXFD_995717 = this.metaData.viewState["QV_UH10_ODY37"].columns.find((col: any) => col.field == 'guaranteesSurety');
if (column_VA_TEXTINPUTBOXXFD_995717 != undefined) {
const tplCell_VA_TEXTINPUTBOXXFD_995717 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXXFD_995717');
column_VA_TEXTINPUTBOXXFD_995717.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXXFD_995717?.templateRef;
const tplEdit_VA_TEXTINPUTBOXXFD_995717 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXXFD_995717');
column_VA_TEXTINPUTBOXXFD_995717.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXXFD_995717?.templateRef;
}
const column_VA_TEXTINPUTBOXWUX_635717 = this.metaData.viewState["QV_UH10_ODY37"].columns.find((col: any) => col.field == 'statusGuaranteesSurety');
if (column_VA_TEXTINPUTBOXWUX_635717 != undefined) {
const tplCell_VA_TEXTINPUTBOXWUX_635717 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXWUX_635717');
column_VA_TEXTINPUTBOXWUX_635717.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXWUX_635717?.templateRef;
const tplEdit_VA_TEXTINPUTBOXWUX_635717 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXWUX_635717');
column_VA_TEXTINPUTBOXWUX_635717.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXWUX_635717?.templateRef;
}
const column_VA_TEXTINPUTBOXVCA_636717 = this.metaData.viewState["QV_UH10_ODY37"].columns.find((col: any) => col.field == 'description');
if (column_VA_TEXTINPUTBOXVCA_636717 != undefined) {
const tplCell_VA_TEXTINPUTBOXVCA_636717 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXVCA_636717');
column_VA_TEXTINPUTBOXVCA_636717.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXVCA_636717?.templateRef;
const tplEdit_VA_TEXTINPUTBOXVCA_636717 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXVCA_636717');
column_VA_TEXTINPUTBOXVCA_636717.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXVCA_636717?.templateRef;
}
const column_VA_TEXTINPUTBOXLVI_499717 = this.metaData.viewState["QV_UH10_ODY37"].columns.find((col: any) => col.field == 'customerID');
if (column_VA_TEXTINPUTBOXLVI_499717 != undefined) {
const tplCell_VA_TEXTINPUTBOXLVI_499717 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXLVI_499717');
column_VA_TEXTINPUTBOXLVI_499717.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXLVI_499717?.templateRef;
const tplEdit_VA_TEXTINPUTBOXLVI_499717 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXLVI_499717');
column_VA_TEXTINPUTBOXLVI_499717.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXLVI_499717?.templateRef;
}
const column_VA_TEXTINPUTBOXAQZ_389717 = this.metaData.viewState["QV_UH10_ODY37"].columns.find((col: any) => col.field == 'customer');
if (column_VA_TEXTINPUTBOXAQZ_389717 != undefined) {
const tplCell_VA_TEXTINPUTBOXAQZ_389717 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXAQZ_389717');
column_VA_TEXTINPUTBOXAQZ_389717.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXAQZ_389717?.templateRef;
const tplEdit_VA_TEXTINPUTBOXAQZ_389717 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXAQZ_389717');
column_VA_TEXTINPUTBOXAQZ_389717.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXAQZ_389717?.templateRef;
}
const column_VA_TEXTINPUTBOXWIZ_348717 = this.metaData.viewState["QV_UH10_ODY37"].columns.find((col: any) => col.field == 'currentValue');
if (column_VA_TEXTINPUTBOXWIZ_348717 != undefined) {
const tplCell_VA_TEXTINPUTBOXWIZ_348717 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXWIZ_348717');
column_VA_TEXTINPUTBOXWIZ_348717.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXWIZ_348717?.templateRef;
const tplEdit_VA_TEXTINPUTBOXWIZ_348717 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXWIZ_348717');
column_VA_TEXTINPUTBOXWIZ_348717.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXWIZ_348717?.templateRef;
}
const column_VA_TEXTINPUTBOXDKY_119717 = this.metaData.viewState["QV_UH10_ODY37"].columns.find((col: any) => col.field == 'currencyID');
if (column_VA_TEXTINPUTBOXDKY_119717 != undefined) {
const tplCell_VA_TEXTINPUTBOXDKY_119717 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXDKY_119717');
column_VA_TEXTINPUTBOXDKY_119717.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXDKY_119717?.templateRef;
const tplEdit_VA_TEXTINPUTBOXDKY_119717 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXDKY_119717');
column_VA_TEXTINPUTBOXDKY_119717.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXDKY_119717?.templateRef;
}
const column_VA_TEXTINPUTBOXPSB_203717 = this.metaData.viewState["QV_UH10_ODY37"].columns.find((col: any) => col.field == 'createdOn');
if (column_VA_TEXTINPUTBOXPSB_203717 != undefined) {
const tplCell_VA_TEXTINPUTBOXPSB_203717 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXPSB_203717');
column_VA_TEXTINPUTBOXPSB_203717.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXPSB_203717?.templateRef;
const tplEdit_VA_TEXTINPUTBOXPSB_203717 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXPSB_203717');
column_VA_TEXTINPUTBOXPSB_203717.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXPSB_203717?.templateRef;
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
LoanGuaranteesSurety: viewState.T_ASSTSABVOMTUL_791.controls.LoanGuaranteesSurety as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'QERYS', taskId: 'T_ASSTSABVOMTUL_791', taskVersion: '1.0.0', vcId: 'VC_LOANGUARNE_277791', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(false, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/QERYS/T_ASSTSABVOMTUL_791', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_UH10_ODY37', { queryId: 'Q_LOANTUNT_QF10', entityName: 'LoanGuaranteesSurety', filter: "", cobisRequestServerConfig: { pageSize :10 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'QueryLoanGuarantesSuretyForm' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
