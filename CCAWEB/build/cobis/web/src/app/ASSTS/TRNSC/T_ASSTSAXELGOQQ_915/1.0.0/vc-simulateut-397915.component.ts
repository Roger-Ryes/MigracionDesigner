//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-simulateut-397915.model';
import { ViewState } from './model/vc-simulateut-397915-view-state';
import { VcSimulateut397915Custom } from './vc-simulateut-397915.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-simulateut-397915',
templateUrl: './vc-simulateut-397915.component.html'
})
export class VcSimulateut397915Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcSimulateut397915Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXHZE_443982 = this.metaData.viewState["QV_AV40_EIS41"].columns.find((col: any) => col.field == 'description');
if (column_VA_TEXTINPUTBOXHZE_443982 != undefined) {
const tplCell_VA_TEXTINPUTBOXHZE_443982 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXHZE_443982');
column_VA_TEXTINPUTBOXHZE_443982.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXHZE_443982?.templateRef;
const tplEdit_VA_TEXTINPUTBOXHZE_443982 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXHZE_443982');
column_VA_TEXTINPUTBOXHZE_443982.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXHZE_443982?.templateRef;
}
const column_VA_TEXTINPUTBOXFRJ_728982 = this.metaData.viewState["QV_AV40_EIS41"].columns.find((col: any) => col.field == 'expired');
if (column_VA_TEXTINPUTBOXFRJ_728982 != undefined) {
const tplCell_VA_TEXTINPUTBOXFRJ_728982 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXFRJ_728982');
column_VA_TEXTINPUTBOXFRJ_728982.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXFRJ_728982?.templateRef;
const tplEdit_VA_TEXTINPUTBOXFRJ_728982 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXFRJ_728982');
column_VA_TEXTINPUTBOXFRJ_728982.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXFRJ_728982?.templateRef;
}
const column_VA_TEXTINPUTBOXFZY_802982 = this.metaData.viewState["QV_AV40_EIS41"].columns.find((col: any) => col.field == 'active');
if (column_VA_TEXTINPUTBOXFZY_802982 != undefined) {
const tplCell_VA_TEXTINPUTBOXFZY_802982 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXFZY_802982');
column_VA_TEXTINPUTBOXFZY_802982.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXFZY_802982?.templateRef;
const tplEdit_VA_TEXTINPUTBOXFZY_802982 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXFZY_802982');
column_VA_TEXTINPUTBOXFZY_802982.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXFZY_802982?.templateRef;
}
const column_VA_TEXTINPUTBOXPDW_447982 = this.metaData.viewState["QV_AV40_EIS41"].columns.find((col: any) => col.field == 'inactive');
if (column_VA_TEXTINPUTBOXPDW_447982 != undefined) {
const tplCell_VA_TEXTINPUTBOXPDW_447982 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXPDW_447982');
column_VA_TEXTINPUTBOXPDW_447982.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXPDW_447982?.templateRef;
const tplEdit_VA_TEXTINPUTBOXPDW_447982 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXPDW_447982');
column_VA_TEXTINPUTBOXPDW_447982.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXPDW_447982?.templateRef;
}
const column_VA_TEXTINPUTBOXPRK_338982 = this.metaData.viewState["QV_AV40_EIS41"].columns.find((col: any) => col.field == 'total');
if (column_VA_TEXTINPUTBOXPRK_338982 != undefined) {
const tplCell_VA_TEXTINPUTBOXPRK_338982 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXPRK_338982');
column_VA_TEXTINPUTBOXPRK_338982.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXPRK_338982?.templateRef;
const tplEdit_VA_TEXTINPUTBOXPRK_338982 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXPRK_338982');
column_VA_TEXTINPUTBOXPRK_338982.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXPRK_338982?.templateRef;
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
Payment: viewState.T_ASSTSAXELGOQQ_915.controls.Payment as FormGroup ,
QuoteDetails: viewState.T_ASSTSAXELGOQQ_915.controls.QuoteDetails as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'TRNSC', taskId: 'T_ASSTSAXELGOQQ_915', taskVersion: '1.0.0', vcId: 'VC_SIMULATEUT_397915', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(false, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/TRNSC/T_ASSTSAXELGOQQ_915', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ['VA_2369DGOLAKHUZKA_978982', { catalogName: 'cl_moneda', filter: "", cobisRequestServerConfig: null, cache: 0 }], ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_AV40_EIS41', { queryId: 'Q_QUOTEDLA_2540', entityName: 'QuoteDetails', filter: "", cobisRequestServerConfig: { pageSize :5 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'SimulateForm' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
