//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-loanslinss-962737.model';
import { ViewState } from './model/vc-loanslinss-962737-view-state';
import { VcLoanslinss962737Custom } from './vc-loanslinss-962737.custom';
import { LNSPRService} from 'src/app/LNSPR/service-modules/LNSPR.service';
@Component({
selector: 'cobis-vc-loanslinss-962737',
templateUrl: './vc-loanslinss-962737.component.html'
})
export class VcLoanslinss962737Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private lnspr: LNSPRService) {
super(new VcLoanslinss962737Custom(designer.cobisCommons,lnspr), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXIES_988383 = this.metaData.viewState["QV_OS86_OQI18"].columns.find((col: any) => col.field == 'sequential');
if (column_VA_TEXTINPUTBOXIES_988383 != undefined) {
const tplCell_VA_TEXTINPUTBOXIES_988383 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXIES_988383');
column_VA_TEXTINPUTBOXIES_988383.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXIES_988383?.templateRef;
const tplEdit_VA_TEXTINPUTBOXIES_988383 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXIES_988383');
column_VA_TEXTINPUTBOXIES_988383.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXIES_988383?.templateRef;
}
const column_VA_TEXTINPUTBOXCKC_418383 = this.metaData.viewState["QV_OS86_OQI18"].columns.find((col: any) => col.field == 'lineCod');
if (column_VA_TEXTINPUTBOXCKC_418383 != undefined) {
const tplCell_VA_TEXTINPUTBOXCKC_418383 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXCKC_418383');
column_VA_TEXTINPUTBOXCKC_418383.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXCKC_418383?.templateRef;
const tplEdit_VA_TEXTINPUTBOXCKC_418383 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXCKC_418383');
column_VA_TEXTINPUTBOXCKC_418383.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXCKC_418383?.templateRef;
}
const column_VA_TEXTINPUTBOXUZJ_528383 = this.metaData.viewState["QV_OS86_OQI18"].columns.find((col: any) => col.field == 'nature');
if (column_VA_TEXTINPUTBOXUZJ_528383 != undefined) {
const tplCell_VA_TEXTINPUTBOXUZJ_528383 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXUZJ_528383');
column_VA_TEXTINPUTBOXUZJ_528383.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXUZJ_528383?.templateRef;
const tplEdit_VA_TEXTINPUTBOXUZJ_528383 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXUZJ_528383');
column_VA_TEXTINPUTBOXUZJ_528383.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXUZJ_528383?.templateRef;
}
const column_VA_TEXTINPUTBOXGXX_701383 = this.metaData.viewState["QV_OS86_OQI18"].columns.find((col: any) => col.field == 'coinDesc');
if (column_VA_TEXTINPUTBOXGXX_701383 != undefined) {
const tplCell_VA_TEXTINPUTBOXGXX_701383 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXGXX_701383');
column_VA_TEXTINPUTBOXGXX_701383.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXGXX_701383?.templateRef;
const tplEdit_VA_TEXTINPUTBOXGXX_701383 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXGXX_701383');
column_VA_TEXTINPUTBOXGXX_701383.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXGXX_701383?.templateRef;
}
const column_VA_TEXTINPUTBOXQJF_429383 = this.metaData.viewState["QV_OS86_OQI18"].columns.find((col: any) => col.field == 'amount');
if (column_VA_TEXTINPUTBOXQJF_429383 != undefined) {
const tplCell_VA_TEXTINPUTBOXQJF_429383 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXQJF_429383');
column_VA_TEXTINPUTBOXQJF_429383.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXQJF_429383?.templateRef;
const tplEdit_VA_TEXTINPUTBOXQJF_429383 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXQJF_429383');
column_VA_TEXTINPUTBOXQJF_429383.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXQJF_429383?.templateRef;
}
const column_VA_TEXTINPUTBOXDDQ_431383 = this.metaData.viewState["QV_OS86_OQI18"].columns.find((col: any) => col.field == 'officeCod');
if (column_VA_TEXTINPUTBOXDDQ_431383 != undefined) {
const tplCell_VA_TEXTINPUTBOXDDQ_431383 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXDDQ_431383');
column_VA_TEXTINPUTBOXDDQ_431383.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXDDQ_431383?.templateRef;
const tplEdit_VA_TEXTINPUTBOXDDQ_431383 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXDDQ_431383');
column_VA_TEXTINPUTBOXDDQ_431383.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXDDQ_431383?.templateRef;
}
const column_VA_TEXTINPUTBOXXUZ_208383 = this.metaData.viewState["QV_OS86_OQI18"].columns.find((col: any) => col.field == 'nameClient');
if (column_VA_TEXTINPUTBOXXUZ_208383 != undefined) {
const tplCell_VA_TEXTINPUTBOXXUZ_208383 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXXUZ_208383');
column_VA_TEXTINPUTBOXXUZ_208383.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXXUZ_208383?.templateRef;
const tplEdit_VA_TEXTINPUTBOXXUZ_208383 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXXUZ_208383');
column_VA_TEXTINPUTBOXXUZ_208383.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXXUZ_208383?.templateRef;
}
const column_VA_TEXTINPUTBOXSQY_266383 = this.metaData.viewState["QV_OS86_OQI18"].columns.find((col: any) => col.field == 'nameGroup');
if (column_VA_TEXTINPUTBOXSQY_266383 != undefined) {
const tplCell_VA_TEXTINPUTBOXSQY_266383 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXSQY_266383');
column_VA_TEXTINPUTBOXSQY_266383.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXSQY_266383?.templateRef;
const tplEdit_VA_TEXTINPUTBOXSQY_266383 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXSQY_266383');
column_VA_TEXTINPUTBOXSQY_266383.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXSQY_266383?.templateRef;
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
LoansLines: viewState.T_LNSPRFYCKEVVP_737.controls.LoansLines as FormGroup ,
LoansLinesList: viewState.T_LNSPRFYCKEVVP_737.controls.LoansLinesList as FormGroup
};
this.metaData = { moduleId: 'LNSPR', subModuleId: 'OPRTN', taskId: 'T_LNSPRFYCKEVVP_737', taskVersion: '1.0.0', vcId: 'VC_LOANSLINSS_962737', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, true), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/LNSPR/OPRTN/T_LNSPRFYCKEVVP_737', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ['VA_OFICINANRBOTWYT_467383', { catalogName: 'cl_oficina', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_MONEDAXWNJSQNUF_555383', { catalogName: 'cl_moneda', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_ESTADOZXSPUMQFP_238383', { catalogName: 'cr_estado_linea', filter: "", cobisRequestServerConfig: null, cache: 0 }], ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_OS86_OQI18', { queryId: 'Q_LOANSISS_EV86', entityName: 'LoansLinesList', filter: "", cobisRequestServerConfig: { pageSize :10 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ [ 'VA_NATURALEZAEFWDR_861383',{ data : [ new CobisModelCatalog ( 'A' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_ACTIVAUMH_23966') ), new CobisModelCatalog ( 'P' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_PASIVANZC_61402') )] }], ]) , label: 'LNSPR.LBL_LNSPR_BSQUEDAME_20219' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
