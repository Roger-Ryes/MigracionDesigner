//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-documentpp-352678.model';
import { ViewState } from './model/vc-documentpp-352678-view-state';
import { VcDocumentpp352678Custom } from './vc-documentpp-352678.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-documentpp-352678',
templateUrl: './vc-documentpp-352678.component.html'
})
export class VcDocumentpp352678Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcDocumentpp352678Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXWZN_618334 = this.metaData.viewState["QV_3105_20065"].columns.find((col: any) => col.field == 'codigo');
if (column_VA_TEXTINPUTBOXWZN_618334 != undefined) {
const tplCell_VA_TEXTINPUTBOXWZN_618334 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXWZN_618334');
column_VA_TEXTINPUTBOXWZN_618334.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXWZN_618334?.templateRef;
const tplEdit_VA_TEXTINPUTBOXWZN_618334 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXWZN_618334');
column_VA_TEXTINPUTBOXWZN_618334.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXWZN_618334?.templateRef;
}
const column_VA_TEXTINPUTBOXSTS_372334 = this.metaData.viewState["QV_3105_20065"].columns.find((col: any) => col.field == 'documentos');
if (column_VA_TEXTINPUTBOXSTS_372334 != undefined) {
const tplCell_VA_TEXTINPUTBOXSTS_372334 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXSTS_372334');
column_VA_TEXTINPUTBOXSTS_372334.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXSTS_372334?.templateRef;
const tplEdit_VA_TEXTINPUTBOXSTS_372334 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXSTS_372334');
column_VA_TEXTINPUTBOXSTS_372334.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXSTS_372334?.templateRef;
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
PrintingDocuments: viewState.T_DOCUMENTPRIII_678.controls.PrintingDocuments as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'MNTNN', taskId: 'T_DOCUMENTPRIII_678', taskVersion: '1.0.0', vcId: 'VC_DOCUMENTPP_352678', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/MNTNN/T_DOCUMENTPRIII_678', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_3105_20065', { queryId: 'Q_PRINTICM_3105', entityName: 'PrintingDocuments', filter: "", cobisRequestServerConfig: { pageSize :10 }, cache: 0, queryMemberParameters:[ {aliasQueryMember:'operation' } , {aliasQueryMember:'mode' } ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'DocumentPrinting' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
