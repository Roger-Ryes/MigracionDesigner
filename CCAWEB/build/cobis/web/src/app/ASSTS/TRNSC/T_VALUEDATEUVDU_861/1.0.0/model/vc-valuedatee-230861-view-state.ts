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
public T_VALUEDATEUVDU_861!:FormGroup;
public VC_VALUEDATEE_230861:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_VALUEDAETT_568866 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_VALUEDAETT_751866 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_VALUEDATET_698866 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_VALUEDAETT_261866 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_1244_89323: CobisGridModel = new CobisGridModel();
public G_VALUEDAEEE_507866 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VA_LASTPROCESSDEET_724866: CobisDateFieldModel = new CobisDateFieldModel();
public VA_3610ZOUUEMDZQED_313866: CobisDateFieldModel = new CobisDateFieldModel();
public VA_OBSERVATIONDKBP_175866: CobisTextInputBoxModel = new CobisTextInputBoxModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_VALUEDATEE_230861.id="VC_VALUEDATEE_230861";
this.VC_VALUEDATEE_230861.name="ValueDateForm";
this.VC_VALUEDATEE_230861.colSpan=1;
this.VC_VALUEDATEE_230861.columns=1;
this.VC_VALUEDATEE_230861.enabled=ConstantsApi.mode.All;
this.G_VALUEDAETT_568866.id="G_VALUEDAETT_568866";
this.G_VALUEDAETT_568866.name="GroupLayout1159";
this.G_VALUEDAETT_568866.columns=3;
this.G_VALUEDAETT_568866.childrenGroups = ["G_VALUEDAETT_751866","G_VALUEDATET_698866","G_VALUEDAETT_261866","G_VALUEDAEEE_507866"];
this.G_VALUEDAETT_568866.colSpan=1;
this.G_VALUEDAETT_568866.enabled=ConstantsApi.mode.All;
this.G_VALUEDAETT_568866.visible=ConstantsApi.mode.All;
this.G_VALUEDAETT_751866.id="G_VALUEDAETT_751866";
this.G_VALUEDAETT_751866.name="Group2594";
this.G_VALUEDAETT_751866.columns=3;
this.G_VALUEDAETT_751866.labelOrientation="Top";
this.G_VALUEDAETT_751866.colSpan=1;
this.G_VALUEDAETT_751866.enabled=ConstantsApi.mode.All;
this.G_VALUEDAETT_751866.visible=ConstantsApi.mode.All;
this.G_VALUEDAETT_751866.attList = ["lastProcessDate"];
this.G_VALUEDATET_698866.id="G_VALUEDATET_698866";
this.G_VALUEDATET_698866.name="Group2999";
this.G_VALUEDATET_698866.columns=3;
this.G_VALUEDATET_698866.labelOrientation="Top";
this.G_VALUEDATET_698866.colSpan=1;
this.G_VALUEDATET_698866.enabled=ConstantsApi.mode.All;
this.G_VALUEDATET_698866.visible=ConstantsApi.mode.All;
this.G_VALUEDATET_698866.attList = ["valueDate"];
this.G_VALUEDAETT_261866.id="G_VALUEDAETT_261866";
this.G_VALUEDAETT_261866.name="Group1288";
this.G_VALUEDAETT_261866.columns=3;
this.G_VALUEDAETT_261866.labelOrientation="Top";
this.G_VALUEDAETT_261866.colSpan=3;
this.G_VALUEDAETT_261866.enabled=ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.G_VALUEDAETT_261866.visible=ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.G_VALUEDAETT_261866.attList = ["transactionId","secuential","operation","dateTran","dateRef","status","user"];
this.G_VALUEDAEEE_507866.id="G_VALUEDAEEE_507866";
this.G_VALUEDAEEE_507866.name="Group1222";
this.G_VALUEDAEEE_507866.columns=3;
this.G_VALUEDAEEE_507866.labelOrientation="Top";
this.G_VALUEDAEEE_507866.colSpan=3;
this.G_VALUEDAEEE_507866.enabled=ConstantsApi.mode.All;
this.G_VALUEDAEEE_507866.visible=ConstantsApi.mode.All;
this.G_VALUEDAEEE_507866.attList = ["observation"];
this.VA_LASTPROCESSDEET_724866.label = cobis.translate("ASSTS.LBL_ASSTS_ULTPROCEO_10293");
this.VA_LASTPROCESSDEET_724866.entity = "Loan";
this.VA_LASTPROCESSDEET_724866.attribute = "lastProcessDate";
this.VA_LASTPROCESSDEET_724866.name="lastProcessDate";
this.VA_LASTPROCESSDEET_724866.id="VA_LASTPROCESSDEET_724866";
this.VA_LASTPROCESSDEET_724866.colSpan=3;
this.VA_LASTPROCESSDEET_724866.withoutLabel = false;
this.VA_LASTPROCESSDEET_724866.readOnly = ConstantsApi.mode.Query;
this.VA_LASTPROCESSDEET_724866.enabled = ConstantsApi.mode.Query;
this.VA_LASTPROCESSDEET_724866.visible= ConstantsApi.mode.All;
this.VA_3610ZOUUEMDZQED_313866.label = cobis.translate("ASSTS.LBL_ASSTS_FECHAVALO_78292");
this.VA_3610ZOUUEMDZQED_313866.entity = "ValueDateFilter";
this.VA_3610ZOUUEMDZQED_313866.attribute = "valueDate";
this.VA_3610ZOUUEMDZQED_313866.name="valueDate";
this.VA_3610ZOUUEMDZQED_313866.id="VA_3610ZOUUEMDZQED_313866";
this.VA_3610ZOUUEMDZQED_313866.colSpan=3;
this.VA_3610ZOUUEMDZQED_313866.withoutLabel = false;
this.VA_3610ZOUUEMDZQED_313866.readOnly = ConstantsApi.mode.Query;
this.VA_3610ZOUUEMDZQED_313866.enabled = ConstantsApi.mode.All;
this.VA_3610ZOUUEMDZQED_313866.visible= ConstantsApi.mode.All;
this.VA_3610ZOUUEMDZQED_313866.required = true;
this.VA_3610ZOUUEMDZQED_313866.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_3610ZOUUEMDZQED_313866.messagesValidations = {
required: cobis.translate('DSGNR.SYS_DSGNR_MSGREQURF_00032')
};
this.QV_1244_89323.pageSize=5;
this.QV_1244_89323.id='QV_1244_89323';
this.QV_1244_89323.name='QV_1244_89323';
this.QV_1244_89323.pageable=true;
this.QV_1244_89323.sortable=false;
this.QV_1244_89323.resizable=false;
this.QV_1244_89323.scrollable=true
this.QV_1244_89323.confirmRowDeletion=false;
this.QV_1244_89323.exportToExcel=false;
this.QV_1244_89323.exportToPdf=false;
this.QV_1244_89323.height=0;
this.QV_1244_89323.filterableColumns=false;
this.QV_1244_89323.entityName='TransactionLoan';
this.QV_1244_89323.appendRecords=true;
this.QV_1244_89323.rowDetail=false;
this.QV_1244_89323.columnMenu = true;
this.QV_1244_89323.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_1244_89323.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_1244_89323.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXIIN_213866",
label : cobis.translate('ASSTS.LBL_ASSTS_TRANSACCC_75316'),
field : 'transactionId',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXIIN_213866',
name :'transactionId',
withoutLabel : true,
attribute : 'transactionId',
entity : 'TransactionLoan',
tooltip : cobis.translate('ASSTS.LBL_ASSTS_TRANSACCI_56568'),
maxlength: 10,
readOnly : ConstantsApi.mode.Query,
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
id : "VA_TEXTINPUTBOXMEP_425866",
label : cobis.translate('ASSTS.LBL_ASSTS_SECUENCAA_14570'),
field : 'secuential',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXMEP_425866',
name :'secuential',
withoutLabel : true,
attribute : 'secuential',
entity : 'TransactionLoan',
tooltip : cobis.translate('ASSTS.LBL_ASSTS_SECUENCAA_14570'),
readOnly : ConstantsApi.mode.Query,
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
id : "VA_TEXTINPUTBOXQOK_378866",
label : cobis.translate('ASSTS.LBL_ASSTS_PRESTAMOO_68068'),
field : 'operation',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXQOK_378866',
name :'operation',
withoutLabel : true,
attribute : 'operation',
entity : 'TransactionLoan',
tooltip : cobis.translate('ASSTS.LBL_ASSTS_PRSTAMOCV_96028'),
maxlength: 20,
readOnly : ConstantsApi.mode.Query,
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
id : "VA_TEXTINPUTBOXSNL_252866",
label : cobis.translate('ASSTS.LBL_ASSTS_FECHATRNN_93009'),
field : 'dateTran',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXSNL_252866',
name :'dateTran',
withoutLabel : true,
attribute : 'dateTran',
entity : 'TransactionLoan',
tooltip : cobis.translate('ASSTS.LBL_ASSTS_FECHATRNN_93009'),
readOnly : ConstantsApi.mode.Query,
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
id : "VA_TEXTINPUTBOXYSE_969866",
label : cobis.translate('ASSTS.LBL_ASSTS_FECHAREFF_99584'),
field : 'dateRef',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXYSE_969866',
name :'dateRef',
withoutLabel : true,
attribute : 'dateRef',
entity : 'TransactionLoan',
tooltip : cobis.translate('ASSTS.LBL_ASSTS_FECHAREFF_99584'),
readOnly : ConstantsApi.mode.Query,
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
id : "VA_TEXTINPUTBOXZAT_127866",
label : cobis.translate('ASSTS.LBL_ASSTS_ESTADOEAI_33340'),
field : 'status',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXZAT_127866',
name :'status',
withoutLabel : true,
attribute : 'status',
entity : 'TransactionLoan',
tooltip : cobis.translate('ASSTS.LBL_ASSTS_ESTADOEAI_33340'),
maxlength: 10,
readOnly : ConstantsApi.mode.Query,
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
id : "VA_TEXTINPUTBOXARG_897866",
label : cobis.translate('ASSTS.LBL_ASSTS_USUARIOTE_48852'),
field : 'user',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXARG_897866',
name :'user',
withoutLabel : true,
attribute : 'user',
entity : 'TransactionLoan',
tooltip : cobis.translate('ASSTS.LBL_ASSTS_USUARIOTE_48852'),
maxlength: 14,
readOnly : ConstantsApi.mode.Query,
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
]);
this.VA_OBSERVATIONDKBP_175866.label = cobis.translate("ASSTS.LBL_ASSTS_OBSERVANN_50010");
this.VA_OBSERVATIONDKBP_175866.entity = "ValueDateFilter";
this.VA_OBSERVATIONDKBP_175866.attribute = "observation";
this.VA_OBSERVATIONDKBP_175866.maxlength= 62;
this.VA_OBSERVATIONDKBP_175866.textCase= TextCaseOptions.UPPER_CASE;
this.VA_OBSERVATIONDKBP_175866.name="observation";
this.VA_OBSERVATIONDKBP_175866.id="VA_OBSERVATIONDKBP_175866";
this.VA_OBSERVATIONDKBP_175866.colSpan=3;
this.VA_OBSERVATIONDKBP_175866.withoutLabel = false;
this.VA_OBSERVATIONDKBP_175866.readOnly = ConstantsApi.mode.Query;
this.VA_OBSERVATIONDKBP_175866.enabled = ConstantsApi.mode.All;
this.VA_OBSERVATIONDKBP_175866.visible= ConstantsApi.mode.All;
this.VA_OBSERVATIONDKBP_175866.required = true;
this.VA_OBSERVATIONDKBP_175866.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_OBSERVATIONDKBP_175866.messagesValidations = {
required: cobis.translate('ASSTS.MSG_ASSTS_LAOBSERIA_20926')
};
this.T_VALUEDATEUVDU_861 = this.formBuilder.group({
Loan: this.formBuilder.group({
lastProcessDate:[{value: null, disabled: !this.VA_LASTPROCESSDEET_724866.visible},CobisDesignerUtil.getValidationFunctions(this.VA_LASTPROCESSDEET_724866.validationFunctions!)],
numProcedure:[null],
quotaCredit:[null],
statusID:[null],
maxDateProrogation:[null],
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
ValueDateFilter: this.formBuilder.group({
valueDate:[{value: null, disabled: !this.VA_3610ZOUUEMDZQED_313866.visible},CobisDesignerUtil.getValidationFunctions(this.VA_3610ZOUUEMDZQED_313866.validationFunctions!)],
observation:[{value: null, disabled: !this.VA_OBSERVATIONDKBP_175866.visible},CobisDesignerUtil.getValidationFunctions(this.VA_OBSERVATIONDKBP_175866.validationFunctions!)],
operationType:[null],
indexTrn:[null],
option:[null],
}
),
TransactionLoan: this.formBuilder.group({
transactionId:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_1244_89323.columns,'VA_TEXTINPUTBOXIIN_213866')],
secuential:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_1244_89323.columns,'VA_TEXTINPUTBOXMEP_425866')],
operation:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_1244_89323.columns,'VA_TEXTINPUTBOXQOK_378866')],
dateTran:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_1244_89323.columns,'VA_TEXTINPUTBOXSNL_252866')],
dateRef:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_1244_89323.columns,'VA_TEXTINPUTBOXYSE_969866')],
status:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_1244_89323.columns,'VA_TEXTINPUTBOXZAT_127866')],
user:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_1244_89323.columns,'VA_TEXTINPUTBOXARG_897866')],
}
),
});
}
}