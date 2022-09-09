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
public T_ASSTSOGDWIAAO_949!:FormGroup;
public VC_LOANSHISOO_808949:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANSHIRII_607863 : CobisTabbedLayoutContainerModel = new CobisTabbedLayoutContainerModel();
public G_LOANSHITIC_293863_tab : CobisTabbedLayoutTabModel = new CobisTabbedLayoutTabModel();
public G_LOANSHITIC_293863 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANSHICTI_733863 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANSHICSI_482863 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANSHIITO_581863_tab : CobisTabbedLayoutTabModel = new CobisTabbedLayoutTabModel();
public G_LOANSHIITO_581863 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANSHIOIR_548863_tab : CobisTabbedLayoutTabModel = new CobisTabbedLayoutTabModel();
public G_LOANSHIOIR_548863 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANSHIROI_993863 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANSHITCC_927863 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANSHIITT_988863_tab : CobisTabbedLayoutTabModel = new CobisTabbedLayoutTabModel();
public G_LOANSHIITT_988863 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANSHITTO_207863_tab : CobisTabbedLayoutTabModel = new CobisTabbedLayoutTabModel();
public G_LOANSHITTO_207863 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANSHICTI_733863_default_blank: CobisSpacerModel = new CobisSpacerModel();
public G_LOANSHICSI_482863_default_blank: CobisSpacerModel = new CobisSpacerModel();
public G_LOANSHIITO_581863_default_blank: CobisSpacerModel = new CobisSpacerModel();
public G_LOANSHIROI_993863_default_blank: CobisSpacerModel = new CobisSpacerModel();
public G_LOANSHITCC_927863_default_blank: CobisSpacerModel = new CobisSpacerModel();
public G_LOANSHIITT_988863_default_blank: CobisSpacerModel = new CobisSpacerModel();
public G_LOANSHITTO_207863_default_blank: CobisSpacerModel = new CobisSpacerModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_LOANSHISOO_808949.id="VC_LOANSHISOO_808949";
this.VC_LOANSHISOO_808949.name="LoansHistoricForm";
this.VC_LOANSHISOO_808949.colSpan=1;
this.VC_LOANSHISOO_808949.columns=1;
this.VC_LOANSHISOO_808949.enabled=ConstantsApi.mode.All;
this.G_LOANSHIRII_607863.id="G_LOANSHIRII_607863";
this.G_LOANSHIRII_607863.name="LoansHistoricForm";
this.G_LOANSHIRII_607863.tabPosition=PositionTab.TOP;
this.G_LOANSHIRII_607863.enabled=ConstantsApi.mode.All;
this.G_LOANSHIRII_607863.childrenGroups = ["G_LOANSHITIC_293863_tab","G_LOANSHIITO_581863_tab","G_LOANSHIOIR_548863_tab","G_LOANSHIITT_988863_tab","G_LOANSHITTO_207863_tab"];
this.G_LOANSHITIC_293863_tab.id="G_LOANSHITIC_293863_tab";
this.G_LOANSHITIC_293863_tab.label=cobis.translate("ASSTS.LBL_ASSTS_ESTADOACU_72691");
this.G_LOANSHITIC_293863_tab.childrenGroups = ['G_LOANSHITIC_293863'];
this.G_LOANSHITIC_293863_tab.colSpan=1;
this.G_LOANSHITIC_293863_tab.enabled=ConstantsApi.mode.All;
this.G_LOANSHITIC_293863_tab.visible=ConstantsApi.mode.All;
this.G_LOANSHITIC_293863.id="G_LOANSHITIC_293863";
this.G_LOANSHITIC_293863.name="GroupLayout1808";
this.G_LOANSHITIC_293863.columns=1;
this.G_LOANSHITIC_293863.childrenGroups = ["G_LOANSHICTI_733863","G_LOANSHICSI_482863"];
this.G_LOANSHITIC_293863.colSpan=1;
this.G_LOANSHITIC_293863.enabled=ConstantsApi.mode.All;
this.G_LOANSHITIC_293863.visible=ConstantsApi.mode.All;
this.G_LOANSHICTI_733863.id="G_LOANSHICTI_733863";
this.G_LOANSHICTI_733863.name="Group1115";
this.G_LOANSHICTI_733863.columns=3;
this.G_LOANSHICTI_733863.labelOrientation="Top";
this.G_LOANSHICTI_733863.colSpan=1;
this.G_LOANSHICTI_733863.enabled=ConstantsApi.mode.All;
this.G_LOANSHICTI_733863.visible=ConstantsApi.mode.All;
this.G_LOANSHICSI_482863.id="G_LOANSHICSI_482863";
this.G_LOANSHICSI_482863.name="Group2215";
this.G_LOANSHICSI_482863.columns=3;
this.G_LOANSHICSI_482863.labelOrientation="Top";
this.G_LOANSHICSI_482863.colSpan=1;
this.G_LOANSHICSI_482863.enabled=ConstantsApi.mode.All;
this.G_LOANSHICSI_482863.visible=ConstantsApi.mode.All;
this.G_LOANSHIITO_581863_tab.id="G_LOANSHIITO_581863_tab";
this.G_LOANSHIITO_581863_tab.label=cobis.translate("ASSTS.LBL_ASSTS_INACINGAA_67127");
this.G_LOANSHIITO_581863_tab.childrenGroups = ['G_LOANSHIITO_581863'];
this.G_LOANSHIITO_581863_tab.colSpan=1;
this.G_LOANSHIITO_581863_tab.enabled=ConstantsApi.mode.All;
this.G_LOANSHIITO_581863_tab.visible=ConstantsApi.mode.All;
this.G_LOANSHIITO_581863.id="G_LOANSHIITO_581863";
this.G_LOANSHIITO_581863.name="Group2605";
this.G_LOANSHIITO_581863.columns=3;
this.G_LOANSHIITO_581863.labelOrientation="Top";
this.G_LOANSHIITO_581863.colSpan=1;
this.G_LOANSHIITO_581863.enabled=ConstantsApi.mode.All;
this.G_LOANSHIITO_581863.visible=ConstantsApi.mode.All;
this.G_LOANSHIOIR_548863_tab.id="G_LOANSHIOIR_548863_tab";
this.G_LOANSHIOIR_548863_tab.label=cobis.translate("ASSTS.LBL_ASSTS_RUBROSYSA_16960");
this.G_LOANSHIOIR_548863_tab.childrenGroups = ['G_LOANSHIOIR_548863'];
this.G_LOANSHIOIR_548863_tab.colSpan=1;
this.G_LOANSHIOIR_548863_tab.enabled=ConstantsApi.mode.All;
this.G_LOANSHIOIR_548863_tab.visible=ConstantsApi.mode.All;
this.G_LOANSHIOIR_548863.id="G_LOANSHIOIR_548863";
this.G_LOANSHIOIR_548863.name="GroupLayout2606";
this.G_LOANSHIOIR_548863.columns=1;
this.G_LOANSHIOIR_548863.childrenGroups = ["G_LOANSHIROI_993863","G_LOANSHITCC_927863"];
this.G_LOANSHIOIR_548863.colSpan=1;
this.G_LOANSHIOIR_548863.enabled=ConstantsApi.mode.All;
this.G_LOANSHIOIR_548863.visible=ConstantsApi.mode.All;
this.G_LOANSHIROI_993863.id="G_LOANSHIROI_993863";
this.G_LOANSHIROI_993863.name="Group2801";
this.G_LOANSHIROI_993863.columns=3;
this.G_LOANSHIROI_993863.labelOrientation="Top";
this.G_LOANSHIROI_993863.colSpan=1;
this.G_LOANSHIROI_993863.enabled=ConstantsApi.mode.All;
this.G_LOANSHIROI_993863.visible=ConstantsApi.mode.All;
this.G_LOANSHITCC_927863.id="G_LOANSHITCC_927863";
this.G_LOANSHITCC_927863.name="Group2835";
this.G_LOANSHITCC_927863.columns=3;
this.G_LOANSHITCC_927863.labelOrientation="Top";
this.G_LOANSHITCC_927863.colSpan=1;
this.G_LOANSHITCC_927863.enabled=ConstantsApi.mode.All;
this.G_LOANSHITCC_927863.visible=ConstantsApi.mode.All;
this.G_LOANSHIITT_988863_tab.id="G_LOANSHIITT_988863_tab";
this.G_LOANSHIITT_988863_tab.label=cobis.translate("ASSTS.LBL_ASSTS_ABONOSBOQ_70064");
this.G_LOANSHIITT_988863_tab.childrenGroups = ['G_LOANSHIITT_988863'];
this.G_LOANSHIITT_988863_tab.colSpan=1;
this.G_LOANSHIITT_988863_tab.enabled=ConstantsApi.mode.All;
this.G_LOANSHIITT_988863_tab.visible=ConstantsApi.mode.All;
this.G_LOANSHIITT_988863.id="G_LOANSHIITT_988863";
this.G_LOANSHIITT_988863.name="Group2344";
this.G_LOANSHIITT_988863.columns=3;
this.G_LOANSHIITT_988863.labelOrientation="Top";
this.G_LOANSHIITT_988863.colSpan=1;
this.G_LOANSHIITT_988863.enabled=ConstantsApi.mode.All;
this.G_LOANSHIITT_988863.visible=ConstantsApi.mode.All;
this.G_LOANSHITTO_207863_tab.id="G_LOANSHITTO_207863_tab";
this.G_LOANSHITTO_207863_tab.label=cobis.translate("ASSTS.LBL_ASSTS_TRANSACEN_33079");
this.G_LOANSHITTO_207863_tab.childrenGroups = ['G_LOANSHITTO_207863'];
this.G_LOANSHITTO_207863_tab.colSpan=1;
this.G_LOANSHITTO_207863_tab.enabled=ConstantsApi.mode.All;
this.G_LOANSHITTO_207863_tab.visible=ConstantsApi.mode.All;
this.G_LOANSHITTO_207863.id="G_LOANSHITTO_207863";
this.G_LOANSHITTO_207863.name="Group2389";
this.G_LOANSHITTO_207863.columns=3;
this.G_LOANSHITTO_207863.labelOrientation="Top";
this.G_LOANSHITTO_207863.colSpan=1;
this.G_LOANSHITTO_207863.enabled=ConstantsApi.mode.All;
this.G_LOANSHITTO_207863.visible=ConstantsApi.mode.All;
this.G_LOANSHICTI_733863_default_blank.id = "G_LOANSHICTI_733863_default_blank";
this.G_LOANSHICTI_733863_default_blank.name = "G_LOANSHICTI_733863_default_blank";
this.G_LOANSHICTI_733863_default_blank.colSpan = 1;
this.G_LOANSHICTI_733863_default_blank.visible= ConstantsApi.mode.All;
this.G_LOANSHICSI_482863_default_blank.id = "G_LOANSHICSI_482863_default_blank";
this.G_LOANSHICSI_482863_default_blank.name = "G_LOANSHICSI_482863_default_blank";
this.G_LOANSHICSI_482863_default_blank.colSpan = 1;
this.G_LOANSHICSI_482863_default_blank.visible= ConstantsApi.mode.All;
this.G_LOANSHIITO_581863_default_blank.id = "G_LOANSHIITO_581863_default_blank";
this.G_LOANSHIITO_581863_default_blank.name = "G_LOANSHIITO_581863_default_blank";
this.G_LOANSHIITO_581863_default_blank.colSpan = 1;
this.G_LOANSHIITO_581863_default_blank.visible= ConstantsApi.mode.All;
this.G_LOANSHIROI_993863_default_blank.id = "G_LOANSHIROI_993863_default_blank";
this.G_LOANSHIROI_993863_default_blank.name = "G_LOANSHIROI_993863_default_blank";
this.G_LOANSHIROI_993863_default_blank.colSpan = 1;
this.G_LOANSHIROI_993863_default_blank.visible= ConstantsApi.mode.All;
this.G_LOANSHITCC_927863_default_blank.id = "G_LOANSHITCC_927863_default_blank";
this.G_LOANSHITCC_927863_default_blank.name = "G_LOANSHITCC_927863_default_blank";
this.G_LOANSHITCC_927863_default_blank.colSpan = 1;
this.G_LOANSHITCC_927863_default_blank.visible= ConstantsApi.mode.All;
this.G_LOANSHIITT_988863_default_blank.id = "G_LOANSHIITT_988863_default_blank";
this.G_LOANSHIITT_988863_default_blank.name = "G_LOANSHIITT_988863_default_blank";
this.G_LOANSHIITT_988863_default_blank.colSpan = 1;
this.G_LOANSHIITT_988863_default_blank.visible= ConstantsApi.mode.All;
this.G_LOANSHITTO_207863_default_blank.id = "G_LOANSHITTO_207863_default_blank";
this.G_LOANSHITTO_207863_default_blank.name = "G_LOANSHITTO_207863_default_blank";
this.G_LOANSHITTO_207863_default_blank.colSpan = 1;
this.G_LOANSHITTO_207863_default_blank.visible= ConstantsApi.mode.All;
this.T_ASSTSOGDWIAAO_949 = this.formBuilder.group({
});
}
}