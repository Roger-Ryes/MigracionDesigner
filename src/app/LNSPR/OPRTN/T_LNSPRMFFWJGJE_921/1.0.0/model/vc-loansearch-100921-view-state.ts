//Designer Generator v8.0.0 - SPR 2022-16 12/08/2022

import { CobisDesignerUtil, ConstantsApi, VisualValidationTypeEnum } from "cobis-designer";
import { CobisCommonsService } from 'cobis-commons';
import {FormBuilder, FormGroup,ValidatorFn, Validators} from "@angular/forms";
import { of } from 'rxjs';
import {
CobisGroupBoxModel,
CobisCheckBoxModel,
CobisDateFieldModel,
CobisDateTimeFieldModel,
CobisMaskedTextBoxModel,
CobisNumericInputBoxModel,
CobisNumericInputButtonModel,
CobisRadioButtonListModel,
CobisTextAreaModel,
CobisSpacerModel,
CobisSeparatorModel,
CobisCompositevaModel,
CobisTextInputBoxModel,
CobisTextInputButtonModel,
CobisTimePickerModel,
CobisDropDownListModel,
CobisFileUploadModel,
CobisGridModel,
CobisButtonModel,
CobisCollapsibleContainerModel,
CobisCollapsibleItemModel,
CobisTabbedLayoutContainerModel,
CobisTabbedLayoutTabModel,
CobisControlModel,
CobisTextLabelModel,
LayoutConstants,
DropDownListValidators,
CobisMultiSelectModel,
CustomValidators,
ComplexConstants,
FilterData,
FilterType,
Util,
CommonsConstants,
PositionTab,
CustomValidatorOperator,
TextCaseOptions,
ControlType
} from "cobis-designer-controls";
export class ViewState {
public T_LNSPRMFFWJGJE_921!:FormGroup;
public VC_LOANSEARCH_100921:CobisGroupBoxModel = new CobisGroupBoxModel();
public uploaders: any;
public G_LOANSEACHR_436423 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANSEACCH_140423 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANSEAHCH_634423 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_PG40_VCD65: CobisGridModel = new CobisGridModel();
public G_LOANSEACRC_945423 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANSEAHHC_140423 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_EF50_UVK53: CobisGridModel = new CobisGridModel();
public G_LOANSEARCR_617423 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_PY15_EUR25: CobisGridModel = new CobisGridModel();
public G_LOANSEAHHC_356423 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_BZ71_NGV26: CobisGridModel = new CobisGridModel();
public VA_NUMIDENTIFICTII_228423: CobisTextInputButtonModel = new CobisTextInputButtonModel();
public VA_OPERATIONIPSSEI_652423: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_NUMPROCEDURESSS_844423: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_OFFICERVXRGASBK_236423: CobisDropDownListModel = new CobisDropDownListModel();
public VA_CODCURRENCYORMA_221423: CobisDropDownListModel = new CobisDropDownListModel();
public VA_DISBURSEMENTDTE_672423: CobisDateFieldModel = new CobisDateFieldModel();
public VA_NEXTREADJDATEEE_737423: CobisDateFieldModel = new CobisDateFieldModel();
public VA_STATEGXSFXFHGCB_183423: CobisDropDownListModel = new CobisDropDownListModel();
public VA_MIGRATEDOPERITA_354423: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_TYPEOPERATIONNN_501423: CobisDropDownListModel = new CobisDropDownListModel();
public VA_AVANCESEARCHFOE_865423: CobisCheckBoxModel = new CobisCheckBoxModel();
public VA_CONDITIONLQYMCH_855423: CobisCheckBoxModel = new CobisCheckBoxModel();
public VA_SPACER2707FOADE_749423: CobisSpacerModel = new CobisSpacerModel();
public VA_SPACER1958WBGCC_771423: CobisSpacerModel = new CobisSpacerModel();
public VA_SPACER2878UBAZR_925423: CobisSpacerModel = new CobisSpacerModel();
public VA_VAVABUTTONNJ9LB_637423: CobisButtonModel = new CobisButtonModel();
public VA__174423: CobisButtonModel = new CobisButtonModel();
public VA_SPACER2187YYOCB_420423: CobisSpacerModel = new CobisSpacerModel();
public VA_SELECCIONARTOOD_173423: CobisCheckBoxModel = new CobisCheckBoxModel();
public VA_SPACER2562CECVV_901423: CobisSpacerModel = new CobisSpacerModel();
public VA_ARCHIVOJFAGWZSQ_219423: CobisFileUploadModel = new CobisFileUploadModel();
public VA_TASAMINHABRDVAM_870423: CobisCheckBoxModel = new CobisCheckBoxModel();
public Spacer2139: CobisSpacerModel = new CobisSpacerModel();
public Spacer2213: CobisSpacerModel = new CobisSpacerModel();
public VA_ITEMUMGHQQCSAYX_466423: CobisDropDownListModel = new CobisDropDownListModel();
public VA_SPACER2372BRRGU_598423: CobisSpacerModel = new CobisSpacerModel();
public VA_READJUSTDATEHXG_933423: CobisDateFieldModel = new CobisDateFieldModel();
public VA_REFERENCIALHVKA_159423: CobisTextInputButtonModel = new CobisTextInputButtonModel();
public VA_SIGNKLSEFBDNEKD_114423: CobisDropDownListModel = new CobisDropDownListModel();
public VA_FACTORGZZGBQQEQ_812423: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_PERCENTAGEJSRSR_369423: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_MANTIENECUOTAAA_735423: CobisDropDownListModel = new CobisDropDownListModel();
public Spacer2974: CobisSpacerModel = new CobisSpacerModel();
public Spacer2263: CobisSpacerModel = new CobisSpacerModel();
public Spacer2712: CobisSpacerModel = new CobisSpacerModel();
public CM_LOANSEAR_R04: CobisButtonModel = new CobisButtonModel();
public CM_LOANSEAR_PN2: CobisButtonModel = new CobisButtonModel();
public CM_TLNSPRMF_9NN: CobisButtonModel = new CobisButtonModel();
public CM_TLNSPRMF_JP1: CobisButtonModel = new CobisButtonModel();
public CM_TLNSPRMF_NMS: CobisButtonModel = new CobisButtonModel();
public CM_TLNSPRMF_22S: CobisButtonModel = new CobisButtonModel();
public CM_TLNSPRMF_TP8: CobisButtonModel = new CobisButtonModel();
public CM_TLNSPRMF_3SN: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_LOANSEARCH_100921.id="VC_LOANSEARCH_100921";
this.VC_LOANSEARCH_100921.name="LoanSearchForm";
this.VC_LOANSEARCH_100921.colSpan=1;
this.VC_LOANSEARCH_100921.columns=1;
this.VC_LOANSEARCH_100921.enabled=ConstantsApi.mode.All;
this.G_LOANSEACHR_436423.id="G_LOANSEACHR_436423";
this.G_LOANSEACHR_436423.label=cobis.translate("LNSPR.LBL_LNSPR_CRITERIBS_16700");
this.G_LOANSEACHR_436423.name="GroupLayout1809";
this.G_LOANSEACHR_436423.columns=1;
this.G_LOANSEACHR_436423.childrenGroups = ["G_LOANSEACCH_140423","G_LOANSEAHCH_634423","G_LOANSEACRC_945423","G_EMPTYPNDCG_682423","G_LOANSEAHHC_140423","G_LOANSEARCR_617423"];
this.G_LOANSEACHR_436423.colSpan=1;
this.G_LOANSEACHR_436423.enabled=ConstantsApi.mode.All;
this.G_LOANSEACHR_436423.visible=ConstantsApi.mode.All;
this.G_LOANSEACCH_140423.id="G_LOANSEACCH_140423";
this.G_LOANSEACCH_140423.name="Group1910";
this.G_LOANSEACCH_140423.columns=12;
this.G_LOANSEACCH_140423.labelOrientation="Top";
this.G_LOANSEACCH_140423.colSpan=1;
this.G_LOANSEACCH_140423.enabled=ConstantsApi.mode.All;
this.G_LOANSEACCH_140423.visible=ConstantsApi.mode.All;
this.G_LOANSEACCH_140423.attList = ["numIdentification","operation","numProcedures","office","codCurrency","disbursementDate","nextReadjDate","state","migratedOperation","type","avanceSearch","condition","seleccionarTodo","archivo"];
this.G_LOANSEAHCH_634423.id="G_LOANSEAHCH_634423";
this.G_LOANSEAHCH_634423.name="Group1370";
this.G_LOANSEAHCH_634423.columns=1;
this.G_LOANSEAHCH_634423.labelOrientation="Top";
this.G_LOANSEAHCH_634423.colSpan=1;
this.G_LOANSEAHCH_634423.enabled=ConstantsApi.mode.All;
this.G_LOANSEAHCH_634423.visible=ConstantsApi.mode.All;
this.G_LOANSEAHCH_634423.attList = ["seleccion","readjDate","operation","client","referencial","sign","factor","percentage","specialAdjust"];
this.G_LOANSEACRC_945423.id="G_LOANSEACRC_945423";
this.G_LOANSEACRC_945423.label=cobis.translate("LNSPR.LBL_LNSPR_DATOSRESA_30161");
this.G_LOANSEACRC_945423.name="Group2813";
this.G_LOANSEACRC_945423.columns=6;
this.G_LOANSEACRC_945423.labelOrientation="Top";
this.G_LOANSEACRC_945423.colSpan=1;
this.G_LOANSEACRC_945423.enabled=ConstantsApi.mode.All;
this.G_LOANSEACRC_945423.visible=ConstantsApi.mode.All;
this.G_LOANSEACRC_945423.attList = ["tasaMin","item","readjustDate","referencial","sign","factor","percentage","mantieneCuota"];
this.G_LOANSEAHHC_140423.id="G_LOANSEAHHC_140423";
this.G_LOANSEAHHC_140423.name="Group2648";
this.G_LOANSEAHHC_140423.columns=1;
this.G_LOANSEAHHC_140423.labelOrientation="Top";
this.G_LOANSEAHHC_140423.colSpan=1;
this.G_LOANSEAHHC_140423.enabled=ConstantsApi.mode.All;
this.G_LOANSEAHHC_140423.visible=ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.G_LOANSEAHHC_140423.attList = ["seleccion","desOperationType","loanBankID","clientCode","client","amount","state","expirationDate","currency","disbursementDate","numProcedure","group","categoryGroup","type","operation","concessionDate","officer","previousOption","office","creditLine","migratedOperation","process","sequential","specialAdjust","typeClass","answList","answerOut","balanceOperation","pastDueBalance","seqGrid","lastProcessDate","product","isDisbursment","descriptionMistake","lote"];
this.G_LOANSEARCR_617423.id="G_LOANSEARCR_617423";
this.G_LOANSEARCR_617423.name="Group1693";
this.G_LOANSEARCR_617423.columns=1;
this.G_LOANSEARCR_617423.labelOrientation="Top";
this.G_LOANSEARCR_617423.colSpan=1;
this.G_LOANSEARCR_617423.enabled=ConstantsApi.mode.All;
this.G_LOANSEARCR_617423.visible=ConstantsApi.mode.All;
this.G_LOANSEARCR_617423.attList = ["operation","currency","amountPaid","heading","description","baseCalculation","lot","endLote","file","mistake"];
this.G_LOANSEAHHC_356423.id="G_LOANSEAHHC_356423";
this.G_LOANSEAHHC_356423.name="Group2165";
this.G_LOANSEAHHC_356423.columns=1;
this.G_LOANSEAHHC_356423.labelOrientation="Top";
this.G_LOANSEAHHC_356423.colSpan=1;
this.G_LOANSEAHHC_356423.enabled=ConstantsApi.mode.All;
this.G_LOANSEAHHC_356423.visible=ConstantsApi.mode.All;
this.G_LOANSEAHHC_356423.attList = ["datePayment","numberBank","customerName","currencyPayment","formPayment","valuePay","numberAccount","description","errorPM","lotePM","endLotePM","filePM","sequentialPM"];
this.CM_LOANSEAR_R04.id = "CM_LOANSEAR_R04";
this.CM_LOANSEAR_R04.name = "BtnGuardar";
this.CM_LOANSEAR_R04.causesValidation=true;
this.CM_LOANSEAR_R04.submitOnEnter=false;
this.CM_LOANSEAR_R04.setFocus=false;
this.CM_LOANSEAR_R04.close=false;
this.CM_LOANSEAR_R04.label = cobis.translate("LNSPR.LBL_LNSPR_GUARDARRI_81055");
this.CM_LOANSEAR_R04.enabled = ConstantsApi.mode.All;
this.CM_LOANSEAR_R04.visible= ConstantsApi.mode.All;
this.CM_LOANSEAR_PN2.id = "CM_LOANSEAR_PN2";
this.CM_LOANSEAR_PN2.name = "Command1";
this.CM_LOANSEAR_PN2.causesValidation=true;
this.CM_LOANSEAR_PN2.submitOnEnter=false;
this.CM_LOANSEAR_PN2.setFocus=false;
this.CM_LOANSEAR_PN2.close=false;
this.CM_LOANSEAR_PN2.label = cobis.translate("LNSPR.LBL_LOANS_APLICARPZ_99718");
this.CM_LOANSEAR_PN2.enabled = ConstantsApi.mode.All;
this.CM_LOANSEAR_PN2.visible= ConstantsApi.mode.All;
this.CM_TLNSPRMF_9NN.id = "CM_TLNSPRMF_9NN";
this.CM_TLNSPRMF_9NN.name = "Command3";
this.CM_TLNSPRMF_9NN.causesValidation=false;
this.CM_TLNSPRMF_9NN.submitOnEnter=false;
this.CM_TLNSPRMF_9NN.setFocus=false;
this.CM_TLNSPRMF_9NN.close=false;
this.CM_TLNSPRMF_9NN.label = cobis.translate("LNSPR.LBL_LNSPR_PROCESARR_13459");
this.CM_TLNSPRMF_9NN.enabled = ConstantsApi.mode.All;
this.CM_TLNSPRMF_9NN.visible= ConstantsApi.mode.All;
this.CM_TLNSPRMF_JP1.id = "CM_TLNSPRMF_JP1";
this.CM_TLNSPRMF_JP1.name = "Command5";
this.CM_TLNSPRMF_JP1.causesValidation=false;
this.CM_TLNSPRMF_JP1.submitOnEnter=false;
this.CM_TLNSPRMF_JP1.setFocus=false;
this.CM_TLNSPRMF_JP1.close=false;
this.CM_TLNSPRMF_JP1.label = cobis.translate("LNSPR.LBL_LNSPR_GUARDARRI_81055");
this.CM_TLNSPRMF_JP1.enabled = ConstantsApi.mode.All;
this.CM_TLNSPRMF_JP1.visible= ConstantsApi.mode.All;
this.CM_TLNSPRMF_NMS.id = "CM_TLNSPRMF_NMS";
this.CM_TLNSPRMF_NMS.name = "Command5";
this.CM_TLNSPRMF_NMS.causesValidation=false;
this.CM_TLNSPRMF_NMS.submitOnEnter=false;
this.CM_TLNSPRMF_NMS.setFocus=false;
this.CM_TLNSPRMF_NMS.close=false;
this.CM_TLNSPRMF_NMS.label = cobis.translate("LNSPR.LBL_LOANS_LIMPIARVF_75606");
this.CM_TLNSPRMF_NMS.enabled = ConstantsApi.mode.All;
this.CM_TLNSPRMF_NMS.visible= ConstantsApi.mode.All;
this.CM_TLNSPRMF_22S.id = "CM_TLNSPRMF_22S";
this.CM_TLNSPRMF_22S.name = "Command6";
this.CM_TLNSPRMF_22S.causesValidation=false;
this.CM_TLNSPRMF_22S.submitOnEnter=false;
this.CM_TLNSPRMF_22S.setFocus=false;
this.CM_TLNSPRMF_22S.close=false;
this.CM_TLNSPRMF_22S.label = cobis.translate("LNSPR.LBL_LNSPR_PROCESARR_13459");
this.CM_TLNSPRMF_22S.enabled = ConstantsApi.mode.All;
this.CM_TLNSPRMF_22S.visible= ConstantsApi.mode.All;
this.CM_TLNSPRMF_TP8.id = "CM_TLNSPRMF_TP8";
this.CM_TLNSPRMF_TP8.name = "Command8";
this.CM_TLNSPRMF_TP8.causesValidation=false;
this.CM_TLNSPRMF_TP8.submitOnEnter=false;
this.CM_TLNSPRMF_TP8.setFocus=false;
this.CM_TLNSPRMF_TP8.close=false;
this.CM_TLNSPRMF_TP8.label = cobis.translate("LNSPR.LBL_LNSPR_CANCELARR_70217");
this.CM_TLNSPRMF_TP8.enabled = ConstantsApi.mode.All;
this.CM_TLNSPRMF_TP8.visible= ConstantsApi.mode.All;
this.CM_TLNSPRMF_3SN.id = "CM_TLNSPRMF_3SN";
this.CM_TLNSPRMF_3SN.name = "Command9";
this.CM_TLNSPRMF_3SN.causesValidation=false;
this.CM_TLNSPRMF_3SN.submitOnEnter=false;
this.CM_TLNSPRMF_3SN.setFocus=false;
this.CM_TLNSPRMF_3SN.close=false;
this.CM_TLNSPRMF_3SN.label = cobis.translate("LNSPR.LBL_LOANS_LIMPIARVF_75606");
this.CM_TLNSPRMF_3SN.enabled = ConstantsApi.mode.All;
this.CM_TLNSPRMF_3SN.visible= ConstantsApi.mode.All;
this.VA_NUMIDENTIFICTII_228423.id = "VA_NUMIDENTIFICTII_228423";
this.VA_NUMIDENTIFICTII_228423.name = "numIdentification";
this.VA_NUMIDENTIFICTII_228423.label = cobis.translate("LNSPR.LBL_LNSPR_CODIGOCEN_52038");
this.VA_NUMIDENTIFICTII_228423.entity = "LoanSearchFilter";
this.VA_NUMIDENTIFICTII_228423.attribute = "numIdentification";
this.VA_NUMIDENTIFICTII_228423.colSpan = 3;
this.VA_NUMIDENTIFICTII_228423.format = "";
this.VA_NUMIDENTIFICTII_228423.maxlength= 10;
this.VA_NUMIDENTIFICTII_228423.readOnly = ConstantsApi.mode.Query;
this.VA_NUMIDENTIFICTII_228423.enabled = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_NUMIDENTIFICTII_228423.visible= ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_NUMIDENTIFICTII_228423.inputRestrictionValidators = { onlyNumbers: true};
this.VA_NUMIDENTIFICTII_228423.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.RangeValues,CustomValidators.valueRange('0','2147483647')]
]);
this.VA_NUMIDENTIFICTII_228423.messagesValidations = {
valueRange: cobis.translate('LNSPR.MSG_LNSPR_SEDEBERZE_11978')
};
this.VA_OPERATIONIPSSEI_652423.label = cobis.translate("LNSPR.LBL_LNSPR_NUMPRSTOO_83774");
this.VA_OPERATIONIPSSEI_652423.entity = "LoanSearchFilter";
this.VA_OPERATIONIPSSEI_652423.attribute = "operation";
this.VA_OPERATIONIPSSEI_652423.maxlength= 15;
this.VA_OPERATIONIPSSEI_652423.textCase= TextCaseOptions.NONE;
this.VA_OPERATIONIPSSEI_652423.name="operation";
this.VA_OPERATIONIPSSEI_652423.id="VA_OPERATIONIPSSEI_652423";
this.VA_OPERATIONIPSSEI_652423.colSpan=3;
this.VA_OPERATIONIPSSEI_652423.withoutLabel = false;
this.VA_OPERATIONIPSSEI_652423.readOnly = ConstantsApi.mode.Query;
this.VA_OPERATIONIPSSEI_652423.enabled = ConstantsApi.mode.All;
this.VA_OPERATIONIPSSEI_652423.visible= ConstantsApi.mode.All;
this.VA_NUMPROCEDURESSS_844423.label = cobis.translate("LNSPR.LBL_LNSPR_NUMTRMITE_20261");
this.VA_NUMPROCEDURESSS_844423.entity = "LoanSearchFilter";
this.VA_NUMPROCEDURESSS_844423.attribute = "numProcedures";
this.VA_NUMPROCEDURESSS_844423.maxlength= 10;
this.VA_NUMPROCEDURESSS_844423.textCase= TextCaseOptions.NONE;
this.VA_NUMPROCEDURESSS_844423.name="numProcedures";
this.VA_NUMPROCEDURESSS_844423.id="VA_NUMPROCEDURESSS_844423";
this.VA_NUMPROCEDURESSS_844423.colSpan=3;
this.VA_NUMPROCEDURESSS_844423.withoutLabel = false;
this.VA_NUMPROCEDURESSS_844423.readOnly = ConstantsApi.mode.Query;
this.VA_NUMPROCEDURESSS_844423.enabled = ConstantsApi.mode.All;
this.VA_NUMPROCEDURESSS_844423.visible= ConstantsApi.mode.All;
this.VA_NUMPROCEDURESSS_844423.inputRestrictionValidators = { onlyNumbers: true};
this.VA_NUMPROCEDURESSS_844423.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.RangeValues,CustomValidators.valueRange('0','2147483647')]
]);
this.VA_NUMPROCEDURESSS_844423.messagesValidations = {
valueRange: cobis.translate('LNSPR.MSG_LNSPR_SEDEBERZE_11978')
};
this.VA_OFFICERVXRGASBK_236423.label = cobis.translate("LNSPR.LBL_LNSPR_OFICINAHX_44623");
this.VA_OFFICERVXRGASBK_236423.blankOption=true;
this.VA_OFFICERVXRGASBK_236423.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_OFFICERVXRGASBK_236423.entity = "LoanSearchFilter";
this.VA_OFFICERVXRGASBK_236423.attribute = "office";
this.VA_OFFICERVXRGASBK_236423.textField = "value";
this.VA_OFFICERVXRGASBK_236423.valueField = "code";
this.VA_OFFICERVXRGASBK_236423.showId= true;
this.VA_OFFICERVXRGASBK_236423.name="office";
this.VA_OFFICERVXRGASBK_236423.id="VA_OFFICERVXRGASBK_236423";
this.VA_OFFICERVXRGASBK_236423.colSpan=3;
this.VA_OFFICERVXRGASBK_236423.withoutLabel = false;
this.VA_OFFICERVXRGASBK_236423.readOnly = ConstantsApi.mode.Query;
this.VA_OFFICERVXRGASBK_236423.enabled = ConstantsApi.mode.All;
this.VA_OFFICERVXRGASBK_236423.visible= ConstantsApi.mode.All;
this.VA_CODCURRENCYORMA_221423.label = cobis.translate("LNSPR.LBL_LNSPR_MONEDATUB_92849");
this.VA_CODCURRENCYORMA_221423.blankOption=true;
this.VA_CODCURRENCYORMA_221423.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_CODCURRENCYORMA_221423.entity = "LoanSearchFilter";
this.VA_CODCURRENCYORMA_221423.attribute = "codCurrency";
this.VA_CODCURRENCYORMA_221423.textField = "value";
this.VA_CODCURRENCYORMA_221423.valueField = "code";
this.VA_CODCURRENCYORMA_221423.showId= true;
this.VA_CODCURRENCYORMA_221423.name="codCurrency";
this.VA_CODCURRENCYORMA_221423.id="VA_CODCURRENCYORMA_221423";
this.VA_CODCURRENCYORMA_221423.colSpan=3;
this.VA_CODCURRENCYORMA_221423.withoutLabel = false;
this.VA_CODCURRENCYORMA_221423.readOnly = ConstantsApi.mode.Query;
this.VA_CODCURRENCYORMA_221423.enabled = ConstantsApi.mode.All;
this.VA_CODCURRENCYORMA_221423.visible= ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_DISBURSEMENTDTE_672423.label = cobis.translate("LNSPR.LBL_LNSPR_FECHADEBE_42043");
this.VA_DISBURSEMENTDTE_672423.entity = "LoanSearchFilter";
this.VA_DISBURSEMENTDTE_672423.attribute = "disbursementDate";
this.VA_DISBURSEMENTDTE_672423.name="disbursementDate";
this.VA_DISBURSEMENTDTE_672423.id="VA_DISBURSEMENTDTE_672423";
this.VA_DISBURSEMENTDTE_672423.colSpan=3;
this.VA_DISBURSEMENTDTE_672423.withoutLabel = false;
this.VA_DISBURSEMENTDTE_672423.readOnly = ConstantsApi.mode.Query;
this.VA_DISBURSEMENTDTE_672423.enabled = ConstantsApi.mode.All;
this.VA_DISBURSEMENTDTE_672423.visible= ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_NEXTREADJDATEEE_737423.label = cobis.translate("LNSPR.LBL_LNSPR_PRXIMORTU_38940");
this.VA_NEXTREADJDATEEE_737423.entity = "LoanSearchFilter";
this.VA_NEXTREADJDATEEE_737423.attribute = "nextReadjDate";
this.VA_NEXTREADJDATEEE_737423.name="nextReadjDate";
this.VA_NEXTREADJDATEEE_737423.id="VA_NEXTREADJDATEEE_737423";
this.VA_NEXTREADJDATEEE_737423.colSpan=3;
this.VA_NEXTREADJDATEEE_737423.withoutLabel = false;
this.VA_NEXTREADJDATEEE_737423.readOnly = ConstantsApi.mode.Query;
this.VA_NEXTREADJDATEEE_737423.enabled = ConstantsApi.mode.All;
this.VA_NEXTREADJDATEEE_737423.visible= ConstantsApi.mode.All;
this.VA_STATEGXSFXFHGCB_183423.label = cobis.translate("LNSPR.LBL_LNSPR_ESTADOPEM_54793");
this.VA_STATEGXSFXFHGCB_183423.blankOption=true;
this.VA_STATEGXSFXFHGCB_183423.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_STATEGXSFXFHGCB_183423.entity = "LoanSearchFilter";
this.VA_STATEGXSFXFHGCB_183423.attribute = "state";
this.VA_STATEGXSFXFHGCB_183423.textField = "value";
this.VA_STATEGXSFXFHGCB_183423.valueField = "code";
this.VA_STATEGXSFXFHGCB_183423.showId= true;
this.VA_STATEGXSFXFHGCB_183423.name="state";
this.VA_STATEGXSFXFHGCB_183423.id="VA_STATEGXSFXFHGCB_183423";
this.VA_STATEGXSFXFHGCB_183423.colSpan=3;
this.VA_STATEGXSFXFHGCB_183423.withoutLabel = false;
this.VA_STATEGXSFXFHGCB_183423.readOnly = ConstantsApi.mode.Query;
this.VA_STATEGXSFXFHGCB_183423.enabled = ConstantsApi.mode.All;
this.VA_STATEGXSFXFHGCB_183423.visible= ConstantsApi.mode.All;
this.VA_MIGRATEDOPERITA_354423.label = cobis.translate("LNSPR.LBL_LNSPR_PRSTAMOIO_81821");
this.VA_MIGRATEDOPERITA_354423.entity = "LoanSearchFilter";
this.VA_MIGRATEDOPERITA_354423.attribute = "migratedOperation";
this.VA_MIGRATEDOPERITA_354423.maxlength= 10;
this.VA_MIGRATEDOPERITA_354423.textCase= TextCaseOptions.NONE;
this.VA_MIGRATEDOPERITA_354423.name="migratedOperation";
this.VA_MIGRATEDOPERITA_354423.id="VA_MIGRATEDOPERITA_354423";
this.VA_MIGRATEDOPERITA_354423.colSpan=3;
this.VA_MIGRATEDOPERITA_354423.withoutLabel = false;
this.VA_MIGRATEDOPERITA_354423.readOnly = ConstantsApi.mode.Query;
this.VA_MIGRATEDOPERITA_354423.enabled = ConstantsApi.mode.All;
this.VA_MIGRATEDOPERITA_354423.visible= ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_MIGRATEDOPERITA_354423.inputRestrictionValidators = { onlyNumbers: true};
this.VA_TYPEOPERATIONNN_501423.label = cobis.translate("LNSPR.LBL_LNSPR_TIPOOPERN_51275");
this.VA_TYPEOPERATIONNN_501423.blankOption=true;
this.VA_TYPEOPERATIONNN_501423.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_TYPEOPERATIONNN_501423.entity = "LoanSearchFilter";
this.VA_TYPEOPERATIONNN_501423.attribute = "type";
this.VA_TYPEOPERATIONNN_501423.textField = "value";
this.VA_TYPEOPERATIONNN_501423.valueField = "code";
this.VA_TYPEOPERATIONNN_501423.showId= true;
this.VA_TYPEOPERATIONNN_501423.name="typeOperation";
this.VA_TYPEOPERATIONNN_501423.id="VA_TYPEOPERATIONNN_501423";
this.VA_TYPEOPERATIONNN_501423.colSpan=3;
this.VA_TYPEOPERATIONNN_501423.withoutLabel = false;
this.VA_TYPEOPERATIONNN_501423.readOnly = ConstantsApi.mode.Query;
this.VA_TYPEOPERATIONNN_501423.enabled = ConstantsApi.mode.All;
this.VA_TYPEOPERATIONNN_501423.visible= ConstantsApi.mode.All;
this.VA_AVANCESEARCHFOE_865423.id = "VA_AVANCESEARCHFOE_865423";
this.VA_AVANCESEARCHFOE_865423.name = "avanceSearch";
this.VA_AVANCESEARCHFOE_865423.label = cobis.translate("LNSPR.LBL_LNSPR_CRITERIOO_80936");
this.VA_AVANCESEARCHFOE_865423.entity = "LoanSearchFilter";
this.VA_AVANCESEARCHFOE_865423.attribute = "avanceSearch";
this.VA_AVANCESEARCHFOE_865423.colSpan = 3;
this.VA_AVANCESEARCHFOE_865423.withoutLabel = false;
this.VA_AVANCESEARCHFOE_865423.readOnly =ConstantsApi.mode.Query;
this.VA_AVANCESEARCHFOE_865423.enabled = ConstantsApi.mode.All;
this.VA_AVANCESEARCHFOE_865423.visible= ConstantsApi.mode.All;
this.VA_CONDITIONLQYMCH_855423.id = "VA_CONDITIONLQYMCH_855423";
this.VA_CONDITIONLQYMCH_855423.name = "condition";
this.VA_CONDITIONLQYMCH_855423.label = cobis.translate("LNSPR.LBL_LNSPR_REAJUSTSA_64030");
this.VA_CONDITIONLQYMCH_855423.entity = "LoanSearchFilter";
this.VA_CONDITIONLQYMCH_855423.attribute = "condition";
this.VA_CONDITIONLQYMCH_855423.colSpan = 3;
this.VA_CONDITIONLQYMCH_855423.withoutLabel = false;
this.VA_CONDITIONLQYMCH_855423.readOnly =ConstantsApi.mode.Query;
this.VA_CONDITIONLQYMCH_855423.enabled = ConstantsApi.mode.All;
this.VA_CONDITIONLQYMCH_855423.visible= ConstantsApi.mode.All;
this.VA_SPACER2707FOADE_749423.id = "VA_SPACER2707FOADE_749423";
this.VA_SPACER2707FOADE_749423.name = "Spacer2707";
this.VA_SPACER2707FOADE_749423.colSpan = 3;
this.VA_SPACER2707FOADE_749423.visible= ConstantsApi.mode.All;
this.VA_SPACER1958WBGCC_771423.id = "VA_SPACER1958WBGCC_771423";
this.VA_SPACER1958WBGCC_771423.name = "Spacer1958";
this.VA_SPACER1958WBGCC_771423.colSpan = 3;
this.VA_SPACER1958WBGCC_771423.visible= ConstantsApi.mode.All;
this.VA_SPACER2878UBAZR_925423.id = "VA_SPACER2878UBAZR_925423";
this.VA_SPACER2878UBAZR_925423.name = "Spacer2878";
this.VA_SPACER2878UBAZR_925423.colSpan = 3;
this.VA_SPACER2878UBAZR_925423.visible= ConstantsApi.mode.All;
this.VA_VAVABUTTONNJ9LB_637423.id = "VA_VAVABUTTONNJ9LB_637423";
this.VA_VAVABUTTONNJ9LB_637423.name = "VA_VAVABUTTONNJ9LB_637423";
this.VA_VAVABUTTONNJ9LB_637423.label = cobis.translate("LNSPR.LBL_LNSPR_BUSCARKBJ_59373");
this.VA_VAVABUTTONNJ9LB_637423.colSpan = 3;
this.VA_VAVABUTTONNJ9LB_637423.withoutLabel = false;
this.VA_VAVABUTTONNJ9LB_637423.causesValidation=false;
this.VA_VAVABUTTONNJ9LB_637423.submitOnEnter=false;
this.VA_VAVABUTTONNJ9LB_637423.setFocus=false;
this.VA_VAVABUTTONNJ9LB_637423.enabled = ConstantsApi.mode.All;
this.VA_VAVABUTTONNJ9LB_637423.visible= ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_VAVABUTTONNJ9LB_637423.icon = "glyphicon glyphicon-search";
this.VA__174423.id = "VA__174423";
this.VA__174423.name = "VA__174423";
this.VA__174423.label = cobis.translate("LNSPR.LBL_LNSPR_BUSCARYEV_82731");
this.VA__174423.colSpan = 3;
this.VA__174423.withoutLabel = false;
this.VA__174423.causesValidation=false;
this.VA__174423.submitOnEnter=false;
this.VA__174423.setFocus=false;
this.VA__174423.enabled = ConstantsApi.mode.All;
this.VA__174423.visible= ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA__174423.icon = "glyphicon glyphicon-search";
this.VA_SPACER2187YYOCB_420423.id = "VA_SPACER2187YYOCB_420423";
this.VA_SPACER2187YYOCB_420423.name = "Spacer2187";
this.VA_SPACER2187YYOCB_420423.colSpan = 3;
this.VA_SPACER2187YYOCB_420423.visible= ConstantsApi.mode.All;
this.VA_SELECCIONARTOOD_173423.id = "VA_SELECCIONARTOOD_173423";
this.VA_SELECCIONARTOOD_173423.name = "seleccionarTodo";
this.VA_SELECCIONARTOOD_173423.label = cobis.translate("LNSPR.LBL_LNSPR_SELECCIER_50249");
this.VA_SELECCIONARTOOD_173423.entity = "LoanSearchFilter";
this.VA_SELECCIONARTOOD_173423.attribute = "seleccionarTodo";
this.VA_SELECCIONARTOOD_173423.colSpan = 3;
this.VA_SELECCIONARTOOD_173423.withoutLabel = false;
this.VA_SELECCIONARTOOD_173423.readOnly =ConstantsApi.mode.Query;
this.VA_SELECCIONARTOOD_173423.enabled = ConstantsApi.mode.All;
this.VA_SELECCIONARTOOD_173423.visible= ConstantsApi.mode.All;
this.VA_SPACER2562CECVV_901423.id = "VA_SPACER2562CECVV_901423";
this.VA_SPACER2562CECVV_901423.name = "Spacer2562";
this.VA_SPACER2562CECVV_901423.colSpan = 6;
this.VA_SPACER2562CECVV_901423.visible= ConstantsApi.mode.All;
this.VA_ARCHIVOJFAGWZSQ_219423.id = "VA_ARCHIVOJFAGWZSQ_219423";
this.VA_ARCHIVOJFAGWZSQ_219423.name = "archivo";
this.VA_ARCHIVOJFAGWZSQ_219423.tooltip=cobis.translate("LNSPR.LBL_LNSPR_TIPOARCXX_95214");
this.VA_ARCHIVOJFAGWZSQ_219423.label = cobis.translate("LNSPR.LBL_LOANS_CARGARAVO_29365");
this.VA_ARCHIVOJFAGWZSQ_219423.entity = "LoanSearchFilter";
this.VA_ARCHIVOJFAGWZSQ_219423.attribute = "archivo";
this.VA_ARCHIVOJFAGWZSQ_219423.colSpan = 3;
this.VA_ARCHIVOJFAGWZSQ_219423.withoutLabel = false;
this.VA_ARCHIVOJFAGWZSQ_219423.readOnly =ConstantsApi.mode.Query;
this.VA_ARCHIVOJFAGWZSQ_219423.enabled = ConstantsApi.mode.All;
this.VA_ARCHIVOJFAGWZSQ_219423.visible= ConstantsApi.mode.All;
this.QV_PG40_VCD65.id='QV_PG40_VCD65';
this.QV_PG40_VCD65.name='QV_PG40_VCD65';
this.QV_PG40_VCD65.pageable=true;
this.QV_PG40_VCD65.sortable=false;
this.QV_PG40_VCD65.resizable=true;
this.QV_PG40_VCD65.scrollable=true
this.QV_PG40_VCD65.confirmRowDeletion=true;
this.QV_PG40_VCD65.exportToExcel=false;
this.QV_PG40_VCD65.exportToPdf=false;
this.QV_PG40_VCD65.height=0;
this.QV_PG40_VCD65.filterableColumns=false;
this.QV_PG40_VCD65.entityName='ReadjustmenMList';
this.QV_PG40_VCD65.appendRecords=false;
this.QV_PG40_VCD65.rowDetail=false;
this.QV_PG40_VCD65.columnMenu = true;
this.QV_PG40_VCD65.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_PG40_VCD65.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_PG40_VCD65.columns = Util.filterByMode(this.mode, [
{
id : "VA_CHECKBOXYLXHRAO_645423",
label : cobis.translate('LNSPR.LBL_LOANS_SELECCIOE_40160'),
field : 'seleccion',
visible : ConstantsApi.mode.All,
type : 'template',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_CHECKBOXYLXHRAO_645423',
name :'seleccion',
withoutLabel : true,
attribute : 'seleccion',
entity : 'ReadjustmenMList',
readonly : ConstantsApi.mode.Query,
visible : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
disabled : false,
trueValue: true,
falseValue: false,
}
},
{
id : "VA_READJDATEDUBRMY_599423",
label : cobis.translate('LNSPR.LBL_LNSPR_FECHAIWCD_53719'),
field : 'readjDate',
visible : ConstantsApi.mode.All,
type : 'datefield',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_READJDATEDUBRMY_599423',
name :'readjDate',
withoutLabel : true,
format : cobis.userContext.getValue(cobis.constant.DATE_FORMAT),
attribute : 'readjDate',
readonly : ConstantsApi.mode.Query,
entity : 'ReadjustmenMList',
visible : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
}
},
{
id : "VA_OPERATIONWBWFDW_554423",
label : cobis.translate('LNSPR.LBL_LOANS_OPERACIOO_86900'),
field : 'operation',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_OPERATIONWBWFDW_554423',
name :'operation',
withoutLabel : true,
attribute : 'operation',
entity : 'ReadjustmenMList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_CLIENTDRURGMIBT_221423",
label : cobis.translate('LNSPR.LBL_LOANS_NOMBRETPH_86356'),
field : 'client',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_CLIENTDRURGMIBT_221423',
name :'client',
withoutLabel : true,
attribute : 'client',
entity : 'ReadjustmenMList',
maxlength: 30,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_REFERENCIALFBOE_516423",
label : cobis.translate('LNSPR.LBL_LNSPR_REFERENCI_15145'),
field : 'referencial',
visible : ConstantsApi.mode.All,
type : 'textinputbutton',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_REFERENCIALFBOE_516423',
name :'referencial',
withoutLabel : true,
attribute : 'referencial',
entity : 'ReadjustmenMList',
readOnly : ConstantsApi.mode.None,
enabled : ConstantsApi.mode.All,
visible : true,
textLocked : false,
isOnChangeControl:true,
}
},
{
id : "VA_SIGNHCAEEHGEZFU_341423",
label : cobis.translate('LNSPR.LBL_LNSPR_SIGNOZRFG_66096'),
field : 'sign',
visible : ConstantsApi.mode.All,
type : 'combobox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 80,
data$: of([]),
properties :
{
id :'VA_SIGNHCAEEHGEZFU_341423',
name :'sign',
attribute : 'sign',
entity : 'ReadjustmenMList',
withoutLabel : false,
blankOption : false,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
filterType : FilterType.NONE,
showId : false,
isOnChangeControl:true,
textField : "value",
valueField : "code",
}
},
{
id : "VA_FACTORQMDATIIWI_708423",
label : cobis.translate('LNSPR.LBL_LNSPR_FACTORHYG_27995'),
field : 'factor',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_FACTORQMDATIIWI_708423',
name :'factor',
withoutLabel : true,
attribute : 'factor',
entity : 'ReadjustmenMList',
format : '###.#####',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
validationFunctions: new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.RangeValues,CustomValidators.valueRange('0','2000')]
]),
messagesValidations : {
valueRange: cobis.translate('LNSPR.MSG_LNSPR_VALORFU00_79611')
},
}
},
{
id : "VA_PERCENTAGEDNCBC_389423",
label : cobis.translate('LNSPR.LBL_LNSPR_PORCENTEA_34636'),
field : 'percentage',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_PERCENTAGEDNCBC_389423',
name :'percentage',
withoutLabel : true,
attribute : 'percentage',
entity : 'ReadjustmenMList',
format : '###.#####',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
isOnChangeControl:true,
validationFunctions: new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.RangeValues,CustomValidators.valueRange('0','2000')]
]),
messagesValidations : {
valueRange: cobis.translate('LNSPR.MSG_LNSPR_VALORFUO0_46912')
},
}
},
{
id : "VA_SPECIALADJUSTTT_888423",
label : cobis.translate('LNSPR.LBL_LNSPR_ESPECIALL_51217'),
field : 'specialAdjust',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_SPECIALADJUSTTT_888423',
name :'specialAdjust',
withoutLabel : true,
attribute : 'specialAdjust',
entity : 'ReadjustmenMList',
maxlength: 1,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
inputRestrictionValidators : { customList: "N,S"},
}
},
]);
this.VA_TASAMINHABRDVAM_870423.id = "VA_TASAMINHABRDVAM_870423";
this.VA_TASAMINHABRDVAM_870423.name = "tasaMin";
this.VA_TASAMINHABRDVAM_870423.label = cobis.translate("LNSPR.LBL_LNSPR_TASAMINCJ_91660");
this.VA_TASAMINHABRDVAM_870423.entity = "ReadjustmentMEntity";
this.VA_TASAMINHABRDVAM_870423.attribute = "tasaMin";
this.VA_TASAMINHABRDVAM_870423.colSpan = 3;
this.VA_TASAMINHABRDVAM_870423.withoutLabel = false;
this.VA_TASAMINHABRDVAM_870423.readOnly =ConstantsApi.mode.Query;
this.VA_TASAMINHABRDVAM_870423.enabled = ConstantsApi.mode.All;
this.VA_TASAMINHABRDVAM_870423.visible= ConstantsApi.mode.All;
this.VA_TASAMINHABRDVAM_870423.trueValue ="S";
this.VA_TASAMINHABRDVAM_870423.falseValue ="N";
this.Spacer2139.id = "Spacer2139";
this.Spacer2139.name = "Spacer2139";
this.Spacer2139.colSpan = 1;
this.Spacer2139.visible= ConstantsApi.mode.All;
this.Spacer2213.id = "Spacer2213";
this.Spacer2213.name = "Spacer2213";
this.Spacer2213.colSpan = 2;
this.Spacer2213.visible= ConstantsApi.mode.All;
this.VA_ITEMUMGHQQCSAYX_466423.label = cobis.translate("LNSPR.LBL_LNSPR_RUBROFBVM_52414");
this.VA_ITEMUMGHQQCSAYX_466423.blankOption=true;
this.VA_ITEMUMGHQQCSAYX_466423.entity = "ReadjustmentMEntity";
this.VA_ITEMUMGHQQCSAYX_466423.attribute = "item";
this.VA_ITEMUMGHQQCSAYX_466423.textField = "value";
this.VA_ITEMUMGHQQCSAYX_466423.valueField = "code";
this.VA_ITEMUMGHQQCSAYX_466423.filterMinChars= 1;
this.VA_ITEMUMGHQQCSAYX_466423.showId= true;
this.VA_ITEMUMGHQQCSAYX_466423.name="item";
this.VA_ITEMUMGHQQCSAYX_466423.id="VA_ITEMUMGHQQCSAYX_466423";
this.VA_ITEMUMGHQQCSAYX_466423.colSpan=3;
this.VA_ITEMUMGHQQCSAYX_466423.withoutLabel = false;
this.VA_ITEMUMGHQQCSAYX_466423.readOnly = ConstantsApi.mode.Query;
this.VA_ITEMUMGHQQCSAYX_466423.enabled = ConstantsApi.mode.All;
this.VA_ITEMUMGHQQCSAYX_466423.visible= ConstantsApi.mode.All;
this.VA_ITEMUMGHQQCSAYX_466423.required = true;
this.VA_ITEMUMGHQQCSAYX_466423.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_ITEMUMGHQQCSAYX_466423.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LNSPR_CAMPOREIQ_59717')
};
this.VA_SPACER2372BRRGU_598423.id = "VA_SPACER2372BRRGU_598423";
this.VA_SPACER2372BRRGU_598423.name = "Spacer2372";
this.VA_SPACER2372BRRGU_598423.colSpan = 1;
this.VA_SPACER2372BRRGU_598423.visible= ConstantsApi.mode.All;
this.VA_READJUSTDATEHXG_933423.label = cobis.translate("LNSPR.LBL_LNSPR_REAJUSTAL_89572");
this.VA_READJUSTDATEHXG_933423.entity = "ReadjustmentMEntity";
this.VA_READJUSTDATEHXG_933423.attribute = "readjustDate";
this.VA_READJUSTDATEHXG_933423.name="readjustDate";
this.VA_READJUSTDATEHXG_933423.id="VA_READJUSTDATEHXG_933423";
this.VA_READJUSTDATEHXG_933423.colSpan=2;
this.VA_READJUSTDATEHXG_933423.withoutLabel = false;
this.VA_READJUSTDATEHXG_933423.readOnly = ConstantsApi.mode.Query;
this.VA_READJUSTDATEHXG_933423.enabled = ConstantsApi.mode.All;
this.VA_READJUSTDATEHXG_933423.visible= ConstantsApi.mode.All;
this.VA_READJUSTDATEHXG_933423.required = true;
this.VA_READJUSTDATEHXG_933423.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_READJUSTDATEHXG_933423.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LNSPR_CAMPOREIQ_59717')
};
this.VA_REFERENCIALHVKA_159423.id = "VA_REFERENCIALHVKA_159423";
this.VA_REFERENCIALHVKA_159423.name = "referencial";
this.VA_REFERENCIALHVKA_159423.label = cobis.translate("LNSPR.LBL_LNSPR_REFERENIC_88346");
this.VA_REFERENCIALHVKA_159423.entity = "ReadjustmentMEntity";
this.VA_REFERENCIALHVKA_159423.attribute = "referencial";
this.VA_REFERENCIALHVKA_159423.colSpan = 3;
this.VA_REFERENCIALHVKA_159423.format = "";
this.VA_REFERENCIALHVKA_159423.readOnly = ConstantsApi.mode.Query;
this.VA_REFERENCIALHVKA_159423.enabled = ConstantsApi.mode.All;
this.VA_REFERENCIALHVKA_159423.visible= ConstantsApi.mode.All;
this.VA_SIGNKLSEFBDNEKD_114423.label = cobis.translate("LNSPR.LBL_LNSPR_SIGNODWUU_39563");
this.VA_SIGNKLSEFBDNEKD_114423.entity = "ReadjustmentMEntity";
this.VA_SIGNKLSEFBDNEKD_114423.attribute = "sign";
this.VA_SIGNKLSEFBDNEKD_114423.textField = "value";
this.VA_SIGNKLSEFBDNEKD_114423.valueField = "code";
this.VA_SIGNKLSEFBDNEKD_114423.name="sign";
this.VA_SIGNKLSEFBDNEKD_114423.id="VA_SIGNKLSEFBDNEKD_114423";
this.VA_SIGNKLSEFBDNEKD_114423.colSpan=1;
this.VA_SIGNKLSEFBDNEKD_114423.withoutLabel = false;
this.VA_SIGNKLSEFBDNEKD_114423.readOnly = ConstantsApi.mode.None;
this.VA_SIGNKLSEFBDNEKD_114423.enabled = ConstantsApi.mode.All;
this.VA_SIGNKLSEFBDNEKD_114423.visible= ConstantsApi.mode.All;
this.VA_FACTORGZZGBQQEQ_812423.label = cobis.translate("LNSPR.LBL_LNSPR_FACTORJPF_54491");
this.VA_FACTORGZZGBQQEQ_812423.entity = "ReadjustmentMEntity";
this.VA_FACTORGZZGBQQEQ_812423.attribute = "factor";
this.VA_FACTORGZZGBQQEQ_812423.textCase= TextCaseOptions.NONE;
this.VA_FACTORGZZGBQQEQ_812423.format= "###.#####";
this.VA_FACTORGZZGBQQEQ_812423.name="factor";
this.VA_FACTORGZZGBQQEQ_812423.id="VA_FACTORGZZGBQQEQ_812423";
this.VA_FACTORGZZGBQQEQ_812423.colSpan=1;
this.VA_FACTORGZZGBQQEQ_812423.withoutLabel = false;
this.VA_FACTORGZZGBQQEQ_812423.readOnly = ConstantsApi.mode.Query;
this.VA_FACTORGZZGBQQEQ_812423.enabled = ConstantsApi.mode.All;
this.VA_FACTORGZZGBQQEQ_812423.visible= ConstantsApi.mode.All;
this.VA_FACTORGZZGBQQEQ_812423.inputRestrictionValidators = { customList: "0123456789."};
this.VA_FACTORGZZGBQQEQ_812423.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.RangeValues,CustomValidators.valueRange('0','2000')]
]);
this.VA_FACTORGZZGBQQEQ_812423.messagesValidations = {
valueRange: cobis.translate('LNSPR.MSG_LNSPR_VALORFU00_79611')
};
this.VA_PERCENTAGEJSRSR_369423.label = cobis.translate("LNSPR.LBL_LNSPR_PORCENTAA_34368");
this.VA_PERCENTAGEJSRSR_369423.entity = "ReadjustmentMEntity";
this.VA_PERCENTAGEJSRSR_369423.attribute = "percentage";
this.VA_PERCENTAGEJSRSR_369423.textCase= TextCaseOptions.NONE;
this.VA_PERCENTAGEJSRSR_369423.format= "###.#####";
this.VA_PERCENTAGEJSRSR_369423.name="percentage";
this.VA_PERCENTAGEJSRSR_369423.id="VA_PERCENTAGEJSRSR_369423";
this.VA_PERCENTAGEJSRSR_369423.colSpan=1;
this.VA_PERCENTAGEJSRSR_369423.withoutLabel = false;
this.VA_PERCENTAGEJSRSR_369423.readOnly = ConstantsApi.mode.Query;
this.VA_PERCENTAGEJSRSR_369423.enabled = ConstantsApi.mode.All;
this.VA_PERCENTAGEJSRSR_369423.visible= ConstantsApi.mode.All;
this.VA_PERCENTAGEJSRSR_369423.inputRestrictionValidators = { customList: "0123456789."};
this.VA_PERCENTAGEJSRSR_369423.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.RangeValues,CustomValidators.valueRange('0','2000')]
]);
this.VA_PERCENTAGEJSRSR_369423.messagesValidations = {
valueRange: cobis.translate('LNSPR.MSG_LNSPR_VALORFU00_79611')
};
this.VA_MANTIENECUOTAAA_735423.label = cobis.translate("LNSPR.LBL_LNSPR_MANTIENTA_73559");
this.VA_MANTIENECUOTAAA_735423.entity = "ReadjustmentMEntity";
this.VA_MANTIENECUOTAAA_735423.attribute = "mantieneCuota";
this.VA_MANTIENECUOTAAA_735423.textField = "value";
this.VA_MANTIENECUOTAAA_735423.valueField = "code";
this.VA_MANTIENECUOTAAA_735423.showId= true;
this.VA_MANTIENECUOTAAA_735423.name="mantieneCuota";
this.VA_MANTIENECUOTAAA_735423.id="VA_MANTIENECUOTAAA_735423";
this.VA_MANTIENECUOTAAA_735423.colSpan=3;
this.VA_MANTIENECUOTAAA_735423.withoutLabel = false;
this.VA_MANTIENECUOTAAA_735423.readOnly = ConstantsApi.mode.Query;
this.VA_MANTIENECUOTAAA_735423.enabled = ConstantsApi.mode.All;
this.VA_MANTIENECUOTAAA_735423.visible= ConstantsApi.mode.All;
this.Spacer2974.id = "Spacer2974";
this.Spacer2974.name = "Spacer2974";
this.Spacer2974.colSpan = 1;
this.Spacer2974.visible= ConstantsApi.mode.All;
this.Spacer2263.id = "Spacer2263";
this.Spacer2263.name = "Spacer2263";
this.Spacer2263.colSpan = 1;
this.Spacer2263.visible= ConstantsApi.mode.All;
this.Spacer2712.id = "Spacer2712";
this.Spacer2712.name = "Spacer2712";
this.Spacer2712.colSpan = 1;
this.Spacer2712.visible= ConstantsApi.mode.All;
this.QV_EF50_UVK53.pageSize=5;
this.QV_EF50_UVK53.id='QV_EF50_UVK53';
this.QV_EF50_UVK53.name='QV_EF50_UVK53';
this.QV_EF50_UVK53.pageable=true;
this.QV_EF50_UVK53.sortable=false;
this.QV_EF50_UVK53.resizable=true;
this.QV_EF50_UVK53.scrollable=true
this.QV_EF50_UVK53.confirmRowDeletion=false;
this.QV_EF50_UVK53.exportToExcel=true;
this.QV_EF50_UVK53.exportToPdf=false;
this.QV_EF50_UVK53.height=0;
this.QV_EF50_UVK53.filterableColumns=false;
this.QV_EF50_UVK53.entityName='LoanList';
this.QV_EF50_UVK53.appendRecords=false;
this.QV_EF50_UVK53.rowDetail=false;
this.QV_EF50_UVK53.columnMenu = true;
this.QV_EF50_UVK53.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_EF50_UVK53.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
this.QV_EF50_UVK53.commandsButton=[
{
id : 'CEQV_201QV_EF50_UVK53_197',
image:'glyphicon glyphicon-list',
label: cobis.translate('LNSPR.LBL_LNSPR_INGRESOVS_19444'),
name : 'GridCommand',
tooltip:'',
setFocus:false,
userControl:'Button',
enabled:true,
visible:true
},
{
id : 'CEQV_201QV_EF50_UVK53_388',
image:'glyphicon glyphicon-list',
label: cobis.translate('LNSPR.LBL_LNSPR_INGRESOGA_95398'),
name : 'GridCommand',
tooltip:'',
setFocus:false,
userControl:'Button',
enabled:true,
visible:true
},
{
id : 'CEQV_201QV_EF50_UVK53_351',
image:'glyphicon glyphicon-list',
label: cobis.translate('LNSPR.LBL_LNSPR_INGRESOIT_26283'),
name : 'GridCommand',
tooltip:'',
setFocus:false,
userControl:'Button',
enabled:true,
visible:true
},
];
//RowCommands:
//Creacion de columnas del Grid
this.QV_EF50_UVK53.columns = Util.filterByMode(this.mode, [
{
id : "VA_SELECCIONBGDZXY_881423",
label : cobis.translate('LNSPR.LBL_LOANS_SELECCIOE_40160'),
field : 'seleccion',
visible : ConstantsApi.mode.All,
type : 'template',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties : {
id :'VA_SELECCIONBGDZXY_881423',
name :'seleccion',
withoutLabel : true,
attribute : 'seleccion',
entity : 'LoanList',
readonly : ConstantsApi.mode.Query,
visible : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
disabled : false,
isOnChangeControl:true,
trueValue: true,
falseValue: false,
}
},
{
id : "VA_DESOPERATIONPET_303423",
label : cobis.translate('LNSPR.LBL_LNSPR_TIPOPREMM_37747'),
field : 'desOperationType',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_DESOPERATIONPET_303423',
name :'desOperationType',
withoutLabel : true,
attribute : 'desOperationType',
entity : 'LoanList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_LOANBANKIDXGAED_699423",
label : cobis.translate('LNSPR.LBL_LNSPR_NUMPRESTO_78484'),
field : 'loanBankID',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 120,
properties :
{
id :'VA_LOANBANKIDXGAED_699423',
name :'loanBankID',
withoutLabel : true,
attribute : 'loanBankID',
entity : 'LoanList',
maxlength: 24,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_CLIENTCODEKFARH_334423",
label : cobis.translate('LNSPR.LBL_LNSPR_CODCLIETT_20856'),
field : 'clientCode',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 120,
properties :
{
id :'VA_CLIENTCODEKFARH_334423',
name :'clientCode',
withoutLabel : true,
attribute : 'clientCode',
entity : 'LoanList',
format : '########',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_CLIENTCNBTMRZFQ_816423",
label : cobis.translate('LNSPR.LBL_LNSPR_NOMBRECNI_63306'),
field : 'client',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 300,
properties :
{
id :'VA_CLIENTCNBTMRZFQ_816423',
name :'client',
withoutLabel : true,
attribute : 'client',
entity : 'LoanList',
maxlength: 30,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_AMOUNTOMLDDIZJA_910423",
label : cobis.translate('LNSPR.LBL_LNSPR_MONTOPREO_81448'),
field : 'amount',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 200,
properties :
{
id :'VA_AMOUNTOMLDDIZJA_910423',
name :'amount',
withoutLabel : true,
attribute : 'amount',
entity : 'LoanList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_STATECMEFWCTNQD_519423",
label : cobis.translate('LNSPR.LBL_LNSPR_ESTADOEAI_33340'),
field : 'state',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_STATECMEFWCTNQD_519423',
name :'state',
withoutLabel : true,
attribute : 'state',
entity : 'LoanList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_EXPIRATIONDAEET_350423",
label : cobis.translate('LNSPR.LBL_LNSPR_FECHAVENE_58948'),
field : 'expirationDate',
visible : ConstantsApi.mode.All,
type : 'datefield',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_EXPIRATIONDAEET_350423',
name :'expirationDate',
withoutLabel : true,
format : cobis.userContext.getValue(cobis.constant.DATE_FORMAT),
attribute : 'expirationDate',
textLocked : false,
readonly : ConstantsApi.mode.Query,
entity : 'LoanList',
visible : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
}
},
{
id : "VA_CURRENCYUOUYUTG_117423",
label : cobis.translate('LNSPR.LBL_LNSPR_CODMONEDD_59972'),
field : 'currency',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_CURRENCYUOUYUTG_117423',
name :'currency',
withoutLabel : true,
attribute : 'currency',
entity : 'LoanList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DISBURSEMENTAED_963423",
label : cobis.translate('LNSPR.LBL_LNSPR_FECHADEBE_42043'),
field : 'disbursementDate',
visible : ConstantsApi.mode.All,
type : 'datefield',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_DISBURSEMENTAED_963423',
name :'disbursementDate',
withoutLabel : true,
format : cobis.userContext.getValue(cobis.constant.DATE_FORMAT),
attribute : 'disbursementDate',
textLocked : false,
readonly : ConstantsApi.mode.Query,
entity : 'LoanList',
visible : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
}
},
{
id : "VA_NUMPROCEDUREUXI_497423",
label : cobis.translate('LNSPR.LBL_LNSPR_NUMTRAMEE_83198'),
field : 'numProcedure',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_NUMPROCEDUREUXI_497423',
name :'numProcedure',
withoutLabel : true,
attribute : 'numProcedure',
entity : 'LoanList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXDXE_141423",
label : cobis.translate('LNSPR.LBL_LNSPR_ERRORJGSK_63293'),
field : 'descriptionMistake',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 450,
properties :
{
id :'VA_TEXTINPUTBOXDXE_141423',
name :'descriptionMistake',
withoutLabel : true,
attribute : 'descriptionMistake',
entity : 'LoanList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.QV_PY15_EUR25.pageSize=10;
this.QV_PY15_EUR25.id='QV_PY15_EUR25';
this.QV_PY15_EUR25.name='QV_PY15_EUR25';
this.QV_PY15_EUR25.pageable=true;
this.QV_PY15_EUR25.sortable=false;
this.QV_PY15_EUR25.resizable=true;
this.QV_PY15_EUR25.scrollable=true
this.QV_PY15_EUR25.confirmRowDeletion=false;
this.QV_PY15_EUR25.exportToExcel=true;
this.QV_PY15_EUR25.exportToPdf=false;
this.QV_PY15_EUR25.height=0;
this.QV_PY15_EUR25.filterableColumns=false;
this.QV_PY15_EUR25.entityName='MassiveCommissions';
this.QV_PY15_EUR25.appendRecords=false;
this.QV_PY15_EUR25.rowDetail=false;
this.QV_PY15_EUR25.columnMenu = true;
this.QV_PY15_EUR25.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_PY15_EUR25.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_PY15_EUR25.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXNAP_479423",
label : cobis.translate('LNSPR.LBL_LOANS_OPERACIOO_86900'),
field : 'operation',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXNAP_479423',
name :'operation',
withoutLabel : true,
attribute : 'operation',
entity : 'MassiveCommissions',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXHUJ_355423",
label : cobis.translate('LNSPR.LBL_LNSPR_MONEDAFCA_83005'),
field : 'currency',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXHUJ_355423',
name :'currency',
withoutLabel : true,
attribute : 'currency',
entity : 'MassiveCommissions',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXIZW_235423",
label : cobis.translate('LNSPR.LBL_LNSPR_VALORAPAA_34434'),
field : 'amountPaid',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXIZW_235423',
name :'amountPaid',
withoutLabel : true,
attribute : 'amountPaid',
entity : 'MassiveCommissions',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXLND_495423",
label : cobis.translate('LNSPR.LBL_LNSPR_CONCEPTOO_29972'),
field : 'heading',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXLND_495423',
name :'heading',
withoutLabel : true,
attribute : 'heading',
entity : 'MassiveCommissions',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXSAP_633423",
label : cobis.translate('LNSPR.LBL_LNSPR_COMENTAOO_63544'),
field : 'description',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXSAP_633423',
name :'description',
withoutLabel : true,
attribute : 'description',
entity : 'MassiveCommissions',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXHVO_846423",
label : cobis.translate('LNSPR.LBL_LNSPR_ERRORJGSK_63293'),
field : 'mistake',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXHVO_846423',
name :'mistake',
withoutLabel : true,
attribute : 'mistake',
entity : 'MassiveCommissions',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.QV_BZ71_NGV26.pageSize=5;
this.QV_BZ71_NGV26.id='QV_BZ71_NGV26';
this.QV_BZ71_NGV26.name='QV_BZ71_NGV26';
this.QV_BZ71_NGV26.pageable=true;
this.QV_BZ71_NGV26.sortable=false;
this.QV_BZ71_NGV26.resizable=true;
this.QV_BZ71_NGV26.scrollable=true
this.QV_BZ71_NGV26.confirmRowDeletion=false;
this.QV_BZ71_NGV26.exportToExcel=true;
this.QV_BZ71_NGV26.exportToPdf=false;
this.QV_BZ71_NGV26.height=0;
this.QV_BZ71_NGV26.filterableColumns=false;
this.QV_BZ71_NGV26.entityName='MassivePayments';
this.QV_BZ71_NGV26.appendRecords=true;
this.QV_BZ71_NGV26.rowDetail=false;
this.QV_BZ71_NGV26.columnMenu = true;
this.QV_BZ71_NGV26.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_BZ71_NGV26.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_BZ71_NGV26.columns = Util.filterByMode(this.mode, [
{
id : "VA_DATEFIELDNOTRWJ_671423",
label : cobis.translate('LNSPR.LBL_LNSPR_FECHAPAGG_27345'),
field : 'datePayment',
visible : ConstantsApi.mode.All,
type : 'datefield',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_DATEFIELDNOTRWJ_671423',
name :'datePayment',
withoutLabel : true,
format : cobis.userContext.getValue(cobis.constant.DATE_FORMAT),
attribute : 'datePayment',
textLocked : false,
readonly : ConstantsApi.mode.Query,
entity : 'MassivePayments',
visible : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
}
},
{
id : "VA_TEXTINPUTBOXEAB_650423",
label : cobis.translate('LNSPR.LBL_LOANS_OPERACIOO_86900'),
field : 'numberBank',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXEAB_650423',
name :'numberBank',
withoutLabel : true,
attribute : 'numberBank',
entity : 'MassivePayments',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXLVV_423423",
label : cobis.translate('LNSPR.LBL_LNSPR_CLIENTEOR_78949'),
field : 'customerName',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXLVV_423423',
name :'customerName',
withoutLabel : true,
attribute : 'customerName',
entity : 'MassivePayments',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXEOH_280423",
label : cobis.translate('LNSPR.LBL_LNSPR_MONEDAFCA_83005'),
field : 'currencyPayment',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXEOH_280423',
name :'currencyPayment',
withoutLabel : true,
attribute : 'currencyPayment',
entity : 'MassivePayments',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXFYA_582423",
label : cobis.translate('LNSPR.LBL_LNSPR_APAGOVQRF_51833'),
field : 'formPayment',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXFYA_582423',
name :'formPayment',
withoutLabel : true,
attribute : 'formPayment',
entity : 'MassivePayments',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXAZC_151423",
label : cobis.translate('LNSPR.LBL_LNSPR_VALORAPAA_34434'),
field : 'valuePay',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXAZC_151423',
name :'valuePay',
withoutLabel : true,
attribute : 'valuePay',
entity : 'MassivePayments',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXIGN_255423",
label : cobis.translate('LNSPR.LBL_LNSPR_NOCUENTAA_41516'),
field : 'numberAccount',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXIGN_255423',
name :'numberAccount',
withoutLabel : true,
attribute : 'numberAccount',
entity : 'MassivePayments',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXDWU_875423",
label : cobis.translate('LNSPR.LBL_LNSPR_ESTADOEAI_33340'),
field : 'description',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXDWU_875423',
name :'description',
withoutLabel : true,
attribute : 'description',
entity : 'MassivePayments',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXMIE_662423",
label : cobis.translate('LNSPR.LBL_LNSPR_DESCRIPNC_75776'),
field : 'errorPM',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 200,
properties :
{
id :'VA_TEXTINPUTBOXMIE_662423',
name :'error',
withoutLabel : true,
attribute : 'errorPM',
entity : 'MassivePayments',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.T_LNSPRMFFWJGJE_921 = this.formBuilder.group({
LoanSearchFilter: this.formBuilder.group({
numIdentification:[{value: null, disabled: !this.VA_NUMIDENTIFICTII_228423.visible},CobisDesignerUtil.getValidationFunctions(this.VA_NUMIDENTIFICTII_228423.validationFunctions!)],
operation:[{value: null, disabled: !this.VA_OPERATIONIPSSEI_652423.visible},CobisDesignerUtil.getValidationFunctions(this.VA_OPERATIONIPSSEI_652423.validationFunctions!)],
numProcedures:[{value: null, disabled: !this.VA_NUMPROCEDURESSS_844423.visible},CobisDesignerUtil.getValidationFunctions(this.VA_NUMPROCEDURESSS_844423.validationFunctions!)],
office:[{value: null, disabled: !this.VA_OFFICERVXRGASBK_236423.visible},CobisDesignerUtil.getValidationFunctions(this.VA_OFFICERVXRGASBK_236423.validationFunctions!)],
codCurrency:[{value: null, disabled: !this.VA_CODCURRENCYORMA_221423.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CODCURRENCYORMA_221423.validationFunctions!)],
disbursementDate:[{value: null, disabled: !this.VA_DISBURSEMENTDTE_672423.visible},CobisDesignerUtil.getValidationFunctions(this.VA_DISBURSEMENTDTE_672423.validationFunctions!)],
nextReadjDate:[{value: null, disabled: !this.VA_NEXTREADJDATEEE_737423.visible},CobisDesignerUtil.getValidationFunctions(this.VA_NEXTREADJDATEEE_737423.validationFunctions!)],
state:[{value: null, disabled: !this.VA_STATEGXSFXFHGCB_183423.visible},CobisDesignerUtil.getValidationFunctions(this.VA_STATEGXSFXFHGCB_183423.validationFunctions!)],
migratedOperation:[{value: null, disabled: !this.VA_MIGRATEDOPERITA_354423.visible},CobisDesignerUtil.getValidationFunctions(this.VA_MIGRATEDOPERITA_354423.validationFunctions!)],
type:[{value: null, disabled: !this.VA_TYPEOPERATIONNN_501423.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TYPEOPERATIONNN_501423.validationFunctions!)],
avanceSearch:[{value: false, disabled: !this.VA_AVANCESEARCHFOE_865423.visible},CobisDesignerUtil.getValidationFunctions(this.VA_AVANCESEARCHFOE_865423.validationFunctions!)],
condition:[{value: false, disabled: !this.VA_CONDITIONLQYMCH_855423.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CONDITIONLQYMCH_855423.validationFunctions!)],
seleccionarTodo:[{value: false, disabled: !this.VA_SELECCIONARTOOD_173423.visible},CobisDesignerUtil.getValidationFunctions(this.VA_SELECCIONARTOOD_173423.validationFunctions!)],
archivo:[{value: null, disabled: !this.VA_ARCHIVOJFAGWZSQ_219423.visible},CobisDesignerUtil.getValidationFunctions(this.VA_ARCHIVOJFAGWZSQ_219423.validationFunctions!)],
lastProcessDate:[null],
next:[null],
archivoSubido:[null],
mode:[null],
sequential:[null],
codClient:[null],
credit:[null],
group:[null],
product:[null],
isGroup:[null],
category:[null],
classLoan:[null],
daysPastDue:[null],
untilDate:[null],
isDisbursment:[null],
readjDate:[null],
oficial:[null],
status:[null],
historical:[null],
}
),
ReadjustmenMList: this.formBuilder.group({
seleccion:[{value: false, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_PG40_VCD65.columns,'VA_CHECKBOXYLXHRAO_645423')],
readjDate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_PG40_VCD65.columns,'VA_READJDATEDUBRMY_599423')],
operation:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_PG40_VCD65.columns,'VA_OPERATIONWBWFDW_554423')],
client:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_PG40_VCD65.columns,'VA_CLIENTDRURGMIBT_221423')],
referencial:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_PG40_VCD65.columns,'VA_REFERENCIALFBOE_516423')],
sign:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_PG40_VCD65.columns,'VA_SIGNHCAEEHGEZFU_341423')],
factor:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_PG40_VCD65.columns,'VA_FACTORQMDATIIWI_708423')],
percentage:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_PG40_VCD65.columns,'VA_PERCENTAGEDNCBC_389423')],
specialAdjust:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_PG40_VCD65.columns,'VA_SPECIALADJUSTTT_888423')],
previousOption:[null],
oficial:[null],
typeClass:[null],
creditLine:[null],
pastDueBalance:[null],
credit:[null],
nextReadjDate:[null],
numProcedure:[null],
office:[null],
sequential:[null],
balanceOperation:[null],
answList:[null],
migratedOperation:[null],
daysPastDue:[null],
concessionDate:[null],
numIdentification:[null],
special:[null],
process:[null],
amount:[null],
type:[null],
lastProcessDate:[null],
condition:[null],
product:[null],
historical:[null],
state:[null],
unitlDate:[null],
disbursementDate:[null],
categoryGroup:[null],
clientCode:[null],
seqGrid:[null],
officer:[null],
answerOut:[null],
expirationDate:[null],
currency:[null],
}
),
ReadjustmentMEntity: this.formBuilder.group({
tasaMin:[{value: false, disabled: !this.VA_TASAMINHABRDVAM_870423.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TASAMINHABRDVAM_870423.validationFunctions!)],
item:[{value: null, disabled: !this.VA_ITEMUMGHQQCSAYX_466423.visible},CobisDesignerUtil.getValidationFunctions(this.VA_ITEMUMGHQQCSAYX_466423.validationFunctions!)],
readjustDate:[{value: null, disabled: !this.VA_READJUSTDATEHXG_933423.visible},CobisDesignerUtil.getValidationFunctions(this.VA_READJUSTDATEHXG_933423.validationFunctions!)],
referencial:[{value: null, disabled: !this.VA_REFERENCIALHVKA_159423.visible},CobisDesignerUtil.getValidationFunctions(this.VA_REFERENCIALHVKA_159423.validationFunctions!)],
sign:[{value: null, disabled: !this.VA_SIGNKLSEFBDNEKD_114423.visible},CobisDesignerUtil.getValidationFunctions(this.VA_SIGNKLSEFBDNEKD_114423.validationFunctions!)],
factor:[{value: null, disabled: !this.VA_FACTORGZZGBQQEQ_812423.visible},CobisDesignerUtil.getValidationFunctions(this.VA_FACTORGZZGBQQEQ_812423.validationFunctions!)],
percentage:[{value: null, disabled: !this.VA_PERCENTAGEJSRSR_369423.visible},CobisDesignerUtil.getValidationFunctions(this.VA_PERCENTAGEJSRSR_369423.validationFunctions!)],
mantieneCuota:[{value: null, disabled: !this.VA_MANTIENECUOTAAA_735423.visible},CobisDesignerUtil.getValidationFunctions(this.VA_MANTIENECUOTAAA_735423.validationFunctions!)],
operation:[null],
}
),
LoanList: this.formBuilder.group({
seleccion:[{value: false, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EF50_UVK53.columns,'VA_SELECCIONBGDZXY_881423')],
desOperationType:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EF50_UVK53.columns,'VA_DESOPERATIONPET_303423')],
loanBankID:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EF50_UVK53.columns,'VA_LOANBANKIDXGAED_699423')],
clientCode:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EF50_UVK53.columns,'VA_CLIENTCODEKFARH_334423')],
client:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EF50_UVK53.columns,'VA_CLIENTCNBTMRZFQ_816423')],
amount:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EF50_UVK53.columns,'VA_AMOUNTOMLDDIZJA_910423')],
state:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EF50_UVK53.columns,'VA_STATECMEFWCTNQD_519423')],
expirationDate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EF50_UVK53.columns,'VA_EXPIRATIONDAEET_350423')],
currency:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EF50_UVK53.columns,'VA_CURRENCYUOUYUTG_117423')],
disbursementDate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EF50_UVK53.columns,'VA_DISBURSEMENTAED_963423')],
numProcedure:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EF50_UVK53.columns,'VA_NUMPROCEDUREUXI_497423')],
group:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EF50_UVK53.columns,'VA_GROUPPPCOZMDTSO_374423')],
categoryGroup:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EF50_UVK53.columns,'VA_CATEGORYGROUPPP_422423')],
type:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EF50_UVK53.columns,'VA_TYPEMIYEHJZFDDT_677423')],
operation:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EF50_UVK53.columns,'VA_OPERATIONOIFFBE_520423')],
concessionDate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EF50_UVK53.columns,'VA_CONCESSIONDAEEE_555423')],
officer:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EF50_UVK53.columns,'VA_OFFICERFQANMBBQ_857423')],
previousOption:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EF50_UVK53.columns,'VA_PREVIOUSOPTINNN_560423')],
office:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EF50_UVK53.columns,'VA_OFFICEXYAVVNIJY_706423')],
creditLine:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EF50_UVK53.columns,'VA_CREDITLINEYXAKJ_608423')],
migratedOperation:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EF50_UVK53.columns,'VA_MIGRATEDOPERNOO_259423')],
process:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EF50_UVK53.columns,'VA_PROCESSHJNFZIFU_810423')],
sequential:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EF50_UVK53.columns,'VA_SEQUENTIALNFVSX_217423')],
specialAdjust:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EF50_UVK53.columns,'VA_SPECIALADJUSTTT_208423')],
typeClass:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EF50_UVK53.columns,'VA_TYPECLASSLMKNJF_781423')],
answList:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EF50_UVK53.columns,'VA_ANSWLISTFFFWPYH_106423')],
answerOut:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EF50_UVK53.columns,'VA_ANSWEROUTINRACZ_747423')],
balanceOperation:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EF50_UVK53.columns,'VA_BALANCEOPERAONO_218423')],
pastDueBalance:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EF50_UVK53.columns,'VA_PASTDUEBALANECE_114423')],
seqGrid:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EF50_UVK53.columns,'VA_SEQGRIDGTCFLYFS_468423')],
lastProcessDate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EF50_UVK53.columns,'VA_LASTPROCESSDAEA_774423')],
product:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EF50_UVK53.columns,'VA_PRODUCTUNYIPQZJ_264423')],
isDisbursment:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EF50_UVK53.columns,'VA_ISDISBURSMENTTT_772423')],
descriptionMistake:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EF50_UVK53.columns,'VA_TEXTINPUTBOXDXE_141423')],
lote:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_EF50_UVK53.columns,'VA_TEXTINPUTBOXYPO_875423')],
oficial:[null],
credit:[null],
untilDate:[null],
numIdentification:[null],
condition:[null],
currencyName:[null],
historical:[null],
daysPastDue:[null],
}
),
MassiveCommissions: this.formBuilder.group({
operation:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_PY15_EUR25.columns,'VA_TEXTINPUTBOXNAP_479423')],
currency:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_PY15_EUR25.columns,'VA_TEXTINPUTBOXHUJ_355423')],
amountPaid:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_PY15_EUR25.columns,'VA_TEXTINPUTBOXIZW_235423')],
heading:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_PY15_EUR25.columns,'VA_TEXTINPUTBOXLND_495423')],
description:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_PY15_EUR25.columns,'VA_TEXTINPUTBOXSAP_633423')],
baseCalculation:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_PY15_EUR25.columns,'VA_TEXTINPUTBOXQIX_670423')],
lot:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_PY15_EUR25.columns,'VA_TEXTINPUTBOXWTY_968423')],
endLote:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_PY15_EUR25.columns,'VA_TEXTINPUTBOXIUJ_559423')],
file:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_PY15_EUR25.columns,'VA_TEXTINPUTBOXGMN_332423')],
mistake:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_PY15_EUR25.columns,'VA_TEXTINPUTBOXHVO_846423')],
}
),
MassivePayments: this.formBuilder.group({
datePayment:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_BZ71_NGV26.columns,'VA_DATEFIELDNOTRWJ_671423')],
numberBank:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_BZ71_NGV26.columns,'VA_TEXTINPUTBOXEAB_650423')],
customerName:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_BZ71_NGV26.columns,'VA_TEXTINPUTBOXLVV_423423')],
currencyPayment:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_BZ71_NGV26.columns,'VA_TEXTINPUTBOXEOH_280423')],
formPayment:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_BZ71_NGV26.columns,'VA_TEXTINPUTBOXFYA_582423')],
valuePay:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_BZ71_NGV26.columns,'VA_TEXTINPUTBOXAZC_151423')],
numberAccount:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_BZ71_NGV26.columns,'VA_TEXTINPUTBOXIGN_255423')],
description:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_BZ71_NGV26.columns,'VA_TEXTINPUTBOXDWU_875423')],
errorPM:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_BZ71_NGV26.columns,'VA_TEXTINPUTBOXMIE_662423')],
lotePM:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_BZ71_NGV26.columns,'VA_TEXTINPUTBOXECM_879423')],
endLotePM:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_BZ71_NGV26.columns,'VA_TEXTINPUTBOXZXV_947423')],
filePM:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_BZ71_NGV26.columns,'VA_TEXTINPUTBOXTFR_779423')],
sequentialPM:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_BZ71_NGV26.columns,'VA_TEXTINPUTBOXVZK_761423')],
}
),
});
this.uploaders = {
VA_ARCHIVOJFAGWZSQ_219423: this.VA_ARCHIVOJFAGWZSQ_219423
}
}
}