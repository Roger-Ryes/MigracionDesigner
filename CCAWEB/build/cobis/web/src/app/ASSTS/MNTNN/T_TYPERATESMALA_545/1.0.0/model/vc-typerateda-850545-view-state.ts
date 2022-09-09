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
public T_TYPERATESMALA_545!:FormGroup;
public VC_TYPERATEDA_850545:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_TYPERATMMM_527908 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VA_TEXTINPUTBOXAKX_265908: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_TEXTINPUTBOXMYR_708908: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_CLASEXTBDAGEJGY_237908: CobisRadioButtonListModel = new CobisRadioButtonListModel();
public CM_TTYPERAT_R0N: CobisButtonModel = new CobisButtonModel();
public CM_TTYPERAT_MET: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_TYPERATEDA_850545.id="VC_TYPERATEDA_850545";
this.VC_TYPERATEDA_850545.name="TypeRatesModal";
this.VC_TYPERATEDA_850545.colSpan=1;
this.VC_TYPERATEDA_850545.columns=1;
this.VC_TYPERATEDA_850545.enabled=ConstantsApi.mode.All;
this.G_TYPERATMMM_527908.id="G_TYPERATMMM_527908";
this.G_TYPERATMMM_527908.name="Group2296";
this.G_TYPERATMMM_527908.columns=3;
this.G_TYPERATMMM_527908.labelOrientation="Top";
this.G_TYPERATMMM_527908.colSpan=1;
this.G_TYPERATMMM_527908.enabled=ConstantsApi.mode.All;
this.G_TYPERATMMM_527908.visible=ConstantsApi.mode.All;
this.G_TYPERATMMM_527908.attList = ["identifier","description","clase"];
this.CM_TTYPERAT_R0N.id = "CM_TTYPERAT_R0N";
this.CM_TTYPERAT_R0N.name = "Command1";
this.CM_TTYPERAT_R0N.causesValidation=true;
this.CM_TTYPERAT_R0N.submitOnEnter=false;
this.CM_TTYPERAT_R0N.setFocus=false;
this.CM_TTYPERAT_R0N.close=false;
this.CM_TTYPERAT_R0N.label = cobis.translate("ASSTS.LBL_ASSTS_GUARDARRI_81055");
this.CM_TTYPERAT_R0N.enabled = ConstantsApi.mode.All;
this.CM_TTYPERAT_R0N.visible= ConstantsApi.mode.All;
this.CM_TTYPERAT_MET.id = "CM_TTYPERAT_MET";
this.CM_TTYPERAT_MET.name = "Command2";
this.CM_TTYPERAT_MET.causesValidation=false;
this.CM_TTYPERAT_MET.submitOnEnter=false;
this.CM_TTYPERAT_MET.setFocus=false;
this.CM_TTYPERAT_MET.close=false;
this.CM_TTYPERAT_MET.label = cobis.translate("ASSTS.LBL_ASSTS_CANCELARR_70217");
this.CM_TTYPERAT_MET.enabled = ConstantsApi.mode.All;
this.CM_TTYPERAT_MET.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXAKX_265908.label = cobis.translate("ASSTS.LBL_ASSTS_IDENTIFCR_66965");
this.VA_TEXTINPUTBOXAKX_265908.entity = "TypeRates";
this.VA_TEXTINPUTBOXAKX_265908.attribute = "identifier";
this.VA_TEXTINPUTBOXAKX_265908.maxlength= 20;
this.VA_TEXTINPUTBOXAKX_265908.textCase= TextCaseOptions.UPPER_CASE;
this.VA_TEXTINPUTBOXAKX_265908.name="identifier";
this.VA_TEXTINPUTBOXAKX_265908.id="VA_TEXTINPUTBOXAKX_265908";
this.VA_TEXTINPUTBOXAKX_265908.colSpan=3;
this.VA_TEXTINPUTBOXAKX_265908.withoutLabel = false;
this.VA_TEXTINPUTBOXAKX_265908.readOnly = ConstantsApi.mode.Query;
this.VA_TEXTINPUTBOXAKX_265908.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXAKX_265908.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXAKX_265908.required = true;
this.VA_TEXTINPUTBOXAKX_265908.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_TEXTINPUTBOXAKX_265908.messagesValidations = {
required: cobis.translate('DSGNR.SYS_DSGNR_MSGREQURF_00032')
};
this.VA_TEXTINPUTBOXMYR_708908.label = cobis.translate("ASSTS.LBL_ASSTS_DESCRIPNI_65857");
this.VA_TEXTINPUTBOXMYR_708908.entity = "TypeRates";
this.VA_TEXTINPUTBOXMYR_708908.attribute = "description";
this.VA_TEXTINPUTBOXMYR_708908.maxlength= 100;
this.VA_TEXTINPUTBOXMYR_708908.textCase= TextCaseOptions.UPPER_CASE;
this.VA_TEXTINPUTBOXMYR_708908.name="description";
this.VA_TEXTINPUTBOXMYR_708908.id="VA_TEXTINPUTBOXMYR_708908";
this.VA_TEXTINPUTBOXMYR_708908.colSpan=3;
this.VA_TEXTINPUTBOXMYR_708908.withoutLabel = false;
this.VA_TEXTINPUTBOXMYR_708908.readOnly = ConstantsApi.mode.Query;
this.VA_TEXTINPUTBOXMYR_708908.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXMYR_708908.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXMYR_708908.required = true;
this.VA_TEXTINPUTBOXMYR_708908.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_TEXTINPUTBOXMYR_708908.messagesValidations = {
required: cobis.translate('DSGNR.SYS_DSGNR_MSGREQURF_00032')
};
this.VA_CLASEXTBDAGEJGY_237908.id = "VA_CLASEXTBDAGEJGY_237908";
this.VA_CLASEXTBDAGEJGY_237908.name = "clase";
this.VA_CLASEXTBDAGEJGY_237908.attribute = "clase";
this.VA_CLASEXTBDAGEJGY_237908.label = cobis.translate("ASSTS.LBL_ASSTS_CLASEBNBK_90328");
this.VA_CLASEXTBDAGEJGY_237908.colSpan = 3;
this.VA_CLASEXTBDAGEJGY_237908.withoutLabel = false;
this.VA_CLASEXTBDAGEJGY_237908.readOnly = ConstantsApi.mode.Query;
this.VA_CLASEXTBDAGEJGY_237908.entity = "TypeRates";
this.VA_CLASEXTBDAGEJGY_237908.enabled = ConstantsApi.mode.All;
this.VA_CLASEXTBDAGEJGY_237908.visible= ConstantsApi.mode.All;
this.VA_CLASEXTBDAGEJGY_237908.textField = "value";
this.VA_CLASEXTBDAGEJGY_237908.valueField = "code";
this.VA_CLASEXTBDAGEJGY_237908.required = true;
this.VA_CLASEXTBDAGEJGY_237908.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_CLASEXTBDAGEJGY_237908.messagesValidations = {
required: cobis.translate('DSGNR.SYS_DSGNR_MSGREQURF_00032')
};
this.T_TYPERATESMALA_545 = this.formBuilder.group({
TypeRates: this.formBuilder.group({
identifier:[{value: null, disabled: !this.VA_TEXTINPUTBOXAKX_265908.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TEXTINPUTBOXAKX_265908.validationFunctions!)],
description:[{value: null, disabled: !this.VA_TEXTINPUTBOXMYR_708908.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TEXTINPUTBOXMYR_708908.validationFunctions!)],
clase:[{value: null, disabled: !this.VA_CLASEXTBDAGEJGY_237908.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CLASEXTBDAGEJGY_237908.validationFunctions!)],
ratePit:[null],
}
),
});
}
}