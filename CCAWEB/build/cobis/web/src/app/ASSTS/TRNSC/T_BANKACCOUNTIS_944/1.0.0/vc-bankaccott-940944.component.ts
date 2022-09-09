//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-bankaccott-940944.model';
import { ViewState } from './model/vc-bankaccott-940944-view-state';
import { VcBankaccott940944Custom } from './vc-bankaccott-940944.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-bankaccott-940944',
templateUrl: './vc-bankaccott-940944.component.html'
})
export class VcBankaccott940944Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcBankaccott940944Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXSGC_732561 = this.metaData.viewState["QV_1987_42894"].columns.find((col: any) => col.field == 'account');
if (column_VA_TEXTINPUTBOXSGC_732561 != undefined) {
const tplCell_VA_TEXTINPUTBOXSGC_732561 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXSGC_732561');
column_VA_TEXTINPUTBOXSGC_732561.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXSGC_732561?.templateRef;
const tplEdit_VA_TEXTINPUTBOXSGC_732561 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXSGC_732561');
column_VA_TEXTINPUTBOXSGC_732561.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXSGC_732561?.templateRef;
}
const column_VA_TEXTINPUTBOXTWF_198561 = this.metaData.viewState["QV_1987_42894"].columns.find((col: any) => col.field == 'customerCode');
if (column_VA_TEXTINPUTBOXTWF_198561 != undefined) {
const tplCell_VA_TEXTINPUTBOXTWF_198561 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXTWF_198561');
column_VA_TEXTINPUTBOXTWF_198561.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXTWF_198561?.templateRef;
const tplEdit_VA_TEXTINPUTBOXTWF_198561 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXTWF_198561');
column_VA_TEXTINPUTBOXTWF_198561.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXTWF_198561?.templateRef;
}
const column_VA_TEXTINPUTBOXGBN_738561 = this.metaData.viewState["QV_1987_42894"].columns.find((col: any) => col.field == 'accountName');
if (column_VA_TEXTINPUTBOXGBN_738561 != undefined) {
const tplCell_VA_TEXTINPUTBOXGBN_738561 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXGBN_738561');
column_VA_TEXTINPUTBOXGBN_738561.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXGBN_738561?.templateRef;
const tplEdit_VA_TEXTINPUTBOXGBN_738561 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXGBN_738561');
column_VA_TEXTINPUTBOXGBN_738561.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXGBN_738561?.templateRef;
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
BankAccount: viewState.T_BANKACCOUNTIS_944.controls.BankAccount as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'TRNSC', taskId: 'T_BANKACCOUNTIS_944', taskVersion: '1.0.0', vcId: 'VC_BANKACCOTT_940944', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/TRNSC/T_BANKACCOUNTIS_944', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_1987_42894', { queryId: 'Q_BANKACUC_1987', entityName: 'BankAccount', filter: "", cobisRequestServerConfig: null, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'BankAccountsListForm' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
