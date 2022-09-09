//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-reajustekp-207872.model';
import { ViewState } from './model/vc-reajustekp-207872-view-state';
import { VcReajustekp207872Custom } from './vc-reajustekp-207872.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-reajustekp-207872',
templateUrl: './vc-reajustekp-207872.component.html'
})
export class VcReajustekp207872Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcReajustekp207872Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXCKZ_136319 = this.metaData.viewState["QV_5831_17646"].columns.find((col: any) => col.field == 'date');
if (column_VA_TEXTINPUTBOXCKZ_136319 != undefined) {
const tplCell_VA_TEXTINPUTBOXCKZ_136319 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXCKZ_136319');
column_VA_TEXTINPUTBOXCKZ_136319.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXCKZ_136319?.templateRef;
const tplEdit_VA_TEXTINPUTBOXCKZ_136319 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXCKZ_136319');
column_VA_TEXTINPUTBOXCKZ_136319.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXCKZ_136319?.templateRef;
}
const column_VA_TEXTINPUTBOXQCR_748319 = this.metaData.viewState["QV_5831_17646"].columns.find((col: any) => col.field == 'mantCuota');
if (column_VA_TEXTINPUTBOXQCR_748319 != undefined) {
const tplCell_VA_TEXTINPUTBOXQCR_748319 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXQCR_748319');
column_VA_TEXTINPUTBOXQCR_748319.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXQCR_748319?.templateRef;
const tplEdit_VA_TEXTINPUTBOXQCR_748319 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXQCR_748319');
column_VA_TEXTINPUTBOXQCR_748319.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXQCR_748319?.templateRef;
}
const column_VA_TEXTINPUTBOXKUR_906319 = this.metaData.viewState["QV_5831_17646"].columns.find((col: any) => col.field == 'secuencial');
if (column_VA_TEXTINPUTBOXKUR_906319 != undefined) {
const tplCell_VA_TEXTINPUTBOXKUR_906319 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXKUR_906319');
column_VA_TEXTINPUTBOXKUR_906319.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXKUR_906319?.templateRef;
const tplEdit_VA_TEXTINPUTBOXKUR_906319 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXKUR_906319');
column_VA_TEXTINPUTBOXKUR_906319.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXKUR_906319?.templateRef;
}
const column_VA_TEXTINPUTBOXPIL_163319 = this.metaData.viewState["QV_5831_17646"].columns.find((col: any) => col.field == 'desagio');
if (column_VA_TEXTINPUTBOXPIL_163319 != undefined) {
const tplCell_VA_TEXTINPUTBOXPIL_163319 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXPIL_163319');
column_VA_TEXTINPUTBOXPIL_163319.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXPIL_163319?.templateRef;
const tplEdit_VA_TEXTINPUTBOXPIL_163319 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXPIL_163319');
column_VA_TEXTINPUTBOXPIL_163319.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXPIL_163319?.templateRef;
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
Loan: viewState.T_REAJUSTESRCSN_872.controls.Loan as FormGroup ,
ReadjustmentLoanCab: viewState.T_REAJUSTESRCSN_872.controls.ReadjustmentLoanCab as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'MNTNN', taskId: 'T_REAJUSTESRCSN_872', taskVersion: '1.0.0', vcId: 'VC_REAJUSTEKP_207872', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/MNTNN/T_REAJUSTESRCSN_872', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ['VA_TEXTINPUTBOXQCR_748319', { catalogName: 'ca_reajuste_especial', filter: "", cobisRequestServerConfig: null, cache: 0 , controlGridInfo: { queryViewId: "QV_5831_17646", columnId: "mantCuota" } }], ['VA_TEXTINPUTBOXPIL_163319', { catalogName: 'ca_desagio', filter: "", cobisRequestServerConfig: null, cache: 0 , controlGridInfo: { queryViewId: "QV_5831_17646", columnId: "tipo" } }], ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_5831_17646', { queryId: 'Q_REAJUSBC_5831', entityName: 'ReadjustmentLoanCab', filter: "", cobisRequestServerConfig: { pageSize :10 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'ASSTS.LBL_ASSTS_REAJUSTEC_42213' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
