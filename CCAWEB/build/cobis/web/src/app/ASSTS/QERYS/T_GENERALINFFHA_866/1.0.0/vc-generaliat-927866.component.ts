//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-generaliat-927866.model';
import { ViewState } from './model/vc-generaliat-927866-view-state';
import { VcGeneraliat927866Custom } from './vc-generaliat-927866.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-generaliat-927866',
templateUrl: './vc-generaliat-927866.component.html'
})
export class VcGeneraliat927866Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcGeneraliat927866Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXTMD_417344 = this.metaData.viewState["QV_6100_21620"].columns.find((col: any) => col.field == 'statusAmortization');
if (column_VA_TEXTINPUTBOXTMD_417344 != undefined) {
const tplCell_VA_TEXTINPUTBOXTMD_417344 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXTMD_417344');
column_VA_TEXTINPUTBOXTMD_417344.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXTMD_417344?.templateRef;
const tplEdit_VA_TEXTINPUTBOXTMD_417344 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXTMD_417344');
column_VA_TEXTINPUTBOXTMD_417344.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXTMD_417344?.templateRef;
}
const column_VA_TEXTINPUTBOXMWX_470344 = this.metaData.viewState["QV_6100_21620"].columns.find((col: any) => col.field == 'capital');
if (column_VA_TEXTINPUTBOXMWX_470344 != undefined) {
const tplCell_VA_TEXTINPUTBOXMWX_470344 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXMWX_470344');
column_VA_TEXTINPUTBOXMWX_470344.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXMWX_470344?.templateRef;
const tplEdit_VA_TEXTINPUTBOXMWX_470344 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXMWX_470344');
column_VA_TEXTINPUTBOXMWX_470344.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXMWX_470344?.templateRef;
}
const column_VA_TEXTINPUTBOXNHL_435344 = this.metaData.viewState["QV_6100_21620"].columns.find((col: any) => col.field == 'interestArrear');
if (column_VA_TEXTINPUTBOXNHL_435344 != undefined) {
const tplCell_VA_TEXTINPUTBOXNHL_435344 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXNHL_435344');
column_VA_TEXTINPUTBOXNHL_435344.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXNHL_435344?.templateRef;
const tplEdit_VA_TEXTINPUTBOXNHL_435344 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXNHL_435344');
column_VA_TEXTINPUTBOXNHL_435344.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXNHL_435344?.templateRef;
}
const column_VA_TEXTINPUTBOXWXQ_508344 = this.metaData.viewState["QV_6100_21620"].columns.find((col: any) => col.field == 'otherItems');
if (column_VA_TEXTINPUTBOXWXQ_508344 != undefined) {
const tplCell_VA_TEXTINPUTBOXWXQ_508344 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXWXQ_508344');
column_VA_TEXTINPUTBOXWXQ_508344.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXWXQ_508344?.templateRef;
const tplEdit_VA_TEXTINPUTBOXWXQ_508344 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXWXQ_508344');
column_VA_TEXTINPUTBOXWXQ_508344.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXWXQ_508344?.templateRef;
}
const column_VA_TEXTINPUTBOXJLV_306344 = this.metaData.viewState["QV_6100_21620"].columns.find((col: any) => col.field == 'total');
if (column_VA_TEXTINPUTBOXJLV_306344 != undefined) {
const tplCell_VA_TEXTINPUTBOXJLV_306344 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXJLV_306344');
column_VA_TEXTINPUTBOXJLV_306344.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXJLV_306344?.templateRef;
const tplEdit_VA_TEXTINPUTBOXJLV_306344 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXJLV_306344');
column_VA_TEXTINPUTBOXJLV_306344.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXJLV_306344?.templateRef;
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
SummaryLoanStatus: viewState.T_GENERALINFFHA_866.controls.SummaryLoanStatus as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'QERYS', taskId: 'T_GENERALINFFHA_866', taskVersion: '1.0.0', vcId: 'VC_GENERALIAT_927866', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(false, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/QERYS/T_GENERALINFFHA_866', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_6100_21620', { queryId: 'Q_SUMMARST_6100', entityName: 'SummaryLoanStatus', filter: "", cobisRequestServerConfig: null, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'ASSTS.LBL_ASSTS_ESTADOPST_41961' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
