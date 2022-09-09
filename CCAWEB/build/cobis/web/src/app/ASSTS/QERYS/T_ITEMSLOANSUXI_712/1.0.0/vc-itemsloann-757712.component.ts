//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-itemsloann-757712.model';
import { ViewState } from './model/vc-itemsloann-757712-view-state';
import { VcItemsloann757712Custom } from './vc-itemsloann-757712.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-itemsloann-757712',
templateUrl: './vc-itemsloann-757712.component.html'
})
export class VcItemsloann757712Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcItemsloann757712Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXWQQ_927129 = this.metaData.viewState["QV_7536_43842"].columns.find((col: any) => col.field == 'description');
if (column_VA_TEXTINPUTBOXWQQ_927129 != undefined) {
const tplCell_VA_TEXTINPUTBOXWQQ_927129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXWQQ_927129');
column_VA_TEXTINPUTBOXWQQ_927129.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXWQQ_927129?.templateRef;
const tplEdit_VA_TEXTINPUTBOXWQQ_927129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXWQQ_927129');
column_VA_TEXTINPUTBOXWQQ_927129.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXWQQ_927129?.templateRef;
}
const column_VA_TEXTINPUTBOXPWL_897129 = this.metaData.viewState["QV_7536_43842"].columns.find((col: any) => col.field == 'concept');
if (column_VA_TEXTINPUTBOXPWL_897129 != undefined) {
const tplCell_VA_TEXTINPUTBOXPWL_897129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXPWL_897129');
column_VA_TEXTINPUTBOXPWL_897129.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXPWL_897129?.templateRef;
const tplEdit_VA_TEXTINPUTBOXPWL_897129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXPWL_897129');
column_VA_TEXTINPUTBOXPWL_897129.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXPWL_897129?.templateRef;
}
const column_VA_TEXTINPUTBOXGZZ_547129 = this.metaData.viewState["QV_7536_43842"].columns.find((col: any) => col.field == 'paymentMethod');
if (column_VA_TEXTINPUTBOXGZZ_547129 != undefined) {
const tplCell_VA_TEXTINPUTBOXGZZ_547129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXGZZ_547129');
column_VA_TEXTINPUTBOXGZZ_547129.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXGZZ_547129?.templateRef;
const tplEdit_VA_TEXTINPUTBOXGZZ_547129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXGZZ_547129');
column_VA_TEXTINPUTBOXGZZ_547129.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXGZZ_547129?.templateRef;
}
const column_VA_TEXTINPUTBOXELD_365129 = this.metaData.viewState["QV_7536_43842"].columns.find((col: any) => col.field == 'itemType');
if (column_VA_TEXTINPUTBOXELD_365129 != undefined) {
const tplCell_VA_TEXTINPUTBOXELD_365129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXELD_365129');
column_VA_TEXTINPUTBOXELD_365129.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXELD_365129?.templateRef;
const tplEdit_VA_TEXTINPUTBOXELD_365129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXELD_365129');
column_VA_TEXTINPUTBOXELD_365129.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXELD_365129?.templateRef;
}
const column_VA_TEXTINPUTBOXUKJ_377129 = this.metaData.viewState["QV_7536_43842"].columns.find((col: any) => col.field == 'priority');
if (column_VA_TEXTINPUTBOXUKJ_377129 != undefined) {
const tplCell_VA_TEXTINPUTBOXUKJ_377129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXUKJ_377129');
column_VA_TEXTINPUTBOXUKJ_377129.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXUKJ_377129?.templateRef;
const tplEdit_VA_TEXTINPUTBOXUKJ_377129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXUKJ_377129');
column_VA_TEXTINPUTBOXUKJ_377129.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXUKJ_377129?.templateRef;
}
const column_VA_TEXTINPUTBOXVJT_905129 = this.metaData.viewState["QV_7536_43842"].columns.find((col: any) => col.field == 'value');
if (column_VA_TEXTINPUTBOXVJT_905129 != undefined) {
const tplCell_VA_TEXTINPUTBOXVJT_905129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXVJT_905129');
column_VA_TEXTINPUTBOXVJT_905129.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXVJT_905129?.templateRef;
const tplEdit_VA_TEXTINPUTBOXVJT_905129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXVJT_905129');
column_VA_TEXTINPUTBOXVJT_905129.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXVJT_905129?.templateRef;
}
const column_VA_TEXTINPUTBOXPWU_574129 = this.metaData.viewState["QV_7536_43842"].columns.find((col: any) => col.field == 'latePayment');
if (column_VA_TEXTINPUTBOXPWU_574129 != undefined) {
const tplCell_VA_TEXTINPUTBOXPWU_574129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXPWU_574129');
column_VA_TEXTINPUTBOXPWU_574129.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXPWU_574129?.templateRef;
const tplEdit_VA_TEXTINPUTBOXPWU_574129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXPWU_574129');
column_VA_TEXTINPUTBOXPWU_574129.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXPWU_574129?.templateRef;
}
const column_VA_TEXTINPUTBOXEHI_505129 = this.metaData.viewState["QV_7536_43842"].columns.find((col: any) => col.field == 'reference');
if (column_VA_TEXTINPUTBOXEHI_505129 != undefined) {
const tplCell_VA_TEXTINPUTBOXEHI_505129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXEHI_505129');
column_VA_TEXTINPUTBOXEHI_505129.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXEHI_505129?.templateRef;
const tplEdit_VA_TEXTINPUTBOXEHI_505129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXEHI_505129');
column_VA_TEXTINPUTBOXEHI_505129.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXEHI_505129?.templateRef;
}
const column_VA_TEXTINPUTBOXUAW_754129 = this.metaData.viewState["QV_7536_43842"].columns.find((col: any) => col.field == 'sign');
if (column_VA_TEXTINPUTBOXUAW_754129 != undefined) {
const tplCell_VA_TEXTINPUTBOXUAW_754129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXUAW_754129');
column_VA_TEXTINPUTBOXUAW_754129.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXUAW_754129?.templateRef;
const tplEdit_VA_TEXTINPUTBOXUAW_754129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXUAW_754129');
column_VA_TEXTINPUTBOXUAW_754129.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXUAW_754129?.templateRef;
}
const column_VA_TEXTINPUTBOXRPV_709129 = this.metaData.viewState["QV_7536_43842"].columns.find((col: any) => col.field == 'cause');
if (column_VA_TEXTINPUTBOXRPV_709129 != undefined) {
const tplCell_VA_TEXTINPUTBOXRPV_709129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXRPV_709129');
column_VA_TEXTINPUTBOXRPV_709129.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXRPV_709129?.templateRef;
const tplEdit_VA_TEXTINPUTBOXRPV_709129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXRPV_709129');
column_VA_TEXTINPUTBOXRPV_709129.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXRPV_709129?.templateRef;
}
const column_VA_TEXTINPUTBOXXZQ_673129 = this.metaData.viewState["QV_7536_43842"].columns.find((col: any) => col.field == 'pointsValue');
if (column_VA_TEXTINPUTBOXXZQ_673129 != undefined) {
const tplCell_VA_TEXTINPUTBOXXZQ_673129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXXZQ_673129');
column_VA_TEXTINPUTBOXXZQ_673129.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXXZQ_673129?.templateRef;
const tplEdit_VA_TEXTINPUTBOXXZQ_673129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXXZQ_673129');
column_VA_TEXTINPUTBOXXZQ_673129.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXXZQ_673129?.templateRef;
}
const column_VA_TEXTINPUTBOXZDB_612129 = this.metaData.viewState["QV_7536_43842"].columns.find((col: any) => col.field == 'pointsType');
if (column_VA_TEXTINPUTBOXZDB_612129 != undefined) {
const tplCell_VA_TEXTINPUTBOXZDB_612129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXZDB_612129');
column_VA_TEXTINPUTBOXZDB_612129.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXZDB_612129?.templateRef;
const tplEdit_VA_TEXTINPUTBOXZDB_612129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXZDB_612129');
column_VA_TEXTINPUTBOXZDB_612129.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXZDB_612129?.templateRef;
}
const column_VA_TEXTINPUTBOXBHL_158129 = this.metaData.viewState["QV_7536_43842"].columns.find((col: any) => col.field == 'valueTotalRate');
if (column_VA_TEXTINPUTBOXBHL_158129 != undefined) {
const tplCell_VA_TEXTINPUTBOXBHL_158129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXBHL_158129');
column_VA_TEXTINPUTBOXBHL_158129.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXBHL_158129?.templateRef;
const tplEdit_VA_TEXTINPUTBOXBHL_158129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXBHL_158129');
column_VA_TEXTINPUTBOXBHL_158129.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXBHL_158129?.templateRef;
}
const column_VA_TEXTINPUTBOXGKJ_582129 = this.metaData.viewState["QV_7536_43842"].columns.find((col: any) => col.field == 'negotiatedRate');
if (column_VA_TEXTINPUTBOXGKJ_582129 != undefined) {
const tplCell_VA_TEXTINPUTBOXGKJ_582129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXGKJ_582129');
column_VA_TEXTINPUTBOXGKJ_582129.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXGKJ_582129?.templateRef;
const tplEdit_VA_TEXTINPUTBOXGKJ_582129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXGKJ_582129');
column_VA_TEXTINPUTBOXGKJ_582129.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXGKJ_582129?.templateRef;
}
const column_VA_TEXTINPUTBOXILF_690129 = this.metaData.viewState["QV_7536_43842"].columns.find((col: any) => col.field == 'annualEfecRate');
if (column_VA_TEXTINPUTBOXILF_690129 != undefined) {
const tplCell_VA_TEXTINPUTBOXILF_690129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXILF_690129');
column_VA_TEXTINPUTBOXILF_690129.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXILF_690129?.templateRef;
const tplEdit_VA_TEXTINPUTBOXILF_690129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXILF_690129');
column_VA_TEXTINPUTBOXILF_690129.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXILF_690129?.templateRef;
}
const column_VA_TEXTINPUTBOXAOL_704129 = this.metaData.viewState["QV_7536_43842"].columns.find((col: any) => col.field == 'reajustmenSign');
if (column_VA_TEXTINPUTBOXAOL_704129 != undefined) {
const tplCell_VA_TEXTINPUTBOXAOL_704129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXAOL_704129');
column_VA_TEXTINPUTBOXAOL_704129.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXAOL_704129?.templateRef;
const tplEdit_VA_TEXTINPUTBOXAOL_704129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXAOL_704129');
column_VA_TEXTINPUTBOXAOL_704129.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXAOL_704129?.templateRef;
}
const column_VA_TEXTINPUTBOXLYN_413129 = this.metaData.viewState["QV_7536_43842"].columns.find((col: any) => col.field == 'reajustmentValuePoints');
if (column_VA_TEXTINPUTBOXLYN_413129 != undefined) {
const tplCell_VA_TEXTINPUTBOXLYN_413129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXLYN_413129');
column_VA_TEXTINPUTBOXLYN_413129.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXLYN_413129?.templateRef;
const tplEdit_VA_TEXTINPUTBOXLYN_413129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXLYN_413129');
column_VA_TEXTINPUTBOXLYN_413129.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXLYN_413129?.templateRef;
}
const column_VA_TEXTINPUTBOXIGC_163129 = this.metaData.viewState["QV_7536_43842"].columns.find((col: any) => col.field == 'reajustmentReference');
if (column_VA_TEXTINPUTBOXIGC_163129 != undefined) {
const tplCell_VA_TEXTINPUTBOXIGC_163129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXIGC_163129');
column_VA_TEXTINPUTBOXIGC_163129.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXIGC_163129?.templateRef;
const tplEdit_VA_TEXTINPUTBOXIGC_163129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXIGC_163129');
column_VA_TEXTINPUTBOXIGC_163129.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXIGC_163129?.templateRef;
}
const column_VA_TEXTINPUTBOXIBA_173129 = this.metaData.viewState["QV_7536_43842"].columns.find((col: any) => col.field == 'gain');
if (column_VA_TEXTINPUTBOXIBA_173129 != undefined) {
const tplCell_VA_TEXTINPUTBOXIBA_173129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXIBA_173129');
column_VA_TEXTINPUTBOXIBA_173129.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXIBA_173129?.templateRef;
const tplEdit_VA_TEXTINPUTBOXIBA_173129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXIBA_173129');
column_VA_TEXTINPUTBOXIBA_173129.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXIBA_173129?.templateRef;
}
const column_VA_TEXTINPUTBOXPTQ_834129 = this.metaData.viewState["QV_7536_43842"].columns.find((col: any) => col.field == 'baseCalculation');
if (column_VA_TEXTINPUTBOXPTQ_834129 != undefined) {
const tplCell_VA_TEXTINPUTBOXPTQ_834129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXPTQ_834129');
column_VA_TEXTINPUTBOXPTQ_834129.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXPTQ_834129?.templateRef;
const tplEdit_VA_TEXTINPUTBOXPTQ_834129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXPTQ_834129');
column_VA_TEXTINPUTBOXPTQ_834129.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXPTQ_834129?.templateRef;
}
const column_VA_TEXTINPUTBOXNUQ_510129 = this.metaData.viewState["QV_7536_43842"].columns.find((col: any) => col.field == 'chargeForRinging');
if (column_VA_TEXTINPUTBOXNUQ_510129 != undefined) {
const tplCell_VA_TEXTINPUTBOXNUQ_510129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXNUQ_510129');
column_VA_TEXTINPUTBOXNUQ_510129.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXNUQ_510129?.templateRef;
const tplEdit_VA_TEXTINPUTBOXNUQ_510129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXNUQ_510129');
column_VA_TEXTINPUTBOXNUQ_510129.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXNUQ_510129?.templateRef;
}
const column_VA_TEXTINPUTBOXYID_261129 = this.metaData.viewState["QV_7536_43842"].columns.find((col: any) => col.field == 'warrantyType');
if (column_VA_TEXTINPUTBOXYID_261129 != undefined) {
const tplCell_VA_TEXTINPUTBOXYID_261129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXYID_261129');
column_VA_TEXTINPUTBOXYID_261129.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXYID_261129?.templateRef;
const tplEdit_VA_TEXTINPUTBOXYID_261129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXYID_261129');
column_VA_TEXTINPUTBOXYID_261129.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXYID_261129?.templateRef;
}
const column_VA_TEXTINPUTBOXBRS_263129 = this.metaData.viewState["QV_7536_43842"].columns.find((col: any) => col.field == 'warrantyNumber');
if (column_VA_TEXTINPUTBOXBRS_263129 != undefined) {
const tplCell_VA_TEXTINPUTBOXBRS_263129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXBRS_263129');
column_VA_TEXTINPUTBOXBRS_263129.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXBRS_263129?.templateRef;
const tplEdit_VA_TEXTINPUTBOXBRS_263129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXBRS_263129');
column_VA_TEXTINPUTBOXBRS_263129.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXBRS_263129?.templateRef;
}
const column_VA_TEXTINPUTBOXTRE_710129 = this.metaData.viewState["QV_7536_43842"].columns.find((col: any) => col.field == 'coveragePercentage');
if (column_VA_TEXTINPUTBOXTRE_710129 != undefined) {
const tplCell_VA_TEXTINPUTBOXTRE_710129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXTRE_710129');
column_VA_TEXTINPUTBOXTRE_710129.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXTRE_710129?.templateRef;
const tplEdit_VA_TEXTINPUTBOXTRE_710129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXTRE_710129');
column_VA_TEXTINPUTBOXTRE_710129.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXTRE_710129?.templateRef;
}
const column_VA_TEXTINPUTBOXTXW_242129 = this.metaData.viewState["QV_7536_43842"].columns.find((col: any) => col.field == 'warrantyValue');
if (column_VA_TEXTINPUTBOXTXW_242129 != undefined) {
const tplCell_VA_TEXTINPUTBOXTXW_242129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXTXW_242129');
column_VA_TEXTINPUTBOXTXW_242129.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXTXW_242129?.templateRef;
const tplEdit_VA_TEXTINPUTBOXTXW_242129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXTXW_242129');
column_VA_TEXTINPUTBOXTXW_242129.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXTXW_242129?.templateRef;
}
const column_VA_TEXTINPUTBOXJJD_513129 = this.metaData.viewState["QV_7536_43842"].columns.find((col: any) => col.field == 'dividendType');
if (column_VA_TEXTINPUTBOXJJD_513129 != undefined) {
const tplCell_VA_TEXTINPUTBOXJJD_513129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXJJD_513129');
column_VA_TEXTINPUTBOXJJD_513129.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXJJD_513129?.templateRef;
const tplEdit_VA_TEXTINPUTBOXJJD_513129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXJJD_513129');
column_VA_TEXTINPUTBOXJJD_513129.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXJJD_513129?.templateRef;
}
const column_VA_TEXTINPUTBOXBFF_919129 = this.metaData.viewState["QV_7536_43842"].columns.find((col: any) => col.field == 'interestPeriod');
if (column_VA_TEXTINPUTBOXBFF_919129 != undefined) {
const tplCell_VA_TEXTINPUTBOXBFF_919129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXBFF_919129');
column_VA_TEXTINPUTBOXBFF_919129.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXBFF_919129?.templateRef;
const tplEdit_VA_TEXTINPUTBOXBFF_919129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXBFF_919129');
column_VA_TEXTINPUTBOXBFF_919129.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXBFF_919129?.templateRef;
}
const column_VA_TEXTINPUTBOXOBK_430129 = this.metaData.viewState["QV_7536_43842"].columns.find((col: any) => col.field == 'tableOtherRate');
if (column_VA_TEXTINPUTBOXOBK_430129 != undefined) {
const tplCell_VA_TEXTINPUTBOXOBK_430129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXOBK_430129');
column_VA_TEXTINPUTBOXOBK_430129.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXOBK_430129?.templateRef;
const tplEdit_VA_TEXTINPUTBOXOBK_430129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXOBK_430129');
column_VA_TEXTINPUTBOXOBK_430129.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXOBK_430129?.templateRef;
}
const column_VA_COMBOBOXHRNMMDE_659129 = this.metaData.viewState["QV_7536_43842"].columns.find((col: any) => col.field == 'financed');
if (column_VA_COMBOBOXHRNMMDE_659129 != undefined) {
const tplCell_VA_COMBOBOXHRNMMDE_659129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_COMBOBOXHRNMMDE_659129');
column_VA_COMBOBOXHRNMMDE_659129.properties.cellTemplate = tplCell_VA_COMBOBOXHRNMMDE_659129?.templateRef;
const tplEdit_VA_COMBOBOXHRNMMDE_659129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_COMBOBOXHRNMMDE_659129');
column_VA_COMBOBOXHRNMMDE_659129.properties.editTemplate = tplEdit_VA_COMBOBOXHRNMMDE_659129?.templateRef;
}
const column_VA_TEXTINPUTBOXZVO_565129 = this.metaData.viewState["QV_7536_43842"].columns.find((col: any) => col.field == 'minRate');
if (column_VA_TEXTINPUTBOXZVO_565129 != undefined) {
const tplCell_VA_TEXTINPUTBOXZVO_565129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXZVO_565129');
column_VA_TEXTINPUTBOXZVO_565129.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXZVO_565129?.templateRef;
const tplEdit_VA_TEXTINPUTBOXZVO_565129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXZVO_565129');
column_VA_TEXTINPUTBOXZVO_565129.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXZVO_565129?.templateRef;
}
const column_VA_TEXTINPUTBOXYXS_454129 = this.metaData.viewState["QV_7536_43842"].columns.find((col: any) => col.field == 'maxRate');
if (column_VA_TEXTINPUTBOXYXS_454129 != undefined) {
const tplCell_VA_TEXTINPUTBOXYXS_454129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXYXS_454129');
column_VA_TEXTINPUTBOXYXS_454129.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXYXS_454129?.templateRef;
const tplEdit_VA_TEXTINPUTBOXYXS_454129 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXYXS_454129');
column_VA_TEXTINPUTBOXYXS_454129.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXYXS_454129?.templateRef;
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
LoanEntry: viewState.T_ITEMSLOANSUXI_712.controls.LoanEntry as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'QERYS', taskId: 'T_ITEMSLOANSUXI_712', taskVersion: '1.0.0', vcId: 'VC_ITEMSLOANN_757712', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(false, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/QERYS/T_ITEMSLOANSUXI_712', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_7536_43842', { queryId: 'Q_OPERATNY_7536', entityName: 'LoanEntry', filter: "", cobisRequestServerConfig: { pageSize :10 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ [ 'VA_COMBOBOXHRNMMDE_659129',{ data : [ new CobisModelCatalog ( 'S' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_SIJWWZUQL_76896') ), new CobisModelCatalog ( 'N' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_NOTNCMKBQ_41776') )] , controlGridInfo: { queryViewId: "QV_7536_43842", columnId: "financed" } }], ]) , label: 'QueryItemsLoanForm' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
