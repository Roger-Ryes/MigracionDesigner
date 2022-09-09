//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-loanschile-317288.model';
import { ViewState } from './model/vc-loanschile-317288-view-state';
import { VcLoanschile317288Custom } from './vc-loanschile-317288.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-loanschile-317288',
templateUrl: './vc-loanschile-317288.component.html'
})
export class VcLoanschile317288Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcLoanschile317288Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXEIA_503807 = this.metaData.viewState["QV_AX75_BUU48"].columns.find((col: any) => col.field == 'desOperationType');
if (column_VA_TEXTINPUTBOXEIA_503807 != undefined) {
const tplCell_VA_TEXTINPUTBOXEIA_503807 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXEIA_503807');
column_VA_TEXTINPUTBOXEIA_503807.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXEIA_503807?.templateRef;
const tplEdit_VA_TEXTINPUTBOXEIA_503807 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXEIA_503807');
column_VA_TEXTINPUTBOXEIA_503807.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXEIA_503807?.templateRef;
}
const column_VA_TEXTINPUTBOXOCE_836807 = this.metaData.viewState["QV_AX75_BUU48"].columns.find((col: any) => col.field == 'loanBankID');
if (column_VA_TEXTINPUTBOXOCE_836807 != undefined) {
const tplCell_VA_TEXTINPUTBOXOCE_836807 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXOCE_836807');
column_VA_TEXTINPUTBOXOCE_836807.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXOCE_836807?.templateRef;
const tplEdit_VA_TEXTINPUTBOXOCE_836807 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXOCE_836807');
column_VA_TEXTINPUTBOXOCE_836807.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXOCE_836807?.templateRef;
}
const column_VA_TEXTINPUTBOXOQN_553807 = this.metaData.viewState["QV_AX75_BUU48"].columns.find((col: any) => col.field == 'clientName');
if (column_VA_TEXTINPUTBOXOQN_553807 != undefined) {
const tplCell_VA_TEXTINPUTBOXOQN_553807 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXOQN_553807');
column_VA_TEXTINPUTBOXOQN_553807.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXOQN_553807?.templateRef;
const tplEdit_VA_TEXTINPUTBOXOQN_553807 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXOQN_553807');
column_VA_TEXTINPUTBOXOQN_553807.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXOQN_553807?.templateRef;
}
const column_VA_TEXTINPUTBOXRFT_967807 = this.metaData.viewState["QV_AX75_BUU48"].columns.find((col: any) => col.field == 'amount');
if (column_VA_TEXTINPUTBOXRFT_967807 != undefined) {
const tplCell_VA_TEXTINPUTBOXRFT_967807 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXRFT_967807');
column_VA_TEXTINPUTBOXRFT_967807.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXRFT_967807?.templateRef;
const tplEdit_VA_TEXTINPUTBOXRFT_967807 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXRFT_967807');
column_VA_TEXTINPUTBOXRFT_967807.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXRFT_967807?.templateRef;
}
const column_VA_TEXTINPUTBOXDHX_705807 = this.metaData.viewState["QV_AX75_BUU48"].columns.find((col: any) => col.field == 'desStatus');
if (column_VA_TEXTINPUTBOXDHX_705807 != undefined) {
const tplCell_VA_TEXTINPUTBOXDHX_705807 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXDHX_705807');
column_VA_TEXTINPUTBOXDHX_705807.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXDHX_705807?.templateRef;
const tplEdit_VA_TEXTINPUTBOXDHX_705807 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXDHX_705807');
column_VA_TEXTINPUTBOXDHX_705807.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXDHX_705807?.templateRef;
}
const column_VA_DATEFIELDQDTSRZ_983807 = this.metaData.viewState["QV_AX75_BUU48"].columns.find((col: any) => col.field == 'expirationDate');
if (column_VA_DATEFIELDQDTSRZ_983807 != undefined) {
const tplCell_VA_DATEFIELDQDTSRZ_983807 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DATEFIELDQDTSRZ_983807');
column_VA_DATEFIELDQDTSRZ_983807.properties.cellTemplate = tplCell_VA_DATEFIELDQDTSRZ_983807?.templateRef;
const tplEdit_VA_DATEFIELDQDTSRZ_983807 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DATEFIELDQDTSRZ_983807');
column_VA_DATEFIELDQDTSRZ_983807.properties.editTemplate = tplEdit_VA_DATEFIELDQDTSRZ_983807?.templateRef;
}
const column_VA_TEXTINPUTBOXTWE_108807 = this.metaData.viewState["QV_AX75_BUU48"].columns.find((col: any) => col.field == 'codCurrency');
if (column_VA_TEXTINPUTBOXTWE_108807 != undefined) {
const tplCell_VA_TEXTINPUTBOXTWE_108807 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXTWE_108807');
column_VA_TEXTINPUTBOXTWE_108807.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXTWE_108807?.templateRef;
const tplEdit_VA_TEXTINPUTBOXTWE_108807 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXTWE_108807');
column_VA_TEXTINPUTBOXTWE_108807.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXTWE_108807?.templateRef;
}
const column_VA_DATEFIELDLLPGBL_371807 = this.metaData.viewState["QV_AX75_BUU48"].columns.find((col: any) => col.field == 'disbursementDate');
if (column_VA_DATEFIELDLLPGBL_371807 != undefined) {
const tplCell_VA_DATEFIELDLLPGBL_371807 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DATEFIELDLLPGBL_371807');
column_VA_DATEFIELDLLPGBL_371807.properties.cellTemplate = tplCell_VA_DATEFIELDLLPGBL_371807?.templateRef;
const tplEdit_VA_DATEFIELDLLPGBL_371807 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DATEFIELDLLPGBL_371807');
column_VA_DATEFIELDLLPGBL_371807.properties.editTemplate = tplEdit_VA_DATEFIELDLLPGBL_371807?.templateRef;
}
const column_VA_TEXTINPUTBOXKYM_971807 = this.metaData.viewState["QV_AX75_BUU48"].columns.find((col: any) => col.field == 'clientID');
if (column_VA_TEXTINPUTBOXKYM_971807 != undefined) {
const tplCell_VA_TEXTINPUTBOXKYM_971807 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXKYM_971807');
column_VA_TEXTINPUTBOXKYM_971807.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXKYM_971807?.templateRef;
const tplEdit_VA_TEXTINPUTBOXKYM_971807 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXKYM_971807');
column_VA_TEXTINPUTBOXKYM_971807.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXKYM_971807?.templateRef;
}
const column_VA_TEXTINPUTBOXHQP_550807 = this.metaData.viewState["QV_AX75_BUU48"].columns.find((col: any) => col.field == 'numProcedure');
if (column_VA_TEXTINPUTBOXHQP_550807 != undefined) {
const tplCell_VA_TEXTINPUTBOXHQP_550807 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXHQP_550807');
column_VA_TEXTINPUTBOXHQP_550807.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXHQP_550807?.templateRef;
const tplEdit_VA_TEXTINPUTBOXHQP_550807 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXHQP_550807');
column_VA_TEXTINPUTBOXHQP_550807.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXHQP_550807?.templateRef;
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
LoanChildren: viewState.T_ASSTSVDYQFQAP_288.controls.LoanChildren as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'QERYS', taskId: 'T_ASSTSVDYQFQAP_288', taskVersion: '1.0.0', vcId: 'VC_LOANSCHILE_317288', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(false, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/QERYS/T_ASSTSVDYQFQAP_288', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_AX75_BUU48', { queryId: 'Q_LOANNRCH_EQ75', entityName: 'LoanChildren', filter: "", cobisRequestServerConfig: { pageSize :10 }, cache: 0, queryMemberParameters:[ {aliasQueryMember:'loanBankID' } , ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'QueryLoansChildren' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
