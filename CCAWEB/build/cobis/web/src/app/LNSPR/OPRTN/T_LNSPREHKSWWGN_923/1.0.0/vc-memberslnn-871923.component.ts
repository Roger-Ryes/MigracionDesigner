//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-memberslnn-871923.model';
import { ViewState } from './model/vc-memberslnn-871923-view-state';
import { VcMemberslnn871923Custom } from './vc-memberslnn-871923.custom';
import { LNSPRService} from 'src/app/LNSPR/service-modules/LNSPR.service';
@Component({
selector: 'cobis-vc-memberslnn-871923',
templateUrl: './vc-memberslnn-871923.component.html'
})
export class VcMemberslnn871923Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private lnspr: LNSPRService) {
super(new VcMemberslnn871923Custom(designer.cobisCommons,lnspr), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXRWN_542602 = this.metaData.viewState["QV_HR68_RLL81"].columns.find((col: any) => col.field == 'nameMember');
if (column_VA_TEXTINPUTBOXRWN_542602 != undefined) {
const tplCell_VA_TEXTINPUTBOXRWN_542602 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXRWN_542602');
column_VA_TEXTINPUTBOXRWN_542602.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXRWN_542602?.templateRef;
const tplEdit_VA_TEXTINPUTBOXRWN_542602 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXRWN_542602');
column_VA_TEXTINPUTBOXRWN_542602.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXRWN_542602?.templateRef;
}
const column_VA_TEXTINPUTBOXUWI_692602 = this.metaData.viewState["QV_HR68_RLL81"].columns.find((col: any) => col.field == 'desMoney');
if (column_VA_TEXTINPUTBOXUWI_692602 != undefined) {
const tplCell_VA_TEXTINPUTBOXUWI_692602 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXUWI_692602');
column_VA_TEXTINPUTBOXUWI_692602.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXUWI_692602?.templateRef;
const tplEdit_VA_TEXTINPUTBOXUWI_692602 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXUWI_692602');
column_VA_TEXTINPUTBOXUWI_692602.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXUWI_692602?.templateRef;
}
const column_VA_TEXTINPUTBOXBLS_253602 = this.metaData.viewState["QV_HR68_RLL81"].columns.find((col: any) => col.field == 'approved');
if (column_VA_TEXTINPUTBOXBLS_253602 != undefined) {
const tplCell_VA_TEXTINPUTBOXBLS_253602 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXBLS_253602');
column_VA_TEXTINPUTBOXBLS_253602.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXBLS_253602?.templateRef;
const tplEdit_VA_TEXTINPUTBOXBLS_253602 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXBLS_253602');
column_VA_TEXTINPUTBOXBLS_253602.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXBLS_253602?.templateRef;
}
const column_VA_TEXTINPUTBOXIKN_498602 = this.metaData.viewState["QV_HR68_RLL81"].columns.find((col: any) => col.field == 'used');
if (column_VA_TEXTINPUTBOXIKN_498602 != undefined) {
const tplCell_VA_TEXTINPUTBOXIKN_498602 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXIKN_498602');
column_VA_TEXTINPUTBOXIKN_498602.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXIKN_498602?.templateRef;
const tplEdit_VA_TEXTINPUTBOXIKN_498602 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXIKN_498602');
column_VA_TEXTINPUTBOXIKN_498602.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXIKN_498602?.templateRef;
}
const column_VA_TEXTINPUTBOXWUO_764602 = this.metaData.viewState["QV_HR68_RLL81"].columns.find((col: any) => col.field == 'available');
if (column_VA_TEXTINPUTBOXWUO_764602 != undefined) {
const tplCell_VA_TEXTINPUTBOXWUO_764602 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXWUO_764602');
column_VA_TEXTINPUTBOXWUO_764602.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXWUO_764602?.templateRef;
const tplEdit_VA_TEXTINPUTBOXWUO_764602 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXWUO_764602');
column_VA_TEXTINPUTBOXWUO_764602.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXWUO_764602?.templateRef;
}
const column_VA_TEXTINPUTBOXWXT_462602 = this.metaData.viewState["QV_HR68_RLL81"].columns.find((col: any) => col.field == 'quote');
if (column_VA_TEXTINPUTBOXWXT_462602 != undefined) {
const tplCell_VA_TEXTINPUTBOXWXT_462602 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXWXT_462602');
column_VA_TEXTINPUTBOXWXT_462602.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXWXT_462602?.templateRef;
const tplEdit_VA_TEXTINPUTBOXWXT_462602 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXWXT_462602');
column_VA_TEXTINPUTBOXWXT_462602.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXWXT_462602?.templateRef;
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
SummaryMembers: viewState.T_LNSPREHKSWWGN_923.controls.SummaryMembers as FormGroup
};
this.metaData = { moduleId: 'LNSPR', subModuleId: 'OPRTN', taskId: 'T_LNSPREHKSWWGN_923', taskVersion: '1.0.0', vcId: 'VC_MEMBERSLNN_871923', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(false, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/LNSPR/OPRTN/T_LNSPREHKSWWGN_923', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_HR68_RLL81', { queryId: 'Q_SUMMESYE_DM68', entityName: 'SummaryMembers', filter: "", cobisRequestServerConfig: { pageSize :10 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'MembersLineForm' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
