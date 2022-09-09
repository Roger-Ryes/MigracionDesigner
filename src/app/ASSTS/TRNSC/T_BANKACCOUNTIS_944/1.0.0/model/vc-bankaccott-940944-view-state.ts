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
public T_BANKACCOUNTIS_944!:FormGroup;
public VC_BANKACCOTT_940944:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_BANKACCTTS_177561 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_1987_42894: CobisGridModel = new CobisGridModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_BANKACCOTT_940944.id="VC_BANKACCOTT_940944";
this.VC_BANKACCOTT_940944.name="BankAccountsListForm";
this.VC_BANKACCOTT_940944.colSpan=1;
this.VC_BANKACCOTT_940944.columns=1;
this.VC_BANKACCOTT_940944.enabled=ConstantsApi.mode.All;
this.G_BANKACCTTS_177561.id="G_BANKACCTTS_177561";
this.G_BANKACCTTS_177561.name="Group1906";
this.G_BANKACCTTS_177561.columns=1;
this.G_BANKACCTTS_177561.labelOrientation="Top";
this.G_BANKACCTTS_177561.colSpan=1;
this.G_BANKACCTTS_177561.enabled=ConstantsApi.mode.All;
this.G_BANKACCTTS_177561.visible=ConstantsApi.mode.All;
this.G_BANKACCTTS_177561.attList = ["account","customerCode","accountName"];
this.QV_1987_42894.id='QV_1987_42894';
this.QV_1987_42894.name='QV_1987_42894';
this.QV_1987_42894.pageable=false;
this.QV_1987_42894.sortable=false;
this.QV_1987_42894.resizable=false;
this.QV_1987_42894.scrollable=false
this.QV_1987_42894.confirmRowDeletion=false;
this.QV_1987_42894.exportToExcel=false;
this.QV_1987_42894.exportToPdf=false;
this.QV_1987_42894.height=0;
this.QV_1987_42894.filterableColumns=false;
this.QV_1987_42894.entityName='BankAccount';
this.QV_1987_42894.appendRecords=false;
this.QV_1987_42894.rowDetail=false;
this.QV_1987_42894.columnMenu = true;
this.QV_1987_42894.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_1987_42894.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_1987_42894.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXSGC_732561",
label : cobis.translate('ASSTS.LBL_ASSTS_CUENTADIA_22037'),
field : 'account',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties :
{
id :'VA_TEXTINPUTBOXSGC_732561',
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
id : "VA_TEXTINPUTBOXTWF_198561",
label : cobis.translate('ASSTS.LBL_ASSTS_CLIENTEWV_22561'),
field : 'customerCode',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXTWF_198561',
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
id : "VA_TEXTINPUTBOXGBN_738561",
label : cobis.translate('ASSTS.LBL_ASSTS_NOMBREULS_81822'),
field : 'accountName',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties :
{
id :'VA_TEXTINPUTBOXGBN_738561',
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
this.T_BANKACCOUNTIS_944 = this.formBuilder.group({
BankAccount: this.formBuilder.group({
account:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_1987_42894.columns,'VA_TEXTINPUTBOXSGC_732561')],
customerCode:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_1987_42894.columns,'VA_TEXTINPUTBOXTWF_198561')],
accountName:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_1987_42894.columns,'VA_TEXTINPUTBOXGBN_738561')],
}
),
});
}
}