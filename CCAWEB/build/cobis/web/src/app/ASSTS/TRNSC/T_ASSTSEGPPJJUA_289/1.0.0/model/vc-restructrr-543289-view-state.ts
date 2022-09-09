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
public T_ASSTSEGPPJJUA_289!:FormGroup;
public VC_RESTRUCTRR_543289:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_RESTRUCUOI_653362 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VA_VASIMPLELABELLL_205362: CobisTextLabelModel = new CobisTextLabelModel();
public CM_TASSTSEG_JJT: CobisButtonModel = new CobisButtonModel();
public CM_TASSTSEG_J5_: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_RESTRUCTRR_543289.id="VC_RESTRUCTRR_543289";
this.VC_RESTRUCTRR_543289.name="RestructuringConfirmation";
this.VC_RESTRUCTRR_543289.colSpan=1;
this.VC_RESTRUCTRR_543289.columns=1;
this.VC_RESTRUCTRR_543289.enabled=ConstantsApi.mode.All;
this.G_RESTRUCUOI_653362.id="G_RESTRUCUOI_653362";
this.G_RESTRUCUOI_653362.name="Group1133";
this.G_RESTRUCUOI_653362.columns=1;
this.G_RESTRUCUOI_653362.labelOrientation="Top";
this.G_RESTRUCUOI_653362.colSpan=1;
this.G_RESTRUCUOI_653362.enabled=ConstantsApi.mode.All;
this.G_RESTRUCUOI_653362.visible=ConstantsApi.mode.All;
this.CM_TASSTSEG_JJT.id = "CM_TASSTSEG_JJT";
this.CM_TASSTSEG_JJT.name = "Command1";
this.CM_TASSTSEG_JJT.causesValidation=false;
this.CM_TASSTSEG_JJT.submitOnEnter=false;
this.CM_TASSTSEG_JJT.setFocus=false;
this.CM_TASSTSEG_JJT.close=false;
this.CM_TASSTSEG_JJT.label = cobis.translate("ASSTS.LBL_ASSTS_ACEPTARDV_64984");
this.CM_TASSTSEG_JJT.enabled = ConstantsApi.mode.All;
this.CM_TASSTSEG_JJT.visible= ConstantsApi.mode.All;
this.CM_TASSTSEG_J5_.id = "CM_TASSTSEG_J5_";
this.CM_TASSTSEG_J5_.name = "Command2";
this.CM_TASSTSEG_J5_.causesValidation=false;
this.CM_TASSTSEG_J5_.submitOnEnter=false;
this.CM_TASSTSEG_J5_.setFocus=false;
this.CM_TASSTSEG_J5_.close=false;
this.CM_TASSTSEG_J5_.label = cobis.translate("ASSTS.LBL_ASSTS_CANCELARR_70217");
this.CM_TASSTSEG_J5_.enabled = ConstantsApi.mode.All;
this.CM_TASSTSEG_J5_.visible= ConstantsApi.mode.All;
this.VA_VASIMPLELABELLL_205362.id = "VA_VASIMPLELABELLL_205362";
this.VA_VASIMPLELABELLL_205362.name = "VA_VASIMPLELABELLL_205362";
this.VA_VASIMPLELABELLL_205362.label = cobis.translate("ASSTS.LBL_ASSTS_ESTSEGUBA_29830");
this.VA_VASIMPLELABELLL_205362.colSpan = 1;
this.VA_VASIMPLELABELLL_205362.withoutLabel = false;
this.VA_VASIMPLELABELLL_205362.enabled = ConstantsApi.mode.None;
this.VA_VASIMPLELABELLL_205362.visible= ConstantsApi.mode.All;
this.T_ASSTSEGPPJJUA_289 = this.formBuilder.group({
});
}
}