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
public T_LNSPRNRRVDNTA_721!:FormGroup;
public VC_GENERALIAN_158721:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_GENERALTII_344243 : CobisTabbedLayoutContainerModel = new CobisTabbedLayoutContainerModel();
public G_GENERALIEI_329243_tab : CobisTabbedLayoutTabModel = new CobisTabbedLayoutTabModel();
public G_GENERALIEI_329243 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_GENERALAAO_224243 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_GENERALLII_531243 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_GENERALOIA_538243_tab : CobisTabbedLayoutTabModel = new CobisTabbedLayoutTabModel();
public G_GENERALOIA_538243 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_GENERALEIN_751243_tab : CobisTabbedLayoutTabModel = new CobisTabbedLayoutTabModel();
public G_GENERALEIN_751243 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_GENERALTIN_333243_tab : CobisTabbedLayoutTabModel = new CobisTabbedLayoutTabModel();
public G_GENERALTIN_333243 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_GENERALNLN_510243_tab : CobisTabbedLayoutTabModel = new CobisTabbedLayoutTabModel();
public G_GENERALNLN_510243 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_GENERALAAO_224243_default_blank: CobisSpacerModel = new CobisSpacerModel();
public G_GENERALLII_531243_default_blank: CobisSpacerModel = new CobisSpacerModel();
public G_GENERALOIA_538243_default_blank: CobisSpacerModel = new CobisSpacerModel();
public G_GENERALEIN_751243_default_blank: CobisSpacerModel = new CobisSpacerModel();
public G_GENERALTIN_333243_default_blank: CobisSpacerModel = new CobisSpacerModel();
public G_GENERALNLN_510243_default_blank: CobisSpacerModel = new CobisSpacerModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_GENERALIAN_158721.id="VC_GENERALIAN_158721";
this.VC_GENERALIAN_158721.name="GeneralInformationLine";
this.VC_GENERALIAN_158721.colSpan=1;
this.VC_GENERALIAN_158721.columns=1;
this.VC_GENERALIAN_158721.enabled=ConstantsApi.mode.All;
this.G_GENERALTII_344243.id="G_GENERALTII_344243";
this.G_GENERALTII_344243.name="GeneralInformationLine";
this.G_GENERALTII_344243.tabPosition=PositionTab.TOP;
this.G_GENERALTII_344243.enabled=ConstantsApi.mode.All;
this.G_GENERALTII_344243.childrenGroups = ["G_GENERALIEI_329243_tab","G_GENERALOIA_538243_tab","G_GENERALEIN_751243_tab","G_GENERALTIN_333243_tab","G_GENERALNLN_510243_tab"];
this.G_GENERALIEI_329243_tab.id="G_GENERALIEI_329243_tab";
this.G_GENERALIEI_329243_tab.label=cobis.translate("LNSPR.LBL_LNSPR_ESTADOALU_47861");
this.G_GENERALIEI_329243_tab.childrenGroups = ['G_GENERALIEI_329243'];
this.G_GENERALIEI_329243_tab.colSpan=1;
this.G_GENERALIEI_329243_tab.enabled=ConstantsApi.mode.All;
this.G_GENERALIEI_329243_tab.visible=ConstantsApi.mode.All;
this.G_GENERALIEI_329243.id="G_GENERALIEI_329243";
this.G_GENERALIEI_329243.name="GroupLayout1285";
this.G_GENERALIEI_329243.columns=1;
this.G_GENERALIEI_329243.childrenGroups = ["G_GENERALAAO_224243","G_GENERALLII_531243"];
this.G_GENERALIEI_329243.colSpan=1;
this.G_GENERALIEI_329243.enabled=ConstantsApi.mode.All;
this.G_GENERALIEI_329243.visible=ConstantsApi.mode.All;
this.G_GENERALAAO_224243.id="G_GENERALAAO_224243";
this.G_GENERALAAO_224243.name="Group2992";
this.G_GENERALAAO_224243.columns=3;
this.G_GENERALAAO_224243.labelOrientation="Top";
this.G_GENERALAAO_224243.colSpan=1;
this.G_GENERALAAO_224243.enabled=ConstantsApi.mode.All;
this.G_GENERALAAO_224243.visible=ConstantsApi.mode.All;
this.G_GENERALLII_531243.id="G_GENERALLII_531243";
this.G_GENERALLII_531243.name="Group1340";
this.G_GENERALLII_531243.columns=3;
this.G_GENERALLII_531243.labelOrientation="Top";
this.G_GENERALLII_531243.colSpan=1;
this.G_GENERALLII_531243.enabled=ConstantsApi.mode.All;
this.G_GENERALLII_531243.visible=ConstantsApi.mode.All;
this.G_GENERALOIA_538243_tab.id="G_GENERALOIA_538243_tab";
this.G_GENERALOIA_538243_tab.label=cobis.translate("LNSPR.LBL_LNSPR_INACINLEI_13426");
this.G_GENERALOIA_538243_tab.childrenGroups = ['G_GENERALOIA_538243'];
this.G_GENERALOIA_538243_tab.colSpan=1;
this.G_GENERALOIA_538243_tab.enabled=ConstantsApi.mode.All;
this.G_GENERALOIA_538243_tab.visible=ConstantsApi.mode.All;
this.G_GENERALOIA_538243.id="G_GENERALOIA_538243";
this.G_GENERALOIA_538243.name="Group1825";
this.G_GENERALOIA_538243.columns=3;
this.G_GENERALOIA_538243.labelOrientation="Top";
this.G_GENERALOIA_538243.colSpan=1;
this.G_GENERALOIA_538243.enabled=ConstantsApi.mode.All;
this.G_GENERALOIA_538243.visible=ConstantsApi.mode.All;
this.G_GENERALEIN_751243_tab.id="G_GENERALEIN_751243_tab";
this.G_GENERALEIN_751243_tab.label=cobis.translate("LNSPR.LBL_LNSPR_DISTRIBUR_28401");
this.G_GENERALEIN_751243_tab.childrenGroups = ['G_GENERALEIN_751243'];
this.G_GENERALEIN_751243_tab.colSpan=1;
this.G_GENERALEIN_751243_tab.enabled=ConstantsApi.mode.All;
this.G_GENERALEIN_751243_tab.visible=ConstantsApi.mode.All;
this.G_GENERALEIN_751243.id="G_GENERALEIN_751243";
this.G_GENERALEIN_751243.name="Group1190";
this.G_GENERALEIN_751243.columns=3;
this.G_GENERALEIN_751243.labelOrientation="Top";
this.G_GENERALEIN_751243.colSpan=1;
this.G_GENERALEIN_751243.enabled=ConstantsApi.mode.All;
this.G_GENERALEIN_751243.visible=ConstantsApi.mode.All;
this.G_GENERALTIN_333243_tab.id="G_GENERALTIN_333243_tab";
this.G_GENERALTIN_333243_tab.label=cobis.translate("LNSPR.LBL_LNSPR_DISTRIBOR_73854");
this.G_GENERALTIN_333243_tab.childrenGroups = ['G_GENERALTIN_333243'];
this.G_GENERALTIN_333243_tab.colSpan=1;
this.G_GENERALTIN_333243_tab.enabled=ConstantsApi.mode.All;
this.G_GENERALTIN_333243_tab.visible=ConstantsApi.mode.All;
this.G_GENERALTIN_333243.id="G_GENERALTIN_333243";
this.G_GENERALTIN_333243.name="Group1330";
this.G_GENERALTIN_333243.columns=3;
this.G_GENERALTIN_333243.labelOrientation="Top";
this.G_GENERALTIN_333243.colSpan=1;
this.G_GENERALTIN_333243.enabled=ConstantsApi.mode.All;
this.G_GENERALTIN_333243.visible=ConstantsApi.mode.All;
this.G_GENERALNLN_510243_tab.id="G_GENERALNLN_510243_tab";
this.G_GENERALNLN_510243_tab.label=cobis.translate("LNSPR.LBL_LNSPR_GARANTALE_80459");
this.G_GENERALNLN_510243_tab.childrenGroups = ['G_GENERALNLN_510243'];
this.G_GENERALNLN_510243_tab.colSpan=1;
this.G_GENERALNLN_510243_tab.enabled=ConstantsApi.mode.All;
this.G_GENERALNLN_510243_tab.visible=ConstantsApi.mode.All;
this.G_GENERALNLN_510243.id="G_GENERALNLN_510243";
this.G_GENERALNLN_510243.name="Group1222";
this.G_GENERALNLN_510243.columns=3;
this.G_GENERALNLN_510243.labelOrientation="Top";
this.G_GENERALNLN_510243.colSpan=1;
this.G_GENERALNLN_510243.enabled=ConstantsApi.mode.All;
this.G_GENERALNLN_510243.visible=ConstantsApi.mode.All;
this.G_GENERALAAO_224243_default_blank.id = "G_GENERALAAO_224243_default_blank";
this.G_GENERALAAO_224243_default_blank.name = "G_GENERALAAO_224243_default_blank";
this.G_GENERALAAO_224243_default_blank.colSpan = 1;
this.G_GENERALAAO_224243_default_blank.visible= ConstantsApi.mode.All;
this.G_GENERALLII_531243_default_blank.id = "G_GENERALLII_531243_default_blank";
this.G_GENERALLII_531243_default_blank.name = "G_GENERALLII_531243_default_blank";
this.G_GENERALLII_531243_default_blank.colSpan = 1;
this.G_GENERALLII_531243_default_blank.visible= ConstantsApi.mode.All;
this.G_GENERALOIA_538243_default_blank.id = "G_GENERALOIA_538243_default_blank";
this.G_GENERALOIA_538243_default_blank.name = "G_GENERALOIA_538243_default_blank";
this.G_GENERALOIA_538243_default_blank.colSpan = 1;
this.G_GENERALOIA_538243_default_blank.visible= ConstantsApi.mode.All;
this.G_GENERALEIN_751243_default_blank.id = "G_GENERALEIN_751243_default_blank";
this.G_GENERALEIN_751243_default_blank.name = "G_GENERALEIN_751243_default_blank";
this.G_GENERALEIN_751243_default_blank.colSpan = 1;
this.G_GENERALEIN_751243_default_blank.visible= ConstantsApi.mode.All;
this.G_GENERALTIN_333243_default_blank.id = "G_GENERALTIN_333243_default_blank";
this.G_GENERALTIN_333243_default_blank.name = "G_GENERALTIN_333243_default_blank";
this.G_GENERALTIN_333243_default_blank.colSpan = 1;
this.G_GENERALTIN_333243_default_blank.visible= ConstantsApi.mode.All;
this.G_GENERALNLN_510243_default_blank.id = "G_GENERALNLN_510243_default_blank";
this.G_GENERALNLN_510243_default_blank.name = "G_GENERALNLN_510243_default_blank";
this.G_GENERALNLN_510243_default_blank.colSpan = 1;
this.G_GENERALNLN_510243_default_blank.visible= ConstantsApi.mode.All;
this.T_LNSPRNRRVDNTA_721 = this.formBuilder.group({
});
}
}