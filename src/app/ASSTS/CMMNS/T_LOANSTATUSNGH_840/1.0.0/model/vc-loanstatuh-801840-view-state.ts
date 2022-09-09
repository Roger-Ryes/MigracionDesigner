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
public T_LOANSTATUSNGH_840!:FormGroup;
public VC_LOANSTATUH_801840:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANSTAGHS_220722 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VA_STATUSCYEFKGCDY_909722: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_NEWSTATUSLZHCOE_110722: CobisDropDownListModel = new CobisDropDownListModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_LOANSTATUH_801840.id="VC_LOANSTATUH_801840";
this.VC_LOANSTATUH_801840.name="LoanStatusChangeForm";
this.VC_LOANSTATUH_801840.colSpan=1;
this.VC_LOANSTATUH_801840.columns=1;
this.VC_LOANSTATUH_801840.enabled=ConstantsApi.mode.All;
this.G_LOANSTAGHS_220722.id="G_LOANSTAGHS_220722";
this.G_LOANSTAGHS_220722.name="Group1371";
this.G_LOANSTAGHS_220722.columns=3;
this.G_LOANSTAGHS_220722.labelOrientation="Top";
this.G_LOANSTAGHS_220722.colSpan=1;
this.G_LOANSTAGHS_220722.enabled=ConstantsApi.mode.All;
this.G_LOANSTAGHS_220722.visible=ConstantsApi.mode.All;
this.G_LOANSTAGHS_220722.attList = ["statusCopy","newStatus"];
this.VA_STATUSCYEFKGCDY_909722.label = cobis.translate("ASSTS.LBL_ASSTS_ESTADOACU_72691");
this.VA_STATUSCYEFKGCDY_909722.entity = "Loan";
this.VA_STATUSCYEFKGCDY_909722.attribute = "statusCopy";
this.VA_STATUSCYEFKGCDY_909722.textCase= TextCaseOptions.NONE;
this.VA_STATUSCYEFKGCDY_909722.name="statusCopy";
this.VA_STATUSCYEFKGCDY_909722.id="VA_STATUSCYEFKGCDY_909722";
this.VA_STATUSCYEFKGCDY_909722.colSpan=1;
this.VA_STATUSCYEFKGCDY_909722.withoutLabel = false;
this.VA_STATUSCYEFKGCDY_909722.readOnly = ConstantsApi.mode.Query;
this.VA_STATUSCYEFKGCDY_909722.enabled = ConstantsApi.mode.Query;
this.VA_STATUSCYEFKGCDY_909722.visible= ConstantsApi.mode.All;
this.VA_NEWSTATUSLZHCOE_110722.label = cobis.translate("ASSTS.LBL_ASSTS_NUEVOESTA_11189");
this.VA_NEWSTATUSLZHCOE_110722.entity = "Loan";
this.VA_NEWSTATUSLZHCOE_110722.attribute = "newStatus";
this.VA_NEWSTATUSLZHCOE_110722.textField = "value";
this.VA_NEWSTATUSLZHCOE_110722.valueField = "code";
this.VA_NEWSTATUSLZHCOE_110722.name="newStatus";
this.VA_NEWSTATUSLZHCOE_110722.id="VA_NEWSTATUSLZHCOE_110722";
this.VA_NEWSTATUSLZHCOE_110722.colSpan=1;
this.VA_NEWSTATUSLZHCOE_110722.withoutLabel = false;
this.VA_NEWSTATUSLZHCOE_110722.readOnly = ConstantsApi.mode.Query;
this.VA_NEWSTATUSLZHCOE_110722.enabled = ConstantsApi.mode.All;
this.VA_NEWSTATUSLZHCOE_110722.visible= ConstantsApi.mode.All;
this.VA_NEWSTATUSLZHCOE_110722.required = true;
this.VA_NEWSTATUSLZHCOE_110722.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_NEWSTATUSLZHCOE_110722.messagesValidations = {
required: cobis.translate('ASSTS.MSG_ASSTS_REQUERIDO_35484')
};
this.T_LOANSTATUSNGH_840 = this.formBuilder.group({
Loan: this.formBuilder.group({
statusCopy:[{value: null, disabled: !this.VA_STATUSCYEFKGCDY_909722.visible},CobisDesignerUtil.getValidationFunctions(this.VA_STATUSCYEFKGCDY_909722.validationFunctions!)],
newStatus:[{value: null, disabled: !this.VA_NEWSTATUSLZHCOE_110722.visible},CobisDesignerUtil.getValidationFunctions(this.VA_NEWSTATUSLZHCOE_110722.validationFunctions!)],
numProcedure:[null],
quotaCredit:[null],
statusID:[null],
maxDateProrogation:[null],
lastProcessDate:[null],
balanceDue:[null],
category:[null],
operationTypeID:[null],
codCurrency:[null],
newStatusID:[null],
isDisbursment:[null],
mnemonic:[null],
natureOp:[null],
migratedOper:[null],
amortizationType:[null],
loanID:[null],
officeID:[null],
amountApproved:[null],
currencyName:[null],
startDate:[null],
loanBankID:[null],
idType:[null],
endDate:[null],
fondeadorLS:[null],
identityCardNumber:[null],
desOperationType:[null],
redesCont:[null],
group:[null],
tipo:[null],
previousOper:[null],
categoryGroup:[null],
status:[null],
clientID:[null],
operationType:[null],
clientName:[null],
disbursementDate:[null],
expirationDate:[null],
officer:[null],
sector:[null],
nextPayment:[null],
effectiveAnualRate:[null],
amount:[null],
adjustment:[null],
officerID:[null],
office:[null],
feeEndDate:[null],
}
),
});
}
}