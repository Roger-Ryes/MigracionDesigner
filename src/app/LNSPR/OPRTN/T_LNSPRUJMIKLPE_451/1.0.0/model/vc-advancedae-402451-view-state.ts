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
public T_LNSPRUJMIKLPE_451!:FormGroup;
public VC_ADVANCEDAE_402451:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_ADVANCENCD_838276 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_ADVANCEHAS_654276 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VA_NUMPROCEDURESSS_812276: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_OFFICEYONUFLQBK_649276: CobisDropDownListModel = new CobisDropDownListModel();
public VA_CODCURRENCYLNFJ_357276: CobisDropDownListModel = new CobisDropDownListModel();
public VA_DISBURSEMENTEAE_104276: CobisDateFieldModel = new CobisDateFieldModel();
public VA_STATEDKAIXFCWPF_698276: CobisDropDownListModel = new CobisDropDownListModel();
public VA_MIGRATEDOPERAII_878276: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_TYPENAZMALUBWMU_619276: CobisDropDownListModel = new CobisDropDownListModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_ADVANCEDAE_402451.id="VC_ADVANCEDAE_402451";
this.VC_ADVANCEDAE_402451.name="AdvancedSearchLoansForm";
this.VC_ADVANCEDAE_402451.colSpan=1;
this.VC_ADVANCEDAE_402451.columns=1;
this.VC_ADVANCEDAE_402451.enabled=ConstantsApi.mode.All;
this.G_ADVANCENCD_838276.id="G_ADVANCENCD_838276";
this.G_ADVANCENCD_838276.name="GroupLayout1149";
this.G_ADVANCENCD_838276.columns=1;
this.G_ADVANCENCD_838276.childrenGroups = ["G_ADVANCEHAS_654276"];
this.G_ADVANCENCD_838276.colSpan=1;
this.G_ADVANCENCD_838276.enabled=ConstantsApi.mode.All;
this.G_ADVANCENCD_838276.visible=ConstantsApi.mode.All;
this.G_ADVANCEHAS_654276.id="G_ADVANCEHAS_654276";
this.G_ADVANCEHAS_654276.name="Group1481";
this.G_ADVANCEHAS_654276.columns=4;
this.G_ADVANCEHAS_654276.labelOrientation="Top";
this.G_ADVANCEHAS_654276.colSpan=1;
this.G_ADVANCEHAS_654276.enabled=ConstantsApi.mode.All;
this.G_ADVANCEHAS_654276.visible=ConstantsApi.mode.All;
this.G_ADVANCEHAS_654276.attList = ["numProcedures","office","codCurrency","disbursementDate","state","migratedOperation","type"];
this.VA_NUMPROCEDURESSS_812276.label = cobis.translate("LNSPR.LBL_LNSPR_NUMTRMITE_20261");
this.VA_NUMPROCEDURESSS_812276.entity = "LoanSearchFilter";
this.VA_NUMPROCEDURESSS_812276.attribute = "numProcedures";
this.VA_NUMPROCEDURESSS_812276.maxlength= 10;
this.VA_NUMPROCEDURESSS_812276.textCase= TextCaseOptions.NONE;
this.VA_NUMPROCEDURESSS_812276.name="numProcedures";
this.VA_NUMPROCEDURESSS_812276.id="VA_NUMPROCEDURESSS_812276";
this.VA_NUMPROCEDURESSS_812276.colSpan=1;
this.VA_NUMPROCEDURESSS_812276.withoutLabel = false;
this.VA_NUMPROCEDURESSS_812276.readOnly = ConstantsApi.mode.Query;
this.VA_NUMPROCEDURESSS_812276.enabled = ConstantsApi.mode.All;
this.VA_NUMPROCEDURESSS_812276.visible= ConstantsApi.mode.All;
this.VA_NUMPROCEDURESSS_812276.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.RangeValues,CustomValidators.valueRange('0','2147483647')]
]);
this.VA_NUMPROCEDURESSS_812276.messagesValidations = {
valueRange: cobis.translate('LNSPR.MSG_LNSPR_SEDEBERZE_11978')
};
this.VA_OFFICEYONUFLQBK_649276.label = cobis.translate("LNSPR.LBL_LNSPR_OFICINAGV_33565");
this.VA_OFFICEYONUFLQBK_649276.blankOption=true;
this.VA_OFFICEYONUFLQBK_649276.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_OFFICEYONUFLQBK_649276.entity = "LoanSearchFilter";
this.VA_OFFICEYONUFLQBK_649276.attribute = "office";
this.VA_OFFICEYONUFLQBK_649276.textField = "value";
this.VA_OFFICEYONUFLQBK_649276.valueField = "code";
this.VA_OFFICEYONUFLQBK_649276.showId= true;
this.VA_OFFICEYONUFLQBK_649276.name="office";
this.VA_OFFICEYONUFLQBK_649276.id="VA_OFFICEYONUFLQBK_649276";
this.VA_OFFICEYONUFLQBK_649276.colSpan=1;
this.VA_OFFICEYONUFLQBK_649276.withoutLabel = false;
this.VA_OFFICEYONUFLQBK_649276.readOnly = ConstantsApi.mode.Query;
this.VA_OFFICEYONUFLQBK_649276.enabled = ConstantsApi.mode.All;
this.VA_OFFICEYONUFLQBK_649276.visible= ConstantsApi.mode.All;
this.VA_CODCURRENCYLNFJ_357276.label = cobis.translate("LNSPR.LBL_LNSPR_MONEDAFCA_83005");
this.VA_CODCURRENCYLNFJ_357276.blankOption=true;
this.VA_CODCURRENCYLNFJ_357276.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_CODCURRENCYLNFJ_357276.entity = "LoanSearchFilter";
this.VA_CODCURRENCYLNFJ_357276.attribute = "codCurrency";
this.VA_CODCURRENCYLNFJ_357276.textField = "value";
this.VA_CODCURRENCYLNFJ_357276.valueField = "code";
this.VA_CODCURRENCYLNFJ_357276.showId= true;
this.VA_CODCURRENCYLNFJ_357276.name="codCurrency";
this.VA_CODCURRENCYLNFJ_357276.id="VA_CODCURRENCYLNFJ_357276";
this.VA_CODCURRENCYLNFJ_357276.colSpan=1;
this.VA_CODCURRENCYLNFJ_357276.withoutLabel = false;
this.VA_CODCURRENCYLNFJ_357276.readOnly = ConstantsApi.mode.Query;
this.VA_CODCURRENCYLNFJ_357276.enabled = ConstantsApi.mode.All;
this.VA_CODCURRENCYLNFJ_357276.visible= ConstantsApi.mode.All;
this.VA_DISBURSEMENTEAE_104276.label = cobis.translate("LNSPR.LBL_LNSPR_FECHADEBE_42043");
this.VA_DISBURSEMENTEAE_104276.entity = "LoanSearchFilter";
this.VA_DISBURSEMENTEAE_104276.attribute = "disbursementDate";
this.VA_DISBURSEMENTEAE_104276.name="disbursementDate";
this.VA_DISBURSEMENTEAE_104276.id="VA_DISBURSEMENTEAE_104276";
this.VA_DISBURSEMENTEAE_104276.colSpan=1;
this.VA_DISBURSEMENTEAE_104276.withoutLabel = false;
this.VA_DISBURSEMENTEAE_104276.readOnly = ConstantsApi.mode.Query;
this.VA_DISBURSEMENTEAE_104276.enabled = ConstantsApi.mode.All;
this.VA_DISBURSEMENTEAE_104276.visible= ConstantsApi.mode.All;
this.VA_STATEDKAIXFCWPF_698276.label = cobis.translate("LNSPR.LBL_LNSPR_ESTADOPEM_54793");
this.VA_STATEDKAIXFCWPF_698276.blankOption=true;
this.VA_STATEDKAIXFCWPF_698276.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_STATEDKAIXFCWPF_698276.entity = "LoanSearchFilter";
this.VA_STATEDKAIXFCWPF_698276.attribute = "state";
this.VA_STATEDKAIXFCWPF_698276.textField = "value";
this.VA_STATEDKAIXFCWPF_698276.valueField = "code";
this.VA_STATEDKAIXFCWPF_698276.name="state";
this.VA_STATEDKAIXFCWPF_698276.id="VA_STATEDKAIXFCWPF_698276";
this.VA_STATEDKAIXFCWPF_698276.colSpan=1;
this.VA_STATEDKAIXFCWPF_698276.withoutLabel = false;
this.VA_STATEDKAIXFCWPF_698276.readOnly = ConstantsApi.mode.Query;
this.VA_STATEDKAIXFCWPF_698276.enabled = ConstantsApi.mode.All;
this.VA_STATEDKAIXFCWPF_698276.visible= ConstantsApi.mode.All;
this.VA_MIGRATEDOPERAII_878276.label = cobis.translate("LNSPR.LBL_LNSPR_PRSTAMOIO_81821");
this.VA_MIGRATEDOPERAII_878276.entity = "LoanSearchFilter";
this.VA_MIGRATEDOPERAII_878276.attribute = "migratedOperation";
this.VA_MIGRATEDOPERAII_878276.maxlength= 10;
this.VA_MIGRATEDOPERAII_878276.textCase= TextCaseOptions.NONE;
this.VA_MIGRATEDOPERAII_878276.name="migratedOperation";
this.VA_MIGRATEDOPERAII_878276.id="VA_MIGRATEDOPERAII_878276";
this.VA_MIGRATEDOPERAII_878276.colSpan=1;
this.VA_MIGRATEDOPERAII_878276.withoutLabel = false;
this.VA_MIGRATEDOPERAII_878276.readOnly = ConstantsApi.mode.Query;
this.VA_MIGRATEDOPERAII_878276.enabled = ConstantsApi.mode.All;
this.VA_MIGRATEDOPERAII_878276.visible= ConstantsApi.mode.All;
this.VA_MIGRATEDOPERAII_878276.inputRestrictionValidators = { onlyNumbers: true};
this.VA_TYPENAZMALUBWMU_619276.label = cobis.translate("LNSPR.LBL_LNSPR_TIPOOPERN_51275");
this.VA_TYPENAZMALUBWMU_619276.blankOption=true;
this.VA_TYPENAZMALUBWMU_619276.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_TYPENAZMALUBWMU_619276.entity = "LoanSearchFilter";
this.VA_TYPENAZMALUBWMU_619276.attribute = "type";
this.VA_TYPENAZMALUBWMU_619276.textField = "value";
this.VA_TYPENAZMALUBWMU_619276.valueField = "code";
this.VA_TYPENAZMALUBWMU_619276.showId= true;
this.VA_TYPENAZMALUBWMU_619276.name="type";
this.VA_TYPENAZMALUBWMU_619276.id="VA_TYPENAZMALUBWMU_619276";
this.VA_TYPENAZMALUBWMU_619276.colSpan=2;
this.VA_TYPENAZMALUBWMU_619276.withoutLabel = false;
this.VA_TYPENAZMALUBWMU_619276.readOnly = ConstantsApi.mode.Query;
this.VA_TYPENAZMALUBWMU_619276.enabled = ConstantsApi.mode.All;
this.VA_TYPENAZMALUBWMU_619276.visible= ConstantsApi.mode.All;
this.T_LNSPRUJMIKLPE_451 = this.formBuilder.group({
LoanSearchFilter: this.formBuilder.group({
numProcedures:[{value: null, disabled: !this.VA_NUMPROCEDURESSS_812276.visible},CobisDesignerUtil.getValidationFunctions(this.VA_NUMPROCEDURESSS_812276.validationFunctions!)],
office:[{value: null, disabled: !this.VA_OFFICEYONUFLQBK_649276.visible},CobisDesignerUtil.getValidationFunctions(this.VA_OFFICEYONUFLQBK_649276.validationFunctions!)],
codCurrency:[{value: null, disabled: !this.VA_CODCURRENCYLNFJ_357276.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CODCURRENCYLNFJ_357276.validationFunctions!)],
disbursementDate:[{value: null, disabled: !this.VA_DISBURSEMENTEAE_104276.visible},CobisDesignerUtil.getValidationFunctions(this.VA_DISBURSEMENTEAE_104276.validationFunctions!)],
state:[{value: null, disabled: !this.VA_STATEDKAIXFCWPF_698276.visible},CobisDesignerUtil.getValidationFunctions(this.VA_STATEDKAIXFCWPF_698276.validationFunctions!)],
migratedOperation:[{value: null, disabled: !this.VA_MIGRATEDOPERAII_878276.visible},CobisDesignerUtil.getValidationFunctions(this.VA_MIGRATEDOPERAII_878276.validationFunctions!)],
type:[{value: null, disabled: !this.VA_TYPENAZMALUBWMU_619276.visible},CobisDesignerUtil.getValidationFunctions(this.VA_TYPENAZMALUBWMU_619276.validationFunctions!)],
condition:[null],
lastProcessDate:[null],
next:[null],
archivoSubido:[null],
mode:[null],
numIdentification:[null],
sequential:[null],
codClient:[null],
credit:[null],
group:[null],
archivo:[null],
product:[null],
isGroup:[null],
category:[null],
avanceSearch:[null],
classLoan:[null],
seleccionarTodo:[null],
daysPastDue:[null],
untilDate:[null],
isDisbursment:[null],
readjDate:[null],
operation:[null],
oficial:[null],
nextReadjDate:[null],
status:[null],
historical:[null],
}
),
});
}
}