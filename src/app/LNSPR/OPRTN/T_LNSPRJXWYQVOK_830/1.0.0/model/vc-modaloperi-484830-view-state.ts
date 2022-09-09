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
public T_LNSPRJXWYQVOK_830!:FormGroup;
public VC_MODALOPERI_484830:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_MODALOPOEE_722800 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VA_ITEMUCXHLKNWSIV_574800: CobisDropDownListModel = new CobisDropDownListModel();
public VA_DESCRIPTIONZKOW_324800: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_TYPEITEMDSHZMXA_943800: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_PAYMENTMETHODDD_767800: CobisDropDownListModel = new CobisDropDownListModel();
public VA_FINANCEDTQRTUFB_342800: CobisDropDownListModel = new CobisDropDownListModel();
public VA_PRIORITYGWEJSIO_703800: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_REFERENCESIEQUP_560800: CobisDropDownListModel = new CobisDropDownListModel();
public VA_SIGNOOZSLFEAGNU_871800: CobisDropDownListModel = new CobisDropDownListModel();
public VA_FACTORTDKMIRESJ_493800: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_ASSOCIATETDSBLB_140800: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_ASSOCIATEVALEUU_342800: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_MINRATELDEORMJX_638800: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_PERCENTAGEOQEOK_815800: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_MAXRATEVBDOKWML_251800: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_REFERENCEREADSD_344800: CobisDropDownListModel = new CobisDropDownListModel();
public VA_SIGNREADJUSTEEM_203800: CobisDropDownListModel = new CobisDropDownListModel();
public VA_FACTORREADJUTTE_305800: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_CALCULATIONBEEE_756800: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_INSURANCEZHNZGP_890800: CobisDropDownListModel = new CobisDropDownListModel();
public VA_INSURANCETYPEEE_321800: CobisDropDownListModel = new CobisDropDownListModel();
public VA_AMOUNTKDNIXSXCQ_807800: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_RANKTRPXWXRXBWJ_371800: CobisDropDownListModel = new CobisDropDownListModel();
public CM_MODALOPE_NNN: CobisButtonModel = new CobisButtonModel();
public CM_MODALOPE_7TL: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_MODALOPERI_484830.id="VC_MODALOPERI_484830";
this.VC_MODALOPERI_484830.name="ModalOperationItems";
this.VC_MODALOPERI_484830.colSpan=1;
this.VC_MODALOPERI_484830.columns=1;
this.VC_MODALOPERI_484830.enabled=ConstantsApi.mode.All;
this.G_MODALOPOEE_722800.id="G_MODALOPOEE_722800";
this.G_MODALOPOEE_722800.name="Group1536";
this.G_MODALOPOEE_722800.columns=3;
this.G_MODALOPOEE_722800.labelOrientation="Top";
this.G_MODALOPOEE_722800.colSpan=1;
this.G_MODALOPOEE_722800.enabled=ConstantsApi.mode.All;
this.G_MODALOPOEE_722800.visible=ConstantsApi.mode.All;
this.G_MODALOPOEE_722800.attList = ["item","description","typeItem","paymentMethod","financed","priority","reference","signo","factor","associate","associateValue","minRate","percentage","maxRate","referenceReadjustment","signReadjustment","factorReadjustment","calculationBase","insurance","insuranceType","amount","rank"];
this.CM_MODALOPE_NNN.id = "CM_MODALOPE_NNN";
this.CM_MODALOPE_NNN.name = "Command1";
this.CM_MODALOPE_NNN.causesValidation=true;
this.CM_MODALOPE_NNN.submitOnEnter=false;
this.CM_MODALOPE_NNN.setFocus=false;
this.CM_MODALOPE_NNN.close=false;
this.CM_MODALOPE_NNN.label = cobis.translate("LNSPR.LBL_LNSPR_GUARDARRI_81055");
this.CM_MODALOPE_NNN.enabled = ConstantsApi.mode.All;
this.CM_MODALOPE_NNN.visible= ConstantsApi.mode.All;
this.CM_MODALOPE_7TL.id = "CM_MODALOPE_7TL";
this.CM_MODALOPE_7TL.name = "Command2";
this.CM_MODALOPE_7TL.causesValidation=false;
this.CM_MODALOPE_7TL.submitOnEnter=false;
this.CM_MODALOPE_7TL.setFocus=false;
this.CM_MODALOPE_7TL.close=true;
this.CM_MODALOPE_7TL.label = cobis.translate("LNSPR.LBL_LNSPR_CANCELARR_70217");
this.CM_MODALOPE_7TL.enabled = ConstantsApi.mode.All;
this.CM_MODALOPE_7TL.visible= ConstantsApi.mode.All;
this.VA_ITEMUCXHLKNWSIV_574800.label = cobis.translate("LNSPR.LBL_LNSPR_RUBROFBVM_52414");
this.VA_ITEMUCXHLKNWSIV_574800.blankOption=true;
this.VA_ITEMUCXHLKNWSIV_574800.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_ITEMUCXHLKNWSIV_574800.entity = "OperationItemsList";
this.VA_ITEMUCXHLKNWSIV_574800.attribute = "item";
this.VA_ITEMUCXHLKNWSIV_574800.textField = "item";
this.VA_ITEMUCXHLKNWSIV_574800.valueField = "codeItem";
this.VA_ITEMUCXHLKNWSIV_574800.showId= true;
this.VA_ITEMUCXHLKNWSIV_574800.name="item";
this.VA_ITEMUCXHLKNWSIV_574800.id="VA_ITEMUCXHLKNWSIV_574800";
this.VA_ITEMUCXHLKNWSIV_574800.colSpan=1;
this.VA_ITEMUCXHLKNWSIV_574800.withoutLabel = false;
this.VA_ITEMUCXHLKNWSIV_574800.readOnly = ConstantsApi.mode.Query;
this.VA_ITEMUCXHLKNWSIV_574800.enabled = ConstantsApi.mode.All;
this.VA_ITEMUCXHLKNWSIV_574800.visible= ConstantsApi.mode.All;
this.VA_ITEMUCXHLKNWSIV_574800.required = true;
this.VA_ITEMUCXHLKNWSIV_574800.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_ITEMUCXHLKNWSIV_574800.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LNSPR_CAMPOREIQ_59717')
};
this.VA_DESCRIPTIONZKOW_324800.label = cobis.translate("LNSPR.LBL_LNSPR_DESCRIPNC_75776");
this.VA_DESCRIPTIONZKOW_324800.entity = "OperationItemsList";
this.VA_DESCRIPTIONZKOW_324800.attribute = "description";
this.VA_DESCRIPTIONZKOW_324800.textCase= TextCaseOptions.NONE;
this.VA_DESCRIPTIONZKOW_324800.name="description";
this.VA_DESCRIPTIONZKOW_324800.id="VA_DESCRIPTIONZKOW_324800";
this.VA_DESCRIPTIONZKOW_324800.colSpan=2;
this.VA_DESCRIPTIONZKOW_324800.withoutLabel = false;
this.VA_DESCRIPTIONZKOW_324800.readOnly = ConstantsApi.mode.Query;
this.VA_DESCRIPTIONZKOW_324800.enabled = ConstantsApi.mode.Query;
this.VA_DESCRIPTIONZKOW_324800.visible= ConstantsApi.mode.All;
this.VA_TYPEITEMDSHZMXA_943800.label = cobis.translate("LNSPR.LBL_LNSPR_TIPOLDSKB_46090");
this.VA_TYPEITEMDSHZMXA_943800.entity = "OperationItemsList";
this.VA_TYPEITEMDSHZMXA_943800.attribute = "typeItem";
this.VA_TYPEITEMDSHZMXA_943800.textCase= TextCaseOptions.NONE;
this.VA_TYPEITEMDSHZMXA_943800.name="typeItem";
this.VA_TYPEITEMDSHZMXA_943800.id="VA_TYPEITEMDSHZMXA_943800";
this.VA_TYPEITEMDSHZMXA_943800.colSpan=1;
this.VA_TYPEITEMDSHZMXA_943800.withoutLabel = false;
this.VA_TYPEITEMDSHZMXA_943800.readOnly = ConstantsApi.mode.Query;
this.VA_TYPEITEMDSHZMXA_943800.enabled = ConstantsApi.mode.All;
this.VA_TYPEITEMDSHZMXA_943800.visible= ConstantsApi.mode.All;
this.VA_PAYMENTMETHODDD_767800.label = cobis.translate("LNSPR.LBL_LNSPR_APAGOWSUO_22122");
this.VA_PAYMENTMETHODDD_767800.blankOption=true;
this.VA_PAYMENTMETHODDD_767800.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_PAYMENTMETHODDD_767800.entity = "OperationItemsList";
this.VA_PAYMENTMETHODDD_767800.attribute = "paymentMethod";
this.VA_PAYMENTMETHODDD_767800.textField = "value";
this.VA_PAYMENTMETHODDD_767800.valueField = "code";
this.VA_PAYMENTMETHODDD_767800.name="paymentMethod";
this.VA_PAYMENTMETHODDD_767800.id="VA_PAYMENTMETHODDD_767800";
this.VA_PAYMENTMETHODDD_767800.colSpan=1;
this.VA_PAYMENTMETHODDD_767800.withoutLabel = false;
this.VA_PAYMENTMETHODDD_767800.readOnly = ConstantsApi.mode.Query;
this.VA_PAYMENTMETHODDD_767800.enabled = ConstantsApi.mode.All;
this.VA_PAYMENTMETHODDD_767800.visible= ConstantsApi.mode.All;
this.VA_FINANCEDTQRTUFB_342800.label = cobis.translate("LNSPR.LBL_LOANS_FINANCIAD_42980");
this.VA_FINANCEDTQRTUFB_342800.blankOption=true;
this.VA_FINANCEDTQRTUFB_342800.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_FINANCEDTQRTUFB_342800.entity = "OperationItemsList";
this.VA_FINANCEDTQRTUFB_342800.attribute = "financed";
this.VA_FINANCEDTQRTUFB_342800.textField = "value";
this.VA_FINANCEDTQRTUFB_342800.valueField = "code";
this.VA_FINANCEDTQRTUFB_342800.name="financed";
this.VA_FINANCEDTQRTUFB_342800.id="VA_FINANCEDTQRTUFB_342800";
this.VA_FINANCEDTQRTUFB_342800.colSpan=1;
this.VA_FINANCEDTQRTUFB_342800.withoutLabel = false;
this.VA_FINANCEDTQRTUFB_342800.readOnly = ConstantsApi.mode.Query;
this.VA_FINANCEDTQRTUFB_342800.enabled = ConstantsApi.mode.All;
this.VA_FINANCEDTQRTUFB_342800.visible= ConstantsApi.mode.All;
this.VA_PRIORITYGWEJSIO_703800.label = cobis.translate("LNSPR.LBL_LOANS_PRIORIDAA_88318");
this.VA_PRIORITYGWEJSIO_703800.entity = "OperationItemsList";
this.VA_PRIORITYGWEJSIO_703800.attribute = "priority";
this.VA_PRIORITYGWEJSIO_703800.textCase= TextCaseOptions.NONE;
this.VA_PRIORITYGWEJSIO_703800.isCustomValidated=true;
this.VA_PRIORITYGWEJSIO_703800.format= "n0";
this.VA_PRIORITYGWEJSIO_703800.name="priority";
this.VA_PRIORITYGWEJSIO_703800.id="VA_PRIORITYGWEJSIO_703800";
this.VA_PRIORITYGWEJSIO_703800.colSpan=1;
this.VA_PRIORITYGWEJSIO_703800.withoutLabel = false;
this.VA_PRIORITYGWEJSIO_703800.readOnly = ConstantsApi.mode.Query;
this.VA_PRIORITYGWEJSIO_703800.enabled = ConstantsApi.mode.All;
this.VA_PRIORITYGWEJSIO_703800.visible= ConstantsApi.mode.All;
this.VA_REFERENCESIEQUP_560800.label = cobis.translate("LNSPR.LBL_LNSPR_REFERENIC_88346");
this.VA_REFERENCESIEQUP_560800.blankOption=true;
this.VA_REFERENCESIEQUP_560800.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_REFERENCESIEQUP_560800.entity = "OperationItemsList";
this.VA_REFERENCESIEQUP_560800.attribute = "reference";
this.VA_REFERENCESIEQUP_560800.textField = "description";
this.VA_REFERENCESIEQUP_560800.valueField = "identifier";
this.VA_REFERENCESIEQUP_560800.showId= true;
this.VA_REFERENCESIEQUP_560800.name="reference";
this.VA_REFERENCESIEQUP_560800.id="VA_REFERENCESIEQUP_560800";
this.VA_REFERENCESIEQUP_560800.colSpan=1;
this.VA_REFERENCESIEQUP_560800.withoutLabel = false;
this.VA_REFERENCESIEQUP_560800.readOnly = ConstantsApi.mode.Query;
this.VA_REFERENCESIEQUP_560800.enabled = ConstantsApi.mode.All;
this.VA_REFERENCESIEQUP_560800.visible= ConstantsApi.mode.All;
this.VA_SIGNOOZSLFEAGNU_871800.label = cobis.translate("LNSPR.LBL_LNSPR_SIGNODWUU_39563");
this.VA_SIGNOOZSLFEAGNU_871800.blankOption=true;
this.VA_SIGNOOZSLFEAGNU_871800.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_SIGNOOZSLFEAGNU_871800.entity = "OperationItemsList";
this.VA_SIGNOOZSLFEAGNU_871800.attribute = "signo";
this.VA_SIGNOOZSLFEAGNU_871800.textField = "value";
this.VA_SIGNOOZSLFEAGNU_871800.valueField = "code";
this.VA_SIGNOOZSLFEAGNU_871800.name="signo";
this.VA_SIGNOOZSLFEAGNU_871800.id="VA_SIGNOOZSLFEAGNU_871800";
this.VA_SIGNOOZSLFEAGNU_871800.colSpan=1;
this.VA_SIGNOOZSLFEAGNU_871800.withoutLabel = false;
this.VA_SIGNOOZSLFEAGNU_871800.readOnly = ConstantsApi.mode.Query;
this.VA_SIGNOOZSLFEAGNU_871800.enabled = ConstantsApi.mode.All;
this.VA_SIGNOOZSLFEAGNU_871800.visible= ConstantsApi.mode.All;
this.VA_FACTORTDKMIRESJ_493800.label = cobis.translate("LNSPR.LBL_LNSPR_FACTORHYG_27995");
this.VA_FACTORTDKMIRESJ_493800.entity = "OperationItemsList";
this.VA_FACTORTDKMIRESJ_493800.attribute = "factor";
this.VA_FACTORTDKMIRESJ_493800.textCase= TextCaseOptions.NONE;
this.VA_FACTORTDKMIRESJ_493800.format= "#,######0.000000";
this.VA_FACTORTDKMIRESJ_493800.name="factor";
this.VA_FACTORTDKMIRESJ_493800.id="VA_FACTORTDKMIRESJ_493800";
this.VA_FACTORTDKMIRESJ_493800.colSpan=1;
this.VA_FACTORTDKMIRESJ_493800.withoutLabel = false;
this.VA_FACTORTDKMIRESJ_493800.readOnly = ConstantsApi.mode.Query;
this.VA_FACTORTDKMIRESJ_493800.enabled = ConstantsApi.mode.All;
this.VA_FACTORTDKMIRESJ_493800.visible= ConstantsApi.mode.All;
this.VA_FACTORTDKMIRESJ_493800.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.RangeValues,CustomValidators.valueRange('0','1000')]
]);
this.VA_FACTORTDKMIRESJ_493800.messagesValidations = {
valueRange: cobis.translate('LNSPR.MSG_LNSPR_VALORINTO_98795')
};
this.VA_ASSOCIATETDSBLB_140800.label = cobis.translate("LNSPR.LBL_LNSPR_REFASOCAA_43339");
this.VA_ASSOCIATETDSBLB_140800.entity = "OperationItemsList";
this.VA_ASSOCIATETDSBLB_140800.attribute = "associate";
this.VA_ASSOCIATETDSBLB_140800.textCase= TextCaseOptions.NONE;
this.VA_ASSOCIATETDSBLB_140800.name="associate";
this.VA_ASSOCIATETDSBLB_140800.id="VA_ASSOCIATETDSBLB_140800";
this.VA_ASSOCIATETDSBLB_140800.colSpan=1;
this.VA_ASSOCIATETDSBLB_140800.withoutLabel = false;
this.VA_ASSOCIATETDSBLB_140800.readOnly = ConstantsApi.mode.Query;
this.VA_ASSOCIATETDSBLB_140800.enabled = ConstantsApi.mode.Query;
this.VA_ASSOCIATETDSBLB_140800.visible= ConstantsApi.mode.All;
this.VA_ASSOCIATEVALEUU_342800.label = cobis.translate("LNSPR.LBL_LNSPR_VALORREFO_81387");
this.VA_ASSOCIATEVALEUU_342800.entity = "OperationItemsList";
this.VA_ASSOCIATEVALEUU_342800.attribute = "associateValue";
this.VA_ASSOCIATEVALEUU_342800.textCase= TextCaseOptions.NONE;
this.VA_ASSOCIATEVALEUU_342800.format= "#,######0.000000";
this.VA_ASSOCIATEVALEUU_342800.name="associateValue";
this.VA_ASSOCIATEVALEUU_342800.id="VA_ASSOCIATEVALEUU_342800";
this.VA_ASSOCIATEVALEUU_342800.colSpan=1;
this.VA_ASSOCIATEVALEUU_342800.withoutLabel = false;
this.VA_ASSOCIATEVALEUU_342800.readOnly = ConstantsApi.mode.Query;
this.VA_ASSOCIATEVALEUU_342800.enabled = ConstantsApi.mode.Query;
this.VA_ASSOCIATEVALEUU_342800.visible= ConstantsApi.mode.All;
this.VA_MINRATELDEORMJX_638800.label = cobis.translate("LNSPR.LBL_LNSPR_MNIMALJCZ_69933");
this.VA_MINRATELDEORMJX_638800.entity = "OperationItemsList";
this.VA_MINRATELDEORMJX_638800.attribute = "minRate";
this.VA_MINRATELDEORMJX_638800.textCase= TextCaseOptions.NONE;
this.VA_MINRATELDEORMJX_638800.isCustomValidated=true;
this.VA_MINRATELDEORMJX_638800.format= "#,######0.000000";
this.VA_MINRATELDEORMJX_638800.name="minRate";
this.VA_MINRATELDEORMJX_638800.id="VA_MINRATELDEORMJX_638800";
this.VA_MINRATELDEORMJX_638800.colSpan=1;
this.VA_MINRATELDEORMJX_638800.withoutLabel = false;
this.VA_MINRATELDEORMJX_638800.readOnly = ConstantsApi.mode.Query;
this.VA_MINRATELDEORMJX_638800.enabled = ConstantsApi.mode.All;
this.VA_MINRATELDEORMJX_638800.visible= ConstantsApi.mode.All;
this.VA_MINRATELDEORMJX_638800.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.CompareValue,CustomValidators.fixedCompare('0',CustomValidatorOperator.GREATER_THAN_OR_EQUAL)]
]);
this.VA_MINRATELDEORMJX_638800.messagesValidations = {
fixedCompare: cobis.translate('LNSPR.MSG_LNSPR_VALORINTO_98795')
};
this.VA_PERCENTAGEOQEOK_815800.label = cobis.translate("LNSPR.LBL_LOANS_TASAKBVNZ_56174");
this.VA_PERCENTAGEOQEOK_815800.entity = "OperationItemsList";
this.VA_PERCENTAGEOQEOK_815800.attribute = "percentage";
this.VA_PERCENTAGEOQEOK_815800.textCase= TextCaseOptions.NONE;
this.VA_PERCENTAGEOQEOK_815800.isCustomValidated=true;
this.VA_PERCENTAGEOQEOK_815800.format= "#,######0.000000";
this.VA_PERCENTAGEOQEOK_815800.name="percentage";
this.VA_PERCENTAGEOQEOK_815800.id="VA_PERCENTAGEOQEOK_815800";
this.VA_PERCENTAGEOQEOK_815800.colSpan=1;
this.VA_PERCENTAGEOQEOK_815800.withoutLabel = false;
this.VA_PERCENTAGEOQEOK_815800.readOnly = ConstantsApi.mode.Query;
this.VA_PERCENTAGEOQEOK_815800.enabled = ConstantsApi.mode.All;
this.VA_PERCENTAGEOQEOK_815800.visible= ConstantsApi.mode.All;
this.VA_PERCENTAGEOQEOK_815800.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.RangeValues,CustomValidators.valueRange('0','1000')]
]);
this.VA_PERCENTAGEOQEOK_815800.messagesValidations = {
valueRange: cobis.translate('LNSPR.MSG_LNSPR_VALORINTO_98795')
};
this.VA_MAXRATEVBDOKWML_251800.label = cobis.translate("LNSPR.LBL_LNSPR_MXIMAVCSS_98881");
this.VA_MAXRATEVBDOKWML_251800.entity = "OperationItemsList";
this.VA_MAXRATEVBDOKWML_251800.attribute = "maxRate";
this.VA_MAXRATEVBDOKWML_251800.textCase= TextCaseOptions.NONE;
this.VA_MAXRATEVBDOKWML_251800.isCustomValidated=true;
this.VA_MAXRATEVBDOKWML_251800.format= "#,######0.000000";
this.VA_MAXRATEVBDOKWML_251800.name="maxRate";
this.VA_MAXRATEVBDOKWML_251800.id="VA_MAXRATEVBDOKWML_251800";
this.VA_MAXRATEVBDOKWML_251800.colSpan=1;
this.VA_MAXRATEVBDOKWML_251800.withoutLabel = false;
this.VA_MAXRATEVBDOKWML_251800.readOnly = ConstantsApi.mode.Query;
this.VA_MAXRATEVBDOKWML_251800.enabled = ConstantsApi.mode.All;
this.VA_MAXRATEVBDOKWML_251800.visible= ConstantsApi.mode.All;
this.VA_MAXRATEVBDOKWML_251800.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.CompareValue,CustomValidators.fixedCompare('0',CustomValidatorOperator.GREATER_THAN_OR_EQUAL)]
]);
this.VA_MAXRATEVBDOKWML_251800.messagesValidations = {
fixedCompare: cobis.translate('LNSPR.MSG_LNSPR_VALORINTO_98795')
};
this.VA_REFERENCEREADSD_344800.label = cobis.translate("LNSPR.LBL_LNSPR_REFREAJSU_20053");
this.VA_REFERENCEREADSD_344800.blankOption=true;
this.VA_REFERENCEREADSD_344800.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_REFERENCEREADSD_344800.entity = "OperationItemsList";
this.VA_REFERENCEREADSD_344800.attribute = "referenceReadjustment";
this.VA_REFERENCEREADSD_344800.textField = "description";
this.VA_REFERENCEREADSD_344800.valueField = "identifier";
this.VA_REFERENCEREADSD_344800.showId= true;
this.VA_REFERENCEREADSD_344800.name="referenceReadjustment";
this.VA_REFERENCEREADSD_344800.id="VA_REFERENCEREADSD_344800";
this.VA_REFERENCEREADSD_344800.colSpan=1;
this.VA_REFERENCEREADSD_344800.withoutLabel = false;
this.VA_REFERENCEREADSD_344800.readOnly = ConstantsApi.mode.Query;
this.VA_REFERENCEREADSD_344800.enabled = ConstantsApi.mode.All;
this.VA_REFERENCEREADSD_344800.visible= ConstantsApi.mode.All;
this.VA_SIGNREADJUSTEEM_203800.label = cobis.translate("LNSPR.LBL_LNSPR_SIGNORETA_58140");
this.VA_SIGNREADJUSTEEM_203800.blankOption=true;
this.VA_SIGNREADJUSTEEM_203800.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_SIGNREADJUSTEEM_203800.entity = "OperationItemsList";
this.VA_SIGNREADJUSTEEM_203800.attribute = "signReadjustment";
this.VA_SIGNREADJUSTEEM_203800.textField = "value";
this.VA_SIGNREADJUSTEEM_203800.valueField = "code";
this.VA_SIGNREADJUSTEEM_203800.name="signReadjustment";
this.VA_SIGNREADJUSTEEM_203800.id="VA_SIGNREADJUSTEEM_203800";
this.VA_SIGNREADJUSTEEM_203800.colSpan=1;
this.VA_SIGNREADJUSTEEM_203800.withoutLabel = false;
this.VA_SIGNREADJUSTEEM_203800.readOnly = ConstantsApi.mode.Query;
this.VA_SIGNREADJUSTEEM_203800.enabled = ConstantsApi.mode.All;
this.VA_SIGNREADJUSTEEM_203800.visible= ConstantsApi.mode.All;
this.VA_FACTORREADJUTTE_305800.label = cobis.translate("LNSPR.LBL_LNSPR_FACTORRAJ_67007");
this.VA_FACTORREADJUTTE_305800.entity = "OperationItemsList";
this.VA_FACTORREADJUTTE_305800.attribute = "factorReadjustment";
this.VA_FACTORREADJUTTE_305800.textCase= TextCaseOptions.NONE;
this.VA_FACTORREADJUTTE_305800.format= "#,######0.000000";
this.VA_FACTORREADJUTTE_305800.name="factorReadjustment";
this.VA_FACTORREADJUTTE_305800.id="VA_FACTORREADJUTTE_305800";
this.VA_FACTORREADJUTTE_305800.colSpan=1;
this.VA_FACTORREADJUTTE_305800.withoutLabel = false;
this.VA_FACTORREADJUTTE_305800.readOnly = ConstantsApi.mode.Query;
this.VA_FACTORREADJUTTE_305800.enabled = ConstantsApi.mode.All;
this.VA_FACTORREADJUTTE_305800.visible= ConstantsApi.mode.All;
this.VA_FACTORREADJUTTE_305800.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.RangeValues,CustomValidators.valueRange('0','1000')]
]);
this.VA_FACTORREADJUTTE_305800.messagesValidations = {
valueRange: cobis.translate('LNSPR.MSG_LNSPR_VALORINTO_98795')
};
this.VA_CALCULATIONBEEE_756800.label = cobis.translate("LNSPR.LBL_LNSPR_BASECLCLU_56377");
this.VA_CALCULATIONBEEE_756800.entity = "OperationItemsList";
this.VA_CALCULATIONBEEE_756800.attribute = "calculationBase";
this.VA_CALCULATIONBEEE_756800.textCase= TextCaseOptions.NONE;
this.VA_CALCULATIONBEEE_756800.format= "c";
this.VA_CALCULATIONBEEE_756800.name="calculationBase";
this.VA_CALCULATIONBEEE_756800.id="VA_CALCULATIONBEEE_756800";
this.VA_CALCULATIONBEEE_756800.colSpan=1;
this.VA_CALCULATIONBEEE_756800.withoutLabel = false;
this.VA_CALCULATIONBEEE_756800.readOnly = ConstantsApi.mode.Query;
this.VA_CALCULATIONBEEE_756800.enabled = ConstantsApi.mode.All;
this.VA_CALCULATIONBEEE_756800.visible= ConstantsApi.mode.All;
this.VA_INSURANCEZHNZGP_890800.label = cobis.translate("LNSPR.LBL_LNSPR_ASEGURADA_82404");
this.VA_INSURANCEZHNZGP_890800.blankOption=true;
this.VA_INSURANCEZHNZGP_890800.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_INSURANCEZHNZGP_890800.entity = "OperationItemsList";
this.VA_INSURANCEZHNZGP_890800.attribute = "insurance";
this.VA_INSURANCEZHNZGP_890800.textField = "value";
this.VA_INSURANCEZHNZGP_890800.valueField = "code";
this.VA_INSURANCEZHNZGP_890800.showId= true;
this.VA_INSURANCEZHNZGP_890800.name="insurance";
this.VA_INSURANCEZHNZGP_890800.id="VA_INSURANCEZHNZGP_890800";
this.VA_INSURANCEZHNZGP_890800.colSpan=1;
this.VA_INSURANCEZHNZGP_890800.withoutLabel = false;
this.VA_INSURANCEZHNZGP_890800.readOnly = ConstantsApi.mode.Query;
this.VA_INSURANCEZHNZGP_890800.enabled = ConstantsApi.mode.All;
this.VA_INSURANCEZHNZGP_890800.visible= ConstantsApi.mode.All;
this.VA_INSURANCETYPEEE_321800.label = cobis.translate("LNSPR.LBL_LNSPR_TIPOSEGOO_23233");
this.VA_INSURANCETYPEEE_321800.blankOption=true;
this.VA_INSURANCETYPEEE_321800.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_INSURANCETYPEEE_321800.entity = "OperationItemsList";
this.VA_INSURANCETYPEEE_321800.attribute = "insuranceType";
this.VA_INSURANCETYPEEE_321800.textField = "value";
this.VA_INSURANCETYPEEE_321800.valueField = "code";
this.VA_INSURANCETYPEEE_321800.showId= true;
this.VA_INSURANCETYPEEE_321800.name="insuranceType";
this.VA_INSURANCETYPEEE_321800.id="VA_INSURANCETYPEEE_321800";
this.VA_INSURANCETYPEEE_321800.colSpan=1;
this.VA_INSURANCETYPEEE_321800.withoutLabel = false;
this.VA_INSURANCETYPEEE_321800.readOnly = ConstantsApi.mode.Query;
this.VA_INSURANCETYPEEE_321800.enabled = ConstantsApi.mode.All;
this.VA_INSURANCETYPEEE_321800.visible= ConstantsApi.mode.All;
this.VA_AMOUNTKDNIXSXCQ_807800.label = cobis.translate("LNSPR.LBL_LNSPR_VALORAOIJ_74397");
this.VA_AMOUNTKDNIXSXCQ_807800.entity = "OperationItemsList";
this.VA_AMOUNTKDNIXSXCQ_807800.attribute = "amount";
this.VA_AMOUNTKDNIXSXCQ_807800.textCase= TextCaseOptions.NONE;
this.VA_AMOUNTKDNIXSXCQ_807800.isCustomValidated=true;
this.VA_AMOUNTKDNIXSXCQ_807800.format= "c";
this.VA_AMOUNTKDNIXSXCQ_807800.name="amount";
this.VA_AMOUNTKDNIXSXCQ_807800.id="VA_AMOUNTKDNIXSXCQ_807800";
this.VA_AMOUNTKDNIXSXCQ_807800.colSpan=1;
this.VA_AMOUNTKDNIXSXCQ_807800.withoutLabel = false;
this.VA_AMOUNTKDNIXSXCQ_807800.readOnly = ConstantsApi.mode.Query;
this.VA_AMOUNTKDNIXSXCQ_807800.enabled = ConstantsApi.mode.All;
this.VA_AMOUNTKDNIXSXCQ_807800.visible= ConstantsApi.mode.All;
this.VA_RANKTRPXWXRXBWJ_371800.label = cobis.translate("LNSPR.LBL_LNSPR_SUBSIDIAO_46775");
this.VA_RANKTRPXWXRXBWJ_371800.blankOption=true;
this.VA_RANKTRPXWXRXBWJ_371800.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_RANKTRPXWXRXBWJ_371800.entity = "OperationItemsList";
this.VA_RANKTRPXWXRXBWJ_371800.attribute = "rank";
this.VA_RANKTRPXWXRXBWJ_371800.textField = "rangeName";
this.VA_RANKTRPXWXRXBWJ_371800.valueField = "idRange";
this.VA_RANKTRPXWXRXBWJ_371800.showId= true;
this.VA_RANKTRPXWXRXBWJ_371800.name="rank";
this.VA_RANKTRPXWXRXBWJ_371800.id="VA_RANKTRPXWXRXBWJ_371800";
this.VA_RANKTRPXWXRXBWJ_371800.colSpan=1;
this.VA_RANKTRPXWXRXBWJ_371800.withoutLabel = false;
this.VA_RANKTRPXWXRXBWJ_371800.readOnly = ConstantsApi.mode.Query;
this.VA_RANKTRPXWXRXBWJ_371800.enabled = ConstantsApi.mode.All;
this.VA_RANKTRPXWXRXBWJ_371800.visible= ConstantsApi.mode.All;
this.T_LNSPRJXWYQVOK_830 = this.formBuilder.group({
OperationItemsList: this.formBuilder.group({
item:[{value: null, disabled: !this.VA_ITEMUCXHLKNWSIV_574800.visible},CobisDesignerUtil.getValidationFunctions(this.VA_ITEMUCXHLKNWSIV_574800.validationFunctions!)],
description:[{value: null, disabled: !this.VA_DESCRIPTIONZKOW_324800.visible},CobisDesignerUtil.getValidationFunctions(this.VA_DESCRIPTIONZKOW_324800.validationFunctions!)],
typeItem:[{value: null, disabled: !this.VA_TYPEITEMDSHZMXA_943800.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TYPEITEMDSHZMXA_943800.validationFunctions!)],
paymentMethod:[{value: null, disabled: !this.VA_PAYMENTMETHODDD_767800.visible},CobisDesignerUtil.getValidationFunctions(this.VA_PAYMENTMETHODDD_767800.validationFunctions!)],
financed:[{value: null, disabled: !this.VA_FINANCEDTQRTUFB_342800.visible},CobisDesignerUtil.getValidationFunctions(this.VA_FINANCEDTQRTUFB_342800.validationFunctions!)],
priority:[{value: null, disabled: !this.VA_PRIORITYGWEJSIO_703800.visible},CobisDesignerUtil.getValidationFunctions(this.VA_PRIORITYGWEJSIO_703800.validationFunctions!)],
reference:[{value: null, disabled: !this.VA_REFERENCESIEQUP_560800.visible},CobisDesignerUtil.getValidationFunctions(this.VA_REFERENCESIEQUP_560800.validationFunctions!)],
signo:[{value: null, disabled: !this.VA_SIGNOOZSLFEAGNU_871800.visible},CobisDesignerUtil.getValidationFunctions(this.VA_SIGNOOZSLFEAGNU_871800.validationFunctions!)],
factor:[{value: null, disabled: !this.VA_FACTORTDKMIRESJ_493800.visible},CobisDesignerUtil.getValidationFunctions(this.VA_FACTORTDKMIRESJ_493800.validationFunctions!)],
associate:[{value: null, disabled: !this.VA_ASSOCIATETDSBLB_140800.visible},CobisDesignerUtil.getValidationFunctions(this.VA_ASSOCIATETDSBLB_140800.validationFunctions!)],
associateValue:[{value: null, disabled: !this.VA_ASSOCIATEVALEUU_342800.visible},CobisDesignerUtil.getValidationFunctions(this.VA_ASSOCIATEVALEUU_342800.validationFunctions!)],
minRate:[{value: null, disabled: !this.VA_MINRATELDEORMJX_638800.visible},CobisDesignerUtil.getValidationFunctions(this.VA_MINRATELDEORMJX_638800.validationFunctions!)],
percentage:[{value: null, disabled: !this.VA_PERCENTAGEOQEOK_815800.visible},CobisDesignerUtil.getValidationFunctions(this.VA_PERCENTAGEOQEOK_815800.validationFunctions!)],
maxRate:[{value: null, disabled: !this.VA_MAXRATEVBDOKWML_251800.visible},CobisDesignerUtil.getValidationFunctions(this.VA_MAXRATEVBDOKWML_251800.validationFunctions!)],
referenceReadjustment:[{value: null, disabled: !this.VA_REFERENCEREADSD_344800.visible},CobisDesignerUtil.getValidationFunctions(this.VA_REFERENCEREADSD_344800.validationFunctions!)],
signReadjustment:[{value: null, disabled: !this.VA_SIGNREADJUSTEEM_203800.visible},CobisDesignerUtil.getValidationFunctions(this.VA_SIGNREADJUSTEEM_203800.validationFunctions!)],
factorReadjustment:[{value: null, disabled: !this.VA_FACTORREADJUTTE_305800.visible},CobisDesignerUtil.getValidationFunctions(this.VA_FACTORREADJUTTE_305800.validationFunctions!)],
calculationBase:[{value: null, disabled: !this.VA_CALCULATIONBEEE_756800.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CALCULATIONBEEE_756800.validationFunctions!)],
insurance:[{value: null, disabled: !this.VA_INSURANCEZHNZGP_890800.visible},CobisDesignerUtil.getValidationFunctions(this.VA_INSURANCEZHNZGP_890800.validationFunctions!)],
insuranceType:[{value: null, disabled: !this.VA_INSURANCETYPEEE_321800.visible},CobisDesignerUtil.getValidationFunctions(this.VA_INSURANCETYPEEE_321800.validationFunctions!)],
amount:[{value: null, disabled: !this.VA_AMOUNTKDNIXSXCQ_807800.visible},CobisDesignerUtil.getValidationFunctions(this.VA_AMOUNTKDNIXSXCQ_807800.validationFunctions!)],
rank:[{value: null, disabled: !this.VA_RANKTRPXWXRXBWJ_371800.visible},CobisDesignerUtil.getValidationFunctions(this.VA_RANKTRPXWXRXBWJ_371800.validationFunctions!)],
applyRate:[null],
receivable:[null],
dividendType:[null],
interestPeriods:[null],
grace:[null],
negotiatedRate:[null],
pointsReadjustment:[null],
payArrears:[null],
totalRate:[null],
points:[null],
otherRates:[null],
banco:[null],
annualRate:[null],
warrantyType:[null],
category:[null],
typePoints:[null],
warrantyValue:[null],
cause:[null],
warrantyAccount:[null],
warrantyCoverage:[null],
limit:[null],
}
),
});
}
}