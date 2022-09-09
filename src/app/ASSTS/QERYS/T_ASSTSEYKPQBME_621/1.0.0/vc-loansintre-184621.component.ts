//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-loansintre-184621.model';
import { ViewState } from './model/vc-loansintre-184621-view-state';
import { VcLoansintre184621Custom } from './vc-loansintre-184621.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-loansintre-184621',
templateUrl: './vc-loansintre-184621.component.html'
})
export class VcLoansintre184621Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcLoansintre184621Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXCPU_105291 = this.metaData.viewState["QV_VE62_BRX74"].columns.find((col: any) => col.field == 'desOperationType');
if (column_VA_TEXTINPUTBOXCPU_105291 != undefined) {
const tplCell_VA_TEXTINPUTBOXCPU_105291 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXCPU_105291');
column_VA_TEXTINPUTBOXCPU_105291.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXCPU_105291?.templateRef;
const tplEdit_VA_TEXTINPUTBOXCPU_105291 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXCPU_105291');
column_VA_TEXTINPUTBOXCPU_105291.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXCPU_105291?.templateRef;
}
const column_VA_TEXTINPUTBOXJIE_823291 = this.metaData.viewState["QV_VE62_BRX74"].columns.find((col: any) => col.field == 'loanBankID');
if (column_VA_TEXTINPUTBOXJIE_823291 != undefined) {
const tplCell_VA_TEXTINPUTBOXJIE_823291 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXJIE_823291');
column_VA_TEXTINPUTBOXJIE_823291.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXJIE_823291?.templateRef;
const tplEdit_VA_TEXTINPUTBOXJIE_823291 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXJIE_823291');
column_VA_TEXTINPUTBOXJIE_823291.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXJIE_823291?.templateRef;
}
const column_VA_TEXTINPUTBOXWEU_957291 = this.metaData.viewState["QV_VE62_BRX74"].columns.find((col: any) => col.field == 'clientName');
if (column_VA_TEXTINPUTBOXWEU_957291 != undefined) {
const tplCell_VA_TEXTINPUTBOXWEU_957291 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXWEU_957291');
column_VA_TEXTINPUTBOXWEU_957291.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXWEU_957291?.templateRef;
const tplEdit_VA_TEXTINPUTBOXWEU_957291 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXWEU_957291');
column_VA_TEXTINPUTBOXWEU_957291.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXWEU_957291?.templateRef;
}
const column_VA_TEXTINPUTBOXTIL_871291 = this.metaData.viewState["QV_VE62_BRX74"].columns.find((col: any) => col.field == 'amount');
if (column_VA_TEXTINPUTBOXTIL_871291 != undefined) {
const tplCell_VA_TEXTINPUTBOXTIL_871291 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXTIL_871291');
column_VA_TEXTINPUTBOXTIL_871291.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXTIL_871291?.templateRef;
const tplEdit_VA_TEXTINPUTBOXTIL_871291 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXTIL_871291');
column_VA_TEXTINPUTBOXTIL_871291.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXTIL_871291?.templateRef;
}
const column_VA_TEXTINPUTBOXCTM_542291 = this.metaData.viewState["QV_VE62_BRX74"].columns.find((col: any) => col.field == 'desStatus');
if (column_VA_TEXTINPUTBOXCTM_542291 != undefined) {
const tplCell_VA_TEXTINPUTBOXCTM_542291 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXCTM_542291');
column_VA_TEXTINPUTBOXCTM_542291.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXCTM_542291?.templateRef;
const tplEdit_VA_TEXTINPUTBOXCTM_542291 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXCTM_542291');
column_VA_TEXTINPUTBOXCTM_542291.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXCTM_542291?.templateRef;
}
const column_VA_DATEFIELDPTAOWQ_552291 = this.metaData.viewState["QV_VE62_BRX74"].columns.find((col: any) => col.field == 'expirationDate');
if (column_VA_DATEFIELDPTAOWQ_552291 != undefined) {
const tplCell_VA_DATEFIELDPTAOWQ_552291 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DATEFIELDPTAOWQ_552291');
column_VA_DATEFIELDPTAOWQ_552291.properties.cellTemplate = tplCell_VA_DATEFIELDPTAOWQ_552291?.templateRef;
const tplEdit_VA_DATEFIELDPTAOWQ_552291 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DATEFIELDPTAOWQ_552291');
column_VA_DATEFIELDPTAOWQ_552291.properties.editTemplate = tplEdit_VA_DATEFIELDPTAOWQ_552291?.templateRef;
}
const column_VA_TEXTINPUTBOXYCA_817291 = this.metaData.viewState["QV_VE62_BRX74"].columns.find((col: any) => col.field == 'codCurrency');
if (column_VA_TEXTINPUTBOXYCA_817291 != undefined) {
const tplCell_VA_TEXTINPUTBOXYCA_817291 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXYCA_817291');
column_VA_TEXTINPUTBOXYCA_817291.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXYCA_817291?.templateRef;
const tplEdit_VA_TEXTINPUTBOXYCA_817291 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXYCA_817291');
column_VA_TEXTINPUTBOXYCA_817291.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXYCA_817291?.templateRef;
}
const column_VA_DATEFIELDWNGFQM_623291 = this.metaData.viewState["QV_VE62_BRX74"].columns.find((col: any) => col.field == 'disbursementDate');
if (column_VA_DATEFIELDWNGFQM_623291 != undefined) {
const tplCell_VA_DATEFIELDWNGFQM_623291 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DATEFIELDWNGFQM_623291');
column_VA_DATEFIELDWNGFQM_623291.properties.cellTemplate = tplCell_VA_DATEFIELDWNGFQM_623291?.templateRef;
const tplEdit_VA_DATEFIELDWNGFQM_623291 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DATEFIELDWNGFQM_623291');
column_VA_DATEFIELDWNGFQM_623291.properties.editTemplate = tplEdit_VA_DATEFIELDWNGFQM_623291?.templateRef;
}
const column_VA_TEXTINPUTBOXGFS_556291 = this.metaData.viewState["QV_VE62_BRX74"].columns.find((col: any) => col.field == 'clientID');
if (column_VA_TEXTINPUTBOXGFS_556291 != undefined) {
const tplCell_VA_TEXTINPUTBOXGFS_556291 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXGFS_556291');
column_VA_TEXTINPUTBOXGFS_556291.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXGFS_556291?.templateRef;
const tplEdit_VA_TEXTINPUTBOXGFS_556291 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXGFS_556291');
column_VA_TEXTINPUTBOXGFS_556291.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXGFS_556291?.templateRef;
}
const column_VA_TEXTINPUTBOXYFU_218291 = this.metaData.viewState["QV_VE62_BRX74"].columns.find((col: any) => col.field == 'numProcedure');
if (column_VA_TEXTINPUTBOXYFU_218291 != undefined) {
const tplCell_VA_TEXTINPUTBOXYFU_218291 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXYFU_218291');
column_VA_TEXTINPUTBOXYFU_218291.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXYFU_218291?.templateRef;
const tplEdit_VA_TEXTINPUTBOXYFU_218291 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXYFU_218291');
column_VA_TEXTINPUTBOXYFU_218291.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXYFU_218291?.templateRef;
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
LoanIntercycle: viewState.T_ASSTSEYKPQBME_621.controls.LoanIntercycle as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'QERYS', taskId: 'T_ASSTSEYKPQBME_621', taskVersion: '1.0.0', vcId: 'VC_LOANSINTRE_184621', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(false, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/QERYS/T_ASSTSEYKPQBME_621', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_VE62_BRX74', { queryId: 'Q_LOANLIIR_OP62', entityName: 'LoanIntercycle', filter: "", cobisRequestServerConfig: { pageSize :10 }, cache: 0, queryMemberParameters:[ {aliasQueryMember:'loanBankID' } , ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'QueryLoansIntercycle' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
