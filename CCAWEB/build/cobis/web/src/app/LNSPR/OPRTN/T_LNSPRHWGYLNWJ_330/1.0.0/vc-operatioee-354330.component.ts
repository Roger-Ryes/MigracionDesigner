//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-operatioee-354330.model';
import { ViewState } from './model/vc-operatioee-354330-view-state';
import { VcOperatioee354330Custom } from './vc-operatioee-354330.custom';
import { LNSPRService} from 'src/app/LNSPR/service-modules/LNSPR.service';
@Component({
selector: 'cobis-vc-operatioee-354330',
templateUrl: './vc-operatioee-354330.component.html'
})
export class VcOperatioee354330Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private lnspr: LNSPRService) {
super(new VcOperatioee354330Custom(designer.cobisCommons,lnspr), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_ITEMWXVWWWSCMKV_983587 = this.metaData.viewState["QV_MC21_OVS27"].columns.find((col: any) => col.field == 'item');
if (column_VA_ITEMWXVWWWSCMKV_983587 != undefined) {
const tplCell_VA_ITEMWXVWWWSCMKV_983587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_ITEMWXVWWWSCMKV_983587');
column_VA_ITEMWXVWWWSCMKV_983587.properties.cellTemplate = tplCell_VA_ITEMWXVWWWSCMKV_983587?.templateRef;
const tplEdit_VA_ITEMWXVWWWSCMKV_983587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_ITEMWXVWWWSCMKV_983587');
column_VA_ITEMWXVWWWSCMKV_983587.properties.editTemplate = tplEdit_VA_ITEMWXVWWWSCMKV_983587?.templateRef;
}
const column_VA_DESCRIPTIONRKNO_269587 = this.metaData.viewState["QV_MC21_OVS27"].columns.find((col: any) => col.field == 'description');
if (column_VA_DESCRIPTIONRKNO_269587 != undefined) {
const tplCell_VA_DESCRIPTIONRKNO_269587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DESCRIPTIONRKNO_269587');
column_VA_DESCRIPTIONRKNO_269587.properties.cellTemplate = tplCell_VA_DESCRIPTIONRKNO_269587?.templateRef;
const tplEdit_VA_DESCRIPTIONRKNO_269587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DESCRIPTIONRKNO_269587');
column_VA_DESCRIPTIONRKNO_269587.properties.editTemplate = tplEdit_VA_DESCRIPTIONRKNO_269587?.templateRef;
}
const column_VA_TYPEITEMJIPMXHQ_437587 = this.metaData.viewState["QV_MC21_OVS27"].columns.find((col: any) => col.field == 'typeItem');
if (column_VA_TYPEITEMJIPMXHQ_437587 != undefined) {
const tplCell_VA_TYPEITEMJIPMXHQ_437587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TYPEITEMJIPMXHQ_437587');
column_VA_TYPEITEMJIPMXHQ_437587.properties.cellTemplate = tplCell_VA_TYPEITEMJIPMXHQ_437587?.templateRef;
const tplEdit_VA_TYPEITEMJIPMXHQ_437587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TYPEITEMJIPMXHQ_437587');
column_VA_TYPEITEMJIPMXHQ_437587.properties.editTemplate = tplEdit_VA_TYPEITEMJIPMXHQ_437587?.templateRef;
}
const column_VA_PAYMENTMETHODDD_439587 = this.metaData.viewState["QV_MC21_OVS27"].columns.find((col: any) => col.field == 'paymentMethod');
if (column_VA_PAYMENTMETHODDD_439587 != undefined) {
const tplCell_VA_PAYMENTMETHODDD_439587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_PAYMENTMETHODDD_439587');
column_VA_PAYMENTMETHODDD_439587.properties.cellTemplate = tplCell_VA_PAYMENTMETHODDD_439587?.templateRef;
const tplEdit_VA_PAYMENTMETHODDD_439587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_PAYMENTMETHODDD_439587');
column_VA_PAYMENTMETHODDD_439587.properties.editTemplate = tplEdit_VA_PAYMENTMETHODDD_439587?.templateRef;
}
const column_VA_SIGNOPVGZZIPUAD_330587 = this.metaData.viewState["QV_MC21_OVS27"].columns.find((col: any) => col.field == 'signo');
if (column_VA_SIGNOPVGZZIPUAD_330587 != undefined) {
const tplCell_VA_SIGNOPVGZZIPUAD_330587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_SIGNOPVGZZIPUAD_330587');
column_VA_SIGNOPVGZZIPUAD_330587.properties.cellTemplate = tplCell_VA_SIGNOPVGZZIPUAD_330587?.templateRef;
const tplEdit_VA_SIGNOPVGZZIPUAD_330587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_SIGNOPVGZZIPUAD_330587');
column_VA_SIGNOPVGZZIPUAD_330587.properties.editTemplate = tplEdit_VA_SIGNOPVGZZIPUAD_330587?.templateRef;
}
const column_VA_PRIORITYKZVVIRF_388587 = this.metaData.viewState["QV_MC21_OVS27"].columns.find((col: any) => col.field == 'priority');
if (column_VA_PRIORITYKZVVIRF_388587 != undefined) {
const tplCell_VA_PRIORITYKZVVIRF_388587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_PRIORITYKZVVIRF_388587');
column_VA_PRIORITYKZVVIRF_388587.properties.cellTemplate = tplCell_VA_PRIORITYKZVVIRF_388587?.templateRef;
const tplEdit_VA_PRIORITYKZVVIRF_388587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_PRIORITYKZVVIRF_388587');
column_VA_PRIORITYKZVVIRF_388587.properties.editTemplate = tplEdit_VA_PRIORITYKZVVIRF_388587?.templateRef;
}
const column_VA_FACTORFVQAPPLTX_853587 = this.metaData.viewState["QV_MC21_OVS27"].columns.find((col: any) => col.field == 'factor');
if (column_VA_FACTORFVQAPPLTX_853587 != undefined) {
const tplCell_VA_FACTORFVQAPPLTX_853587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_FACTORFVQAPPLTX_853587');
column_VA_FACTORFVQAPPLTX_853587.properties.cellTemplate = tplCell_VA_FACTORFVQAPPLTX_853587?.templateRef;
const tplEdit_VA_FACTORFVQAPPLTX_853587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_FACTORFVQAPPLTX_853587');
column_VA_FACTORFVQAPPLTX_853587.properties.editTemplate = tplEdit_VA_FACTORFVQAPPLTX_853587?.templateRef;
}
const column_VA_REFERENCEGBROYB_738587 = this.metaData.viewState["QV_MC21_OVS27"].columns.find((col: any) => col.field == 'reference');
if (column_VA_REFERENCEGBROYB_738587 != undefined) {
const tplCell_VA_REFERENCEGBROYB_738587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_REFERENCEGBROYB_738587');
column_VA_REFERENCEGBROYB_738587.properties.cellTemplate = tplCell_VA_REFERENCEGBROYB_738587?.templateRef;
const tplEdit_VA_REFERENCEGBROYB_738587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_REFERENCEGBROYB_738587');
column_VA_REFERENCEGBROYB_738587.properties.editTemplate = tplEdit_VA_REFERENCEGBROYB_738587?.templateRef;
}
const column_VA_SIGNREADJUSTNEN_335587 = this.metaData.viewState["QV_MC21_OVS27"].columns.find((col: any) => col.field == 'signReadjustment');
if (column_VA_SIGNREADJUSTNEN_335587 != undefined) {
const tplCell_VA_SIGNREADJUSTNEN_335587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_SIGNREADJUSTNEN_335587');
column_VA_SIGNREADJUSTNEN_335587.properties.cellTemplate = tplCell_VA_SIGNREADJUSTNEN_335587?.templateRef;
const tplEdit_VA_SIGNREADJUSTNEN_335587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_SIGNREADJUSTNEN_335587');
column_VA_SIGNREADJUSTNEN_335587.properties.editTemplate = tplEdit_VA_SIGNREADJUSTNEN_335587?.templateRef;
}
const column_VA_REFERENCEREANET_690587 = this.metaData.viewState["QV_MC21_OVS27"].columns.find((col: any) => col.field == 'referenceReadjustment');
if (column_VA_REFERENCEREANET_690587 != undefined) {
const tplCell_VA_REFERENCEREANET_690587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_REFERENCEREANET_690587');
column_VA_REFERENCEREANET_690587.properties.cellTemplate = tplCell_VA_REFERENCEREANET_690587?.templateRef;
const tplEdit_VA_REFERENCEREANET_690587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_REFERENCEREANET_690587');
column_VA_REFERENCEREANET_690587.properties.editTemplate = tplEdit_VA_REFERENCEREANET_690587?.templateRef;
}
const column_VA_FACTORREADJUTET_483587 = this.metaData.viewState["QV_MC21_OVS27"].columns.find((col: any) => col.field == 'factorReadjustment');
if (column_VA_FACTORREADJUTET_483587 != undefined) {
const tplCell_VA_FACTORREADJUTET_483587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_FACTORREADJUTET_483587');
column_VA_FACTORREADJUTET_483587.properties.cellTemplate = tplCell_VA_FACTORREADJUTET_483587?.templateRef;
const tplEdit_VA_FACTORREADJUTET_483587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_FACTORREADJUTET_483587');
column_VA_FACTORREADJUTET_483587.properties.editTemplate = tplEdit_VA_FACTORREADJUTET_483587?.templateRef;
}
const column_VA_CALCULATIONBASA_240587 = this.metaData.viewState["QV_MC21_OVS27"].columns.find((col: any) => col.field == 'calculationBase');
if (column_VA_CALCULATIONBASA_240587 != undefined) {
const tplCell_VA_CALCULATIONBASA_240587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_CALCULATIONBASA_240587');
column_VA_CALCULATIONBASA_240587.properties.cellTemplate = tplCell_VA_CALCULATIONBASA_240587?.templateRef;
const tplEdit_VA_CALCULATIONBASA_240587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_CALCULATIONBASA_240587');
column_VA_CALCULATIONBASA_240587.properties.editTemplate = tplEdit_VA_CALCULATIONBASA_240587?.templateRef;
}
const column_VA_AMOUNTJGMPZXMXY_754587 = this.metaData.viewState["QV_MC21_OVS27"].columns.find((col: any) => col.field == 'amount');
if (column_VA_AMOUNTJGMPZXMXY_754587 != undefined) {
const tplCell_VA_AMOUNTJGMPZXMXY_754587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_AMOUNTJGMPZXMXY_754587');
column_VA_AMOUNTJGMPZXMXY_754587.properties.cellTemplate = tplCell_VA_AMOUNTJGMPZXMXY_754587?.templateRef;
const tplEdit_VA_AMOUNTJGMPZXMXY_754587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_AMOUNTJGMPZXMXY_754587');
column_VA_AMOUNTJGMPZXMXY_754587.properties.editTemplate = tplEdit_VA_AMOUNTJGMPZXMXY_754587?.templateRef;
}
const column_VA_PERCENTAGEJLTCZ_260587 = this.metaData.viewState["QV_MC21_OVS27"].columns.find((col: any) => col.field == 'percentage');
if (column_VA_PERCENTAGEJLTCZ_260587 != undefined) {
const tplCell_VA_PERCENTAGEJLTCZ_260587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_PERCENTAGEJLTCZ_260587');
column_VA_PERCENTAGEJLTCZ_260587.properties.cellTemplate = tplCell_VA_PERCENTAGEJLTCZ_260587?.templateRef;
const tplEdit_VA_PERCENTAGEJLTCZ_260587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_PERCENTAGEJLTCZ_260587');
column_VA_PERCENTAGEJLTCZ_260587.properties.editTemplate = tplEdit_VA_PERCENTAGEJLTCZ_260587?.templateRef;
}
const column_VA_FINANCEDWVNAAPN_415587 = this.metaData.viewState["QV_MC21_OVS27"].columns.find((col: any) => col.field == 'financed');
if (column_VA_FINANCEDWVNAAPN_415587 != undefined) {
const tplCell_VA_FINANCEDWVNAAPN_415587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_FINANCEDWVNAAPN_415587');
column_VA_FINANCEDWVNAAPN_415587.properties.cellTemplate = tplCell_VA_FINANCEDWVNAAPN_415587?.templateRef;
const tplEdit_VA_FINANCEDWVNAAPN_415587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_FINANCEDWVNAAPN_415587');
column_VA_FINANCEDWVNAAPN_415587.properties.editTemplate = tplEdit_VA_FINANCEDWVNAAPN_415587?.templateRef;
}
const column_VA_MINRATEJNRPYQJS_276587 = this.metaData.viewState["QV_MC21_OVS27"].columns.find((col: any) => col.field == 'minRate');
if (column_VA_MINRATEJNRPYQJS_276587 != undefined) {
const tplCell_VA_MINRATEJNRPYQJS_276587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_MINRATEJNRPYQJS_276587');
column_VA_MINRATEJNRPYQJS_276587.properties.cellTemplate = tplCell_VA_MINRATEJNRPYQJS_276587?.templateRef;
const tplEdit_VA_MINRATEJNRPYQJS_276587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_MINRATEJNRPYQJS_276587');
column_VA_MINRATEJNRPYQJS_276587.properties.editTemplate = tplEdit_VA_MINRATEJNRPYQJS_276587?.templateRef;
}
const column_VA_MAXRATENSHCMIGD_796587 = this.metaData.viewState["QV_MC21_OVS27"].columns.find((col: any) => col.field == 'maxRate');
if (column_VA_MAXRATENSHCMIGD_796587 != undefined) {
const tplCell_VA_MAXRATENSHCMIGD_796587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_MAXRATENSHCMIGD_796587');
column_VA_MAXRATENSHCMIGD_796587.properties.cellTemplate = tplCell_VA_MAXRATENSHCMIGD_796587?.templateRef;
const tplEdit_VA_MAXRATENSHCMIGD_796587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_MAXRATENSHCMIGD_796587');
column_VA_MAXRATENSHCMIGD_796587.properties.editTemplate = tplEdit_VA_MAXRATENSHCMIGD_796587?.templateRef;
}
const column_VA_TEXTINPUTBOXNAY_879587 = this.metaData.viewState["QV_MC21_OVS27"].columns.find((col: any) => col.field == 'associate');
if (column_VA_TEXTINPUTBOXNAY_879587 != undefined) {
const tplCell_VA_TEXTINPUTBOXNAY_879587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXNAY_879587');
column_VA_TEXTINPUTBOXNAY_879587.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXNAY_879587?.templateRef;
const tplEdit_VA_TEXTINPUTBOXNAY_879587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXNAY_879587');
column_VA_TEXTINPUTBOXNAY_879587.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXNAY_879587?.templateRef;
}
const column_VA_TEXTINPUTBOXXQV_567587 = this.metaData.viewState["QV_MC21_OVS27"].columns.find((col: any) => col.field == 'associateValue');
if (column_VA_TEXTINPUTBOXXQV_567587 != undefined) {
const tplCell_VA_TEXTINPUTBOXXQV_567587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXXQV_567587');
column_VA_TEXTINPUTBOXXQV_567587.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXXQV_567587?.templateRef;
const tplEdit_VA_TEXTINPUTBOXXQV_567587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXXQV_567587');
column_VA_TEXTINPUTBOXXQV_567587.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXXQV_567587?.templateRef;
}
const column_VA_TEXTINPUTBOXKKV_743587 = this.metaData.viewState["QV_MC21_OVS27"].columns.find((col: any) => col.field == 'insurance');
if (column_VA_TEXTINPUTBOXKKV_743587 != undefined) {
const tplCell_VA_TEXTINPUTBOXKKV_743587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXKKV_743587');
column_VA_TEXTINPUTBOXKKV_743587.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXKKV_743587?.templateRef;
const tplEdit_VA_TEXTINPUTBOXKKV_743587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXKKV_743587');
column_VA_TEXTINPUTBOXKKV_743587.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXKKV_743587?.templateRef;
}
const column_VA_TEXTINPUTBOXVLP_884587 = this.metaData.viewState["QV_MC21_OVS27"].columns.find((col: any) => col.field == 'insuranceType');
if (column_VA_TEXTINPUTBOXVLP_884587 != undefined) {
const tplCell_VA_TEXTINPUTBOXVLP_884587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXVLP_884587');
column_VA_TEXTINPUTBOXVLP_884587.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXVLP_884587?.templateRef;
const tplEdit_VA_TEXTINPUTBOXVLP_884587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXVLP_884587');
column_VA_TEXTINPUTBOXVLP_884587.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXVLP_884587?.templateRef;
}
const column_VA_TEXTINPUTBOXAEM_387587 = this.metaData.viewState["QV_MC21_OVS27"].columns.find((col: any) => col.field == 'rank');
if (column_VA_TEXTINPUTBOXAEM_387587 != undefined) {
const tplCell_VA_TEXTINPUTBOXAEM_387587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXAEM_387587');
column_VA_TEXTINPUTBOXAEM_387587.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXAEM_387587?.templateRef;
const tplEdit_VA_TEXTINPUTBOXAEM_387587 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXAEM_387587');
column_VA_TEXTINPUTBOXAEM_387587.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXAEM_387587?.templateRef;
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
OperationItemsList: viewState.T_LNSPRHWGYLNWJ_330.controls.OperationItemsList as FormGroup
};
this.metaData = { moduleId: 'LNSPR', subModuleId: 'OPRTN', taskId: 'T_LNSPRHWGYLNWJ_330', taskVersion: '1.0.0', vcId: 'VC_OPERATIOEE_354330', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, true), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/LNSPR/OPRTN/T_LNSPRHWGYLNWJ_330', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ['VA_TEXTINPUTBOXKKV_743587', { catalogName: 'cu_des_aseguradora', filter: "", cobisRequestServerConfig: null, cache: 0 , controlGridInfo: { queryViewId: "QV_MC21_OVS27", columnId: "insurance" } }], ['VA_TEXTINPUTBOXVLP_884587', { catalogName: 'cu_tipo_seguro', filter: "", cobisRequestServerConfig: null, cache: 0 , controlGridInfo: { queryViewId: "QV_MC21_OVS27", columnId: "insuranceType" } }], ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_MC21_OVS27', { queryId: 'Q_OPERLSST_KU21', entityName: 'OperationItemsList', filter: "", cobisRequestServerConfig: { pageSize :10 }, cache: 0, queryMemberParameters:[ {aliasQueryMember:'banco' } ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ [ 'VA_FINANCEDWVNAAPN_415587',{ data : [ new CobisModelCatalog ( 'S' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_SIBZYIGKU_69312') ), new CobisModelCatalog ( 'N' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_NOWLDIIOP_91697') )] , controlGridInfo: { queryViewId: "QV_MC21_OVS27", columnId: "financed" } }], ]) , label: 'OperationItems' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
beforeOpenGridDialogQV_MC21_OVS27(event: any) {
this.beforeOpenGridDialog(event, {
hasBeforeOpenDialogEvent: false,
hasAfterCloseDialogEvent: false,
moduleId: "LNSPR",
subModuleId: "OPRTN",
taskId: "T_LNSPRJXWYQVOK_830",
taskVersion: "1.0.0",
viewContainerId: "VC_MODALOPERI_484830",
title: 'LNSPR.LBL_LNSPR_RUBROFBVM_52414'
,size: 'md'
});
};
}
