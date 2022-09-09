//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-companieee-220144.model';
import { ViewState } from './model/vc-companieee-220144-view-state';
import { VcCompanieee220144Custom } from './vc-companieee-220144.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-companieee-220144',
templateUrl: './vc-companieee-220144.component.html'
})
export class VcCompanieee220144Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcCompanieee220144Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXVMV_805223 = this.metaData.viewState["QV_ON17_ABV99"].columns.find((col: any) => col.field == 'ruc');
if (column_VA_TEXTINPUTBOXVMV_805223 != undefined) {
const tplCell_VA_TEXTINPUTBOXVMV_805223 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXVMV_805223');
column_VA_TEXTINPUTBOXVMV_805223.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXVMV_805223?.templateRef;
const tplEdit_VA_TEXTINPUTBOXVMV_805223 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXVMV_805223');
column_VA_TEXTINPUTBOXVMV_805223.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXVMV_805223?.templateRef;
}
const column_VA_TEXTINPUTBOXBPB_357223 = this.metaData.viewState["QV_ON17_ABV99"].columns.find((col: any) => col.field == 'companyName');
if (column_VA_TEXTINPUTBOXBPB_357223 != undefined) {
const tplCell_VA_TEXTINPUTBOXBPB_357223 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXBPB_357223');
column_VA_TEXTINPUTBOXBPB_357223.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXBPB_357223?.templateRef;
const tplEdit_VA_TEXTINPUTBOXBPB_357223 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXBPB_357223');
column_VA_TEXTINPUTBOXBPB_357223.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXBPB_357223?.templateRef;
}
const column_VA_TEXTINPUTBOXQDS_911223 = this.metaData.viewState["QV_ON17_ABV99"].columns.find((col: any) => col.field == 'institution');
if (column_VA_TEXTINPUTBOXQDS_911223 != undefined) {
const tplCell_VA_TEXTINPUTBOXQDS_911223 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXQDS_911223');
column_VA_TEXTINPUTBOXQDS_911223.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXQDS_911223?.templateRef;
const tplEdit_VA_TEXTINPUTBOXQDS_911223 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXQDS_911223');
column_VA_TEXTINPUTBOXQDS_911223.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXQDS_911223?.templateRef;
}
const column_VA_TEXTINPUTBOXISR_510223 = this.metaData.viewState["QV_ON17_ABV99"].columns.find((col: any) => col.field == 'phone');
if (column_VA_TEXTINPUTBOXISR_510223 != undefined) {
const tplCell_VA_TEXTINPUTBOXISR_510223 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXISR_510223');
column_VA_TEXTINPUTBOXISR_510223.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXISR_510223?.templateRef;
const tplEdit_VA_TEXTINPUTBOXISR_510223 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXISR_510223');
column_VA_TEXTINPUTBOXISR_510223.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXISR_510223?.templateRef;
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
CompaniesSearchFilter: viewState.T_ASSTSROZTLMPE_144.controls.CompaniesSearchFilter as FormGroup ,
CompaniesList: viewState.T_ASSTSROZTLMPE_144.controls.CompaniesList as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'TRNSC', taskId: 'T_ASSTSROZTLMPE_144', taskVersion: '1.0.0', vcId: 'VC_COMPANIEEE_220144', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/TRNSC/T_ASSTSROZTLMPE_144', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_ON17_ABV99', { queryId: 'Q_COMPIISI_NI17', entityName: 'CompaniesList', filter: "", cobisRequestServerConfig: { pageSize :10 }, cache: 0, queryMemberParameters:[ {aliasQueryMember:'ruc' } , {aliasQueryMember:'companyName' } , {aliasQueryMember:'institution' } , ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'ASSTS.LBL_ASSTS_EMPRESANI_35782' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
beforeOpenGridDialogQV_ON17_ABV99(event: any) {
this.beforeOpenGridDialog(event, {
hasBeforeOpenDialogEvent: false,
hasAfterCloseDialogEvent: false,
moduleId: "ASSTS",
subModuleId: "TRNSC",
taskId: "T_ASSTSVIKJRAKP_845",
taskVersion: "1.0.0",
viewContainerId: "VC_COMPANYCEE_242845",
title: 'ASSTS.LBL_ASSTS_EMPRESANI_35782'
,size: 'md'
});
};
}
