//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-loanlinens-928556.model';
import { ViewState } from './model/vc-loanlinens-928556-view-state';
import { VcLoanlinens928556Custom } from './vc-loanlinens-928556.custom';
import { LNSPRService} from 'src/app/LNSPR/service-modules/LNSPR.service';
@Component({
selector: 'cobis-vc-loanlinens-928556',
templateUrl: './vc-loanlinens-928556.component.html'
})
export class VcLoanlinens928556Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private lnspr: LNSPRService) {
super(new VcLoanlinens928556Custom(designer.cobisCommons,lnspr), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
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
LoanLinesCreation: viewState.T_LNSPRXLZJGUMH_556.controls.LoanLinesCreation as FormGroup
};
this.metaData = { moduleId: 'LNSPR', subModuleId: 'OPRTN', taskId: 'T_LNSPRXLZJGUMH_556', taskVersion: '1.0.0', vcId: 'VC_LOANLINENS_928556', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, true), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/LNSPR/OPRTN/T_LNSPRXLZJGUMH_556', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ['VA_OFFICIALWHTPNAJ_913412', { filter:"", cobisRequestServerConfig: {'filterType':'none'}, cache: 0 }], ['VA_UBICATIONVMLBHG_987412', { filter:"", cobisRequestServerConfig: {'filterType':'none'}, cache: 0 }], ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ['VA_ESTADOOBXCIHITT_296412', { catalogName: 'cr_estado_linea', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_OFICINASKKBEPJX_241412', { catalogName: 'cl_oficina', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_MONEDADESCEXVAJ_622412', { catalogName: 'cl_moneda', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_SECTORZLUFUQKJE_186412', { catalogName: 'cc_sector', filter: "", cobisRequestServerConfig: null, cache: 0 }], ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ]), listsValues: new Map<string, ICobisListValuesInfo>([ [ 'VA_NATURALEZAOPFBV_807412',{ data : [ new CobisModelCatalog ( 'A' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_ACTIVAUMH_23966') ), new CobisModelCatalog ( 'P' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_PASIVANZC_61402') )] }], [ 'VA_ROTATIVAEYDZXHU_984412',{ data : [ new CobisModelCatalog ( 'S' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_SIBZYIGKU_69312') ), new CobisModelCatalog ( 'N' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_NOWLDIIOP_91697') )] }], ]) , label: 'LoanLinesCreation' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
