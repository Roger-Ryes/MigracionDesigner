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
public T_BANKACCOUNTOA_777!:FormGroup;
public VC_BANKACCOMU_224777:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_BANKACCSON_782523 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_1987_24851: CobisGridModel = new CobisGridModel();
public G_BANKACCAUT_856523 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VA_VASIMPLELABELLL_811523: CobisTextLabelModel = new CobisTextLabelModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_BANKACCOMU_224777.id="VC_BANKACCOMU_224777";
this.VC_BANKACCOMU_224777.name="BankAccountsModal";
this.VC_BANKACCOMU_224777.colSpan=1;
this.VC_BANKACCOMU_224777.columns=1;
this.VC_BANKACCOMU_224777.enabled=ConstantsApi.mode.All;
this.G_BANKACCSON_782523.id="G_BANKACCSON_782523";
this.G_BANKACCSON_782523.name="Group1679";
this.G_BANKACCSON_782523.columns=1;
this.G_BANKACCSON_782523.labelOrientation="Top";
this.G_BANKACCSON_782523.colSpan=1;
this.G_BANKACCSON_782523.enabled=ConstantsApi.mode.All;
this.G_BANKACCSON_782523.visible=ConstantsApi.mode.All;
this.G_BANKACCSON_782523.attList = ["account","customerCode","accountName"];
this.G_BANKACCAUT_856523.id="G_BANKACCAUT_856523";
this.G_BANKACCAUT_856523.name="Group1515";
this.G_BANKACCAUT_856523.columns=3;
this.G_BANKACCAUT_856523.labelOrientation="Top";
this.G_BANKACCAUT_856523.colSpan=1;
this.G_BANKACCAUT_856523.enabled=ConstantsApi.mode.All;
this.G_BANKACCAUT_856523.visible=ConstantsApi.mode.All;
this.QV_1987_24851.id='QV_1987_24851';
this.QV_1987_24851.name='QV_1987_24851';
this.QV_1987_24851.pageable=false;
this.QV_1987_24851.sortable=false;
this.QV_1987_24851.resizable=false;
this.QV_1987_24851.scrollable=false
this.QV_1987_24851.confirmRowDeletion=false;
this.QV_1987_24851.exportToExcel=false;
this.QV_1987_24851.exportToPdf=false;
this.QV_1987_24851.height=0;
this.QV_1987_24851.filterableColumns=false;
this.QV_1987_24851.entityName='BankAccount';
this.QV_1987_24851.appendRecords=false;
this.QV_1987_24851.rowDetail=false;
this.QV_1987_24851.columnMenu = true;
this.QV_1987_24851.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_1987_24851.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_1987_24851.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXHQK_112523",
label : cobis.translate('ASSTS.LBL_ASSTS_CUENTADIA_22037'),
field : 'account',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties :
{
id :'VA_TEXTINPUTBOXHQK_112523',
name :'account',
withoutLabel : true,
attribute : 'account',
entity : 'BankAccount',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXYWN_932523",
label : cobis.translate('ASSTS.LBL_ASSTS_CLIENTEWV_22561'),
field : 'customerCode',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties :
{
id :'VA_TEXTINPUTBOXYWN_932523',
name :'customerCode',
withoutLabel : true,
attribute : 'customerCode',
entity : 'BankAccount',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXRZN_728523",
label : cobis.translate('ASSTS.LBL_ASSTS_NOMBREULS_81822'),
field : 'accountName',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties :
{
id :'VA_TEXTINPUTBOXRZN_728523',
name :'accountName',
withoutLabel : true,
attribute : 'accountName',
entity : 'BankAccount',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.VA_VASIMPLELABELLL_811523.id = "VA_VASIMPLELABELLL_811523";
this.VA_VASIMPLELABELLL_811523.name = "Attribute2";
this.VA_VASIMPLELABELLL_811523.colSpan = 3;
this.VA_VASIMPLELABELLL_811523.withoutLabel = false;
this.VA_VASIMPLELABELLL_811523.enabled = ConstantsApi.mode.None;
this.VA_VASIMPLELABELLL_811523.visible= ConstantsApi.mode.All;
this.T_BANKACCOUNTOA_777 = this.formBuilder.group({
BankAccount: this.formBuilder.group({
account:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_1987_24851.columns,'VA_TEXTINPUTBOXHQK_112523')],
customerCode:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_1987_24851.columns,'VA_TEXTINPUTBOXYWN_932523')],
accountName:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_1987_24851.columns,'VA_TEXTINPUTBOXRZN_728523')],
}
),
Entity1: this.formBuilder.group({
Attribute2:[null],
modeOp:[null],
}
),
});
}
}