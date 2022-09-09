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
public T_ASSTSABPPZROU_506!:FormGroup;
public VC_ASSOCIATAI_871506:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_ASSOCIATIO_613523 : CobisTabbedLayoutContainerModel = new CobisTabbedLayoutContainerModel();
public G_ASSOCIATTA_623523_tab : CobisTabbedLayoutTabModel = new CobisTabbedLayoutTabModel();
public G_ASSOCIATTA_623523 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_ASSOCIAOTE_595523_tab : CobisTabbedLayoutTabModel = new CobisTabbedLayoutTabModel();
public G_ASSOCIAOTE_595523 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_ASSOCIASIT_808523 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_ASSOCIATTA_623523_default_blank: CobisSpacerModel = new CobisSpacerModel();
public G_ASSOCIASIT_808523_default_blank: CobisSpacerModel = new CobisSpacerModel();
public CM_TASSTSAB_TS2: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_ASSOCIATAI_871506.id="VC_ASSOCIATAI_871506";
this.VC_ASSOCIATAI_871506.name="AssociateDisassociateForm";
this.VC_ASSOCIATAI_871506.colSpan=1;
this.VC_ASSOCIATAI_871506.columns=1;
this.VC_ASSOCIATAI_871506.enabled=ConstantsApi.mode.All;
this.G_ASSOCIATIO_613523.id="G_ASSOCIATIO_613523";
this.G_ASSOCIATIO_613523.name="AssociateDisassociateForm";
this.G_ASSOCIATIO_613523.tabPosition=PositionTab.TOP;
this.G_ASSOCIATIO_613523.enabled=ConstantsApi.mode.All;
this.G_ASSOCIATIO_613523.childrenGroups = ["G_ASSOCIATTA_623523_tab","G_ASSOCIAOTE_595523_tab"];
this.G_ASSOCIATTA_623523_tab.id="G_ASSOCIATTA_623523_tab";
this.G_ASSOCIATTA_623523_tab.label=cobis.translate("ASSTS.LBL_ASSTS_NEGOCINRO_11718");
this.G_ASSOCIATTA_623523_tab.childrenGroups = ['G_ASSOCIATTA_623523'];
this.G_ASSOCIATTA_623523_tab.colSpan=1;
this.G_ASSOCIATTA_623523_tab.enabled=ConstantsApi.mode.All;
this.G_ASSOCIATTA_623523_tab.visible=ConstantsApi.mode.All;
this.G_ASSOCIATTA_623523.id="G_ASSOCIATTA_623523";
this.G_ASSOCIATTA_623523.name="Group1173";
this.G_ASSOCIATTA_623523.columns=3;
this.G_ASSOCIATTA_623523.labelOrientation="Top";
this.G_ASSOCIATTA_623523.colSpan=1;
this.G_ASSOCIATTA_623523.enabled=ConstantsApi.mode.All;
this.G_ASSOCIATTA_623523.visible=ConstantsApi.mode.All;
this.G_ASSOCIAOTE_595523_tab.id="G_ASSOCIAOTE_595523_tab";
this.G_ASSOCIAOTE_595523_tab.label=cobis.translate("ASSTS.LBL_ASSTS_TABLAAMZR_85560");
this.G_ASSOCIAOTE_595523_tab.childrenGroups = ['G_ASSOCIAOTE_595523'];
this.G_ASSOCIAOTE_595523_tab.colSpan=1;
this.G_ASSOCIAOTE_595523_tab.enabled=ConstantsApi.mode.All;
this.G_ASSOCIAOTE_595523_tab.visible=ConstantsApi.mode.All;
this.G_ASSOCIAOTE_595523.id="G_ASSOCIAOTE_595523";
this.G_ASSOCIAOTE_595523.name="GroupLayout1938";
this.G_ASSOCIAOTE_595523.columns=1;
this.G_ASSOCIAOTE_595523.childrenGroups = ["G_ASSOCIASIT_808523"];
this.G_ASSOCIAOTE_595523.colSpan=1;
this.G_ASSOCIAOTE_595523.enabled=ConstantsApi.mode.All;
this.G_ASSOCIAOTE_595523.visible=ConstantsApi.mode.All;
this.G_ASSOCIASIT_808523.id="G_ASSOCIASIT_808523";
this.G_ASSOCIASIT_808523.name="Group1585";
this.G_ASSOCIASIT_808523.columns=3;
this.G_ASSOCIASIT_808523.labelOrientation="Top";
this.G_ASSOCIASIT_808523.colSpan=1;
this.G_ASSOCIASIT_808523.enabled=ConstantsApi.mode.Query;
this.G_ASSOCIASIT_808523.visible=ConstantsApi.mode.All;
this.CM_TASSTSAB_TS2.id = "CM_TASSTSAB_TS2";
this.CM_TASSTSAB_TS2.name = "Command1";
this.CM_TASSTSAB_TS2.causesValidation=false;
this.CM_TASSTSAB_TS2.submitOnEnter=false;
this.CM_TASSTSAB_TS2.setFocus=false;
this.CM_TASSTSAB_TS2.close=true;
this.CM_TASSTSAB_TS2.label = cobis.translate("ASSTS.LBL_ASSTS_CERRARGRF_18229");
this.CM_TASSTSAB_TS2.enabled = ConstantsApi.mode.All;
this.CM_TASSTSAB_TS2.visible= ConstantsApi.mode.All;
this.G_ASSOCIATTA_623523_default_blank.id = "G_ASSOCIATTA_623523_default_blank";
this.G_ASSOCIATTA_623523_default_blank.name = "G_ASSOCIATTA_623523_default_blank";
this.G_ASSOCIATTA_623523_default_blank.colSpan = 1;
this.G_ASSOCIATTA_623523_default_blank.visible= ConstantsApi.mode.All;
this.G_ASSOCIASIT_808523_default_blank.id = "G_ASSOCIASIT_808523_default_blank";
this.G_ASSOCIASIT_808523_default_blank.name = "G_ASSOCIASIT_808523_default_blank";
this.G_ASSOCIASIT_808523_default_blank.colSpan = 1;
this.G_ASSOCIASIT_808523_default_blank.visible= ConstantsApi.mode.All;
this.T_ASSTSABPPZROU_506 = this.formBuilder.group({
});
}
}