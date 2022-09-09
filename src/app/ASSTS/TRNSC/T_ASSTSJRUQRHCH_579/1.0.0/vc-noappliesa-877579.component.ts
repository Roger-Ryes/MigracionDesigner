//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-noappliesa-877579.model';
import { ViewState } from './model/vc-noappliesa-877579-view-state';
import { VcNoappliesa877579Custom } from './vc-noappliesa-877579.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-noappliesa-877579',
templateUrl: './vc-noappliesa-877579.component.html'
})
export class VcNoappliesa877579Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcNoappliesa877579Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXEAA_349728 = this.metaData.viewState["QV_PJ68_WJJ41"].columns.find((col: any) => col.field == 'secuencial');
if (column_VA_TEXTINPUTBOXEAA_349728 != undefined) {
const tplCell_VA_TEXTINPUTBOXEAA_349728 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXEAA_349728');
column_VA_TEXTINPUTBOXEAA_349728.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXEAA_349728?.templateRef;
const tplEdit_VA_TEXTINPUTBOXEAA_349728 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXEAA_349728');
column_VA_TEXTINPUTBOXEAA_349728.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXEAA_349728?.templateRef;
}
const column_VA_TEXTINPUTBOXRFR_894728 = this.metaData.viewState["QV_PJ68_WJJ41"].columns.find((col: any) => col.field == 'fecha');
if (column_VA_TEXTINPUTBOXRFR_894728 != undefined) {
const tplCell_VA_TEXTINPUTBOXRFR_894728 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXRFR_894728');
column_VA_TEXTINPUTBOXRFR_894728.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXRFR_894728?.templateRef;
const tplEdit_VA_TEXTINPUTBOXRFR_894728 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXRFR_894728');
column_VA_TEXTINPUTBOXRFR_894728.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXRFR_894728?.templateRef;
}
const column_VA_TEXTINPUTBOXIWP_828728 = this.metaData.viewState["QV_PJ68_WJJ41"].columns.find((col: any) => col.field == 'usuario');
if (column_VA_TEXTINPUTBOXIWP_828728 != undefined) {
const tplCell_VA_TEXTINPUTBOXIWP_828728 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXIWP_828728');
column_VA_TEXTINPUTBOXIWP_828728.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXIWP_828728?.templateRef;
const tplEdit_VA_TEXTINPUTBOXIWP_828728 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXIWP_828728');
column_VA_TEXTINPUTBOXIWP_828728.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXIWP_828728?.templateRef;
}
const column_VA_TEXTINPUTBOXGUR_413728 = this.metaData.viewState["QV_PJ68_WJJ41"].columns.find((col: any) => col.field == 'oficina');
if (column_VA_TEXTINPUTBOXGUR_413728 != undefined) {
const tplCell_VA_TEXTINPUTBOXGUR_413728 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXGUR_413728');
column_VA_TEXTINPUTBOXGUR_413728.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXGUR_413728?.templateRef;
const tplEdit_VA_TEXTINPUTBOXGUR_413728 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXGUR_413728');
column_VA_TEXTINPUTBOXGUR_413728.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXGUR_413728?.templateRef;
}
const column_VA_TEXTINPUTBOXTAL_575728 = this.metaData.viewState["QV_PJ68_WJJ41"].columns.find((col: any) => col.field == 'retencion');
if (column_VA_TEXTINPUTBOXTAL_575728 != undefined) {
const tplCell_VA_TEXTINPUTBOXTAL_575728 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXTAL_575728');
column_VA_TEXTINPUTBOXTAL_575728.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXTAL_575728?.templateRef;
const tplEdit_VA_TEXTINPUTBOXTAL_575728 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXTAL_575728');
column_VA_TEXTINPUTBOXTAL_575728.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXTAL_575728?.templateRef;
}
const column_VA_TEXTINPUTBOXDVV_144728 = this.metaData.viewState["QV_PJ68_WJJ41"].columns.find((col: any) => col.field == 'cuotaCompleta');
if (column_VA_TEXTINPUTBOXDVV_144728 != undefined) {
const tplCell_VA_TEXTINPUTBOXDVV_144728 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXDVV_144728');
column_VA_TEXTINPUTBOXDVV_144728.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXDVV_144728?.templateRef;
const tplEdit_VA_TEXTINPUTBOXDVV_144728 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXDVV_144728');
column_VA_TEXTINPUTBOXDVV_144728.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXDVV_144728?.templateRef;
}
const column_VA_TEXTINPUTBOXJFZ_210728 = this.metaData.viewState["QV_PJ68_WJJ41"].columns.find((col: any) => col.field == 'anticipos');
if (column_VA_TEXTINPUTBOXJFZ_210728 != undefined) {
const tplCell_VA_TEXTINPUTBOXJFZ_210728 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXJFZ_210728');
column_VA_TEXTINPUTBOXJFZ_210728.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXJFZ_210728?.templateRef;
const tplEdit_VA_TEXTINPUTBOXJFZ_210728 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXJFZ_210728');
column_VA_TEXTINPUTBOXJFZ_210728.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXJFZ_210728?.templateRef;
}
const column_VA_TEXTINPUTBOXVZK_871728 = this.metaData.viewState["QV_PJ68_WJJ41"].columns.find((col: any) => col.field == 'tipoReduccion');
if (column_VA_TEXTINPUTBOXVZK_871728 != undefined) {
const tplCell_VA_TEXTINPUTBOXVZK_871728 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXVZK_871728');
column_VA_TEXTINPUTBOXVZK_871728.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXVZK_871728?.templateRef;
const tplEdit_VA_TEXTINPUTBOXVZK_871728 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXVZK_871728');
column_VA_TEXTINPUTBOXVZK_871728.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXVZK_871728?.templateRef;
}
const column_VA_TEXTINPUTBOXXHO_486728 = this.metaData.viewState["QV_PJ68_WJJ41"].columns.find((col: any) => col.field == 'tipoCobro');
if (column_VA_TEXTINPUTBOXXHO_486728 != undefined) {
const tplCell_VA_TEXTINPUTBOXXHO_486728 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXXHO_486728');
column_VA_TEXTINPUTBOXXHO_486728.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXXHO_486728?.templateRef;
const tplEdit_VA_TEXTINPUTBOXXHO_486728 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXXHO_486728');
column_VA_TEXTINPUTBOXXHO_486728.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXXHO_486728?.templateRef;
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
NoAppliedPayment: viewState.T_ASSTSJRUQRHCH_579.controls.NoAppliedPayment as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'TRNSC', taskId: 'T_ASSTSJRUQRHCH_579', taskVersion: '1.0.0', vcId: 'VC_NOAPPLIESA_877579', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/TRNSC/T_ASSTSJRUQRHCH_579', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_PJ68_WJJ41', { queryId: 'Q_NOAPYYTA_XK68', entityName: 'NoAppliedPayment', filter: "", cobisRequestServerConfig: { pageSize :10 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'ASSTS.LBL_ASSTS_PAGOSNOAA_17723' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
