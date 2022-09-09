//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-bankaccomu-224777.model';
import { ViewState } from './model/vc-bankaccomu-224777-view-state';
import { VcBankaccomu224777Custom } from './vc-bankaccomu-224777.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-bankaccomu-224777',
templateUrl: './vc-bankaccomu-224777.component.html'
})
export class VcBankaccomu224777Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcBankaccomu224777Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXHQK_112523 = this.metaData.viewState["QV_1987_24851"].columns.find((col: any) => col.field == 'account');
if (column_VA_TEXTINPUTBOXHQK_112523 != undefined) {
const tplCell_VA_TEXTINPUTBOXHQK_112523 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXHQK_112523');
column_VA_TEXTINPUTBOXHQK_112523.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXHQK_112523?.templateRef;
const tplEdit_VA_TEXTINPUTBOXHQK_112523 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXHQK_112523');
column_VA_TEXTINPUTBOXHQK_112523.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXHQK_112523?.templateRef;
}
const column_VA_TEXTINPUTBOXYWN_932523 = this.metaData.viewState["QV_1987_24851"].columns.find((col: any) => col.field == 'customerCode');
if (column_VA_TEXTINPUTBOXYWN_932523 != undefined) {
const tplCell_VA_TEXTINPUTBOXYWN_932523 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXYWN_932523');
column_VA_TEXTINPUTBOXYWN_932523.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXYWN_932523?.templateRef;
const tplEdit_VA_TEXTINPUTBOXYWN_932523 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXYWN_932523');
column_VA_TEXTINPUTBOXYWN_932523.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXYWN_932523?.templateRef;
}
const column_VA_TEXTINPUTBOXRZN_728523 = this.metaData.viewState["QV_1987_24851"].columns.find((col: any) => col.field == 'accountName');
if (column_VA_TEXTINPUTBOXRZN_728523 != undefined) {
const tplCell_VA_TEXTINPUTBOXRZN_728523 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXRZN_728523');
column_VA_TEXTINPUTBOXRZN_728523.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXRZN_728523?.templateRef;
const tplEdit_VA_TEXTINPUTBOXRZN_728523 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXRZN_728523');
column_VA_TEXTINPUTBOXRZN_728523.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXRZN_728523?.templateRef;
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
BankAccount: viewState.T_BANKACCOUNTOA_777.controls.BankAccount as FormGroup ,
Entity1: viewState.T_BANKACCOUNTOA_777.controls.Entity1 as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'TRNSC', taskId: 'T_BANKACCOUNTOA_777', taskVersion: '1.0.0', vcId: 'VC_BANKACCOMU_224777', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/TRNSC/T_BANKACCOUNTOA_777', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_1987_24851', { queryId: 'Q_BANKACUC_1987', entityName: 'BankAccount', filter: "", cobisRequestServerConfig: null, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'BankAccountsModal' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
