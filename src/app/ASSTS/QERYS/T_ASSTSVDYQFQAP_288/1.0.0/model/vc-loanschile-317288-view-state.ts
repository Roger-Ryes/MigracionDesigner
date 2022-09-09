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
public T_ASSTSVDYQFQAP_288!:FormGroup;
public VC_LOANSCHILE_317288:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANSCHLRN_916807 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_AX75_BUU48: CobisGridModel = new CobisGridModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_LOANSCHILE_317288.id="VC_LOANSCHILE_317288";
this.VC_LOANSCHILE_317288.name="QueryLoansChildren";
this.VC_LOANSCHILE_317288.colSpan=1;
this.VC_LOANSCHILE_317288.columns=1;
this.VC_LOANSCHILE_317288.enabled=ConstantsApi.mode.All;
this.G_LOANSCHLRN_916807.id="G_LOANSCHLRN_916807";
this.G_LOANSCHLRN_916807.name="Group1570";
this.G_LOANSCHLRN_916807.columns=1;
this.G_LOANSCHLRN_916807.labelOrientation="Top";
this.G_LOANSCHLRN_916807.colSpan=1;
this.G_LOANSCHLRN_916807.enabled=ConstantsApi.mode.All;
this.G_LOANSCHLRN_916807.visible=ConstantsApi.mode.All;
this.G_LOANSCHLRN_916807.attList = ["desOperationType","loanBankID","clientName","amount","desStatus","expirationDate","codCurrency","disbursementDate","clientID","numProcedure","officerID","officeID","previousOper","loanID","adjustment","redesCont","operationTypeID"];
this.QV_AX75_BUU48.pageSize=10;
this.QV_AX75_BUU48.id='QV_AX75_BUU48';
this.QV_AX75_BUU48.name='QV_AX75_BUU48';
this.QV_AX75_BUU48.pageable=true;
this.QV_AX75_BUU48.sortable=false;
this.QV_AX75_BUU48.resizable=false;
this.QV_AX75_BUU48.scrollable=true
this.QV_AX75_BUU48.confirmRowDeletion=false;
this.QV_AX75_BUU48.exportToExcel=false;
this.QV_AX75_BUU48.exportToPdf=false;
this.QV_AX75_BUU48.height=0;
this.QV_AX75_BUU48.filterableColumns=false;
this.QV_AX75_BUU48.entityName='LoanChildren';
this.QV_AX75_BUU48.appendRecords=false;
this.QV_AX75_BUU48.rowDetail=false;
this.QV_AX75_BUU48.columnMenu = true;
this.QV_AX75_BUU48.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_AX75_BUU48.modeSelection=ComplexConstants.GRID_MODE_SELECTION_NONE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_AX75_BUU48.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXEIA_503807",
label : cobis.translate('ASSTS.LBL_ASSTS_TIPOPREMM_37747'),
field : 'desOperationType',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXEIA_503807',
name :'desOperationType',
withoutLabel : true,
attribute : 'desOperationType',
entity : 'LoanChildren',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXOCE_836807",
label : cobis.translate('ASSTS.LBL_ASSTS_NUMPRSTAM_17241'),
field : 'loanBankID',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 120,
properties :
{
id :'VA_TEXTINPUTBOXOCE_836807',
name :'loanBankID',
withoutLabel : true,
attribute : 'loanBankID',
entity : 'LoanChildren',
maxlength: 24,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXOQN_553807",
label : cobis.translate('ASSTS.LBL_ASSTS_NOMBRECNI_63306'),
field : 'clientName',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 250,
properties :
{
id :'VA_TEXTINPUTBOXOQN_553807',
name :'clientName',
withoutLabel : true,
attribute : 'clientName',
entity : 'LoanChildren',
maxlength: 64,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXRFT_967807",
label : cobis.translate('ASSTS.LBL_ASSTS_MONTOPROM_71868'),
field : 'amount',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 120,
properties :
{
id :'VA_TEXTINPUTBOXRFT_967807',
name :'amount',
withoutLabel : true,
attribute : 'amount',
entity : 'LoanChildren',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXDHX_705807",
label : cobis.translate('ASSTS.LBL_ASSTS_ESTADOPEM_54793'),
field : 'desStatus',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 120,
properties :
{
id :'VA_TEXTINPUTBOXDHX_705807',
name :'desStatus',
withoutLabel : true,
attribute : 'desStatus',
entity : 'LoanChildren',
maxlength: 64,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DATEFIELDQDTSRZ_983807",
label : cobis.translate('ASSTS.LBL_ASSTS_FECHAVENE_58948'),
field : 'expirationDate',
visible : ConstantsApi.mode.All,
type : 'datefield',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 130,
properties : {
id :'VA_DATEFIELDQDTSRZ_983807',
name :'expirationDate',
withoutLabel : true,
format : cobis.userContext.getValue(cobis.constant.DATE_FORMAT),
attribute : 'expirationDate',
textLocked : false,
readonly : ConstantsApi.mode.Query,
entity : 'LoanChildren',
visible : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
}
},
{
id : "VA_TEXTINPUTBOXTWE_108807",
label : cobis.translate('ASSTS.LBL_ASSTS_CODMONEDD_59972'),
field : 'codCurrency',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXTWE_108807',
name :'codCurrency',
withoutLabel : true,
attribute : 'codCurrency',
entity : 'LoanChildren',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DATEFIELDLLPGBL_371807",
label : cobis.translate('ASSTS.LBL_ASSTS_FECHADEBE_42043'),
field : 'disbursementDate',
visible : ConstantsApi.mode.All,
type : 'datefield',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 130,
properties : {
id :'VA_DATEFIELDLLPGBL_371807',
name :'disbursementDate',
withoutLabel : true,
format : cobis.userContext.getValue(cobis.constant.DATE_FORMAT),
attribute : 'disbursementDate',
textLocked : false,
readonly : ConstantsApi.mode.Query,
entity : 'LoanChildren',
visible : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
}
},
{
id : "VA_TEXTINPUTBOXKYM_971807",
label : cobis.translate('ASSTS.LBL_ASSTS_CDIGOCLEN_93241'),
field : 'clientID',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 120,
properties :
{
id :'VA_TEXTINPUTBOXKYM_971807',
name :'clientID',
withoutLabel : true,
attribute : 'clientID',
entity : 'LoanChildren',
maxlength: 4,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXHQP_550807",
label : cobis.translate('ASSTS.LBL_ASSTS_NUMTRMIET_51783'),
field : 'numProcedure',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXHQP_550807',
name :'numProcedure',
withoutLabel : true,
attribute : 'numProcedure',
entity : 'LoanChildren',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.T_ASSTSVDYQFQAP_288 = this.formBuilder.group({
LoanChildren: this.formBuilder.group({
desOperationType:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_AX75_BUU48.columns,'VA_TEXTINPUTBOXEIA_503807')],
loanBankID:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_AX75_BUU48.columns,'VA_TEXTINPUTBOXOCE_836807')],
clientName:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_AX75_BUU48.columns,'VA_TEXTINPUTBOXOQN_553807')],
amount:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_AX75_BUU48.columns,'VA_TEXTINPUTBOXRFT_967807')],
desStatus:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_AX75_BUU48.columns,'VA_TEXTINPUTBOXDHX_705807')],
expirationDate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_AX75_BUU48.columns,'VA_DATEFIELDQDTSRZ_983807')],
codCurrency:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_AX75_BUU48.columns,'VA_TEXTINPUTBOXTWE_108807')],
disbursementDate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_AX75_BUU48.columns,'VA_DATEFIELDLLPGBL_371807')],
clientID:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_AX75_BUU48.columns,'VA_TEXTINPUTBOXKYM_971807')],
numProcedure:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_AX75_BUU48.columns,'VA_TEXTINPUTBOXHQP_550807')],
officerID:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_AX75_BUU48.columns,'VA_TEXTINPUTBOXPHC_993807')],
officeID:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_AX75_BUU48.columns,'VA_TEXTINPUTBOXIDZ_914807')],
previousOper:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_AX75_BUU48.columns,'VA_TEXTINPUTBOXGOJ_320807')],
loanID:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_AX75_BUU48.columns,'VA_TEXTINPUTBOXBBE_291807')],
adjustment:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_AX75_BUU48.columns,'VA_TEXTINPUTBOXSVX_903807')],
redesCont:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_AX75_BUU48.columns,'VA_TEXTINPUTBOXVWI_583807')],
operationTypeID:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_AX75_BUU48.columns,'VA_TEXTINPUTBOXLTB_162807')],
}
),
});
}
}