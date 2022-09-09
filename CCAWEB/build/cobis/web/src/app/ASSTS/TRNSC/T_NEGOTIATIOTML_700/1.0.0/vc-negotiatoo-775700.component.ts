//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-negotiatoo-775700.model';
import { ViewState } from './model/vc-negotiatoo-775700-view-state';
import { VcNegotiatoo775700Custom } from './vc-negotiatoo-775700.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-negotiatoo-775700',
templateUrl: './vc-negotiatoo-775700.component.html'
})
export class VcNegotiatoo775700Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcNegotiatoo775700Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
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
Negotiation: viewState.T_NEGOTIATIOTML_700.controls.Negotiation as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'TRNSC', taskId: 'T_NEGOTIATIOTML_700', taskVersion: '1.0.0', vcId: 'VC_NEGOTIATOO_775700', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/TRNSC/T_NEGOTIATIOTML_700', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ]), listsValues: new Map<string, ICobisListValuesInfo>([ [ 'VA_TEXTINPUTBOXHOE_149225',{ data : [ new CobisModelCatalog ( 'D' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_CUOTAJJEW_83973') ), new CobisModelCatalog ( 'C' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_RUBROFKGQ_42963') )] }], [ 'VA_TEXTINPUTBOXNOR_530225',{ data : [ new CobisModelCatalog ( 'A' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_ACUMULAOO_17499') ), new CobisModelCatalog ( 'P' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_PROYECTOO_27146') ), new CobisModelCatalog ( 'E' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_VALORPREE_94597') )] }], [ 'VA_5608AAOSYWATGEZ_226225',{ data : [ new CobisModelCatalog ( 'T' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_REDUCCIIT_79324') ), new CobisModelCatalog ( 'C' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_REDUCCITC_53463') ), new CobisModelCatalog ( 'N' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_PAGONORLM_62028') )] }], ]) , label: 'NegotiationPaymentsModal' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
