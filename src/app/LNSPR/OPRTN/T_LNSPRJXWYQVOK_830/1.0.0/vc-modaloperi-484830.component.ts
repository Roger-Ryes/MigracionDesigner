//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-modaloperi-484830.model';
import { ViewState } from './model/vc-modaloperi-484830-view-state';
import { VcModaloperi484830Custom } from './vc-modaloperi-484830.custom';
import { LNSPRService} from 'src/app/LNSPR/service-modules/LNSPR.service';
@Component({
selector: 'cobis-vc-modaloperi-484830',
templateUrl: './vc-modaloperi-484830.component.html'
})
export class VcModaloperi484830Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private lnspr: LNSPRService) {
super(new VcModaloperi484830Custom(designer.cobisCommons,lnspr), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
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
OperationItemsList: viewState.T_LNSPRJXWYQVOK_830.controls.OperationItemsList as FormGroup
};
this.metaData = { moduleId: 'LNSPR', subModuleId: 'OPRTN', taskId: 'T_LNSPRJXWYQVOK_830', taskVersion: '1.0.0', vcId: 'VC_MODALOPERI_484830', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/LNSPR/OPRTN/T_LNSPRJXWYQVOK_830', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ['VA_INSURANCEZHNZGP_890800', { catalogName: 'cu_des_aseguradora', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_INSURANCETYPEEE_321800', { catalogName: 'cu_tipo_seguro', filter: "", cobisRequestServerConfig: null, cache: 0 }], ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['VA_ITEMUCXHLKNWSIV_574800', { queryId: 'Q_CONCPPTM_GI69', entityName: '', filter:"", cobisRequestServerConfig: {'filterType':'none'}, cache: 0 }], ['VA_REFERENCESIEQUP_560800', { queryId: 'Q_REFEEAML_BR93', entityName: '', filter:"", cobisRequestServerConfig: {'filterType':'none'}, cache: 0 }], ['VA_REFERENCEREADSD_344800', { queryId: 'Q_REFEEAML_BR93', entityName: '', filter:"", cobisRequestServerConfig: {'filterType':'none'}, cache: 0 }], ['VA_RANKTRPXWXRXBWJ_371800', { queryId: 'Q_RATEGLSL_WM41', entityName: '', filter:"", cobisRequestServerConfig: {'filterType':'none'}, cache: 0 }], ]), listsValues: new Map<string, ICobisListValuesInfo>([ [ 'VA_PAYMENTMETHODDD_767800',{ data : [ new CobisModelCatalog ( 'P' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_PERIDICAA_15832') ), new CobisModelCatalog ( 'L' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_ENELDESBM_79622') ), new CobisModelCatalog ( 'M' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_MULTAOTOR_43313') ), new CobisModelCatalog ( 'F' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_FINANCIAA_12470') ), new CobisModelCatalog ( 'A' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_ANTICIPAA_77530') ), new CobisModelCatalog ( 'B' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_ANTICIPAA_84559') )] }], [ 'VA_FINANCEDTQRTUFB_342800',{ data : [ new CobisModelCatalog ( 'S' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_SIBZYIGKU_69312') ), new CobisModelCatalog ( 'N' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_NOWLDIIOP_91697') )] }], [ 'VA_SIGNOOZSLFEAGNU_871800',{ data : [ new CobisModelCatalog ( '+' , '+' ), new CobisModelCatalog ( '-' , '-' ), new CobisModelCatalog ( '*' , '*' ), new CobisModelCatalog ( '/' , '/' )] }], [ 'VA_SIGNREADJUSTEEM_203800',{ data : [ new CobisModelCatalog ( '+' , '+' ), new CobisModelCatalog ( '-' , '-' ), new CobisModelCatalog ( '*' , '*' ), new CobisModelCatalog ( '/' , '/' )] }], ]) , label: 'ModalOperationItems' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
