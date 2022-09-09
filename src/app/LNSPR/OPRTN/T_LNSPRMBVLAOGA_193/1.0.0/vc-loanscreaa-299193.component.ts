//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-loanscreaa-299193.model';
import { ViewState } from './model/vc-loanscreaa-299193-view-state';
import { VcLoanscreaa299193Custom } from './vc-loanscreaa-299193.custom';
import { LNSPRService} from 'src/app/LNSPR/service-modules/LNSPR.service';
@Component({
selector: 'cobis-vc-loanscreaa-299193',
templateUrl: './vc-loanscreaa-299193.component.html'
})
export class VcLoanscreaa299193Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private lnspr: LNSPRService) {
super(new VcLoanscreaa299193Custom(designer.cobisCommons,lnspr), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_TEXTINPUTBOXZUG_289221 = this.metaData.viewState["QV_YWPR_NOE85"].columns.find((col: any) => col.field == 'role');
if (column_VA_TEXTINPUTBOXZUG_289221 != undefined) {
const tplCell_VA_TEXTINPUTBOXZUG_289221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXZUG_289221');
column_VA_TEXTINPUTBOXZUG_289221.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXZUG_289221?.templateRef;
const tplEdit_VA_TEXTINPUTBOXZUG_289221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXZUG_289221');
column_VA_TEXTINPUTBOXZUG_289221.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXZUG_289221?.templateRef;
}
const column_VA_TEXTINPUTBOXQZW_792221 = this.metaData.viewState["QV_YWPR_NOE85"].columns.find((col: any) => col.field == 'fullName');
if (column_VA_TEXTINPUTBOXQZW_792221 != undefined) {
const tplCell_VA_TEXTINPUTBOXQZW_792221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXQZW_792221');
column_VA_TEXTINPUTBOXQZW_792221.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXQZW_792221?.templateRef;
const tplEdit_VA_TEXTINPUTBOXQZW_792221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXQZW_792221');
column_VA_TEXTINPUTBOXQZW_792221.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXQZW_792221?.templateRef;
}
const column_VA_TEXTINPUTBOXKNN_822221 = this.metaData.viewState["QV_YWPR_NOE85"].columns.find((col: any) => col.field == 'idNumber');
if (column_VA_TEXTINPUTBOXKNN_822221 != undefined) {
const tplCell_VA_TEXTINPUTBOXKNN_822221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXKNN_822221');
column_VA_TEXTINPUTBOXKNN_822221.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXKNN_822221?.templateRef;
const tplEdit_VA_TEXTINPUTBOXKNN_822221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXKNN_822221');
column_VA_TEXTINPUTBOXKNN_822221.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXKNN_822221?.templateRef;
}
const column_VA_TEXTINPUTBOXMWJ_600221 = this.metaData.viewState["QV_YWPR_NOE85"].columns.find((col: any) => col.field == 'code');
if (column_VA_TEXTINPUTBOXMWJ_600221 != undefined) {
const tplCell_VA_TEXTINPUTBOXMWJ_600221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXMWJ_600221');
column_VA_TEXTINPUTBOXMWJ_600221.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXMWJ_600221?.templateRef;
const tplEdit_VA_TEXTINPUTBOXMWJ_600221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXMWJ_600221');
column_VA_TEXTINPUTBOXMWJ_600221.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXMWJ_600221?.templateRef;
}
const column_VA_TEXTINPUTBOXPQA_963221 = this.metaData.viewState["QV_YWPR_NOE85"].columns.find((col: any) => col.field == 'score');
if (column_VA_TEXTINPUTBOXPQA_963221 != undefined) {
const tplCell_VA_TEXTINPUTBOXPQA_963221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXPQA_963221');
column_VA_TEXTINPUTBOXPQA_963221.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXPQA_963221?.templateRef;
const tplEdit_VA_TEXTINPUTBOXPQA_963221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXPQA_963221');
column_VA_TEXTINPUTBOXPQA_963221.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXPQA_963221?.templateRef;
}
const column_VA_TEXTINPUTBOXQYS_536221 = this.metaData.viewState["QV_YWPR_NOE85"].columns.find((col: any) => col.field == 'type');
if (column_VA_TEXTINPUTBOXQYS_536221 != undefined) {
const tplCell_VA_TEXTINPUTBOXQYS_536221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXQYS_536221');
column_VA_TEXTINPUTBOXQYS_536221.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXQYS_536221?.templateRef;
const tplEdit_VA_TEXTINPUTBOXQYS_536221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXQYS_536221');
column_VA_TEXTINPUTBOXQYS_536221.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXQYS_536221?.templateRef;
}
const column_VA_TEXTINPUTBOXARW_788221 = this.metaData.viewState["QV_YWPR_NOE85"].columns.find((col: any) => col.field == 'description');
if (column_VA_TEXTINPUTBOXARW_788221 != undefined) {
const tplCell_VA_TEXTINPUTBOXARW_788221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXARW_788221');
column_VA_TEXTINPUTBOXARW_788221.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXARW_788221?.templateRef;
const tplEdit_VA_TEXTINPUTBOXARW_788221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXARW_788221');
column_VA_TEXTINPUTBOXARW_788221.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXARW_788221?.templateRef;
}
const column_VA_TEXTINPUTBOXGMY_944221 = this.metaData.viewState["QV_VE29_XZB37"].columns.find((col: any) => col.field == 'codParticipants');
if (column_VA_TEXTINPUTBOXGMY_944221 != undefined) {
const tplCell_VA_TEXTINPUTBOXGMY_944221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXGMY_944221');
column_VA_TEXTINPUTBOXGMY_944221.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXGMY_944221?.templateRef;
const tplEdit_VA_TEXTINPUTBOXGMY_944221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXGMY_944221');
column_VA_TEXTINPUTBOXGMY_944221.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXGMY_944221?.templateRef;
}
const column_VA_TEXTINPUTBOXLLS_457221 = this.metaData.viewState["QV_VE29_XZB37"].columns.find((col: any) => col.field == 'nameParticipants');
if (column_VA_TEXTINPUTBOXLLS_457221 != undefined) {
const tplCell_VA_TEXTINPUTBOXLLS_457221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXLLS_457221');
column_VA_TEXTINPUTBOXLLS_457221.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXLLS_457221?.templateRef;
const tplEdit_VA_TEXTINPUTBOXLLS_457221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXLLS_457221');
column_VA_TEXTINPUTBOXLLS_457221.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXLLS_457221?.templateRef;
}
const column_VA_CHECKBOXOAJDOYG_553221 = this.metaData.viewState["QV_VE29_XZB37"].columns.find((col: any) => col.field == 'percentageParticipants');
if (column_VA_CHECKBOXOAJDOYG_553221 != undefined) {
const tplCell_VA_CHECKBOXOAJDOYG_553221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_CHECKBOXOAJDOYG_553221');
column_VA_CHECKBOXOAJDOYG_553221.properties.cellTemplate = tplCell_VA_CHECKBOXOAJDOYG_553221?.templateRef;
const tplEdit_VA_CHECKBOXOAJDOYG_553221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_CHECKBOXOAJDOYG_553221');
column_VA_CHECKBOXOAJDOYG_553221.properties.editTemplate = tplEdit_VA_CHECKBOXOAJDOYG_553221?.templateRef;
}
const column_VA_TEXTINPUTBOXEVS_762221 = this.metaData.viewState["QV_VE29_XZB37"].columns.find((col: any) => col.field == 'roleP');
if (column_VA_TEXTINPUTBOXEVS_762221 != undefined) {
const tplCell_VA_TEXTINPUTBOXEVS_762221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXEVS_762221');
column_VA_TEXTINPUTBOXEVS_762221.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXEVS_762221?.templateRef;
const tplEdit_VA_TEXTINPUTBOXEVS_762221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXEVS_762221');
column_VA_TEXTINPUTBOXEVS_762221.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXEVS_762221?.templateRef;
}
const column_VA_TEXTINPUTBOXBBV_472221 = this.metaData.viewState["QV_VE29_XZB37"].columns.find((col: any) => col.field == 'mail');
if (column_VA_TEXTINPUTBOXBBV_472221 != undefined) {
const tplCell_VA_TEXTINPUTBOXBBV_472221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXBBV_472221');
column_VA_TEXTINPUTBOXBBV_472221.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXBBV_472221?.templateRef;
const tplEdit_VA_TEXTINPUTBOXBBV_472221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXBBV_472221');
column_VA_TEXTINPUTBOXBBV_472221.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXBBV_472221?.templateRef;
}
const column_VA_TEXTINPUTBOXXUQ_742221 = this.metaData.viewState["QV_VE29_XZB37"].columns.find((col: any) => col.field == 'amountParticipants');
if (column_VA_TEXTINPUTBOXXUQ_742221 != undefined) {
const tplCell_VA_TEXTINPUTBOXXUQ_742221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXXUQ_742221');
column_VA_TEXTINPUTBOXXUQ_742221.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXXUQ_742221?.templateRef;
const tplEdit_VA_TEXTINPUTBOXXUQ_742221 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXXUQ_742221');
column_VA_TEXTINPUTBOXXUQ_742221.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXXUQ_742221?.templateRef;
}
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
const column_VA_DIVIDENDJQEBXYL_179198 = this.metaData.viewState["QV_ECPR_JAA30"].columns.find((col: any) => col.field == 'dividend');
if (column_VA_DIVIDENDJQEBXYL_179198 != undefined) {
const tplCell_VA_DIVIDENDJQEBXYL_179198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DIVIDENDJQEBXYL_179198');
column_VA_DIVIDENDJQEBXYL_179198.properties.cellTemplate = tplCell_VA_DIVIDENDJQEBXYL_179198?.templateRef;
const tplEdit_VA_DIVIDENDJQEBXYL_179198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DIVIDENDJQEBXYL_179198');
column_VA_DIVIDENDJQEBXYL_179198.properties.editTemplate = tplEdit_VA_DIVIDENDJQEBXYL_179198?.templateRef;
}
const column_VA_EXPIRATIONDATTE_941198 = this.metaData.viewState["QV_ECPR_JAA30"].columns.find((col: any) => col.field == 'expirationDate');
if (column_VA_EXPIRATIONDATTE_941198 != undefined) {
const tplCell_VA_EXPIRATIONDATTE_941198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_EXPIRATIONDATTE_941198');
column_VA_EXPIRATIONDATTE_941198.properties.cellTemplate = tplCell_VA_EXPIRATIONDATTE_941198?.templateRef;
const tplEdit_VA_EXPIRATIONDATTE_941198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_EXPIRATIONDATTE_941198');
column_VA_EXPIRATIONDATTE_941198.properties.editTemplate = tplEdit_VA_EXPIRATIONDATTE_941198?.templateRef;
}
const column_VA_BALANCECAPITLLL_258198 = this.metaData.viewState["QV_ECPR_JAA30"].columns.find((col: any) => col.field == 'balanceCapital');
if (column_VA_BALANCECAPITLLL_258198 != undefined) {
const tplCell_VA_BALANCECAPITLLL_258198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_BALANCECAPITLLL_258198');
column_VA_BALANCECAPITLLL_258198.properties.cellTemplate = tplCell_VA_BALANCECAPITLLL_258198?.templateRef;
const tplEdit_VA_BALANCECAPITLLL_258198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_BALANCECAPITLLL_258198');
column_VA_BALANCECAPITLLL_258198.properties.editTemplate = tplEdit_VA_BALANCECAPITLLL_258198?.templateRef;
}
const column_VA_DYNAMICFIELD111_201198 = this.metaData.viewState["QV_ECPR_JAA30"].columns.find((col: any) => col.field == 'dynamicField1');
if (column_VA_DYNAMICFIELD111_201198 != undefined) {
const tplCell_VA_DYNAMICFIELD111_201198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DYNAMICFIELD111_201198');
column_VA_DYNAMICFIELD111_201198.properties.cellTemplate = tplCell_VA_DYNAMICFIELD111_201198?.templateRef;
const tplEdit_VA_DYNAMICFIELD111_201198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DYNAMICFIELD111_201198');
column_VA_DYNAMICFIELD111_201198.properties.editTemplate = tplEdit_VA_DYNAMICFIELD111_201198?.templateRef;
}
const column_VA_DYNAMICFIELD222_976198 = this.metaData.viewState["QV_ECPR_JAA30"].columns.find((col: any) => col.field == 'dynamicField2');
if (column_VA_DYNAMICFIELD222_976198 != undefined) {
const tplCell_VA_DYNAMICFIELD222_976198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DYNAMICFIELD222_976198');
column_VA_DYNAMICFIELD222_976198.properties.cellTemplate = tplCell_VA_DYNAMICFIELD222_976198?.templateRef;
const tplEdit_VA_DYNAMICFIELD222_976198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DYNAMICFIELD222_976198');
column_VA_DYNAMICFIELD222_976198.properties.editTemplate = tplEdit_VA_DYNAMICFIELD222_976198?.templateRef;
}
const column_VA_DYNAMICFIELD333_680198 = this.metaData.viewState["QV_ECPR_JAA30"].columns.find((col: any) => col.field == 'dynamicField3');
if (column_VA_DYNAMICFIELD333_680198 != undefined) {
const tplCell_VA_DYNAMICFIELD333_680198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DYNAMICFIELD333_680198');
column_VA_DYNAMICFIELD333_680198.properties.cellTemplate = tplCell_VA_DYNAMICFIELD333_680198?.templateRef;
const tplEdit_VA_DYNAMICFIELD333_680198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DYNAMICFIELD333_680198');
column_VA_DYNAMICFIELD333_680198.properties.editTemplate = tplEdit_VA_DYNAMICFIELD333_680198?.templateRef;
}
const column_VA_DYNAMICFIELD444_619198 = this.metaData.viewState["QV_ECPR_JAA30"].columns.find((col: any) => col.field == 'dynamicField4');
if (column_VA_DYNAMICFIELD444_619198 != undefined) {
const tplCell_VA_DYNAMICFIELD444_619198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DYNAMICFIELD444_619198');
column_VA_DYNAMICFIELD444_619198.properties.cellTemplate = tplCell_VA_DYNAMICFIELD444_619198?.templateRef;
const tplEdit_VA_DYNAMICFIELD444_619198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DYNAMICFIELD444_619198');
column_VA_DYNAMICFIELD444_619198.properties.editTemplate = tplEdit_VA_DYNAMICFIELD444_619198?.templateRef;
}
const column_VA_DYNAMICFIELD555_803198 = this.metaData.viewState["QV_ECPR_JAA30"].columns.find((col: any) => col.field == 'dynamicField5');
if (column_VA_DYNAMICFIELD555_803198 != undefined) {
const tplCell_VA_DYNAMICFIELD555_803198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DYNAMICFIELD555_803198');
column_VA_DYNAMICFIELD555_803198.properties.cellTemplate = tplCell_VA_DYNAMICFIELD555_803198?.templateRef;
const tplEdit_VA_DYNAMICFIELD555_803198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DYNAMICFIELD555_803198');
column_VA_DYNAMICFIELD555_803198.properties.editTemplate = tplEdit_VA_DYNAMICFIELD555_803198?.templateRef;
}
const column_VA_DYNAMICFIELD666_861198 = this.metaData.viewState["QV_ECPR_JAA30"].columns.find((col: any) => col.field == 'dynamicField6');
if (column_VA_DYNAMICFIELD666_861198 != undefined) {
const tplCell_VA_DYNAMICFIELD666_861198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DYNAMICFIELD666_861198');
column_VA_DYNAMICFIELD666_861198.properties.cellTemplate = tplCell_VA_DYNAMICFIELD666_861198?.templateRef;
const tplEdit_VA_DYNAMICFIELD666_861198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DYNAMICFIELD666_861198');
column_VA_DYNAMICFIELD666_861198.properties.editTemplate = tplEdit_VA_DYNAMICFIELD666_861198?.templateRef;
}
const column_VA_DYNAMICFIELD777_256198 = this.metaData.viewState["QV_ECPR_JAA30"].columns.find((col: any) => col.field == 'dynamicField7');
if (column_VA_DYNAMICFIELD777_256198 != undefined) {
const tplCell_VA_DYNAMICFIELD777_256198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DYNAMICFIELD777_256198');
column_VA_DYNAMICFIELD777_256198.properties.cellTemplate = tplCell_VA_DYNAMICFIELD777_256198?.templateRef;
const tplEdit_VA_DYNAMICFIELD777_256198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DYNAMICFIELD777_256198');
column_VA_DYNAMICFIELD777_256198.properties.editTemplate = tplEdit_VA_DYNAMICFIELD777_256198?.templateRef;
}
const column_VA_DYNAMICFIELD888_910198 = this.metaData.viewState["QV_ECPR_JAA30"].columns.find((col: any) => col.field == 'dynamicField8');
if (column_VA_DYNAMICFIELD888_910198 != undefined) {
const tplCell_VA_DYNAMICFIELD888_910198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DYNAMICFIELD888_910198');
column_VA_DYNAMICFIELD888_910198.properties.cellTemplate = tplCell_VA_DYNAMICFIELD888_910198?.templateRef;
const tplEdit_VA_DYNAMICFIELD888_910198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DYNAMICFIELD888_910198');
column_VA_DYNAMICFIELD888_910198.properties.editTemplate = tplEdit_VA_DYNAMICFIELD888_910198?.templateRef;
}
const column_VA_DYNAMICFIELD999_904198 = this.metaData.viewState["QV_ECPR_JAA30"].columns.find((col: any) => col.field == 'dynamicField9');
if (column_VA_DYNAMICFIELD999_904198 != undefined) {
const tplCell_VA_DYNAMICFIELD999_904198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DYNAMICFIELD999_904198');
column_VA_DYNAMICFIELD999_904198.properties.cellTemplate = tplCell_VA_DYNAMICFIELD999_904198?.templateRef;
const tplEdit_VA_DYNAMICFIELD999_904198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DYNAMICFIELD999_904198');
column_VA_DYNAMICFIELD999_904198.properties.editTemplate = tplEdit_VA_DYNAMICFIELD999_904198?.templateRef;
}
const column_VA_DYNAMICFIELD011_387198 = this.metaData.viewState["QV_ECPR_JAA30"].columns.find((col: any) => col.field == 'dynamicField10');
if (column_VA_DYNAMICFIELD011_387198 != undefined) {
const tplCell_VA_DYNAMICFIELD011_387198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DYNAMICFIELD011_387198');
column_VA_DYNAMICFIELD011_387198.properties.cellTemplate = tplCell_VA_DYNAMICFIELD011_387198?.templateRef;
const tplEdit_VA_DYNAMICFIELD011_387198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DYNAMICFIELD011_387198');
column_VA_DYNAMICFIELD011_387198.properties.editTemplate = tplEdit_VA_DYNAMICFIELD011_387198?.templateRef;
}
const column_VA_DYNAMICFIELD111_909198 = this.metaData.viewState["QV_ECPR_JAA30"].columns.find((col: any) => col.field == 'dynamicField11');
if (column_VA_DYNAMICFIELD111_909198 != undefined) {
const tplCell_VA_DYNAMICFIELD111_909198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DYNAMICFIELD111_909198');
column_VA_DYNAMICFIELD111_909198.properties.cellTemplate = tplCell_VA_DYNAMICFIELD111_909198?.templateRef;
const tplEdit_VA_DYNAMICFIELD111_909198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DYNAMICFIELD111_909198');
column_VA_DYNAMICFIELD111_909198.properties.editTemplate = tplEdit_VA_DYNAMICFIELD111_909198?.templateRef;
}
const column_VA_DYNAMICFIELD121_508198 = this.metaData.viewState["QV_ECPR_JAA30"].columns.find((col: any) => col.field == 'dynamicField12');
if (column_VA_DYNAMICFIELD121_508198 != undefined) {
const tplCell_VA_DYNAMICFIELD121_508198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DYNAMICFIELD121_508198');
column_VA_DYNAMICFIELD121_508198.properties.cellTemplate = tplCell_VA_DYNAMICFIELD121_508198?.templateRef;
const tplEdit_VA_DYNAMICFIELD121_508198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DYNAMICFIELD121_508198');
column_VA_DYNAMICFIELD121_508198.properties.editTemplate = tplEdit_VA_DYNAMICFIELD121_508198?.templateRef;
}
const column_VA_DYNAMICFIELD311_753198 = this.metaData.viewState["QV_ECPR_JAA30"].columns.find((col: any) => col.field == 'dynamicField13');
if (column_VA_DYNAMICFIELD311_753198 != undefined) {
const tplCell_VA_DYNAMICFIELD311_753198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DYNAMICFIELD311_753198');
column_VA_DYNAMICFIELD311_753198.properties.cellTemplate = tplCell_VA_DYNAMICFIELD311_753198?.templateRef;
const tplEdit_VA_DYNAMICFIELD311_753198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DYNAMICFIELD311_753198');
column_VA_DYNAMICFIELD311_753198.properties.editTemplate = tplEdit_VA_DYNAMICFIELD311_753198?.templateRef;
}
const column_VA_DYNAMICFIELD411_866198 = this.metaData.viewState["QV_ECPR_JAA30"].columns.find((col: any) => col.field == 'dynamicField14');
if (column_VA_DYNAMICFIELD411_866198 != undefined) {
const tplCell_VA_DYNAMICFIELD411_866198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DYNAMICFIELD411_866198');
column_VA_DYNAMICFIELD411_866198.properties.cellTemplate = tplCell_VA_DYNAMICFIELD411_866198?.templateRef;
const tplEdit_VA_DYNAMICFIELD411_866198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DYNAMICFIELD411_866198');
column_VA_DYNAMICFIELD411_866198.properties.editTemplate = tplEdit_VA_DYNAMICFIELD411_866198?.templateRef;
}
const column_VA_DYNAMICFIELD551_120198 = this.metaData.viewState["QV_ECPR_JAA30"].columns.find((col: any) => col.field == 'dynamicField15');
if (column_VA_DYNAMICFIELD551_120198 != undefined) {
const tplCell_VA_DYNAMICFIELD551_120198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DYNAMICFIELD551_120198');
column_VA_DYNAMICFIELD551_120198.properties.cellTemplate = tplCell_VA_DYNAMICFIELD551_120198?.templateRef;
const tplEdit_VA_DYNAMICFIELD551_120198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DYNAMICFIELD551_120198');
column_VA_DYNAMICFIELD551_120198.properties.editTemplate = tplEdit_VA_DYNAMICFIELD551_120198?.templateRef;
}
const column_VA_DYNAMICFIELD111_346198 = this.metaData.viewState["QV_ECPR_JAA30"].columns.find((col: any) => col.field == 'dynamicField16');
if (column_VA_DYNAMICFIELD111_346198 != undefined) {
const tplCell_VA_DYNAMICFIELD111_346198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DYNAMICFIELD111_346198');
column_VA_DYNAMICFIELD111_346198.properties.cellTemplate = tplCell_VA_DYNAMICFIELD111_346198?.templateRef;
const tplEdit_VA_DYNAMICFIELD111_346198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DYNAMICFIELD111_346198');
column_VA_DYNAMICFIELD111_346198.properties.editTemplate = tplEdit_VA_DYNAMICFIELD111_346198?.templateRef;
}
const column_VA_DYNAMICFIELD777_257198 = this.metaData.viewState["QV_ECPR_JAA30"].columns.find((col: any) => col.field == 'dynamicField17');
if (column_VA_DYNAMICFIELD777_257198 != undefined) {
const tplCell_VA_DYNAMICFIELD777_257198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DYNAMICFIELD777_257198');
column_VA_DYNAMICFIELD777_257198.properties.cellTemplate = tplCell_VA_DYNAMICFIELD777_257198?.templateRef;
const tplEdit_VA_DYNAMICFIELD777_257198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DYNAMICFIELD777_257198');
column_VA_DYNAMICFIELD777_257198.properties.editTemplate = tplEdit_VA_DYNAMICFIELD777_257198?.templateRef;
}
const column_VA_DYNAMICFIELD181_740198 = this.metaData.viewState["QV_ECPR_JAA30"].columns.find((col: any) => col.field == 'dynamicField18');
if (column_VA_DYNAMICFIELD181_740198 != undefined) {
const tplCell_VA_DYNAMICFIELD181_740198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DYNAMICFIELD181_740198');
column_VA_DYNAMICFIELD181_740198.properties.cellTemplate = tplCell_VA_DYNAMICFIELD181_740198?.templateRef;
const tplEdit_VA_DYNAMICFIELD181_740198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DYNAMICFIELD181_740198');
column_VA_DYNAMICFIELD181_740198.properties.editTemplate = tplEdit_VA_DYNAMICFIELD181_740198?.templateRef;
}
const column_VA_DYNAMICFIELD911_217198 = this.metaData.viewState["QV_ECPR_JAA30"].columns.find((col: any) => col.field == 'dynamicField19');
if (column_VA_DYNAMICFIELD911_217198 != undefined) {
const tplCell_VA_DYNAMICFIELD911_217198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DYNAMICFIELD911_217198');
column_VA_DYNAMICFIELD911_217198.properties.cellTemplate = tplCell_VA_DYNAMICFIELD911_217198?.templateRef;
const tplEdit_VA_DYNAMICFIELD911_217198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DYNAMICFIELD911_217198');
column_VA_DYNAMICFIELD911_217198.properties.editTemplate = tplEdit_VA_DYNAMICFIELD911_217198?.templateRef;
}
const column_VA_DYNAMICFIELD000_944198 = this.metaData.viewState["QV_ECPR_JAA30"].columns.find((col: any) => col.field == 'dynamicField20');
if (column_VA_DYNAMICFIELD000_944198 != undefined) {
const tplCell_VA_DYNAMICFIELD000_944198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DYNAMICFIELD000_944198');
column_VA_DYNAMICFIELD000_944198.properties.cellTemplate = tplCell_VA_DYNAMICFIELD000_944198?.templateRef;
const tplEdit_VA_DYNAMICFIELD000_944198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DYNAMICFIELD000_944198');
column_VA_DYNAMICFIELD000_944198.properties.editTemplate = tplEdit_VA_DYNAMICFIELD000_944198?.templateRef;
}
const column_VA_FEEOLAUUHKGPDCB_657198 = this.metaData.viewState["QV_ECPR_JAA30"].columns.find((col: any) => col.field == 'fee');
if (column_VA_FEEOLAUUHKGPDCB_657198 != undefined) {
const tplCell_VA_FEEOLAUUHKGPDCB_657198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_FEEOLAUUHKGPDCB_657198');
column_VA_FEEOLAUUHKGPDCB_657198.properties.cellTemplate = tplCell_VA_FEEOLAUUHKGPDCB_657198?.templateRef;
const tplEdit_VA_FEEOLAUUHKGPDCB_657198 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_FEEOLAUUHKGPDCB_657198');
column_VA_FEEOLAUUHKGPDCB_657198.properties.editTemplate = tplEdit_VA_FEEOLAUUHKGPDCB_657198?.templateRef;
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
OperationCRUDFormEntity: viewState.T_LNSPRMBVLAOGA_193.controls.OperationCRUDFormEntity as FormGroup ,
DebtorEntity: viewState.T_LNSPRMBVLAOGA_193.controls.DebtorEntity as FormGroup ,
OperationEntity: viewState.T_LNSPRMBVLAOGA_193.controls.OperationEntity as FormGroup ,
SyndicatedList: viewState.T_LNSPRMBVLAOGA_193.controls.SyndicatedList as FormGroup ,
OperationItemsList: viewState.T_LNSPRMBVLAOGA_193.controls.OperationItemsList as FormGroup ,
GeneralParametersQuery: viewState.T_LNSPRMBVLAOGA_193.controls.GeneralParametersQuery as FormGroup ,
AmortizationFormEntity: viewState.T_LNSPRMBVLAOGA_193.controls.AmortizationFormEntity as FormGroup ,
AmortizationEntity: viewState.T_LNSPRMBVLAOGA_193.controls.AmortizationEntity as FormGroup
};
this.metaData = { moduleId: 'LNSPR', subModuleId: 'OPRTN', taskId: 'T_LNSPRMBVLAOGA_193', taskVersion: '1.0.0', vcId: 'VC_LOANSCREAA_299193', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, true), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/LNSPR/OPRTN/T_LNSPRMBVLAOGA_193', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ['VA_OFFICIALHKVNOOZ_385221', { filter:"", cobisRequestServerConfig: null, cache: 0 }], ['VA_UBICATIONZGLTDO_878221', { filter:"", cobisRequestServerConfig: null, cache: 0 }], ['VA_TYPEAMORTIZATTN_681198', { filter:"", cobisRequestServerConfig: null, cache: 0 }], ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ['VA_TYPEOPERATIONNN_788221', { catalogName: 'ca_toperacion', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_MONEYWCCBPJYWVL_470221', { catalogName: 'cl_moneda', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_FINANCIALDESINN_226221', { catalogName: 'cr_destino', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_ECONOMICACTITIV_812221', { catalogName: 'cl_actividad_ec', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_OFFICELAHOKRIFT_376221', { catalogName: 'cl_oficina', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_SECTORNYVKRJHJU_797221', { catalogName: 'cc_sector', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_PLAZODESCRIPCNN_983221', { catalogName: 'ca_tdividendo', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_TEXTINPUTBOXKKV_743587', { catalogName: 'cu_des_aseguradora', filter: "", cobisRequestServerConfig: null, cache: 0 , controlGridInfo: { queryViewId: "QV_MC21_OVS27", columnId: "insurance" } }], ['VA_TEXTINPUTBOXVLP_884587', { catalogName: 'cu_tipo_seguro', filter: "", cobisRequestServerConfig: null, cache: 0 , controlGridInfo: { queryViewId: "QV_MC21_OVS27", columnId: "insuranceType" } }], ['VA_9193TCVDUUBRZAN_137309', { catalogName: 'ca_base_tasa_desc', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_TERMTYPEOWIDGEH_595198', { catalogName: 'ca_tdividendo', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_TYPEFEEARBRJCKA_414198', { catalogName: 'ca_tdividendo', filter: "", cobisRequestServerConfig: null, cache: 0 }], ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_YWPR_NOE85', { queryId: 'Q_DEBTORZN_LNSPR', entityName: 'DebtorEntity', filter: "", cobisRequestServerConfig: null, cache: 0, queryMemberParameters:[ ]}], ['QV_VE29_XZB37', { queryId: 'Q_SYNDATCT_WX29', entityName: 'SyndicatedList', filter: "", cobisRequestServerConfig: null, cache: 0, queryMemberParameters:[ ]}], ['QV_MC21_OVS27', { queryId: 'Q_OPERLSST_KU21', entityName: 'OperationItemsList', filter: "", cobisRequestServerConfig: { pageSize :10 }, cache: 0, queryMemberParameters:[ {aliasQueryMember:'banco' } ]}], ['VA_PAYMENTMETHODDD_220309', { queryId: 'Q_APAGOOOO_YV30', entityName: '', filter:"", cobisRequestServerConfig: {'filterType':'none'}, cache: 0 }], ['QV_ECPR_JAA30', { queryId: 'Q_AMORTITI_LNSPR', entityName: 'AmortizationEntity', filter: "", cobisRequestServerConfig: { pageSize :13 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ [ 'VA_TYPESYNDICATEEE_795221',{ data : [ new CobisModelCatalog ( 'A' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_ADMINISOR_58032') ), new CobisModelCatalog ( 'G' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_AGENTEJJZ_36060') )] }], [ 'VA_FINANCEDWVNAAPN_415587',{ data : [ new CobisModelCatalog ( 'S' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_SIBZYIGKU_69312') ), new CobisModelCatalog ( 'N' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_NOWLDIIOP_91697') )] , controlGridInfo: { queryViewId: "QV_MC21_OVS27", columnId: "financed" } }], [ 'VA_ALLOWSRENEWALLL_150309',{ data : [ new CobisModelCatalog ( 'S' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_SIBZYIGKU_69312') ), new CobisModelCatalog ( 'N' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_NOWLDIIOP_91697') )] }], [ 'VA_READJUSTABLELXP_279309',{ data : [ new CobisModelCatalog ( 'S' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_SIBZYIGKU_69312') ), new CobisModelCatalog ( 'N' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_NOWLDIIOP_91697') )] }], [ 'VA_RESTRUCTURINGGG_731309',{ data : [ new CobisModelCatalog ( 'S' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_SIBZYIGKU_69312') ), new CobisModelCatalog ( 'N' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_NOWLDIIOP_91697') )] }], [ 'VA_ACCEPTADDITIYNN_323309',{ data : [ new CobisModelCatalog ( 'S' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_SIBZYIGKU_69312') ), new CobisModelCatalog ( 'N' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_NOWLDIIOP_91697') )] }], [ 'VA_INTERESTPAYMNNE_508309',{ data : [ new CobisModelCatalog ( 'A' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_PAGAINTLD_26849') ), new CobisModelCatalog ( 'P' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_PAGAINTOE_93286') )] }], [ 'VA_PAYFULLFEEVHEVU_441309',{ data : [ new CobisModelCatalog ( 'S' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_SIBZYIGKU_69312') ), new CobisModelCatalog ( 'N' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_NOWLDIIOP_91697') )] }], [ 'VA_KINDPAYMENTDUCW_586309',{ data : [ new CobisModelCatalog ( 'D' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_PAGOSPORC_41308') ), new CobisModelCatalog ( 'N' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_PAGOSPORU_93417') )] }], [ 'VA_CASHPAYMENTSUUG_169309',{ data : [ new CobisModelCatalog ( 'S' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_SIBZYIGKU_69312') ), new CobisModelCatalog ( 'N' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_NOWLDIIOP_91697') )] }], [ 'VA_TYPEPAYMENTNPPY_513309',{ data : [ new CobisModelCatalog ( 'N' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_PAGONORAA_14475') ), new CobisModelCatalog ( 'C' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_PAGOEXTRC_38468') ), new CobisModelCatalog ( 'T' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_PAGOEXTDR_53649') )] }], [ 'VA_PAYMENTDAYEFRJN_549198',{ data : [ new CobisModelCatalog ( '1' , '1' ), new CobisModelCatalog ( '2' , '2' ), new CobisModelCatalog ( '3' , '3' ), new CobisModelCatalog ( '4' , '4' ), new CobisModelCatalog ( '5' , '5' ), new CobisModelCatalog ( '6' , '6' ), new CobisModelCatalog ( '7' , '7' ), new CobisModelCatalog ( '8' , '8' ), new CobisModelCatalog ( '9' , '9' ), new CobisModelCatalog ( '10' , '10' ), new CobisModelCatalog ( '11' , '11' ), new CobisModelCatalog ( '12' , '12' ), new CobisModelCatalog ( '13' , '13' ), new CobisModelCatalog ( '14' , '14' ), new CobisModelCatalog ( '15' , '15' ), new CobisModelCatalog ( '16' , '16' ), new CobisModelCatalog ( '17' , '17' ), new CobisModelCatalog ( '18' , '18' ), new CobisModelCatalog ( '19' , '19' ), new CobisModelCatalog ( '20' , '20' ), new CobisModelCatalog ( '21' , '21' ), new CobisModelCatalog ( '22' , '22' ), new CobisModelCatalog ( '23' , '23' ), new CobisModelCatalog ( '24' , '24' ), new CobisModelCatalog ( '25' , '25' ), new CobisModelCatalog ( '26' , '26' ), new CobisModelCatalog ( '27' , '27' ), new CobisModelCatalog ( '28' , '28' ), new CobisModelCatalog ( '29' , '29' ), new CobisModelCatalog ( '30' , '30' ), new CobisModelCatalog ( '31' , '31' )] }], [ 'VA_MONTHGRACEFIJFA_429198',{ data : [ new CobisModelCatalog ( '0' , '0' ), new CobisModelCatalog ( '1' , '1' ), new CobisModelCatalog ( '2' , '2' ), new CobisModelCatalog ( '3' , '3' ), new CobisModelCatalog ( '4' , '4' ), new CobisModelCatalog ( '5' , '5' ), new CobisModelCatalog ( '6' , '6' ), new CobisModelCatalog ( '7' , '7' ), new CobisModelCatalog ( '8' , '8' ), new CobisModelCatalog ( '9' , '9' ), new CobisModelCatalog ( '10' , '10' ), new CobisModelCatalog ( '11' , '11' ), new CobisModelCatalog ( '12' , '12' )] }], [ 'VA_BASEINTERESTAAC_534198',{ data : [ new CobisModelCatalog ( 'E' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_COMERCIAA_32939') ), new CobisModelCatalog ( 'R' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_REALFZFVS_38401') )] }], [ 'VA_TYPEAMORTIZATTN_681198',{ data : [ new CobisModelCatalog ( 'ALEMANA' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_ALEMANAEM_98576') ), new CobisModelCatalog ( 'FRANCESA' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_FRANCESAA_95030') ), new CobisModelCatalog ( 'MANUAL' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_MANUALKIA_87586') ), new CobisModelCatalog ( 'AGREGADA' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_AGREGADAA_98521') )] }], [ 'VA_AVOIDHOLIDAYSSS_789198',{ data : [ new CobisModelCatalog ( 'A' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_DAHBILAEN_76009') ), new CobisModelCatalog ( 'P' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_DAHBILPRO_36728') ), new CobisModelCatalog ( 'N' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_NOEVITAOI_93253') )] }], [ 'VA_TYPEGRACEBHAAVJ_350198',{ data : [ new CobisModelCatalog ( 'S' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_ENCUOTART_85995') ), new CobisModelCatalog ( 'N' , this.designer.cobisCommons.translate('LNSPR.LBL_LNSPR_ENPRIMETR_79834') )] }], ]) , label: 'LNSPR.LBL_LNSPR_CREACINTM_36009' }; this.breadcrumbService.getRoutes(this.metaData);
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
