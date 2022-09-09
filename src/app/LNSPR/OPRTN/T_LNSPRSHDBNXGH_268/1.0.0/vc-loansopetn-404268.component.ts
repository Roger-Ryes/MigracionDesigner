//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-loansopetn-404268.model';
import { ViewState } from './model/vc-loansopetn-404268-view-state';
import { VcLoansopetn404268Custom } from './vc-loansopetn-404268.custom';
import { LNSPRService} from 'src/app/LNSPR/service-modules/LNSPR.service';
@Component({
selector: 'cobis-vc-loansopetn-404268',
templateUrl: './vc-loansopetn-404268.component.html'
})
export class VcLoansopetn404268Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private lnspr: LNSPRService) {
super(new VcLoansopetn404268Custom(designer.cobisCommons,lnspr), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXHVY_271518 = this.metaData.viewState["QV_GM97_JJJ11"].columns.find((col: any) => col.field == 'codParticipants');
if (column_VA_TEXTINPUTBOXHVY_271518 != undefined) {
const tplCell_VA_TEXTINPUTBOXHVY_271518 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXHVY_271518');
column_VA_TEXTINPUTBOXHVY_271518.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXHVY_271518?.templateRef;
const tplEdit_VA_TEXTINPUTBOXHVY_271518 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXHVY_271518');
column_VA_TEXTINPUTBOXHVY_271518.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXHVY_271518?.templateRef;
}
const column_VA_TEXTINPUTBOXKXI_794518 = this.metaData.viewState["QV_GM97_JJJ11"].columns.find((col: any) => col.field == 'nameParticipants');
if (column_VA_TEXTINPUTBOXKXI_794518 != undefined) {
const tplCell_VA_TEXTINPUTBOXKXI_794518 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXKXI_794518');
column_VA_TEXTINPUTBOXKXI_794518.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXKXI_794518?.templateRef;
const tplEdit_VA_TEXTINPUTBOXKXI_794518 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXKXI_794518');
column_VA_TEXTINPUTBOXKXI_794518.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXKXI_794518?.templateRef;
}
const column_VA_TEXTINPUTBOXCTZ_403518 = this.metaData.viewState["QV_GM97_JJJ11"].columns.find((col: any) => col.field == 'percentageParticipants');
if (column_VA_TEXTINPUTBOXCTZ_403518 != undefined) {
const tplCell_VA_TEXTINPUTBOXCTZ_403518 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXCTZ_403518');
column_VA_TEXTINPUTBOXCTZ_403518.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXCTZ_403518?.templateRef;
const tplEdit_VA_TEXTINPUTBOXCTZ_403518 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXCTZ_403518');
column_VA_TEXTINPUTBOXCTZ_403518.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXCTZ_403518?.templateRef;
}
const column_VA_TEXTINPUTBOXNKA_174518 = this.metaData.viewState["QV_GM97_JJJ11"].columns.find((col: any) => col.field == 'roleP');
if (column_VA_TEXTINPUTBOXNKA_174518 != undefined) {
const tplCell_VA_TEXTINPUTBOXNKA_174518 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXNKA_174518');
column_VA_TEXTINPUTBOXNKA_174518.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXNKA_174518?.templateRef;
const tplEdit_VA_TEXTINPUTBOXNKA_174518 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXNKA_174518');
column_VA_TEXTINPUTBOXNKA_174518.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXNKA_174518?.templateRef;
}
const column_VA_TEXTINPUTBOXPKT_357518 = this.metaData.viewState["QV_GM97_JJJ11"].columns.find((col: any) => col.field == 'mail');
if (column_VA_TEXTINPUTBOXPKT_357518 != undefined) {
const tplCell_VA_TEXTINPUTBOXPKT_357518 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXPKT_357518');
column_VA_TEXTINPUTBOXPKT_357518.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXPKT_357518?.templateRef;
const tplEdit_VA_TEXTINPUTBOXPKT_357518 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXPKT_357518');
column_VA_TEXTINPUTBOXPKT_357518.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXPKT_357518?.templateRef;
}
const column_VA_TEXTINPUTBOXKNN_414518 = this.metaData.viewState["QV_GM97_JJJ11"].columns.find((col: any) => col.field == 'amountParticipants');
if (column_VA_TEXTINPUTBOXKNN_414518 != undefined) {
const tplCell_VA_TEXTINPUTBOXKNN_414518 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXKNN_414518');
column_VA_TEXTINPUTBOXKNN_414518.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXKNN_414518?.templateRef;
const tplEdit_VA_TEXTINPUTBOXKNN_414518 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXKNN_414518');
column_VA_TEXTINPUTBOXKNN_414518.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXKNN_414518?.templateRef;
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
OperationEntity: viewState.T_LNSPRSHDBNXGH_268.controls.OperationEntity as FormGroup ,
SyndicatedList: viewState.T_LNSPRSHDBNXGH_268.controls.SyndicatedList as FormGroup
};
this.metaData = { moduleId: 'LNSPR', subModuleId: 'OPRTN', taskId: 'T_LNSPRSHDBNXGH_268', taskVersion: '1.0.0', vcId: 'VC_LOANSOPETN_404268', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/LNSPR/OPRTN/T_LNSPRSHDBNXGH_268', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ['VA_OFFICIALWGEPOTD_393518', { filter:"", cobisRequestServerConfig: {'filterType':'none'}, cache: 0 }], ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ['VA_TYPEOPERATIONNN_178518', { catalogName: 'ca_toperacion', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_MONEYYUNMNTCAPG_708518', { catalogName: 'cl_moneda', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_SECTORFUBPMDRRG_875518', { catalogName: 'cc_sector', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_FINANCIALDESNIO_774518', { catalogName: 'cr_destino', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_ECONOMICACTIIVV_350518', { catalogName: 'cl_actividad_ec', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_OFFICESTHMPCXJO_201518', { catalogName: 'cl_oficina', filter: "", cobisRequestServerConfig: null, cache: 0 }], ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_GM97_JJJ11', { queryId: 'Q_SYNDCEAL_LH97', entityName: 'SyndicatedList', filter: "", cobisRequestServerConfig: null, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'LoansOperationUpdate' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
