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
public T_ASSTSEFYTNIXU_871!:FormGroup;
public VC_LOANPARTIR_265871:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANPARSTB_361369 : CobisTabbedLayoutContainerModel = new CobisTabbedLayoutContainerModel();
public G_LOANPARBTT_780369_tab : CobisTabbedLayoutTabModel = new CobisTabbedLayoutTabModel();
public G_LOANPARBTT_780369 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANPARNSB_185369_tab : CobisTabbedLayoutTabModel = new CobisTabbedLayoutTabModel();
public G_LOANPARNSB_185369 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANPARNET_643369_tab : CobisTabbedLayoutTabModel = new CobisTabbedLayoutTabModel();
public G_LOANPARNET_643369 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANPARTDT_335369_tab : CobisTabbedLayoutTabModel = new CobisTabbedLayoutTabModel();
public G_LOANPARTDT_335369 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANPARBTT_780369_default_blank: CobisSpacerModel = new CobisSpacerModel();
public G_LOANPARNSB_185369_default_blank: CobisSpacerModel = new CobisSpacerModel();
public G_LOANPARNET_643369_default_blank: CobisSpacerModel = new CobisSpacerModel();
public G_LOANPARTDT_335369_default_blank: CobisSpacerModel = new CobisSpacerModel();
public CM_TASSTSEF_N17: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_LOANPARTIR_265871.id="VC_LOANPARTIR_265871";
this.VC_LOANPARTIR_265871.name="LoanPartialDisbursement";
this.VC_LOANPARTIR_265871.colSpan=1;
this.VC_LOANPARTIR_265871.columns=1;
this.VC_LOANPARTIR_265871.enabled=ConstantsApi.mode.All;
this.G_LOANPARSTB_361369.id="G_LOANPARSTB_361369";
this.G_LOANPARSTB_361369.name="LoanPartialDisbursement";
this.G_LOANPARSTB_361369.tabPosition=PositionTab.TOP;
this.G_LOANPARSTB_361369.enabled=ConstantsApi.mode.All;
this.G_LOANPARSTB_361369.childrenGroups = ["G_LOANPARBTT_780369_tab","G_LOANPARNSB_185369_tab","G_LOANPARNET_643369_tab","G_LOANPARTDT_335369_tab"];
this.G_LOANPARBTT_780369_tab.id="G_LOANPARBTT_780369_tab";
this.G_LOANPARBTT_780369_tab.label=cobis.translate("ASSTS.LBL_ASSTS_INACINGAA_67127");
this.G_LOANPARBTT_780369_tab.childrenGroups = ['G_LOANPARBTT_780369'];
this.G_LOANPARBTT_780369_tab.colSpan=1;
this.G_LOANPARBTT_780369_tab.enabled=ConstantsApi.mode.All;
this.G_LOANPARBTT_780369_tab.visible=ConstantsApi.mode.All;
this.G_LOANPARBTT_780369.id="G_LOANPARBTT_780369";
this.G_LOANPARBTT_780369.name="Group1533";
this.G_LOANPARBTT_780369.columns=1;
this.G_LOANPARBTT_780369.labelOrientation="Top";
this.G_LOANPARBTT_780369.colSpan=1;
this.G_LOANPARBTT_780369.enabled=ConstantsApi.mode.All;
this.G_LOANPARBTT_780369.visible=ConstantsApi.mode.All;
this.G_LOANPARNSB_185369_tab.id="G_LOANPARNSB_185369_tab";
this.G_LOANPARNSB_185369_tab.label=cobis.translate("ASSTS.LBL_ASSTS_AMORTIZCA_54924");
this.G_LOANPARNSB_185369_tab.childrenGroups = ['G_LOANPARNSB_185369'];
this.G_LOANPARNSB_185369_tab.colSpan=1;
this.G_LOANPARNSB_185369_tab.enabled=ConstantsApi.mode.All;
this.G_LOANPARNSB_185369_tab.visible=ConstantsApi.mode.All;
this.G_LOANPARNSB_185369.id="G_LOANPARNSB_185369";
this.G_LOANPARNSB_185369.name="Group2295";
this.G_LOANPARNSB_185369.columns=1;
this.G_LOANPARNSB_185369.labelOrientation="Top";
this.G_LOANPARNSB_185369.colSpan=1;
this.G_LOANPARNSB_185369.enabled=ConstantsApi.mode.All;
this.G_LOANPARNSB_185369.visible=ConstantsApi.mode.All;
this.G_LOANPARNET_643369_tab.id="G_LOANPARNET_643369_tab";
this.G_LOANPARNET_643369_tab.label=cobis.translate("ASSTS.LBL_ASSTS_RUBROSAEW_67124");
this.G_LOANPARNET_643369_tab.childrenGroups = ['G_LOANPARNET_643369'];
this.G_LOANPARNET_643369_tab.colSpan=1;
this.G_LOANPARNET_643369_tab.enabled=ConstantsApi.mode.All;
this.G_LOANPARNET_643369_tab.visible=ConstantsApi.mode.All;
this.G_LOANPARNET_643369.id="G_LOANPARNET_643369";
this.G_LOANPARNET_643369.name="Group2157";
this.G_LOANPARNET_643369.columns=1;
this.G_LOANPARNET_643369.labelOrientation="Top";
this.G_LOANPARNET_643369.colSpan=1;
this.G_LOANPARNET_643369.enabled=ConstantsApi.mode.All;
this.G_LOANPARNET_643369.visible=ConstantsApi.mode.All;
this.G_LOANPARTDT_335369_tab.id="G_LOANPARTDT_335369_tab";
this.G_LOANPARTDT_335369_tab.label=cobis.translate("ASSTS.LBL_ASSTS_DESEMBOSC_80562");
this.G_LOANPARTDT_335369_tab.childrenGroups = ['G_LOANPARTDT_335369'];
this.G_LOANPARTDT_335369_tab.colSpan=1;
this.G_LOANPARTDT_335369_tab.enabled=ConstantsApi.mode.All;
this.G_LOANPARTDT_335369_tab.visible=ConstantsApi.mode.All;
this.G_LOANPARTDT_335369.id="G_LOANPARTDT_335369";
this.G_LOANPARTDT_335369.name="Group2877";
this.G_LOANPARTDT_335369.columns=1;
this.G_LOANPARTDT_335369.labelOrientation="Top";
this.G_LOANPARTDT_335369.colSpan=1;
this.G_LOANPARTDT_335369.enabled=ConstantsApi.mode.All;
this.G_LOANPARTDT_335369.visible=ConstantsApi.mode.All;
this.CM_TASSTSEF_N17.id = "CM_TASSTSEF_N17";
this.CM_TASSTSEF_N17.name = "Command1";
this.CM_TASSTSEF_N17.causesValidation=false;
this.CM_TASSTSEF_N17.submitOnEnter=false;
this.CM_TASSTSEF_N17.setFocus=false;
this.CM_TASSTSEF_N17.close=false;
this.CM_TASSTSEF_N17.label = cobis.translate("ASSTS.LBL_ASSTS_ENVIARRFA_30717");
this.CM_TASSTSEF_N17.enabled = ConstantsApi.mode.All;
this.CM_TASSTSEF_N17.visible= ConstantsApi.mode.All;
this.G_LOANPARBTT_780369_default_blank.id = "G_LOANPARBTT_780369_default_blank";
this.G_LOANPARBTT_780369_default_blank.name = "G_LOANPARBTT_780369_default_blank";
this.G_LOANPARBTT_780369_default_blank.colSpan = 1;
this.G_LOANPARBTT_780369_default_blank.visible= ConstantsApi.mode.All;
this.G_LOANPARNSB_185369_default_blank.id = "G_LOANPARNSB_185369_default_blank";
this.G_LOANPARNSB_185369_default_blank.name = "G_LOANPARNSB_185369_default_blank";
this.G_LOANPARNSB_185369_default_blank.colSpan = 1;
this.G_LOANPARNSB_185369_default_blank.visible= ConstantsApi.mode.All;
this.G_LOANPARNET_643369_default_blank.id = "G_LOANPARNET_643369_default_blank";
this.G_LOANPARNET_643369_default_blank.name = "G_LOANPARNET_643369_default_blank";
this.G_LOANPARNET_643369_default_blank.colSpan = 1;
this.G_LOANPARNET_643369_default_blank.visible= ConstantsApi.mode.All;
this.G_LOANPARTDT_335369_default_blank.id = "G_LOANPARTDT_335369_default_blank";
this.G_LOANPARTDT_335369_default_blank.name = "G_LOANPARTDT_335369_default_blank";
this.G_LOANPARTDT_335369_default_blank.colSpan = 1;
this.G_LOANPARTDT_335369_default_blank.visible= ConstantsApi.mode.All;
this.T_ASSTSEFYTNIXU_871 = this.formBuilder.group({
});
}
}