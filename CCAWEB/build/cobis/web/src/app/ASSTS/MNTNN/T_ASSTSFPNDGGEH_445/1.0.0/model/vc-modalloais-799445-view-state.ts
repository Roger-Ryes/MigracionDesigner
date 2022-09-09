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
public T_ASSTSFPNDGGEH_445!:FormGroup;
public VC_MODALLOAIS_799445:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_MODALLOIAN_919980 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VA_ITEMJIJOVTYJBHS_939980: CobisDropDownListModel = new CobisDropDownListModel();
public VA_DESCRIPTIONXUEB_185980: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_TYPEITEMKNWJUJS_933980: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_PAYMENTMETHODDD_900980: CobisDropDownListModel = new CobisDropDownListModel();
public VA_FINANCEDJTEBFXT_682980: CobisDropDownListModel = new CobisDropDownListModel();
public VA_PRIORITYDAWHSWY_831980: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_GRACEBSRSLHPWZD_368980: CobisDropDownListModel = new CobisDropDownListModel();
public VA_SIGNOWUDEEEWFGZ_407980: CobisDropDownListModel = new CobisDropDownListModel();
public VA_FACTOROWCCFAZFG_876980: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_ASSOCIATEXCCARD_648980: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_ASSOCIATEVALUEE_791980: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_MINRATEWSNBWPYC_520980: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_PERCENTAGEPOUVM_313980: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_MAXRATENAXLOHPN_726980: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_REFERENCEREAUUU_417980: CobisDropDownListModel = new CobisDropDownListModel();
public VA_SIGNREADJUSTETE_706980: CobisDropDownListModel = new CobisDropDownListModel();
public VA_FACTORREADJUTME_771980: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_CALCULATIONBASE_138980: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_INSURANCERNDVZP_758980: CobisDropDownListModel = new CobisDropDownListModel();
public VA_INSURANCETYPEEE_633980: CobisDropDownListModel = new CobisDropDownListModel();
public VA_AMOUNTFAWDLDZLX_436980: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_RANKGUJYXFFOUPY_234980: CobisDropDownListModel = new CobisDropDownListModel();
public CM_TASSTSFP_3SA: CobisButtonModel = new CobisButtonModel();
public CM_TASSTSFP_N45: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_MODALLOAIS_799445.id="VC_MODALLOAIS_799445";
this.VC_MODALLOAIS_799445.name="ModalLoanItemsForm";
this.VC_MODALLOAIS_799445.colSpan=1;
this.VC_MODALLOAIS_799445.columns=1;
this.VC_MODALLOAIS_799445.enabled=ConstantsApi.mode.All;
this.G_MODALLOIAN_919980.id="G_MODALLOIAN_919980";
this.G_MODALLOIAN_919980.name="Group1367";
this.G_MODALLOIAN_919980.columns=3;
this.G_MODALLOIAN_919980.labelOrientation="Top";
this.G_MODALLOIAN_919980.colSpan=1;
this.G_MODALLOIAN_919980.enabled=ConstantsApi.mode.All;
this.G_MODALLOIAN_919980.visible=ConstantsApi.mode.All;
this.G_MODALLOIAN_919980.attList = ["item","description","typeItem","paymentMethod","financed","priority","reference","signo","factor","associate","associateValue","minRate","percentage","maxRate","referenceReadjustment","signReadjustment","factorReadjustment","calculationBase","insurance","insuranceType","amount","rank"];
this.CM_TASSTSFP_3SA.id = "CM_TASSTSFP_3SA";
this.CM_TASSTSFP_3SA.name = "Command1";
this.CM_TASSTSFP_3SA.causesValidation=false;
this.CM_TASSTSFP_3SA.submitOnEnter=false;
this.CM_TASSTSFP_3SA.setFocus=false;
this.CM_TASSTSFP_3SA.close=false;
this.CM_TASSTSFP_3SA.label = cobis.translate("ASSTS.LBL_ASSTS_ASOCIARFV_34210");
this.CM_TASSTSFP_3SA.enabled = ConstantsApi.mode.All;
this.CM_TASSTSFP_3SA.visible= ConstantsApi.mode.All;
this.CM_TASSTSFP_N45.id = "CM_TASSTSFP_N45";
this.CM_TASSTSFP_N45.name = "Command2";
this.CM_TASSTSFP_N45.causesValidation=false;
this.CM_TASSTSFP_N45.submitOnEnter=false;
this.CM_TASSTSFP_N45.setFocus=false;
this.CM_TASSTSFP_N45.close=true;
this.CM_TASSTSFP_N45.label = cobis.translate("ASSTS.LBL_ASSTS_CANCELARR_70217");
this.CM_TASSTSFP_N45.enabled = ConstantsApi.mode.All;
this.CM_TASSTSFP_N45.visible= ConstantsApi.mode.All;
this.VA_ITEMJIJOVTYJBHS_939980.label = cobis.translate("ASSTS.LBL_ASSTS_RUBROFBVM_52414");
this.VA_ITEMJIJOVTYJBHS_939980.blankOption=true;
this.VA_ITEMJIJOVTYJBHS_939980.placeHolderLabel = cobis.translate("ASSTS.LBL_ASSTS_SELECCION_40905");
this.VA_ITEMJIJOVTYJBHS_939980.entity = "LoanItemsList";
this.VA_ITEMJIJOVTYJBHS_939980.attribute = "item";
this.VA_ITEMJIJOVTYJBHS_939980.textField = "item";
this.VA_ITEMJIJOVTYJBHS_939980.valueField = "codItem";
this.VA_ITEMJIJOVTYJBHS_939980.showId= true;
this.VA_ITEMJIJOVTYJBHS_939980.name="item";
this.VA_ITEMJIJOVTYJBHS_939980.id="VA_ITEMJIJOVTYJBHS_939980";
this.VA_ITEMJIJOVTYJBHS_939980.colSpan=1;
this.VA_ITEMJIJOVTYJBHS_939980.withoutLabel = false;
this.VA_ITEMJIJOVTYJBHS_939980.readOnly = ConstantsApi.mode.Query;
this.VA_ITEMJIJOVTYJBHS_939980.enabled = ConstantsApi.mode.All;
this.VA_ITEMJIJOVTYJBHS_939980.visible= ConstantsApi.mode.All;
this.VA_DESCRIPTIONXUEB_185980.label = cobis.translate("ASSTS.LBL_ASSTS_DESCRIPII_28027");
this.VA_DESCRIPTIONXUEB_185980.entity = "LoanItemsList";
this.VA_DESCRIPTIONXUEB_185980.attribute = "description";
this.VA_DESCRIPTIONXUEB_185980.textCase= TextCaseOptions.NONE;
this.VA_DESCRIPTIONXUEB_185980.name="description";
this.VA_DESCRIPTIONXUEB_185980.id="VA_DESCRIPTIONXUEB_185980";
this.VA_DESCRIPTIONXUEB_185980.colSpan=2;
this.VA_DESCRIPTIONXUEB_185980.withoutLabel = false;
this.VA_DESCRIPTIONXUEB_185980.readOnly = ConstantsApi.mode.Query;
this.VA_DESCRIPTIONXUEB_185980.enabled = ConstantsApi.mode.Query;
this.VA_DESCRIPTIONXUEB_185980.visible= ConstantsApi.mode.All;
this.VA_TYPEITEMKNWJUJS_933980.label = cobis.translate("ASSTS.LBL_ASSTS_TIPOLDSKB_46090");
this.VA_TYPEITEMKNWJUJS_933980.entity = "LoanItemsList";
this.VA_TYPEITEMKNWJUJS_933980.attribute = "typeItem";
this.VA_TYPEITEMKNWJUJS_933980.textCase= TextCaseOptions.NONE;
this.VA_TYPEITEMKNWJUJS_933980.name="typeItem";
this.VA_TYPEITEMKNWJUJS_933980.id="VA_TYPEITEMKNWJUJS_933980";
this.VA_TYPEITEMKNWJUJS_933980.colSpan=1;
this.VA_TYPEITEMKNWJUJS_933980.withoutLabel = false;
this.VA_TYPEITEMKNWJUJS_933980.readOnly = ConstantsApi.mode.Query;
this.VA_TYPEITEMKNWJUJS_933980.enabled = ConstantsApi.mode.All;
this.VA_TYPEITEMKNWJUJS_933980.visible= ConstantsApi.mode.All;
this.VA_PAYMENTMETHODDD_900980.label = cobis.translate("ASSTS.LBL_ASSTS_APAGOWSUO_22122");
this.VA_PAYMENTMETHODDD_900980.blankOption=true;
this.VA_PAYMENTMETHODDD_900980.placeHolderLabel = cobis.translate("ASSTS.LBL_ASSTS_SELECCION_40905");
this.VA_PAYMENTMETHODDD_900980.entity = "LoanItemsList";
this.VA_PAYMENTMETHODDD_900980.attribute = "paymentMethod";
this.VA_PAYMENTMETHODDD_900980.textField = "value";
this.VA_PAYMENTMETHODDD_900980.valueField = "code";
this.VA_PAYMENTMETHODDD_900980.showId= true;
this.VA_PAYMENTMETHODDD_900980.name="paymentMethod";
this.VA_PAYMENTMETHODDD_900980.id="VA_PAYMENTMETHODDD_900980";
this.VA_PAYMENTMETHODDD_900980.colSpan=1;
this.VA_PAYMENTMETHODDD_900980.withoutLabel = false;
this.VA_PAYMENTMETHODDD_900980.readOnly = ConstantsApi.mode.Query;
this.VA_PAYMENTMETHODDD_900980.enabled = ConstantsApi.mode.All;
this.VA_PAYMENTMETHODDD_900980.visible= ConstantsApi.mode.All;
this.VA_FINANCEDJTEBFXT_682980.label = cobis.translate("ASSTS.LBL_ASSTS_FINANCIAO_40117");
this.VA_FINANCEDJTEBFXT_682980.blankOption=true;
this.VA_FINANCEDJTEBFXT_682980.placeHolderLabel = cobis.translate("ASSTS.LBL_ASSTS_SELECCION_40905");
this.VA_FINANCEDJTEBFXT_682980.entity = "LoanItemsList";
this.VA_FINANCEDJTEBFXT_682980.attribute = "financed";
this.VA_FINANCEDJTEBFXT_682980.textField = "value";
this.VA_FINANCEDJTEBFXT_682980.valueField = "code";
this.VA_FINANCEDJTEBFXT_682980.showId= true;
this.VA_FINANCEDJTEBFXT_682980.name="financed";
this.VA_FINANCEDJTEBFXT_682980.id="VA_FINANCEDJTEBFXT_682980";
this.VA_FINANCEDJTEBFXT_682980.colSpan=1;
this.VA_FINANCEDJTEBFXT_682980.withoutLabel = false;
this.VA_FINANCEDJTEBFXT_682980.readOnly = ConstantsApi.mode.Query;
this.VA_FINANCEDJTEBFXT_682980.enabled = ConstantsApi.mode.All;
this.VA_FINANCEDJTEBFXT_682980.visible= ConstantsApi.mode.All;
this.VA_PRIORITYDAWHSWY_831980.label = cobis.translate("ASSTS.LBL_ASSTS_PRIORIDDD_58504");
this.VA_PRIORITYDAWHSWY_831980.entity = "LoanItemsList";
this.VA_PRIORITYDAWHSWY_831980.attribute = "priority";
this.VA_PRIORITYDAWHSWY_831980.textCase= TextCaseOptions.NONE;
this.VA_PRIORITYDAWHSWY_831980.isCustomValidated=true;
this.VA_PRIORITYDAWHSWY_831980.format= "n0";
this.VA_PRIORITYDAWHSWY_831980.name="priority";
this.VA_PRIORITYDAWHSWY_831980.id="VA_PRIORITYDAWHSWY_831980";
this.VA_PRIORITYDAWHSWY_831980.colSpan=1;
this.VA_PRIORITYDAWHSWY_831980.withoutLabel = false;
this.VA_PRIORITYDAWHSWY_831980.readOnly = ConstantsApi.mode.Query;
this.VA_PRIORITYDAWHSWY_831980.enabled = ConstantsApi.mode.None;
this.VA_PRIORITYDAWHSWY_831980.visible= ConstantsApi.mode.All;
this.VA_GRACEBSRSLHPWZD_368980.label = cobis.translate("ASSTS.LBL_ASSTS_REFERENCL_42296");
this.VA_GRACEBSRSLHPWZD_368980.blankOption=true;
this.VA_GRACEBSRSLHPWZD_368980.placeHolderLabel = cobis.translate("ASSTS.LBL_ASSTS_SELECCION_40905");
this.VA_GRACEBSRSLHPWZD_368980.entity = "LoanItemsList";
this.VA_GRACEBSRSLHPWZD_368980.attribute = "reference";
this.VA_GRACEBSRSLHPWZD_368980.textField = "description";
this.VA_GRACEBSRSLHPWZD_368980.valueField = "identifier";
this.VA_GRACEBSRSLHPWZD_368980.showId= true;
this.VA_GRACEBSRSLHPWZD_368980.name="reference";
this.VA_GRACEBSRSLHPWZD_368980.id="VA_GRACEBSRSLHPWZD_368980";
this.VA_GRACEBSRSLHPWZD_368980.colSpan=1;
this.VA_GRACEBSRSLHPWZD_368980.withoutLabel = false;
this.VA_GRACEBSRSLHPWZD_368980.readOnly = ConstantsApi.mode.Query;
this.VA_GRACEBSRSLHPWZD_368980.enabled = ConstantsApi.mode.All;
this.VA_GRACEBSRSLHPWZD_368980.visible= ConstantsApi.mode.All;
this.VA_SIGNOWUDEEEWFGZ_407980.label = cobis.translate("ASSTS.LBL_ASSTS_SIGNODWUU_39563");
this.VA_SIGNOWUDEEEWFGZ_407980.blankOption=true;
this.VA_SIGNOWUDEEEWFGZ_407980.placeHolderLabel = cobis.translate("ASSTS.LBL_ASSTS_SELECCION_40905");
this.VA_SIGNOWUDEEEWFGZ_407980.entity = "LoanItemsList";
this.VA_SIGNOWUDEEEWFGZ_407980.attribute = "signo";
this.VA_SIGNOWUDEEEWFGZ_407980.textField = "value";
this.VA_SIGNOWUDEEEWFGZ_407980.valueField = "code";
this.VA_SIGNOWUDEEEWFGZ_407980.showId= true;
this.VA_SIGNOWUDEEEWFGZ_407980.name="signo";
this.VA_SIGNOWUDEEEWFGZ_407980.id="VA_SIGNOWUDEEEWFGZ_407980";
this.VA_SIGNOWUDEEEWFGZ_407980.colSpan=1;
this.VA_SIGNOWUDEEEWFGZ_407980.withoutLabel = false;
this.VA_SIGNOWUDEEEWFGZ_407980.readOnly = ConstantsApi.mode.Query;
this.VA_SIGNOWUDEEEWFGZ_407980.enabled = ConstantsApi.mode.All;
this.VA_SIGNOWUDEEEWFGZ_407980.visible= ConstantsApi.mode.All;
this.VA_FACTOROWCCFAZFG_876980.label = cobis.translate("ASSTS.LBL_ASSTS_FACTORHYG_27995");
this.VA_FACTOROWCCFAZFG_876980.entity = "LoanItemsList";
this.VA_FACTOROWCCFAZFG_876980.attribute = "factor";
this.VA_FACTOROWCCFAZFG_876980.textCase= TextCaseOptions.NONE;
this.VA_FACTOROWCCFAZFG_876980.format= "#,######0.000000";
this.VA_FACTOROWCCFAZFG_876980.name="factor";
this.VA_FACTOROWCCFAZFG_876980.id="VA_FACTOROWCCFAZFG_876980";
this.VA_FACTOROWCCFAZFG_876980.colSpan=1;
this.VA_FACTOROWCCFAZFG_876980.withoutLabel = false;
this.VA_FACTOROWCCFAZFG_876980.readOnly = ConstantsApi.mode.Query;
this.VA_FACTOROWCCFAZFG_876980.enabled = ConstantsApi.mode.All;
this.VA_FACTOROWCCFAZFG_876980.visible= ConstantsApi.mode.All;
this.VA_FACTOROWCCFAZFG_876980.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.RangeValues,CustomValidators.valueRange('0','1000')]
]);
this.VA_FACTOROWCCFAZFG_876980.messagesValidations = {
valueRange: cobis.translate('ASSTS.MSG_ASSTS_VALORINTO_98795')
};
this.VA_ASSOCIATEXCCARD_648980.label = cobis.translate("ASSTS.LBL_ASSTS_REFASOCAA_43339");
this.VA_ASSOCIATEXCCARD_648980.entity = "LoanItemsList";
this.VA_ASSOCIATEXCCARD_648980.attribute = "associate";
this.VA_ASSOCIATEXCCARD_648980.textCase= TextCaseOptions.NONE;
this.VA_ASSOCIATEXCCARD_648980.name="associate";
this.VA_ASSOCIATEXCCARD_648980.id="VA_ASSOCIATEXCCARD_648980";
this.VA_ASSOCIATEXCCARD_648980.colSpan=1;
this.VA_ASSOCIATEXCCARD_648980.withoutLabel = false;
this.VA_ASSOCIATEXCCARD_648980.readOnly = ConstantsApi.mode.Query;
this.VA_ASSOCIATEXCCARD_648980.enabled = ConstantsApi.mode.Query;
this.VA_ASSOCIATEXCCARD_648980.visible= ConstantsApi.mode.All;
this.VA_ASSOCIATEVALUEE_791980.label = cobis.translate("ASSTS.LBL_ASSTS_VALORREFO_81387");
this.VA_ASSOCIATEVALUEE_791980.entity = "LoanItemsList";
this.VA_ASSOCIATEVALUEE_791980.attribute = "associateValue";
this.VA_ASSOCIATEVALUEE_791980.textCase= TextCaseOptions.NONE;
this.VA_ASSOCIATEVALUEE_791980.format= "#,######0.000000";
this.VA_ASSOCIATEVALUEE_791980.name="associateValue";
this.VA_ASSOCIATEVALUEE_791980.id="VA_ASSOCIATEVALUEE_791980";
this.VA_ASSOCIATEVALUEE_791980.colSpan=1;
this.VA_ASSOCIATEVALUEE_791980.withoutLabel = false;
this.VA_ASSOCIATEVALUEE_791980.readOnly = ConstantsApi.mode.Query;
this.VA_ASSOCIATEVALUEE_791980.enabled = ConstantsApi.mode.Query;
this.VA_ASSOCIATEVALUEE_791980.visible= ConstantsApi.mode.All;
this.VA_MINRATEWSNBWPYC_520980.label = cobis.translate("ASSTS.LBL_ASSTS_MNIMAGAZC_15390");
this.VA_MINRATEWSNBWPYC_520980.entity = "LoanItemsList";
this.VA_MINRATEWSNBWPYC_520980.attribute = "minRate";
this.VA_MINRATEWSNBWPYC_520980.textCase= TextCaseOptions.NONE;
this.VA_MINRATEWSNBWPYC_520980.isCustomValidated=true;
this.VA_MINRATEWSNBWPYC_520980.format= "#,######0.000000";
this.VA_MINRATEWSNBWPYC_520980.name="minRate";
this.VA_MINRATEWSNBWPYC_520980.id="VA_MINRATEWSNBWPYC_520980";
this.VA_MINRATEWSNBWPYC_520980.colSpan=1;
this.VA_MINRATEWSNBWPYC_520980.withoutLabel = false;
this.VA_MINRATEWSNBWPYC_520980.readOnly = ConstantsApi.mode.Query;
this.VA_MINRATEWSNBWPYC_520980.enabled = ConstantsApi.mode.None;
this.VA_MINRATEWSNBWPYC_520980.visible= ConstantsApi.mode.All;
this.VA_MINRATEWSNBWPYC_520980.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.CompareValue,CustomValidators.fixedCompare('0',CustomValidatorOperator.GREATER_THAN_OR_EQUAL)]
]);
this.VA_MINRATEWSNBWPYC_520980.messagesValidations = {
fixedCompare: cobis.translate('ASSTS.MSG_ASSTS_VALORINTO_98795')
};
this.VA_PERCENTAGEPOUVM_313980.label = cobis.translate("ASSTS.LBL_ASSTS_TASAQDBMK_45779");
this.VA_PERCENTAGEPOUVM_313980.entity = "LoanItemsList";
this.VA_PERCENTAGEPOUVM_313980.attribute = "percentage";
this.VA_PERCENTAGEPOUVM_313980.textCase= TextCaseOptions.NONE;
this.VA_PERCENTAGEPOUVM_313980.isCustomValidated=true;
this.VA_PERCENTAGEPOUVM_313980.format= "#,######0.000000";
this.VA_PERCENTAGEPOUVM_313980.name="percentage";
this.VA_PERCENTAGEPOUVM_313980.id="VA_PERCENTAGEPOUVM_313980";
this.VA_PERCENTAGEPOUVM_313980.colSpan=1;
this.VA_PERCENTAGEPOUVM_313980.withoutLabel = false;
this.VA_PERCENTAGEPOUVM_313980.readOnly = ConstantsApi.mode.Query;
this.VA_PERCENTAGEPOUVM_313980.enabled = ConstantsApi.mode.All;
this.VA_PERCENTAGEPOUVM_313980.visible= ConstantsApi.mode.All;
this.VA_PERCENTAGEPOUVM_313980.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.RangeValues,CustomValidators.valueRange('0','1000')]
]);
this.VA_PERCENTAGEPOUVM_313980.messagesValidations = {
valueRange: cobis.translate('ASSTS.MSG_ASSTS_VALORINTO_98795')
};
this.VA_MAXRATENAXLOHPN_726980.label = cobis.translate("ASSTS.LBL_ASSTS_MXIMAVINR_88310");
this.VA_MAXRATENAXLOHPN_726980.entity = "LoanItemsList";
this.VA_MAXRATENAXLOHPN_726980.attribute = "maxRate";
this.VA_MAXRATENAXLOHPN_726980.textCase= TextCaseOptions.NONE;
this.VA_MAXRATENAXLOHPN_726980.isCustomValidated=true;
this.VA_MAXRATENAXLOHPN_726980.format= "#,######0.000000";
this.VA_MAXRATENAXLOHPN_726980.name="maxRate";
this.VA_MAXRATENAXLOHPN_726980.id="VA_MAXRATENAXLOHPN_726980";
this.VA_MAXRATENAXLOHPN_726980.colSpan=1;
this.VA_MAXRATENAXLOHPN_726980.withoutLabel = false;
this.VA_MAXRATENAXLOHPN_726980.readOnly = ConstantsApi.mode.Query;
this.VA_MAXRATENAXLOHPN_726980.enabled = ConstantsApi.mode.None;
this.VA_MAXRATENAXLOHPN_726980.visible= ConstantsApi.mode.All;
this.VA_MAXRATENAXLOHPN_726980.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.CompareValue,CustomValidators.fixedCompare('0',CustomValidatorOperator.GREATER_THAN_OR_EQUAL)]
]);
this.VA_MAXRATENAXLOHPN_726980.messagesValidations = {
fixedCompare: cobis.translate('ASSTS.MSG_ASSTS_VALORINTO_98795')
};
this.VA_REFERENCEREAUUU_417980.label = cobis.translate("ASSTS.LBL_ASSTS_REFREAJSU_20053");
this.VA_REFERENCEREAUUU_417980.blankOption=true;
this.VA_REFERENCEREAUUU_417980.placeHolderLabel = cobis.translate("ASSTS.LBL_ASSTS_SELECCION_40905");
this.VA_REFERENCEREAUUU_417980.entity = "LoanItemsList";
this.VA_REFERENCEREAUUU_417980.attribute = "referenceReadjustment";
this.VA_REFERENCEREAUUU_417980.textField = "description";
this.VA_REFERENCEREAUUU_417980.valueField = "identifier";
this.VA_REFERENCEREAUUU_417980.showId= true;
this.VA_REFERENCEREAUUU_417980.name="referenceReadjustment";
this.VA_REFERENCEREAUUU_417980.id="VA_REFERENCEREAUUU_417980";
this.VA_REFERENCEREAUUU_417980.colSpan=1;
this.VA_REFERENCEREAUUU_417980.withoutLabel = false;
this.VA_REFERENCEREAUUU_417980.readOnly = ConstantsApi.mode.Query;
this.VA_REFERENCEREAUUU_417980.enabled = ConstantsApi.mode.All;
this.VA_REFERENCEREAUUU_417980.visible= ConstantsApi.mode.All;
this.VA_SIGNREADJUSTETE_706980.label = cobis.translate("ASSTS.LBL_ASSTS_SIGNORETA_58140");
this.VA_SIGNREADJUSTETE_706980.blankOption=true;
this.VA_SIGNREADJUSTETE_706980.placeHolderLabel = cobis.translate("ASSTS.LBL_ASSTS_SELECCION_40905");
this.VA_SIGNREADJUSTETE_706980.entity = "LoanItemsList";
this.VA_SIGNREADJUSTETE_706980.attribute = "signReadjustment";
this.VA_SIGNREADJUSTETE_706980.textField = "value";
this.VA_SIGNREADJUSTETE_706980.valueField = "code";
this.VA_SIGNREADJUSTETE_706980.showId= true;
this.VA_SIGNREADJUSTETE_706980.name="signReadjustment";
this.VA_SIGNREADJUSTETE_706980.id="VA_SIGNREADJUSTETE_706980";
this.VA_SIGNREADJUSTETE_706980.colSpan=1;
this.VA_SIGNREADJUSTETE_706980.withoutLabel = false;
this.VA_SIGNREADJUSTETE_706980.readOnly = ConstantsApi.mode.Query;
this.VA_SIGNREADJUSTETE_706980.enabled = ConstantsApi.mode.All;
this.VA_SIGNREADJUSTETE_706980.visible= ConstantsApi.mode.All;
this.VA_FACTORREADJUTME_771980.label = cobis.translate("ASSTS.LBL_ASSTS_FACTORRAJ_67007");
this.VA_FACTORREADJUTME_771980.entity = "LoanItemsList";
this.VA_FACTORREADJUTME_771980.attribute = "factorReadjustment";
this.VA_FACTORREADJUTME_771980.textCase= TextCaseOptions.NONE;
this.VA_FACTORREADJUTME_771980.format= "#,######0.000000";
this.VA_FACTORREADJUTME_771980.name="factorReadjustment";
this.VA_FACTORREADJUTME_771980.id="VA_FACTORREADJUTME_771980";
this.VA_FACTORREADJUTME_771980.colSpan=1;
this.VA_FACTORREADJUTME_771980.withoutLabel = false;
this.VA_FACTORREADJUTME_771980.readOnly = ConstantsApi.mode.Query;
this.VA_FACTORREADJUTME_771980.enabled = ConstantsApi.mode.All;
this.VA_FACTORREADJUTME_771980.visible= ConstantsApi.mode.All;
this.VA_FACTORREADJUTME_771980.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.RangeValues,CustomValidators.valueRange('0','1000')]
]);
this.VA_FACTORREADJUTME_771980.messagesValidations = {
valueRange: cobis.translate('ASSTS.MSG_ASSTS_VALORINTO_98795')
};
this.VA_CALCULATIONBASE_138980.label = cobis.translate("ASSTS.LBL_ASSTS_BASECLCOO_14808");
this.VA_CALCULATIONBASE_138980.entity = "LoanItemsList";
this.VA_CALCULATIONBASE_138980.attribute = "calculationBase";
this.VA_CALCULATIONBASE_138980.textCase= TextCaseOptions.NONE;
this.VA_CALCULATIONBASE_138980.format= "c";
this.VA_CALCULATIONBASE_138980.name="calculationBase";
this.VA_CALCULATIONBASE_138980.id="VA_CALCULATIONBASE_138980";
this.VA_CALCULATIONBASE_138980.colSpan=1;
this.VA_CALCULATIONBASE_138980.withoutLabel = false;
this.VA_CALCULATIONBASE_138980.readOnly = ConstantsApi.mode.Query;
this.VA_CALCULATIONBASE_138980.enabled = ConstantsApi.mode.All;
this.VA_CALCULATIONBASE_138980.visible= ConstantsApi.mode.All;
this.VA_INSURANCERNDVZP_758980.label = cobis.translate("ASSTS.LBL_ASSTS_ASEGURADA_82404");
this.VA_INSURANCERNDVZP_758980.blankOption=true;
this.VA_INSURANCERNDVZP_758980.placeHolderLabel = cobis.translate("ASSTS.LBL_ASSTS_SELECCION_40905");
this.VA_INSURANCERNDVZP_758980.entity = "LoanItemsList";
this.VA_INSURANCERNDVZP_758980.attribute = "insurance";
this.VA_INSURANCERNDVZP_758980.textField = "value";
this.VA_INSURANCERNDVZP_758980.valueField = "code";
this.VA_INSURANCERNDVZP_758980.showId= true;
this.VA_INSURANCERNDVZP_758980.name="insurance";
this.VA_INSURANCERNDVZP_758980.id="VA_INSURANCERNDVZP_758980";
this.VA_INSURANCERNDVZP_758980.colSpan=1;
this.VA_INSURANCERNDVZP_758980.withoutLabel = false;
this.VA_INSURANCERNDVZP_758980.readOnly = ConstantsApi.mode.Query;
this.VA_INSURANCERNDVZP_758980.enabled = ConstantsApi.mode.All;
this.VA_INSURANCERNDVZP_758980.visible= ConstantsApi.mode.All;
this.VA_INSURANCETYPEEE_633980.label = cobis.translate("ASSTS.LBL_ASSTS_TIPOSEGOO_23233");
this.VA_INSURANCETYPEEE_633980.blankOption=true;
this.VA_INSURANCETYPEEE_633980.placeHolderLabel = cobis.translate("ASSTS.LBL_ASSTS_SELECCION_40905");
this.VA_INSURANCETYPEEE_633980.entity = "LoanItemsList";
this.VA_INSURANCETYPEEE_633980.attribute = "insuranceType";
this.VA_INSURANCETYPEEE_633980.textField = "value";
this.VA_INSURANCETYPEEE_633980.valueField = "code";
this.VA_INSURANCETYPEEE_633980.showId= true;
this.VA_INSURANCETYPEEE_633980.name="insuranceType";
this.VA_INSURANCETYPEEE_633980.id="VA_INSURANCETYPEEE_633980";
this.VA_INSURANCETYPEEE_633980.colSpan=1;
this.VA_INSURANCETYPEEE_633980.withoutLabel = false;
this.VA_INSURANCETYPEEE_633980.readOnly = ConstantsApi.mode.Query;
this.VA_INSURANCETYPEEE_633980.enabled = ConstantsApi.mode.All;
this.VA_INSURANCETYPEEE_633980.visible= ConstantsApi.mode.All;
this.VA_AMOUNTFAWDLDZLX_436980.label = cobis.translate("ASSTS.LBL_ASSTS_VALORAOIJ_74397");
this.VA_AMOUNTFAWDLDZLX_436980.entity = "LoanItemsList";
this.VA_AMOUNTFAWDLDZLX_436980.attribute = "amount";
this.VA_AMOUNTFAWDLDZLX_436980.textCase= TextCaseOptions.NONE;
this.VA_AMOUNTFAWDLDZLX_436980.isCustomValidated=true;
this.VA_AMOUNTFAWDLDZLX_436980.format= "c";
this.VA_AMOUNTFAWDLDZLX_436980.name="amount";
this.VA_AMOUNTFAWDLDZLX_436980.id="VA_AMOUNTFAWDLDZLX_436980";
this.VA_AMOUNTFAWDLDZLX_436980.colSpan=1;
this.VA_AMOUNTFAWDLDZLX_436980.withoutLabel = false;
this.VA_AMOUNTFAWDLDZLX_436980.readOnly = ConstantsApi.mode.Query;
this.VA_AMOUNTFAWDLDZLX_436980.enabled = ConstantsApi.mode.All;
this.VA_AMOUNTFAWDLDZLX_436980.visible= ConstantsApi.mode.All;
this.VA_RANKGUJYXFFOUPY_234980.label = cobis.translate("ASSTS.LBL_ASSTS_SUBSIDIOO_12700");
this.VA_RANKGUJYXFFOUPY_234980.blankOption=true;
this.VA_RANKGUJYXFFOUPY_234980.placeHolderLabel = cobis.translate("ASSTS.LBL_ASSTS_SELECCIRR_76753");
this.VA_RANKGUJYXFFOUPY_234980.entity = "LoanItemsList";
this.VA_RANKGUJYXFFOUPY_234980.attribute = "rank";
this.VA_RANKGUJYXFFOUPY_234980.textField = "rangeName";
this.VA_RANKGUJYXFFOUPY_234980.valueField = "idRange";
this.VA_RANKGUJYXFFOUPY_234980.showId= true;
this.VA_RANKGUJYXFFOUPY_234980.name="rank";
this.VA_RANKGUJYXFFOUPY_234980.id="VA_RANKGUJYXFFOUPY_234980";
this.VA_RANKGUJYXFFOUPY_234980.colSpan=1;
this.VA_RANKGUJYXFFOUPY_234980.withoutLabel = false;
this.VA_RANKGUJYXFFOUPY_234980.readOnly = ConstantsApi.mode.Query;
this.VA_RANKGUJYXFFOUPY_234980.enabled = ConstantsApi.mode.All;
this.VA_RANKGUJYXFFOUPY_234980.visible= ConstantsApi.mode.All;
this.T_ASSTSFPNDGGEH_445 = this.formBuilder.group({
LoanItemsList: this.formBuilder.group({
item:[{value: null, disabled: !this.VA_ITEMJIJOVTYJBHS_939980.visible},CobisDesignerUtil.getValidationFunctions(this.VA_ITEMJIJOVTYJBHS_939980.validationFunctions!)],
description:[{value: null, disabled: !this.VA_DESCRIPTIONXUEB_185980.visible},CobisDesignerUtil.getValidationFunctions(this.VA_DESCRIPTIONXUEB_185980.validationFunctions!)],
typeItem:[{value: null, disabled: !this.VA_TYPEITEMKNWJUJS_933980.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TYPEITEMKNWJUJS_933980.validationFunctions!)],
paymentMethod:[{value: null, disabled: !this.VA_PAYMENTMETHODDD_900980.visible},CobisDesignerUtil.getValidationFunctions(this.VA_PAYMENTMETHODDD_900980.validationFunctions!)],
financed:[{value: null, disabled: !this.VA_FINANCEDJTEBFXT_682980.visible},CobisDesignerUtil.getValidationFunctions(this.VA_FINANCEDJTEBFXT_682980.validationFunctions!)],
priority:[{value: null, disabled: !this.VA_PRIORITYDAWHSWY_831980.visible},CobisDesignerUtil.getValidationFunctions(this.VA_PRIORITYDAWHSWY_831980.validationFunctions!)],
reference:[{value: null, disabled: !this.VA_GRACEBSRSLHPWZD_368980.visible},CobisDesignerUtil.getValidationFunctions(this.VA_GRACEBSRSLHPWZD_368980.validationFunctions!)],
signo:[{value: null, disabled: !this.VA_SIGNOWUDEEEWFGZ_407980.visible},CobisDesignerUtil.getValidationFunctions(this.VA_SIGNOWUDEEEWFGZ_407980.validationFunctions!)],
factor:[{value: null, disabled: !this.VA_FACTOROWCCFAZFG_876980.visible},CobisDesignerUtil.getValidationFunctions(this.VA_FACTOROWCCFAZFG_876980.validationFunctions!)],
associate:[{value: null, disabled: !this.VA_ASSOCIATEXCCARD_648980.visible},CobisDesignerUtil.getValidationFunctions(this.VA_ASSOCIATEXCCARD_648980.validationFunctions!)],
associateValue:[{value: null, disabled: !this.VA_ASSOCIATEVALUEE_791980.visible},CobisDesignerUtil.getValidationFunctions(this.VA_ASSOCIATEVALUEE_791980.validationFunctions!)],
minRate:[{value: null, disabled: !this.VA_MINRATEWSNBWPYC_520980.visible},CobisDesignerUtil.getValidationFunctions(this.VA_MINRATEWSNBWPYC_520980.validationFunctions!)],
percentage:[{value: null, disabled: !this.VA_PERCENTAGEPOUVM_313980.visible},CobisDesignerUtil.getValidationFunctions(this.VA_PERCENTAGEPOUVM_313980.validationFunctions!)],
maxRate:[{value: null, disabled: !this.VA_MAXRATENAXLOHPN_726980.visible},CobisDesignerUtil.getValidationFunctions(this.VA_MAXRATENAXLOHPN_726980.validationFunctions!)],
referenceReadjustment:[{value: null, disabled: !this.VA_REFERENCEREAUUU_417980.visible},CobisDesignerUtil.getValidationFunctions(this.VA_REFERENCEREAUUU_417980.validationFunctions!)],
signReadjustment:[{value: null, disabled: !this.VA_SIGNREADJUSTETE_706980.visible},CobisDesignerUtil.getValidationFunctions(this.VA_SIGNREADJUSTETE_706980.validationFunctions!)],
factorReadjustment:[{value: null, disabled: !this.VA_FACTORREADJUTME_771980.visible},CobisDesignerUtil.getValidationFunctions(this.VA_FACTORREADJUTME_771980.validationFunctions!)],
calculationBase:[{value: null, disabled: !this.VA_CALCULATIONBASE_138980.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CALCULATIONBASE_138980.validationFunctions!)],
insurance:[{value: null, disabled: !this.VA_INSURANCERNDVZP_758980.visible},CobisDesignerUtil.getValidationFunctions(this.VA_INSURANCERNDVZP_758980.validationFunctions!)],
insuranceType:[{value: null, disabled: !this.VA_INSURANCETYPEEE_633980.visible},CobisDesignerUtil.getValidationFunctions(this.VA_INSURANCETYPEEE_633980.validationFunctions!)],
amount:[{value: null, disabled: !this.VA_AMOUNTFAWDLDZLX_436980.visible},CobisDesignerUtil.getValidationFunctions(this.VA_AMOUNTFAWDLDZLX_436980.validationFunctions!)],
rank:[{value: null, disabled: !this.VA_RANKGUJYXFFOUPY_234980.visible},CobisDesignerUtil.getValidationFunctions(this.VA_RANKGUJYXFFOUPY_234980.validationFunctions!)],
typePoints:[null],
grace:[null],
bank:[null],
annualRate:[null],
warrantyType:[null],
dividendType:[null],
limit:[null],
totalRate:[null],
payArrears:[null],
otherRates:[null],
interestPeriods:[null],
warrantyAccount:[null],
pointsReadjustment:[null],
category:[null],
receivable:[null],
warrantyCoverage:[null],
negotationRate:[null],
warrantyValue:[null],
points:[null],
cause:[null],
}
),
});
}
}