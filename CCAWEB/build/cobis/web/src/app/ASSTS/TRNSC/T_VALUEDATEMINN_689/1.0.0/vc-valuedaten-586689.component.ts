//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-valuedaten-586689.model';
import { ViewState } from './model/vc-valuedaten-586689-view-state';
import { VcValuedaten586689Custom } from './vc-valuedaten-586689.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-valuedaten-586689',
templateUrl: './vc-valuedaten-586689.component.html'
})
export class VcValuedaten586689Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcValuedaten586689Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXIIN_213866 = this.metaData.viewState["QV_1244_89323"].columns.find((col: any) => col.field == 'transactionId');
if (column_VA_TEXTINPUTBOXIIN_213866 != undefined) {
const tplCell_VA_TEXTINPUTBOXIIN_213866 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXIIN_213866');
column_VA_TEXTINPUTBOXIIN_213866.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXIIN_213866?.templateRef;
const tplEdit_VA_TEXTINPUTBOXIIN_213866 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXIIN_213866');
column_VA_TEXTINPUTBOXIIN_213866.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXIIN_213866?.templateRef;
}
const column_VA_TEXTINPUTBOXMEP_425866 = this.metaData.viewState["QV_1244_89323"].columns.find((col: any) => col.field == 'secuential');
if (column_VA_TEXTINPUTBOXMEP_425866 != undefined) {
const tplCell_VA_TEXTINPUTBOXMEP_425866 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXMEP_425866');
column_VA_TEXTINPUTBOXMEP_425866.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXMEP_425866?.templateRef;
const tplEdit_VA_TEXTINPUTBOXMEP_425866 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXMEP_425866');
column_VA_TEXTINPUTBOXMEP_425866.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXMEP_425866?.templateRef;
}
const column_VA_TEXTINPUTBOXQOK_378866 = this.metaData.viewState["QV_1244_89323"].columns.find((col: any) => col.field == 'operation');
if (column_VA_TEXTINPUTBOXQOK_378866 != undefined) {
const tplCell_VA_TEXTINPUTBOXQOK_378866 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXQOK_378866');
column_VA_TEXTINPUTBOXQOK_378866.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXQOK_378866?.templateRef;
const tplEdit_VA_TEXTINPUTBOXQOK_378866 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXQOK_378866');
column_VA_TEXTINPUTBOXQOK_378866.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXQOK_378866?.templateRef;
}
const column_VA_TEXTINPUTBOXSNL_252866 = this.metaData.viewState["QV_1244_89323"].columns.find((col: any) => col.field == 'dateTran');
if (column_VA_TEXTINPUTBOXSNL_252866 != undefined) {
const tplCell_VA_TEXTINPUTBOXSNL_252866 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXSNL_252866');
column_VA_TEXTINPUTBOXSNL_252866.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXSNL_252866?.templateRef;
const tplEdit_VA_TEXTINPUTBOXSNL_252866 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXSNL_252866');
column_VA_TEXTINPUTBOXSNL_252866.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXSNL_252866?.templateRef;
}
const column_VA_TEXTINPUTBOXYSE_969866 = this.metaData.viewState["QV_1244_89323"].columns.find((col: any) => col.field == 'dateRef');
if (column_VA_TEXTINPUTBOXYSE_969866 != undefined) {
const tplCell_VA_TEXTINPUTBOXYSE_969866 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXYSE_969866');
column_VA_TEXTINPUTBOXYSE_969866.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXYSE_969866?.templateRef;
const tplEdit_VA_TEXTINPUTBOXYSE_969866 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXYSE_969866');
column_VA_TEXTINPUTBOXYSE_969866.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXYSE_969866?.templateRef;
}
const column_VA_TEXTINPUTBOXZAT_127866 = this.metaData.viewState["QV_1244_89323"].columns.find((col: any) => col.field == 'status');
if (column_VA_TEXTINPUTBOXZAT_127866 != undefined) {
const tplCell_VA_TEXTINPUTBOXZAT_127866 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXZAT_127866');
column_VA_TEXTINPUTBOXZAT_127866.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXZAT_127866?.templateRef;
const tplEdit_VA_TEXTINPUTBOXZAT_127866 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXZAT_127866');
column_VA_TEXTINPUTBOXZAT_127866.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXZAT_127866?.templateRef;
}
const column_VA_TEXTINPUTBOXARG_897866 = this.metaData.viewState["QV_1244_89323"].columns.find((col: any) => col.field == 'user');
if (column_VA_TEXTINPUTBOXARG_897866 != undefined) {
const tplCell_VA_TEXTINPUTBOXARG_897866 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXARG_897866');
column_VA_TEXTINPUTBOXARG_897866.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXARG_897866?.templateRef;
const tplEdit_VA_TEXTINPUTBOXARG_897866 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXARG_897866');
column_VA_TEXTINPUTBOXARG_897866.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXARG_897866?.templateRef;
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
Loan: viewState.T_VALUEDATEMINN_689.controls.Loan as FormGroup ,
ValueDateFilter: viewState.T_VALUEDATEMINN_689.controls.ValueDateFilter as FormGroup ,
TransactionLoan: viewState.T_VALUEDATEMINN_689.controls.TransactionLoan as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'TRNSC', taskId: 'T_VALUEDATEMINN_689', taskVersion: '1.0.0', vcId: 'VC_VALUEDATEN_586689', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/TRNSC/T_VALUEDATEMINN_689', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_1244_89323', { queryId: 'Q_TRANSACO_1244', entityName: 'TransactionLoan', filter: "", cobisRequestServerConfig: { pageSize :5 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'ASSTS.LBL_ASSTS_FECHAVALO_78292' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
