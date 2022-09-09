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
public T_ASSTSUFGAMLTW_237!:FormGroup;
public VC_FUNDWJCLLL_877237:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_FUNDOLEPVM_456448 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_FUNDLLHLMN_777448 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_8975_37395: CobisGridModel = new CobisGridModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_FUNDWJCLLL_877237.id="VC_FUNDWJCLLL_877237";
this.VC_FUNDWJCLLL_877237.name="Fund";
this.VC_FUNDWJCLLL_877237.colSpan=1;
this.VC_FUNDWJCLLL_877237.columns=1;
this.VC_FUNDWJCLLL_877237.enabled=ConstantsApi.mode.All;
this.G_FUNDOLEPVM_456448.id="G_FUNDOLEPVM_456448";
this.G_FUNDOLEPVM_456448.name="GroupLayout1485";
this.G_FUNDOLEPVM_456448.columns=1;
this.G_FUNDOLEPVM_456448.childrenGroups = ["G_FUNDLLHLMN_777448"];
this.G_FUNDOLEPVM_456448.colSpan=1;
this.G_FUNDOLEPVM_456448.enabled=ConstantsApi.mode.All;
this.G_FUNDOLEPVM_456448.visible=ConstantsApi.mode.All;
this.G_FUNDLLHLMN_777448.id="G_FUNDLLHLMN_777448";
this.G_FUNDLLHLMN_777448.name="Group1248";
this.G_FUNDLLHLMN_777448.columns=1;
this.G_FUNDLLHLMN_777448.labelOrientation="Top";
this.G_FUNDLLHLMN_777448.colSpan=1;
this.G_FUNDLLHLMN_777448.enabled=ConstantsApi.mode.All;
this.G_FUNDLLHLMN_777448.visible=ConstantsApi.mode.All;
this.G_FUNDLLHLMN_777448.attList = ["fundId","fundName","sponsorId","amountSource","incresedValue","usedValue","availableBalance","reservedValue","statusCode","sourceType","newCustomerCredit","validityDate"];
this.QV_8975_37395.pageSize=10;
this.QV_8975_37395.id='QV_8975_37395';
this.QV_8975_37395.name='QV_8975_37395';
this.QV_8975_37395.pageable=true;
this.QV_8975_37395.sortable=false;
this.QV_8975_37395.resizable=false;
this.QV_8975_37395.scrollable=true
this.QV_8975_37395.confirmRowDeletion=false;
this.QV_8975_37395.exportToExcel=false;
this.QV_8975_37395.exportToPdf=false;
this.QV_8975_37395.height=0;
this.QV_8975_37395.filterableColumns=false;
this.QV_8975_37395.entityName='Fund';
this.QV_8975_37395.appendRecords=false;
this.QV_8975_37395.rowDetail=false;
this.QV_8975_37395.columnMenu = true;
this.QV_8975_37395.editMode=CommonsConstants.GRID_EDIT_MODE_INLINE;
this.QV_8975_37395.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
this.QV_8975_37395.actions=[ComplexConstants.GRID_ACTION_CREATE,ComplexConstants.GRID_ACTION_UPDATE];
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_8975_37395.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXGIY_595448",
label : cobis.translate('ASSTS.LBL_ASSTS_NOMBREDOF_51654'),
field : 'fundName',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXGIY_595448',
name :'fundName',
withoutLabel : true,
attribute : 'fundName',
entity : 'Fund',
maxlength: 100,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXASY_494448",
label : cobis.translate('ASSTS.LBL_ASSTS_FUENTEROO_22709'),
field : 'sponsorId',
visible : ConstantsApi.mode.All,
type : 'combobox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
data$: of([]),
properties :
{
id :'VA_TEXTINPUTBOXASY_494448',
name :'sponsorId',
attribute : 'sponsorId',
entity : 'Fund',
withoutLabel : false,
blankOption : false,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
filterType : FilterType.NONE,
showId : false,
textField : "value",
valueField : "code",
}
},
{
id : "VA_TEXTINPUTBOXNUB_725448",
label : cobis.translate('ASSTS.LBL_ASSTS_MONTOORNI_91217'),
field : 'amountSource',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXNUB_725448',
name :'amountSource',
withoutLabel : true,
attribute : 'amountSource',
entity : 'Fund',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXGDY_608448",
label : cobis.translate('ASSTS.LBL_ASSTS_VALORUTZL_53340'),
field : 'usedValue',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXGDY_608448',
name :'usedValue',
withoutLabel : true,
attribute : 'usedValue',
entity : 'Fund',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXLLE_233448",
label : cobis.translate('ASSTS.LBL_ASSTS_SALDODISO_27034'),
field : 'availableBalance',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXLLE_233448',
name :'availableBalance',
withoutLabel : true,
attribute : 'availableBalance',
entity : 'Fund',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXHTK_710448",
label : cobis.translate('ASSTS.LBL_ASSTS_ESTADOEAI_33340'),
field : 'statusCode',
visible : ConstantsApi.mode.All,
type : 'combobox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
data$: of([]),
properties :
{
id :'VA_TEXTINPUTBOXHTK_710448',
name :'statusCode',
attribute : 'statusCode',
entity : 'Fund',
withoutLabel : false,
blankOption : false,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
filterType : FilterType.NONE,
showId : false,
textField : "value",
valueField : "code",
}
},
{
id : "VA_DATEFIELDFFPDVP_590448",
label : cobis.translate('ASSTS.LBL_ASSTS_FECHAVIGC_60000'),
field : 'validityDate',
visible : ConstantsApi.mode.All,
type : 'datefield',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties : {
id :'VA_DATEFIELDFFPDVP_590448',
name :'validityDate',
withoutLabel : true,
format : cobis.userContext.getValue(cobis.constant.DATE_FORMAT),
attribute : 'validityDate',
textLocked : false,
readonly : ConstantsApi.mode.Query,
entity : 'Fund',
visible : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
}
},
]);
this.T_ASSTSUFGAMLTW_237 = this.formBuilder.group({
Fund: this.formBuilder.group({
fundId:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_8975_37395.columns,'VA_TEXTINPUTBOXYUB_820448')],
fundName:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_8975_37395.columns,'VA_TEXTINPUTBOXGIY_595448')],
sponsorId:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_8975_37395.columns,'VA_TEXTINPUTBOXASY_494448')],
amountSource:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_8975_37395.columns,'VA_TEXTINPUTBOXNUB_725448')],
incresedValue:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_8975_37395.columns,'VA_TEXTINPUTBOXORC_972448')],
usedValue:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_8975_37395.columns,'VA_TEXTINPUTBOXGDY_608448')],
availableBalance:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_8975_37395.columns,'VA_TEXTINPUTBOXLLE_233448')],
reservedValue:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_8975_37395.columns,'VA_TEXTINPUTBOXJTX_572448')],
statusCode:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_8975_37395.columns,'VA_TEXTINPUTBOXHTK_710448')],
sourceType:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_8975_37395.columns,'VA_TEXTINPUTBOXZFG_221448')],
newCustomerCredit:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_8975_37395.columns,'VA_TEXTINPUTBOXDUB_509448')],
validityDate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_8975_37395.columns,'VA_DATEFIELDFFPDVP_590448')],
}
),
});
}
}