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
public T_LEFTOVERPALDD_459!:FormGroup;
public VC_LEFTOVERPM_168459:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LEFTOVEAOS_730369 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VA_TEXTINPUTBOXAQZ_901369: CobisDropDownListModel = new CobisDropDownListModel();
public VA_TEXTINPUTBOXVFP_330369: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_TEXTINPUTBOXSZZ_277369: CobisDropDownListModel = new CobisDropDownListModel();
public VA_TEXTINPUTBOXJMX_394369: CobisTextInputButtonModel = new CobisTextInputButtonModel();
public VA_TEXTINPUTBOXYWQ_139369: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public CM_TLEFTOVE__3S: CobisButtonModel = new CobisButtonModel();
public CM_TLEFTOVE_V_5: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_LEFTOVERPM_168459.id="VC_LEFTOVERPM_168459";
this.VC_LEFTOVERPM_168459.name="LeftoverPaymentsModal";
this.VC_LEFTOVERPM_168459.colSpan=1;
this.VC_LEFTOVERPM_168459.columns=1;
this.VC_LEFTOVERPM_168459.enabled=ConstantsApi.mode.All;
this.G_LEFTOVEAOS_730369.id="G_LEFTOVEAOS_730369";
this.G_LEFTOVEAOS_730369.name="Group2226";
this.G_LEFTOVEAOS_730369.columns=3;
this.G_LEFTOVEAOS_730369.labelOrientation="Top";
this.G_LEFTOVEAOS_730369.colSpan=1;
this.G_LEFTOVEAOS_730369.enabled=ConstantsApi.mode.All;
this.G_LEFTOVEAOS_730369.visible=ConstantsApi.mode.All;
this.G_LEFTOVEAOS_730369.attList = ["paymentType","value","currencyType","reference","note"];
this.CM_TLEFTOVE__3S.id = "CM_TLEFTOVE__3S";
this.CM_TLEFTOVE__3S.name = "Command1";
this.CM_TLEFTOVE__3S.causesValidation=false;
this.CM_TLEFTOVE__3S.submitOnEnter=false;
this.CM_TLEFTOVE__3S.setFocus=false;
this.CM_TLEFTOVE__3S.close=false;
this.CM_TLEFTOVE__3S.label = cobis.translate("ASSTS.LBL_ASSTS_ACEPTARDV_64984");
this.CM_TLEFTOVE__3S.enabled = ConstantsApi.mode.All;
this.CM_TLEFTOVE__3S.visible= ConstantsApi.mode.All;
this.CM_TLEFTOVE_V_5.id = "CM_TLEFTOVE_V_5";
this.CM_TLEFTOVE_V_5.name = "Command2";
this.CM_TLEFTOVE_V_5.causesValidation=false;
this.CM_TLEFTOVE_V_5.submitOnEnter=false;
this.CM_TLEFTOVE_V_5.setFocus=false;
this.CM_TLEFTOVE_V_5.close=true;
this.CM_TLEFTOVE_V_5.label = cobis.translate("ASSTS.LBL_ASSTS_CANCELARR_70217");
this.CM_TLEFTOVE_V_5.enabled = ConstantsApi.mode.All;
this.CM_TLEFTOVE_V_5.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXAQZ_901369.label = cobis.translate("ASSTS.LBL_ASSTS_APAGOPQXA_89595");
this.VA_TEXTINPUTBOXAQZ_901369.entity = "LeftOverPayment";
this.VA_TEXTINPUTBOXAQZ_901369.attribute = "paymentType";
this.VA_TEXTINPUTBOXAQZ_901369.textField = "value";
this.VA_TEXTINPUTBOXAQZ_901369.valueField = "code";
this.VA_TEXTINPUTBOXAQZ_901369.name="paymentType";
this.VA_TEXTINPUTBOXAQZ_901369.id="VA_TEXTINPUTBOXAQZ_901369";
this.VA_TEXTINPUTBOXAQZ_901369.colSpan=3;
this.VA_TEXTINPUTBOXAQZ_901369.withoutLabel = false;
this.VA_TEXTINPUTBOXAQZ_901369.readOnly = ConstantsApi.mode.Query;
this.VA_TEXTINPUTBOXAQZ_901369.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXAQZ_901369.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXVFP_330369.label = cobis.translate("ASSTS.LBL_ASSTS_MONTOEMFX_52083");
this.VA_TEXTINPUTBOXVFP_330369.entity = "LeftOverPayment";
this.VA_TEXTINPUTBOXVFP_330369.attribute = "value";
this.VA_TEXTINPUTBOXVFP_330369.textCase= TextCaseOptions.NONE;
this.VA_TEXTINPUTBOXVFP_330369.name="value";
this.VA_TEXTINPUTBOXVFP_330369.id="VA_TEXTINPUTBOXVFP_330369";
this.VA_TEXTINPUTBOXVFP_330369.colSpan=2;
this.VA_TEXTINPUTBOXVFP_330369.withoutLabel = false;
this.VA_TEXTINPUTBOXVFP_330369.readOnly = ConstantsApi.mode.Query;
this.VA_TEXTINPUTBOXVFP_330369.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXVFP_330369.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXSZZ_277369.entity = "LeftOverPayment";
this.VA_TEXTINPUTBOXSZZ_277369.attribute = "currencyType";
this.VA_TEXTINPUTBOXSZZ_277369.textField = "value";
this.VA_TEXTINPUTBOXSZZ_277369.valueField = "code";
this.VA_TEXTINPUTBOXSZZ_277369.name="currencyType";
this.VA_TEXTINPUTBOXSZZ_277369.id="VA_TEXTINPUTBOXSZZ_277369";
this.VA_TEXTINPUTBOXSZZ_277369.colSpan=1;
this.VA_TEXTINPUTBOXSZZ_277369.withoutLabel = false;
this.VA_TEXTINPUTBOXSZZ_277369.readOnly = ConstantsApi.mode.Query;
this.VA_TEXTINPUTBOXSZZ_277369.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXSZZ_277369.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXJMX_394369.id = "VA_TEXTINPUTBOXJMX_394369";
this.VA_TEXTINPUTBOXJMX_394369.name = "reference";
this.VA_TEXTINPUTBOXJMX_394369.label = cobis.translate("ASSTS.LBL_ASSTS_REFERENCC_20812");
this.VA_TEXTINPUTBOXJMX_394369.entity = "LeftOverPayment";
this.VA_TEXTINPUTBOXJMX_394369.attribute = "reference";
this.VA_TEXTINPUTBOXJMX_394369.colSpan = 3;
this.VA_TEXTINPUTBOXJMX_394369.format = "";
this.VA_TEXTINPUTBOXJMX_394369.maxlength= 24;
this.VA_TEXTINPUTBOXJMX_394369.readOnly = ConstantsApi.mode.Query;
this.VA_TEXTINPUTBOXJMX_394369.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXJMX_394369.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXJMX_394369.inputRestrictionValidators = { onlyNumbers: true};
this.VA_TEXTINPUTBOXYWQ_139369.label = cobis.translate("ASSTS.LBL_ASSTS_OBSERVANN_50010");
this.VA_TEXTINPUTBOXYWQ_139369.entity = "LeftOverPayment";
this.VA_TEXTINPUTBOXYWQ_139369.attribute = "note";
this.VA_TEXTINPUTBOXYWQ_139369.maxlength= 64;
this.VA_TEXTINPUTBOXYWQ_139369.textCase= TextCaseOptions.UPPER_CASE;
this.VA_TEXTINPUTBOXYWQ_139369.name="note";
this.VA_TEXTINPUTBOXYWQ_139369.id="VA_TEXTINPUTBOXYWQ_139369";
this.VA_TEXTINPUTBOXYWQ_139369.colSpan=3;
this.VA_TEXTINPUTBOXYWQ_139369.withoutLabel = false;
this.VA_TEXTINPUTBOXYWQ_139369.readOnly = ConstantsApi.mode.Query;
this.VA_TEXTINPUTBOXYWQ_139369.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXYWQ_139369.visible= ConstantsApi.mode.All;
this.T_LEFTOVERPALDD_459 = this.formBuilder.group({
LeftOverPayment: this.formBuilder.group({
paymentType:[{value: null, disabled: !this.VA_TEXTINPUTBOXAQZ_901369.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TEXTINPUTBOXAQZ_901369.validationFunctions!)],
value:[{value: null, disabled: !this.VA_TEXTINPUTBOXVFP_330369.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TEXTINPUTBOXVFP_330369.validationFunctions!)],
currencyType:[{value: null, disabled: !this.VA_TEXTINPUTBOXSZZ_277369.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TEXTINPUTBOXSZZ_277369.validationFunctions!)],
reference:[{value: null, disabled: !this.VA_TEXTINPUTBOXJMX_394369.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TEXTINPUTBOXJMX_394369.validationFunctions!)],
note:[{value: null, disabled: !this.VA_TEXTINPUTBOXYWQ_139369.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TEXTINPUTBOXYWQ_139369.validationFunctions!)],
numCheck:[null],
bank:[null],
leftoverQuotationValue:[null],
}
),
});
}
}