//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-officialnf-999423.model';
import { ViewState } from './model/vc-officialnf-999423-view-state';
import { VcOfficialnf999423Custom } from './vc-officialnf-999423.custom';
import { LNSPRService} from 'src/app/LNSPR/service-modules/LNSPR.service';
@Component({
selector: 'cobis-vc-officialnf-999423',
templateUrl: './vc-officialnf-999423.component.html'
})
export class VcOfficialnf999423Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private lnspr: LNSPRService) {
super(new VcOfficialnf999423Custom(designer.cobisCommons,lnspr), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXZQP_407800 = this.metaData.viewState["QV_JQ56_BYK87"].columns.find((col: any) => col.field == 'loanType');
if (column_VA_TEXTINPUTBOXZQP_407800 != undefined) {
const tplCell_VA_TEXTINPUTBOXZQP_407800 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXZQP_407800');
column_VA_TEXTINPUTBOXZQP_407800.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXZQP_407800?.templateRef;
const tplEdit_VA_TEXTINPUTBOXZQP_407800 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXZQP_407800');
column_VA_TEXTINPUTBOXZQP_407800.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXZQP_407800?.templateRef;
}
const column_VA_TEXTINPUTBOXZGT_364800 = this.metaData.viewState["QV_JQ56_BYK87"].columns.find((col: any) => col.field == 'bankId');
if (column_VA_TEXTINPUTBOXZGT_364800 != undefined) {
const tplCell_VA_TEXTINPUTBOXZGT_364800 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXZGT_364800');
column_VA_TEXTINPUTBOXZGT_364800.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXZGT_364800?.templateRef;
const tplEdit_VA_TEXTINPUTBOXZGT_364800 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXZGT_364800');
column_VA_TEXTINPUTBOXZGT_364800.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXZGT_364800?.templateRef;
}
const column_VA_TEXTINPUTBOXRQU_320800 = this.metaData.viewState["QV_JQ56_BYK87"].columns.find((col: any) => col.field == 'loansStatusDesc');
if (column_VA_TEXTINPUTBOXRQU_320800 != undefined) {
const tplCell_VA_TEXTINPUTBOXRQU_320800 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXRQU_320800');
column_VA_TEXTINPUTBOXRQU_320800.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXRQU_320800?.templateRef;
const tplEdit_VA_TEXTINPUTBOXRQU_320800 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXRQU_320800');
column_VA_TEXTINPUTBOXRQU_320800.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXRQU_320800?.templateRef;
}
const column_VA_TEXTINPUTBOXMYI_224800 = this.metaData.viewState["QV_JQ56_BYK87"].columns.find((col: any) => col.field == 'clientCode');
if (column_VA_TEXTINPUTBOXMYI_224800 != undefined) {
const tplCell_VA_TEXTINPUTBOXMYI_224800 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXMYI_224800');
column_VA_TEXTINPUTBOXMYI_224800.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXMYI_224800?.templateRef;
const tplEdit_VA_TEXTINPUTBOXMYI_224800 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXMYI_224800');
column_VA_TEXTINPUTBOXMYI_224800.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXMYI_224800?.templateRef;
}
const column_VA_TEXTINPUTBOXABA_156800 = this.metaData.viewState["QV_JQ56_BYK87"].columns.find((col: any) => col.field == 'clientName');
if (column_VA_TEXTINPUTBOXABA_156800 != undefined) {
const tplCell_VA_TEXTINPUTBOXABA_156800 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXABA_156800');
column_VA_TEXTINPUTBOXABA_156800.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXABA_156800?.templateRef;
const tplEdit_VA_TEXTINPUTBOXABA_156800 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXABA_156800');
column_VA_TEXTINPUTBOXABA_156800.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXABA_156800?.templateRef;
}
const column_VA_TEXTINPUTBOXEAE_629800 = this.metaData.viewState["QV_JQ56_BYK87"].columns.find((col: any) => col.field == 'category');
if (column_VA_TEXTINPUTBOXEAE_629800 != undefined) {
const tplCell_VA_TEXTINPUTBOXEAE_629800 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXEAE_629800');
column_VA_TEXTINPUTBOXEAE_629800.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXEAE_629800?.templateRef;
const tplEdit_VA_TEXTINPUTBOXEAE_629800 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXEAE_629800');
column_VA_TEXTINPUTBOXEAE_629800.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXEAE_629800?.templateRef;
}
const column_VA_TEXTINPUTBOXWUJ_217800 = this.metaData.viewState["QV_JQ56_BYK87"].columns.find((col: any) => col.field == 'amount');
if (column_VA_TEXTINPUTBOXWUJ_217800 != undefined) {
const tplCell_VA_TEXTINPUTBOXWUJ_217800 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXWUJ_217800');
column_VA_TEXTINPUTBOXWUJ_217800.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXWUJ_217800?.templateRef;
const tplEdit_VA_TEXTINPUTBOXWUJ_217800 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXWUJ_217800');
column_VA_TEXTINPUTBOXWUJ_217800.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXWUJ_217800?.templateRef;
}
const column_VA_DATEFIELDCWGGHH_393800 = this.metaData.viewState["QV_JQ56_BYK87"].columns.find((col: any) => col.field == 'expirationDate');
if (column_VA_DATEFIELDCWGGHH_393800 != undefined) {
const tplCell_VA_DATEFIELDCWGGHH_393800 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DATEFIELDCWGGHH_393800');
column_VA_DATEFIELDCWGGHH_393800.properties.cellTemplate = tplCell_VA_DATEFIELDCWGGHH_393800?.templateRef;
const tplEdit_VA_DATEFIELDCWGGHH_393800 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DATEFIELDCWGGHH_393800');
column_VA_DATEFIELDCWGGHH_393800.properties.editTemplate = tplEdit_VA_DATEFIELDCWGGHH_393800?.templateRef;
}
const column_VA_TEXTINPUTBOXVFU_652800 = this.metaData.viewState["QV_JQ56_BYK87"].columns.find((col: any) => col.field == 'currencyCode');
if (column_VA_TEXTINPUTBOXVFU_652800 != undefined) {
const tplCell_VA_TEXTINPUTBOXVFU_652800 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXVFU_652800');
column_VA_TEXTINPUTBOXVFU_652800.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXVFU_652800?.templateRef;
const tplEdit_VA_TEXTINPUTBOXVFU_652800 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXVFU_652800');
column_VA_TEXTINPUTBOXVFU_652800.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXVFU_652800?.templateRef;
}
const column_VA_DATEFIELDVJZAPD_814800 = this.metaData.viewState["QV_JQ56_BYK87"].columns.find((col: any) => col.field == 'disbursementDate');
if (column_VA_DATEFIELDVJZAPD_814800 != undefined) {
const tplCell_VA_DATEFIELDVJZAPD_814800 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DATEFIELDVJZAPD_814800');
column_VA_DATEFIELDVJZAPD_814800.properties.cellTemplate = tplCell_VA_DATEFIELDVJZAPD_814800?.templateRef;
const tplEdit_VA_DATEFIELDVJZAPD_814800 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DATEFIELDVJZAPD_814800');
column_VA_DATEFIELDVJZAPD_814800.properties.editTemplate = tplEdit_VA_DATEFIELDVJZAPD_814800?.templateRef;
}
const column_VA_TEXTINPUTBOXRPQ_938800 = this.metaData.viewState["QV_JQ56_BYK87"].columns.find((col: any) => col.field == 'processNumber');
if (column_VA_TEXTINPUTBOXRPQ_938800 != undefined) {
const tplCell_VA_TEXTINPUTBOXRPQ_938800 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXRPQ_938800');
column_VA_TEXTINPUTBOXRPQ_938800.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXRPQ_938800?.templateRef;
const tplEdit_VA_TEXTINPUTBOXRPQ_938800 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXRPQ_938800');
column_VA_TEXTINPUTBOXRPQ_938800.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXRPQ_938800?.templateRef;
}
const column_VA_TEXTINPUTBOXQPF_381800 = this.metaData.viewState["QV_JQ56_BYK87"].columns.find((col: any) => col.field == 'groupCode');
if (column_VA_TEXTINPUTBOXQPF_381800 != undefined) {
const tplCell_VA_TEXTINPUTBOXQPF_381800 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXQPF_381800');
column_VA_TEXTINPUTBOXQPF_381800.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXQPF_381800?.templateRef;
const tplEdit_VA_TEXTINPUTBOXQPF_381800 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXQPF_381800');
column_VA_TEXTINPUTBOXQPF_381800.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXQPF_381800?.templateRef;
}
const column_VA_TEXTINPUTBOXGMT_288800 = this.metaData.viewState["QV_JQ56_BYK87"].columns.find((col: any) => col.field == 'officeCode');
if (column_VA_TEXTINPUTBOXGMT_288800 != undefined) {
const tplCell_VA_TEXTINPUTBOXGMT_288800 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXGMT_288800');
column_VA_TEXTINPUTBOXGMT_288800.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXGMT_288800?.templateRef;
const tplEdit_VA_TEXTINPUTBOXGMT_288800 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXGMT_288800');
column_VA_TEXTINPUTBOXGMT_288800.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXGMT_288800?.templateRef;
}
const column_VA_TEXTINPUTBOXPJJ_200800 = this.metaData.viewState["QV_JQ56_BYK87"].columns.find((col: any) => col.field == 'officialCode');
if (column_VA_TEXTINPUTBOXPJJ_200800 != undefined) {
const tplCell_VA_TEXTINPUTBOXPJJ_200800 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXPJJ_200800');
column_VA_TEXTINPUTBOXPJJ_200800.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXPJJ_200800?.templateRef;
const tplEdit_VA_TEXTINPUTBOXPJJ_200800 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXPJJ_200800');
column_VA_TEXTINPUTBOXPJJ_200800.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXPJJ_200800?.templateRef;
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
OfficialOfficeTransferFilter: viewState.T_LNSPRXNWEODPH_423.controls.OfficialOfficeTransferFilter as FormGroup ,
OfficialOfficeTransferList: viewState.T_LNSPRXNWEODPH_423.controls.OfficialOfficeTransferList as FormGroup
};
this.metaData = { moduleId: 'LNSPR', subModuleId: 'OPRTN', taskId: 'T_LNSPRXNWEODPH_423', taskVersion: '1.0.0', vcId: 'VC_OFFICIALNF_999423', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(false, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/LNSPR/OPRTN/T_LNSPRXNWEODPH_423', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ['VA_ORIGINOFFICEUMK_654800', { catalogName: 'cl_oficina', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_DESTINATIONOEEF_643800', { catalogName: 'cl_oficina', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_REASONDDWAKVIHS_847800', { catalogName: 'ca_motivo_traslado', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_TEXTINPUTBOXWUJ_217800', { catalogName: 'cl_moneda', filter: "", cobisRequestServerConfig: null, cache: 0 , controlGridInfo: { queryViewId: "QV_JQ56_BYK87", columnId: "amount" } }], ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['VA_ORIGINOFFICILAA_229800', { queryId: 'Q_OFFILILC_KJ11', entityName: '', filter:"", cobisRequestServerConfig: {'filterType':'none'}, cache: 0 }], ['VA_DESTINATIONOIAI_845800', { queryId: 'Q_OFFILILC_KJ11', entityName: '', filter:"", cobisRequestServerConfig: {'filterType':'none'}, cache: 0 }], ['QV_JQ56_BYK87', { queryId: 'Q_OFFILLLL_SV56', entityName: 'OfficialOfficeTransferList', filter: "", cobisRequestServerConfig: { pageSize :5 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ [ 'VA_TRANSFERTYPETWU_989800',{ data : [ new CobisModelCatalog ( 'S' , 'Grupo' ), new CobisModelCatalog ( 'N' , 'Prospecto/Cliente' )] }], ]) , label: 'LNSPR.LBL_LNSPR_TRASLADFF_12580' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
