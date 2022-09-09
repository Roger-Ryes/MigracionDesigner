//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-paymentsou-371604.model';
import { ViewState } from './model/vc-paymentsou-371604-view-state';
import { VcPaymentsou371604Custom } from './vc-paymentsou-371604.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-paymentsou-371604',
templateUrl: './vc-paymentsou-371604.component.html'
})
export class VcPaymentsou371604Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcPaymentsou371604Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXNNP_119816 = this.metaData.viewState["QV_YE76_DAK33"].columns.find((col: any) => col.field == 'etiqueta');
if (column_VA_TEXTINPUTBOXNNP_119816 != undefined) {
const tplCell_VA_TEXTINPUTBOXNNP_119816 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXNNP_119816');
column_VA_TEXTINPUTBOXNNP_119816.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXNNP_119816?.templateRef;
const tplEdit_VA_TEXTINPUTBOXNNP_119816 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXNNP_119816');
column_VA_TEXTINPUTBOXNNP_119816.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXNNP_119816?.templateRef;
}
const column_VA_TEXTINPUTBOXLGR_859816 = this.metaData.viewState["QV_YE76_DAK33"].columns.find((col: any) => col.field == 'codigo');
if (column_VA_TEXTINPUTBOXLGR_859816 != undefined) {
const tplCell_VA_TEXTINPUTBOXLGR_859816 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXLGR_859816');
column_VA_TEXTINPUTBOXLGR_859816.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXLGR_859816?.templateRef;
const tplEdit_VA_TEXTINPUTBOXLGR_859816 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXLGR_859816');
column_VA_TEXTINPUTBOXLGR_859816.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXLGR_859816?.templateRef;
}
const column_VA_TEXTINPUTBOXTET_747816 = this.metaData.viewState["QV_YE76_DAK33"].columns.find((col: any) => col.field == 'descripcion');
if (column_VA_TEXTINPUTBOXTET_747816 != undefined) {
const tplCell_VA_TEXTINPUTBOXTET_747816 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXTET_747816');
column_VA_TEXTINPUTBOXTET_747816.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXTET_747816?.templateRef;
const tplEdit_VA_TEXTINPUTBOXTET_747816 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXTET_747816');
column_VA_TEXTINPUTBOXTET_747816.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXTET_747816?.templateRef;
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
PaymentListGroupClient: viewState.T_ASSTSIOIYHVWE_604.controls.PaymentListGroupClient as FormGroup ,
LoanPaymentGroup: viewState.T_ASSTSIOIYHVWE_604.controls.LoanPaymentGroup as FormGroup ,
PaymentGroup: viewState.T_ASSTSIOIYHVWE_604.controls.PaymentGroup as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'TRNSC', taskId: 'T_ASSTSIOIYHVWE_604', taskVersion: '1.0.0', vcId: 'VC_PAYMENTSOU_371604', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(false, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/TRNSC/T_ASSTSIOIYHVWE_604', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ['VA_1MVJRDIJAIBEKBY_880816', { filter:"", cobisRequestServerConfig: null, cache: 0 }], ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ['VA_3NOEHOUBCWRSQSM_770816', { catalogName: 'cl_moneda', filter: "", cobisRequestServerConfig: null, cache: 0 }], ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_YE76_DAK33', { queryId: 'Q_PAYMGPOE_BC76', entityName: 'PaymentListGroupClient', filter: "", cobisRequestServerConfig: null, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ ]) , label: 'PaymentsFormGroup' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
