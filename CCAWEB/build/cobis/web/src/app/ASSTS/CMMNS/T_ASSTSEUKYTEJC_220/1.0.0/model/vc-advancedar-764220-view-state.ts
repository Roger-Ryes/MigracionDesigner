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
public T_ASSTSEUKYTEJC_220!:FormGroup;
public VC_ADVANCEDAR_764220:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_ADVANCERLA_757521 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_ADVANCEHAA_340521 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VA_NUMPROCEDURESSS_883521: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_OFFICEIZBTWUGLQ_256521: CobisDropDownListModel = new CobisDropDownListModel();
public VA_CODCURRENCYWYFH_403521: CobisDropDownListModel = new CobisDropDownListModel();
public VA_DISBURSEMENTDAE_580521: CobisDateFieldModel = new CobisDateFieldModel();
public VA_STATUSBETIKSGLY_234521: CobisDropDownListModel = new CobisDropDownListModel();
public VA_MIGRATEDOPERTVT_332521: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_TYPEQKEVCBCXYDI_286521: CobisDropDownListModel = new CobisDropDownListModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_ADVANCEDAR_764220.id="VC_ADVANCEDAR_764220";
this.VC_ADVANCEDAR_764220.name="AdvancedSearchLoansForm";
this.VC_ADVANCEDAR_764220.colSpan=1;
this.VC_ADVANCEDAR_764220.columns=1;
this.VC_ADVANCEDAR_764220.enabled=ConstantsApi.mode.All;
this.G_ADVANCERLA_757521.id="G_ADVANCERLA_757521";
this.G_ADVANCERLA_757521.name="GroupLayout1779";
this.G_ADVANCERLA_757521.columns=1;
this.G_ADVANCERLA_757521.childrenGroups = ["G_ADVANCEHAA_340521"];
this.G_ADVANCERLA_757521.colSpan=1;
this.G_ADVANCERLA_757521.enabled=ConstantsApi.mode.All;
this.G_ADVANCERLA_757521.visible=ConstantsApi.mode.All;
this.G_ADVANCEHAA_340521.id="G_ADVANCEHAA_340521";
this.G_ADVANCEHAA_340521.name="Group1415";
this.G_ADVANCEHAA_340521.columns=4;
this.G_ADVANCEHAA_340521.labelOrientation="Top";
this.G_ADVANCEHAA_340521.colSpan=1;
this.G_ADVANCEHAA_340521.enabled=ConstantsApi.mode.All;
this.G_ADVANCEHAA_340521.visible=ConstantsApi.mode.All;
this.G_ADVANCEHAA_340521.attList = ["numProcedures","office","codCurrency","disbursementDate","status","migratedOper","type"];
this.VA_NUMPROCEDURESSS_883521.label = cobis.translate("ASSTS.LBL_ASSTS_NUMTRMIET_51783");
this.VA_NUMPROCEDURESSS_883521.entity = "LoanSearchFilter";
this.VA_NUMPROCEDURESSS_883521.attribute = "numProcedures";
this.VA_NUMPROCEDURESSS_883521.maxlength= 11;
this.VA_NUMPROCEDURESSS_883521.textCase= TextCaseOptions.NONE;
this.VA_NUMPROCEDURESSS_883521.name="numProcedures";
this.VA_NUMPROCEDURESSS_883521.id="VA_NUMPROCEDURESSS_883521";
this.VA_NUMPROCEDURESSS_883521.colSpan=1;
this.VA_NUMPROCEDURESSS_883521.withoutLabel = false;
this.VA_NUMPROCEDURESSS_883521.readOnly = ConstantsApi.mode.Query;
this.VA_NUMPROCEDURESSS_883521.enabled = ConstantsApi.mode.All;
this.VA_NUMPROCEDURESSS_883521.visible= ConstantsApi.mode.All;
this.VA_NUMPROCEDURESSS_883521.inputRestrictionValidators = { onlyNumbers: true};
this.VA_NUMPROCEDURESSS_883521.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.RangeValues,CustomValidators.valueRange('0','2147483647')]
]);
this.VA_NUMPROCEDURESSS_883521.messagesValidations = {
valueRange: cobis.translate('ASSTS.MSG_ASSTS_SEDEBERZE_11978')
};
this.VA_OFFICEIZBTWUGLQ_256521.label = cobis.translate("ASSTS.LBL_ASSTS_OFICINAHX_44623");
this.VA_OFFICEIZBTWUGLQ_256521.blankOption=true;
this.VA_OFFICEIZBTWUGLQ_256521.placeHolderLabel = cobis.translate("ASSTS.LBL_ASSTS_SELECCION_40905");
this.VA_OFFICEIZBTWUGLQ_256521.entity = "LoanSearchFilter";
this.VA_OFFICEIZBTWUGLQ_256521.attribute = "office";
this.VA_OFFICEIZBTWUGLQ_256521.textField = "value";
this.VA_OFFICEIZBTWUGLQ_256521.valueField = "code";
this.VA_OFFICEIZBTWUGLQ_256521.showId= true;
this.VA_OFFICEIZBTWUGLQ_256521.name="office";
this.VA_OFFICEIZBTWUGLQ_256521.id="VA_OFFICEIZBTWUGLQ_256521";
this.VA_OFFICEIZBTWUGLQ_256521.colSpan=1;
this.VA_OFFICEIZBTWUGLQ_256521.withoutLabel = false;
this.VA_OFFICEIZBTWUGLQ_256521.readOnly = ConstantsApi.mode.Query;
this.VA_OFFICEIZBTWUGLQ_256521.enabled = ConstantsApi.mode.All;
this.VA_OFFICEIZBTWUGLQ_256521.visible= ConstantsApi.mode.All;
this.VA_CODCURRENCYWYFH_403521.label = cobis.translate("ASSTS.LBL_ASSTS_MONEDATUB_92849");
this.VA_CODCURRENCYWYFH_403521.blankOption=true;
this.VA_CODCURRENCYWYFH_403521.placeHolderLabel = cobis.translate("ASSTS.LBL_ASSTS_SELECCION_40905");
this.VA_CODCURRENCYWYFH_403521.entity = "LoanSearchFilter";
this.VA_CODCURRENCYWYFH_403521.attribute = "codCurrency";
this.VA_CODCURRENCYWYFH_403521.textField = "value";
this.VA_CODCURRENCYWYFH_403521.valueField = "code";
this.VA_CODCURRENCYWYFH_403521.showId= true;
this.VA_CODCURRENCYWYFH_403521.name="codCurrency";
this.VA_CODCURRENCYWYFH_403521.id="VA_CODCURRENCYWYFH_403521";
this.VA_CODCURRENCYWYFH_403521.colSpan=1;
this.VA_CODCURRENCYWYFH_403521.withoutLabel = false;
this.VA_CODCURRENCYWYFH_403521.readOnly = ConstantsApi.mode.Query;
this.VA_CODCURRENCYWYFH_403521.enabled = ConstantsApi.mode.All;
this.VA_CODCURRENCYWYFH_403521.visible= ConstantsApi.mode.All;
this.VA_DISBURSEMENTDAE_580521.label = cobis.translate("ASSTS.LBL_ASSTS_FECHADEBE_42043");
this.VA_DISBURSEMENTDAE_580521.entity = "LoanSearchFilter";
this.VA_DISBURSEMENTDAE_580521.attribute = "disbursementDate";
this.VA_DISBURSEMENTDAE_580521.name="disbursementDate";
this.VA_DISBURSEMENTDAE_580521.id="VA_DISBURSEMENTDAE_580521";
this.VA_DISBURSEMENTDAE_580521.colSpan=1;
this.VA_DISBURSEMENTDAE_580521.withoutLabel = false;
this.VA_DISBURSEMENTDAE_580521.readOnly = ConstantsApi.mode.Query;
this.VA_DISBURSEMENTDAE_580521.enabled = ConstantsApi.mode.All;
this.VA_DISBURSEMENTDAE_580521.visible= ConstantsApi.mode.All;
this.VA_STATUSBETIKSGLY_234521.label = cobis.translate("ASSTS.LBL_ASSTS_ESTADOPEM_54793");
this.VA_STATUSBETIKSGLY_234521.blankOption=true;
this.VA_STATUSBETIKSGLY_234521.placeHolderLabel = cobis.translate("ASSTS.LBL_ASSTS_SELECCION_40905");
this.VA_STATUSBETIKSGLY_234521.entity = "LoanSearchFilter";
this.VA_STATUSBETIKSGLY_234521.attribute = "status";
this.VA_STATUSBETIKSGLY_234521.textField = "descripcion";
this.VA_STATUSBETIKSGLY_234521.valueField = "codigo";
this.VA_STATUSBETIKSGLY_234521.showId= true;
this.VA_STATUSBETIKSGLY_234521.name="status";
this.VA_STATUSBETIKSGLY_234521.id="VA_STATUSBETIKSGLY_234521";
this.VA_STATUSBETIKSGLY_234521.colSpan=1;
this.VA_STATUSBETIKSGLY_234521.withoutLabel = false;
this.VA_STATUSBETIKSGLY_234521.readOnly = ConstantsApi.mode.Query;
this.VA_STATUSBETIKSGLY_234521.enabled = ConstantsApi.mode.All;
this.VA_STATUSBETIKSGLY_234521.visible= ConstantsApi.mode.All;
this.VA_MIGRATEDOPERTVT_332521.label = cobis.translate("ASSTS.LBL_ASSTS_PRSTAMOIO_81821");
this.VA_MIGRATEDOPERTVT_332521.entity = "LoanSearchFilter";
this.VA_MIGRATEDOPERTVT_332521.attribute = "migratedOper";
this.VA_MIGRATEDOPERTVT_332521.textCase= TextCaseOptions.NONE;
this.VA_MIGRATEDOPERTVT_332521.name="migratedOper";
this.VA_MIGRATEDOPERTVT_332521.id="VA_MIGRATEDOPERTVT_332521";
this.VA_MIGRATEDOPERTVT_332521.colSpan=1;
this.VA_MIGRATEDOPERTVT_332521.withoutLabel = false;
this.VA_MIGRATEDOPERTVT_332521.readOnly = ConstantsApi.mode.Query;
this.VA_MIGRATEDOPERTVT_332521.enabled = ConstantsApi.mode.All;
this.VA_MIGRATEDOPERTVT_332521.visible= ConstantsApi.mode.All;
this.VA_MIGRATEDOPERTVT_332521.inputRestrictionValidators = { onlyNumbers: true};
this.VA_TYPEQKEVCBCXYDI_286521.label = cobis.translate("ASSTS.LBL_ASSTS_TIPOOPERC_17964");
this.VA_TYPEQKEVCBCXYDI_286521.blankOption=true;
this.VA_TYPEQKEVCBCXYDI_286521.placeHolderLabel = cobis.translate("ASSTS.LBL_ASSTS_SELECCION_40905");
this.VA_TYPEQKEVCBCXYDI_286521.entity = "LoanSearchFilter";
this.VA_TYPEQKEVCBCXYDI_286521.attribute = "type";
this.VA_TYPEQKEVCBCXYDI_286521.textField = "value";
this.VA_TYPEQKEVCBCXYDI_286521.valueField = "code";
this.VA_TYPEQKEVCBCXYDI_286521.showId= true;
this.VA_TYPEQKEVCBCXYDI_286521.name="type";
this.VA_TYPEQKEVCBCXYDI_286521.id="VA_TYPEQKEVCBCXYDI_286521";
this.VA_TYPEQKEVCBCXYDI_286521.colSpan=2;
this.VA_TYPEQKEVCBCXYDI_286521.withoutLabel = false;
this.VA_TYPEQKEVCBCXYDI_286521.readOnly = ConstantsApi.mode.Query;
this.VA_TYPEQKEVCBCXYDI_286521.enabled = ConstantsApi.mode.All;
this.VA_TYPEQKEVCBCXYDI_286521.visible= ConstantsApi.mode.All;
this.T_ASSTSEUKYTEJC_220 = this.formBuilder.group({
LoanSearchFilter: this.formBuilder.group({
numProcedures:[{value: null, disabled: !this.VA_NUMPROCEDURESSS_883521.visible},CobisDesignerUtil.getValidationFunctions(this.VA_NUMPROCEDURESSS_883521.validationFunctions!)],
office:[{value: null, disabled: !this.VA_OFFICEIZBTWUGLQ_256521.visible},CobisDesignerUtil.getValidationFunctions(this.VA_OFFICEIZBTWUGLQ_256521.validationFunctions!)],
codCurrency:[{value: null, disabled: !this.VA_CODCURRENCYWYFH_403521.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CODCURRENCYWYFH_403521.validationFunctions!)],
disbursementDate:[{value: null, disabled: !this.VA_DISBURSEMENTDAE_580521.visible},CobisDesignerUtil.getValidationFunctions(this.VA_DISBURSEMENTDAE_580521.validationFunctions!)],
status:[{value: null, disabled: !this.VA_STATUSBETIKSGLY_234521.visible},CobisDesignerUtil.getValidationFunctions(this.VA_STATUSBETIKSGLY_234521.validationFunctions!)],
migratedOper:[{value: null, disabled: !this.VA_MIGRATEDOPERTVT_332521.visible},CobisDesignerUtil.getValidationFunctions(this.VA_MIGRATEDOPERTVT_332521.validationFunctions!)],
type:[{value: null, disabled: !this.VA_TYPEQKEVCBCXYDI_286521.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TYPEQKEVCBCXYDI_286521.validationFunctions!)],
category:[null],
group:[null],
codClient:[null],
avanceSearch:[null],
isGroup:[null],
isDisbursment:[null],
operation:[null],
officer:[null],
numIdentification:[null],
}
),
});
}
}