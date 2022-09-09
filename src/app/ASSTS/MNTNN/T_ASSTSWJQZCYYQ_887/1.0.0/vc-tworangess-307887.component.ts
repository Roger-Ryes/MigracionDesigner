//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-tworangess-307887.model';
import { ViewState } from './model/vc-tworangess-307887-view-state';
import { VcTworangess307887Custom } from './vc-tworangess-307887.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-tworangess-307887',
templateUrl: './vc-tworangess-307887.component.html'
})
export class VcTworangess307887Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcTworangess307887Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXIAN_717861 = this.metaData.viewState["QV_TJ88_MTX55"].columns.find((col: any) => col.field == 'sequential');
if (column_VA_TEXTINPUTBOXIAN_717861 != undefined) {
const tplCell_VA_TEXTINPUTBOXIAN_717861 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXIAN_717861');
column_VA_TEXTINPUTBOXIAN_717861.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXIAN_717861?.templateRef;
const tplEdit_VA_TEXTINPUTBOXIAN_717861 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXIAN_717861');
column_VA_TEXTINPUTBOXIAN_717861.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXIAN_717861?.templateRef;
}
const column_VA_TEXTINPUTBOXRMO_640861 = this.metaData.viewState["QV_TJ88_MTX55"].columns.find((col: any) => col.field == 'minValue1');
if (column_VA_TEXTINPUTBOXRMO_640861 != undefined) {
const tplCell_VA_TEXTINPUTBOXRMO_640861 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXRMO_640861');
column_VA_TEXTINPUTBOXRMO_640861.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXRMO_640861?.templateRef;
const tplEdit_VA_TEXTINPUTBOXRMO_640861 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXRMO_640861');
column_VA_TEXTINPUTBOXRMO_640861.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXRMO_640861?.templateRef;
}
const column_VA_TEXTINPUTBOXIBZ_621861 = this.metaData.viewState["QV_TJ88_MTX55"].columns.find((col: any) => col.field == 'maxValue1');
if (column_VA_TEXTINPUTBOXIBZ_621861 != undefined) {
const tplCell_VA_TEXTINPUTBOXIBZ_621861 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXIBZ_621861');
column_VA_TEXTINPUTBOXIBZ_621861.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXIBZ_621861?.templateRef;
const tplEdit_VA_TEXTINPUTBOXIBZ_621861 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXIBZ_621861');
column_VA_TEXTINPUTBOXIBZ_621861.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXIBZ_621861?.templateRef;
}
const column_VA_TEXTINPUTBOXKHB_719861 = this.metaData.viewState["QV_TJ88_MTX55"].columns.find((col: any) => col.field == 'minValue2');
if (column_VA_TEXTINPUTBOXKHB_719861 != undefined) {
const tplCell_VA_TEXTINPUTBOXKHB_719861 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXKHB_719861');
column_VA_TEXTINPUTBOXKHB_719861.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXKHB_719861?.templateRef;
const tplEdit_VA_TEXTINPUTBOXKHB_719861 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXKHB_719861');
column_VA_TEXTINPUTBOXKHB_719861.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXKHB_719861?.templateRef;
}
const column_VA_TEXTINPUTBOXXLP_853861 = this.metaData.viewState["QV_TJ88_MTX55"].columns.find((col: any) => col.field == 'maxValue2');
if (column_VA_TEXTINPUTBOXXLP_853861 != undefined) {
const tplCell_VA_TEXTINPUTBOXXLP_853861 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXXLP_853861');
column_VA_TEXTINPUTBOXXLP_853861.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXXLP_853861?.templateRef;
const tplEdit_VA_TEXTINPUTBOXXLP_853861 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXXLP_853861');
column_VA_TEXTINPUTBOXXLP_853861.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXXLP_853861?.templateRef;
}
const column_VA_TEXTINPUTBOXFCE_366861 = this.metaData.viewState["QV_TJ88_MTX55"].columns.find((col: any) => col.field == 'rate');
if (column_VA_TEXTINPUTBOXFCE_366861 != undefined) {
const tplCell_VA_TEXTINPUTBOXFCE_366861 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXFCE_366861');
column_VA_TEXTINPUTBOXFCE_366861.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXFCE_366861?.templateRef;
const tplEdit_VA_TEXTINPUTBOXFCE_366861 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXFCE_366861');
column_VA_TEXTINPUTBOXFCE_366861.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXFCE_366861?.templateRef;
}
const column_VA_TEXTINPUTBOXIRJ_198861 = this.metaData.viewState["QV_TJ88_MTX55"].columns.find((col: any) => col.field == 'variable');
if (column_VA_TEXTINPUTBOXIRJ_198861 != undefined) {
const tplCell_VA_TEXTINPUTBOXIRJ_198861 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXIRJ_198861');
column_VA_TEXTINPUTBOXIRJ_198861.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXIRJ_198861?.templateRef;
const tplEdit_VA_TEXTINPUTBOXIRJ_198861 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXIRJ_198861');
column_VA_TEXTINPUTBOXIRJ_198861.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXIRJ_198861?.templateRef;
}
const column_VA_DATEFIELDDCOFFG_555861 = this.metaData.viewState["QV_TJ88_MTX55"].columns.find((col: any) => col.field == 'date');
if (column_VA_DATEFIELDDCOFFG_555861 != undefined) {
const tplCell_VA_DATEFIELDDCOFFG_555861 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DATEFIELDDCOFFG_555861');
column_VA_DATEFIELDDCOFFG_555861.properties.cellTemplate = tplCell_VA_DATEFIELDDCOFFG_555861?.templateRef;
const tplEdit_VA_DATEFIELDDCOFFG_555861 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DATEFIELDDCOFFG_555861');
column_VA_DATEFIELDDCOFFG_555861.properties.editTemplate = tplEdit_VA_DATEFIELDDCOFFG_555861?.templateRef;
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
TwoRangesFilter: viewState.T_ASSTSWJQZCYYQ_887.controls.TwoRangesFilter as FormGroup ,
TwoRangesList: viewState.T_ASSTSWJQZCYYQ_887.controls.TwoRangesList as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'MNTNN', taskId: 'T_ASSTSWJQZCYYQ_887', taskVersion: '1.0.0', vcId: 'VC_TWORANGESS_307887', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/MNTNN/T_ASSTSWJQZCYYQ_887', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_TJ88_MTX55', { queryId: 'Q_TWORILTS_QE88', entityName: 'TwoRangesList', filter: "", cobisRequestServerConfig: { pageSize :5 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'TwoRangesForm' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
