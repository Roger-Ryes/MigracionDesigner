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
public T_LNSPRXLZJGUMH_556!:FormGroup;
public VC_LOANLINENS_928556:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANLINEAS_154412 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VA_NATURALEZAOPFBV_807412: CobisRadioButtonListModel = new CobisRadioButtonListModel();
public VA_TRAMITNUMBEROVG_770412: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_SECUENCIALIFYOH_707412: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_CUPOMXKFKFAVAGK_116412: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_ESTADOOBXCIHITT_296412: CobisDropDownListModel = new CobisDropDownListModel();
public VA_OFICINASKKBEPJX_241412: CobisDropDownListModel = new CobisDropDownListModel();
public VA_OFFICIALWHTPNAJ_913412: CobisDropDownListModel = new CobisDropDownListModel();
public VA_UBICATIONVMLBHG_987412: CobisDropDownListModel = new CobisDropDownListModel();
public VA_CLIENTENOMBREEE_802412: CobisTextInputButtonModel = new CobisTextInputButtonModel();
public VA_MONTODKGETQZTDK_858412: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_MONEDADESCEXVAJ_622412: CobisDropDownListModel = new CobisDropDownListModel();
public VA_FECHAAPROBACIOO_814412: CobisDateFieldModel = new CobisDateFieldModel();
public VA_NUMDIASKUFOWPOC_532412: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_FECHAVENCIMINOT_231412: CobisDateFieldModel = new CobisDateFieldModel();
public VA_ROTATIVAEYDZXHU_984412: CobisDropDownListModel = new CobisDropDownListModel();
public VA_SECTORZLUFUQKJE_186412: CobisDropDownListModel = new CobisDropDownListModel();
public VA_MONTOUTILIZADDO_817412: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_AVAILABLEPJSKML_987412: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_OBSERVATIONSBHE_719412: CobisTextAreaModel = new CobisTextAreaModel();
public Spacer2523: CobisSpacerModel = new CobisSpacerModel();
public VA_VABUTTONBWOPFCN_144412: CobisButtonModel = new CobisButtonModel();
public Spacer1961: CobisSpacerModel = new CobisSpacerModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_LOANLINENS_928556.id="VC_LOANLINENS_928556";
this.VC_LOANLINENS_928556.name="LoanLinesCreation";
this.VC_LOANLINENS_928556.colSpan=1;
this.VC_LOANLINENS_928556.columns=1;
this.VC_LOANLINENS_928556.enabled=ConstantsApi.mode.All;
this.G_LOANLINEAS_154412.id="G_LOANLINEAS_154412";
this.G_LOANLINEAS_154412.name="Group1838";
this.G_LOANLINEAS_154412.columns=4;
this.G_LOANLINEAS_154412.labelOrientation="Top";
this.G_LOANLINEAS_154412.colSpan=1;
this.G_LOANLINEAS_154412.enabled=ConstantsApi.mode.All;
this.G_LOANLINEAS_154412.visible=ConstantsApi.mode.All;
this.G_LOANLINEAS_154412.attList = ["nature","tramitNumber","sequential","lineCode","estado","office","official","ubication","customerName","amount","coin","startDate","daysNumber","dueDate","rotary","sector","used","available","observations"];
this.VA_NATURALEZAOPFBV_807412.id = "VA_NATURALEZAOPFBV_807412";
this.VA_NATURALEZAOPFBV_807412.name = "nature";
this.VA_NATURALEZAOPFBV_807412.attribute = "nature";
this.VA_NATURALEZAOPFBV_807412.label = cobis.translate("LNSPR.LBL_LNSPR_NATURALZA_90237");
this.VA_NATURALEZAOPFBV_807412.colSpan = 1;
this.VA_NATURALEZAOPFBV_807412.withoutLabel = false;
this.VA_NATURALEZAOPFBV_807412.readOnly = ConstantsApi.mode.Query;
this.VA_NATURALEZAOPFBV_807412.entity = "LoanLinesCreation";
this.VA_NATURALEZAOPFBV_807412.enabled = ConstantsApi.mode.Insert;
this.VA_NATURALEZAOPFBV_807412.visible= ConstantsApi.mode.All;
this.VA_NATURALEZAOPFBV_807412.textField = "value";
this.VA_NATURALEZAOPFBV_807412.valueField = "code";
this.VA_NATURALEZAOPFBV_807412.required = true;
this.VA_NATURALEZAOPFBV_807412.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_NATURALEZAOPFBV_807412.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LOANS_REQUERIOD_32696')
};
this.VA_TRAMITNUMBEROVG_770412.label = cobis.translate("LNSPR.LBL_LNSPR_NMEROTRIM_88711");
this.VA_TRAMITNUMBEROVG_770412.entity = "LoanLinesCreation";
this.VA_TRAMITNUMBEROVG_770412.attribute = "tramitNumber";
this.VA_TRAMITNUMBEROVG_770412.textCase= TextCaseOptions.NONE;
this.VA_TRAMITNUMBEROVG_770412.format= "####";
this.VA_TRAMITNUMBEROVG_770412.name="tramitNumber";
this.VA_TRAMITNUMBEROVG_770412.id="VA_TRAMITNUMBEROVG_770412";
this.VA_TRAMITNUMBEROVG_770412.colSpan=1;
this.VA_TRAMITNUMBEROVG_770412.withoutLabel = false;
this.VA_TRAMITNUMBEROVG_770412.readOnly = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_TRAMITNUMBEROVG_770412.enabled = ConstantsApi.mode.All;
this.VA_TRAMITNUMBEROVG_770412.visible= ConstantsApi.mode.All;
this.VA_SECUENCIALIFYOH_707412.label = cobis.translate("LNSPR.LBL_LNSPR_SECUENCAI_74208");
this.VA_SECUENCIALIFYOH_707412.entity = "LoanLinesCreation";
this.VA_SECUENCIALIFYOH_707412.attribute = "sequential";
this.VA_SECUENCIALIFYOH_707412.textCase= TextCaseOptions.NONE;
this.VA_SECUENCIALIFYOH_707412.format= "#";
this.VA_SECUENCIALIFYOH_707412.name="sequential";
this.VA_SECUENCIALIFYOH_707412.id="VA_SECUENCIALIFYOH_707412";
this.VA_SECUENCIALIFYOH_707412.colSpan=1;
this.VA_SECUENCIALIFYOH_707412.withoutLabel = false;
this.VA_SECUENCIALIFYOH_707412.readOnly = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_SECUENCIALIFYOH_707412.enabled = ConstantsApi.mode.All;
this.VA_SECUENCIALIFYOH_707412.visible= ConstantsApi.mode.All;
this.VA_CUPOMXKFKFAVAGK_116412.label = cobis.translate("LNSPR.LBL_LNSPR_CODLNEAKU_40615");
this.VA_CUPOMXKFKFAVAGK_116412.entity = "LoanLinesCreation";
this.VA_CUPOMXKFKFAVAGK_116412.attribute = "lineCode";
this.VA_CUPOMXKFKFAVAGK_116412.textCase= TextCaseOptions.NONE;
this.VA_CUPOMXKFKFAVAGK_116412.name="lineCode";
this.VA_CUPOMXKFKFAVAGK_116412.id="VA_CUPOMXKFKFAVAGK_116412";
this.VA_CUPOMXKFKFAVAGK_116412.colSpan=1;
this.VA_CUPOMXKFKFAVAGK_116412.withoutLabel = false;
this.VA_CUPOMXKFKFAVAGK_116412.readOnly = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_CUPOMXKFKFAVAGK_116412.enabled = ConstantsApi.mode.All;
this.VA_CUPOMXKFKFAVAGK_116412.visible= ConstantsApi.mode.All;
this.VA_ESTADOOBXCIHITT_296412.label = cobis.translate("LNSPR.LBL_LNSPR_ESTADOEAI_33340");
this.VA_ESTADOOBXCIHITT_296412.entity = "LoanLinesCreation";
this.VA_ESTADOOBXCIHITT_296412.attribute = "estado";
this.VA_ESTADOOBXCIHITT_296412.textField = "value";
this.VA_ESTADOOBXCIHITT_296412.valueField = "code";
this.VA_ESTADOOBXCIHITT_296412.showId= true;
this.VA_ESTADOOBXCIHITT_296412.name="estado";
this.VA_ESTADOOBXCIHITT_296412.id="VA_ESTADOOBXCIHITT_296412";
this.VA_ESTADOOBXCIHITT_296412.colSpan=1;
this.VA_ESTADOOBXCIHITT_296412.withoutLabel = false;
this.VA_ESTADOOBXCIHITT_296412.readOnly = ConstantsApi.mode.Query;
this.VA_ESTADOOBXCIHITT_296412.enabled = ConstantsApi.mode.Insert + ConstantsApi.mode.Update;
this.VA_ESTADOOBXCIHITT_296412.visible= ConstantsApi.mode.All;
this.VA_ESTADOOBXCIHITT_296412.required = true;
this.VA_ESTADOOBXCIHITT_296412.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_ESTADOOBXCIHITT_296412.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LOANS_REQUERIOD_32696')
};
this.VA_OFICINASKKBEPJX_241412.label = cobis.translate("LNSPR.LBL_LNSPR_OFICINAGV_33565");
this.VA_OFICINASKKBEPJX_241412.blankOption=true;
this.VA_OFICINASKKBEPJX_241412.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_OFICINASKKBEPJX_241412.entity = "LoanLinesCreation";
this.VA_OFICINASKKBEPJX_241412.attribute = "office";
this.VA_OFICINASKKBEPJX_241412.textField = "value";
this.VA_OFICINASKKBEPJX_241412.valueField = "code";
this.VA_OFICINASKKBEPJX_241412.showId= true;
this.VA_OFICINASKKBEPJX_241412.name="office";
this.VA_OFICINASKKBEPJX_241412.id="VA_OFICINASKKBEPJX_241412";
this.VA_OFICINASKKBEPJX_241412.colSpan=1;
this.VA_OFICINASKKBEPJX_241412.withoutLabel = false;
this.VA_OFICINASKKBEPJX_241412.readOnly = ConstantsApi.mode.Query;
this.VA_OFICINASKKBEPJX_241412.enabled = ConstantsApi.mode.Insert;
this.VA_OFICINASKKBEPJX_241412.visible= ConstantsApi.mode.All;
this.VA_OFICINASKKBEPJX_241412.required = true;
this.VA_OFICINASKKBEPJX_241412.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_OFICINASKKBEPJX_241412.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LOANS_REQUERIOD_32696')
};
this.VA_OFFICIALWHTPNAJ_913412.label = cobis.translate("LNSPR.LBL_LNSPR_OFICIALCI_17854");
this.VA_OFFICIALWHTPNAJ_913412.blankOption=true;
this.VA_OFFICIALWHTPNAJ_913412.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_OFFICIALWHTPNAJ_913412.entity = "LoanLinesCreation";
this.VA_OFFICIALWHTPNAJ_913412.attribute = "official";
this.VA_OFFICIALWHTPNAJ_913412.textField = "value";
this.VA_OFFICIALWHTPNAJ_913412.valueField = "code";
this.VA_OFFICIALWHTPNAJ_913412.showId= true;
this.VA_OFFICIALWHTPNAJ_913412.name="official";
this.VA_OFFICIALWHTPNAJ_913412.id="VA_OFFICIALWHTPNAJ_913412";
this.VA_OFFICIALWHTPNAJ_913412.colSpan=1;
this.VA_OFFICIALWHTPNAJ_913412.withoutLabel = false;
this.VA_OFFICIALWHTPNAJ_913412.readOnly = ConstantsApi.mode.Query;
this.VA_OFFICIALWHTPNAJ_913412.enabled = ConstantsApi.mode.Insert;
this.VA_OFFICIALWHTPNAJ_913412.visible= ConstantsApi.mode.All;
this.VA_OFFICIALWHTPNAJ_913412.required = true;
this.VA_OFFICIALWHTPNAJ_913412.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_OFFICIALWHTPNAJ_913412.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LOANS_REQUERIOD_32696')
};
this.VA_UBICATIONVMLBHG_987412.label = cobis.translate("LNSPR.LBL_LNSPR_UBICACINN_15086");
this.VA_UBICATIONVMLBHG_987412.blankOption=true;
this.VA_UBICATIONVMLBHG_987412.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_UBICATIONVMLBHG_987412.entity = "LoanLinesCreation";
this.VA_UBICATIONVMLBHG_987412.attribute = "ubication";
this.VA_UBICATIONVMLBHG_987412.textField = "value";
this.VA_UBICATIONVMLBHG_987412.valueField = "code";
this.VA_UBICATIONVMLBHG_987412.showId= true;
this.VA_UBICATIONVMLBHG_987412.name="ubication";
this.VA_UBICATIONVMLBHG_987412.id="VA_UBICATIONVMLBHG_987412";
this.VA_UBICATIONVMLBHG_987412.colSpan=1;
this.VA_UBICATIONVMLBHG_987412.withoutLabel = false;
this.VA_UBICATIONVMLBHG_987412.readOnly = ConstantsApi.mode.Query;
this.VA_UBICATIONVMLBHG_987412.enabled = ConstantsApi.mode.Insert;
this.VA_UBICATIONVMLBHG_987412.visible= ConstantsApi.mode.All;
this.VA_UBICATIONVMLBHG_987412.required = true;
this.VA_UBICATIONVMLBHG_987412.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_UBICATIONVMLBHG_987412.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LOANS_REQUERIOD_32696')
};
this.VA_CLIENTENOMBREEE_802412.id = "VA_CLIENTENOMBREEE_802412";
this.VA_CLIENTENOMBREEE_802412.name = "customerName";
this.VA_CLIENTENOMBREEE_802412.label = cobis.translate("LNSPR.LBL_LNSPR_FONDEADOR_63367");
this.VA_CLIENTENOMBREEE_802412.entity = "LoanLinesCreation";
this.VA_CLIENTENOMBREEE_802412.attribute = "customerName";
this.VA_CLIENTENOMBREEE_802412.colSpan = 2;
this.VA_CLIENTENOMBREEE_802412.format = "";
this.VA_CLIENTENOMBREEE_802412.readOnly = ConstantsApi.mode.Query;
this.VA_CLIENTENOMBREEE_802412.enabled = ConstantsApi.mode.Insert;
this.VA_CLIENTENOMBREEE_802412.visible= ConstantsApi.mode.All;
this.VA_CLIENTENOMBREEE_802412.textLocked = true;
this.VA_CLIENTENOMBREEE_802412.required = true;
this.VA_CLIENTENOMBREEE_802412.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_CLIENTENOMBREEE_802412.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LOANS_REQUERIOD_32696')
};
this.VA_MONTODKGETQZTDK_858412.label = cobis.translate("LNSPR.LBL_LNSPR_MONTOEMFX_52083");
this.VA_MONTODKGETQZTDK_858412.entity = "LoanLinesCreation";
this.VA_MONTODKGETQZTDK_858412.attribute = "amount";
this.VA_MONTODKGETQZTDK_858412.textCase= TextCaseOptions.NONE;
this.VA_MONTODKGETQZTDK_858412.format= "c";
this.VA_MONTODKGETQZTDK_858412.name="amount";
this.VA_MONTODKGETQZTDK_858412.id="VA_MONTODKGETQZTDK_858412";
this.VA_MONTODKGETQZTDK_858412.colSpan=1;
this.VA_MONTODKGETQZTDK_858412.withoutLabel = false;
this.VA_MONTODKGETQZTDK_858412.readOnly = ConstantsApi.mode.Query;
this.VA_MONTODKGETQZTDK_858412.enabled = ConstantsApi.mode.Insert + ConstantsApi.mode.Update;
this.VA_MONTODKGETQZTDK_858412.visible= ConstantsApi.mode.All;
this.VA_MONTODKGETQZTDK_858412.required = true;
this.VA_MONTODKGETQZTDK_858412.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_MONTODKGETQZTDK_858412.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LOANS_REQUERIOD_32696')
};
this.VA_MONEDADESCEXVAJ_622412.label = cobis.translate("LNSPR.LBL_LNSPR_MONEDAFCA_83005");
this.VA_MONEDADESCEXVAJ_622412.blankOption=true;
this.VA_MONEDADESCEXVAJ_622412.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_MONEDADESCEXVAJ_622412.entity = "LoanLinesCreation";
this.VA_MONEDADESCEXVAJ_622412.attribute = "coin";
this.VA_MONEDADESCEXVAJ_622412.textField = "value";
this.VA_MONEDADESCEXVAJ_622412.valueField = "code";
this.VA_MONEDADESCEXVAJ_622412.showId= true;
this.VA_MONEDADESCEXVAJ_622412.name="coin";
this.VA_MONEDADESCEXVAJ_622412.id="VA_MONEDADESCEXVAJ_622412";
this.VA_MONEDADESCEXVAJ_622412.colSpan=1;
this.VA_MONEDADESCEXVAJ_622412.withoutLabel = false;
this.VA_MONEDADESCEXVAJ_622412.readOnly = ConstantsApi.mode.Query;
this.VA_MONEDADESCEXVAJ_622412.enabled = ConstantsApi.mode.Insert;
this.VA_MONEDADESCEXVAJ_622412.visible= ConstantsApi.mode.All;
this.VA_MONEDADESCEXVAJ_622412.required = true;
this.VA_MONEDADESCEXVAJ_622412.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_MONEDADESCEXVAJ_622412.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LOANS_REQUERIOD_32696')
};
this.VA_FECHAAPROBACIOO_814412.label = cobis.translate("LNSPR.LBL_LNSPR_FECHAINII_43454");
this.VA_FECHAAPROBACIOO_814412.entity = "LoanLinesCreation";
this.VA_FECHAAPROBACIOO_814412.attribute = "startDate";
this.VA_FECHAAPROBACIOO_814412.name="startDate";
this.VA_FECHAAPROBACIOO_814412.id="VA_FECHAAPROBACIOO_814412";
this.VA_FECHAAPROBACIOO_814412.colSpan=1;
this.VA_FECHAAPROBACIOO_814412.withoutLabel = false;
this.VA_FECHAAPROBACIOO_814412.readOnly = ConstantsApi.mode.Query;
this.VA_FECHAAPROBACIOO_814412.enabled = ConstantsApi.mode.Insert;
this.VA_FECHAAPROBACIOO_814412.visible= ConstantsApi.mode.All;
this.VA_FECHAAPROBACIOO_814412.required = true;
this.VA_FECHAAPROBACIOO_814412.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_FECHAAPROBACIOO_814412.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LOANS_REQUERIOD_32696')
};
this.VA_NUMDIASKUFOWPOC_532412.label = cobis.translate("LNSPR.LBL_LNSPR_NRODASREL_14817");
this.VA_NUMDIASKUFOWPOC_532412.entity = "LoanLinesCreation";
this.VA_NUMDIASKUFOWPOC_532412.attribute = "daysNumber";
this.VA_NUMDIASKUFOWPOC_532412.textCase= TextCaseOptions.NONE;
this.VA_NUMDIASKUFOWPOC_532412.format= "n0";
this.VA_NUMDIASKUFOWPOC_532412.name="daysNumber";
this.VA_NUMDIASKUFOWPOC_532412.id="VA_NUMDIASKUFOWPOC_532412";
this.VA_NUMDIASKUFOWPOC_532412.colSpan=1;
this.VA_NUMDIASKUFOWPOC_532412.withoutLabel = false;
this.VA_NUMDIASKUFOWPOC_532412.readOnly = ConstantsApi.mode.Query;
this.VA_NUMDIASKUFOWPOC_532412.enabled = ConstantsApi.mode.Insert + ConstantsApi.mode.Update;
this.VA_NUMDIASKUFOWPOC_532412.visible= ConstantsApi.mode.All;
this.VA_NUMDIASKUFOWPOC_532412.required = true;
this.VA_NUMDIASKUFOWPOC_532412.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_NUMDIASKUFOWPOC_532412.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LOANS_REQUERIOD_32696')
};
this.VA_FECHAVENCIMINOT_231412.label = cobis.translate("LNSPR.LBL_LOANS_FECHAVENI_35637");
this.VA_FECHAVENCIMINOT_231412.entity = "LoanLinesCreation";
this.VA_FECHAVENCIMINOT_231412.attribute = "dueDate";
this.VA_FECHAVENCIMINOT_231412.name="dueDate";
this.VA_FECHAVENCIMINOT_231412.id="VA_FECHAVENCIMINOT_231412";
this.VA_FECHAVENCIMINOT_231412.colSpan=1;
this.VA_FECHAVENCIMINOT_231412.withoutLabel = false;
this.VA_FECHAVENCIMINOT_231412.readOnly = ConstantsApi.mode.Query;
this.VA_FECHAVENCIMINOT_231412.enabled = ConstantsApi.mode.Insert + ConstantsApi.mode.Update;
this.VA_FECHAVENCIMINOT_231412.visible= ConstantsApi.mode.All;
this.VA_FECHAVENCIMINOT_231412.required = true;
this.VA_FECHAVENCIMINOT_231412.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_FECHAVENCIMINOT_231412.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LOANS_REQUERIOD_32696')
};
this.VA_ROTATIVAEYDZXHU_984412.label = cobis.translate("LNSPR.LBL_LNSPR_ROTATIVAA_85636");
this.VA_ROTATIVAEYDZXHU_984412.entity = "LoanLinesCreation";
this.VA_ROTATIVAEYDZXHU_984412.attribute = "rotary";
this.VA_ROTATIVAEYDZXHU_984412.textField = "value";
this.VA_ROTATIVAEYDZXHU_984412.valueField = "code";
this.VA_ROTATIVAEYDZXHU_984412.showId= true;
this.VA_ROTATIVAEYDZXHU_984412.name="rotary";
this.VA_ROTATIVAEYDZXHU_984412.id="VA_ROTATIVAEYDZXHU_984412";
this.VA_ROTATIVAEYDZXHU_984412.colSpan=1;
this.VA_ROTATIVAEYDZXHU_984412.withoutLabel = false;
this.VA_ROTATIVAEYDZXHU_984412.readOnly = ConstantsApi.mode.Query;
this.VA_ROTATIVAEYDZXHU_984412.enabled = ConstantsApi.mode.Insert;
this.VA_ROTATIVAEYDZXHU_984412.visible= ConstantsApi.mode.All;
this.VA_ROTATIVAEYDZXHU_984412.required = true;
this.VA_ROTATIVAEYDZXHU_984412.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_ROTATIVAEYDZXHU_984412.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LOANS_REQUERIOD_32696')
};
this.VA_SECTORZLUFUQKJE_186412.label = cobis.translate("LNSPR.LBL_LOANS_SECTORQEZ_42002");
this.VA_SECTORZLUFUQKJE_186412.blankOption=true;
this.VA_SECTORZLUFUQKJE_186412.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_SECTORZLUFUQKJE_186412.entity = "LoanLinesCreation";
this.VA_SECTORZLUFUQKJE_186412.attribute = "sector";
this.VA_SECTORZLUFUQKJE_186412.textField = "value";
this.VA_SECTORZLUFUQKJE_186412.valueField = "code";
this.VA_SECTORZLUFUQKJE_186412.showId= true;
this.VA_SECTORZLUFUQKJE_186412.name="sector";
this.VA_SECTORZLUFUQKJE_186412.id="VA_SECTORZLUFUQKJE_186412";
this.VA_SECTORZLUFUQKJE_186412.colSpan=1;
this.VA_SECTORZLUFUQKJE_186412.withoutLabel = false;
this.VA_SECTORZLUFUQKJE_186412.readOnly = ConstantsApi.mode.Query;
this.VA_SECTORZLUFUQKJE_186412.enabled = ConstantsApi.mode.Insert;
this.VA_SECTORZLUFUQKJE_186412.visible= ConstantsApi.mode.All;
this.VA_SECTORZLUFUQKJE_186412.required = true;
this.VA_SECTORZLUFUQKJE_186412.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_SECTORZLUFUQKJE_186412.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LOANS_REQUERIOD_32696')
};
this.VA_MONTOUTILIZADDO_817412.label = cobis.translate("LNSPR.LBL_LOANS_UTILIZAOO_53309");
this.VA_MONTOUTILIZADDO_817412.entity = "LoanLinesCreation";
this.VA_MONTOUTILIZADDO_817412.attribute = "used";
this.VA_MONTOUTILIZADDO_817412.textCase= TextCaseOptions.NONE;
this.VA_MONTOUTILIZADDO_817412.format= "c";
this.VA_MONTOUTILIZADDO_817412.name="used";
this.VA_MONTOUTILIZADDO_817412.id="VA_MONTOUTILIZADDO_817412";
this.VA_MONTOUTILIZADDO_817412.colSpan=1;
this.VA_MONTOUTILIZADDO_817412.withoutLabel = false;
this.VA_MONTOUTILIZADDO_817412.readOnly = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_MONTOUTILIZADDO_817412.enabled = ConstantsApi.mode.All;
this.VA_MONTOUTILIZADDO_817412.visible= ConstantsApi.mode.All;
this.VA_AVAILABLEPJSKML_987412.label = cobis.translate("LNSPR.LBL_LNSPR_DISPONILE_55740");
this.VA_AVAILABLEPJSKML_987412.entity = "LoanLinesCreation";
this.VA_AVAILABLEPJSKML_987412.attribute = "available";
this.VA_AVAILABLEPJSKML_987412.textCase= TextCaseOptions.NONE;
this.VA_AVAILABLEPJSKML_987412.format= "c";
this.VA_AVAILABLEPJSKML_987412.name="available";
this.VA_AVAILABLEPJSKML_987412.id="VA_AVAILABLEPJSKML_987412";
this.VA_AVAILABLEPJSKML_987412.colSpan=1;
this.VA_AVAILABLEPJSKML_987412.withoutLabel = false;
this.VA_AVAILABLEPJSKML_987412.readOnly = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_AVAILABLEPJSKML_987412.enabled = ConstantsApi.mode.All;
this.VA_AVAILABLEPJSKML_987412.visible= ConstantsApi.mode.All;
this.VA_OBSERVATIONSBHE_719412.label = cobis.translate("LNSPR.LBL_LNSPR_OBSERVACE_16379");
this.VA_OBSERVATIONSBHE_719412.entity = "LoanLinesCreation";
this.VA_OBSERVATIONSBHE_719412.attribute = "observations";
this.VA_OBSERVATIONSBHE_719412.numberLines=5;
this.VA_OBSERVATIONSBHE_719412.maxlength= 2,500;
this.VA_OBSERVATIONSBHE_719412.textCase= TextCaseOptions.UPPER_CASE;
this.VA_OBSERVATIONSBHE_719412.name="observations";
this.VA_OBSERVATIONSBHE_719412.id="VA_OBSERVATIONSBHE_719412";
this.VA_OBSERVATIONSBHE_719412.colSpan=4;
this.VA_OBSERVATIONSBHE_719412.withoutLabel = false;
this.VA_OBSERVATIONSBHE_719412.readOnly = ConstantsApi.mode.Query;
this.VA_OBSERVATIONSBHE_719412.enabled = ConstantsApi.mode.All;
this.VA_OBSERVATIONSBHE_719412.visible= ConstantsApi.mode.All;
this.Spacer2523.id = "Spacer2523";
this.Spacer2523.name = "Spacer2523";
this.Spacer2523.colSpan = 1;
this.Spacer2523.visible= ConstantsApi.mode.All;
this.VA_VABUTTONBWOPFCN_144412.id = "VA_VABUTTONBWOPFCN_144412";
this.VA_VABUTTONBWOPFCN_144412.name = "VA_VABUTTONBWOPFCN_144412";
this.VA_VABUTTONBWOPFCN_144412.label = cobis.translate("LNSPR.LBL_LNSPR_GUARDARRI_81055");
this.VA_VABUTTONBWOPFCN_144412.colSpan = 2;
this.VA_VABUTTONBWOPFCN_144412.withoutLabel = false;
this.VA_VABUTTONBWOPFCN_144412.causesValidation=true;
this.VA_VABUTTONBWOPFCN_144412.submitOnEnter=false;
this.VA_VABUTTONBWOPFCN_144412.setFocus=false;
this.VA_VABUTTONBWOPFCN_144412.enabled = ConstantsApi.mode.Insert + ConstantsApi.mode.Update;
this.VA_VABUTTONBWOPFCN_144412.visible= ConstantsApi.mode.Insert + ConstantsApi.mode.Update;
this.VA_VABUTTONBWOPFCN_144412.attributesGroup = this.G_LOANLINEAS_154412.attList;
this.Spacer1961.id = "Spacer1961";
this.Spacer1961.name = "Spacer1961";
this.Spacer1961.colSpan = 1;
this.Spacer1961.visible= ConstantsApi.mode.All;
this.T_LNSPRXLZJGUMH_556 = this.formBuilder.group({
LoanLinesCreation: this.formBuilder.group({
nature:[{value: null, disabled: !this.VA_NATURALEZAOPFBV_807412.visible},CobisDesignerUtil.getValidationFunctions(this.VA_NATURALEZAOPFBV_807412.validationFunctions!)],
tramitNumber:[{value: null, disabled: !this.VA_TRAMITNUMBEROVG_770412.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TRAMITNUMBEROVG_770412.validationFunctions!)],
sequential:[{value: null, disabled: !this.VA_SECUENCIALIFYOH_707412.visible},CobisDesignerUtil.getValidationFunctions(this.VA_SECUENCIALIFYOH_707412.validationFunctions!)],
lineCode:[{value: null, disabled: !this.VA_CUPOMXKFKFAVAGK_116412.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CUPOMXKFKFAVAGK_116412.validationFunctions!)],
estado:[{value: null, disabled: !this.VA_ESTADOOBXCIHITT_296412.visible},CobisDesignerUtil.getValidationFunctions(this.VA_ESTADOOBXCIHITT_296412.validationFunctions!)],
office:[{value: null, disabled: !this.VA_OFICINASKKBEPJX_241412.visible},CobisDesignerUtil.getValidationFunctions(this.VA_OFICINASKKBEPJX_241412.validationFunctions!)],
official:[{value: null, disabled: !this.VA_OFFICIALWHTPNAJ_913412.visible},CobisDesignerUtil.getValidationFunctions(this.VA_OFFICIALWHTPNAJ_913412.validationFunctions!)],
ubication:[{value: null, disabled: !this.VA_UBICATIONVMLBHG_987412.visible},CobisDesignerUtil.getValidationFunctions(this.VA_UBICATIONVMLBHG_987412.validationFunctions!)],
customerName:[{value: null, disabled: !this.VA_CLIENTENOMBREEE_802412.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CLIENTENOMBREEE_802412.validationFunctions!)],
amount:[{value: null, disabled: !this.VA_MONTODKGETQZTDK_858412.visible},CobisDesignerUtil.getValidationFunctions(this.VA_MONTODKGETQZTDK_858412.validationFunctions!)],
coin:[{value: null, disabled: !this.VA_MONEDADESCEXVAJ_622412.visible},CobisDesignerUtil.getValidationFunctions(this.VA_MONEDADESCEXVAJ_622412.validationFunctions!)],
startDate:[{value: null, disabled: !this.VA_FECHAAPROBACIOO_814412.visible},CobisDesignerUtil.getValidationFunctions(this.VA_FECHAAPROBACIOO_814412.validationFunctions!)],
daysNumber:[{value: null, disabled: !this.VA_NUMDIASKUFOWPOC_532412.visible},CobisDesignerUtil.getValidationFunctions(this.VA_NUMDIASKUFOWPOC_532412.validationFunctions!)],
dueDate:[{value: null, disabled: !this.VA_FECHAVENCIMINOT_231412.visible},CobisDesignerUtil.getValidationFunctions(this.VA_FECHAVENCIMINOT_231412.validationFunctions!)],
rotary:[{value: null, disabled: !this.VA_ROTATIVAEYDZXHU_984412.visible},CobisDesignerUtil.getValidationFunctions(this.VA_ROTATIVAEYDZXHU_984412.validationFunctions!)],
sector:[{value: null, disabled: !this.VA_SECTORZLUFUQKJE_186412.visible},CobisDesignerUtil.getValidationFunctions(this.VA_SECTORZLUFUQKJE_186412.validationFunctions!)],
used:[{value: null, disabled: !this.VA_MONTOUTILIZADDO_817412.visible},CobisDesignerUtil.getValidationFunctions(this.VA_MONTOUTILIZADDO_817412.validationFunctions!)],
available:[{value: null, disabled: !this.VA_AVAILABLEPJSKML_987412.visible},CobisDesignerUtil.getValidationFunctions(this.VA_AVAILABLEPJSKML_987412.validationFunctions!)],
observations:[{value: null, disabled: !this.VA_OBSERVATIONSBHE_719412.visible},CobisDesignerUtil.getValidationFunctions(this.VA_OBSERVATIONSBHE_719412.validationFunctions!)],
customerGroup:[null],
customer:[null],
searchType:[null],
}
),
});
}
}