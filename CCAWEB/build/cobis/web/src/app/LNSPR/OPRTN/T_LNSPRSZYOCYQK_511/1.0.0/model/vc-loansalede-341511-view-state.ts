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
public T_LNSPRSZYOCYQK_511!:FormGroup;
public VC_LOANSALEDE_341511:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANSALEDI_680754 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_HF48_XTR41: CobisGridModel = new CobisGridModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_LOANSALEDE_341511.id="VC_LOANSALEDE_341511";
this.VC_LOANSALEDE_341511.name="LoanSaleDetailForm";
this.VC_LOANSALEDE_341511.colSpan=1;
this.VC_LOANSALEDE_341511.columns=1;
this.VC_LOANSALEDE_341511.enabled=ConstantsApi.mode.All;
this.G_LOANSALEDI_680754.id="G_LOANSALEDI_680754";
this.G_LOANSALEDI_680754.name="Group1724";
this.G_LOANSALEDI_680754.columns=1;
this.G_LOANSALEDI_680754.labelOrientation="Top";
this.G_LOANSALEDI_680754.colSpan=1;
this.G_LOANSALEDI_680754.enabled=ConstantsApi.mode.All;
this.G_LOANSALEDI_680754.visible=ConstantsApi.mode.All;
this.G_LOANSALEDI_680754.attList = ["operation","dateSale","state","error","errorDescription"];
this.QV_HF48_XTR41.pageSize=5;
this.QV_HF48_XTR41.id='QV_HF48_XTR41';
this.QV_HF48_XTR41.name='QV_HF48_XTR41';
this.QV_HF48_XTR41.pageable=true;
this.QV_HF48_XTR41.sortable=false;
this.QV_HF48_XTR41.resizable=true;
this.QV_HF48_XTR41.scrollable=true
this.QV_HF48_XTR41.confirmRowDeletion=false;
this.QV_HF48_XTR41.exportToExcel=true;
this.QV_HF48_XTR41.exportToPdf=false;
this.QV_HF48_XTR41.height=0;
this.QV_HF48_XTR41.filterableColumns=false;
this.QV_HF48_XTR41.entityName='LoanSaleDetailList';
this.QV_HF48_XTR41.appendRecords=true;
this.QV_HF48_XTR41.rowDetail=false;
this.QV_HF48_XTR41.columnMenu = true;
this.QV_HF48_XTR41.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_HF48_XTR41.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_HF48_XTR41.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXUVP_819754",
label : cobis.translate('LNSPR.LBL_LOANS_OPERACIOO_86900'),
field : 'operation',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 40,
properties :
{
id :'VA_TEXTINPUTBOXUVP_819754',
name :'operation',
withoutLabel : true,
attribute : 'operation',
entity : 'LoanSaleDetailList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DATEFIELDDMPRTD_928754",
label : cobis.translate('LNSPR.LBL_LNSPR_FECHAVETA_87721'),
field : 'dateSale',
visible : ConstantsApi.mode.All,
type : 'datefield',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_DATEFIELDDMPRTD_928754',
name :'dateSale',
withoutLabel : true,
format : cobis.userContext.getValue(cobis.constant.DATE_FORMAT),
attribute : 'dateSale',
textLocked : false,
readonly : ConstantsApi.mode.Query,
entity : 'LoanSaleDetailList',
visible : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
}
},
{
id : "VA_TEXTINPUTBOXVIO_501754",
label : cobis.translate('LNSPR.LBL_LNSPR_ESTADOEAI_33340'),
field : 'state',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 30,
properties :
{
id :'VA_TEXTINPUTBOXVIO_501754',
name :'state',
withoutLabel : true,
attribute : 'state',
entity : 'LoanSaleDetailList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXCLS_106754",
label : cobis.translate('LNSPR.LBL_LNSPR_ERRORAWHP_83580'),
field : 'error',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 30,
properties :
{
id :'VA_TEXTINPUTBOXCLS_106754',
name :'error',
withoutLabel : true,
attribute : 'error',
entity : 'LoanSaleDetailList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXCPG_885754",
label : cobis.translate('LNSPR.LBL_LNSPR_DESCRIPIN_18186'),
field : 'errorDescription',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXCPG_885754',
name :'errorDescription',
withoutLabel : true,
attribute : 'errorDescription',
entity : 'LoanSaleDetailList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.T_LNSPRSZYOCYQK_511 = this.formBuilder.group({
LoanSaleDetailList: this.formBuilder.group({
operation:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_HF48_XTR41.columns,'VA_TEXTINPUTBOXUVP_819754')],
dateSale:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_HF48_XTR41.columns,'VA_DATEFIELDDMPRTD_928754')],
state:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_HF48_XTR41.columns,'VA_TEXTINPUTBOXVIO_501754')],
error:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_HF48_XTR41.columns,'VA_TEXTINPUTBOXCLS_106754')],
errorDescription:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_HF48_XTR41.columns,'VA_TEXTINPUTBOXCPG_885754')],
sequential:[null],
secOperation:[null],
}
),
});
}
}