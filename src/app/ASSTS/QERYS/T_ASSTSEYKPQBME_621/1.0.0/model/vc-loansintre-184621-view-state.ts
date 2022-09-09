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
public T_ASSTSEYKPQBME_621!:FormGroup;
public VC_LOANSINTRE_184621:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANSINCEC_481291 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_VE62_BRX74: CobisGridModel = new CobisGridModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_LOANSINTRE_184621.id="VC_LOANSINTRE_184621";
this.VC_LOANSINTRE_184621.name="QueryLoansIntercycle";
this.VC_LOANSINTRE_184621.colSpan=1;
this.VC_LOANSINTRE_184621.columns=1;
this.VC_LOANSINTRE_184621.enabled=ConstantsApi.mode.All;
this.G_LOANSINCEC_481291.id="G_LOANSINCEC_481291";
this.G_LOANSINCEC_481291.name="Group1353";
this.G_LOANSINCEC_481291.columns=1;
this.G_LOANSINCEC_481291.labelOrientation="Top";
this.G_LOANSINCEC_481291.colSpan=1;
this.G_LOANSINCEC_481291.enabled=ConstantsApi.mode.All;
this.G_LOANSINCEC_481291.visible=ConstantsApi.mode.All;
this.G_LOANSINCEC_481291.attList = ["desOperationType","loanBankID","clientName","amount","desStatus","expirationDate","codCurrency","disbursementDate","clientID","numProcedure","officerID","officeID","previousOper","loanID","adjustment","redesCont","operationTypeID"];
this.QV_VE62_BRX74.pageSize=10;
this.QV_VE62_BRX74.id='QV_VE62_BRX74';
this.QV_VE62_BRX74.name='QV_VE62_BRX74';
this.QV_VE62_BRX74.pageable=true;
this.QV_VE62_BRX74.sortable=false;
this.QV_VE62_BRX74.resizable=false;
this.QV_VE62_BRX74.scrollable=true
this.QV_VE62_BRX74.confirmRowDeletion=false;
this.QV_VE62_BRX74.exportToExcel=false;
this.QV_VE62_BRX74.exportToPdf=false;
this.QV_VE62_BRX74.height=0;
this.QV_VE62_BRX74.filterableColumns=false;
this.QV_VE62_BRX74.entityName='LoanIntercycle';
this.QV_VE62_BRX74.appendRecords=false;
this.QV_VE62_BRX74.rowDetail=false;
this.QV_VE62_BRX74.columnMenu = true;
this.QV_VE62_BRX74.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_VE62_BRX74.modeSelection=ComplexConstants.GRID_MODE_SELECTION_NONE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_VE62_BRX74.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXCPU_105291",
label : cobis.translate('ASSTS.LBL_ASSTS_TIPOPREMM_37747'),
field : 'desOperationType',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXCPU_105291',
name :'desOperationType',
withoutLabel : true,
attribute : 'desOperationType',
entity : 'LoanIntercycle',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXJIE_823291",
label : cobis.translate('ASSTS.LBL_ASSTS_NUMPRSTAM_17241'),
field : 'loanBankID',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 120,
properties :
{
id :'VA_TEXTINPUTBOXJIE_823291',
name :'loanBankID',
withoutLabel : true,
attribute : 'loanBankID',
entity : 'LoanIntercycle',
maxlength: 24,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXWEU_957291",
label : cobis.translate('ASSTS.LBL_ASSTS_NOMBRECNI_63306'),
field : 'clientName',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 250,
properties :
{
id :'VA_TEXTINPUTBOXWEU_957291',
name :'clientName',
withoutLabel : true,
attribute : 'clientName',
entity : 'LoanIntercycle',
maxlength: 64,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXTIL_871291",
label : cobis.translate('ASSTS.LBL_ASSTS_MONTOPROM_71868'),
field : 'amount',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 120,
properties :
{
id :'VA_TEXTINPUTBOXTIL_871291',
name :'amount',
withoutLabel : true,
attribute : 'amount',
entity : 'LoanIntercycle',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXCTM_542291",
label : cobis.translate('ASSTS.LBL_ASSTS_ESTADOPEM_54793'),
field : 'desStatus',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 120,
properties :
{
id :'VA_TEXTINPUTBOXCTM_542291',
name :'desStatus',
withoutLabel : true,
attribute : 'desStatus',
entity : 'LoanIntercycle',
maxlength: 64,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DATEFIELDPTAOWQ_552291",
label : cobis.translate('ASSTS.LBL_ASSTS_FECHAVEMT_35968'),
field : 'expirationDate',
visible : ConstantsApi.mode.All,
type : 'datefield',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 130,
properties : {
id :'VA_DATEFIELDPTAOWQ_552291',
name :'expirationDate',
withoutLabel : true,
format : cobis.userContext.getValue(cobis.constant.DATE_FORMAT),
attribute : 'expirationDate',
textLocked : false,
readonly : ConstantsApi.mode.Query,
entity : 'LoanIntercycle',
visible : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
}
},
{
id : "VA_TEXTINPUTBOXYCA_817291",
label : cobis.translate('ASSTS.LBL_ASSTS_CODMONEDD_59972'),
field : 'codCurrency',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXYCA_817291',
name :'codCurrency',
withoutLabel : true,
attribute : 'codCurrency',
entity : 'LoanIntercycle',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DATEFIELDWNGFQM_623291",
label : cobis.translate('ASSTS.LBL_ASSTS_FECHADEBE_42043'),
field : 'disbursementDate',
visible : ConstantsApi.mode.All,
type : 'datefield',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 130,
properties : {
id :'VA_DATEFIELDWNGFQM_623291',
name :'disbursementDate',
withoutLabel : true,
format : cobis.userContext.getValue(cobis.constant.DATE_FORMAT),
attribute : 'disbursementDate',
textLocked : false,
readonly : ConstantsApi.mode.Query,
entity : 'LoanIntercycle',
visible : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
}
},
{
id : "VA_TEXTINPUTBOXGFS_556291",
label : cobis.translate('ASSTS.LBL_ASSTS_CDIGOCLEN_93241'),
field : 'clientID',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 120,
properties :
{
id :'VA_TEXTINPUTBOXGFS_556291',
name :'clientID',
withoutLabel : true,
attribute : 'clientID',
entity : 'LoanIntercycle',
maxlength: 4,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXYFU_218291",
label : cobis.translate('ASSTS.LBL_ASSTS_NUMTRMIET_51783'),
field : 'numProcedure',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXYFU_218291',
name :'numProcedure',
withoutLabel : true,
attribute : 'numProcedure',
entity : 'LoanIntercycle',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.T_ASSTSEYKPQBME_621 = this.formBuilder.group({
LoanIntercycle: this.formBuilder.group({
desOperationType:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_VE62_BRX74.columns,'VA_TEXTINPUTBOXCPU_105291')],
loanBankID:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_VE62_BRX74.columns,'VA_TEXTINPUTBOXJIE_823291')],
clientName:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_VE62_BRX74.columns,'VA_TEXTINPUTBOXWEU_957291')],
amount:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_VE62_BRX74.columns,'VA_TEXTINPUTBOXTIL_871291')],
desStatus:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_VE62_BRX74.columns,'VA_TEXTINPUTBOXCTM_542291')],
expirationDate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_VE62_BRX74.columns,'VA_DATEFIELDPTAOWQ_552291')],
codCurrency:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_VE62_BRX74.columns,'VA_TEXTINPUTBOXYCA_817291')],
disbursementDate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_VE62_BRX74.columns,'VA_DATEFIELDWNGFQM_623291')],
clientID:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_VE62_BRX74.columns,'VA_TEXTINPUTBOXGFS_556291')],
numProcedure:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_VE62_BRX74.columns,'VA_TEXTINPUTBOXYFU_218291')],
officerID:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_VE62_BRX74.columns,'VA_TEXTINPUTBOXHWZ_788291')],
officeID:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_VE62_BRX74.columns,'VA_TEXTINPUTBOXDAC_519291')],
previousOper:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_VE62_BRX74.columns,'VA_TEXTINPUTBOXOUZ_520291')],
loanID:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_VE62_BRX74.columns,'VA_TEXTINPUTBOXPVE_309291')],
adjustment:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_VE62_BRX74.columns,'VA_TEXTINPUTBOXHIU_311291')],
redesCont:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_VE62_BRX74.columns,'VA_TEXTINPUTBOXKVV_478291')],
operationTypeID:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_VE62_BRX74.columns,'VA_TEXTINPUTBOXDNV_217291')],
}
),
});
}
}