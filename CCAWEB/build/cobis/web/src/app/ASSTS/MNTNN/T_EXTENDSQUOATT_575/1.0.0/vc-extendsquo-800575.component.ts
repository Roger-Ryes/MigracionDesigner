//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-extendsquo-800575.model';
import { ViewState } from './model/vc-extendsquo-800575-view-state';
import { VcExtendsquo800575Custom } from './vc-extendsquo-800575.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-extendsquo-800575',
templateUrl: './vc-extendsquo-800575.component.html'
})
export class VcExtendsquo800575Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcExtendsquo800575Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXKUL_165662 = this.metaData.viewState["QV_2921_98487"].columns.find((col: any) => col.field == 'quota');
if (column_VA_TEXTINPUTBOXKUL_165662 != undefined) {
const tplCell_VA_TEXTINPUTBOXKUL_165662 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXKUL_165662');
column_VA_TEXTINPUTBOXKUL_165662.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXKUL_165662?.templateRef;
const tplEdit_VA_TEXTINPUTBOXKUL_165662 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXKUL_165662');
column_VA_TEXTINPUTBOXKUL_165662.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXKUL_165662?.templateRef;
}
const column_VA_DATEFIELDKHVZHE_598662 = this.metaData.viewState["QV_2921_98487"].columns.find((col: any) => col.field == 'startDate');
if (column_VA_DATEFIELDKHVZHE_598662 != undefined) {
const tplCell_VA_DATEFIELDKHVZHE_598662 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DATEFIELDKHVZHE_598662');
column_VA_DATEFIELDKHVZHE_598662.properties.cellTemplate = tplCell_VA_DATEFIELDKHVZHE_598662?.templateRef;
const tplEdit_VA_DATEFIELDKHVZHE_598662 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DATEFIELDKHVZHE_598662');
column_VA_DATEFIELDKHVZHE_598662.properties.editTemplate = tplEdit_VA_DATEFIELDKHVZHE_598662?.templateRef;
}
const column_VA_DATEFIELDOSHXSD_216662 = this.metaData.viewState["QV_2921_98487"].columns.find((col: any) => col.field == 'endDate');
if (column_VA_DATEFIELDOSHXSD_216662 != undefined) {
const tplCell_VA_DATEFIELDOSHXSD_216662 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DATEFIELDOSHXSD_216662');
column_VA_DATEFIELDOSHXSD_216662.properties.cellTemplate = tplCell_VA_DATEFIELDOSHXSD_216662?.templateRef;
const tplEdit_VA_DATEFIELDOSHXSD_216662 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DATEFIELDOSHXSD_216662');
column_VA_DATEFIELDOSHXSD_216662.properties.editTemplate = tplEdit_VA_DATEFIELDOSHXSD_216662?.templateRef;
}
const column_VA_TEXTINPUTBOXEDY_233662 = this.metaData.viewState["QV_2921_98487"].columns.find((col: any) => col.field == 'capital');
if (column_VA_TEXTINPUTBOXEDY_233662 != undefined) {
const tplCell_VA_TEXTINPUTBOXEDY_233662 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXEDY_233662');
column_VA_TEXTINPUTBOXEDY_233662.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXEDY_233662?.templateRef;
const tplEdit_VA_TEXTINPUTBOXEDY_233662 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXEDY_233662');
column_VA_TEXTINPUTBOXEDY_233662.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXEDY_233662?.templateRef;
}
const column_VA_TEXTINPUTBOXJTQ_372662 = this.metaData.viewState["QV_2921_98487"].columns.find((col: any) => col.field == 'interest');
if (column_VA_TEXTINPUTBOXJTQ_372662 != undefined) {
const tplCell_VA_TEXTINPUTBOXJTQ_372662 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXJTQ_372662');
column_VA_TEXTINPUTBOXJTQ_372662.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXJTQ_372662?.templateRef;
const tplEdit_VA_TEXTINPUTBOXJTQ_372662 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXJTQ_372662');
column_VA_TEXTINPUTBOXJTQ_372662.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXJTQ_372662?.templateRef;
}
const column_VA_TEXTINPUTBOXNSU_173662 = this.metaData.viewState["QV_2921_98487"].columns.find((col: any) => col.field == 'others');
if (column_VA_TEXTINPUTBOXNSU_173662 != undefined) {
const tplCell_VA_TEXTINPUTBOXNSU_173662 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXNSU_173662');
column_VA_TEXTINPUTBOXNSU_173662.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXNSU_173662?.templateRef;
const tplEdit_VA_TEXTINPUTBOXNSU_173662 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXNSU_173662');
column_VA_TEXTINPUTBOXNSU_173662.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXNSU_173662?.templateRef;
}
const column_VA_TEXTINPUTBOXSKI_427662 = this.metaData.viewState["QV_2921_98487"].columns.find((col: any) => col.field == 'total');
if (column_VA_TEXTINPUTBOXSKI_427662 != undefined) {
const tplCell_VA_TEXTINPUTBOXSKI_427662 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXSKI_427662');
column_VA_TEXTINPUTBOXSKI_427662.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXSKI_427662?.templateRef;
const tplEdit_VA_TEXTINPUTBOXSKI_427662 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXSKI_427662');
column_VA_TEXTINPUTBOXSKI_427662.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXSKI_427662?.templateRef;
}
const column_VA_TEXTINPUTBOXHJL_257662 = this.metaData.viewState["QV_2921_98487"].columns.find((col: any) => col.field == 'state');
if (column_VA_TEXTINPUTBOXHJL_257662 != undefined) {
const tplCell_VA_TEXTINPUTBOXHJL_257662 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXHJL_257662');
column_VA_TEXTINPUTBOXHJL_257662.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXHJL_257662?.templateRef;
const tplEdit_VA_TEXTINPUTBOXHJL_257662 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXHJL_257662');
column_VA_TEXTINPUTBOXHJL_257662.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXHJL_257662?.templateRef;
}
const column_VA_TEXTINPUTBOXQAR_993662 = this.metaData.viewState["QV_5312_48027"].columns.find((col: any) => col.field == 'quotaExt');
if (column_VA_TEXTINPUTBOXQAR_993662 != undefined) {
const tplCell_VA_TEXTINPUTBOXQAR_993662 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXQAR_993662');
column_VA_TEXTINPUTBOXQAR_993662.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXQAR_993662?.templateRef;
const tplEdit_VA_TEXTINPUTBOXQAR_993662 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXQAR_993662');
column_VA_TEXTINPUTBOXQAR_993662.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXQAR_993662?.templateRef;
}
const column_VA_DATEFIELDENSHZO_505662 = this.metaData.viewState["QV_5312_48027"].columns.find((col: any) => col.field == 'startDateExt');
if (column_VA_DATEFIELDENSHZO_505662 != undefined) {
const tplCell_VA_DATEFIELDENSHZO_505662 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DATEFIELDENSHZO_505662');
column_VA_DATEFIELDENSHZO_505662.properties.cellTemplate = tplCell_VA_DATEFIELDENSHZO_505662?.templateRef;
const tplEdit_VA_DATEFIELDENSHZO_505662 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DATEFIELDENSHZO_505662');
column_VA_DATEFIELDENSHZO_505662.properties.editTemplate = tplEdit_VA_DATEFIELDENSHZO_505662?.templateRef;
}
const column_VA_DATEFIELDXYSJRW_527662 = this.metaData.viewState["QV_5312_48027"].columns.find((col: any) => col.field == 'endDateExt');
if (column_VA_DATEFIELDXYSJRW_527662 != undefined) {
const tplCell_VA_DATEFIELDXYSJRW_527662 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DATEFIELDXYSJRW_527662');
column_VA_DATEFIELDXYSJRW_527662.properties.cellTemplate = tplCell_VA_DATEFIELDXYSJRW_527662?.templateRef;
const tplEdit_VA_DATEFIELDXYSJRW_527662 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DATEFIELDXYSJRW_527662');
column_VA_DATEFIELDXYSJRW_527662.properties.editTemplate = tplEdit_VA_DATEFIELDXYSJRW_527662?.templateRef;
}
const column_VA_TEXTINPUTBOXRQU_339662 = this.metaData.viewState["QV_5312_48027"].columns.find((col: any) => col.field == 'capitalExt');
if (column_VA_TEXTINPUTBOXRQU_339662 != undefined) {
const tplCell_VA_TEXTINPUTBOXRQU_339662 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXRQU_339662');
column_VA_TEXTINPUTBOXRQU_339662.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXRQU_339662?.templateRef;
const tplEdit_VA_TEXTINPUTBOXRQU_339662 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXRQU_339662');
column_VA_TEXTINPUTBOXRQU_339662.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXRQU_339662?.templateRef;
}
const column_VA_TEXTINPUTBOXQSF_971662 = this.metaData.viewState["QV_5312_48027"].columns.find((col: any) => col.field == 'interestExt');
if (column_VA_TEXTINPUTBOXQSF_971662 != undefined) {
const tplCell_VA_TEXTINPUTBOXQSF_971662 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXQSF_971662');
column_VA_TEXTINPUTBOXQSF_971662.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXQSF_971662?.templateRef;
const tplEdit_VA_TEXTINPUTBOXQSF_971662 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXQSF_971662');
column_VA_TEXTINPUTBOXQSF_971662.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXQSF_971662?.templateRef;
}
const column_VA_TEXTINPUTBOXENP_579662 = this.metaData.viewState["QV_5312_48027"].columns.find((col: any) => col.field == 'others');
if (column_VA_TEXTINPUTBOXENP_579662 != undefined) {
const tplCell_VA_TEXTINPUTBOXENP_579662 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXENP_579662');
column_VA_TEXTINPUTBOXENP_579662.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXENP_579662?.templateRef;
const tplEdit_VA_TEXTINPUTBOXENP_579662 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXENP_579662');
column_VA_TEXTINPUTBOXENP_579662.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXENP_579662?.templateRef;
}
const column_VA_TEXTINPUTBOXVFS_528662 = this.metaData.viewState["QV_5312_48027"].columns.find((col: any) => col.field == 'total');
if (column_VA_TEXTINPUTBOXVFS_528662 != undefined) {
const tplCell_VA_TEXTINPUTBOXVFS_528662 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXVFS_528662');
column_VA_TEXTINPUTBOXVFS_528662.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXVFS_528662?.templateRef;
const tplEdit_VA_TEXTINPUTBOXVFS_528662 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXVFS_528662');
column_VA_TEXTINPUTBOXVFS_528662.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXVFS_528662?.templateRef;
}
const column_VA_TEXTINPUTBOXDCK_638662 = this.metaData.viewState["QV_5312_48027"].columns.find((col: any) => col.field == 'state');
if (column_VA_TEXTINPUTBOXDCK_638662 != undefined) {
const tplCell_VA_TEXTINPUTBOXDCK_638662 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXDCK_638662');
column_VA_TEXTINPUTBOXDCK_638662.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXDCK_638662?.templateRef;
const tplEdit_VA_TEXTINPUTBOXDCK_638662 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXDCK_638662');
column_VA_TEXTINPUTBOXDCK_638662.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXDCK_638662?.templateRef;
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
CurrentQuotas: viewState.T_EXTENDSQUOATT_575.controls.CurrentQuotas as FormGroup ,
ExtendsQuota: viewState.T_EXTENDSQUOATT_575.controls.ExtendsQuota as FormGroup ,
ExtendsQuotaExt: viewState.T_EXTENDSQUOATT_575.controls.ExtendsQuotaExt as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'MNTNN', taskId: 'T_EXTENDSQUOATT_575', taskVersion: '1.0.0', vcId: 'VC_EXTENDSQUO_800575', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(false, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/MNTNN/T_EXTENDSQUOATT_575', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_2921_98487', { queryId: 'Q_CURRENAT_2921', entityName: 'CurrentQuotas', filter: "", cobisRequestServerConfig: { pageSize :5 }, cache: 0, queryMemberParameters:[ ]}], ['QV_5312_48027', { queryId: 'Q_EXTENDEX_5312', entityName: 'ExtendsQuotaExt', filter: "", cobisRequestServerConfig: { pageSize :5 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'ASSTS.LBL_ASSTS_CUOTASPRA_93874' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
