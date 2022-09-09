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
public T_LOANWARRANTYT_123!:FormGroup;
public VC_LOANWARRTT_422123:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANWARANT_597867 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_1941_28530: CobisGridModel = new CobisGridModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_LOANWARRTT_422123.id="VC_LOANWARRTT_422123";
this.VC_LOANWARRTT_422123.name="QueryLoanWarrantyForm";
this.VC_LOANWARRTT_422123.colSpan=1;
this.VC_LOANWARRTT_422123.columns=1;
this.VC_LOANWARRTT_422123.enabled=ConstantsApi.mode.All;
this.G_LOANWARANT_597867.id="G_LOANWARANT_597867";
this.G_LOANWARANT_597867.name="Group1332";
this.G_LOANWARANT_597867.columns=1;
this.G_LOANWARANT_597867.labelOrientation="Top";
this.G_LOANWARANT_597867.colSpan=1;
this.G_LOANWARANT_597867.enabled=ConstantsApi.mode.All;
this.G_LOANWARANT_597867.visible=ConstantsApi.mode.All;
this.G_LOANWARANT_597867.attList = ["warranty","statusWarranty","description","customerID","customer","currentValue","currencyID","createdOn"];
this.QV_1941_28530.pageSize=10;
this.QV_1941_28530.id='QV_1941_28530';
this.QV_1941_28530.name='QV_1941_28530';
this.QV_1941_28530.pageable=true;
this.QV_1941_28530.sortable=false;
this.QV_1941_28530.resizable=true;
this.QV_1941_28530.scrollable=true
this.QV_1941_28530.confirmRowDeletion=false;
this.QV_1941_28530.exportToExcel=false;
this.QV_1941_28530.exportToPdf=false;
this.QV_1941_28530.height=0;
this.QV_1941_28530.filterableColumns=false;
this.QV_1941_28530.entityName='LoanWarranty';
this.QV_1941_28530.appendRecords=true;
this.QV_1941_28530.rowDetail=false;
this.QV_1941_28530.columnMenu = true;
this.QV_1941_28530.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_1941_28530.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_1941_28530.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXASD_283867",
label : cobis.translate('ASSTS.LBL_ASSTS_GARANTIAA_11754'),
field : 'warranty',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXASD_283867',
name :'warranty',
withoutLabel : true,
attribute : 'warranty',
entity : 'LoanWarranty',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXLGJ_305867",
label : cobis.translate('ASSTS.LBL_ASSTS_ESTADOGIA_21734'),
field : 'statusWarranty',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXLGJ_305867',
name :'statusWarranty',
withoutLabel : true,
attribute : 'statusWarranty',
entity : 'LoanWarranty',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXGCL_579867",
label : cobis.translate('ASSTS.LBL_ASSTS_DESCRIPOO_35259'),
field : 'description',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXGCL_579867',
name :'description',
withoutLabel : true,
attribute : 'description',
entity : 'LoanWarranty',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXYZM_796867",
label : cobis.translate('ASSTS.LBL_ASSTS_CODIGOCIE_36603'),
field : 'customerID',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXYZM_796867',
name :'customerID',
withoutLabel : true,
attribute : 'customerID',
entity : 'LoanWarranty',
format : '#######',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXYSC_521867",
label : cobis.translate('ASSTS.LBL_ASSTS_NOMBRECNI_63306'),
field : 'customer',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXYSC_521867',
name :'customer',
withoutLabel : true,
attribute : 'customer',
entity : 'LoanWarranty',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXIAU_379867",
label : cobis.translate('ASSTS.LBL_ASSTS_VALORACUA_99891'),
field : 'currentValue',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXIAU_379867',
name :'currentValue',
withoutLabel : true,
attribute : 'currentValue',
entity : 'LoanWarranty',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXVWC_252867",
label : cobis.translate('ASSTS.LBL_ASSTS_MONEDATUB_92849'),
field : 'currencyID',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXVWC_252867',
name :'currencyID',
withoutLabel : true,
attribute : 'currencyID',
entity : 'LoanWarranty',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXRQN_217867",
label : cobis.translate('ASSTS.LBL_ASSTS_FECHAINGG_82521'),
field : 'createdOn',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXRQN_217867',
name :'createdOn',
withoutLabel : true,
attribute : 'createdOn',
entity : 'LoanWarranty',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.T_LOANWARRANTYT_123 = this.formBuilder.group({
LoanWarranty: this.formBuilder.group({
warranty:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_1941_28530.columns,'VA_TEXTINPUTBOXASD_283867')],
statusWarranty:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_1941_28530.columns,'VA_TEXTINPUTBOXLGJ_305867')],
description:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_1941_28530.columns,'VA_TEXTINPUTBOXGCL_579867')],
customerID:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_1941_28530.columns,'VA_TEXTINPUTBOXYZM_796867')],
customer:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_1941_28530.columns,'VA_TEXTINPUTBOXYSC_521867')],
currentValue:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_1941_28530.columns,'VA_TEXTINPUTBOXIAU_379867')],
currencyID:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_1941_28530.columns,'VA_TEXTINPUTBOXVWC_252867')],
createdOn:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_1941_28530.columns,'VA_TEXTINPUTBOXRQN_217867')],
}
),
});
}
}