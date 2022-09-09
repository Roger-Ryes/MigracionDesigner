//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-loansbenif-286571.model';
import { ViewState } from './model/vc-loansbenif-286571-view-state';
import { VcLoansbenif286571Custom } from './vc-loansbenif-286571.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-loansbenif-286571',
templateUrl: './vc-loansbenif-286571.component.html'
})
export class VcLoansbenif286571Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcLoansbenif286571Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXHHG_980269 = this.metaData.viewState["QV_RL77_QHL37"].columns.find((col: any) => col.field == 'clientName');
if (column_VA_TEXTINPUTBOXHHG_980269 != undefined) {
const tplCell_VA_TEXTINPUTBOXHHG_980269 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXHHG_980269');
column_VA_TEXTINPUTBOXHHG_980269.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXHHG_980269?.templateRef;
const tplEdit_VA_TEXTINPUTBOXHHG_980269 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXHHG_980269');
column_VA_TEXTINPUTBOXHHG_980269.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXHHG_980269?.templateRef;
}
const column_VA_DATEFIELDMQJRVD_441269 = this.metaData.viewState["QV_RL77_QHL37"].columns.find((col: any) => col.field == 'birthDate');
if (column_VA_DATEFIELDMQJRVD_441269 != undefined) {
const tplCell_VA_DATEFIELDMQJRVD_441269 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DATEFIELDMQJRVD_441269');
column_VA_DATEFIELDMQJRVD_441269.properties.cellTemplate = tplCell_VA_DATEFIELDMQJRVD_441269?.templateRef;
const tplEdit_VA_DATEFIELDMQJRVD_441269 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DATEFIELDMQJRVD_441269');
column_VA_DATEFIELDMQJRVD_441269.properties.editTemplate = tplEdit_VA_DATEFIELDMQJRVD_441269?.templateRef;
}
const column_VA_TEXTINPUTBOXUBX_184269 = this.metaData.viewState["QV_RL77_QHL37"].columns.find((col: any) => col.field == 'percentage');
if (column_VA_TEXTINPUTBOXUBX_184269 != undefined) {
const tplCell_VA_TEXTINPUTBOXUBX_184269 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXUBX_184269');
column_VA_TEXTINPUTBOXUBX_184269.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXUBX_184269?.templateRef;
const tplEdit_VA_TEXTINPUTBOXUBX_184269 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXUBX_184269');
column_VA_TEXTINPUTBOXUBX_184269.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXUBX_184269?.templateRef;
}
const column_VA_TEXTINPUTBOXQMW_346269 = this.metaData.viewState["QV_RL77_QHL37"].columns.find((col: any) => col.field == 'relationShip');
if (column_VA_TEXTINPUTBOXQMW_346269 != undefined) {
const tplCell_VA_TEXTINPUTBOXQMW_346269 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXQMW_346269');
column_VA_TEXTINPUTBOXQMW_346269.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXQMW_346269?.templateRef;
const tplEdit_VA_TEXTINPUTBOXQMW_346269 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXQMW_346269');
column_VA_TEXTINPUTBOXQMW_346269.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXQMW_346269?.templateRef;
}
const column_VA_TEXTINPUTBOXABQ_978269 = this.metaData.viewState["QV_RL77_QHL37"].columns.find((col: any) => col.field == 'address');
if (column_VA_TEXTINPUTBOXABQ_978269 != undefined) {
const tplCell_VA_TEXTINPUTBOXABQ_978269 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXABQ_978269');
column_VA_TEXTINPUTBOXABQ_978269.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXABQ_978269?.templateRef;
const tplEdit_VA_TEXTINPUTBOXABQ_978269 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXABQ_978269');
column_VA_TEXTINPUTBOXABQ_978269.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXABQ_978269?.templateRef;
}
const column_VA_TEXTINPUTBOXFBM_352269 = this.metaData.viewState["QV_RL77_QHL37"].columns.find((col: any) => col.field == 'postalCode');
if (column_VA_TEXTINPUTBOXFBM_352269 != undefined) {
const tplCell_VA_TEXTINPUTBOXFBM_352269 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXFBM_352269');
column_VA_TEXTINPUTBOXFBM_352269.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXFBM_352269?.templateRef;
const tplEdit_VA_TEXTINPUTBOXFBM_352269 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXFBM_352269');
column_VA_TEXTINPUTBOXFBM_352269.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXFBM_352269?.templateRef;
}
const column_VA_TEXTINPUTBOXSZF_742269 = this.metaData.viewState["QV_RL77_QHL37"].columns.find((col: any) => col.field == 'telephone');
if (column_VA_TEXTINPUTBOXSZF_742269 != undefined) {
const tplCell_VA_TEXTINPUTBOXSZF_742269 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXSZF_742269');
column_VA_TEXTINPUTBOXSZF_742269.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXSZF_742269?.templateRef;
const tplEdit_VA_TEXTINPUTBOXSZF_742269 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXSZF_742269');
column_VA_TEXTINPUTBOXSZF_742269.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXSZF_742269?.templateRef;
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
Beneficiaro: viewState.T_ASSTSZHWXXEQV_571.controls.Beneficiaro as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'QERYS', taskId: 'T_ASSTSZHWXXEQV_571', taskVersion: '1.0.0', vcId: 'VC_LOANSBENIF_286571', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/QERYS/T_ASSTSZHWXXEQV_571', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_RL77_QHL37', { queryId: 'Q_BENERRRA_IX77', entityName: 'Beneficiaro', filter: "", cobisRequestServerConfig: { pageSize :10 }, cache: 0, queryMemberParameters:[ {aliasQueryMember:'loanBankID' , entityName : 'Seguros', attributeName : 'loanBankID' } ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'QueryLoansBeneficiario' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
