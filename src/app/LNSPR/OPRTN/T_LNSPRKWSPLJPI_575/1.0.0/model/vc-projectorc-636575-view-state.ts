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
public T_LNSPRKWSPLJPI_575!:FormGroup;
public VC_PROJECTORC_636575:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_PROJECTHSS_834696 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_PROJECTRTE_923696 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VA_CURRENCYTRTBCCA_970696: CobisDropDownListModel = new CobisDropDownListModel();
public VA_CONCEPTFHEMXUHJ_108696: CobisDropDownListModel = new CobisDropDownListModel();
public VA_VALUENGWHVWDDNU_188696: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_INIDIVYCRRTXBCX_837696: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_DIVUPYMACQXCZMH_148696: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_BASECALCULATOII_165696: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_COMMENTARYNUYIB_733696: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public CM_PROJECTO_N34: CobisButtonModel = new CobisButtonModel();
public CM_PROJECTO_TRS: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_PROJECTORC_636575.id="VC_PROJECTORC_636575";
this.VC_PROJECTORC_636575.name="ProjectOtherCharges";
this.VC_PROJECTORC_636575.colSpan=1;
this.VC_PROJECTORC_636575.columns=1;
this.VC_PROJECTORC_636575.enabled=ConstantsApi.mode.All;
this.G_PROJECTHSS_834696.id="G_PROJECTHSS_834696";
this.G_PROJECTHSS_834696.name="Group1800";
this.G_PROJECTHSS_834696.columns=3;
this.G_PROJECTHSS_834696.labelOrientation="Top";
this.G_PROJECTHSS_834696.colSpan=3;
this.G_PROJECTHSS_834696.enabled=ConstantsApi.mode.All;
this.G_PROJECTHSS_834696.visible=ConstantsApi.mode.All;
this.G_PROJECTHSS_834696.attList = ["currency","concept","value"];
this.G_PROJECTHSS_834696.className = "padding-label-inf";
this.G_PROJECTRTE_923696.id="G_PROJECTRTE_923696";
this.G_PROJECTRTE_923696.name="Group2828";
this.G_PROJECTRTE_923696.columns=3;
this.G_PROJECTRTE_923696.labelOrientation="Top";
this.G_PROJECTRTE_923696.colSpan=1;
this.G_PROJECTRTE_923696.enabled=ConstantsApi.mode.All;
this.G_PROJECTRTE_923696.visible=ConstantsApi.mode.All;
this.G_PROJECTRTE_923696.attList = ["iniDiv","divUp","baseCalculation","commentary"];
this.CM_PROJECTO_N34.id = "CM_PROJECTO_N34";
this.CM_PROJECTO_N34.name = "Command1";
this.CM_PROJECTO_N34.causesValidation=true;
this.CM_PROJECTO_N34.submitOnEnter=true;
this.CM_PROJECTO_N34.setFocus=false;
this.CM_PROJECTO_N34.close=false;
this.CM_PROJECTO_N34.label = cobis.translate("LNSPR.LBL_LNSPR_PROCESARR_13459");
this.CM_PROJECTO_N34.enabled = ConstantsApi.mode.All;
this.CM_PROJECTO_N34.visible= ConstantsApi.mode.All;
this.CM_PROJECTO_TRS.id = "CM_PROJECTO_TRS";
this.CM_PROJECTO_TRS.name = "Command2";
this.CM_PROJECTO_TRS.causesValidation=false;
this.CM_PROJECTO_TRS.submitOnEnter=false;
this.CM_PROJECTO_TRS.setFocus=false;
this.CM_PROJECTO_TRS.close=true;
this.CM_PROJECTO_TRS.label = cobis.translate("LNSPR.LBL_LNSPR_CANCELARR_70217");
this.CM_PROJECTO_TRS.enabled = ConstantsApi.mode.All;
this.CM_PROJECTO_TRS.visible= ConstantsApi.mode.All;
this.VA_CURRENCYTRTBCCA_970696.label = cobis.translate("LNSPR.LBL_LNSPR_MONEDAFCA_83005");
this.VA_CURRENCYTRTBCCA_970696.blankOption=true;
this.VA_CURRENCYTRTBCCA_970696.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_CURRENCYTRTBCCA_970696.entity = "OtherCharges";
this.VA_CURRENCYTRTBCCA_970696.attribute = "currency";
this.VA_CURRENCYTRTBCCA_970696.textField = "value";
this.VA_CURRENCYTRTBCCA_970696.valueField = "code";
this.VA_CURRENCYTRTBCCA_970696.showId= true;
this.VA_CURRENCYTRTBCCA_970696.name="currency";
this.VA_CURRENCYTRTBCCA_970696.id="VA_CURRENCYTRTBCCA_970696";
this.VA_CURRENCYTRTBCCA_970696.colSpan=1;
this.VA_CURRENCYTRTBCCA_970696.withoutLabel = false;
this.VA_CURRENCYTRTBCCA_970696.readOnly = ConstantsApi.mode.Query;
this.VA_CURRENCYTRTBCCA_970696.enabled = ConstantsApi.mode.All;
this.VA_CURRENCYTRTBCCA_970696.visible= ConstantsApi.mode.All;
this.VA_CURRENCYTRTBCCA_970696.required = true;
this.VA_CURRENCYTRTBCCA_970696.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_CURRENCYTRTBCCA_970696.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LOANS_REQUERIOD_32696')
};
this.VA_CONCEPTFHEMXUHJ_108696.label = cobis.translate("LNSPR.LBL_LNSPR_CONCEPTOO_29972");
this.VA_CONCEPTFHEMXUHJ_108696.blankOption=true;
this.VA_CONCEPTFHEMXUHJ_108696.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_CONCEPTFHEMXUHJ_108696.entity = "OtherCharges";
this.VA_CONCEPTFHEMXUHJ_108696.attribute = "concept";
this.VA_CONCEPTFHEMXUHJ_108696.cascadeFrom = "VA_CURRENCYTRTBCCA_970696";
this.VA_CURRENCYTRTBCCA_970696.isCascadeParent = true;
this.VA_CONCEPTFHEMXUHJ_108696.textField = "value";
this.VA_CONCEPTFHEMXUHJ_108696.valueField = "code";
this.VA_CONCEPTFHEMXUHJ_108696.showId= true;
this.VA_CONCEPTFHEMXUHJ_108696.name="concept";
this.VA_CONCEPTFHEMXUHJ_108696.id="VA_CONCEPTFHEMXUHJ_108696";
this.VA_CONCEPTFHEMXUHJ_108696.colSpan=1;
this.VA_CONCEPTFHEMXUHJ_108696.withoutLabel = false;
this.VA_CONCEPTFHEMXUHJ_108696.readOnly = ConstantsApi.mode.Query;
this.VA_CONCEPTFHEMXUHJ_108696.enabled = ConstantsApi.mode.All;
this.VA_CONCEPTFHEMXUHJ_108696.visible= ConstantsApi.mode.All;
this.VA_CONCEPTFHEMXUHJ_108696.required = true;
this.VA_CONCEPTFHEMXUHJ_108696.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_CONCEPTFHEMXUHJ_108696.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LOANS_REQUERIOD_32696')
};
this.VA_VALUENGWHVWDDNU_188696.label = cobis.translate("LNSPR.LBL_LNSPR_VALORGGEY_80898");
this.VA_VALUENGWHVWDDNU_188696.entity = "OtherCharges";
this.VA_VALUENGWHVWDDNU_188696.attribute = "value";
this.VA_VALUENGWHVWDDNU_188696.textCase= TextCaseOptions.NONE;
this.VA_VALUENGWHVWDDNU_188696.isCustomValidated=true;
this.VA_VALUENGWHVWDDNU_188696.name="value";
this.VA_VALUENGWHVWDDNU_188696.id="VA_VALUENGWHVWDDNU_188696";
this.VA_VALUENGWHVWDDNU_188696.colSpan=1;
this.VA_VALUENGWHVWDDNU_188696.withoutLabel = false;
this.VA_VALUENGWHVWDDNU_188696.readOnly = ConstantsApi.mode.Query;
this.VA_VALUENGWHVWDDNU_188696.enabled = ConstantsApi.mode.All;
this.VA_VALUENGWHVWDDNU_188696.visible= ConstantsApi.mode.All;
this.VA_VALUENGWHVWDDNU_188696.required = true;
this.VA_VALUENGWHVWDDNU_188696.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_VALUENGWHVWDDNU_188696.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LOANS_REQUERIOD_32696')
};
this.VA_INIDIVYCRRTXBCX_837696.label = cobis.translate("LNSPR.LBL_LNSPR_CUOTADESD_67554");
this.VA_INIDIVYCRRTXBCX_837696.entity = "OtherCharges";
this.VA_INIDIVYCRRTXBCX_837696.attribute = "iniDiv";
this.VA_INIDIVYCRRTXBCX_837696.textCase= TextCaseOptions.NONE;
this.VA_INIDIVYCRRTXBCX_837696.format= "n0";
this.VA_INIDIVYCRRTXBCX_837696.name="iniDiv";
this.VA_INIDIVYCRRTXBCX_837696.id="VA_INIDIVYCRRTXBCX_837696";
this.VA_INIDIVYCRRTXBCX_837696.colSpan=1;
this.VA_INIDIVYCRRTXBCX_837696.withoutLabel = false;
this.VA_INIDIVYCRRTXBCX_837696.readOnly = ConstantsApi.mode.Query;
this.VA_INIDIVYCRRTXBCX_837696.enabled = ConstantsApi.mode.All;
this.VA_INIDIVYCRRTXBCX_837696.visible= ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_INIDIVYCRRTXBCX_837696.inputRestrictionValidators = { onlyNumbers: true};
this.VA_INIDIVYCRRTXBCX_837696.required = true;
this.VA_INIDIVYCRRTXBCX_837696.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_INIDIVYCRRTXBCX_837696.messagesValidations = {
required: cobis.translate('DSGNR.SYS_DSGNR_MSGREQURF_00032')
};
this.VA_DIVUPYMACQXCZMH_148696.label = cobis.translate("LNSPR.LBL_LNSPR_CUOTAHAAS_11841");
this.VA_DIVUPYMACQXCZMH_148696.entity = "OtherCharges";
this.VA_DIVUPYMACQXCZMH_148696.attribute = "divUp";
this.VA_DIVUPYMACQXCZMH_148696.textCase= TextCaseOptions.NONE;
this.VA_DIVUPYMACQXCZMH_148696.format= "n0";
this.VA_DIVUPYMACQXCZMH_148696.name="divUp";
this.VA_DIVUPYMACQXCZMH_148696.id="VA_DIVUPYMACQXCZMH_148696";
this.VA_DIVUPYMACQXCZMH_148696.colSpan=1;
this.VA_DIVUPYMACQXCZMH_148696.withoutLabel = false;
this.VA_DIVUPYMACQXCZMH_148696.readOnly = ConstantsApi.mode.Query;
this.VA_DIVUPYMACQXCZMH_148696.enabled = ConstantsApi.mode.All;
this.VA_DIVUPYMACQXCZMH_148696.visible= ConstantsApi.mode.All;
this.VA_DIVUPYMACQXCZMH_148696.inputRestrictionValidators = { onlyNumbers: true};
this.VA_DIVUPYMACQXCZMH_148696.required = true;
this.VA_DIVUPYMACQXCZMH_148696.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_DIVUPYMACQXCZMH_148696.messagesValidations = {
required: cobis.translate('DSGNR.SYS_DSGNR_MSGREQURF_00032')
};
this.VA_BASECALCULATOII_165696.label = cobis.translate("LNSPR.LBL_LNSPR_BASECLCLU_56377");
this.VA_BASECALCULATOII_165696.entity = "OtherCharges";
this.VA_BASECALCULATOII_165696.attribute = "baseCalculation";
this.VA_BASECALCULATOII_165696.textCase= TextCaseOptions.NONE;
this.VA_BASECALCULATOII_165696.format= "c";
this.VA_BASECALCULATOII_165696.name="baseCalculation";
this.VA_BASECALCULATOII_165696.id="VA_BASECALCULATOII_165696";
this.VA_BASECALCULATOII_165696.colSpan=1;
this.VA_BASECALCULATOII_165696.withoutLabel = false;
this.VA_BASECALCULATOII_165696.readOnly = ConstantsApi.mode.Query;
this.VA_BASECALCULATOII_165696.enabled = ConstantsApi.mode.All;
this.VA_BASECALCULATOII_165696.visible= ConstantsApi.mode.All;
this.VA_BASECALCULATOII_165696.inputRestrictionValidators = { onlyNumbers: true};
this.VA_COMMENTARYNUYIB_733696.label = cobis.translate("LNSPR.LBL_LNSPR_COMENTAOO_63544");
this.VA_COMMENTARYNUYIB_733696.entity = "OtherCharges";
this.VA_COMMENTARYNUYIB_733696.attribute = "commentary";
this.VA_COMMENTARYNUYIB_733696.maxlength= 255;
this.VA_COMMENTARYNUYIB_733696.textCase= TextCaseOptions.UPPER_CASE;
this.VA_COMMENTARYNUYIB_733696.name="commentary";
this.VA_COMMENTARYNUYIB_733696.id="VA_COMMENTARYNUYIB_733696";
this.VA_COMMENTARYNUYIB_733696.colSpan=3;
this.VA_COMMENTARYNUYIB_733696.withoutLabel = false;
this.VA_COMMENTARYNUYIB_733696.readOnly = ConstantsApi.mode.Query;
this.VA_COMMENTARYNUYIB_733696.enabled = ConstantsApi.mode.All;
this.VA_COMMENTARYNUYIB_733696.visible= ConstantsApi.mode.All;
this.VA_COMMENTARYNUYIB_733696.required = true;
this.VA_COMMENTARYNUYIB_733696.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_COMMENTARYNUYIB_733696.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LNSPR_CAMPOREIQ_59717')
};
this.T_LNSPRKWSPLJPI_575 = this.formBuilder.group({
OtherCharges: this.formBuilder.group({
currency:[{value: null, disabled: !this.VA_CURRENCYTRTBCCA_970696.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CURRENCYTRTBCCA_970696.validationFunctions!)],
concept:[{value: null, disabled: !this.VA_CONCEPTFHEMXUHJ_108696.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CONCEPTFHEMXUHJ_108696.validationFunctions!)],
value:[{value: null, disabled: !this.VA_VALUENGWHVWDDNU_188696.visible},CobisDesignerUtil.getValidationFunctions(this.VA_VALUENGWHVWDDNU_188696.validationFunctions!)],
iniDiv:[{value: null, disabled: !this.VA_INIDIVYCRRTXBCX_837696.visible},CobisDesignerUtil.getValidationFunctions(this.VA_INIDIVYCRRTXBCX_837696.validationFunctions!)],
divUp:[{value: null, disabled: !this.VA_DIVUPYMACQXCZMH_148696.visible},CobisDesignerUtil.getValidationFunctions(this.VA_DIVUPYMACQXCZMH_148696.validationFunctions!)],
baseCalculation:[{value: null, disabled: !this.VA_BASECALCULATOII_165696.visible},CobisDesignerUtil.getValidationFunctions(this.VA_BASECALCULATOII_165696.validationFunctions!)],
commentary:[{value: null, disabled: !this.VA_COMMENTARYNUYIB_733696.visible},CobisDesignerUtil.getValidationFunctions(this.VA_COMMENTARYNUYIB_733696.validationFunctions!)],
sequential:[null],
valueApply:[null],
valueMin:[null],
range:[null],
typeOp:[null],
balanceOp:[null],
balanceDesemp:[null],
date:[null],
valueMax:[null],
rate:[null],
decTapl:[null],
categoryType:[null],
reference:[null],
}
),
});
}
}