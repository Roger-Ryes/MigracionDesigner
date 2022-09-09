//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-condonaton-778532.model';
import { ViewState } from './model/vc-condonaton-778532-view-state';
import { VcCondonaton778532Custom } from './vc-condonaton-778532.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-condonaton-778532',
templateUrl: './vc-condonaton-778532.component.html'
})
export class VcCondonaton778532Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcCondonaton778532Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXVSD_563764 = this.metaData.viewState["QV_7324_98967"].columns.find((col: any) => col.field == 'concept');
if (column_VA_TEXTINPUTBOXVSD_563764 != undefined) {
const tplCell_VA_TEXTINPUTBOXVSD_563764 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXVSD_563764');
column_VA_TEXTINPUTBOXVSD_563764.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXVSD_563764?.templateRef;
const tplEdit_VA_TEXTINPUTBOXVSD_563764 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXVSD_563764');
column_VA_TEXTINPUTBOXVSD_563764.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXVSD_563764?.templateRef;
}
const column_VA_TEXTINPUTBOXEPR_994764 = this.metaData.viewState["QV_7324_98967"].columns.find((col: any) => col.field == 'observation');
if (column_VA_TEXTINPUTBOXEPR_994764 != undefined) {
const tplCell_VA_TEXTINPUTBOXEPR_994764 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXEPR_994764');
column_VA_TEXTINPUTBOXEPR_994764.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXEPR_994764?.templateRef;
const tplEdit_VA_TEXTINPUTBOXEPR_994764 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXEPR_994764');
column_VA_TEXTINPUTBOXEPR_994764.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXEPR_994764?.templateRef;
}
const column_VA_TEXTINPUTBOXTSF_920764 = this.metaData.viewState["QV_7324_98967"].columns.find((col: any) => col.field == 'pastDueAmount');
if (column_VA_TEXTINPUTBOXTSF_920764 != undefined) {
const tplCell_VA_TEXTINPUTBOXTSF_920764 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXTSF_920764');
column_VA_TEXTINPUTBOXTSF_920764.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXTSF_920764?.templateRef;
const tplEdit_VA_TEXTINPUTBOXTSF_920764 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXTSF_920764');
column_VA_TEXTINPUTBOXTSF_920764.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXTSF_920764?.templateRef;
}
const column_VA_TEXTINPUTBOXABB_665764 = this.metaData.viewState["QV_7324_98967"].columns.find((col: any) => col.field == 'currentAmount');
if (column_VA_TEXTINPUTBOXABB_665764 != undefined) {
const tplCell_VA_TEXTINPUTBOXABB_665764 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXABB_665764');
column_VA_TEXTINPUTBOXABB_665764.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXABB_665764?.templateRef;
const tplEdit_VA_TEXTINPUTBOXABB_665764 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXABB_665764');
column_VA_TEXTINPUTBOXABB_665764.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXABB_665764?.templateRef;
}
const column_VA_TEXTINPUTBOXBSX_772764 = this.metaData.viewState["QV_7324_98967"].columns.find((col: any) => col.field == 'dueAmount');
if (column_VA_TEXTINPUTBOXBSX_772764 != undefined) {
const tplCell_VA_TEXTINPUTBOXBSX_772764 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXBSX_772764');
column_VA_TEXTINPUTBOXBSX_772764.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXBSX_772764?.templateRef;
const tplEdit_VA_TEXTINPUTBOXBSX_772764 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXBSX_772764');
column_VA_TEXTINPUTBOXBSX_772764.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXBSX_772764?.templateRef;
}
const column_VA_TEXTINPUTBOXBOS_972764 = this.metaData.viewState["QV_7324_98967"].columns.find((col: any) => col.field == 'totalValue');
if (column_VA_TEXTINPUTBOXBOS_972764 != undefined) {
const tplCell_VA_TEXTINPUTBOXBOS_972764 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXBOS_972764');
column_VA_TEXTINPUTBOXBOS_972764.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXBOS_972764?.templateRef;
const tplEdit_VA_TEXTINPUTBOXBOS_972764 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXBOS_972764');
column_VA_TEXTINPUTBOXBOS_972764.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXBOS_972764?.templateRef;
}
const column_VA_TEXTINPUTBOXECH_722764 = this.metaData.viewState["QV_7324_98967"].columns.find((col: any) => col.field == 'valueToCondone');
if (column_VA_TEXTINPUTBOXECH_722764 != undefined) {
const tplCell_VA_TEXTINPUTBOXECH_722764 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXECH_722764');
column_VA_TEXTINPUTBOXECH_722764.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXECH_722764?.templateRef;
const tplEdit_VA_TEXTINPUTBOXECH_722764 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXECH_722764');
column_VA_TEXTINPUTBOXECH_722764.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXECH_722764?.templateRef;
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
CondonationDetail: viewState.T_CONDONATIOSNN_532.controls.CondonationDetail as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'TRNSC', taskId: 'T_CONDONATIOSNN_532', taskVersion: '1.0.0', vcId: 'VC_CONDONATON_778532', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/TRNSC/T_CONDONATIOSNN_532', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ['VA_TEXTINPUTBOXVSD_563764', { filter:"", cobisRequestServerConfig: {'filterType':'none'}, cache: 0 , controlGridInfo: { queryViewId: "QV_7324_98967", columnId: "concept" }}], ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_7324_98967', { queryId: 'Q_CONDONDE_7324', entityName: 'CondonationDetail', filter: "", cobisRequestServerConfig: { pageSize :5 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'CondonationsForm' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
