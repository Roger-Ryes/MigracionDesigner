//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-prioritiom-989489.model';
import { ViewState } from './model/vc-prioritiom-989489-view-state';
import { VcPrioritiom989489Custom } from './vc-prioritiom-989489.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-prioritiom-989489',
templateUrl: './vc-prioritiom-989489.component.html'
})
export class VcPrioritiom989489Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcPrioritiom989489Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXTPG_996545 = this.metaData.viewState["QV_3510_83627"].columns.find((col: any) => col.field == 'item');
if (column_VA_TEXTINPUTBOXTPG_996545 != undefined) {
const tplCell_VA_TEXTINPUTBOXTPG_996545 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXTPG_996545');
column_VA_TEXTINPUTBOXTPG_996545.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXTPG_996545?.templateRef;
const tplEdit_VA_TEXTINPUTBOXTPG_996545 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXTPG_996545');
column_VA_TEXTINPUTBOXTPG_996545.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXTPG_996545?.templateRef;
}
const column_VA_TEXTINPUTBOXCHD_352545 = this.metaData.viewState["QV_3510_83627"].columns.find((col: any) => col.field == 'priority');
if (column_VA_TEXTINPUTBOXCHD_352545 != undefined) {
const tplCell_VA_TEXTINPUTBOXCHD_352545 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXCHD_352545');
column_VA_TEXTINPUTBOXCHD_352545.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXCHD_352545?.templateRef;
const tplEdit_VA_TEXTINPUTBOXCHD_352545 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXCHD_352545');
column_VA_TEXTINPUTBOXCHD_352545.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXCHD_352545?.templateRef;
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
Priorities: viewState.T_PRIORITIESENY_489.controls.Priorities as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'TRNSC', taskId: 'T_PRIORITIESENY_489', taskVersion: '1.0.0', vcId: 'VC_PRIORITIOM_989489', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, true), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/TRNSC/T_PRIORITIESENY_489', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_3510_83627', { queryId: 'Q_PRIORIIT_3510', entityName: 'Priorities', filter: "", cobisRequestServerConfig: { pageSize :5 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'PrioritiesPaymentsModal' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
