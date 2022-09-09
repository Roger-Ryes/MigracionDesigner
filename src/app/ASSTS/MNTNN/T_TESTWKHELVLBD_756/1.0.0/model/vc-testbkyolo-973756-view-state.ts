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
public T_TESTWKHELVLBD_756!:FormGroup;
public VC_TESTBKYOLO_973756:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_TESTEKYAAK_356872 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_TESTCYDRBD_191872 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_TESTPOYFCM_952872 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_TESTASOELG_345872 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_TESTLECLOB_879872 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VA_TEXTINPUTBOXUFN_810872: CobisDropDownListModel = new CobisDropDownListModel();
public VA_VACOMPOSITEXPWV_130872: CobisCompositevaModel = new CobisCompositevaModel();
public VA_CATEGORYTYPEOYS_156872: CobisTextLabelModel = new CobisTextLabelModel();
public VA_VALUEAPPLYTRDBF_557872: CobisTextLabelModel = new CobisTextLabelModel();
public VA_REFERENCEXBMXWK_229872: CobisTextLabelModel = new CobisTextLabelModel();
public VA_BASECALCULATONI_509872: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_INIDIVGJKPNKHJF_695872: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_DIVUPQPVWWEQDNI_233872: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_2011UKZSBSFRWRA_245872: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_COMMENTARYRPSHX_258872: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_RANGEQFHSDDUABD_909872: CobisTextLabelModel = new CobisTextLabelModel();
public CM_TTESTWKH_NN5: CobisButtonModel = new CobisButtonModel();
public CM_TTESTWKH_T57: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_TESTBKYOLO_973756.id="VC_TESTBKYOLO_973756";
this.VC_TESTBKYOLO_973756.name="Test";
this.VC_TESTBKYOLO_973756.colSpan=1;
this.VC_TESTBKYOLO_973756.columns=1;
this.VC_TESTBKYOLO_973756.enabled=ConstantsApi.mode.All;
this.G_TESTEKYAAK_356872.id="G_TESTEKYAAK_356872";
this.G_TESTEKYAAK_356872.name="Group1800";
this.G_TESTEKYAAK_356872.columns=1;
this.G_TESTEKYAAK_356872.labelOrientation="Top";
this.G_TESTEKYAAK_356872.colSpan=1;
this.G_TESTEKYAAK_356872.enabled=ConstantsApi.mode.All;
this.G_TESTEKYAAK_356872.visible=ConstantsApi.mode.All;
this.G_TESTEKYAAK_356872.attList = ["concept"];
this.G_TESTEKYAAK_356872.className = "padding-label-inf";
this.G_TESTCYDRBD_191872.id="G_TESTCYDRBD_191872";
this.G_TESTCYDRBD_191872.name="Group2435";
this.G_TESTCYDRBD_191872.columns=1;
this.G_TESTCYDRBD_191872.labelOrientation="Left";
this.G_TESTCYDRBD_191872.colSpan=1;
this.G_TESTCYDRBD_191872.enabled=ConstantsApi.mode.All;
this.G_TESTCYDRBD_191872.visible=ConstantsApi.mode.All;
this.G_TESTCYDRBD_191872.attList = ["categoryType","valueApply","reference"];
this.G_TESTPOYFCM_952872.id="G_TESTPOYFCM_952872";
this.G_TESTPOYFCM_952872.name="Group2508";
this.G_TESTPOYFCM_952872.columns=3;
this.G_TESTPOYFCM_952872.labelOrientation="Top";
this.G_TESTPOYFCM_952872.colSpan=1;
this.G_TESTPOYFCM_952872.enabled=ConstantsApi.mode.All;
this.G_TESTPOYFCM_952872.visible=ConstantsApi.mode.All;
this.G_TESTPOYFCM_952872.attList = ["baseCalculation","iniDiv","divUp"];
this.G_TESTASOELG_345872.id="G_TESTASOELG_345872";
this.G_TESTASOELG_345872.name="Group2828";
this.G_TESTASOELG_345872.columns=3;
this.G_TESTASOELG_345872.labelOrientation="Top";
this.G_TESTASOELG_345872.colSpan=1;
this.G_TESTASOELG_345872.enabled=ConstantsApi.mode.All;
this.G_TESTASOELG_345872.visible=ConstantsApi.mode.All;
this.G_TESTASOELG_345872.attList = ["value","commentary"];
this.G_TESTLECLOB_879872.id="G_TESTLECLOB_879872";
this.G_TESTLECLOB_879872.name="Group2294";
this.G_TESTLECLOB_879872.columns=3;
this.G_TESTLECLOB_879872.labelOrientation="Left";
this.G_TESTLECLOB_879872.colSpan=1;
this.G_TESTLECLOB_879872.enabled=ConstantsApi.mode.All;
this.G_TESTLECLOB_879872.visible=ConstantsApi.mode.None;
this.G_TESTLECLOB_879872.attList = ["range"];
this.CM_TTESTWKH_NN5.id = "CM_TTESTWKH_NN5";
this.CM_TTESTWKH_NN5.name = "Command1";
this.CM_TTESTWKH_NN5.causesValidation=true;
this.CM_TTESTWKH_NN5.submitOnEnter=true;
this.CM_TTESTWKH_NN5.setFocus=false;
this.CM_TTESTWKH_NN5.close=false;
this.CM_TTESTWKH_NN5.label = cobis.translate("ASSTS.LBL_ASSTS_GUARDARRI_81055");
this.CM_TTESTWKH_NN5.enabled = ConstantsApi.mode.All;
this.CM_TTESTWKH_NN5.visible= ConstantsApi.mode.All;
this.CM_TTESTWKH_T57.id = "CM_TTESTWKH_T57";
this.CM_TTESTWKH_T57.name = "Command2";
this.CM_TTESTWKH_T57.causesValidation=false;
this.CM_TTESTWKH_T57.submitOnEnter=false;
this.CM_TTESTWKH_T57.setFocus=false;
this.CM_TTESTWKH_T57.close=true;
this.CM_TTESTWKH_T57.label = cobis.translate("ASSTS.LBL_ASSTS_CANCELARR_70217");
this.CM_TTESTWKH_T57.enabled = ConstantsApi.mode.All;
this.CM_TTESTWKH_T57.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXUFN_810872.label = cobis.translate("ASSTS.LBL_ASSTS_CONCEPTOO_16181");
this.VA_TEXTINPUTBOXUFN_810872.blankOption=true;
this.VA_TEXTINPUTBOXUFN_810872.entity = "OtherCharges";
this.VA_TEXTINPUTBOXUFN_810872.attribute = "concept";
this.VA_TEXTINPUTBOXUFN_810872.textField = "value";
this.VA_TEXTINPUTBOXUFN_810872.valueField = "code";
this.VA_TEXTINPUTBOXUFN_810872.showId= true;
this.VA_TEXTINPUTBOXUFN_810872.name="concept";
this.VA_TEXTINPUTBOXUFN_810872.id="VA_TEXTINPUTBOXUFN_810872";
this.VA_TEXTINPUTBOXUFN_810872.colSpan=1;
this.VA_TEXTINPUTBOXUFN_810872.withoutLabel = false;
this.VA_TEXTINPUTBOXUFN_810872.readOnly = ConstantsApi.mode.Query;
this.VA_TEXTINPUTBOXUFN_810872.enabled = ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXUFN_810872.visible= ConstantsApi.mode.All;
this.VA_TEXTINPUTBOXUFN_810872.required = true;
this.VA_TEXTINPUTBOXUFN_810872.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_TEXTINPUTBOXUFN_810872.messagesValidations = {
required: cobis.translate('DSGNR.SYS_DSGNR_MSGREQURF_00032')
};
this.VA_VACOMPOSITEXPWV_130872.id = "VA_VACOMPOSITEXPWV_130872";
this.VA_VACOMPOSITEXPWV_130872.name = "VA_VACOMPOSITEXPWV_130872";
this.VA_VACOMPOSITEXPWV_130872.colSpan = 1;
this.VA_VACOMPOSITEXPWV_130872.withoutLabel = true;
this.VA_CATEGORYTYPEOYS_156872.id = "VA_CATEGORYTYPEOYS_156872";
this.VA_CATEGORYTYPEOYS_156872.name = "categoryType";
this.VA_CATEGORYTYPEOYS_156872.label = cobis.translate("ASSTS.LBL_ASSTS_TIPORUBOR_75950");
this.VA_CATEGORYTYPEOYS_156872.attribute = "categoryType";
this.VA_CATEGORYTYPEOYS_156872.colSpan = 1;
this.VA_CATEGORYTYPEOYS_156872.withoutLabel = false;
this.VA_CATEGORYTYPEOYS_156872.enabled = ConstantsApi.mode.All;
this.VA_CATEGORYTYPEOYS_156872.visible= ConstantsApi.mode.All;
this.VA_VALUEAPPLYTRDBF_557872.id = "VA_VALUEAPPLYTRDBF_557872";
this.VA_VALUEAPPLYTRDBF_557872.name = "valueApply";
this.VA_VALUEAPPLYTRDBF_557872.label = cobis.translate("ASSTS.LBL_ASSTS_VALORAAAC_43152");
this.VA_VALUEAPPLYTRDBF_557872.attribute = "valueApply";
this.VA_VALUEAPPLYTRDBF_557872.colSpan = 1;
this.VA_VALUEAPPLYTRDBF_557872.withoutLabel = false;
this.VA_VALUEAPPLYTRDBF_557872.enabled = ConstantsApi.mode.All;
this.VA_VALUEAPPLYTRDBF_557872.visible= ConstantsApi.mode.All;
this.VA_REFERENCEXBMXWK_229872.id = "VA_REFERENCEXBMXWK_229872";
this.VA_REFERENCEXBMXWK_229872.name = "reference";
this.VA_REFERENCEXBMXWK_229872.label = cobis.translate("ASSTS.LBL_ASSTS_REFERENCC_20812");
this.VA_REFERENCEXBMXWK_229872.attribute = "reference";
this.VA_REFERENCEXBMXWK_229872.colSpan = 1;
this.VA_REFERENCEXBMXWK_229872.withoutLabel = false;
this.VA_REFERENCEXBMXWK_229872.enabled = ConstantsApi.mode.All;
this.VA_REFERENCEXBMXWK_229872.visible= ConstantsApi.mode.All;
this.VA_BASECALCULATONI_509872.label = cobis.translate("ASSTS.LBL_ASSTS_BASECLCLU_56377");
this.VA_BASECALCULATONI_509872.entity = "OtherCharges";
this.VA_BASECALCULATONI_509872.attribute = "baseCalculation";
this.VA_BASECALCULATONI_509872.textCase= TextCaseOptions.NONE;
this.VA_BASECALCULATONI_509872.format= "c";
this.VA_BASECALCULATONI_509872.name="baseCalculation";
this.VA_BASECALCULATONI_509872.id="VA_BASECALCULATONI_509872";
this.VA_BASECALCULATONI_509872.colSpan=1;
this.VA_BASECALCULATONI_509872.withoutLabel = false;
this.VA_BASECALCULATONI_509872.readOnly = ConstantsApi.mode.Query;
this.VA_BASECALCULATONI_509872.enabled = ConstantsApi.mode.All;
this.VA_BASECALCULATONI_509872.visible= ConstantsApi.mode.All;
this.VA_BASECALCULATONI_509872.inputRestrictionValidators = { onlyNumbers: true};
this.VA_INIDIVGJKPNKHJF_695872.label = cobis.translate("ASSTS.LBL_ASSTS_CUOTADESD_67554");
this.VA_INIDIVGJKPNKHJF_695872.entity = "OtherCharges";
this.VA_INIDIVGJKPNKHJF_695872.attribute = "iniDiv";
this.VA_INIDIVGJKPNKHJF_695872.textCase= TextCaseOptions.NONE;
this.VA_INIDIVGJKPNKHJF_695872.format= "n0";
this.VA_INIDIVGJKPNKHJF_695872.name="iniDiv";
this.VA_INIDIVGJKPNKHJF_695872.id="VA_INIDIVGJKPNKHJF_695872";
this.VA_INIDIVGJKPNKHJF_695872.colSpan=1;
this.VA_INIDIVGJKPNKHJF_695872.withoutLabel = false;
this.VA_INIDIVGJKPNKHJF_695872.readOnly = ConstantsApi.mode.Query;
this.VA_INIDIVGJKPNKHJF_695872.enabled = ConstantsApi.mode.All;
this.VA_INIDIVGJKPNKHJF_695872.visible= ConstantsApi.mode.All;
this.VA_INIDIVGJKPNKHJF_695872.inputRestrictionValidators = { onlyNumbers: true};
this.VA_INIDIVGJKPNKHJF_695872.required = true;
this.VA_INIDIVGJKPNKHJF_695872.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_INIDIVGJKPNKHJF_695872.messagesValidations = {
required: cobis.translate('DSGNR.SYS_DSGNR_MSGREQURF_00032')
};
this.VA_DIVUPQPVWWEQDNI_233872.label = cobis.translate("ASSTS.LBL_ASSTS_CUOTAHAAS_11841");
this.VA_DIVUPQPVWWEQDNI_233872.entity = "OtherCharges";
this.VA_DIVUPQPVWWEQDNI_233872.attribute = "divUp";
this.VA_DIVUPQPVWWEQDNI_233872.textCase= TextCaseOptions.NONE;
this.VA_DIVUPQPVWWEQDNI_233872.format= "n0";
this.VA_DIVUPQPVWWEQDNI_233872.name="divUp";
this.VA_DIVUPQPVWWEQDNI_233872.id="VA_DIVUPQPVWWEQDNI_233872";
this.VA_DIVUPQPVWWEQDNI_233872.colSpan=1;
this.VA_DIVUPQPVWWEQDNI_233872.withoutLabel = false;
this.VA_DIVUPQPVWWEQDNI_233872.readOnly = ConstantsApi.mode.Query;
this.VA_DIVUPQPVWWEQDNI_233872.enabled = ConstantsApi.mode.All;
this.VA_DIVUPQPVWWEQDNI_233872.visible= ConstantsApi.mode.All;
this.VA_DIVUPQPVWWEQDNI_233872.inputRestrictionValidators = { onlyNumbers: true};
this.VA_DIVUPQPVWWEQDNI_233872.required = true;
this.VA_DIVUPQPVWWEQDNI_233872.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_DIVUPQPVWWEQDNI_233872.messagesValidations = {
required: cobis.translate('DSGNR.SYS_DSGNR_MSGREQURF_00032')
};
this.VA_2011UKZSBSFRWRA_245872.label = cobis.translate("ASSTS.LBL_ASSTS_VALORGGEY_80898");
this.VA_2011UKZSBSFRWRA_245872.entity = "OtherCharges";
this.VA_2011UKZSBSFRWRA_245872.attribute = "value";
this.VA_2011UKZSBSFRWRA_245872.textCase= TextCaseOptions.NONE;
this.VA_2011UKZSBSFRWRA_245872.name="value";
this.VA_2011UKZSBSFRWRA_245872.id="VA_2011UKZSBSFRWRA_245872";
this.VA_2011UKZSBSFRWRA_245872.colSpan=1;
this.VA_2011UKZSBSFRWRA_245872.withoutLabel = false;
this.VA_2011UKZSBSFRWRA_245872.readOnly = ConstantsApi.mode.Query;
this.VA_2011UKZSBSFRWRA_245872.enabled = ConstantsApi.mode.All;
this.VA_2011UKZSBSFRWRA_245872.visible= ConstantsApi.mode.All;
this.VA_2011UKZSBSFRWRA_245872.required = true;
this.VA_2011UKZSBSFRWRA_245872.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.CompareValue,CustomValidators.fixedCompare('0',CustomValidatorOperator.GREATER_THAN)],[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_2011UKZSBSFRWRA_245872.messagesValidations = {
fixedCompare: cobis.translate('ASSTS.MSG_ASSTS_VALORFURN_83073'),required: cobis.translate('DSGNR.SYS_DSGNR_MSGREQURF_00032')
};
this.VA_COMMENTARYRPSHX_258872.label = cobis.translate("ASSTS.LBL_ASSTS_COMENTAOO_63544");
this.VA_COMMENTARYRPSHX_258872.entity = "OtherCharges";
this.VA_COMMENTARYRPSHX_258872.attribute = "commentary";
this.VA_COMMENTARYRPSHX_258872.maxlength= 255;
this.VA_COMMENTARYRPSHX_258872.textCase= TextCaseOptions.UPPER_CASE;
this.VA_COMMENTARYRPSHX_258872.name="commentary";
this.VA_COMMENTARYRPSHX_258872.id="VA_COMMENTARYRPSHX_258872";
this.VA_COMMENTARYRPSHX_258872.colSpan=2;
this.VA_COMMENTARYRPSHX_258872.withoutLabel = false;
this.VA_COMMENTARYRPSHX_258872.readOnly = ConstantsApi.mode.Query;
this.VA_COMMENTARYRPSHX_258872.enabled = ConstantsApi.mode.All;
this.VA_COMMENTARYRPSHX_258872.visible= ConstantsApi.mode.All;
this.VA_COMMENTARYRPSHX_258872.required = true;
this.VA_COMMENTARYRPSHX_258872.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_COMMENTARYRPSHX_258872.messagesValidations = {
required: cobis.translate('DSGNR.SYS_DSGNR_MSGREQURF_00032')
};
this.VA_RANGEQFHSDDUABD_909872.id = "VA_RANGEQFHSDDUABD_909872";
this.VA_RANGEQFHSDDUABD_909872.name = "range";
this.VA_RANGEQFHSDDUABD_909872.label = cobis.translate("ASSTS.LBL_ASSTS_RANGOHORR_73584");
this.VA_RANGEQFHSDDUABD_909872.attribute = "range";
this.VA_RANGEQFHSDDUABD_909872.colSpan = 1;
this.VA_RANGEQFHSDDUABD_909872.withoutLabel = false;
this.VA_RANGEQFHSDDUABD_909872.enabled = ConstantsApi.mode.All;
this.VA_RANGEQFHSDDUABD_909872.visible= ConstantsApi.mode.All;
this.T_TESTWKHELVLBD_756 = this.formBuilder.group({
OtherCharges: this.formBuilder.group({
concept:[{value: null, disabled: !this.VA_TEXTINPUTBOXUFN_810872.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TEXTINPUTBOXUFN_810872.validationFunctions!)],
categoryType:[{value: null, disabled: !this.VA_CATEGORYTYPEOYS_156872.visible}],
valueApply:[{value: null, disabled: !this.VA_VALUEAPPLYTRDBF_557872.visible}],
reference:[{value: null, disabled: !this.VA_REFERENCEXBMXWK_229872.visible}],
baseCalculation:[{value: null, disabled: !this.VA_BASECALCULATONI_509872.visible},CobisDesignerUtil.getValidationFunctions(this.VA_BASECALCULATONI_509872.validationFunctions!)],
iniDiv:[{value: null, disabled: !this.VA_INIDIVGJKPNKHJF_695872.visible},CobisDesignerUtil.getValidationFunctions(this.VA_INIDIVGJKPNKHJF_695872.validationFunctions!)],
divUp:[{value: null, disabled: !this.VA_DIVUPQPVWWEQDNI_233872.visible},CobisDesignerUtil.getValidationFunctions(this.VA_DIVUPQPVWWEQDNI_233872.validationFunctions!)],
value:[{value: null, disabled: !this.VA_2011UKZSBSFRWRA_245872.visible},CobisDesignerUtil.getValidationFunctions(this.VA_2011UKZSBSFRWRA_245872.validationFunctions!)],
commentary:[{value: null, disabled: !this.VA_COMMENTARYRPSHX_258872.visible},CobisDesignerUtil.getValidationFunctions(this.VA_COMMENTARYRPSHX_258872.validationFunctions!)],
range:[{value: null, disabled: !this.VA_RANGEQFHSDDUABD_909872.visible}],
sequential:[null],
date:[null],
valueMin:[null],
valueMax:[null],
balanceOp:[null],
balanceDesemp:[null],
rate:[null],
decTapl:[null],
}
),
});
}
}