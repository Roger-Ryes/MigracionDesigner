//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-loansliner-641705.model';
import { ViewState } from './model/vc-loansliner-641705-view-state';
import { VcLoansliner641705Custom } from './vc-loansliner-641705.custom';
import { LNSPRService} from 'src/app/LNSPR/service-modules/LNSPR.service';
@Component({
selector: 'cobis-vc-loansliner-641705',
templateUrl: './vc-loansliner-641705.component.html'
})
export class VcLoansliner641705Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private lnspr: LNSPRService) {
super(new VcLoansliner641705Custom(designer.cobisCommons,lnspr), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXRLW_788308 = this.metaData.viewState["QV_KB20_UZG21"].columns.find((col: any) => col.field == 'guarantee');
if (column_VA_TEXTINPUTBOXRLW_788308 != undefined) {
const tplCell_VA_TEXTINPUTBOXRLW_788308 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXRLW_788308');
column_VA_TEXTINPUTBOXRLW_788308.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXRLW_788308?.templateRef;
const tplEdit_VA_TEXTINPUTBOXRLW_788308 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXRLW_788308');
column_VA_TEXTINPUTBOXRLW_788308.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXRLW_788308?.templateRef;
}
const column_VA_TEXTINPUTBOXIXG_172308 = this.metaData.viewState["QV_KB20_UZG21"].columns.find((col: any) => col.field == 'type');
if (column_VA_TEXTINPUTBOXIXG_172308 != undefined) {
const tplCell_VA_TEXTINPUTBOXIXG_172308 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXIXG_172308');
column_VA_TEXTINPUTBOXIXG_172308.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXIXG_172308?.templateRef;
const tplEdit_VA_TEXTINPUTBOXIXG_172308 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXIXG_172308');
column_VA_TEXTINPUTBOXIXG_172308.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXIXG_172308?.templateRef;
}
const column_VA_TEXTINPUTBOXWDS_313308 = this.metaData.viewState["QV_KB20_UZG21"].columns.find((col: any) => col.field == 'description');
if (column_VA_TEXTINPUTBOXWDS_313308 != undefined) {
const tplCell_VA_TEXTINPUTBOXWDS_313308 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXWDS_313308');
column_VA_TEXTINPUTBOXWDS_313308.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXWDS_313308?.templateRef;
const tplEdit_VA_TEXTINPUTBOXWDS_313308 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXWDS_313308');
column_VA_TEXTINPUTBOXWDS_313308.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXWDS_313308?.templateRef;
}
const column_VA_TEXTINPUTBOXLHS_787308 = this.metaData.viewState["QV_KB20_UZG21"].columns.find((col: any) => col.field == 'state');
if (column_VA_TEXTINPUTBOXLHS_787308 != undefined) {
const tplCell_VA_TEXTINPUTBOXLHS_787308 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXLHS_787308');
column_VA_TEXTINPUTBOXLHS_787308.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXLHS_787308?.templateRef;
const tplEdit_VA_TEXTINPUTBOXLHS_787308 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXLHS_787308');
column_VA_TEXTINPUTBOXLHS_787308.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXLHS_787308?.templateRef;
}
const column_VA_DATEFIELDPDUQJV_399308 = this.metaData.viewState["QV_KB20_UZG21"].columns.find((col: any) => col.field == 'admissionDate');
if (column_VA_DATEFIELDPDUQJV_399308 != undefined) {
const tplCell_VA_DATEFIELDPDUQJV_399308 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DATEFIELDPDUQJV_399308');
column_VA_DATEFIELDPDUQJV_399308.properties.cellTemplate = tplCell_VA_DATEFIELDPDUQJV_399308?.templateRef;
const tplEdit_VA_DATEFIELDPDUQJV_399308 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DATEFIELDPDUQJV_399308');
column_VA_DATEFIELDPDUQJV_399308.properties.editTemplate = tplEdit_VA_DATEFIELDPDUQJV_399308?.templateRef;
}
const column_VA_TEXTINPUTBOXWFD_785308 = this.metaData.viewState["QV_KB20_UZG21"].columns.find((col: any) => col.field == 'currency');
if (column_VA_TEXTINPUTBOXWFD_785308 != undefined) {
const tplCell_VA_TEXTINPUTBOXWFD_785308 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXWFD_785308');
column_VA_TEXTINPUTBOXWFD_785308.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXWFD_785308?.templateRef;
const tplEdit_VA_TEXTINPUTBOXWFD_785308 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXWFD_785308');
column_VA_TEXTINPUTBOXWFD_785308.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXWFD_785308?.templateRef;
}
const column_VA_TEXTINPUTBOXPEK_638308 = this.metaData.viewState["QV_KB20_UZG21"].columns.find((col: any) => col.field == 'initialValue');
if (column_VA_TEXTINPUTBOXPEK_638308 != undefined) {
const tplCell_VA_TEXTINPUTBOXPEK_638308 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXPEK_638308');
column_VA_TEXTINPUTBOXPEK_638308.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXPEK_638308?.templateRef;
const tplEdit_VA_TEXTINPUTBOXPEK_638308 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXPEK_638308');
column_VA_TEXTINPUTBOXPEK_638308.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXPEK_638308?.templateRef;
}
const column_VA_TEXTINPUTBOXEJK_944308 = this.metaData.viewState["QV_KB20_UZG21"].columns.find((col: any) => col.field == 'currentValue');
if (column_VA_TEXTINPUTBOXEJK_944308 != undefined) {
const tplCell_VA_TEXTINPUTBOXEJK_944308 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXEJK_944308');
column_VA_TEXTINPUTBOXEJK_944308.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXEJK_944308?.templateRef;
const tplEdit_VA_TEXTINPUTBOXEJK_944308 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXEJK_944308');
column_VA_TEXTINPUTBOXEJK_944308.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXEJK_944308?.templateRef;
}
const column_VA_TEXTINPUTBOXMEW_983308 = this.metaData.viewState["QV_KB20_UZG21"].columns.find((col: any) => col.field == 'minimumValue');
if (column_VA_TEXTINPUTBOXMEW_983308 != undefined) {
const tplCell_VA_TEXTINPUTBOXMEW_983308 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXMEW_983308');
column_VA_TEXTINPUTBOXMEW_983308.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXMEW_983308?.templateRef;
const tplEdit_VA_TEXTINPUTBOXMEW_983308 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXMEW_983308');
column_VA_TEXTINPUTBOXMEW_983308.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXMEW_983308?.templateRef;
}
const column_VA_TEXTINPUTBOXEPV_806308 = this.metaData.viewState["QV_KB20_UZG21"].columns.find((col: any) => col.field == 'code');
if (column_VA_TEXTINPUTBOXEPV_806308 != undefined) {
const tplCell_VA_TEXTINPUTBOXEPV_806308 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXEPV_806308');
column_VA_TEXTINPUTBOXEPV_806308.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXEPV_806308?.templateRef;
const tplEdit_VA_TEXTINPUTBOXEPV_806308 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXEPV_806308');
column_VA_TEXTINPUTBOXEPV_806308.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXEPV_806308?.templateRef;
}
const column_VA_TEXTINPUTBOXYRN_976308 = this.metaData.viewState["QV_ZZ84_YVC22"].columns.find((col: any) => col.field == 'guarantee');
if (column_VA_TEXTINPUTBOXYRN_976308 != undefined) {
const tplCell_VA_TEXTINPUTBOXYRN_976308 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXYRN_976308');
column_VA_TEXTINPUTBOXYRN_976308.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXYRN_976308?.templateRef;
const tplEdit_VA_TEXTINPUTBOXYRN_976308 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXYRN_976308');
column_VA_TEXTINPUTBOXYRN_976308.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXYRN_976308?.templateRef;
}
const column_VA_TEXTINPUTBOXCZA_315308 = this.metaData.viewState["QV_ZZ84_YVC22"].columns.find((col: any) => col.field == 'type');
if (column_VA_TEXTINPUTBOXCZA_315308 != undefined) {
const tplCell_VA_TEXTINPUTBOXCZA_315308 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXCZA_315308');
column_VA_TEXTINPUTBOXCZA_315308.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXCZA_315308?.templateRef;
const tplEdit_VA_TEXTINPUTBOXCZA_315308 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXCZA_315308');
column_VA_TEXTINPUTBOXCZA_315308.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXCZA_315308?.templateRef;
}
const column_VA_TEXTINPUTBOXPVD_927308 = this.metaData.viewState["QV_ZZ84_YVC22"].columns.find((col: any) => col.field == 'state');
if (column_VA_TEXTINPUTBOXPVD_927308 != undefined) {
const tplCell_VA_TEXTINPUTBOXPVD_927308 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXPVD_927308');
column_VA_TEXTINPUTBOXPVD_927308.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXPVD_927308?.templateRef;
const tplEdit_VA_TEXTINPUTBOXPVD_927308 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXPVD_927308');
column_VA_TEXTINPUTBOXPVD_927308.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXPVD_927308?.templateRef;
}
const column_VA_TEXTINPUTBOXTHN_169308 = this.metaData.viewState["QV_ZZ84_YVC22"].columns.find((col: any) => col.field == 'description');
if (column_VA_TEXTINPUTBOXTHN_169308 != undefined) {
const tplCell_VA_TEXTINPUTBOXTHN_169308 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXTHN_169308');
column_VA_TEXTINPUTBOXTHN_169308.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXTHN_169308?.templateRef;
const tplEdit_VA_TEXTINPUTBOXTHN_169308 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXTHN_169308');
column_VA_TEXTINPUTBOXTHN_169308.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXTHN_169308?.templateRef;
}
const column_VA_DATEFIELDIIIDFM_537308 = this.metaData.viewState["QV_ZZ84_YVC22"].columns.find((col: any) => col.field == 'admissionDate');
if (column_VA_DATEFIELDIIIDFM_537308 != undefined) {
const tplCell_VA_DATEFIELDIIIDFM_537308 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DATEFIELDIIIDFM_537308');
column_VA_DATEFIELDIIIDFM_537308.properties.cellTemplate = tplCell_VA_DATEFIELDIIIDFM_537308?.templateRef;
const tplEdit_VA_DATEFIELDIIIDFM_537308 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DATEFIELDIIIDFM_537308');
column_VA_DATEFIELDIIIDFM_537308.properties.editTemplate = tplEdit_VA_DATEFIELDIIIDFM_537308?.templateRef;
}
const column_VA_TEXTINPUTBOXBGA_566308 = this.metaData.viewState["QV_ZZ84_YVC22"].columns.find((col: any) => col.field == 'currency');
if (column_VA_TEXTINPUTBOXBGA_566308 != undefined) {
const tplCell_VA_TEXTINPUTBOXBGA_566308 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXBGA_566308');
column_VA_TEXTINPUTBOXBGA_566308.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXBGA_566308?.templateRef;
const tplEdit_VA_TEXTINPUTBOXBGA_566308 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXBGA_566308');
column_VA_TEXTINPUTBOXBGA_566308.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXBGA_566308?.templateRef;
}
const column_VA_TEXTINPUTBOXVXS_189308 = this.metaData.viewState["QV_ZZ84_YVC22"].columns.find((col: any) => col.field == 'initialValue');
if (column_VA_TEXTINPUTBOXVXS_189308 != undefined) {
const tplCell_VA_TEXTINPUTBOXVXS_189308 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXVXS_189308');
column_VA_TEXTINPUTBOXVXS_189308.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXVXS_189308?.templateRef;
const tplEdit_VA_TEXTINPUTBOXVXS_189308 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXVXS_189308');
column_VA_TEXTINPUTBOXVXS_189308.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXVXS_189308?.templateRef;
}
const column_VA_TEXTINPUTBOXYQI_664308 = this.metaData.viewState["QV_ZZ84_YVC22"].columns.find((col: any) => col.field == 'currentValue');
if (column_VA_TEXTINPUTBOXYQI_664308 != undefined) {
const tplCell_VA_TEXTINPUTBOXYQI_664308 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXYQI_664308');
column_VA_TEXTINPUTBOXYQI_664308.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXYQI_664308?.templateRef;
const tplEdit_VA_TEXTINPUTBOXYQI_664308 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXYQI_664308');
column_VA_TEXTINPUTBOXYQI_664308.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXYQI_664308?.templateRef;
}
const column_VA_TEXTINPUTBOXNMO_402308 = this.metaData.viewState["QV_ZZ84_YVC22"].columns.find((col: any) => col.field == 'valueMN');
if (column_VA_TEXTINPUTBOXNMO_402308 != undefined) {
const tplCell_VA_TEXTINPUTBOXNMO_402308 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXNMO_402308');
column_VA_TEXTINPUTBOXNMO_402308.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXNMO_402308?.templateRef;
const tplEdit_VA_TEXTINPUTBOXNMO_402308 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXNMO_402308');
column_VA_TEXTINPUTBOXNMO_402308.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXNMO_402308?.templateRef;
}
const column_VA_TEXTINPUTBOXXRE_135308 = this.metaData.viewState["QV_ZZ84_YVC22"].columns.find((col: any) => col.field == 'code');
if (column_VA_TEXTINPUTBOXXRE_135308 != undefined) {
const tplCell_VA_TEXTINPUTBOXXRE_135308 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXXRE_135308');
column_VA_TEXTINPUTBOXXRE_135308.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXXRE_135308?.templateRef;
const tplEdit_VA_TEXTINPUTBOXXRE_135308 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXXRE_135308');
column_VA_TEXTINPUTBOXXRE_135308.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXXRE_135308?.templateRef;
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
LoansLineGuarantee: viewState.T_LNSPRQGEMJIOM_705.controls.LoansLineGuarantee as FormGroup ,
LineGuaranteesList: viewState.T_LNSPRQGEMJIOM_705.controls.LineGuaranteesList as FormGroup ,
LineGuaranteesAssociatedList: viewState.T_LNSPRQGEMJIOM_705.controls.LineGuaranteesAssociatedList as FormGroup
};
this.metaData = { moduleId: 'LNSPR', subModuleId: 'OPRTN', taskId: 'T_LNSPRQGEMJIOM_705', taskVersion: '1.0.0', vcId: 'VC_LOANSLINER_641705', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, true), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/LNSPR/OPRTN/T_LNSPRQGEMJIOM_705', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ['VA_2DTPWYLEZNXCMEX_633308', { catalogName: 'cu_est_custodia', filter: "", cobisRequestServerConfig: null, cache: 0 }], ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_KB20_UZG21', { queryId: 'Q_LINERLAR_KA20', entityName: 'LineGuaranteesList', filter: "", cobisRequestServerConfig: { pageSize :5 }, cache: 0, queryMemberParameters:[ ]}], ['QV_ZZ84_YVC22', { queryId: 'Q_LINELAAN_WU84', entityName: 'LineGuaranteesAssociatedList', filter: "", cobisRequestServerConfig: { pageSize :10 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'LoansLineGuaranteesForm' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
