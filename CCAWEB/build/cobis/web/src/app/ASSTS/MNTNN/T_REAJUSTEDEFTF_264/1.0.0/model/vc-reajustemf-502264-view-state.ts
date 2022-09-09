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
public T_REAJUSTEDEFTF_264!:FormGroup;
public VC_REAJUSTEMF_502264:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_REAJUSTTFE_294141 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_2618_23821: CobisGridModel = new CobisGridModel();
public G_READJUSSAA_728141 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_READJUSTON_605141 : CobisGroupBoxModel = new CobisGroupBoxModel();
public Spacer2917: CobisSpacerModel = new CobisSpacerModel();
public Spacer2328: CobisSpacerModel = new CobisSpacerModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_REAJUSTEMF_502264.id="VC_REAJUSTEMF_502264";
this.VC_REAJUSTEMF_502264.name="ReadjustmentDetalilsLoanForm";
this.VC_REAJUSTEMF_502264.colSpan=1;
this.VC_REAJUSTEMF_502264.columns=1;
this.VC_REAJUSTEMF_502264.enabled=ConstantsApi.mode.All;
this.G_REAJUSTTFE_294141.id="G_REAJUSTTFE_294141";
this.G_REAJUSTTFE_294141.name="Group1839";
this.G_REAJUSTTFE_294141.columns=1;
this.G_REAJUSTTFE_294141.labelOrientation="Top";
this.G_REAJUSTTFE_294141.colSpan=1;
this.G_REAJUSTTFE_294141.enabled=ConstantsApi.mode.All;
this.G_REAJUSTTFE_294141.visible=ConstantsApi.mode.All;
this.G_REAJUSTTFE_294141.attList = ["concepto","referencial","signo","factor","porcentaje"];
this.G_READJUSSAA_728141.id="G_READJUSSAA_728141";
this.G_READJUSSAA_728141.name="Group1328";
this.G_READJUSSAA_728141.columns=3;
this.G_READJUSSAA_728141.labelOrientation="Top";
this.G_READJUSSAA_728141.colSpan=1;
this.G_READJUSSAA_728141.enabled=ConstantsApi.mode.All;
this.G_READJUSSAA_728141.visible=ConstantsApi.mode.None;
this.G_READJUSTON_605141.id="G_READJUSTON_605141";
this.G_READJUSTON_605141.name="Group2266";
this.G_READJUSTON_605141.columns=3;
this.G_READJUSTON_605141.labelOrientation="Top";
this.G_READJUSTON_605141.colSpan=1;
this.G_READJUSTON_605141.enabled=ConstantsApi.mode.All;
this.G_READJUSTON_605141.visible=ConstantsApi.mode.None;
this.QV_2618_23821.pageSize=5;
this.QV_2618_23821.id='QV_2618_23821';
this.QV_2618_23821.name='QV_2618_23821';
this.QV_2618_23821.pageable=true;
this.QV_2618_23821.sortable=false;
this.QV_2618_23821.resizable=true;
this.QV_2618_23821.scrollable=true
this.QV_2618_23821.confirmRowDeletion=true;
this.QV_2618_23821.exportToExcel=false;
this.QV_2618_23821.exportToPdf=false;
this.QV_2618_23821.height=0;
this.QV_2618_23821.filterableColumns=false;
this.QV_2618_23821.entityName='ReadjustmentDetalilsLoan';
this.QV_2618_23821.appendRecords=false;
this.QV_2618_23821.rowDetail=false;
this.QV_2618_23821.columnMenu = true;
this.QV_2618_23821.editMode=CommonsConstants.GRID_EDIT_MODE_INLINE;
this.QV_2618_23821.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
this.QV_2618_23821.actions=[ComplexConstants.GRID_ACTION_DELETE,ComplexConstants.GRID_ACTION_UPDATE];
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_2618_23821.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXVNC_178141",
label : cobis.translate('ASSTS.LBL_ASSTS_CONCEPTOO_16181'),
field : 'concepto',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXVNC_178141',
name :'concepto',
withoutLabel : true,
attribute : 'concepto',
entity : 'ReadjustmentDetalilsLoan',
maxlength: 10,
readOnly : ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
required : true,
validationFunctions: new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]),
messagesValidations : {
required: cobis.translate('DSGNR.SYS_DSGNR_MSGREQURF_00032')
},
}
},
{
id : "VA_TEXTINPUTBOXFYD_123141",
label : cobis.translate('ASSTS.LBL_ASSTS_REFERENCL_42296'),
field : 'referencial',
visible : ConstantsApi.mode.All,
type : 'combobox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
data$: of([]),
properties :
{
id :'VA_TEXTINPUTBOXFYD_123141',
name :'referencial',
attribute : 'referencial',
entity : 'ReadjustmentDetalilsLoan',
withoutLabel : false,
blankOption : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
filterType : FilterType.NONE,
showId : false,
isOnChangeControl:true,
textField : "value",
valueField : "code",
required : true,
validationFunctions: new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]),
messagesValidations : {
required: cobis.translate('DSGNR.SYS_DSGNR_MSGREQURF_00032')
},
}
},
{
id : "VA_TEXTINPUTBOXIEY_291141",
label : cobis.translate('ASSTS.LBL_ASSTS_SIGNORIHO_57042'),
field : 'signo',
visible : ConstantsApi.mode.All,
type : 'combobox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
data$: of([]),
properties :
{
id :'VA_TEXTINPUTBOXIEY_291141',
name :'signo',
attribute : 'signo',
entity : 'ReadjustmentDetalilsLoan',
withoutLabel : false,
blankOption : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
filterType : FilterType.NONE,
showId : false,
isOnChangeControl:true,
textField : "value",
valueField : "code",
required : true,
validationFunctions: new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]),
messagesValidations : {
required: cobis.translate('DSGNR.SYS_DSGNR_MSGREQURF_00032')
},
}
},
{
id : "VA_TEXTINPUTBOXYTY_525141",
label : cobis.translate('ASSTS.LBL_ASSTS_FACTORQJB_54710'),
field : 'factor',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXYTY_525141',
name :'factor',
withoutLabel : true,
attribute : 'factor',
entity : 'ReadjustmentDetalilsLoan',
format : '#0.000000',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
isOnChangeControl:true,
required : true,
validationFunctions: new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.CompareValue,CustomValidators.fixedCompare('0',CustomValidatorOperator.GREATER_THAN_OR_EQUAL)],[VisualValidationTypeEnum.Required,Validators.required]
]),
messagesValidations : {
fixedCompare: cobis.translate('ASSTS.MSG_ASSTS_VALORDEER_67727'),required: cobis.translate('DSGNR.SYS_DSGNR_MSGREQURF_00032')
},
}
},
{
id : "VA_TEXTINPUTBOXAAA_377141",
label : cobis.translate('ASSTS.LBL_ASSTS_PORCENTAE_66428'),
field : 'porcentaje',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXAAA_377141',
name :'porcentaje',
withoutLabel : true,
attribute : 'porcentaje',
entity : 'ReadjustmentDetalilsLoan',
format : '#0.000000',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
isOnChangeControl:true,
required : true,
validationFunctions: new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]),
messagesValidations : {
required: cobis.translate('DSGNR.SYS_DSGNR_MSGREQURF_00032')
},
}
},
]);
this.Spacer2917.id = "Spacer2917";
this.Spacer2917.name = "Spacer2917";
this.Spacer2917.colSpan = 1;
this.Spacer2917.visible= ConstantsApi.mode.All;
this.Spacer2328.id = "Spacer2328";
this.Spacer2328.name = "Spacer2328";
this.Spacer2328.colSpan = 1;
this.Spacer2328.visible= ConstantsApi.mode.All;
this.T_REAJUSTEDEFTF_264 = this.formBuilder.group({
ReadjustmentDetalilsLoan: this.formBuilder.group({
concepto:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_2618_23821.columns,'VA_TEXTINPUTBOXVNC_178141')],
referencial:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_2618_23821.columns,'VA_TEXTINPUTBOXFYD_123141')],
signo:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_2618_23821.columns,'VA_TEXTINPUTBOXIEY_291141')],
factor:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_2618_23821.columns,'VA_TEXTINPUTBOXYTY_525141')],
porcentaje:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_2618_23821.columns,'VA_TEXTINPUTBOXAAA_377141')],
}
),
Loan: this.formBuilder.group({
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
statusCopy:[null],
idType:[null],
endDate:[null],
fondeadorLS:[null],
identityCardNumber:[null],
desOperationType:[null],
redesCont:[null],
newStatus:[null],
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
ReadjustmentLoanCab: this.formBuilder.group({
date:[null],
mantCuota:[null],
secuencial:[null],
desagio:[null],
}
),
});
}
}