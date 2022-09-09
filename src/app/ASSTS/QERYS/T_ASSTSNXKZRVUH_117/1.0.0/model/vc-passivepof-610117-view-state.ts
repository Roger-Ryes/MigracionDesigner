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
public T_ASSTSNXKZRVUH_117!:FormGroup;
public VC_PASSIVEPOF_610117:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_PASSIVEIOR_919625 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VA_DEBTTYPEAZGDJQE_285625: CobisDropDownListModel = new CobisDropDownListModel();
public VA_AUTHDATETEAHWOU_492625: CobisDateFieldModel = new CobisDateFieldModel();
public VA_AUTHNUMBERNNCHT_723625: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_FACILITYNUMBRER_994625: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_CONTRACTNUMBRRE_654625: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_SUBFINANCINGYPV_705625: CobisDropDownListModel = new CobisDropDownListModel();
public VA_CREDITORTYPEWDN_671625: CobisDropDownListModel = new CobisDropDownListModel();
public VA_TERMTYPEVASKBGR_425625: CobisDropDownListModel = new CobisDropDownListModel();
public VA_FINANCINGTERMMM_399625: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_FINANCINGLINEEE_794625: CobisTextInputBoxModel = new CobisTextInputBoxModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_PASSIVEPOF_610117.id="VC_PASSIVEPOF_610117";
this.VC_PASSIVEPOF_610117.name="PassivePortfolio";
this.VC_PASSIVEPOF_610117.colSpan=1;
this.VC_PASSIVEPOF_610117.columns=1;
this.VC_PASSIVEPOF_610117.enabled=ConstantsApi.mode.All;
this.G_PASSIVEIOR_919625.id="G_PASSIVEIOR_919625";
this.G_PASSIVEIOR_919625.name="Group1499";
this.G_PASSIVEIOR_919625.columns=3;
this.G_PASSIVEIOR_919625.labelOrientation="Top";
this.G_PASSIVEIOR_919625.colSpan=1;
this.G_PASSIVEIOR_919625.enabled=ConstantsApi.mode.All;
this.G_PASSIVEIOR_919625.visible=ConstantsApi.mode.All;
this.G_PASSIVEIOR_919625.attList = ["debtType","authDate","authNumber","facilityNumber","contractNumber","subFinancing","creditorType","termType","financingTerm","financingLine"];
this.VA_DEBTTYPEAZGDJQE_285625.label = cobis.translate("ASSTS.LBL_ASSTS_TIPODEUAA_82972");
this.VA_DEBTTYPEAZGDJQE_285625.entity = "DataPassivePortfolio";
this.VA_DEBTTYPEAZGDJQE_285625.attribute = "debtType";
this.VA_DEBTTYPEAZGDJQE_285625.textField = "value";
this.VA_DEBTTYPEAZGDJQE_285625.valueField = "code";
this.VA_DEBTTYPEAZGDJQE_285625.name="debtType";
this.VA_DEBTTYPEAZGDJQE_285625.id="VA_DEBTTYPEAZGDJQE_285625";
this.VA_DEBTTYPEAZGDJQE_285625.colSpan=1;
this.VA_DEBTTYPEAZGDJQE_285625.withoutLabel = false;
this.VA_DEBTTYPEAZGDJQE_285625.readOnly = ConstantsApi.mode.Query;
this.VA_DEBTTYPEAZGDJQE_285625.enabled = ConstantsApi.mode.None;
this.VA_DEBTTYPEAZGDJQE_285625.visible= ConstantsApi.mode.All;
this.VA_AUTHDATETEAHWOU_492625.label = cobis.translate("ASSTS.LBL_ASSTS_FECHAAUIR_69328");
this.VA_AUTHDATETEAHWOU_492625.entity = "DataPassivePortfolio";
this.VA_AUTHDATETEAHWOU_492625.attribute = "authDate";
this.VA_AUTHDATETEAHWOU_492625.name="authDate";
this.VA_AUTHDATETEAHWOU_492625.id="VA_AUTHDATETEAHWOU_492625";
this.VA_AUTHDATETEAHWOU_492625.colSpan=1;
this.VA_AUTHDATETEAHWOU_492625.withoutLabel = false;
this.VA_AUTHDATETEAHWOU_492625.readOnly = ConstantsApi.mode.Query;
this.VA_AUTHDATETEAHWOU_492625.enabled = ConstantsApi.mode.None;
this.VA_AUTHDATETEAHWOU_492625.visible= ConstantsApi.mode.All;
this.VA_AUTHNUMBERNNCHT_723625.label = cobis.translate("ASSTS.LBL_ASSTS_NOAUTORSC_90429");
this.VA_AUTHNUMBERNNCHT_723625.entity = "DataPassivePortfolio";
this.VA_AUTHNUMBERNNCHT_723625.attribute = "authNumber";
this.VA_AUTHNUMBERNNCHT_723625.textCase= TextCaseOptions.NONE;
this.VA_AUTHNUMBERNNCHT_723625.name="authNumber";
this.VA_AUTHNUMBERNNCHT_723625.id="VA_AUTHNUMBERNNCHT_723625";
this.VA_AUTHNUMBERNNCHT_723625.colSpan=1;
this.VA_AUTHNUMBERNNCHT_723625.withoutLabel = false;
this.VA_AUTHNUMBERNNCHT_723625.readOnly = ConstantsApi.mode.Query;
this.VA_AUTHNUMBERNNCHT_723625.enabled = ConstantsApi.mode.None;
this.VA_AUTHNUMBERNNCHT_723625.visible= ConstantsApi.mode.All;
this.VA_FACILITYNUMBRER_994625.label = cobis.translate("ASSTS.LBL_ASSTS_FACILITER_93212");
this.VA_FACILITYNUMBRER_994625.entity = "DataPassivePortfolio";
this.VA_FACILITYNUMBRER_994625.attribute = "facilityNumber";
this.VA_FACILITYNUMBRER_994625.textCase= TextCaseOptions.NONE;
this.VA_FACILITYNUMBRER_994625.name="facilityNumber";
this.VA_FACILITYNUMBRER_994625.id="VA_FACILITYNUMBRER_994625";
this.VA_FACILITYNUMBRER_994625.colSpan=1;
this.VA_FACILITYNUMBRER_994625.withoutLabel = false;
this.VA_FACILITYNUMBRER_994625.readOnly = ConstantsApi.mode.Query;
this.VA_FACILITYNUMBRER_994625.enabled = ConstantsApi.mode.None;
this.VA_FACILITYNUMBRER_994625.visible= ConstantsApi.mode.None;
this.VA_CONTRACTNUMBRRE_654625.label = cobis.translate("ASSTS.LBL_ASSTS_NMEROCOON_79264");
this.VA_CONTRACTNUMBRRE_654625.entity = "DataPassivePortfolio";
this.VA_CONTRACTNUMBRRE_654625.attribute = "contractNumber";
this.VA_CONTRACTNUMBRRE_654625.textCase= TextCaseOptions.NONE;
this.VA_CONTRACTNUMBRRE_654625.name="contractNumber";
this.VA_CONTRACTNUMBRRE_654625.id="VA_CONTRACTNUMBRRE_654625";
this.VA_CONTRACTNUMBRRE_654625.colSpan=1;
this.VA_CONTRACTNUMBRRE_654625.withoutLabel = false;
this.VA_CONTRACTNUMBRRE_654625.readOnly = ConstantsApi.mode.Query;
this.VA_CONTRACTNUMBRRE_654625.enabled = ConstantsApi.mode.None;
this.VA_CONTRACTNUMBRRE_654625.visible= ConstantsApi.mode.All;
this.VA_SUBFINANCINGYPV_705625.label = cobis.translate("ASSTS.LBL_ASSTS_CAUSAFITN_32147");
this.VA_SUBFINANCINGYPV_705625.entity = "DataPassivePortfolio";
this.VA_SUBFINANCINGYPV_705625.attribute = "subFinancing";
this.VA_SUBFINANCINGYPV_705625.textField = "value";
this.VA_SUBFINANCINGYPV_705625.valueField = "code";
this.VA_SUBFINANCINGYPV_705625.name="subFinancing";
this.VA_SUBFINANCINGYPV_705625.id="VA_SUBFINANCINGYPV_705625";
this.VA_SUBFINANCINGYPV_705625.colSpan=1;
this.VA_SUBFINANCINGYPV_705625.withoutLabel = false;
this.VA_SUBFINANCINGYPV_705625.readOnly = ConstantsApi.mode.Query;
this.VA_SUBFINANCINGYPV_705625.enabled = ConstantsApi.mode.None;
this.VA_SUBFINANCINGYPV_705625.visible= ConstantsApi.mode.All;
this.VA_CREDITORTYPEWDN_671625.label = cobis.translate("ASSTS.LBL_ASSTS_TIPOACRED_91137");
this.VA_CREDITORTYPEWDN_671625.entity = "DataPassivePortfolio";
this.VA_CREDITORTYPEWDN_671625.attribute = "creditorType";
this.VA_CREDITORTYPEWDN_671625.textField = "value";
this.VA_CREDITORTYPEWDN_671625.valueField = "code";
this.VA_CREDITORTYPEWDN_671625.name="creditorType";
this.VA_CREDITORTYPEWDN_671625.id="VA_CREDITORTYPEWDN_671625";
this.VA_CREDITORTYPEWDN_671625.colSpan=1;
this.VA_CREDITORTYPEWDN_671625.withoutLabel = false;
this.VA_CREDITORTYPEWDN_671625.readOnly = ConstantsApi.mode.Query;
this.VA_CREDITORTYPEWDN_671625.enabled = ConstantsApi.mode.None;
this.VA_CREDITORTYPEWDN_671625.visible= ConstantsApi.mode.All;
this.VA_TERMTYPEVASKBGR_425625.label = cobis.translate("ASSTS.LBL_ASSTS_TIPOPLAZZ_65289");
this.VA_TERMTYPEVASKBGR_425625.entity = "DataPassivePortfolio";
this.VA_TERMTYPEVASKBGR_425625.attribute = "termType";
this.VA_TERMTYPEVASKBGR_425625.textField = "value";
this.VA_TERMTYPEVASKBGR_425625.valueField = "code";
this.VA_TERMTYPEVASKBGR_425625.name="termType";
this.VA_TERMTYPEVASKBGR_425625.id="VA_TERMTYPEVASKBGR_425625";
this.VA_TERMTYPEVASKBGR_425625.colSpan=1;
this.VA_TERMTYPEVASKBGR_425625.withoutLabel = false;
this.VA_TERMTYPEVASKBGR_425625.readOnly = ConstantsApi.mode.Query;
this.VA_TERMTYPEVASKBGR_425625.enabled = ConstantsApi.mode.None;
this.VA_TERMTYPEVASKBGR_425625.visible= ConstantsApi.mode.All;
this.VA_FINANCINGTERMMM_399625.label = cobis.translate("ASSTS.LBL_ASSTS_PLAZOYJVK_49555");
this.VA_FINANCINGTERMMM_399625.entity = "DataPassivePortfolio";
this.VA_FINANCINGTERMMM_399625.attribute = "financingTerm";
this.VA_FINANCINGTERMMM_399625.textCase= TextCaseOptions.NONE;
this.VA_FINANCINGTERMMM_399625.format= "n0";
this.VA_FINANCINGTERMMM_399625.name="financingTerm";
this.VA_FINANCINGTERMMM_399625.id="VA_FINANCINGTERMMM_399625";
this.VA_FINANCINGTERMMM_399625.colSpan=1;
this.VA_FINANCINGTERMMM_399625.withoutLabel = false;
this.VA_FINANCINGTERMMM_399625.readOnly = ConstantsApi.mode.Query;
this.VA_FINANCINGTERMMM_399625.enabled = ConstantsApi.mode.None;
this.VA_FINANCINGTERMMM_399625.visible= ConstantsApi.mode.All;
this.VA_FINANCINGLINEEE_794625.label = cobis.translate("ASSTS.LBL_ASSTS_LNEAFINON_91280");
this.VA_FINANCINGLINEEE_794625.entity = "DataPassivePortfolio";
this.VA_FINANCINGLINEEE_794625.attribute = "financingLine";
this.VA_FINANCINGLINEEE_794625.textCase= TextCaseOptions.NONE;
this.VA_FINANCINGLINEEE_794625.name="financingLine";
this.VA_FINANCINGLINEEE_794625.id="VA_FINANCINGLINEEE_794625";
this.VA_FINANCINGLINEEE_794625.colSpan=1;
this.VA_FINANCINGLINEEE_794625.withoutLabel = false;
this.VA_FINANCINGLINEEE_794625.readOnly = ConstantsApi.mode.Query;
this.VA_FINANCINGLINEEE_794625.enabled = ConstantsApi.mode.None;
this.VA_FINANCINGLINEEE_794625.visible= ConstantsApi.mode.All;
this.T_ASSTSNXKZRVUH_117 = this.formBuilder.group({
DataPassivePortfolio: this.formBuilder.group({
debtType:[{value: null, disabled: !this.VA_DEBTTYPEAZGDJQE_285625.visible},CobisDesignerUtil.getValidationFunctions(this.VA_DEBTTYPEAZGDJQE_285625.validationFunctions!)],
authDate:[{value: null, disabled: !this.VA_AUTHDATETEAHWOU_492625.visible},CobisDesignerUtil.getValidationFunctions(this.VA_AUTHDATETEAHWOU_492625.validationFunctions!)],
authNumber:[{value: null, disabled: !this.VA_AUTHNUMBERNNCHT_723625.visible},CobisDesignerUtil.getValidationFunctions(this.VA_AUTHNUMBERNNCHT_723625.validationFunctions!)],
facilityNumber:[{value: null, disabled: !this.VA_FACILITYNUMBRER_994625.visible},CobisDesignerUtil.getValidationFunctions(this.VA_FACILITYNUMBRER_994625.validationFunctions!)],
contractNumber:[{value: null, disabled: !this.VA_CONTRACTNUMBRRE_654625.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CONTRACTNUMBRRE_654625.validationFunctions!)],
subFinancing:[{value: null, disabled: !this.VA_SUBFINANCINGYPV_705625.visible},CobisDesignerUtil.getValidationFunctions(this.VA_SUBFINANCINGYPV_705625.validationFunctions!)],
creditorType:[{value: null, disabled: !this.VA_CREDITORTYPEWDN_671625.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CREDITORTYPEWDN_671625.validationFunctions!)],
termType:[{value: null, disabled: !this.VA_TERMTYPEVASKBGR_425625.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TERMTYPEVASKBGR_425625.validationFunctions!)],
financingTerm:[{value: null, disabled: !this.VA_FINANCINGTERMMM_399625.visible},CobisDesignerUtil.getValidationFunctions(this.VA_FINANCINGTERMMM_399625.validationFunctions!)],
financingLine:[{value: null, disabled: !this.VA_FINANCINGLINEEE_794625.visible},CobisDesignerUtil.getValidationFunctions(this.VA_FINANCINGLINEEE_794625.validationFunctions!)],
}
),
});
}
}