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
public T_LNSPRRLRKZDAH_793!:FormGroup;
public VC_LOANLINESS_983793:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANLINECC_258461 : CobisTabbedLayoutContainerModel = new CobisTabbedLayoutContainerModel();
public G_LOANLINEEE_881461_tab : CobisTabbedLayoutTabModel = new CobisTabbedLayoutTabModel();
public G_LOANLINEEE_881461 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANLINSSA_305461 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANLINACR_870461_tab : CobisTabbedLayoutTabModel = new CobisTabbedLayoutTabModel();
public G_LOANLINACR_870461 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANLINRER_722461_tab : CobisTabbedLayoutTabModel = new CobisTabbedLayoutTabModel();
public G_LOANLINRER_722461 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANLINTRE_952461_tab : CobisTabbedLayoutTabModel = new CobisTabbedLayoutTabModel();
public G_LOANLINTRE_952461 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VA_SPACER2728DJFLZ_795461: CobisSpacerModel = new CobisSpacerModel();
public G_LOANLINAAC_240461_default_blank: CobisSpacerModel = new CobisSpacerModel();
public G_LOANLINRER_722461_default_blank: CobisSpacerModel = new CobisSpacerModel();
public G_LOANLINTRE_952461_default_blank: CobisSpacerModel = new CobisSpacerModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_LOANLINESS_983793.id="VC_LOANLINESS_983793";
this.VC_LOANLINESS_983793.name="LoanLinesCreate";
this.VC_LOANLINESS_983793.colSpan=1;
this.VC_LOANLINESS_983793.columns=1;
this.VC_LOANLINESS_983793.enabled=ConstantsApi.mode.All;
this.G_LOANLINECC_258461.id="G_LOANLINECC_258461";
this.G_LOANLINECC_258461.name="LoanLinesCreate";
this.G_LOANLINECC_258461.tabPosition=PositionTab.TOP;
this.G_LOANLINECC_258461.enabled=ConstantsApi.mode.All;
this.G_LOANLINECC_258461.childrenGroups = ["G_LOANLINEEE_881461_tab","G_LOANLINACR_870461_tab","G_LOANLINRER_722461_tab","G_LOANLINTRE_952461_tab"];
this.G_LOANLINEEE_881461_tab.id="G_LOANLINEEE_881461_tab";
this.G_LOANLINEEE_881461_tab.label=cobis.translate("LNSPR.LBL_LNSPR_DATOSLAEE_73448");
this.G_LOANLINEEE_881461_tab.childrenGroups = ['G_LOANLINEEE_881461'];
this.G_LOANLINEEE_881461_tab.colSpan=1;
this.G_LOANLINEEE_881461_tab.enabled=ConstantsApi.mode.All;
this.G_LOANLINEEE_881461_tab.visible=ConstantsApi.mode.All;
this.G_LOANLINEEE_881461.id="G_LOANLINEEE_881461";
this.G_LOANLINEEE_881461.name="GroupLayout1740";
this.G_LOANLINEEE_881461.columns=1;
this.G_LOANLINEEE_881461.childrenGroups = ["G_LOANLINSSA_305461"];
this.G_LOANLINEEE_881461.colSpan=1;
this.G_LOANLINEEE_881461.enabled=ConstantsApi.mode.All;
this.G_LOANLINEEE_881461.visible=ConstantsApi.mode.All;
this.G_LOANLINSSA_305461.id="G_LOANLINSSA_305461";
this.G_LOANLINSSA_305461.name="Group2869";
this.G_LOANLINSSA_305461.columns=3;
this.G_LOANLINSSA_305461.labelOrientation="Top";
this.G_LOANLINSSA_305461.colSpan=1;
this.G_LOANLINSSA_305461.enabled=ConstantsApi.mode.All;
this.G_LOANLINSSA_305461.visible=ConstantsApi.mode.All;
this.G_LOANLINACR_870461_tab.id="G_LOANLINACR_870461_tab";
this.G_LOANLINACR_870461_tab.label=cobis.translate("LNSPR.LBL_LNSPR_DISTRIBUR_28401");
this.G_LOANLINACR_870461_tab.childrenGroups = ['G_LOANLINACR_870461'];
this.G_LOANLINACR_870461_tab.colSpan=1;
this.G_LOANLINACR_870461_tab.enabled=ConstantsApi.mode.All;
this.G_LOANLINACR_870461_tab.visible=ConstantsApi.mode.All;
this.G_LOANLINACR_870461.id="G_LOANLINACR_870461";
this.G_LOANLINACR_870461.name="Group1328";
this.G_LOANLINACR_870461.columns=3;
this.G_LOANLINACR_870461.labelOrientation="Top";
this.G_LOANLINACR_870461.colSpan=1;
this.G_LOANLINACR_870461.enabled=ConstantsApi.mode.All;
this.G_LOANLINACR_870461.visible=ConstantsApi.mode.All;
this.G_LOANLINRER_722461_tab.id="G_LOANLINRER_722461_tab";
this.G_LOANLINRER_722461_tab.label=cobis.translate("LNSPR.LBL_LNSPR_DISTRIBOR_73854");
this.G_LOANLINRER_722461_tab.childrenGroups = ['G_LOANLINRER_722461'];
this.G_LOANLINRER_722461_tab.colSpan=1;
this.G_LOANLINRER_722461_tab.enabled=ConstantsApi.mode.All;
this.G_LOANLINRER_722461_tab.visible=ConstantsApi.mode.All;
this.G_LOANLINRER_722461.id="G_LOANLINRER_722461";
this.G_LOANLINRER_722461.name="Group1384";
this.G_LOANLINRER_722461.columns=3;
this.G_LOANLINRER_722461.labelOrientation="Top";
this.G_LOANLINRER_722461.colSpan=1;
this.G_LOANLINRER_722461.enabled=ConstantsApi.mode.All;
this.G_LOANLINRER_722461.visible=ConstantsApi.mode.All;
this.G_LOANLINTRE_952461_tab.id="G_LOANLINTRE_952461_tab";
this.G_LOANLINTRE_952461_tab.label=cobis.translate("LNSPR.LBL_LNSPR_GARANTALE_80459");
this.G_LOANLINTRE_952461_tab.childrenGroups = ['G_LOANLINTRE_952461'];
this.G_LOANLINTRE_952461_tab.colSpan=1;
this.G_LOANLINTRE_952461_tab.enabled=ConstantsApi.mode.All;
this.G_LOANLINTRE_952461_tab.visible=ConstantsApi.mode.All;
this.G_LOANLINTRE_952461.id="G_LOANLINTRE_952461";
this.G_LOANLINTRE_952461.name="Group1505";
this.G_LOANLINTRE_952461.columns=3;
this.G_LOANLINTRE_952461.labelOrientation="Top";
this.G_LOANLINTRE_952461.colSpan=1;
this.G_LOANLINTRE_952461.enabled=ConstantsApi.mode.All;
this.G_LOANLINTRE_952461.visible=ConstantsApi.mode.All;
this.VA_SPACER2728DJFLZ_795461.id = "VA_SPACER2728DJFLZ_795461";
this.VA_SPACER2728DJFLZ_795461.name = "Spacer2728";
this.VA_SPACER2728DJFLZ_795461.colSpan = 1;
this.VA_SPACER2728DJFLZ_795461.visible= ConstantsApi.mode.All;
this.G_LOANLINAAC_240461_default_blank.id = "G_LOANLINAAC_240461_default_blank";
this.G_LOANLINAAC_240461_default_blank.name = "G_LOANLINAAC_240461_default_blank";
this.G_LOANLINAAC_240461_default_blank.colSpan = 1;
this.G_LOANLINAAC_240461_default_blank.visible= ConstantsApi.mode.All;
this.G_LOANLINRER_722461_default_blank.id = "G_LOANLINRER_722461_default_blank";
this.G_LOANLINRER_722461_default_blank.name = "G_LOANLINRER_722461_default_blank";
this.G_LOANLINRER_722461_default_blank.colSpan = 1;
this.G_LOANLINRER_722461_default_blank.visible= ConstantsApi.mode.All;
this.G_LOANLINTRE_952461_default_blank.id = "G_LOANLINTRE_952461_default_blank";
this.G_LOANLINTRE_952461_default_blank.name = "G_LOANLINTRE_952461_default_blank";
this.G_LOANLINTRE_952461_default_blank.colSpan = 1;
this.G_LOANLINTRE_952461_default_blank.visible= ConstantsApi.mode.All;
this.T_LNSPRRLRKZDAH_793 = this.formBuilder.group({
});
}
}