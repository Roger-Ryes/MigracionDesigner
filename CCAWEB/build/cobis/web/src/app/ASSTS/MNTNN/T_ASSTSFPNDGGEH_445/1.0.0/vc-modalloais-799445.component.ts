//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-modalloais-799445.model';
import { ViewState } from './model/vc-modalloais-799445-view-state';
import { VcModalloais799445Custom } from './vc-modalloais-799445.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-modalloais-799445',
templateUrl: './vc-modalloais-799445.component.html'
})
export class VcModalloais799445Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcModalloais799445Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
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
LoanItemsList: viewState.T_ASSTSFPNDGGEH_445.controls.LoanItemsList as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'MNTNN', taskId: 'T_ASSTSFPNDGGEH_445', taskVersion: '1.0.0', vcId: 'VC_MODALLOAIS_799445', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/MNTNN/T_ASSTSFPNDGGEH_445', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ['VA_INSURANCERNDVZP_758980', { catalogName: 'cu_des_aseguradora', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_INSURANCETYPEEE_633980', { catalogName: 'cu_tipo_seguro', filter: "", cobisRequestServerConfig: null, cache: 0 }], ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['VA_ITEMJIJOVTYJBHS_939980', { queryId: 'Q_CONCTITE_DD65', entityName: '', filter:"", cobisRequestServerConfig: {'filterType':'none'}, cache: 0 }], ['VA_GRACEBSRSLHPWZD_368980', { queryId: 'Q_REFEEAML_BR93', entityName: '', filter:"", cobisRequestServerConfig: {'filterType':'none'}, cache: 0 }], ['VA_REFERENCEREAUUU_417980', { queryId: 'Q_REFEEAML_BR93', entityName: '', filter:"", cobisRequestServerConfig: {'filterType':'none'}, cache: 0 }], ['VA_RANKGUJYXFFOUPY_234980', { queryId: 'Q_RATEGLSL_WM41', entityName: '', filter:"", cobisRequestServerConfig: {'filterType':'none'}, cache: 0 }], ]), listsValues: new Map<string, ICobisListValuesInfo>([ [ 'VA_PAYMENTMETHODDD_900980',{ data : [ new CobisModelCatalog ( 'P' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_PERIDICAA_14004') ), new CobisModelCatalog ( 'L' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_ENELDESEO_77264') ), new CobisModelCatalog ( 'M' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_MULTAOTRR_71146') ), new CobisModelCatalog ( 'F' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_FINANCIDD_35713') ), new CobisModelCatalog ( 'A' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_ANTICIPDD_31369') ), new CobisModelCatalog ( 'B' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_ANTICIPTD_37731') )] }], [ 'VA_FINANCEDJTEBFXT_682980',{ data : [ new CobisModelCatalog ( 'S' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_SIJWWZUQL_76896') ), new CobisModelCatalog ( 'N' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_NOTNCMKBQ_41776') )] }], [ 'VA_SIGNOWUDEEEWFGZ_407980',{ data : [ new CobisModelCatalog ( '+' , '+' ), new CobisModelCatalog ( '-' , '-' ), new CobisModelCatalog ( '*' , '*' ), new CobisModelCatalog ( '/' , '/' )] }], [ 'VA_SIGNREADJUSTETE_706980',{ data : [ new CobisModelCatalog ( '+' , '+' ), new CobisModelCatalog ( '-' , '-' ), new CobisModelCatalog ( '*' , '*' ), new CobisModelCatalog ( '/' , '/' )] }], ]) , label: 'ModalLoanItemsForm' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
