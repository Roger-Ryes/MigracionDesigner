//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-changepayy-935171.model';
import { ViewState } from './model/vc-changepayy-935171-view-state';
import { VcChangepayy935171Custom } from './vc-changepayy-935171.custom';
import { ASSTSService} from 'src/app/ASSTS/service-modules/ASSTS.service';
@Component({
selector: 'cobis-vc-changepayy-935171',
templateUrl: './vc-changepayy-935171.component.html'
})
export class VcChangepayy935171Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private assts: ASSTSService) {
super(new VcChangepayy935171Custom(designer.cobisCommons,assts), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
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
ChangePayDayEntity: viewState.T_ASSTSLFJQNQTJ_171.controls.ChangePayDayEntity as FormGroup
};
this.metaData = { moduleId: 'ASSTS', subModuleId: 'MNTNN', taskId: 'T_ASSTSLFJQNQTJ_171', taskVersion: '1.0.0', vcId: 'VC_CHANGEPAYY_935171', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, false), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/ASSTS/MNTNN/T_ASSTSLFJQNQTJ_171', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ]), listsValues: new Map<string, ICobisListValuesInfo>([ [ 'VA_2009HDDBTRLSCDO_776429',{ data : [ new CobisModelCatalog ( '1' , '1' ), new CobisModelCatalog ( '2' , '2' ), new CobisModelCatalog ( '3' , '3' ), new CobisModelCatalog ( '4' , '4' ), new CobisModelCatalog ( '5' , '5' ), new CobisModelCatalog ( '6' , '6' ), new CobisModelCatalog ( '7' , '7' ), new CobisModelCatalog ( '8' , '8' ), new CobisModelCatalog ( '9' , '9' ), new CobisModelCatalog ( '10' , '10' ), new CobisModelCatalog ( '11' , '11' ), new CobisModelCatalog ( '12' , '12' ), new CobisModelCatalog ( '13' , '13' ), new CobisModelCatalog ( '14' , '14' ), new CobisModelCatalog ( '15' , '15' ), new CobisModelCatalog ( '16' , '16' ), new CobisModelCatalog ( '17' , '17' ), new CobisModelCatalog ( '18' , '18' ), new CobisModelCatalog ( '19' , '19' ), new CobisModelCatalog ( '20' , '20' ), new CobisModelCatalog ( '21' , '21' ), new CobisModelCatalog ( '22' , '22' ), new CobisModelCatalog ( '23' , '23' ), new CobisModelCatalog ( '24' , '24' ), new CobisModelCatalog ( '25' , '25' ), new CobisModelCatalog ( '26' , '26' ), new CobisModelCatalog ( '27' , '27' ), new CobisModelCatalog ( '28' , '28' ), new CobisModelCatalog ( '29' , '29' ), new CobisModelCatalog ( '30' , '30' ), new CobisModelCatalog ( '31' , '31' )] }], [ 'VA_2836UZLPSXFHEDX_271429',{ data : [ new CobisModelCatalog ( 'S' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_SIJWWZUQL_76896') ), new CobisModelCatalog ( 'N' , this.designer.cobisCommons.translate('ASSTS.LBL_ASSTS_NOTNCMKBQ_41776') )] }], ]) , label: 'ChangePayDayForm' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
