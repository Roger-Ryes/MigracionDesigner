//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerWithHeaderComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-projectiiu-405244.model';
import { ViewState } from './model/vc-projectiiu-405244-view-state';
import { VcProjectiiu405244Custom } from './vc-projectiiu-405244.custom';
import { header_HD_HEADERLSO_968 as headerJsonFile } from '../../../patterns/header_HD_HEADERLSO_968';
import { Actions_HD_HEADERLSO_968} from '../../../patterns/Actions_HD_HEADERLSO_968';
import { HD_HEADERLSO_968_Custom } from '../../../patterns/HD_HEADERLSO_968.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-projectiiu-405244',
templateUrl: './vc-projectiiu-405244.component.html'
})
export class VcProjectiiu405244Component extends CobisDesignerWithHeaderComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcProjectiiu405244Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute, new HD_HEADERLSO_968_Custom(), headerJsonFile, new Actions_HD_HEADERLSO_968());
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
Loan: viewState.T_PROJECTIONNQI_244.controls.Loan as FormGroup ,
ProjectionQuota: viewState.T_PROJECTIONNQI_244.controls.ProjectionQuota as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'MNTNN', taskId: 'T_PROJECTIONNQI_244', taskVersion: '1.0.0', vcId: 'VC_PROJECTIIU_405244', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/MNTNN/T_PROJECTIONNQI_244', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ]), listsValues: new Map<string, ICobisListValuesInfo>([ [ 'VA_TIPOUWNWJMGVYCI_648517',{ data : [ new CobisModelCatalog ( 'S' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_PAGAINTPP_73390') ), new CobisModelCatalog ( 'N' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_PAGAINTLC_16002') )] }], ]) , label: 'ViewContainerBase' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params, true);
});
super.inicializar();
};
}
