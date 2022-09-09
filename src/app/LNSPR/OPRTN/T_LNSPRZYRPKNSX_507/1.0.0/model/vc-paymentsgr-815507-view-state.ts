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
public T_LNSPRZYRPKNSX_507!:FormGroup;
public VC_PAYMENTSGR_815507:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_PAYMENTSSS_475199 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_PAYMENTSSS_978199 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_PAYMENTSSS_757199 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VA_DATEPQRPPIHOWWB_162199: CobisDateFieldModel = new CobisDateFieldModel();
public VA_CURRENCYXLRJUPE_746199: CobisDropDownListModel = new CobisDropDownListModel();
public VA_PAYMENTSTYPESSS_684199: CobisDropDownListModel = new CobisDropDownListModel();
public VA_VALUEXDSHNMADTK_664199: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_CUSTOMERMUPBSTT_916199: CobisTextInputButtonModel = new CobisTextInputButtonModel();
public VA_REFERENCEUFYFMY_654199: CobisTextInputButtonModel = new CobisTextInputButtonModel();
public VA_NOTESGZRCIQVEYN_753199: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public Spacer2665: CobisSpacerModel = new CobisSpacerModel();
public CM_TLNSPRZY_K05: CobisButtonModel = new CobisButtonModel();
public CM_TLNSPRZY_1_0: CobisButtonModel = new CobisButtonModel();
public CM_TLNSPRZY_N35: CobisButtonModel = new CobisButtonModel();
public CM_TLNSPRZY_RL6: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_PAYMENTSGR_815507.id="VC_PAYMENTSGR_815507";
this.VC_PAYMENTSGR_815507.name="PaymentsForm";
this.VC_PAYMENTSGR_815507.colSpan=1;
this.VC_PAYMENTSGR_815507.columns=1;
this.VC_PAYMENTSGR_815507.enabled=ConstantsApi.mode.All;
this.G_PAYMENTSSS_475199.id="G_PAYMENTSSS_475199";
this.G_PAYMENTSSS_475199.label=cobis.translate("LNSPR.LBL_LNSPR_INGRESORA_23779");
this.G_PAYMENTSSS_475199.name="GroupLayout1193";
this.G_PAYMENTSSS_475199.columns=1;
this.G_PAYMENTSSS_475199.childrenGroups = ["G_PAYMENTSSS_978199","G_PAYMENTSSS_757199"];
this.G_PAYMENTSSS_475199.colSpan=1;
this.G_PAYMENTSSS_475199.enabled=ConstantsApi.mode.All;
this.G_PAYMENTSSS_475199.visible=ConstantsApi.mode.All;
this.G_PAYMENTSSS_978199.id="G_PAYMENTSSS_978199";
this.G_PAYMENTSSS_978199.label=cobis.translate("LNSPR.LBL_LNSPR_INGRESORA_23779");
this.G_PAYMENTSSS_978199.name="Group2407";
this.G_PAYMENTSSS_978199.columns=12;
this.G_PAYMENTSSS_978199.labelOrientation="Top";
this.G_PAYMENTSSS_978199.colSpan=1;
this.G_PAYMENTSSS_978199.enabled=ConstantsApi.mode.All;
this.G_PAYMENTSSS_978199.visible=ConstantsApi.mode.All;
this.G_PAYMENTSSS_978199.attList = ["date","currencyType","paymentType","value","customer","reference","note"];
this.G_PAYMENTSSS_757199.id="G_PAYMENTSSS_757199";
this.G_PAYMENTSSS_757199.name="Group2874";
this.G_PAYMENTSSS_757199.columns=3;
this.G_PAYMENTSSS_757199.labelOrientation="Top";
this.G_PAYMENTSSS_757199.colSpan=1;
this.G_PAYMENTSSS_757199.enabled=ConstantsApi.mode.All;
this.G_PAYMENTSSS_757199.visible=ConstantsApi.mode.All;
this.CM_TLNSPRZY_K05.id = "CM_TLNSPRZY_K05";
this.CM_TLNSPRZY_K05.name = "Command1";
this.CM_TLNSPRZY_K05.causesValidation=true;
this.CM_TLNSPRZY_K05.submitOnEnter=false;
this.CM_TLNSPRZY_K05.setFocus=false;
this.CM_TLNSPRZY_K05.close=false;
this.CM_TLNSPRZY_K05.label = cobis.translate("LNSPR.LBL_LNSPR_GUARDARRI_81055");
this.CM_TLNSPRZY_K05.enabled = ConstantsApi.mode.All;
this.CM_TLNSPRZY_K05.visible= ConstantsApi.mode.All;
this.CM_TLNSPRZY_1_0.id = "CM_TLNSPRZY_1_0";
this.CM_TLNSPRZY_1_0.name = "Command2";
this.CM_TLNSPRZY_1_0.causesValidation=false;
this.CM_TLNSPRZY_1_0.submitOnEnter=false;
this.CM_TLNSPRZY_1_0.setFocus=false;
this.CM_TLNSPRZY_1_0.close=false;
this.CM_TLNSPRZY_1_0.label = cobis.translate("LNSPR.LBL_LNSPR_PROCESARR_13459");
this.CM_TLNSPRZY_1_0.enabled = ConstantsApi.mode.All;
this.CM_TLNSPRZY_1_0.visible= ConstantsApi.mode.All;
this.CM_TLNSPRZY_N35.id = "CM_TLNSPRZY_N35";
this.CM_TLNSPRZY_N35.name = "Command3";
this.CM_TLNSPRZY_N35.causesValidation=false;
this.CM_TLNSPRZY_N35.submitOnEnter=false;
this.CM_TLNSPRZY_N35.setFocus=false;
this.CM_TLNSPRZY_N35.close=false;
this.CM_TLNSPRZY_N35.label = cobis.translate("LNSPR.LBL_LNSPR_CANCELARR_70217");
this.CM_TLNSPRZY_N35.enabled = ConstantsApi.mode.All;
this.CM_TLNSPRZY_N35.visible= ConstantsApi.mode.All;
this.CM_TLNSPRZY_RL6.id = "CM_TLNSPRZY_RL6";
this.CM_TLNSPRZY_RL6.name = "Command4";
this.CM_TLNSPRZY_RL6.causesValidation=false;
this.CM_TLNSPRZY_RL6.submitOnEnter=false;
this.CM_TLNSPRZY_RL6.setFocus=false;
this.CM_TLNSPRZY_RL6.close=false;
this.CM_TLNSPRZY_RL6.label = cobis.translate("LNSPR.LBL_LOANS_SALIRBMGV_76124");
this.CM_TLNSPRZY_RL6.enabled = ConstantsApi.mode.All;
this.CM_TLNSPRZY_RL6.visible= ConstantsApi.mode.All;
this.VA_DATEPQRPPIHOWWB_162199.label = cobis.translate("LNSPR.LBL_LNSPR_FECHAQWBP_23514");
this.VA_DATEPQRPPIHOWWB_162199.entity = "Payment";
this.VA_DATEPQRPPIHOWWB_162199.attribute = "date";
this.VA_DATEPQRPPIHOWWB_162199.name="date";
this.VA_DATEPQRPPIHOWWB_162199.id="VA_DATEPQRPPIHOWWB_162199";
this.VA_DATEPQRPPIHOWWB_162199.colSpan=6;
this.VA_DATEPQRPPIHOWWB_162199.withoutLabel = false;
this.VA_DATEPQRPPIHOWWB_162199.readOnly = ConstantsApi.mode.Query;
this.VA_DATEPQRPPIHOWWB_162199.enabled = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_DATEPQRPPIHOWWB_162199.visible= ConstantsApi.mode.All;
this.VA_DATEPQRPPIHOWWB_162199.required = true;
this.VA_DATEPQRPPIHOWWB_162199.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_DATEPQRPPIHOWWB_162199.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LNSPR_INGRESEHA_96071')
};
this.VA_CURRENCYXLRJUPE_746199.label = cobis.translate("LNSPR.LBL_LNSPR_MONEDATUB_92849");
this.VA_CURRENCYXLRJUPE_746199.blankOption=true;
this.VA_CURRENCYXLRJUPE_746199.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_CURRENCYXLRJUPE_746199.entity = "Payment";
this.VA_CURRENCYXLRJUPE_746199.attribute = "currencyType";
this.VA_CURRENCYXLRJUPE_746199.textField = "value";
this.VA_CURRENCYXLRJUPE_746199.valueField = "code";
this.VA_CURRENCYXLRJUPE_746199.name="currency";
this.VA_CURRENCYXLRJUPE_746199.id="VA_CURRENCYXLRJUPE_746199";
this.VA_CURRENCYXLRJUPE_746199.colSpan=6;
this.VA_CURRENCYXLRJUPE_746199.withoutLabel = false;
this.VA_CURRENCYXLRJUPE_746199.readOnly = ConstantsApi.mode.Query;
this.VA_CURRENCYXLRJUPE_746199.enabled = ConstantsApi.mode.All;
this.VA_CURRENCYXLRJUPE_746199.visible= ConstantsApi.mode.All;
this.VA_CURRENCYXLRJUPE_746199.required = true;
this.VA_CURRENCYXLRJUPE_746199.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_CURRENCYXLRJUPE_746199.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LOANS_REQUERIOD_32696')
};
this.VA_PAYMENTSTYPESSS_684199.label = cobis.translate("LNSPR.LBL_LNSPR_APAGOVQRF_51833");
this.VA_PAYMENTSTYPESSS_684199.blankOption=true;
this.VA_PAYMENTSTYPESSS_684199.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_PAYMENTSTYPESSS_684199.entity = "Payment";
this.VA_PAYMENTSTYPESSS_684199.attribute = "paymentType";
this.VA_PAYMENTSTYPESSS_684199.cascadeFrom = "VA_CURRENCYXLRJUPE_746199";
this.VA_CURRENCYXLRJUPE_746199.isCascadeParent = true;
this.VA_PAYMENTSTYPESSS_684199.textField = "value";
this.VA_PAYMENTSTYPESSS_684199.valueField = "code";
this.VA_PAYMENTSTYPESSS_684199.name="paymentsTypes";
this.VA_PAYMENTSTYPESSS_684199.id="VA_PAYMENTSTYPESSS_684199";
this.VA_PAYMENTSTYPESSS_684199.colSpan=6;
this.VA_PAYMENTSTYPESSS_684199.withoutLabel = false;
this.VA_PAYMENTSTYPESSS_684199.readOnly = ConstantsApi.mode.Query;
this.VA_PAYMENTSTYPESSS_684199.enabled = ConstantsApi.mode.All;
this.VA_PAYMENTSTYPESSS_684199.visible= ConstantsApi.mode.All;
this.VA_PAYMENTSTYPESSS_684199.required = true;
this.VA_PAYMENTSTYPESSS_684199.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_PAYMENTSTYPESSS_684199.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LOANS_REQUERIOD_32696')
};
this.VA_VALUEXDSHNMADTK_664199.label = cobis.translate("LNSPR.LBL_LNSPR_MONTOEMFX_52083");
this.VA_VALUEXDSHNMADTK_664199.entity = "Payment";
this.VA_VALUEXDSHNMADTK_664199.attribute = "value";
this.VA_VALUEXDSHNMADTK_664199.textCase= TextCaseOptions.NONE;
this.VA_VALUEXDSHNMADTK_664199.isCustomValidated=true;
this.VA_VALUEXDSHNMADTK_664199.name="value";
this.VA_VALUEXDSHNMADTK_664199.id="VA_VALUEXDSHNMADTK_664199";
this.VA_VALUEXDSHNMADTK_664199.colSpan=6;
this.VA_VALUEXDSHNMADTK_664199.withoutLabel = false;
this.VA_VALUEXDSHNMADTK_664199.readOnly = ConstantsApi.mode.Query;
this.VA_VALUEXDSHNMADTK_664199.enabled = ConstantsApi.mode.All;
this.VA_VALUEXDSHNMADTK_664199.visible= ConstantsApi.mode.All;
this.VA_VALUEXDSHNMADTK_664199.required = true;
this.VA_VALUEXDSHNMADTK_664199.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_VALUEXDSHNMADTK_664199.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LNSPR_ELVALOROO_17736')
};
this.VA_CUSTOMERMUPBSTT_916199.id = "VA_CUSTOMERMUPBSTT_916199";
this.VA_CUSTOMERMUPBSTT_916199.name = "customer";
this.VA_CUSTOMERMUPBSTT_916199.label = cobis.translate("LNSPR.LBL_LNSPR_COBRARAFT_16046");
this.VA_CUSTOMERMUPBSTT_916199.entity = "Payment";
this.VA_CUSTOMERMUPBSTT_916199.attribute = "customer";
this.VA_CUSTOMERMUPBSTT_916199.colSpan = 6;
this.VA_CUSTOMERMUPBSTT_916199.format = "";
this.VA_CUSTOMERMUPBSTT_916199.maxlength= 254;
this.VA_CUSTOMERMUPBSTT_916199.readOnly = ConstantsApi.mode.Query;
this.VA_CUSTOMERMUPBSTT_916199.enabled = ConstantsApi.mode.All;
this.VA_CUSTOMERMUPBSTT_916199.visible= ConstantsApi.mode.All;
this.VA_CUSTOMERMUPBSTT_916199.textLocked = true;
this.VA_CUSTOMERMUPBSTT_916199.required = true;
this.VA_CUSTOMERMUPBSTT_916199.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_CUSTOMERMUPBSTT_916199.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LNSPR_DEBEINGRS_33262')
};
this.VA_REFERENCEUFYFMY_654199.id = "VA_REFERENCEUFYFMY_654199";
this.VA_REFERENCEUFYFMY_654199.name = "reference";
this.VA_REFERENCEUFYFMY_654199.label = cobis.translate("LNSPR.LBL_LNSPR_REFERENCI_47355");
this.VA_REFERENCEUFYFMY_654199.entity = "Payment";
this.VA_REFERENCEUFYFMY_654199.attribute = "reference";
this.VA_REFERENCEUFYFMY_654199.colSpan = 6;
this.VA_REFERENCEUFYFMY_654199.format = "";
this.VA_REFERENCEUFYFMY_654199.maxlength= 24;
this.VA_REFERENCEUFYFMY_654199.readOnly = ConstantsApi.mode.Query;
this.VA_REFERENCEUFYFMY_654199.enabled = ConstantsApi.mode.All;
this.VA_REFERENCEUFYFMY_654199.visible= ConstantsApi.mode.All;
this.VA_REFERENCEUFYFMY_654199.textLocked = true;
this.VA_REFERENCEUFYFMY_654199.inputRestrictionValidators = { onlyNumbers: true};
this.VA_NOTESGZRCIQVEYN_753199.label = cobis.translate("LNSPR.LBL_LNSPR_DESCRIPNI_65857");
this.VA_NOTESGZRCIQVEYN_753199.entity = "Payment";
this.VA_NOTESGZRCIQVEYN_753199.attribute = "note";
this.VA_NOTESGZRCIQVEYN_753199.maxlength= 64;
this.VA_NOTESGZRCIQVEYN_753199.textCase= TextCaseOptions.UPPER_CASE;
this.VA_NOTESGZRCIQVEYN_753199.name="notes";
this.VA_NOTESGZRCIQVEYN_753199.id="VA_NOTESGZRCIQVEYN_753199";
this.VA_NOTESGZRCIQVEYN_753199.colSpan=12;
this.VA_NOTESGZRCIQVEYN_753199.withoutLabel = false;
this.VA_NOTESGZRCIQVEYN_753199.readOnly = ConstantsApi.mode.Query;
this.VA_NOTESGZRCIQVEYN_753199.enabled = ConstantsApi.mode.All;
this.VA_NOTESGZRCIQVEYN_753199.visible= ConstantsApi.mode.All;
this.Spacer2665.id = "Spacer2665";
this.Spacer2665.name = "Spacer2665";
this.Spacer2665.colSpan = 1;
this.Spacer2665.visible= ConstantsApi.mode.All;
this.T_LNSPRZYRPKNSX_507 = this.formBuilder.group({
Payment: this.formBuilder.group({
date:[{value: null, disabled: !this.VA_DATEPQRPPIHOWWB_162199.visible},CobisDesignerUtil.getValidationFunctions(this.VA_DATEPQRPPIHOWWB_162199.validationFunctions!)],
currencyType:[{value: null, disabled: !this.VA_CURRENCYXLRJUPE_746199.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CURRENCYXLRJUPE_746199.validationFunctions!)],
paymentType:[{value: null, disabled: !this.VA_PAYMENTSTYPESSS_684199.visible},CobisDesignerUtil.getValidationFunctions(this.VA_PAYMENTSTYPESSS_684199.validationFunctions!)],
value:[{value: null, disabled: !this.VA_VALUEXDSHNMADTK_664199.visible},CobisDesignerUtil.getValidationFunctions(this.VA_VALUEXDSHNMADTK_664199.validationFunctions!)],
customer:[{value: null, disabled: !this.VA_CUSTOMERMUPBSTT_916199.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CUSTOMERMUPBSTT_916199.validationFunctions!)],
reference:[{value: null, disabled: !this.VA_REFERENCEUFYFMY_654199.visible},CobisDesignerUtil.getValidationFunctions(this.VA_REFERENCEUFYFMY_654199.validationFunctions!)],
note:[{value: null, disabled: !this.VA_NOTESGZRCIQVEYN_753199.visible},CobisDesignerUtil.getValidationFunctions(this.VA_NOTESGZRCIQVEYN_753199.validationFunctions!)],
amount:[null],
referencedAccount:[null],
retention:[null],
customerID:[null],
reductionType:[null],
user:[null],
category:[null],
collectionType:[null],
amountPayment:[null],
entireFee:[null],
quotationValue:[null],
payQuotationValue:[null],
numCheck:[null],
continuePayment:[null],
finePrepayment:[null],
operationCurrencyType:[null],
datePay:[null],
querySequential:[null],
advance:[null],
quotation:[null],
sequential:[null],
amountPrepayment:[null],
bank:[null],
onLine:[null],
unappliedPayments:[null],
sequentialPay:[null],
status:[null],
regional:[null],
billTo:[null],
unappliedAmount:[null],
prepayRate:[null],
}
),
PaymentMethod: this.formBuilder.group({
cobisProduct:[null],
description:[null],
retention:[null],
category:[null],
product:[null],
}
),
});
}
}