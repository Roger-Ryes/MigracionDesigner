//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-ratesmodal-789953.model';
import { ViewState } from './model/vc-ratesmodal-789953-view-state';
import { VcRatesmodal789953Custom } from './vc-ratesmodal-789953.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-ratesmodal-789953',
templateUrl: './vc-ratesmodal-789953.component.html'
})
export class VcRatesmodal789953Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcRatesmodal789953Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
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
Rates: viewState.T_RATESMODALKUB_953.controls.Rates as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'MNTNN', taskId: 'T_RATESMODALKUB_953', taskVersion: '1.0.0', vcId: 'VC_RATESMODAL_789953', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/MNTNN/T_RATESMODALKUB_953', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ['VA_REFERENCEVALEEE_875778', { filter:"", cobisRequestServerConfig: null, cache: 0 }], ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ['VA_PORTFOLIOCLASSS_404778', { catalogName: 'cc_sector', filter: "", cobisRequestServerConfig: null, cache: 0 }], ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ]), listsValues: new Map<string, ICobisListValuesInfo>([ [ 'VA_TYPEPOINTSQGJRC_416778',{ data : [ new CobisModelCatalog ( 'B' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_BASEJYNHV_69879') ), new CobisModelCatalog ( 'E' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_EFECTIVAA_13523') )] }], [ 'VA_NUMBERDECIMALSL_248778',{ data : [ new CobisModelCatalog ( '0' , '0 ' ), new CobisModelCatalog ( '1' , '1 ' ), new CobisModelCatalog ( '2' , '2 ' ), new CobisModelCatalog ( '3' , '3 ' ), new CobisModelCatalog ( '4' , '4 ' ), new CobisModelCatalog ( '5' , '5 ' ), new CobisModelCatalog ( '6' , '6' )] }], [ 'VA_SIGNMINPDDMQZST_831778',{ data : [ new CobisModelCatalog ( '+' , '+ ' ), new CobisModelCatalog ( '-' , '- ' ), new CobisModelCatalog ( '*' , '* ' ), new CobisModelCatalog ( '/' , '/' )] }], [ 'VA_SIGNMINKUSGFZGN_277778',{ data : [ new CobisModelCatalog ( '+' , '+ ' ), new CobisModelCatalog ( '-' , '- ' ), new CobisModelCatalog ( '*' , '* ' ), new CobisModelCatalog ( '/' , '/' )] }], [ 'VA_SIGNMAXCQWMGYQB_195778',{ data : [ new CobisModelCatalog ( '+' , '+ ' ), new CobisModelCatalog ( '-' , '- ' ), new CobisModelCatalog ( '*' , '* ' ), new CobisModelCatalog ( '/' , '/' )] }], ]) , label: 'RatesModal' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
