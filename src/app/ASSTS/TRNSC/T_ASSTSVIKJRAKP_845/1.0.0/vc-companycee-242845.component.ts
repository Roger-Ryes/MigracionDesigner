//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-companycee-242845.model';
import { ViewState } from './model/vc-companycee-242845-view-state';
import { VcCompanycee242845Custom } from './vc-companycee-242845.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-companycee-242845',
templateUrl: './vc-companycee-242845.component.html'
})
export class VcCompanycee242845Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcCompanycee242845Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
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
Company: viewState.T_ASSTSVIKJRAKP_845.controls.Company as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'TRNSC', taskId: 'T_ASSTSVIKJRAKP_845', taskVersion: '1.0.0', vcId: 'VC_COMPANYCEE_242845', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, true), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/TRNSC/T_ASSTSVIKJRAKP_845', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ['VA_STATEENISMIMLSA_521399', { catalogName: 'ca_estados_reg', filter: "", cobisRequestServerConfig: null, cache: 0 }], ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['VA_PAYMENTUVUDGASL_450399', { queryId: 'Q_LISTOOGA_DP31', entityName: '', filter:"", cobisRequestServerConfig: {'filterType':'none'}, cache: 0 }], ]), listsValues: new Map<string, ICobisListValuesInfo>([ [ 'VA_PAYMENTSERVICCC_447399',{ data : [ new CobisModelCatalog ( 'T' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_TOTALBPNF_51557') ), new CobisModelCatalog ( 'P' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_PERIODICO_36191') )] }], [ 'VA_PAYMENTFREQUNCN_755399',{ data : [ new CobisModelCatalog ( 'Q' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_QUINCENAA_57333') ), new CobisModelCatalog ( 'M' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_MENSUALFQ_11744') )] }], [ 'VA_AGREEMENTZHTVHP_162399',{ data : [ new CobisModelCatalog ( 'S' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_SIJWWZUQL_76896') ), new CobisModelCatalog ( 'N' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_NOTNCMKBQ_41776') )] }], ]) , label: 'CompanyCreateForm' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
