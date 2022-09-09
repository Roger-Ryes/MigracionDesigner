//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-companiecr-302580.model';
import { ViewState } from './model/vc-companiecr-302580-view-state';
import { VcCompaniecr302580Custom } from './vc-companiecr-302580.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-companiecr-302580',
templateUrl: './vc-companiecr-302580.component.html'
})
export class VcCompaniecr302580Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcCompaniecr302580Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXESA_697960 = this.metaData.viewState["QV_CK98_MLY42"].columns.find((col: any) => col.field == 'bankId');
if (column_VA_TEXTINPUTBOXESA_697960 != undefined) {
const tplCell_VA_TEXTINPUTBOXESA_697960 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXESA_697960');
column_VA_TEXTINPUTBOXESA_697960.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXESA_697960?.templateRef;
const tplEdit_VA_TEXTINPUTBOXESA_697960 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXESA_697960');
column_VA_TEXTINPUTBOXESA_697960.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXESA_697960?.templateRef;
}
const column_VA_DATEFIELDGGUJQA_467960 = this.metaData.viewState["QV_CK98_MLY42"].columns.find((col: any) => col.field == 'dateExpirationDiscounts');
if (column_VA_DATEFIELDGGUJQA_467960 != undefined) {
const tplCell_VA_DATEFIELDGGUJQA_467960 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DATEFIELDGGUJQA_467960');
column_VA_DATEFIELDGGUJQA_467960.properties.cellTemplate = tplCell_VA_DATEFIELDGGUJQA_467960?.templateRef;
const tplEdit_VA_DATEFIELDGGUJQA_467960 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DATEFIELDGGUJQA_467960');
column_VA_DATEFIELDGGUJQA_467960.properties.editTemplate = tplEdit_VA_DATEFIELDGGUJQA_467960?.templateRef;
}
const column_VA_TEXTINPUTBOXVLY_407960 = this.metaData.viewState["QV_CK98_MLY42"].columns.find((col: any) => col.field == 'client');
if (column_VA_TEXTINPUTBOXVLY_407960 != undefined) {
const tplCell_VA_TEXTINPUTBOXVLY_407960 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXVLY_407960');
column_VA_TEXTINPUTBOXVLY_407960.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXVLY_407960?.templateRef;
const tplEdit_VA_TEXTINPUTBOXVLY_407960 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXVLY_407960');
column_VA_TEXTINPUTBOXVLY_407960.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXVLY_407960?.templateRef;
}
const column_VA_TEXTINPUTBOXJNT_728960 = this.metaData.viewState["QV_CK98_MLY42"].columns.find((col: any) => col.field == 'documentType');
if (column_VA_TEXTINPUTBOXJNT_728960 != undefined) {
const tplCell_VA_TEXTINPUTBOXJNT_728960 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXJNT_728960');
column_VA_TEXTINPUTBOXJNT_728960.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXJNT_728960?.templateRef;
const tplEdit_VA_TEXTINPUTBOXJNT_728960 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXJNT_728960');
column_VA_TEXTINPUTBOXJNT_728960.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXJNT_728960?.templateRef;
}
const column_VA_TEXTINPUTBOXKLK_957960 = this.metaData.viewState["QV_CK98_MLY42"].columns.find((col: any) => col.field == 'documentValue');
if (column_VA_TEXTINPUTBOXKLK_957960 != undefined) {
const tplCell_VA_TEXTINPUTBOXKLK_957960 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXKLK_957960');
column_VA_TEXTINPUTBOXKLK_957960.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXKLK_957960?.templateRef;
const tplEdit_VA_TEXTINPUTBOXKLK_957960 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXKLK_957960');
column_VA_TEXTINPUTBOXKLK_957960.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXKLK_957960?.templateRef;
}
const column_VA_TEXTINPUTBOXADK_755960 = this.metaData.viewState["QV_CK98_MLY42"].columns.find((col: any) => col.field == 'clientName');
if (column_VA_TEXTINPUTBOXADK_755960 != undefined) {
const tplCell_VA_TEXTINPUTBOXADK_755960 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXADK_755960');
column_VA_TEXTINPUTBOXADK_755960.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXADK_755960?.templateRef;
const tplEdit_VA_TEXTINPUTBOXADK_755960 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXADK_755960');
column_VA_TEXTINPUTBOXADK_755960.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXADK_755960?.templateRef;
}
const column_VA_TEXTINPUTBOXXNW_188960 = this.metaData.viewState["QV_CK98_MLY42"].columns.find((col: any) => col.field == 'debit');
if (column_VA_TEXTINPUTBOXXNW_188960 != undefined) {
const tplCell_VA_TEXTINPUTBOXXNW_188960 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXXNW_188960');
column_VA_TEXTINPUTBOXXNW_188960.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXXNW_188960?.templateRef;
const tplEdit_VA_TEXTINPUTBOXXNW_188960 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXXNW_188960');
column_VA_TEXTINPUTBOXXNW_188960.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXXNW_188960?.templateRef;
}
const column_VA_TEXTINPUTBOXNFU_822960 = this.metaData.viewState["QV_CK98_MLY42"].columns.find((col: any) => col.field == 'debitAll');
if (column_VA_TEXTINPUTBOXNFU_822960 != undefined) {
const tplCell_VA_TEXTINPUTBOXNFU_822960 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXNFU_822960');
column_VA_TEXTINPUTBOXNFU_822960.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXNFU_822960?.templateRef;
const tplEdit_VA_TEXTINPUTBOXNFU_822960 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXNFU_822960');
column_VA_TEXTINPUTBOXNFU_822960.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXNFU_822960?.templateRef;
}
const column_VA_TEXTINPUTBOXMYC_602960 = this.metaData.viewState["QV_CK98_MLY42"].columns.find((col: any) => col.field == 'fee');
if (column_VA_TEXTINPUTBOXMYC_602960 != undefined) {
const tplCell_VA_TEXTINPUTBOXMYC_602960 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXMYC_602960');
column_VA_TEXTINPUTBOXMYC_602960.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXMYC_602960?.templateRef;
const tplEdit_VA_TEXTINPUTBOXMYC_602960 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXMYC_602960');
column_VA_TEXTINPUTBOXMYC_602960.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXMYC_602960?.templateRef;
}
const column_VA_TEXTINPUTBOXQIB_675960 = this.metaData.viewState["QV_CK98_MLY42"].columns.find((col: any) => col.field == 'statusDiscountsName');
if (column_VA_TEXTINPUTBOXQIB_675960 != undefined) {
const tplCell_VA_TEXTINPUTBOXQIB_675960 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXQIB_675960');
column_VA_TEXTINPUTBOXQIB_675960.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXQIB_675960?.templateRef;
const tplEdit_VA_TEXTINPUTBOXQIB_675960 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXQIB_675960');
column_VA_TEXTINPUTBOXQIB_675960.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXQIB_675960?.templateRef;
}
const column_VA_TEXTINPUTBOXEUC_260960 = this.metaData.viewState["QV_CK98_MLY42"].columns.find((col: any) => col.field == 'commentClient');
if (column_VA_TEXTINPUTBOXEUC_260960 != undefined) {
const tplCell_VA_TEXTINPUTBOXEUC_260960 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXEUC_260960');
column_VA_TEXTINPUTBOXEUC_260960.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXEUC_260960?.templateRef;
const tplEdit_VA_TEXTINPUTBOXEUC_260960 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXEUC_260960');
column_VA_TEXTINPUTBOXEUC_260960.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXEUC_260960?.templateRef;
}
const column_VA_TEXTINPUTBOXNIO_870960 = this.metaData.viewState["QV_NO93_ONZ78"].columns.find((col: any) => col.field == 'sequential');
if (column_VA_TEXTINPUTBOXNIO_870960 != undefined) {
const tplCell_VA_TEXTINPUTBOXNIO_870960 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXNIO_870960');
column_VA_TEXTINPUTBOXNIO_870960.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXNIO_870960?.templateRef;
const tplEdit_VA_TEXTINPUTBOXNIO_870960 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXNIO_870960');
column_VA_TEXTINPUTBOXNIO_870960.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXNIO_870960?.templateRef;
}
const column_VA_TEXTINPUTBOXZNW_726960 = this.metaData.viewState["QV_NO93_ONZ78"].columns.find((col: any) => col.field == 'operation');
if (column_VA_TEXTINPUTBOXZNW_726960 != undefined) {
const tplCell_VA_TEXTINPUTBOXZNW_726960 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXZNW_726960');
column_VA_TEXTINPUTBOXZNW_726960.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXZNW_726960?.templateRef;
const tplEdit_VA_TEXTINPUTBOXZNW_726960 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXZNW_726960');
column_VA_TEXTINPUTBOXZNW_726960.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXZNW_726960?.templateRef;
}
const column_VA_DATEFIELDOLVMYK_389960 = this.metaData.viewState["QV_NO93_ONZ78"].columns.find((col: any) => col.field == 'dateExpirationDiscounts');
if (column_VA_DATEFIELDOLVMYK_389960 != undefined) {
const tplCell_VA_DATEFIELDOLVMYK_389960 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DATEFIELDOLVMYK_389960');
column_VA_DATEFIELDOLVMYK_389960.properties.cellTemplate = tplCell_VA_DATEFIELDOLVMYK_389960?.templateRef;
const tplEdit_VA_DATEFIELDOLVMYK_389960 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DATEFIELDOLVMYK_389960');
column_VA_DATEFIELDOLVMYK_389960.properties.editTemplate = tplEdit_VA_DATEFIELDOLVMYK_389960?.templateRef;
}
const column_VA_TEXTINPUTBOXNGZ_627960 = this.metaData.viewState["QV_NO93_ONZ78"].columns.find((col: any) => col.field == 'client');
if (column_VA_TEXTINPUTBOXNGZ_627960 != undefined) {
const tplCell_VA_TEXTINPUTBOXNGZ_627960 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXNGZ_627960');
column_VA_TEXTINPUTBOXNGZ_627960.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXNGZ_627960?.templateRef;
const tplEdit_VA_TEXTINPUTBOXNGZ_627960 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXNGZ_627960');
column_VA_TEXTINPUTBOXNGZ_627960.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXNGZ_627960?.templateRef;
}
const column_VA_TEXTINPUTBOXZOK_896960 = this.metaData.viewState["QV_NO93_ONZ78"].columns.find((col: any) => col.field == 'documentType');
if (column_VA_TEXTINPUTBOXZOK_896960 != undefined) {
const tplCell_VA_TEXTINPUTBOXZOK_896960 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXZOK_896960');
column_VA_TEXTINPUTBOXZOK_896960.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXZOK_896960?.templateRef;
const tplEdit_VA_TEXTINPUTBOXZOK_896960 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXZOK_896960');
column_VA_TEXTINPUTBOXZOK_896960.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXZOK_896960?.templateRef;
}
const column_VA_TEXTINPUTBOXVXM_474960 = this.metaData.viewState["QV_NO93_ONZ78"].columns.find((col: any) => col.field == 'documentValue');
if (column_VA_TEXTINPUTBOXVXM_474960 != undefined) {
const tplCell_VA_TEXTINPUTBOXVXM_474960 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXVXM_474960');
column_VA_TEXTINPUTBOXVXM_474960.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXVXM_474960?.templateRef;
const tplEdit_VA_TEXTINPUTBOXVXM_474960 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXVXM_474960');
column_VA_TEXTINPUTBOXVXM_474960.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXVXM_474960?.templateRef;
}
const column_VA_TEXTINPUTBOXFGM_722960 = this.metaData.viewState["QV_NO93_ONZ78"].columns.find((col: any) => col.field == 'clientName');
if (column_VA_TEXTINPUTBOXFGM_722960 != undefined) {
const tplCell_VA_TEXTINPUTBOXFGM_722960 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXFGM_722960');
column_VA_TEXTINPUTBOXFGM_722960.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXFGM_722960?.templateRef;
const tplEdit_VA_TEXTINPUTBOXFGM_722960 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXFGM_722960');
column_VA_TEXTINPUTBOXFGM_722960.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXFGM_722960?.templateRef;
}
const column_VA_TEXTINPUTBOXYXC_958960 = this.metaData.viewState["QV_NO93_ONZ78"].columns.find((col: any) => col.field == 'debit');
if (column_VA_TEXTINPUTBOXYXC_958960 != undefined) {
const tplCell_VA_TEXTINPUTBOXYXC_958960 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXYXC_958960');
column_VA_TEXTINPUTBOXYXC_958960.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXYXC_958960?.templateRef;
const tplEdit_VA_TEXTINPUTBOXYXC_958960 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXYXC_958960');
column_VA_TEXTINPUTBOXYXC_958960.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXYXC_958960?.templateRef;
}
const column_VA_TEXTINPUTBOXDTM_911960 = this.metaData.viewState["QV_NO93_ONZ78"].columns.find((col: any) => col.field == 'debitAll');
if (column_VA_TEXTINPUTBOXDTM_911960 != undefined) {
const tplCell_VA_TEXTINPUTBOXDTM_911960 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXDTM_911960');
column_VA_TEXTINPUTBOXDTM_911960.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXDTM_911960?.templateRef;
const tplEdit_VA_TEXTINPUTBOXDTM_911960 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXDTM_911960');
column_VA_TEXTINPUTBOXDTM_911960.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXDTM_911960?.templateRef;
}
const column_VA_TEXTINPUTBOXPTU_880960 = this.metaData.viewState["QV_NO93_ONZ78"].columns.find((col: any) => col.field == 'fee');
if (column_VA_TEXTINPUTBOXPTU_880960 != undefined) {
const tplCell_VA_TEXTINPUTBOXPTU_880960 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXPTU_880960');
column_VA_TEXTINPUTBOXPTU_880960.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXPTU_880960?.templateRef;
const tplEdit_VA_TEXTINPUTBOXPTU_880960 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXPTU_880960');
column_VA_TEXTINPUTBOXPTU_880960.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXPTU_880960?.templateRef;
}
const column_VA_TEXTINPUTBOXDFC_313960 = this.metaData.viewState["QV_NO93_ONZ78"].columns.find((col: any) => col.field == 'companyStatusOk');
if (column_VA_TEXTINPUTBOXDFC_313960 != undefined) {
const tplCell_VA_TEXTINPUTBOXDFC_313960 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXDFC_313960');
column_VA_TEXTINPUTBOXDFC_313960.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXDFC_313960?.templateRef;
const tplEdit_VA_TEXTINPUTBOXDFC_313960 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXDFC_313960');
column_VA_TEXTINPUTBOXDFC_313960.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXDFC_313960?.templateRef;
}
const column_VA_TEXTINPUTBOXBTQ_476960 = this.metaData.viewState["QV_NO93_ONZ78"].columns.find((col: any) => col.field == 'companyComments');
if (column_VA_TEXTINPUTBOXBTQ_476960 != undefined) {
const tplCell_VA_TEXTINPUTBOXBTQ_476960 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXBTQ_476960');
column_VA_TEXTINPUTBOXBTQ_476960.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXBTQ_476960?.templateRef;
const tplEdit_VA_TEXTINPUTBOXBTQ_476960 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXBTQ_476960');
column_VA_TEXTINPUTBOXBTQ_476960.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXBTQ_476960?.templateRef;
}
const column_VA_TEXTINPUTBOXLDP_886960 = this.metaData.viewState["QV_NO93_ONZ78"].columns.find((col: any) => col.field == 'errorDesc');
if (column_VA_TEXTINPUTBOXLDP_886960 != undefined) {
const tplCell_VA_TEXTINPUTBOXLDP_886960 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXLDP_886960');
column_VA_TEXTINPUTBOXLDP_886960.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXLDP_886960?.templateRef;
const tplEdit_VA_TEXTINPUTBOXLDP_886960 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXLDP_886960');
column_VA_TEXTINPUTBOXLDP_886960.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXLDP_886960?.templateRef;
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
CompaniesBatch: viewState.T_ASSTSGGBHCCXI_580.controls.CompaniesBatch as FormGroup ,
CompaniesDiscountsList: viewState.T_ASSTSGGBHCCXI_580.controls.CompaniesDiscountsList as FormGroup ,
CompaniesDiscountsFileList: viewState.T_ASSTSGGBHCCXI_580.controls.CompaniesDiscountsFileList as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'TRNSC', taskId: 'T_ASSTSGGBHCCXI_580', taskVersion: '1.0.0', vcId: 'VC_COMPANIECR_302580', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(false, true), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/TRNSC/T_ASSTSGGBHCCXI_580', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_CK98_MLY42', { queryId: 'Q_COMPTOTD_SH98', entityName: 'CompaniesDiscountsList', filter: "", cobisRequestServerConfig: { pageSize :10 }, cache: 0, queryMemberParameters:[ ]}], ['QV_NO93_ONZ78', { queryId: 'Q_COMPLSIN_RZ93', entityName: 'CompaniesDiscountsFileList', filter: "", cobisRequestServerConfig: { pageSize :10 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ [ 'VA_EXECUTEONLINEEE_346960',{ data : [ new CobisModelCatalog ( 'S' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_SIJWWZUQL_76896') ), new CobisModelCatalog ( 'N' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_NOTNCMKBQ_41776') )] }], [ 'VA_TEXTINPUTBOXDFC_313960',{ data : [ new CobisModelCatalog ( 'S' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_SIJWWZUQL_76896') ), new CobisModelCatalog ( 'N' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_NOTNCMKBQ_41776') )] , controlGridInfo: { queryViewId: "QV_NO93_ONZ78", columnId: "companyStatusOk" } }], ]) , label: 'ASSTS.LBL_ASSTS_PROCESATC_84453' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
