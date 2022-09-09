//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-operatiopa-648633.model';
import { ViewState } from './model/vc-operatiopa-648633-view-state';
import { VcOperatiopa648633Custom } from './vc-operatiopa-648633.custom';
import { LNSPRService} from 'src/app/LNSPR/service-modules/LNSPR.service';
@Component({
selector: 'cobis-vc-operatiopa-648633',
templateUrl: './vc-operatiopa-648633.component.html'
})
export class VcOperatiopa648633Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private lnspr: LNSPRService) {
super(new VcOperatiopa648633Custom(designer.cobisCommons,lnspr), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_DIVIDENDJQEBXYL_179198 = this.metaData.viewState["QV_ECPR_JAA30"].columns.find((col: any) => col.field == 'dividend');
if (column_VA_DIVIDENDJQEBXYL_179198 != undefined) {
const tplCell_VA_DIVIDENDJQEBXYL_179198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DIVIDENDJQEBXYL_179198');
column_VA_DIVIDENDJQEBXYL_179198.properties.cellTemplate = tplCell_VA_DIVIDENDJQEBXYL_179198?.templateRef;
const tplEdit_VA_DIVIDENDJQEBXYL_179198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DIVIDENDJQEBXYL_179198');
column_VA_DIVIDENDJQEBXYL_179198.properties.editTemplate = tplEdit_VA_DIVIDENDJQEBXYL_179198?.templateRef;
}
const column_VA_EXPIRATIONDATTE_941198 = this.metaData.viewState["QV_ECPR_JAA30"].columns.find((col: any) => col.field == 'expirationDate');
if (column_VA_EXPIRATIONDATTE_941198 != undefined) {
const tplCell_VA_EXPIRATIONDATTE_941198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_EXPIRATIONDATTE_941198');
column_VA_EXPIRATIONDATTE_941198.properties.cellTemplate = tplCell_VA_EXPIRATIONDATTE_941198?.templateRef;
const tplEdit_VA_EXPIRATIONDATTE_941198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_EXPIRATIONDATTE_941198');
column_VA_EXPIRATIONDATTE_941198.properties.editTemplate = tplEdit_VA_EXPIRATIONDATTE_941198?.templateRef;
}
const column_VA_BALANCECAPITLLL_258198 = this.metaData.viewState["QV_ECPR_JAA30"].columns.find((col: any) => col.field == 'balanceCapital');
if (column_VA_BALANCECAPITLLL_258198 != undefined) {
const tplCell_VA_BALANCECAPITLLL_258198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_BALANCECAPITLLL_258198');
column_VA_BALANCECAPITLLL_258198.properties.cellTemplate = tplCell_VA_BALANCECAPITLLL_258198?.templateRef;
const tplEdit_VA_BALANCECAPITLLL_258198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_BALANCECAPITLLL_258198');
column_VA_BALANCECAPITLLL_258198.properties.editTemplate = tplEdit_VA_BALANCECAPITLLL_258198?.templateRef;
}
const column_VA_DYNAMICFIELD111_201198 = this.metaData.viewState["QV_ECPR_JAA30"].columns.find((col: any) => col.field == 'dynamicField1');
if (column_VA_DYNAMICFIELD111_201198 != undefined) {
const tplCell_VA_DYNAMICFIELD111_201198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DYNAMICFIELD111_201198');
column_VA_DYNAMICFIELD111_201198.properties.cellTemplate = tplCell_VA_DYNAMICFIELD111_201198?.templateRef;
const tplEdit_VA_DYNAMICFIELD111_201198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DYNAMICFIELD111_201198');
column_VA_DYNAMICFIELD111_201198.properties.editTemplate = tplEdit_VA_DYNAMICFIELD111_201198?.templateRef;
}
const column_VA_DYNAMICFIELD222_976198 = this.metaData.viewState["QV_ECPR_JAA30"].columns.find((col: any) => col.field == 'dynamicField2');
if (column_VA_DYNAMICFIELD222_976198 != undefined) {
const tplCell_VA_DYNAMICFIELD222_976198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DYNAMICFIELD222_976198');
column_VA_DYNAMICFIELD222_976198.properties.cellTemplate = tplCell_VA_DYNAMICFIELD222_976198?.templateRef;
const tplEdit_VA_DYNAMICFIELD222_976198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DYNAMICFIELD222_976198');
column_VA_DYNAMICFIELD222_976198.properties.editTemplate = tplEdit_VA_DYNAMICFIELD222_976198?.templateRef;
}
const column_VA_DYNAMICFIELD333_680198 = this.metaData.viewState["QV_ECPR_JAA30"].columns.find((col: any) => col.field == 'dynamicField3');
if (column_VA_DYNAMICFIELD333_680198 != undefined) {
const tplCell_VA_DYNAMICFIELD333_680198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DYNAMICFIELD333_680198');
column_VA_DYNAMICFIELD333_680198.properties.cellTemplate = tplCell_VA_DYNAMICFIELD333_680198?.templateRef;
const tplEdit_VA_DYNAMICFIELD333_680198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DYNAMICFIELD333_680198');
column_VA_DYNAMICFIELD333_680198.properties.editTemplate = tplEdit_VA_DYNAMICFIELD333_680198?.templateRef;
}
const column_VA_DYNAMICFIELD444_619198 = this.metaData.viewState["QV_ECPR_JAA30"].columns.find((col: any) => col.field == 'dynamicField4');
if (column_VA_DYNAMICFIELD444_619198 != undefined) {
const tplCell_VA_DYNAMICFIELD444_619198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DYNAMICFIELD444_619198');
column_VA_DYNAMICFIELD444_619198.properties.cellTemplate = tplCell_VA_DYNAMICFIELD444_619198?.templateRef;
const tplEdit_VA_DYNAMICFIELD444_619198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DYNAMICFIELD444_619198');
column_VA_DYNAMICFIELD444_619198.properties.editTemplate = tplEdit_VA_DYNAMICFIELD444_619198?.templateRef;
}
const column_VA_DYNAMICFIELD555_803198 = this.metaData.viewState["QV_ECPR_JAA30"].columns.find((col: any) => col.field == 'dynamicField5');
if (column_VA_DYNAMICFIELD555_803198 != undefined) {
const tplCell_VA_DYNAMICFIELD555_803198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DYNAMICFIELD555_803198');
column_VA_DYNAMICFIELD555_803198.properties.cellTemplate = tplCell_VA_DYNAMICFIELD555_803198?.templateRef;
const tplEdit_VA_DYNAMICFIELD555_803198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DYNAMICFIELD555_803198');
column_VA_DYNAMICFIELD555_803198.properties.editTemplate = tplEdit_VA_DYNAMICFIELD555_803198?.templateRef;
}
const column_VA_DYNAMICFIELD666_861198 = this.metaData.viewState["QV_ECPR_JAA30"].columns.find((col: any) => col.field == 'dynamicField6');
if (column_VA_DYNAMICFIELD666_861198 != undefined) {
const tplCell_VA_DYNAMICFIELD666_861198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DYNAMICFIELD666_861198');
column_VA_DYNAMICFIELD666_861198.properties.cellTemplate = tplCell_VA_DYNAMICFIELD666_861198?.templateRef;
const tplEdit_VA_DYNAMICFIELD666_861198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DYNAMICFIELD666_861198');
column_VA_DYNAMICFIELD666_861198.properties.editTemplate = tplEdit_VA_DYNAMICFIELD666_861198?.templateRef;
}
const column_VA_DYNAMICFIELD777_256198 = this.metaData.viewState["QV_ECPR_JAA30"].columns.find((col: any) => col.field == 'dynamicField7');
if (column_VA_DYNAMICFIELD777_256198 != undefined) {
const tplCell_VA_DYNAMICFIELD777_256198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DYNAMICFIELD777_256198');
column_VA_DYNAMICFIELD777_256198.properties.cellTemplate = tplCell_VA_DYNAMICFIELD777_256198?.templateRef;
const tplEdit_VA_DYNAMICFIELD777_256198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DYNAMICFIELD777_256198');
column_VA_DYNAMICFIELD777_256198.properties.editTemplate = tplEdit_VA_DYNAMICFIELD777_256198?.templateRef;
}
const column_VA_DYNAMICFIELD888_910198 = this.metaData.viewState["QV_ECPR_JAA30"].columns.find((col: any) => col.field == 'dynamicField8');
if (column_VA_DYNAMICFIELD888_910198 != undefined) {
const tplCell_VA_DYNAMICFIELD888_910198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DYNAMICFIELD888_910198');
column_VA_DYNAMICFIELD888_910198.properties.cellTemplate = tplCell_VA_DYNAMICFIELD888_910198?.templateRef;
const tplEdit_VA_DYNAMICFIELD888_910198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DYNAMICFIELD888_910198');
column_VA_DYNAMICFIELD888_910198.properties.editTemplate = tplEdit_VA_DYNAMICFIELD888_910198?.templateRef;
}
const column_VA_DYNAMICFIELD999_904198 = this.metaData.viewState["QV_ECPR_JAA30"].columns.find((col: any) => col.field == 'dynamicField9');
if (column_VA_DYNAMICFIELD999_904198 != undefined) {
const tplCell_VA_DYNAMICFIELD999_904198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DYNAMICFIELD999_904198');
column_VA_DYNAMICFIELD999_904198.properties.cellTemplate = tplCell_VA_DYNAMICFIELD999_904198?.templateRef;
const tplEdit_VA_DYNAMICFIELD999_904198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DYNAMICFIELD999_904198');
column_VA_DYNAMICFIELD999_904198.properties.editTemplate = tplEdit_VA_DYNAMICFIELD999_904198?.templateRef;
}
const column_VA_DYNAMICFIELD011_387198 = this.metaData.viewState["QV_ECPR_JAA30"].columns.find((col: any) => col.field == 'dynamicField10');
if (column_VA_DYNAMICFIELD011_387198 != undefined) {
const tplCell_VA_DYNAMICFIELD011_387198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DYNAMICFIELD011_387198');
column_VA_DYNAMICFIELD011_387198.properties.cellTemplate = tplCell_VA_DYNAMICFIELD011_387198?.templateRef;
const tplEdit_VA_DYNAMICFIELD011_387198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DYNAMICFIELD011_387198');
column_VA_DYNAMICFIELD011_387198.properties.editTemplate = tplEdit_VA_DYNAMICFIELD011_387198?.templateRef;
}
const column_VA_DYNAMICFIELD111_909198 = this.metaData.viewState["QV_ECPR_JAA30"].columns.find((col: any) => col.field == 'dynamicField11');
if (column_VA_DYNAMICFIELD111_909198 != undefined) {
const tplCell_VA_DYNAMICFIELD111_909198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DYNAMICFIELD111_909198');
column_VA_DYNAMICFIELD111_909198.properties.cellTemplate = tplCell_VA_DYNAMICFIELD111_909198?.templateRef;
const tplEdit_VA_DYNAMICFIELD111_909198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DYNAMICFIELD111_909198');
column_VA_DYNAMICFIELD111_909198.properties.editTemplate = tplEdit_VA_DYNAMICFIELD111_909198?.templateRef;
}
const column_VA_DYNAMICFIELD121_508198 = this.metaData.viewState["QV_ECPR_JAA30"].columns.find((col: any) => col.field == 'dynamicField12');
if (column_VA_DYNAMICFIELD121_508198 != undefined) {
const tplCell_VA_DYNAMICFIELD121_508198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DYNAMICFIELD121_508198');
column_VA_DYNAMICFIELD121_508198.properties.cellTemplate = tplCell_VA_DYNAMICFIELD121_508198?.templateRef;
const tplEdit_VA_DYNAMICFIELD121_508198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DYNAMICFIELD121_508198');
column_VA_DYNAMICFIELD121_508198.properties.editTemplate = tplEdit_VA_DYNAMICFIELD121_508198?.templateRef;
}
const column_VA_DYNAMICFIELD311_753198 = this.metaData.viewState["QV_ECPR_JAA30"].columns.find((col: any) => col.field == 'dynamicField13');
if (column_VA_DYNAMICFIELD311_753198 != undefined) {
const tplCell_VA_DYNAMICFIELD311_753198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DYNAMICFIELD311_753198');
column_VA_DYNAMICFIELD311_753198.properties.cellTemplate = tplCell_VA_DYNAMICFIELD311_753198?.templateRef;
const tplEdit_VA_DYNAMICFIELD311_753198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DYNAMICFIELD311_753198');
column_VA_DYNAMICFIELD311_753198.properties.editTemplate = tplEdit_VA_DYNAMICFIELD311_753198?.templateRef;
}
const column_VA_DYNAMICFIELD411_866198 = this.metaData.viewState["QV_ECPR_JAA30"].columns.find((col: any) => col.field == 'dynamicField14');
if (column_VA_DYNAMICFIELD411_866198 != undefined) {
const tplCell_VA_DYNAMICFIELD411_866198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DYNAMICFIELD411_866198');
column_VA_DYNAMICFIELD411_866198.properties.cellTemplate = tplCell_VA_DYNAMICFIELD411_866198?.templateRef;
const tplEdit_VA_DYNAMICFIELD411_866198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DYNAMICFIELD411_866198');
column_VA_DYNAMICFIELD411_866198.properties.editTemplate = tplEdit_VA_DYNAMICFIELD411_866198?.templateRef;
}
const column_VA_DYNAMICFIELD551_120198 = this.metaData.viewState["QV_ECPR_JAA30"].columns.find((col: any) => col.field == 'dynamicField15');
if (column_VA_DYNAMICFIELD551_120198 != undefined) {
const tplCell_VA_DYNAMICFIELD551_120198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DYNAMICFIELD551_120198');
column_VA_DYNAMICFIELD551_120198.properties.cellTemplate = tplCell_VA_DYNAMICFIELD551_120198?.templateRef;
const tplEdit_VA_DYNAMICFIELD551_120198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DYNAMICFIELD551_120198');
column_VA_DYNAMICFIELD551_120198.properties.editTemplate = tplEdit_VA_DYNAMICFIELD551_120198?.templateRef;
}
const column_VA_DYNAMICFIELD111_346198 = this.metaData.viewState["QV_ECPR_JAA30"].columns.find((col: any) => col.field == 'dynamicField16');
if (column_VA_DYNAMICFIELD111_346198 != undefined) {
const tplCell_VA_DYNAMICFIELD111_346198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DYNAMICFIELD111_346198');
column_VA_DYNAMICFIELD111_346198.properties.cellTemplate = tplCell_VA_DYNAMICFIELD111_346198?.templateRef;
const tplEdit_VA_DYNAMICFIELD111_346198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DYNAMICFIELD111_346198');
column_VA_DYNAMICFIELD111_346198.properties.editTemplate = tplEdit_VA_DYNAMICFIELD111_346198?.templateRef;
}
const column_VA_DYNAMICFIELD777_257198 = this.metaData.viewState["QV_ECPR_JAA30"].columns.find((col: any) => col.field == 'dynamicField17');
if (column_VA_DYNAMICFIELD777_257198 != undefined) {
const tplCell_VA_DYNAMICFIELD777_257198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DYNAMICFIELD777_257198');
column_VA_DYNAMICFIELD777_257198.properties.cellTemplate = tplCell_VA_DYNAMICFIELD777_257198?.templateRef;
const tplEdit_VA_DYNAMICFIELD777_257198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DYNAMICFIELD777_257198');
column_VA_DYNAMICFIELD777_257198.properties.editTemplate = tplEdit_VA_DYNAMICFIELD777_257198?.templateRef;
}
const column_VA_DYNAMICFIELD181_740198 = this.metaData.viewState["QV_ECPR_JAA30"].columns.find((col: any) => col.field == 'dynamicField18');
if (column_VA_DYNAMICFIELD181_740198 != undefined) {
const tplCell_VA_DYNAMICFIELD181_740198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DYNAMICFIELD181_740198');
column_VA_DYNAMICFIELD181_740198.properties.cellTemplate = tplCell_VA_DYNAMICFIELD181_740198?.templateRef;
const tplEdit_VA_DYNAMICFIELD181_740198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DYNAMICFIELD181_740198');
column_VA_DYNAMICFIELD181_740198.properties.editTemplate = tplEdit_VA_DYNAMICFIELD181_740198?.templateRef;
}
const column_VA_DYNAMICFIELD911_217198 = this.metaData.viewState["QV_ECPR_JAA30"].columns.find((col: any) => col.field == 'dynamicField19');
if (column_VA_DYNAMICFIELD911_217198 != undefined) {
const tplCell_VA_DYNAMICFIELD911_217198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DYNAMICFIELD911_217198');
column_VA_DYNAMICFIELD911_217198.properties.cellTemplate = tplCell_VA_DYNAMICFIELD911_217198?.templateRef;
const tplEdit_VA_DYNAMICFIELD911_217198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DYNAMICFIELD911_217198');
column_VA_DYNAMICFIELD911_217198.properties.editTemplate = tplEdit_VA_DYNAMICFIELD911_217198?.templateRef;
}
const column_VA_DYNAMICFIELD000_944198 = this.metaData.viewState["QV_ECPR_JAA30"].columns.find((col: any) => col.field == 'dynamicField20');
if (column_VA_DYNAMICFIELD000_944198 != undefined) {
const tplCell_VA_DYNAMICFIELD000_944198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DYNAMICFIELD000_944198');
column_VA_DYNAMICFIELD000_944198.properties.cellTemplate = tplCell_VA_DYNAMICFIELD000_944198?.templateRef;
const tplEdit_VA_DYNAMICFIELD000_944198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DYNAMICFIELD000_944198');
column_VA_DYNAMICFIELD000_944198.properties.editTemplate = tplEdit_VA_DYNAMICFIELD000_944198?.templateRef;
}
const column_VA_FEEOLAUUHKGPDCB_657198 = this.metaData.viewState["QV_ECPR_JAA30"].columns.find((col: any) => col.field == 'fee');
if (column_VA_FEEOLAUUHKGPDCB_657198 != undefined) {
const tplCell_VA_FEEOLAUUHKGPDCB_657198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_FEEOLAUUHKGPDCB_657198');
column_VA_FEEOLAUUHKGPDCB_657198.properties.cellTemplate = tplCell_VA_FEEOLAUUHKGPDCB_657198?.templateRef;
const tplEdit_VA_FEEOLAUUHKGPDCB_657198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_FEEOLAUUHKGPDCB_657198');
column_VA_FEEOLAUUHKGPDCB_657198.properties.editTemplate = tplEdit_VA_FEEOLAUUHKGPDCB_657198?.templateRef;
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
AmortizationFormEntity: viewState.T_LNSPRGNPCEXYE_633.controls.AmortizationFormEntity as FormGroup ,
AmortizationEntity: viewState.T_LNSPRGNPCEXYE_633.controls.AmortizationEntity as FormGroup
};
this.metaData = { moduleId: 'LNSPR', subModuleId: 'OPRTN', taskId: 'T_LNSPRGNPCEXYE_633', taskVersion: '1.0.0', vcId: 'VC_OPERATIOPA_648633', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/LNSPR/OPRTN/T_LNSPRGNPCEXYE_633', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ['VA_TYPEAMORTIZATTN_681198', { filter:"", cobisRequestServerConfig: null, cache: 0 }], ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ['VA_TERMTYPEOWIDGEH_595198', { catalogName: 'ca_tdividendo', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_TYPEFEEARBRJCKA_414198', { catalogName: 'ca_tdividendo', filter: "", cobisRequestServerConfig: null, cache: 0 }], ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_ECPR_JAA30', { queryId: 'Q_AMORTITI_LNSPR', entityName: 'AmortizationEntity', filter: "", cobisRequestServerConfig: { pageSize :13 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ [ 'VA_PAYMENTDAYEFRJN_549198',{ data : [ new CobisModelCatalog ( '1' , '1' ), new CobisModelCatalog ( '2' , '2' ), new CobisModelCatalog ( '3' , '3' ), new CobisModelCatalog ( '4' , '4' ), new CobisModelCatalog ( '5' , '5' ), new CobisModelCatalog ( '6' , '6' ), new CobisModelCatalog ( '7' , '7' ), new CobisModelCatalog ( '8' , '8' ), new CobisModelCatalog ( '9' , '9' ), new CobisModelCatalog ( '10' , '10' ), new CobisModelCatalog ( '11' , '11' ), new CobisModelCatalog ( '12' , '12' ), new CobisModelCatalog ( '13' , '13' ), new CobisModelCatalog ( '14' , '14' ), new CobisModelCatalog ( '15' , '15' ), new CobisModelCatalog ( '16' , '16' ), new CobisModelCatalog ( '17' , '17' ), new CobisModelCatalog ( '18' , '18' ), new CobisModelCatalog ( '19' , '19' ), new CobisModelCatalog ( '20' , '20' ), new CobisModelCatalog ( '21' , '21' ), new CobisModelCatalog ( '22' , '22' ), new CobisModelCatalog ( '23' , '23' ), new CobisModelCatalog ( '24' , '24' ), new CobisModelCatalog ( '25' , '25' ), new CobisModelCatalog ( '26' , '26' ), new CobisModelCatalog ( '27' , '27' ), new CobisModelCatalog ( '28' , '28' ), new CobisModelCatalog ( '29' , '29' ), new CobisModelCatalog ( '30' , '30' ), new CobisModelCatalog ( '31' , '31' )] }], [ 'VA_MONTHGRACEFIJFA_429198',{ data : [ new CobisModelCatalog ( '0' , '0' ), new CobisModelCatalog ( '1' , '1' ), new CobisModelCatalog ( '2' , '2' ), new CobisModelCatalog ( '3' , '3' ), new CobisModelCatalog ( '4' , '4' ), new CobisModelCatalog ( '5' , '5' ), new CobisModelCatalog ( '6' , '6' ), new CobisModelCatalog ( '7' , '7' ), new CobisModelCatalog ( '8' , '8' ), new CobisModelCatalog ( '9' , '9' ), new CobisModelCatalog ( '10' , '10' ), new CobisModelCatalog ( '11' , '11' ), new CobisModelCatalog ( '12' , '12' )] }], [ 'VA_BASEINTERESTAAC_534198',{ data : [ new CobisModelCatalog ( 'E' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_COMERCIAA_32939') ), new CobisModelCatalog ( 'R' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_REALFZFVS_38401') )] }], [ 'VA_TYPEAMORTIZATTN_681198',{ data : [ new CobisModelCatalog ( 'ALEMANA' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_ALEMANAEM_98576') ), new CobisModelCatalog ( 'FRANCESA' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_FRANCESAA_95030') ), new CobisModelCatalog ( 'MANUAL' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_MANUALKIA_87586') ), new CobisModelCatalog ( 'AGREGADA' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_AGREGADAA_98521') )] }], [ 'VA_AVOIDHOLIDAYSSS_789198',{ data : [ new CobisModelCatalog ( 'A' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_DAHBILAEN_76009') ), new CobisModelCatalog ( 'P' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_DAHBILPRO_36728') ), new CobisModelCatalog ( 'N' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_NOEVITAOI_93253') )] }], [ 'VA_TYPEGRACEBHAAVJ_350198',{ data : [ new CobisModelCatalog ( 'S' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_ENCUOTART_85995') ), new CobisModelCatalog ( 'N' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_ENPRIMETR_79834') )] }], ]) , label: 'OperationPaymentDayUpdateForm' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
