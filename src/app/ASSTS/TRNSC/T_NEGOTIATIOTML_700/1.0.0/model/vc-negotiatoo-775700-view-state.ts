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
public T_NEGOTIATIOTML_700!:FormGroup;
public VC_NEGOTIATOO_775700:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_NEGOTIADTM_913225 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VA_TEXTINPUTBOXHOE_149225: CobisRadioButtonListModel = new CobisRadioButtonListModel();
public VA_TEXTINPUTBOXNOR_530225: CobisRadioButtonListModel = new CobisRadioButtonListModel();
public VA_CHECKBOXMVFTHFB_720225: CobisCheckBoxModel = new CobisCheckBoxModel();
public VA_TEXTINPUTBOXAPF_912225: CobisCheckBoxModel = new CobisCheckBoxModel();
public Spacer2984: CobisSpacerModel = new CobisSpacerModel();
public VA_5608AAOSYWATGEZ_226225: CobisRadioButtonListModel = new CobisRadioButtonListModel();
public CM_TNEGOTIA_2A4: CobisButtonModel = new CobisButtonModel();
public CM_TNEGOTIA_6T_: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_NEGOTIATOO_775700.id="VC_NEGOTIATOO_775700";
this.VC_NEGOTIATOO_775700.name="NegotiationPaymentsModal";
this.VC_NEGOTIATOO_775700.colSpan=1;
this.VC_NEGOTIATOO_775700.columns=1;
this.VC_NEGOTIATOO_775700.enabled=ConstantsApi.mode.All;
this.G_NEGOTIADTM_913225.id="G_NEGOTIADTM_913225";
this.G_NEGOTIADTM_913225.name="Group1171";
this.G_NEGOTIADTM_913225.columns=2;
this.G_NEGOTIADTM_913225.labelOrientation="Top";
this.G_NEGOTIADTM_913225.colSpan=1;
this.G_NEGOTIADTM_913225.enabled=ConstantsApi.mode.All;
this.G_NEGOTIADTM_913225.visible=ConstantsApi.mode.All;
this.G_NEGOTIADTM_913225.attList = ["paymentType","interestType","fullFee","additionalPayments","reductionType"];
this.CM_TNEGOTIA_2A4.id = "CM_TNEGOTIA_2A4";
this.CM_TNEGOTIA_2A4.name = "Command1";
this.CM_TNEGOTIA_2A4.causesValidation=false;
this.CM_TNEGOTIA_2A4.submitOnEnter=false;
this.CM_TNEGOTIA_2A4.setFocus=false;
this.CM_TNEGOTIA_2A4.close=false;
this.CM_TNEGOTIA_2A4.label = cobis.translate("ASSTS.LBL_ASSTS_ACEPTARDV_64984");
this.CM_TNEGOTIA_2A4.enabled = ConstantsApi.mode.All;
this.CM_TNEGOTIA_2A4.visible= ConstantsApi.mode.All;
this.CM_TNEGOTIA_6T_.id = "CM_TNEGOTIA_6T_";
this.CM_TNEGOTIA_6T_.name = "Command2";
this.CM_TNEGOTIA_6T_.causesValidation=false;
this.CM_TNEGOTIA_6T_.submitOnEnter=false;
this.CM_TNEGOTIA_6T_.setFocus=false;
this.CM_TNEGOTIA_6T_.close=true;
this.CM_TNEGOTIA_6T_.label = cobis.translate("ASSTS.LBL_ASSTS_CANCELARR_70217");
this.CM_TNEGOTIA_6T_.enabled = ConstantsApi.mode.All;
this.CM_TNEGOTIA_6T_.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXHOE_149225.id = "VA_TEXTINPUTBOXHOE_149225";
this.VA_TEXTINPUTBOXHOE_149225.name = "paymentType";
this.VA_TEXTINPUTBOXHOE_149225.attribute = "paymentType";
this.VA_TEXTINPUTBOXHOE_149225.label = cobis.translate("ASSTS.LBL_ASSTS_TIPOPAGOO_57001");
this.VA_TEXTINPUTBOXHOE_149225.colSpan = 1;
this.VA_TEXTINPUTBOXHOE_149225.withoutLabel = false;
this.VA_TEXTINPUTBOXHOE_149225.readOnly = ConstantsApi.mode.Query;
this.VA_TEXTINPUTBOXHOE_149225.entity = "Negotiation";
this.VA_TEXTINPUTBOXHOE_149225.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXHOE_149225.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXHOE_149225.textField = "value";
this.VA_TEXTINPUTBOXHOE_149225.valueField = "code";
this.VA_TEXTINPUTBOXNOR_530225.id = "VA_TEXTINPUTBOXNOR_530225";
this.VA_TEXTINPUTBOXNOR_530225.name = "interestType";
this.VA_TEXTINPUTBOXNOR_530225.attribute = "interestType";
this.VA_TEXTINPUTBOXNOR_530225.label = cobis.translate("ASSTS.LBL_ASSTS_TIPOINTSR_53012");
this.VA_TEXTINPUTBOXNOR_530225.colSpan = 1;
this.VA_TEXTINPUTBOXNOR_530225.withoutLabel = false;
this.VA_TEXTINPUTBOXNOR_530225.readOnly = ConstantsApi.mode.Query;
this.VA_TEXTINPUTBOXNOR_530225.entity = "Negotiation";
this.VA_TEXTINPUTBOXNOR_530225.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXNOR_530225.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXNOR_530225.textField = "value";
this.VA_TEXTINPUTBOXNOR_530225.valueField = "code";
this.VA_CHECKBOXMVFTHFB_720225.id = "VA_CHECKBOXMVFTHFB_720225";
this.VA_CHECKBOXMVFTHFB_720225.name = "fullFee";
this.VA_CHECKBOXMVFTHFB_720225.label = cobis.translate("ASSTS.LBL_ASSTS_CUOTACOMM_65443");
this.VA_CHECKBOXMVFTHFB_720225.entity = "Negotiation";
this.VA_CHECKBOXMVFTHFB_720225.attribute = "fullFee";
this.VA_CHECKBOXMVFTHFB_720225.colSpan = 1;
this.VA_CHECKBOXMVFTHFB_720225.withoutLabel = false;
this.VA_CHECKBOXMVFTHFB_720225.readOnly =ConstantsApi.mode.Query;
this.VA_CHECKBOXMVFTHFB_720225.enabled = ConstantsApi.mode.All;
this.VA_CHECKBOXMVFTHFB_720225.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXAPF_912225.id = "VA_TEXTINPUTBOXAPF_912225";
this.VA_TEXTINPUTBOXAPF_912225.name = "additionalPayments";
this.VA_TEXTINPUTBOXAPF_912225.label = cobis.translate("ASSTS.LBL_ASSTS_PERMITEDN_59825");
this.VA_TEXTINPUTBOXAPF_912225.entity = "Negotiation";
this.VA_TEXTINPUTBOXAPF_912225.attribute = "additionalPayments";
this.VA_TEXTINPUTBOXAPF_912225.colSpan = 1;
this.VA_TEXTINPUTBOXAPF_912225.withoutLabel = false;
this.VA_TEXTINPUTBOXAPF_912225.readOnly =ConstantsApi.mode.Query;
this.VA_TEXTINPUTBOXAPF_912225.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXAPF_912225.visible= ConstantsApi.mode.All;
this.Spacer2984.id = "Spacer2984";
this.Spacer2984.name = "Spacer2984";
this.Spacer2984.colSpan = 1;
this.Spacer2984.visible= ConstantsApi.mode.All;
this.VA_5608AAOSYWATGEZ_226225.id = "VA_5608AAOSYWATGEZ_226225";
this.VA_5608AAOSYWATGEZ_226225.name = "reductionType";
this.VA_5608AAOSYWATGEZ_226225.attribute = "reductionType";
this.VA_5608AAOSYWATGEZ_226225.label = cobis.translate("ASSTS.LBL_ASSTS_TIPOPAGEO_93906");
this.VA_5608AAOSYWATGEZ_226225.colSpan = 1;
this.VA_5608AAOSYWATGEZ_226225.withoutLabel = false;
this.VA_5608AAOSYWATGEZ_226225.readOnly = ConstantsApi.mode.Query;
this.VA_5608AAOSYWATGEZ_226225.entity = "Negotiation";
this.VA_5608AAOSYWATGEZ_226225.enabled = ConstantsApi.mode.All;
this.VA_5608AAOSYWATGEZ_226225.visible= ConstantsApi.mode.All;
this.VA_5608AAOSYWATGEZ_226225.textField = "value";
this.VA_5608AAOSYWATGEZ_226225.valueField = "code";
this.T_NEGOTIATIOTML_700 = this.formBuilder.group({
Negotiation: this.formBuilder.group({
paymentType:[{value: null, disabled: !this.VA_TEXTINPUTBOXHOE_149225.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TEXTINPUTBOXHOE_149225.validationFunctions!)],
interestType:[{value: null, disabled: !this.VA_TEXTINPUTBOXNOR_530225.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TEXTINPUTBOXNOR_530225.validationFunctions!)],
fullFee:[{value: false, disabled: !this.VA_CHECKBOXMVFTHFB_720225.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CHECKBOXMVFTHFB_720225.validationFunctions!)],
additionalPayments:[{value: false, disabled: !this.VA_TEXTINPUTBOXAPF_912225.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TEXTINPUTBOXAPF_912225.validationFunctions!)],
reductionType:[{value: null, disabled: !this.VA_5608AAOSYWATGEZ_226225.visible},CobisDesignerUtil.getValidationFunctions(this.VA_5608AAOSYWATGEZ_226225.validationFunctions!)],
calculateReturn:[null],
}
),
});
}
}