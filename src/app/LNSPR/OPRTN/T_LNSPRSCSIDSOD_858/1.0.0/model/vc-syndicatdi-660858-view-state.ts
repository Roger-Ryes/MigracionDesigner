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
public T_LNSPRSCSIDSOD_858!:FormGroup;
public VC_SYNDICATDI_660858:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_SYNDICALLT_242405 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VA_PARTICIPANTSTOP_981405: CobisTextInputButtonModel = new CobisTextInputButtonModel();
public VA_AMOUNTNHJBKJSFP_420405: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_TYPEPARTICIPNNN_397405: CobisRadioButtonListModel = new CobisRadioButtonListModel();
public VA_MAILHXHVMKQUYBR_360405: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_AMOUNTPARTICTSP_895405: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_PERCENTAGEPAISA_378405: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public CM_TLNSPRSC_7TC: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_SYNDICATDI_660858.id="VC_SYNDICATDI_660858";
this.VC_SYNDICATDI_660858.name="SyndicatedListForm";
this.VC_SYNDICATDI_660858.colSpan=1;
this.VC_SYNDICATDI_660858.columns=1;
this.VC_SYNDICATDI_660858.enabled=ConstantsApi.mode.All;
this.G_SYNDICALLT_242405.id="G_SYNDICALLT_242405";
this.G_SYNDICALLT_242405.name="Group1361";
this.G_SYNDICALLT_242405.columns=3;
this.G_SYNDICALLT_242405.labelOrientation="Top";
this.G_SYNDICALLT_242405.colSpan=1;
this.G_SYNDICALLT_242405.enabled=ConstantsApi.mode.All;
this.G_SYNDICALLT_242405.visible=ConstantsApi.mode.All;
this.G_SYNDICALLT_242405.attList = ["participantS","amount","typeParticipants","mail","amountParticipants","percentageParticipants"];
this.CM_TLNSPRSC_7TC.id = "CM_TLNSPRSC_7TC";
this.CM_TLNSPRSC_7TC.name = "Command1";
this.CM_TLNSPRSC_7TC.causesValidation=true;
this.CM_TLNSPRSC_7TC.submitOnEnter=false;
this.CM_TLNSPRSC_7TC.setFocus=false;
this.CM_TLNSPRSC_7TC.close=false;
this.CM_TLNSPRSC_7TC.label = cobis.translate("LNSPR.LBL_LOANS_AADIRWOQO_72396");
this.CM_TLNSPRSC_7TC.enabled = ConstantsApi.mode.All;
this.CM_TLNSPRSC_7TC.visible= ConstantsApi.mode.All;
this.VA_PARTICIPANTSTOP_981405.id = "VA_PARTICIPANTSTOP_981405";
this.VA_PARTICIPANTSTOP_981405.name = "participantS";
this.VA_PARTICIPANTSTOP_981405.label = cobis.translate("LNSPR.LBL_LNSPR_PARTICIPT_49306");
this.VA_PARTICIPANTSTOP_981405.entity = "OperationEntity";
this.VA_PARTICIPANTSTOP_981405.attribute = "participantS";
this.VA_PARTICIPANTSTOP_981405.colSpan = 1;
this.VA_PARTICIPANTSTOP_981405.format = "";
this.VA_PARTICIPANTSTOP_981405.readOnly = ConstantsApi.mode.Query;
this.VA_PARTICIPANTSTOP_981405.enabled = ConstantsApi.mode.All;
this.VA_PARTICIPANTSTOP_981405.visible= ConstantsApi.mode.All;
this.VA_AMOUNTNHJBKJSFP_420405.label = cobis.translate("LNSPR.LBL_LNSPR_MONTODIPN_56241");
this.VA_AMOUNTNHJBKJSFP_420405.entity = "OperationEntity";
this.VA_AMOUNTNHJBKJSFP_420405.attribute = "amount";
this.VA_AMOUNTNHJBKJSFP_420405.maxlength= 15;
this.VA_AMOUNTNHJBKJSFP_420405.textCase= TextCaseOptions.NONE;
this.VA_AMOUNTNHJBKJSFP_420405.format= "c";
this.VA_AMOUNTNHJBKJSFP_420405.name="amount";
this.VA_AMOUNTNHJBKJSFP_420405.id="VA_AMOUNTNHJBKJSFP_420405";
this.VA_AMOUNTNHJBKJSFP_420405.colSpan=1;
this.VA_AMOUNTNHJBKJSFP_420405.withoutLabel = false;
this.VA_AMOUNTNHJBKJSFP_420405.readOnly = ConstantsApi.mode.Query;
this.VA_AMOUNTNHJBKJSFP_420405.enabled = ConstantsApi.mode.All;
this.VA_AMOUNTNHJBKJSFP_420405.visible= ConstantsApi.mode.All;
this.VA_TYPEPARTICIPNNN_397405.id = "VA_TYPEPARTICIPNNN_397405";
this.VA_TYPEPARTICIPNNN_397405.name = "typeParticipants";
this.VA_TYPEPARTICIPNNN_397405.attribute = "typeParticipants";
this.VA_TYPEPARTICIPNNN_397405.label = cobis.translate("LNSPR.LBL_LOANS_ROLNDGMQN_51274");
this.VA_TYPEPARTICIPNNN_397405.colSpan = 1;
this.VA_TYPEPARTICIPNNN_397405.withoutLabel = false;
this.VA_TYPEPARTICIPNNN_397405.readOnly = ConstantsApi.mode.Query;
this.VA_TYPEPARTICIPNNN_397405.entity = "OperationEntity";
this.VA_TYPEPARTICIPNNN_397405.enabled = ConstantsApi.mode.All;
this.VA_TYPEPARTICIPNNN_397405.visible= ConstantsApi.mode.All;
this.VA_TYPEPARTICIPNNN_397405.textField = "value";
this.VA_TYPEPARTICIPNNN_397405.valueField = "code";
this.VA_TYPEPARTICIPNNN_397405.required = true;
this.VA_TYPEPARTICIPNNN_397405.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_TYPEPARTICIPNNN_397405.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LNSPR_CAMPOREIQ_59717')
};
this.VA_MAILHXHVMKQUYBR_360405.label = cobis.translate("LNSPR.LBL_LNSPR_CORREOHMW_60459");
this.VA_MAILHXHVMKQUYBR_360405.entity = "OperationEntity";
this.VA_MAILHXHVMKQUYBR_360405.attribute = "mail";
this.VA_MAILHXHVMKQUYBR_360405.textCase= TextCaseOptions.NONE;
this.VA_MAILHXHVMKQUYBR_360405.isCustomValidated=true;
this.VA_MAILHXHVMKQUYBR_360405.name="mail";
this.VA_MAILHXHVMKQUYBR_360405.id="VA_MAILHXHVMKQUYBR_360405";
this.VA_MAILHXHVMKQUYBR_360405.colSpan=1;
this.VA_MAILHXHVMKQUYBR_360405.withoutLabel = false;
this.VA_MAILHXHVMKQUYBR_360405.readOnly = ConstantsApi.mode.Query;
this.VA_MAILHXHVMKQUYBR_360405.enabled = ConstantsApi.mode.All;
this.VA_MAILHXHVMKQUYBR_360405.visible= ConstantsApi.mode.All;
this.VA_AMOUNTPARTICTSP_895405.label = cobis.translate("LNSPR.LBL_LNSPR_MONTOPAAI_44222");
this.VA_AMOUNTPARTICTSP_895405.entity = "OperationEntity";
this.VA_AMOUNTPARTICTSP_895405.attribute = "amountParticipants";
this.VA_AMOUNTPARTICTSP_895405.textCase= TextCaseOptions.NONE;
this.VA_AMOUNTPARTICTSP_895405.format= "c";
this.VA_AMOUNTPARTICTSP_895405.name="amountParticipants";
this.VA_AMOUNTPARTICTSP_895405.id="VA_AMOUNTPARTICTSP_895405";
this.VA_AMOUNTPARTICTSP_895405.colSpan=1;
this.VA_AMOUNTPARTICTSP_895405.withoutLabel = false;
this.VA_AMOUNTPARTICTSP_895405.readOnly = ConstantsApi.mode.Query;
this.VA_AMOUNTPARTICTSP_895405.enabled = ConstantsApi.mode.All;
this.VA_AMOUNTPARTICTSP_895405.visible= ConstantsApi.mode.All;
this.VA_AMOUNTPARTICTSP_895405.required = true;
this.VA_AMOUNTPARTICTSP_895405.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.CompareValue,CustomValidators.fixedCompare('0',CustomValidatorOperator.GREATER_THAN_OR_EQUAL)],[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_AMOUNTPARTICTSP_895405.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LNSPR_CAMPOREIQ_59717'),fixedCompare: cobis.translate('LNSPR.MSG_LNSPR_VALORNODE_52171')
};
this.VA_PERCENTAGEPAISA_378405.label = cobis.translate("LNSPR.LBL_LNSPR_PORCENTAC_51005");
this.VA_PERCENTAGEPAISA_378405.entity = "OperationEntity";
this.VA_PERCENTAGEPAISA_378405.attribute = "percentageParticipants";
this.VA_PERCENTAGEPAISA_378405.textCase= TextCaseOptions.NONE;
this.VA_PERCENTAGEPAISA_378405.name="percentageParticipants";
this.VA_PERCENTAGEPAISA_378405.id="VA_PERCENTAGEPAISA_378405";
this.VA_PERCENTAGEPAISA_378405.colSpan=1;
this.VA_PERCENTAGEPAISA_378405.withoutLabel = false;
this.VA_PERCENTAGEPAISA_378405.readOnly = ConstantsApi.mode.Query;
this.VA_PERCENTAGEPAISA_378405.enabled = ConstantsApi.mode.All;
this.VA_PERCENTAGEPAISA_378405.visible= ConstantsApi.mode.All;
this.VA_PERCENTAGEPAISA_378405.required = true;
this.VA_PERCENTAGEPAISA_378405.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_PERCENTAGEPAISA_378405.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LNSPR_CAMPOREIQ_59717')
};
this.T_LNSPRSCSIDSOD_858 = this.formBuilder.group({
OperationEntity: this.formBuilder.group({
participantS:[{value: null, disabled: !this.VA_PARTICIPANTSTOP_981405.visible},CobisDesignerUtil.getValidationFunctions(this.VA_PARTICIPANTSTOP_981405.validationFunctions!)],
amount:[{value: null, disabled: !this.VA_AMOUNTNHJBKJSFP_420405.visible},CobisDesignerUtil.getValidationFunctions(this.VA_AMOUNTNHJBKJSFP_420405.validationFunctions!)],
typeParticipants:[{value: null, disabled: !this.VA_TYPEPARTICIPNNN_397405.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TYPEPARTICIPNNN_397405.validationFunctions!)],
mail:[{value: null, disabled: !this.VA_MAILHXHVMKQUYBR_360405.visible},CobisDesignerUtil.getValidationFunctions(this.VA_MAILHXHVMKQUYBR_360405.validationFunctions!)],
amountParticipants:[{value: null, disabled: !this.VA_AMOUNTPARTICTSP_895405.visible},CobisDesignerUtil.getValidationFunctions(this.VA_AMOUNTPARTICTSP_895405.validationFunctions!)],
percentageParticipants:[{value: null, disabled: !this.VA_PERCENTAGEPAISA_378405.visible},CobisDesignerUtil.getValidationFunctions(this.VA_PERCENTAGEPAISA_378405.validationFunctions!)],
field40:[null],
subsegment:[null],
checkIRRtypeOperationValue:[null],
authNumber:[null],
contractNumber:[null],
mortageDescription:[null],
anchored:[null],
economicSector:[null],
previousInternalRateOfReturn:[null],
money:[null],
subFinancing:[null],
visibleInternalRateOfReturn:[null],
facilityNumber:[null],
office:[null],
authDate:[null],
codOperation:[null],
financialDestination:[null],
codBank:[null],
sector:[null],
field89:[null],
plazo:[null],
success:[null],
ubication:[null],
official:[null],
aliquota1:[null],
plazoDescripcion:[null],
state:[null],
firstDueDate:[null],
registrationNumber:[null],
selectedParticipants:[null],
typeOperation:[null],
updatedInternalRateOfReturn:[null],
aliquota2:[null],
fullname:[null],
creationDate:[null],
savingAccount:[null],
nameBank:[null],
creditorType:[null],
validateAccount:[null],
groupCode:[null],
typeConsumption:[null],
internalRateOfReturn:[null],
creditLine:[null],
parish:[null],
amountApproved:[null],
classOperation:[null],
expirationDate:[null],
typeConsumption2:[null],
finanMarket:[null],
functionality:[null],
typeLoan:[null],
reference:[null],
debtType:[null],
descEconomicActivity:[null],
descEconomicSector:[null],
previousNumber:[null],
checkGroupOperation:[null],
migratedOperation:[null],
mainDebtor:[null],
formReposition:[null],
company:[null],
economicActivity:[null],
processDate:[null],
syndicated:[null],
segmentCredit:[null],
doubleAliquot:[null],
typeSyndicated:[null],
certifiedAccount:[null],
operation:[null],
}
),
});
}
}