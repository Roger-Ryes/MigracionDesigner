//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-loansyndie-790991.model';
import { ViewState } from './model/vc-loansyndie-790991-view-state';
import { VcLoansyndie790991Custom } from './vc-loansyndie-790991.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-loansyndie-790991',
templateUrl: './vc-loansyndie-790991.component.html'
})
export class VcLoansyndie790991Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcLoansyndie790991Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXOIQ_121304 = this.metaData.viewState["QV_ZV62_ZBH24"].columns.find((col: any) => col.field == 'codParticipantsL');
if (column_VA_TEXTINPUTBOXOIQ_121304 != undefined) {
const tplCell_VA_TEXTINPUTBOXOIQ_121304 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXOIQ_121304');
column_VA_TEXTINPUTBOXOIQ_121304.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXOIQ_121304?.templateRef;
const tplEdit_VA_TEXTINPUTBOXOIQ_121304 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXOIQ_121304');
column_VA_TEXTINPUTBOXOIQ_121304.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXOIQ_121304?.templateRef;
}
const column_VA_TEXTINPUTBOXEEF_290304 = this.metaData.viewState["QV_ZV62_ZBH24"].columns.find((col: any) => col.field == 'nameParticipantsL');
if (column_VA_TEXTINPUTBOXEEF_290304 != undefined) {
const tplCell_VA_TEXTINPUTBOXEEF_290304 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXEEF_290304');
column_VA_TEXTINPUTBOXEEF_290304.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXEEF_290304?.templateRef;
const tplEdit_VA_TEXTINPUTBOXEEF_290304 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXEEF_290304');
column_VA_TEXTINPUTBOXEEF_290304.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXEEF_290304?.templateRef;
}
const column_VA_TEXTINPUTBOXFFI_375304 = this.metaData.viewState["QV_ZV62_ZBH24"].columns.find((col: any) => col.field == 'percentageParticipantsL');
if (column_VA_TEXTINPUTBOXFFI_375304 != undefined) {
const tplCell_VA_TEXTINPUTBOXFFI_375304 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXFFI_375304');
column_VA_TEXTINPUTBOXFFI_375304.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXFFI_375304?.templateRef;
const tplEdit_VA_TEXTINPUTBOXFFI_375304 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXFFI_375304');
column_VA_TEXTINPUTBOXFFI_375304.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXFFI_375304?.templateRef;
}
const column_VA_TEXTINPUTBOXDTK_373304 = this.metaData.viewState["QV_ZV62_ZBH24"].columns.find((col: any) => col.field == 'roleParticipantsL');
if (column_VA_TEXTINPUTBOXDTK_373304 != undefined) {
const tplCell_VA_TEXTINPUTBOXDTK_373304 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXDTK_373304');
column_VA_TEXTINPUTBOXDTK_373304.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXDTK_373304?.templateRef;
const tplEdit_VA_TEXTINPUTBOXDTK_373304 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXDTK_373304');
column_VA_TEXTINPUTBOXDTK_373304.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXDTK_373304?.templateRef;
}
const column_VA_TEXTINPUTBOXKVY_162304 = this.metaData.viewState["QV_ZV62_ZBH24"].columns.find((col: any) => col.field == 'mailParticipantsL');
if (column_VA_TEXTINPUTBOXKVY_162304 != undefined) {
const tplCell_VA_TEXTINPUTBOXKVY_162304 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXKVY_162304');
column_VA_TEXTINPUTBOXKVY_162304.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXKVY_162304?.templateRef;
const tplEdit_VA_TEXTINPUTBOXKVY_162304 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXKVY_162304');
column_VA_TEXTINPUTBOXKVY_162304.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXKVY_162304?.templateRef;
}
const column_VA_TEXTINPUTBOXWIB_436304 = this.metaData.viewState["QV_ZV62_ZBH24"].columns.find((col: any) => col.field == 'amountParticipantsL');
if (column_VA_TEXTINPUTBOXWIB_436304 != undefined) {
const tplCell_VA_TEXTINPUTBOXWIB_436304 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXWIB_436304');
column_VA_TEXTINPUTBOXWIB_436304.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXWIB_436304?.templateRef;
const tplEdit_VA_TEXTINPUTBOXWIB_436304 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXWIB_436304');
column_VA_TEXTINPUTBOXWIB_436304.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXWIB_436304?.templateRef;
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
LoanSyndicatedList: viewState.T_ASSTSUHBKGFUE_991.controls.LoanSyndicatedList as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'QERYS', taskId: 'T_ASSTSUHBKGFUE_991', taskVersion: '1.0.0', vcId: 'VC_LOANSYNDIE_790991', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/QERYS/T_ASSTSUHBKGFUE_991', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_ZV62_ZBH24', { queryId: 'Q_LOANIISE_TX62', entityName: 'LoanSyndicatedList', filter: "", cobisRequestServerConfig: { pageSize :0 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'LoanSyndicatedListForm' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
