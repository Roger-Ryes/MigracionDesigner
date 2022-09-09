//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022


import { Component, OnInit, TemplateRef, AfterViewInit, ChangeDetectorRef, Renderer2, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CobisDesignerService, CobisModelPageInfoEvents, ICobisLoadCatalogInfo, ICobisCatalogCobisInfo, ICobisQueryInfo, ICobisListValuesInfo, CobisModelCatalog, CobisDesignerComponent, CobisDesignerBreadcrumbService} from 'cobis-designer';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from "@angular/router";
import { Model } from './model/vc-loansearch-100921.model';
import { ViewState } from './model/vc-loansearch-100921-view-state';
import { VcLoansearch100921Custom } from './vc-loansearch-100921.custom';
import { LNSPRService} from 'src/app/LNSPR/service-modules/LNSPR.service';
@Component({
selector: 'cobis-vc-loansearch-100921',
templateUrl: './vc-loansearch-100921.component.html'
})
export class VcLoansearch100921Component extends CobisDesignerComponent implements OnInit, AfterViewInit, AfterContentChecked {
constructor(
public designer: CobisDesignerService,
public breadcrumbService: CobisDesignerBreadcrumbService,
public formBuilder: FormBuilder,
public translate: TranslateService,
renderer: Renderer2,
public activatedRoute: ActivatedRoute,
public changeDetector: ChangeDetectorRef,
private lnspr: LNSPRService) {
super(new VcLoansearch100921Custom(designer.cobisCommons,lnspr), designer,breadcrumbService, formBuilder, translate, renderer, activatedRoute);
}
ngOnInit(): void {
this.inicializar();
super.ngOnInit();
}
ngAfterViewInit() {
super.ngAfterViewInit();
const column_VA_READJDATEDUBRMY_599423 = this.metaData.viewState["QV_PG40_VCD65"].columns.find((col: any) => col.field == 'readjDate');
if (column_VA_READJDATEDUBRMY_599423 != undefined) {
const tplCell_VA_READJDATEDUBRMY_599423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_READJDATEDUBRMY_599423');
column_VA_READJDATEDUBRMY_599423.properties.cellTemplate = tplCell_VA_READJDATEDUBRMY_599423?.templateRef;
const tplEdit_VA_READJDATEDUBRMY_599423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_READJDATEDUBRMY_599423');
column_VA_READJDATEDUBRMY_599423.properties.editTemplate = tplEdit_VA_READJDATEDUBRMY_599423?.templateRef;
}
const column_VA_OPERATIONWBWFDW_554423 = this.metaData.viewState["QV_PG40_VCD65"].columns.find((col: any) => col.field == 'operation');
if (column_VA_OPERATIONWBWFDW_554423 != undefined) {
const tplCell_VA_OPERATIONWBWFDW_554423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_OPERATIONWBWFDW_554423');
column_VA_OPERATIONWBWFDW_554423.properties.cellTemplate = tplCell_VA_OPERATIONWBWFDW_554423?.templateRef;
const tplEdit_VA_OPERATIONWBWFDW_554423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_OPERATIONWBWFDW_554423');
column_VA_OPERATIONWBWFDW_554423.properties.editTemplate = tplEdit_VA_OPERATIONWBWFDW_554423?.templateRef;
}
const column_VA_CLIENTDRURGMIBT_221423 = this.metaData.viewState["QV_PG40_VCD65"].columns.find((col: any) => col.field == 'client');
if (column_VA_CLIENTDRURGMIBT_221423 != undefined) {
const tplCell_VA_CLIENTDRURGMIBT_221423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_CLIENTDRURGMIBT_221423');
column_VA_CLIENTDRURGMIBT_221423.properties.cellTemplate = tplCell_VA_CLIENTDRURGMIBT_221423?.templateRef;
const tplEdit_VA_CLIENTDRURGMIBT_221423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_CLIENTDRURGMIBT_221423');
column_VA_CLIENTDRURGMIBT_221423.properties.editTemplate = tplEdit_VA_CLIENTDRURGMIBT_221423?.templateRef;
}
const column_VA_REFERENCIALFBOE_516423 = this.metaData.viewState["QV_PG40_VCD65"].columns.find((col: any) => col.field == 'referencial');
if (column_VA_REFERENCIALFBOE_516423 != undefined) {
const tplCell_VA_REFERENCIALFBOE_516423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_REFERENCIALFBOE_516423');
column_VA_REFERENCIALFBOE_516423.properties.cellTemplate = tplCell_VA_REFERENCIALFBOE_516423?.templateRef;
const tplEdit_VA_REFERENCIALFBOE_516423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_REFERENCIALFBOE_516423');
column_VA_REFERENCIALFBOE_516423.properties.editTemplate = tplEdit_VA_REFERENCIALFBOE_516423?.templateRef;
}
const column_VA_SIGNHCAEEHGEZFU_341423 = this.metaData.viewState["QV_PG40_VCD65"].columns.find((col: any) => col.field == 'sign');
if (column_VA_SIGNHCAEEHGEZFU_341423 != undefined) {
const tplCell_VA_SIGNHCAEEHGEZFU_341423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_SIGNHCAEEHGEZFU_341423');
column_VA_SIGNHCAEEHGEZFU_341423.properties.cellTemplate = tplCell_VA_SIGNHCAEEHGEZFU_341423?.templateRef;
const tplEdit_VA_SIGNHCAEEHGEZFU_341423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_SIGNHCAEEHGEZFU_341423');
column_VA_SIGNHCAEEHGEZFU_341423.properties.editTemplate = tplEdit_VA_SIGNHCAEEHGEZFU_341423?.templateRef;
}
const column_VA_FACTORQMDATIIWI_708423 = this.metaData.viewState["QV_PG40_VCD65"].columns.find((col: any) => col.field == 'factor');
if (column_VA_FACTORQMDATIIWI_708423 != undefined) {
const tplCell_VA_FACTORQMDATIIWI_708423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_FACTORQMDATIIWI_708423');
column_VA_FACTORQMDATIIWI_708423.properties.cellTemplate = tplCell_VA_FACTORQMDATIIWI_708423?.templateRef;
const tplEdit_VA_FACTORQMDATIIWI_708423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_FACTORQMDATIIWI_708423');
column_VA_FACTORQMDATIIWI_708423.properties.editTemplate = tplEdit_VA_FACTORQMDATIIWI_708423?.templateRef;
}
const column_VA_PERCENTAGEDNCBC_389423 = this.metaData.viewState["QV_PG40_VCD65"].columns.find((col: any) => col.field == 'percentage');
if (column_VA_PERCENTAGEDNCBC_389423 != undefined) {
const tplCell_VA_PERCENTAGEDNCBC_389423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_PERCENTAGEDNCBC_389423');
column_VA_PERCENTAGEDNCBC_389423.properties.cellTemplate = tplCell_VA_PERCENTAGEDNCBC_389423?.templateRef;
const tplEdit_VA_PERCENTAGEDNCBC_389423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_PERCENTAGEDNCBC_389423');
column_VA_PERCENTAGEDNCBC_389423.properties.editTemplate = tplEdit_VA_PERCENTAGEDNCBC_389423?.templateRef;
}
const column_VA_SPECIALADJUSTTT_888423 = this.metaData.viewState["QV_PG40_VCD65"].columns.find((col: any) => col.field == 'specialAdjust');
if (column_VA_SPECIALADJUSTTT_888423 != undefined) {
const tplCell_VA_SPECIALADJUSTTT_888423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_SPECIALADJUSTTT_888423');
column_VA_SPECIALADJUSTTT_888423.properties.cellTemplate = tplCell_VA_SPECIALADJUSTTT_888423?.templateRef;
const tplEdit_VA_SPECIALADJUSTTT_888423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_SPECIALADJUSTTT_888423');
column_VA_SPECIALADJUSTTT_888423.properties.editTemplate = tplEdit_VA_SPECIALADJUSTTT_888423?.templateRef;
}
const column_VA_DESOPERATIONPET_303423 = this.metaData.viewState["QV_EF50_UVK53"].columns.find((col: any) => col.field == 'desOperationType');
if (column_VA_DESOPERATIONPET_303423 != undefined) {
const tplCell_VA_DESOPERATIONPET_303423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DESOPERATIONPET_303423');
column_VA_DESOPERATIONPET_303423.properties.cellTemplate = tplCell_VA_DESOPERATIONPET_303423?.templateRef;
const tplEdit_VA_DESOPERATIONPET_303423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DESOPERATIONPET_303423');
column_VA_DESOPERATIONPET_303423.properties.editTemplate = tplEdit_VA_DESOPERATIONPET_303423?.templateRef;
}
const column_VA_LOANBANKIDXGAED_699423 = this.metaData.viewState["QV_EF50_UVK53"].columns.find((col: any) => col.field == 'loanBankID');
if (column_VA_LOANBANKIDXGAED_699423 != undefined) {
const tplCell_VA_LOANBANKIDXGAED_699423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_LOANBANKIDXGAED_699423');
column_VA_LOANBANKIDXGAED_699423.properties.cellTemplate = tplCell_VA_LOANBANKIDXGAED_699423?.templateRef;
const tplEdit_VA_LOANBANKIDXGAED_699423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_LOANBANKIDXGAED_699423');
column_VA_LOANBANKIDXGAED_699423.properties.editTemplate = tplEdit_VA_LOANBANKIDXGAED_699423?.templateRef;
}
const column_VA_CLIENTCODEKFARH_334423 = this.metaData.viewState["QV_EF50_UVK53"].columns.find((col: any) => col.field == 'clientCode');
if (column_VA_CLIENTCODEKFARH_334423 != undefined) {
const tplCell_VA_CLIENTCODEKFARH_334423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_CLIENTCODEKFARH_334423');
column_VA_CLIENTCODEKFARH_334423.properties.cellTemplate = tplCell_VA_CLIENTCODEKFARH_334423?.templateRef;
const tplEdit_VA_CLIENTCODEKFARH_334423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_CLIENTCODEKFARH_334423');
column_VA_CLIENTCODEKFARH_334423.properties.editTemplate = tplEdit_VA_CLIENTCODEKFARH_334423?.templateRef;
}
const column_VA_CLIENTCNBTMRZFQ_816423 = this.metaData.viewState["QV_EF50_UVK53"].columns.find((col: any) => col.field == 'client');
if (column_VA_CLIENTCNBTMRZFQ_816423 != undefined) {
const tplCell_VA_CLIENTCNBTMRZFQ_816423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_CLIENTCNBTMRZFQ_816423');
column_VA_CLIENTCNBTMRZFQ_816423.properties.cellTemplate = tplCell_VA_CLIENTCNBTMRZFQ_816423?.templateRef;
const tplEdit_VA_CLIENTCNBTMRZFQ_816423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_CLIENTCNBTMRZFQ_816423');
column_VA_CLIENTCNBTMRZFQ_816423.properties.editTemplate = tplEdit_VA_CLIENTCNBTMRZFQ_816423?.templateRef;
}
const column_VA_AMOUNTOMLDDIZJA_910423 = this.metaData.viewState["QV_EF50_UVK53"].columns.find((col: any) => col.field == 'amount');
if (column_VA_AMOUNTOMLDDIZJA_910423 != undefined) {
const tplCell_VA_AMOUNTOMLDDIZJA_910423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_AMOUNTOMLDDIZJA_910423');
column_VA_AMOUNTOMLDDIZJA_910423.properties.cellTemplate = tplCell_VA_AMOUNTOMLDDIZJA_910423?.templateRef;
const tplEdit_VA_AMOUNTOMLDDIZJA_910423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_AMOUNTOMLDDIZJA_910423');
column_VA_AMOUNTOMLDDIZJA_910423.properties.editTemplate = tplEdit_VA_AMOUNTOMLDDIZJA_910423?.templateRef;
}
const column_VA_STATECMEFWCTNQD_519423 = this.metaData.viewState["QV_EF50_UVK53"].columns.find((col: any) => col.field == 'state');
if (column_VA_STATECMEFWCTNQD_519423 != undefined) {
const tplCell_VA_STATECMEFWCTNQD_519423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_STATECMEFWCTNQD_519423');
column_VA_STATECMEFWCTNQD_519423.properties.cellTemplate = tplCell_VA_STATECMEFWCTNQD_519423?.templateRef;
const tplEdit_VA_STATECMEFWCTNQD_519423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_STATECMEFWCTNQD_519423');
column_VA_STATECMEFWCTNQD_519423.properties.editTemplate = tplEdit_VA_STATECMEFWCTNQD_519423?.templateRef;
}
const column_VA_EXPIRATIONDAEET_350423 = this.metaData.viewState["QV_EF50_UVK53"].columns.find((col: any) => col.field == 'expirationDate');
if (column_VA_EXPIRATIONDAEET_350423 != undefined) {
const tplCell_VA_EXPIRATIONDAEET_350423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_EXPIRATIONDAEET_350423');
column_VA_EXPIRATIONDAEET_350423.properties.cellTemplate = tplCell_VA_EXPIRATIONDAEET_350423?.templateRef;
const tplEdit_VA_EXPIRATIONDAEET_350423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_EXPIRATIONDAEET_350423');
column_VA_EXPIRATIONDAEET_350423.properties.editTemplate = tplEdit_VA_EXPIRATIONDAEET_350423?.templateRef;
}
const column_VA_CURRENCYUOUYUTG_117423 = this.metaData.viewState["QV_EF50_UVK53"].columns.find((col: any) => col.field == 'currency');
if (column_VA_CURRENCYUOUYUTG_117423 != undefined) {
const tplCell_VA_CURRENCYUOUYUTG_117423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_CURRENCYUOUYUTG_117423');
column_VA_CURRENCYUOUYUTG_117423.properties.cellTemplate = tplCell_VA_CURRENCYUOUYUTG_117423?.templateRef;
const tplEdit_VA_CURRENCYUOUYUTG_117423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_CURRENCYUOUYUTG_117423');
column_VA_CURRENCYUOUYUTG_117423.properties.editTemplate = tplEdit_VA_CURRENCYUOUYUTG_117423?.templateRef;
}
const column_VA_DISBURSEMENTAED_963423 = this.metaData.viewState["QV_EF50_UVK53"].columns.find((col: any) => col.field == 'disbursementDate');
if (column_VA_DISBURSEMENTAED_963423 != undefined) {
const tplCell_VA_DISBURSEMENTAED_963423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DISBURSEMENTAED_963423');
column_VA_DISBURSEMENTAED_963423.properties.cellTemplate = tplCell_VA_DISBURSEMENTAED_963423?.templateRef;
const tplEdit_VA_DISBURSEMENTAED_963423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DISBURSEMENTAED_963423');
column_VA_DISBURSEMENTAED_963423.properties.editTemplate = tplEdit_VA_DISBURSEMENTAED_963423?.templateRef;
}
const column_VA_NUMPROCEDUREUXI_497423 = this.metaData.viewState["QV_EF50_UVK53"].columns.find((col: any) => col.field == 'numProcedure');
if (column_VA_NUMPROCEDUREUXI_497423 != undefined) {
const tplCell_VA_NUMPROCEDUREUXI_497423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_NUMPROCEDUREUXI_497423');
column_VA_NUMPROCEDUREUXI_497423.properties.cellTemplate = tplCell_VA_NUMPROCEDUREUXI_497423?.templateRef;
const tplEdit_VA_NUMPROCEDUREUXI_497423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_NUMPROCEDUREUXI_497423');
column_VA_NUMPROCEDUREUXI_497423.properties.editTemplate = tplEdit_VA_NUMPROCEDUREUXI_497423?.templateRef;
}
const column_VA_TEXTINPUTBOXDXE_141423 = this.metaData.viewState["QV_EF50_UVK53"].columns.find((col: any) => col.field == 'descriptionMistake');
if (column_VA_TEXTINPUTBOXDXE_141423 != undefined) {
const tplCell_VA_TEXTINPUTBOXDXE_141423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXDXE_141423');
column_VA_TEXTINPUTBOXDXE_141423.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXDXE_141423?.templateRef;
const tplEdit_VA_TEXTINPUTBOXDXE_141423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXDXE_141423');
column_VA_TEXTINPUTBOXDXE_141423.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXDXE_141423?.templateRef;
}
const column_VA_TEXTINPUTBOXNAP_479423 = this.metaData.viewState["QV_PY15_EUR25"].columns.find((col: any) => col.field == 'operation');
if (column_VA_TEXTINPUTBOXNAP_479423 != undefined) {
const tplCell_VA_TEXTINPUTBOXNAP_479423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXNAP_479423');
column_VA_TEXTINPUTBOXNAP_479423.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXNAP_479423?.templateRef;
const tplEdit_VA_TEXTINPUTBOXNAP_479423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXNAP_479423');
column_VA_TEXTINPUTBOXNAP_479423.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXNAP_479423?.templateRef;
}
const column_VA_TEXTINPUTBOXHUJ_355423 = this.metaData.viewState["QV_PY15_EUR25"].columns.find((col: any) => col.field == 'currency');
if (column_VA_TEXTINPUTBOXHUJ_355423 != undefined) {
const tplCell_VA_TEXTINPUTBOXHUJ_355423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXHUJ_355423');
column_VA_TEXTINPUTBOXHUJ_355423.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXHUJ_355423?.templateRef;
const tplEdit_VA_TEXTINPUTBOXHUJ_355423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXHUJ_355423');
column_VA_TEXTINPUTBOXHUJ_355423.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXHUJ_355423?.templateRef;
}
const column_VA_TEXTINPUTBOXIZW_235423 = this.metaData.viewState["QV_PY15_EUR25"].columns.find((col: any) => col.field == 'amountPaid');
if (column_VA_TEXTINPUTBOXIZW_235423 != undefined) {
const tplCell_VA_TEXTINPUTBOXIZW_235423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXIZW_235423');
column_VA_TEXTINPUTBOXIZW_235423.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXIZW_235423?.templateRef;
const tplEdit_VA_TEXTINPUTBOXIZW_235423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXIZW_235423');
column_VA_TEXTINPUTBOXIZW_235423.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXIZW_235423?.templateRef;
}
const column_VA_TEXTINPUTBOXLND_495423 = this.metaData.viewState["QV_PY15_EUR25"].columns.find((col: any) => col.field == 'heading');
if (column_VA_TEXTINPUTBOXLND_495423 != undefined) {
const tplCell_VA_TEXTINPUTBOXLND_495423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXLND_495423');
column_VA_TEXTINPUTBOXLND_495423.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXLND_495423?.templateRef;
const tplEdit_VA_TEXTINPUTBOXLND_495423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXLND_495423');
column_VA_TEXTINPUTBOXLND_495423.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXLND_495423?.templateRef;
}
const column_VA_TEXTINPUTBOXSAP_633423 = this.metaData.viewState["QV_PY15_EUR25"].columns.find((col: any) => col.field == 'description');
if (column_VA_TEXTINPUTBOXSAP_633423 != undefined) {
const tplCell_VA_TEXTINPUTBOXSAP_633423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXSAP_633423');
column_VA_TEXTINPUTBOXSAP_633423.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXSAP_633423?.templateRef;
const tplEdit_VA_TEXTINPUTBOXSAP_633423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXSAP_633423');
column_VA_TEXTINPUTBOXSAP_633423.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXSAP_633423?.templateRef;
}
const column_VA_TEXTINPUTBOXHVO_846423 = this.metaData.viewState["QV_PY15_EUR25"].columns.find((col: any) => col.field == 'mistake');
if (column_VA_TEXTINPUTBOXHVO_846423 != undefined) {
const tplCell_VA_TEXTINPUTBOXHVO_846423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXHVO_846423');
column_VA_TEXTINPUTBOXHVO_846423.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXHVO_846423?.templateRef;
const tplEdit_VA_TEXTINPUTBOXHVO_846423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXHVO_846423');
column_VA_TEXTINPUTBOXHVO_846423.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXHVO_846423?.templateRef;
}
const column_VA_DATEFIELDNOTRWJ_671423 = this.metaData.viewState["QV_BZ71_NGV26"].columns.find((col: any) => col.field == 'datePayment');
if (column_VA_DATEFIELDNOTRWJ_671423 != undefined) {
const tplCell_VA_DATEFIELDNOTRWJ_671423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_DATEFIELDNOTRWJ_671423');
column_VA_DATEFIELDNOTRWJ_671423.properties.cellTemplate = tplCell_VA_DATEFIELDNOTRWJ_671423?.templateRef;
const tplEdit_VA_DATEFIELDNOTRWJ_671423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_DATEFIELDNOTRWJ_671423');
column_VA_DATEFIELDNOTRWJ_671423.properties.editTemplate = tplEdit_VA_DATEFIELDNOTRWJ_671423?.templateRef;
}
const column_VA_TEXTINPUTBOXEAB_650423 = this.metaData.viewState["QV_BZ71_NGV26"].columns.find((col: any) => col.field == 'numberBank');
if (column_VA_TEXTINPUTBOXEAB_650423 != undefined) {
const tplCell_VA_TEXTINPUTBOXEAB_650423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXEAB_650423');
column_VA_TEXTINPUTBOXEAB_650423.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXEAB_650423?.templateRef;
const tplEdit_VA_TEXTINPUTBOXEAB_650423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXEAB_650423');
column_VA_TEXTINPUTBOXEAB_650423.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXEAB_650423?.templateRef;
}
const column_VA_TEXTINPUTBOXLVV_423423 = this.metaData.viewState["QV_BZ71_NGV26"].columns.find((col: any) => col.field == 'customerName');
if (column_VA_TEXTINPUTBOXLVV_423423 != undefined) {
const tplCell_VA_TEXTINPUTBOXLVV_423423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXLVV_423423');
column_VA_TEXTINPUTBOXLVV_423423.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXLVV_423423?.templateRef;
const tplEdit_VA_TEXTINPUTBOXLVV_423423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXLVV_423423');
column_VA_TEXTINPUTBOXLVV_423423.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXLVV_423423?.templateRef;
}
const column_VA_TEXTINPUTBOXEOH_280423 = this.metaData.viewState["QV_BZ71_NGV26"].columns.find((col: any) => col.field == 'currencyPayment');
if (column_VA_TEXTINPUTBOXEOH_280423 != undefined) {
const tplCell_VA_TEXTINPUTBOXEOH_280423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXEOH_280423');
column_VA_TEXTINPUTBOXEOH_280423.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXEOH_280423?.templateRef;
const tplEdit_VA_TEXTINPUTBOXEOH_280423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXEOH_280423');
column_VA_TEXTINPUTBOXEOH_280423.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXEOH_280423?.templateRef;
}
const column_VA_TEXTINPUTBOXFYA_582423 = this.metaData.viewState["QV_BZ71_NGV26"].columns.find((col: any) => col.field == 'formPayment');
if (column_VA_TEXTINPUTBOXFYA_582423 != undefined) {
const tplCell_VA_TEXTINPUTBOXFYA_582423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXFYA_582423');
column_VA_TEXTINPUTBOXFYA_582423.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXFYA_582423?.templateRef;
const tplEdit_VA_TEXTINPUTBOXFYA_582423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXFYA_582423');
column_VA_TEXTINPUTBOXFYA_582423.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXFYA_582423?.templateRef;
}
const column_VA_TEXTINPUTBOXAZC_151423 = this.metaData.viewState["QV_BZ71_NGV26"].columns.find((col: any) => col.field == 'valuePay');
if (column_VA_TEXTINPUTBOXAZC_151423 != undefined) {
const tplCell_VA_TEXTINPUTBOXAZC_151423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXAZC_151423');
column_VA_TEXTINPUTBOXAZC_151423.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXAZC_151423?.templateRef;
const tplEdit_VA_TEXTINPUTBOXAZC_151423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXAZC_151423');
column_VA_TEXTINPUTBOXAZC_151423.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXAZC_151423?.templateRef;
}
const column_VA_TEXTINPUTBOXIGN_255423 = this.metaData.viewState["QV_BZ71_NGV26"].columns.find((col: any) => col.field == 'numberAccount');
if (column_VA_TEXTINPUTBOXIGN_255423 != undefined) {
const tplCell_VA_TEXTINPUTBOXIGN_255423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXIGN_255423');
column_VA_TEXTINPUTBOXIGN_255423.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXIGN_255423?.templateRef;
const tplEdit_VA_TEXTINPUTBOXIGN_255423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXIGN_255423');
column_VA_TEXTINPUTBOXIGN_255423.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXIGN_255423?.templateRef;
}
const column_VA_TEXTINPUTBOXDWU_875423 = this.metaData.viewState["QV_BZ71_NGV26"].columns.find((col: any) => col.field == 'description');
if (column_VA_TEXTINPUTBOXDWU_875423 != undefined) {
const tplCell_VA_TEXTINPUTBOXDWU_875423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXDWU_875423');
column_VA_TEXTINPUTBOXDWU_875423.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXDWU_875423?.templateRef;
const tplEdit_VA_TEXTINPUTBOXDWU_875423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXDWU_875423');
column_VA_TEXTINPUTBOXDWU_875423.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXDWU_875423?.templateRef;
}
const column_VA_TEXTINPUTBOXMIE_662423 = this.metaData.viewState["QV_BZ71_NGV26"].columns.find((col: any) => col.field == 'errorPM');
if (column_VA_TEXTINPUTBOXMIE_662423 != undefined) {
const tplCell_VA_TEXTINPUTBOXMIE_662423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplCell_VA_TEXTINPUTBOXMIE_662423');
column_VA_TEXTINPUTBOXMIE_662423.properties.cellTemplate = tplCell_VA_TEXTINPUTBOXMIE_662423?.templateRef;
const tplEdit_VA_TEXTINPUTBOXMIE_662423 = this.registerTemplateDirectives.find((tpl: any) => tpl.id == 'tplEdit_VA_TEXTINPUTBOXMIE_662423');
column_VA_TEXTINPUTBOXMIE_662423.properties.editTemplate = tplEdit_VA_TEXTINPUTBOXMIE_662423?.templateRef;
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
LoanSearchFilter: viewState.T_LNSPRMFFWJGJE_921.controls.LoanSearchFilter as FormGroup ,
ReadjustmenMList: viewState.T_LNSPRMFFWJGJE_921.controls.ReadjustmenMList as FormGroup ,
ReadjustmentMEntity: viewState.T_LNSPRMFFWJGJE_921.controls.ReadjustmentMEntity as FormGroup ,
LoanList: viewState.T_LNSPRMFFWJGJE_921.controls.LoanList as FormGroup ,
MassiveCommissions: viewState.T_LNSPRMFFWJGJE_921.controls.MassiveCommissions as FormGroup ,
MassivePayments: viewState.T_LNSPRMFFWJGJE_921.controls.MassivePayments as FormGroup
};
this.metaData = { moduleId: 'LNSPR', subModuleId: 'OPRTN', taskId: 'T_LNSPRMFFWJGJE_921', taskVersion: '1.0.0', vcId: 'VC_LOANSEARCH_100921', serverEvents: true, pageInfoEvents: new CobisModelPageInfoEvents(true, true), urlRestService: this.designer.cobisCommons.environment.values.dsgUrlRestService + '/LNSPR/OPRTN/T_LNSPRMFFWJGJE_921', model: new Model(formGroupArray), viewState: viewState, loadCatalogsInfo: new Map<string, ICobisLoadCatalogInfo>([ ['VA_STATEGXSFXFHGCB_183423', { filter:"", cobisRequestServerConfig: null, cache: 0 }], ['VA_SIGNHCAEEHGEZFU_341423', { filter:"", cobisRequestServerConfig: {'filterType':'none'}, cache: 0 , controlGridInfo: { queryViewId: "QV_PG40_VCD65", columnId: "sign" }}], ['VA_ITEMUMGHQQCSAYX_466423', { filter:"", cobisRequestServerConfig: {'filterType':'contains'}, cache: 0 }], ['VA_SIGNKLSEFBDNEKD_114423', { filter:"", cobisRequestServerConfig: null, cache: 0 }], ]), catalogsCobisInfo: new Map<string, ICobisCatalogCobisInfo>([ ['VA_OFFICERVXRGASBK_236423', { catalogName: 'cl_oficina', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_CODCURRENCYORMA_221423', { catalogName: 'cl_moneda', filter: "", cobisRequestServerConfig: null, cache: 0 }], ['VA_TYPEOPERATIONNN_501423', { catalogName: 'ca_toperacion', filter: "", cobisRequestServerConfig: null, cache: 0 }], ]), queriesInfo: new Map<string, ICobisQueryInfo>([ ['QV_PG40_VCD65', { queryId: 'Q_READJUSM_7240', entityName: 'ReadjustmenMList', filter: "", cobisRequestServerConfig: { pageSize :0 }, cache: 0, queryMemberParameters:[ {aliasQueryMember:'readjDate' } , {aliasQueryMember:'operation' } , {aliasQueryMember:'clientCode' } , {aliasQueryMember:'categoryGroup' } , {aliasQueryMember:'numIdentification' } , {aliasQueryMember:'numProcedure' } , {aliasQueryMember:'currency' } , {aliasQueryMember:'disbursementDate' } , {aliasQueryMember:'type' } , {aliasQueryMember:'nextReadjDate' } , {aliasQueryMember:'migratedOperation' } , {aliasQueryMember:'condition' } , {aliasQueryMember:'process' } , {aliasQueryMember:'office' } , {aliasQueryMember:'state' } ]}], ['QV_EF50_UVK53', { queryId: 'Q_LOANSILT_NX50', entityName: 'LoanList', filter: "", cobisRequestServerConfig: { pageSize :5 }, cache: 0, queryMemberParameters:[ {aliasQueryMember:'loanBankID' } , {aliasQueryMember:'state' } , {aliasQueryMember:'currency' } , {aliasQueryMember:'disbursementDate' } , {aliasQueryMember:'numProcedure' } , {aliasQueryMember:'categoryGroup' } , {aliasQueryMember:'type' } , {aliasQueryMember:'operation' } , {aliasQueryMember:'officer' } , {aliasQueryMember:'office' } , {aliasQueryMember:'migratedOperation' } , {aliasQueryMember:'process' } , {aliasQueryMember:'typeClass' } , {aliasQueryMember:'condition' } , {aliasQueryMember:'oficial' } , {aliasQueryMember:'historical' } , {aliasQueryMember:'daysPastDue' } , {aliasQueryMember:'numIdentification' } ]}], ['QV_PY15_EUR25', { queryId: 'Q_MASSSEOO_AX15', entityName: 'MassiveCommissions', filter: "", cobisRequestServerConfig: { pageSize :10 }, cache: 0, queryMemberParameters:[ ]}], ['QV_BZ71_NGV26', { queryId: 'Q_MASSTENM_SJ71', entityName: 'MassivePayments', filter: "", cobisRequestServerConfig: { pageSize :5 }, cache: 0, queryMemberParameters:[ ]}], ]), listsValues: new Map<string, ICobisListValuesInfo>([ [ 'VA_MANTIENECUOTAAA_735423',{ data : [ new CobisModelCatalog ( 'N' , 'NO' ), new CobisModelCatalog ( 'S' , 'SI' )] }], ]) , label: 'LNSPR.LBL_LNSPR_BSQUEDASS_55923' }; this.breadcrumbService.getRoutes(this.metaData);
this.init(this.metaData, params);
});
super.inicializar();
};
}
