//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-accontsopt-347664.model';
import { ViewState } from './model/vc-accontsopt-347664-view-state';
import { VcAccontsopt347664Custom } from './vc-accontsopt-347664.custom';
import { LNSPRService} from 'src/app/LNSPR/service-modules/LNSPR.service';
@Component({
selector: 'cobis-vc-accontsopt-347664',
templateUrl: './vc-accontsopt-347664.component.html'
})
export class VcAccontsopt347664Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private lnspr: LNSPRService) {
super(new VcAccontsopt347664Custom(designer.cobisCommons,lnspr), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_CODEPVDENMQQIAZ_575826 = this.metaData.viewState["QV_SEPR_PJZ89"].columns.find((col: any) => col.field == 'code');
if (column_VA_CODEPVDENMQQIAZ_575826 != undefined) {
const tplCell_VA_CODEPVDENMQQIAZ_575826 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_CODEPVDENMQQIAZ_575826');
column_VA_CODEPVDENMQQIAZ_575826.properties.cellTemplate = tplCell_VA_CODEPVDENMQQIAZ_575826?.templateRef;
const tplEdit_VA_CODEPVDENMQQIAZ_575826 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_CODEPVDENMQQIAZ_575826');
column_VA_CODEPVDENMQQIAZ_575826.properties.editTemplate = tplEdit_VA_CODEPVDENMQQIAZ_575826?.templateRef;
}
const column_VA_VALUE1XWKWSEKJY_872826 = this.metaData.viewState["QV_SEPR_PJZ89"].columns.find((col: any) => col.field == 'value1');
if (column_VA_VALUE1XWKWSEKJY_872826 != undefined) {
const tplCell_VA_VALUE1XWKWSEKJY_872826 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_VALUE1XWKWSEKJY_872826');
column_VA_VALUE1XWKWSEKJY_872826.properties.cellTemplate = tplCell_VA_VALUE1XWKWSEKJY_872826?.templateRef;
const tplEdit_VA_VALUE1XWKWSEKJY_872826 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_VALUE1XWKWSEKJY_872826');
column_VA_VALUE1XWKWSEKJY_872826.properties.editTemplate = tplEdit_VA_VALUE1XWKWSEKJY_872826?.templateRef;
}
const column_VA_VALUE2UGGNUVHED_858826 = this.metaData.viewState["QV_SEPR_PJZ89"].columns.find((col: any) => col.field == 'value2');
if (column_VA_VALUE2UGGNUVHED_858826 != undefined) {
const tplCell_VA_VALUE2UGGNUVHED_858826 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_VALUE2UGGNUVHED_858826');
column_VA_VALUE2UGGNUVHED_858826.properties.cellTemplate = tplCell_VA_VALUE2UGGNUVHED_858826?.templateRef;
const tplEdit_VA_VALUE2UGGNUVHED_858826 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_VALUE2UGGNUVHED_858826');
column_VA_VALUE2UGGNUVHED_858826.properties.editTemplate = tplEdit_VA_VALUE2UGGNUVHED_858826?.templateRef;
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
Catalog3Items: viewState.T_LNSPRHZIKGUNT_664.controls.Catalog3Items as FormGroup
};
this.metaData = { moduleId: 'LNSPR', subModuleId: 'OPRTN', taskId: 'T_LNSPRHZIKGUNT_664', taskVersion: '1.0.0', vcId: 'VC_ACCONTSOPT_347664', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(false, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/LNSPR/OPRTN/T_LNSPRHZIKGUNT_664', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_SEPR_PJZ89', { queryId: 'Q_CATALGSE_LNSPR', entityName: 'Catalog3Items', filter: "", cobisRequestServerConfig: null, cache: 0, queryMemberParameters:[ {aliasQueryMember:'value1' } , {aliasQueryMember:'producto' } ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'AccontsOperation' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
