//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-currentssn-601551.model';
import { ViewState } from './model/vc-currentssn-601551-view-state';
import { VcCurrentssn601551Custom } from './vc-currentssn-601551.custom';
import { LNSPRService} from 'src/app/LNSPR/service-modules/LNSPR.service';
@Component({
selector: 'cobis-vc-currentssn-601551',
templateUrl: './vc-currentssn-601551.component.html'
})
export class VcCurrentssn601551Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private lnspr: LNSPRService) {
super(new VcCurrentssn601551Custom(designer.cobisCommons,lnspr), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXEXF_996928 = this.metaData.viewState["QV_HQ80_NZX99"].columns.find((col: any) => col.field == 'product');
if (column_VA_TEXTINPUTBOXEXF_996928 != undefined) {
const tplCell_VA_TEXTINPUTBOXEXF_996928 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXEXF_996928');
column_VA_TEXTINPUTBOXEXF_996928.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXEXF_996928?.templateRef;
const tplEdit_VA_TEXTINPUTBOXEXF_996928 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXEXF_996928');
column_VA_TEXTINPUTBOXEXF_996928.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXEXF_996928?.templateRef;
}
const column_VA_TEXTINPUTBOXIDH_851928 = this.metaData.viewState["QV_HQ80_NZX99"].columns.find((col: any) => col.field == 'descMoney');
if (column_VA_TEXTINPUTBOXIDH_851928 != undefined) {
const tplCell_VA_TEXTINPUTBOXIDH_851928 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXIDH_851928');
column_VA_TEXTINPUTBOXIDH_851928.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXIDH_851928?.templateRef;
const tplEdit_VA_TEXTINPUTBOXIDH_851928 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXIDH_851928');
column_VA_TEXTINPUTBOXIDH_851928.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXIDH_851928?.templateRef;
}
const column_VA_TEXTINPUTBOXQRS_250928 = this.metaData.viewState["QV_HQ80_NZX99"].columns.find((col: any) => col.field == 'approved');
if (column_VA_TEXTINPUTBOXQRS_250928 != undefined) {
const tplCell_VA_TEXTINPUTBOXQRS_250928 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXQRS_250928');
column_VA_TEXTINPUTBOXQRS_250928.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXQRS_250928?.templateRef;
const tplEdit_VA_TEXTINPUTBOXQRS_250928 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXQRS_250928');
column_VA_TEXTINPUTBOXQRS_250928.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXQRS_250928?.templateRef;
}
const column_VA_TEXTINPUTBOXURM_280928 = this.metaData.viewState["QV_HQ80_NZX99"].columns.find((col: any) => col.field == 'used');
if (column_VA_TEXTINPUTBOXURM_280928 != undefined) {
const tplCell_VA_TEXTINPUTBOXURM_280928 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXURM_280928');
column_VA_TEXTINPUTBOXURM_280928.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXURM_280928?.templateRef;
const tplEdit_VA_TEXTINPUTBOXURM_280928 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXURM_280928');
column_VA_TEXTINPUTBOXURM_280928.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXURM_280928?.templateRef;
}
const column_VA_TEXTINPUTBOXDMY_107928 = this.metaData.viewState["QV_HQ80_NZX99"].columns.find((col: any) => col.field == 'available');
if (column_VA_TEXTINPUTBOXDMY_107928 != undefined) {
const tplCell_VA_TEXTINPUTBOXDMY_107928 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXDMY_107928');
column_VA_TEXTINPUTBOXDMY_107928.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXDMY_107928?.templateRef;
const tplEdit_VA_TEXTINPUTBOXDMY_107928 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXDMY_107928');
column_VA_TEXTINPUTBOXDMY_107928.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXDMY_107928?.templateRef;
}
const column_VA_TEXTINPUTBOXDDA_394928 = this.metaData.viewState["QV_HQ80_NZX99"].columns.find((col: any) => col.field == 'currencyQuote');
if (column_VA_TEXTINPUTBOXDDA_394928 != undefined) {
const tplCell_VA_TEXTINPUTBOXDDA_394928 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXDDA_394928');
column_VA_TEXTINPUTBOXDDA_394928.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXDDA_394928?.templateRef;
const tplEdit_VA_TEXTINPUTBOXDDA_394928 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXDDA_394928');
column_VA_TEXTINPUTBOXDDA_394928.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXDDA_394928?.templateRef;
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
SummaryStatus: viewState.T_LNSPRASFFUCSU_551.controls.SummaryStatus as FormGroup
};
this.metaData = { moduleId: 'LNSPR', subModuleId: 'OPRTN', taskId: 'T_LNSPRASFFUCSU_551', taskVersion: '1.0.0', vcId: 'VC_CURRENTSSN_601551', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(false, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/LNSPR/OPRTN/T_LNSPRASFFUCSU_551', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ['VA_TEXTINPUTBOXSPG_308928', { catalogName: 'cl_moneda', filter: "", cobisRequestServerConfig: null, cache: 0 , controlGridInfo: { queryViewId: "QV_HQ80_NZX99", columnId: "codMoney" } }], ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_HQ80_NZX99', { queryId: 'Q_SUMMUSYU_GO80', entityName: 'SummaryStatus', filter: "", cobisRequestServerConfig: { pageSize :5 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'CurrentStatusLineForm' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
