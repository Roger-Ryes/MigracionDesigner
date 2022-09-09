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
public T_RATESMODALKUB_953!:FormGroup;
public VC_RATESMODAL_789953:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_RATESMODDD_536778 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_RATESMODLL_990778 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_RATESMOAAD_646778 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_RATESMOLAD_413778 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_RATESMOADD_409778 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VA_REFERENCEVALEEE_875778: CobisDropDownListModel = new CobisDropDownListModel();
public VA_VALUEIAMTJBFHDB_811778: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_TYPEPOINTSQGJRC_416778: CobisDropDownListModel = new CobisDropDownListModel();
public VA_NUMBERDECIMALSL_248778: CobisDropDownListModel = new CobisDropDownListModel();
public Spacer2425: CobisSpacerModel = new CobisSpacerModel();
public VA_PORTFOLIOCLASSS_404778: CobisDropDownListModel = new CobisDropDownListModel();
public VA_VASIMPLELABELLL_678778: CobisTextLabelModel = new CobisTextLabelModel();
public VA_SIGNMINPDDMQZST_831778: CobisDropDownListModel = new CobisDropDownListModel();
public VA_VALUEDEAFULTCGE_547778: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public Spacer2265: CobisSpacerModel = new CobisSpacerModel();
public VA_LOCKEDDEFAULTTT_935778: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_VASIMPLELABELLL_567778: CobisTextLabelModel = new CobisTextLabelModel();
public VA_SIGNMINKUSGFZGN_277778: CobisDropDownListModel = new CobisDropDownListModel();
public VA_VALUEMINGCHKTLJ_996778: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public Spacer2928: CobisSpacerModel = new CobisSpacerModel();
public VA_LOCKEDMINOJZSTC_260778: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_VASIMPLELABELLL_236778: CobisTextLabelModel = new CobisTextLabelModel();
public VA_SIGNMAXCQWMGYQB_195778: CobisDropDownListModel = new CobisDropDownListModel();
public VA_VALUEMAXAXNIZZF_909778: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public Spacer2747: CobisSpacerModel = new CobisSpacerModel();
public VA_LOCKEDMAXEHQUHM_227778: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public CM_TRATESMO_TU_: CobisButtonModel = new CobisButtonModel();
public CM_TRATESMO_AUS: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_RATESMODAL_789953.id="VC_RATESMODAL_789953";
this.VC_RATESMODAL_789953.name="RatesModal";
this.VC_RATESMODAL_789953.colSpan=1;
this.VC_RATESMODAL_789953.columns=1;
this.VC_RATESMODAL_789953.enabled=ConstantsApi.mode.All;
this.G_RATESMODDD_536778.id="G_RATESMODDD_536778";
this.G_RATESMODDD_536778.name="Group2230";
this.G_RATESMODDD_536778.columns=3;
this.G_RATESMODDD_536778.labelOrientation="Top";
this.G_RATESMODDD_536778.colSpan=1;
this.G_RATESMODDD_536778.enabled=ConstantsApi.mode.All;
this.G_RATESMODDD_536778.visible=ConstantsApi.mode.All;
this.G_RATESMODDD_536778.attList = ["referenceValue","value","typePoints","numberDecimals","portfolioClass"];
this.G_RATESMODLL_990778.id="G_RATESMODLL_990778";
this.G_RATESMODLL_990778.name="GroupLayout1846";
this.G_RATESMODLL_990778.columns=3;
this.G_RATESMODLL_990778.childrenGroups = ["G_RATESMOAAD_646778","G_RATESMOLAD_413778","G_RATESMOADD_409778"];
this.G_RATESMODLL_990778.colSpan=1;
this.G_RATESMODLL_990778.enabled=ConstantsApi.mode.All;
this.G_RATESMODLL_990778.visible=ConstantsApi.mode.All;
this.G_RATESMOAAD_646778.id="G_RATESMOAAD_646778";
this.G_RATESMOAAD_646778.name="Group1928";
this.G_RATESMOAAD_646778.columns=3;
this.G_RATESMOAAD_646778.labelOrientation="Top";
this.G_RATESMOAAD_646778.colSpan=1;
this.G_RATESMOAAD_646778.enabled=ConstantsApi.mode.All;
this.G_RATESMOAAD_646778.visible=ConstantsApi.mode.All;
this.G_RATESMOAAD_646778.attList = ["signDefault","valueDeafult","lockedDefault"];
this.G_RATESMOLAD_413778.id="G_RATESMOLAD_413778";
this.G_RATESMOLAD_413778.name="Group2808";
this.G_RATESMOLAD_413778.columns=3;
this.G_RATESMOLAD_413778.labelOrientation="Top";
this.G_RATESMOLAD_413778.colSpan=1;
this.G_RATESMOLAD_413778.enabled=ConstantsApi.mode.All;
this.G_RATESMOLAD_413778.visible=ConstantsApi.mode.All;
this.G_RATESMOLAD_413778.attList = ["signMin","valueMin","lockedMin"];
this.G_RATESMOADD_409778.id="G_RATESMOADD_409778";
this.G_RATESMOADD_409778.name="Group2756";
this.G_RATESMOADD_409778.columns=3;
this.G_RATESMOADD_409778.labelOrientation="Top";
this.G_RATESMOADD_409778.colSpan=1;
this.G_RATESMOADD_409778.enabled=ConstantsApi.mode.All;
this.G_RATESMOADD_409778.visible=ConstantsApi.mode.All;
this.G_RATESMOADD_409778.attList = ["signMax","valueMax","lockedMax"];
this.CM_TRATESMO_TU_.id = "CM_TRATESMO_TU_";
this.CM_TRATESMO_TU_.name = "Command1";
this.CM_TRATESMO_TU_.causesValidation=true;
this.CM_TRATESMO_TU_.submitOnEnter=false;
this.CM_TRATESMO_TU_.setFocus=false;
this.CM_TRATESMO_TU_.close=false;
this.CM_TRATESMO_TU_.label = cobis.translate("ASSTS.LBL_ASSTS_GUARDARRI_81055");
this.CM_TRATESMO_TU_.enabled = ConstantsApi.mode.All;
this.CM_TRATESMO_TU_.visible= ConstantsApi.mode.All;
this.CM_TRATESMO_AUS.id = "CM_TRATESMO_AUS";
this.CM_TRATESMO_AUS.name = "Command2";
this.CM_TRATESMO_AUS.causesValidation=false;
this.CM_TRATESMO_AUS.submitOnEnter=false;
this.CM_TRATESMO_AUS.setFocus=false;
this.CM_TRATESMO_AUS.close=false;
this.CM_TRATESMO_AUS.label = cobis.translate("ASSTS.LBL_ASSTS_CANCELARR_70217");
this.CM_TRATESMO_AUS.enabled = ConstantsApi.mode.All;
this.CM_TRATESMO_AUS.visible= ConstantsApi.mode.All;
this.VA_REFERENCEVALEEE_875778.label = cobis.translate("ASSTS.LBL_ASSTS_VALORREEA_62571");
this.VA_REFERENCEVALEEE_875778.blankOption=true;
this.VA_REFERENCEVALEEE_875778.entity = "Rates";
this.VA_REFERENCEVALEEE_875778.attribute = "referenceValue";
this.VA_REFERENCEVALEEE_875778.textField = "value";
this.VA_REFERENCEVALEEE_875778.valueField = "code";
this.VA_REFERENCEVALEEE_875778.showId= true;
this.VA_REFERENCEVALEEE_875778.name="referenceValue";
this.VA_REFERENCEVALEEE_875778.id="VA_REFERENCEVALEEE_875778";
this.VA_REFERENCEVALEEE_875778.colSpan=2;
this.VA_REFERENCEVALEEE_875778.withoutLabel = false;
this.VA_REFERENCEVALEEE_875778.readOnly = ConstantsApi.mode.Query;
this.VA_REFERENCEVALEEE_875778.enabled = ConstantsApi.mode.None;
this.VA_REFERENCEVALEEE_875778.visible= ConstantsApi.mode.All;
this.VA_REFERENCEVALEEE_875778.required = true;
this.VA_REFERENCEVALEEE_875778.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_REFERENCEVALEEE_875778.messagesValidations = {
required: cobis.translate('ASSTS.MSG_ASSTS_REQUERIDO_35484')
};
this.VA_VALUEIAMTJBFHDB_811778.label = cobis.translate("ASSTS.LBL_ASSTS_VALORNPRH_26284");
this.VA_VALUEIAMTJBFHDB_811778.entity = "Rates";
this.VA_VALUEIAMTJBFHDB_811778.attribute = "value";
this.VA_VALUEIAMTJBFHDB_811778.textCase= TextCaseOptions.NONE;
this.VA_VALUEIAMTJBFHDB_811778.format= "#,######0.000000";
this.VA_VALUEIAMTJBFHDB_811778.name="value";
this.VA_VALUEIAMTJBFHDB_811778.id="VA_VALUEIAMTJBFHDB_811778";
this.VA_VALUEIAMTJBFHDB_811778.colSpan=1;
this.VA_VALUEIAMTJBFHDB_811778.withoutLabel = false;
this.VA_VALUEIAMTJBFHDB_811778.readOnly = ConstantsApi.mode.Query;
this.VA_VALUEIAMTJBFHDB_811778.enabled = ConstantsApi.mode.None;
this.VA_VALUEIAMTJBFHDB_811778.visible= ConstantsApi.mode.All;
this.VA_TYPEPOINTSQGJRC_416778.label = cobis.translate("ASSTS.LBL_ASSTS_TIPOPUNOS_62324");
this.VA_TYPEPOINTSQGJRC_416778.blankOption=true;
this.VA_TYPEPOINTSQGJRC_416778.entity = "Rates";
this.VA_TYPEPOINTSQGJRC_416778.attribute = "typePoints";
this.VA_TYPEPOINTSQGJRC_416778.textField = "value";
this.VA_TYPEPOINTSQGJRC_416778.valueField = "code";
this.VA_TYPEPOINTSQGJRC_416778.showId= true;
this.VA_TYPEPOINTSQGJRC_416778.name="typePoints";
this.VA_TYPEPOINTSQGJRC_416778.id="VA_TYPEPOINTSQGJRC_416778";
this.VA_TYPEPOINTSQGJRC_416778.colSpan=1;
this.VA_TYPEPOINTSQGJRC_416778.withoutLabel = false;
this.VA_TYPEPOINTSQGJRC_416778.readOnly = ConstantsApi.mode.Query;
this.VA_TYPEPOINTSQGJRC_416778.enabled = ConstantsApi.mode.None;
this.VA_TYPEPOINTSQGJRC_416778.visible= ConstantsApi.mode.All;
this.VA_TYPEPOINTSQGJRC_416778.required = true;
this.VA_TYPEPOINTSQGJRC_416778.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_TYPEPOINTSQGJRC_416778.messagesValidations = {
required: cobis.translate('ASSTS.MSG_ASSTS_REQUERIDO_35484')
};
this.VA_NUMBERDECIMALSL_248778.label = cobis.translate("ASSTS.LBL_ASSTS_NMDECIMLA_32351");
this.VA_NUMBERDECIMALSL_248778.entity = "Rates";
this.VA_NUMBERDECIMALSL_248778.attribute = "numberDecimals";
this.VA_NUMBERDECIMALSL_248778.textField = "value";
this.VA_NUMBERDECIMALSL_248778.valueField = "code";
this.VA_NUMBERDECIMALSL_248778.name="numberDecimals";
this.VA_NUMBERDECIMALSL_248778.id="VA_NUMBERDECIMALSL_248778";
this.VA_NUMBERDECIMALSL_248778.colSpan=1;
this.VA_NUMBERDECIMALSL_248778.withoutLabel = false;
this.VA_NUMBERDECIMALSL_248778.readOnly = ConstantsApi.mode.Query;
this.VA_NUMBERDECIMALSL_248778.enabled = ConstantsApi.mode.None;
this.VA_NUMBERDECIMALSL_248778.visible= ConstantsApi.mode.All;
this.VA_NUMBERDECIMALSL_248778.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.CompareValue,CustomValidators.fixedCompare('0',CustomValidatorOperator.GREATER_THAN)]
]);
this.VA_NUMBERDECIMALSL_248778.messagesValidations = {
fixedCompare: cobis.translate('ASSTS.MSG_ASSTS_VALORFURN_83073')
};
this.Spacer2425.id = "Spacer2425";
this.Spacer2425.name = "Spacer2425";
this.Spacer2425.colSpan = 1;
this.Spacer2425.visible= ConstantsApi.mode.All;
this.VA_PORTFOLIOCLASSS_404778.label = cobis.translate("ASSTS.LBL_ASSTS_SECTORYDN_72932");
this.VA_PORTFOLIOCLASSS_404778.blankOption=true;
this.VA_PORTFOLIOCLASSS_404778.entity = "Rates";
this.VA_PORTFOLIOCLASSS_404778.attribute = "portfolioClass";
this.VA_PORTFOLIOCLASSS_404778.textField = "value";
this.VA_PORTFOLIOCLASSS_404778.valueField = "code";
this.VA_PORTFOLIOCLASSS_404778.showId= true;
this.VA_PORTFOLIOCLASSS_404778.name="portfolioClass";
this.VA_PORTFOLIOCLASSS_404778.id="VA_PORTFOLIOCLASSS_404778";
this.VA_PORTFOLIOCLASSS_404778.colSpan=3;
this.VA_PORTFOLIOCLASSS_404778.withoutLabel = false;
this.VA_PORTFOLIOCLASSS_404778.readOnly = ConstantsApi.mode.Query;
this.VA_PORTFOLIOCLASSS_404778.enabled = ConstantsApi.mode.All;
this.VA_PORTFOLIOCLASSS_404778.visible= ConstantsApi.mode.All;
this.VA_PORTFOLIOCLASSS_404778.required = true;
this.VA_PORTFOLIOCLASSS_404778.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_PORTFOLIOCLASSS_404778.messagesValidations = {
required: cobis.translate('ASSTS.MSG_ASSTS_REQUERIDO_35484')
};
this.VA_VASIMPLELABELLL_678778.id = "VA_VASIMPLELABELLL_678778";
this.VA_VASIMPLELABELLL_678778.name = "VA_VASIMPLELABELLL_678778";
this.VA_VASIMPLELABELLL_678778.label = cobis.translate("ASSTS.LBL_ASSTS_VALORDEOE_50169");
this.VA_VASIMPLELABELLL_678778.colSpan = 3;
this.VA_VASIMPLELABELLL_678778.withoutLabel = false;
this.VA_VASIMPLELABELLL_678778.enabled = ConstantsApi.mode.None;
this.VA_VASIMPLELABELLL_678778.visible= ConstantsApi.mode.All;
this.VA_SIGNMINPDDMQZST_831778.label = cobis.translate("ASSTS.LBL_ASSTS_SIGNORIHO_57042");
this.VA_SIGNMINPDDMQZST_831778.entity = "Rates";
this.VA_SIGNMINPDDMQZST_831778.attribute = "signDefault";
this.VA_SIGNMINPDDMQZST_831778.textField = "value";
this.VA_SIGNMINPDDMQZST_831778.valueField = "code";
this.VA_SIGNMINPDDMQZST_831778.name="signDefault";
this.VA_SIGNMINPDDMQZST_831778.id="VA_SIGNMINPDDMQZST_831778";
this.VA_SIGNMINPDDMQZST_831778.colSpan=1;
this.VA_SIGNMINPDDMQZST_831778.withoutLabel = false;
this.VA_SIGNMINPDDMQZST_831778.readOnly = ConstantsApi.mode.Query;
this.VA_SIGNMINPDDMQZST_831778.enabled = ConstantsApi.mode.None;
this.VA_SIGNMINPDDMQZST_831778.visible= ConstantsApi.mode.All;
this.VA_VALUEDEAFULTCGE_547778.label = cobis.translate("ASSTS.LBL_ASSTS_VALORNPRH_26284");
this.VA_VALUEDEAFULTCGE_547778.entity = "Rates";
this.VA_VALUEDEAFULTCGE_547778.attribute = "valueDeafult";
this.VA_VALUEDEAFULTCGE_547778.textCase= TextCaseOptions.NONE;
this.VA_VALUEDEAFULTCGE_547778.format= "#,######0.000000";
this.VA_VALUEDEAFULTCGE_547778.name="valueDeafult";
this.VA_VALUEDEAFULTCGE_547778.id="VA_VALUEDEAFULTCGE_547778";
this.VA_VALUEDEAFULTCGE_547778.colSpan=2;
this.VA_VALUEDEAFULTCGE_547778.withoutLabel = false;
this.VA_VALUEDEAFULTCGE_547778.readOnly = ConstantsApi.mode.Query;
this.VA_VALUEDEAFULTCGE_547778.enabled = ConstantsApi.mode.All;
this.VA_VALUEDEAFULTCGE_547778.visible= ConstantsApi.mode.All;
this.Spacer2265.id = "Spacer2265";
this.Spacer2265.name = "Spacer2265";
this.Spacer2265.colSpan = 1;
this.Spacer2265.visible= ConstantsApi.mode.All;
this.VA_LOCKEDDEFAULTTT_935778.entity = "Rates";
this.VA_LOCKEDDEFAULTTT_935778.attribute = "lockedDefault";
this.VA_LOCKEDDEFAULTTT_935778.textCase= TextCaseOptions.NONE;
this.VA_LOCKEDDEFAULTTT_935778.format= "#,######0.000000";
this.VA_LOCKEDDEFAULTTT_935778.name="lockedDefault";
this.VA_LOCKEDDEFAULTTT_935778.id="VA_LOCKEDDEFAULTTT_935778";
this.VA_LOCKEDDEFAULTTT_935778.colSpan=2;
this.VA_LOCKEDDEFAULTTT_935778.withoutLabel = true;
this.VA_LOCKEDDEFAULTTT_935778.readOnly = ConstantsApi.mode.Query;
this.VA_LOCKEDDEFAULTTT_935778.enabled = ConstantsApi.mode.None;
this.VA_LOCKEDDEFAULTTT_935778.visible= ConstantsApi.mode.All;
this.VA_VASIMPLELABELLL_567778.id = "VA_VASIMPLELABELLL_567778";
this.VA_VASIMPLELABELLL_567778.name = "VA_VASIMPLELABELLL_567778";
this.VA_VASIMPLELABELLL_567778.label = cobis.translate("ASSTS.LBL_ASSTS_MNIMOQXTO_64583");
this.VA_VASIMPLELABELLL_567778.colSpan = 3;
this.VA_VASIMPLELABELLL_567778.withoutLabel = false;
this.VA_VASIMPLELABELLL_567778.enabled = ConstantsApi.mode.None;
this.VA_VASIMPLELABELLL_567778.visible= ConstantsApi.mode.All;
this.VA_SIGNMINKUSGFZGN_277778.label = cobis.translate("ASSTS.LBL_ASSTS_SIGNORIHO_57042");
this.VA_SIGNMINKUSGFZGN_277778.entity = "Rates";
this.VA_SIGNMINKUSGFZGN_277778.attribute = "signMin";
this.VA_SIGNMINKUSGFZGN_277778.textField = "value";
this.VA_SIGNMINKUSGFZGN_277778.valueField = "code";
this.VA_SIGNMINKUSGFZGN_277778.name="signMin";
this.VA_SIGNMINKUSGFZGN_277778.id="VA_SIGNMINKUSGFZGN_277778";
this.VA_SIGNMINKUSGFZGN_277778.colSpan=1;
this.VA_SIGNMINKUSGFZGN_277778.withoutLabel = false;
this.VA_SIGNMINKUSGFZGN_277778.readOnly = ConstantsApi.mode.Query;
this.VA_SIGNMINKUSGFZGN_277778.enabled = ConstantsApi.mode.None;
this.VA_SIGNMINKUSGFZGN_277778.visible= ConstantsApi.mode.All;
this.VA_VALUEMINGCHKTLJ_996778.label = cobis.translate("ASSTS.LBL_ASSTS_VALORNPRH_26284");
this.VA_VALUEMINGCHKTLJ_996778.entity = "Rates";
this.VA_VALUEMINGCHKTLJ_996778.attribute = "valueMin";
this.VA_VALUEMINGCHKTLJ_996778.textCase= TextCaseOptions.NONE;
this.VA_VALUEMINGCHKTLJ_996778.format= "#,######0.000000";
this.VA_VALUEMINGCHKTLJ_996778.name="valueMin";
this.VA_VALUEMINGCHKTLJ_996778.id="VA_VALUEMINGCHKTLJ_996778";
this.VA_VALUEMINGCHKTLJ_996778.colSpan=2;
this.VA_VALUEMINGCHKTLJ_996778.withoutLabel = false;
this.VA_VALUEMINGCHKTLJ_996778.readOnly = ConstantsApi.mode.Query;
this.VA_VALUEMINGCHKTLJ_996778.enabled = ConstantsApi.mode.None;
this.VA_VALUEMINGCHKTLJ_996778.visible= ConstantsApi.mode.All;
this.Spacer2928.id = "Spacer2928";
this.Spacer2928.name = "Spacer2928";
this.Spacer2928.colSpan = 1;
this.Spacer2928.visible= ConstantsApi.mode.All;
this.VA_LOCKEDMINOJZSTC_260778.entity = "Rates";
this.VA_LOCKEDMINOJZSTC_260778.attribute = "lockedMin";
this.VA_LOCKEDMINOJZSTC_260778.textCase= TextCaseOptions.NONE;
this.VA_LOCKEDMINOJZSTC_260778.format= "#,######0.000000";
this.VA_LOCKEDMINOJZSTC_260778.name="lockedMin";
this.VA_LOCKEDMINOJZSTC_260778.id="VA_LOCKEDMINOJZSTC_260778";
this.VA_LOCKEDMINOJZSTC_260778.colSpan=2;
this.VA_LOCKEDMINOJZSTC_260778.withoutLabel = true;
this.VA_LOCKEDMINOJZSTC_260778.readOnly = ConstantsApi.mode.Query;
this.VA_LOCKEDMINOJZSTC_260778.enabled = ConstantsApi.mode.None;
this.VA_LOCKEDMINOJZSTC_260778.visible= ConstantsApi.mode.All;
this.VA_VASIMPLELABELLL_236778.id = "VA_VASIMPLELABELLL_236778";
this.VA_VASIMPLELABELLL_236778.name = "VA_VASIMPLELABELLL_236778";
this.VA_VASIMPLELABELLL_236778.label = cobis.translate("ASSTS.LBL_ASSTS_MXIMOWBZU_39119");
this.VA_VASIMPLELABELLL_236778.colSpan = 3;
this.VA_VASIMPLELABELLL_236778.withoutLabel = false;
this.VA_VASIMPLELABELLL_236778.enabled = ConstantsApi.mode.None;
this.VA_VASIMPLELABELLL_236778.visible= ConstantsApi.mode.All;
this.VA_SIGNMAXCQWMGYQB_195778.label = cobis.translate("ASSTS.LBL_ASSTS_SIGNORIHO_57042");
this.VA_SIGNMAXCQWMGYQB_195778.entity = "Rates";
this.VA_SIGNMAXCQWMGYQB_195778.attribute = "signMax";
this.VA_SIGNMAXCQWMGYQB_195778.textField = "value";
this.VA_SIGNMAXCQWMGYQB_195778.valueField = "code";
this.VA_SIGNMAXCQWMGYQB_195778.name="signMax";
this.VA_SIGNMAXCQWMGYQB_195778.id="VA_SIGNMAXCQWMGYQB_195778";
this.VA_SIGNMAXCQWMGYQB_195778.colSpan=1;
this.VA_SIGNMAXCQWMGYQB_195778.withoutLabel = false;
this.VA_SIGNMAXCQWMGYQB_195778.readOnly = ConstantsApi.mode.Query;
this.VA_SIGNMAXCQWMGYQB_195778.enabled = ConstantsApi.mode.None;
this.VA_SIGNMAXCQWMGYQB_195778.visible= ConstantsApi.mode.All;
this.VA_VALUEMAXAXNIZZF_909778.label = cobis.translate("ASSTS.LBL_ASSTS_VALORNPRH_26284");
this.VA_VALUEMAXAXNIZZF_909778.entity = "Rates";
this.VA_VALUEMAXAXNIZZF_909778.attribute = "valueMax";
this.VA_VALUEMAXAXNIZZF_909778.textCase= TextCaseOptions.NONE;
this.VA_VALUEMAXAXNIZZF_909778.format= "#,######0.000000";
this.VA_VALUEMAXAXNIZZF_909778.name="valueMax";
this.VA_VALUEMAXAXNIZZF_909778.id="VA_VALUEMAXAXNIZZF_909778";
this.VA_VALUEMAXAXNIZZF_909778.colSpan=2;
this.VA_VALUEMAXAXNIZZF_909778.withoutLabel = false;
this.VA_VALUEMAXAXNIZZF_909778.readOnly = ConstantsApi.mode.Query;
this.VA_VALUEMAXAXNIZZF_909778.enabled = ConstantsApi.mode.None;
this.VA_VALUEMAXAXNIZZF_909778.visible= ConstantsApi.mode.All;
this.Spacer2747.id = "Spacer2747";
this.Spacer2747.name = "Spacer2747";
this.Spacer2747.colSpan = 1;
this.Spacer2747.visible= ConstantsApi.mode.All;
this.VA_LOCKEDMAXEHQUHM_227778.entity = "Rates";
this.VA_LOCKEDMAXEHQUHM_227778.attribute = "lockedMax";
this.VA_LOCKEDMAXEHQUHM_227778.textCase= TextCaseOptions.NONE;
this.VA_LOCKEDMAXEHQUHM_227778.format= "#,######0.000000";
this.VA_LOCKEDMAXEHQUHM_227778.name="lockedMax";
this.VA_LOCKEDMAXEHQUHM_227778.id="VA_LOCKEDMAXEHQUHM_227778";
this.VA_LOCKEDMAXEHQUHM_227778.colSpan=2;
this.VA_LOCKEDMAXEHQUHM_227778.withoutLabel = true;
this.VA_LOCKEDMAXEHQUHM_227778.readOnly = ConstantsApi.mode.Query;
this.VA_LOCKEDMAXEHQUHM_227778.enabled = ConstantsApi.mode.None;
this.VA_LOCKEDMAXEHQUHM_227778.visible= ConstantsApi.mode.All;
this.T_RATESMODALKUB_953 = this.formBuilder.group({
Rates: this.formBuilder.group({
referenceValue:[{value: null, disabled: !this.VA_REFERENCEVALEEE_875778.visible},CobisDesignerUtil.getValidationFunctions(this.VA_REFERENCEVALEEE_875778.validationFunctions!)],
value:[{value: null, disabled: !this.VA_VALUEIAMTJBFHDB_811778.visible},CobisDesignerUtil.getValidationFunctions(this.VA_VALUEIAMTJBFHDB_811778.validationFunctions!)],
typePoints:[{value: null, disabled: !this.VA_TYPEPOINTSQGJRC_416778.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TYPEPOINTSQGJRC_416778.validationFunctions!)],
numberDecimals:[{value: null, disabled: !this.VA_NUMBERDECIMALSL_248778.visible},CobisDesignerUtil.getValidationFunctions(this.VA_NUMBERDECIMALSL_248778.validationFunctions!)],
portfolioClass:[{value: null, disabled: !this.VA_PORTFOLIOCLASSS_404778.visible},CobisDesignerUtil.getValidationFunctions(this.VA_PORTFOLIOCLASSS_404778.validationFunctions!)],
valueDeafult:[null],
lockedMin:[null],
rateType:[null],
valueMax:[null],
valueMin:[null],
lockedDefault:[null],
clase:[null],
lockedMax:[null],
signDefault:[null],
signMax:[null],
signMin:[null],
}
),
});
}
}