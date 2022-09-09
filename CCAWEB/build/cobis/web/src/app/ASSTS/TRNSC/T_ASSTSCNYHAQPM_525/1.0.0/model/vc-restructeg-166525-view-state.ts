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
public T_ASSTSCNYHAQPM_525!:FormGroup;
public VC_RESTRUCTEG_166525:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_RESTRUCTID_433261 : CobisTabbedLayoutContainerModel = new CobisTabbedLayoutContainerModel();
public G_RESTRUCURN_482261_tab : CobisTabbedLayoutTabModel = new CobisTabbedLayoutTabModel();
public G_RESTRUCURN_482261 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_RESTRUCLRN_492261_tab : CobisTabbedLayoutTabModel = new CobisTabbedLayoutTabModel();
public G_RESTRUCLRN_492261 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_RESTRUCTIA_581261_tab : CobisTabbedLayoutTabModel = new CobisTabbedLayoutTabModel();
public G_RESTRUCTIA_581261 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_RESTRUCURN_482261_default_blank: CobisSpacerModel = new CobisSpacerModel();
public G_RESTRUCLRN_492261_default_blank: CobisSpacerModel = new CobisSpacerModel();
public G_RESTRUCTIA_581261_default_blank: CobisSpacerModel = new CobisSpacerModel();
public CM_TASSTSCN_5TN: CobisButtonModel = new CobisButtonModel();
public CM_TASSTSCN_T8S: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_RESTRUCTEG_166525.id="VC_RESTRUCTEG_166525";
this.VC_RESTRUCTEG_166525.name="RestructuringDetail";
this.VC_RESTRUCTEG_166525.colSpan=1;
this.VC_RESTRUCTEG_166525.columns=1;
this.VC_RESTRUCTEG_166525.enabled=ConstantsApi.mode.All;
this.G_RESTRUCTID_433261.id="G_RESTRUCTID_433261";
this.G_RESTRUCTID_433261.name="RestructuringDetail";
this.G_RESTRUCTID_433261.tabPosition=PositionTab.TOP;
this.G_RESTRUCTID_433261.enabled=ConstantsApi.mode.All;
this.G_RESTRUCTID_433261.childrenGroups = ["G_RESTRUCURN_482261_tab","G_RESTRUCLRN_492261_tab","G_RESTRUCTIA_581261_tab"];
this.G_RESTRUCURN_482261_tab.id="G_RESTRUCURN_482261_tab";
this.G_RESTRUCURN_482261_tab.label=cobis.translate("ASSTS.LBL_ASSTS_RUBROSAEW_67124");
this.G_RESTRUCURN_482261_tab.childrenGroups = ['G_RESTRUCURN_482261'];
this.G_RESTRUCURN_482261_tab.colSpan=1;
this.G_RESTRUCURN_482261_tab.enabled=ConstantsApi.mode.All;
this.G_RESTRUCURN_482261_tab.visible=ConstantsApi.mode.All;
this.G_RESTRUCURN_482261.id="G_RESTRUCURN_482261";
this.G_RESTRUCURN_482261.name="Group1604";
this.G_RESTRUCURN_482261.columns=3;
this.G_RESTRUCURN_482261.labelOrientation="Top";
this.G_RESTRUCURN_482261.colSpan=1;
this.G_RESTRUCURN_482261.enabled=ConstantsApi.mode.All;
this.G_RESTRUCURN_482261.visible=ConstantsApi.mode.All;
this.G_RESTRUCLRN_492261_tab.id="G_RESTRUCLRN_492261_tab";
this.G_RESTRUCLRN_492261_tab.label=cobis.translate("ASSTS.LBL_ASSTS_PARMETRLL_70277");
this.G_RESTRUCLRN_492261_tab.childrenGroups = ['G_RESTRUCLRN_492261'];
this.G_RESTRUCLRN_492261_tab.colSpan=1;
this.G_RESTRUCLRN_492261_tab.enabled=ConstantsApi.mode.All;
this.G_RESTRUCLRN_492261_tab.visible=ConstantsApi.mode.All;
this.G_RESTRUCLRN_492261.id="G_RESTRUCLRN_492261";
this.G_RESTRUCLRN_492261.name="Group2273";
this.G_RESTRUCLRN_492261.columns=3;
this.G_RESTRUCLRN_492261.labelOrientation="Top";
this.G_RESTRUCLRN_492261.colSpan=1;
this.G_RESTRUCLRN_492261.enabled=ConstantsApi.mode.All;
this.G_RESTRUCLRN_492261.visible=ConstantsApi.mode.All;
this.G_RESTRUCTIA_581261_tab.id="G_RESTRUCTIA_581261_tab";
this.G_RESTRUCTIA_581261_tab.label=cobis.translate("ASSTS.LBL_ASSTS_AMORTIZCA_54924");
this.G_RESTRUCTIA_581261_tab.childrenGroups = ['G_RESTRUCTIA_581261'];
this.G_RESTRUCTIA_581261_tab.colSpan=1;
this.G_RESTRUCTIA_581261_tab.enabled=ConstantsApi.mode.All;
this.G_RESTRUCTIA_581261_tab.visible=ConstantsApi.mode.All;
this.G_RESTRUCTIA_581261.id="G_RESTRUCTIA_581261";
this.G_RESTRUCTIA_581261.name="Group2344";
this.G_RESTRUCTIA_581261.columns=3;
this.G_RESTRUCTIA_581261.labelOrientation="Top";
this.G_RESTRUCTIA_581261.colSpan=1;
this.G_RESTRUCTIA_581261.enabled=ConstantsApi.mode.All;
this.G_RESTRUCTIA_581261.visible=ConstantsApi.mode.All;
this.CM_TASSTSCN_5TN.id = "CM_TASSTSCN_5TN";
this.CM_TASSTSCN_5TN.name = "Command1";
this.CM_TASSTSCN_5TN.causesValidation=false;
this.CM_TASSTSCN_5TN.submitOnEnter=false;
this.CM_TASSTSCN_5TN.setFocus=false;
this.CM_TASSTSCN_5TN.close=false;
this.CM_TASSTSCN_5TN.label = cobis.translate("ASSTS.LBL_ASSTS_TRANSMITR_50090");
this.CM_TASSTSCN_5TN.enabled = ConstantsApi.mode.All;
this.CM_TASSTSCN_5TN.visible= ConstantsApi.mode.All;
this.CM_TASSTSCN_T8S.id = "CM_TASSTSCN_T8S";
this.CM_TASSTSCN_T8S.name = "Command2";
this.CM_TASSTSCN_T8S.causesValidation=false;
this.CM_TASSTSCN_T8S.submitOnEnter=false;
this.CM_TASSTSCN_T8S.setFocus=false;
this.CM_TASSTSCN_T8S.close=false;
this.CM_TASSTSCN_T8S.label = cobis.translate("ASSTS.LBL_ASSTS_SALIRVFSG_51278");
this.CM_TASSTSCN_T8S.enabled = ConstantsApi.mode.All;
this.CM_TASSTSCN_T8S.visible= ConstantsApi.mode.All;
this.G_RESTRUCURN_482261_default_blank.id = "G_RESTRUCURN_482261_default_blank";
this.G_RESTRUCURN_482261_default_blank.name = "G_RESTRUCURN_482261_default_blank";
this.G_RESTRUCURN_482261_default_blank.colSpan = 1;
this.G_RESTRUCURN_482261_default_blank.visible= ConstantsApi.mode.All;
this.G_RESTRUCLRN_492261_default_blank.id = "G_RESTRUCLRN_492261_default_blank";
this.G_RESTRUCLRN_492261_default_blank.name = "G_RESTRUCLRN_492261_default_blank";
this.G_RESTRUCLRN_492261_default_blank.colSpan = 1;
this.G_RESTRUCLRN_492261_default_blank.visible= ConstantsApi.mode.All;
this.G_RESTRUCTIA_581261_default_blank.id = "G_RESTRUCTIA_581261_default_blank";
this.G_RESTRUCTIA_581261_default_blank.name = "G_RESTRUCTIA_581261_default_blank";
this.G_RESTRUCTIA_581261_default_blank.colSpan = 1;
this.G_RESTRUCTIA_581261_default_blank.visible= ConstantsApi.mode.All;
this.T_ASSTSCNYHAQPM_525 = this.formBuilder.group({
});
}
}