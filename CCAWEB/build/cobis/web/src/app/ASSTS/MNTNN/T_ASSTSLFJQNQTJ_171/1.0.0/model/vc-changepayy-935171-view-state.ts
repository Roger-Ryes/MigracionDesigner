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
public T_ASSTSLFJQNQTJ_171!:FormGroup;
public VC_CHANGEPAYY_935171:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_CHANGEPYAA_175429 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VA_CURRENTPAYDAYYY_672429: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_2009HDDBTRLSCDO_776429: CobisDropDownListModel = new CobisDropDownListModel();
public VA_2836UZLPSXFHEDX_271429: CobisDropDownListModel = new CobisDropDownListModel();
public Spacer2584: CobisSpacerModel = new CobisSpacerModel();
public VA_8829RWJFYGLMLTZ_206429: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public CM_TASSTSLF_TT1: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_CHANGEPAYY_935171.id="VC_CHANGEPAYY_935171";
this.VC_CHANGEPAYY_935171.name="ChangePayDayForm";
this.VC_CHANGEPAYY_935171.colSpan=1;
this.VC_CHANGEPAYY_935171.columns=1;
this.VC_CHANGEPAYY_935171.enabled=ConstantsApi.mode.All;
this.G_CHANGEPYAA_175429.id="G_CHANGEPYAA_175429";
this.G_CHANGEPYAA_175429.name="Group1834";
this.G_CHANGEPYAA_175429.columns=2;
this.G_CHANGEPYAA_175429.labelOrientation="Top";
this.G_CHANGEPYAA_175429.colSpan=2;
this.G_CHANGEPYAA_175429.enabled=ConstantsApi.mode.All;
this.G_CHANGEPYAA_175429.visible=ConstantsApi.mode.All;
this.G_CHANGEPYAA_175429.attList = ["currentPayDay","newPayDay","keepQuota","reason"];
this.CM_TASSTSLF_TT1.id = "CM_TASSTSLF_TT1";
this.CM_TASSTSLF_TT1.name = "Command1";
this.CM_TASSTSLF_TT1.causesValidation=false;
this.CM_TASSTSLF_TT1.submitOnEnter=false;
this.CM_TASSTSLF_TT1.setFocus=false;
this.CM_TASSTSLF_TT1.close=false;
this.CM_TASSTSLF_TT1.label = cobis.translate("ASSTS.LBL_ASSTS_APLICARIP_57468");
this.CM_TASSTSLF_TT1.enabled = ConstantsApi.mode.All;
this.CM_TASSTSLF_TT1.visible= ConstantsApi.mode.All;
this.VA_CURRENTPAYDAYYY_672429.label = cobis.translate("ASSTS.LBL_ASSTS_DAPAGOATL_75540");
this.VA_CURRENTPAYDAYYY_672429.entity = "ChangePayDayEntity";
this.VA_CURRENTPAYDAYYY_672429.attribute = "currentPayDay";
this.VA_CURRENTPAYDAYYY_672429.textCase= TextCaseOptions.NONE;
this.VA_CURRENTPAYDAYYY_672429.format= "n0";
this.VA_CURRENTPAYDAYYY_672429.name="currentPayDay";
this.VA_CURRENTPAYDAYYY_672429.id="VA_CURRENTPAYDAYYY_672429";
this.VA_CURRENTPAYDAYYY_672429.colSpan=1;
this.VA_CURRENTPAYDAYYY_672429.withoutLabel = false;
this.VA_CURRENTPAYDAYYY_672429.readOnly = ConstantsApi.mode.Query;
this.VA_CURRENTPAYDAYYY_672429.enabled = ConstantsApi.mode.All;
this.VA_CURRENTPAYDAYYY_672429.visible= ConstantsApi.mode.All;
this.VA_2009HDDBTRLSCDO_776429.label = cobis.translate("ASSTS.LBL_ASSTS_DAPAGONOV_96579");
this.VA_2009HDDBTRLSCDO_776429.entity = "ChangePayDayEntity";
this.VA_2009HDDBTRLSCDO_776429.attribute = "newPayDay";
this.VA_2009HDDBTRLSCDO_776429.textField = "value";
this.VA_2009HDDBTRLSCDO_776429.valueField = "code";
this.VA_2009HDDBTRLSCDO_776429.name="newPayDay";
this.VA_2009HDDBTRLSCDO_776429.id="VA_2009HDDBTRLSCDO_776429";
this.VA_2009HDDBTRLSCDO_776429.colSpan=1;
this.VA_2009HDDBTRLSCDO_776429.withoutLabel = false;
this.VA_2009HDDBTRLSCDO_776429.readOnly = ConstantsApi.mode.Query;
this.VA_2009HDDBTRLSCDO_776429.enabled = ConstantsApi.mode.All;
this.VA_2009HDDBTRLSCDO_776429.visible= ConstantsApi.mode.All;
this.VA_2009HDDBTRLSCDO_776429.required = true;
this.VA_2009HDDBTRLSCDO_776429.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_2009HDDBTRLSCDO_776429.messagesValidations = {
required: cobis.translate('DSGNR.SYS_DSGNR_MSGREQURF_00032')
};
this.VA_2836UZLPSXFHEDX_271429.label = cobis.translate("ASSTS.LBL_ASSTS_MANTIENTC_17171");
this.VA_2836UZLPSXFHEDX_271429.entity = "ChangePayDayEntity";
this.VA_2836UZLPSXFHEDX_271429.attribute = "keepQuota";
this.VA_2836UZLPSXFHEDX_271429.textField = "value";
this.VA_2836UZLPSXFHEDX_271429.valueField = "code";
this.VA_2836UZLPSXFHEDX_271429.name="keepQuota";
this.VA_2836UZLPSXFHEDX_271429.id="VA_2836UZLPSXFHEDX_271429";
this.VA_2836UZLPSXFHEDX_271429.colSpan=1;
this.VA_2836UZLPSXFHEDX_271429.withoutLabel = false;
this.VA_2836UZLPSXFHEDX_271429.readOnly = ConstantsApi.mode.Query;
this.VA_2836UZLPSXFHEDX_271429.enabled = ConstantsApi.mode.All;
this.VA_2836UZLPSXFHEDX_271429.visible= ConstantsApi.mode.All;
this.Spacer2584.id = "Spacer2584";
this.Spacer2584.name = "Spacer2584";
this.Spacer2584.colSpan = 1;
this.Spacer2584.visible= ConstantsApi.mode.All;
this.VA_8829RWJFYGLMLTZ_206429.label = cobis.translate("ASSTS.LBL_ASSTS_MOTIVOWHI_49864");
this.VA_8829RWJFYGLMLTZ_206429.entity = "ChangePayDayEntity";
this.VA_8829RWJFYGLMLTZ_206429.attribute = "reason";
this.VA_8829RWJFYGLMLTZ_206429.maxlength= 64;
this.VA_8829RWJFYGLMLTZ_206429.textCase= TextCaseOptions.UPPER_CASE;
this.VA_8829RWJFYGLMLTZ_206429.name="reason";
this.VA_8829RWJFYGLMLTZ_206429.id="VA_8829RWJFYGLMLTZ_206429";
this.VA_8829RWJFYGLMLTZ_206429.colSpan=2;
this.VA_8829RWJFYGLMLTZ_206429.withoutLabel = false;
this.VA_8829RWJFYGLMLTZ_206429.readOnly = ConstantsApi.mode.Query;
this.VA_8829RWJFYGLMLTZ_206429.enabled = ConstantsApi.mode.All;
this.VA_8829RWJFYGLMLTZ_206429.visible= ConstantsApi.mode.All;
this.VA_8829RWJFYGLMLTZ_206429.required = true;
this.VA_8829RWJFYGLMLTZ_206429.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_8829RWJFYGLMLTZ_206429.messagesValidations = {
required: cobis.translate('ASSTS.MSG_ASSTS_ELMOTIVEE_44777')
};
this.T_ASSTSLFJQNQTJ_171 = this.formBuilder.group({
ChangePayDayEntity: this.formBuilder.group({
currentPayDay:[{value: null, disabled: !this.VA_CURRENTPAYDAYYY_672429.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CURRENTPAYDAYYY_672429.validationFunctions!)],
newPayDay:[{value: null, disabled: !this.VA_2009HDDBTRLSCDO_776429.visible},CobisDesignerUtil.getValidationFunctions(this.VA_2009HDDBTRLSCDO_776429.validationFunctions!)],
keepQuota:[{value: null, disabled: !this.VA_2836UZLPSXFHEDX_271429.visible},CobisDesignerUtil.getValidationFunctions(this.VA_2836UZLPSXFHEDX_271429.validationFunctions!)],
reason:[{value: null, disabled: !this.VA_8829RWJFYGLMLTZ_206429.visible},CobisDesignerUtil.getValidationFunctions(this.VA_8829RWJFYGLMLTZ_206429.validationFunctions!)],
operation:[null],
client:[null],
}
),
});
}
}