//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-modalrefte-678446.model';
import { ViewState } from './model/vc-modalrefte-678446-view-state';
import { VcModalrefte678446Custom } from './vc-modalrefte-678446.custom';
import { LNSPRService} from 'src/app/LNSPR/service-modules/LNSPR.service';
@Component({
selector: 'cobis-vc-modalrefte-678446',
templateUrl: './vc-modalrefte-678446.component.html'
})
export class VcModalrefte678446Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private lnspr: LNSPRService) {
super(new VcModalrefte678446Custom(designer.cobisCommons,lnspr), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXFMX_713451 = this.metaData.viewState["QV_CU83_UDH39"].columns.find((col: any) => col.field == 'identificador');
if (column_VA_TEXTINPUTBOXFMX_713451 != undefined) {
const tplCell_VA_TEXTINPUTBOXFMX_713451 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXFMX_713451');
column_VA_TEXTINPUTBOXFMX_713451.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXFMX_713451?.templateRef;
const tplEdit_VA_TEXTINPUTBOXFMX_713451 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXFMX_713451');
column_VA_TEXTINPUTBOXFMX_713451.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXFMX_713451?.templateRef;
}
const column_VA_TEXTINPUTBOXMLD_237451 = this.metaData.viewState["QV_CU83_UDH39"].columns.find((col: any) => col.field == 'descripcion');
if (column_VA_TEXTINPUTBOXMLD_237451 != undefined) {
const tplCell_VA_TEXTINPUTBOXMLD_237451 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXMLD_237451');
column_VA_TEXTINPUTBOXMLD_237451.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXMLD_237451?.templateRef;
const tplEdit_VA_TEXTINPUTBOXMLD_237451 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXMLD_237451');
column_VA_TEXTINPUTBOXMLD_237451.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXMLD_237451?.templateRef;
}
const column_VA_TEXTINPUTBOXMFU_598451 = this.metaData.viewState["QV_CU83_UDH39"].columns.find((col: any) => col.field == 'clase');
if (column_VA_TEXTINPUTBOXMFU_598451 != undefined) {
const tplCell_VA_TEXTINPUTBOXMFU_598451 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXMFU_598451');
column_VA_TEXTINPUTBOXMFU_598451.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXMFU_598451?.templateRef;
const tplEdit_VA_TEXTINPUTBOXMFU_598451 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXMFU_598451');
column_VA_TEXTINPUTBOXMFU_598451.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXMFU_598451?.templateRef;
}
const column_VA_TEXTINPUTBOXXNE_889451 = this.metaData.viewState["QV_CU83_UDH39"].columns.find((col: any) => col.field == 'tasaPIT');
if (column_VA_TEXTINPUTBOXXNE_889451 != undefined) {
const tplCell_VA_TEXTINPUTBOXXNE_889451 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXXNE_889451');
column_VA_TEXTINPUTBOXXNE_889451.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXXNE_889451?.templateRef;
const tplEdit_VA_TEXTINPUTBOXXNE_889451 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXXNE_889451');
column_VA_TEXTINPUTBOXXNE_889451.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXXNE_889451?.templateRef;
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
ModalTasaEntity: viewState.T_LNSPRUPDQTUXI_446.controls.ModalTasaEntity as FormGroup
};
this.metaData = { moduleId: 'LNSPR', subModuleId: 'OPRTN', taskId: 'T_LNSPRUPDQTUXI_446', taskVersion: '1.0.0', vcId: 'VC_MODALREFTE_678446', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(false, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/LNSPR/OPRTN/T_LNSPRUPDQTUXI_446', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_CU83_UDH39', { queryId: 'Q_MODAALAS_TP83', entityName: 'ModalTasaEntity', filter: "", cobisRequestServerConfig: { pageSize :10 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'ModalReferentialForm' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
