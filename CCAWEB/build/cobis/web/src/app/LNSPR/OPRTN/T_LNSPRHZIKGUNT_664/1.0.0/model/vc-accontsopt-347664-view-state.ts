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
public T_LNSPRHZIKGUNT_664!:FormGroup;
public VC_ACCONTSOPT_347664:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_ACCONTSIPO_577826 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_SEPR_PJZ89: CobisGridModel = new CobisGridModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_ACCONTSOPT_347664.id="VC_ACCONTSOPT_347664";
this.VC_ACCONTSOPT_347664.name="AccontsOperation";
this.VC_ACCONTSOPT_347664.colSpan=1;
this.VC_ACCONTSOPT_347664.columns=1;
this.VC_ACCONTSOPT_347664.enabled=ConstantsApi.mode.All;
this.G_ACCONTSIPO_577826.id="G_ACCONTSIPO_577826";
this.G_ACCONTSIPO_577826.name="Group1632";
this.G_ACCONTSIPO_577826.columns=1;
this.G_ACCONTSIPO_577826.labelOrientation="Top";
this.G_ACCONTSIPO_577826.colSpan=1;
this.G_ACCONTSIPO_577826.enabled=ConstantsApi.mode.All;
this.G_ACCONTSIPO_577826.visible=ConstantsApi.mode.All;
this.G_ACCONTSIPO_577826.attList = ["code","value1","value2"];
this.QV_SEPR_PJZ89.id='QV_SEPR_PJZ89';
this.QV_SEPR_PJZ89.name='QV_SEPR_PJZ89';
this.QV_SEPR_PJZ89.pageable=false;
this.QV_SEPR_PJZ89.sortable=false;
this.QV_SEPR_PJZ89.resizable=true;
this.QV_SEPR_PJZ89.scrollable=true
this.QV_SEPR_PJZ89.confirmRowDeletion=false;
this.QV_SEPR_PJZ89.exportToExcel=false;
this.QV_SEPR_PJZ89.exportToPdf=false;
this.QV_SEPR_PJZ89.height=0;
this.QV_SEPR_PJZ89.filterableColumns=false;
this.QV_SEPR_PJZ89.entityName='Catalog3Items';
this.QV_SEPR_PJZ89.appendRecords=false;
this.QV_SEPR_PJZ89.rowDetail=false;
this.QV_SEPR_PJZ89.columnMenu = true;
this.QV_SEPR_PJZ89.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_SEPR_PJZ89.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_SEPR_PJZ89.columns = Util.filterByMode(this.mode, [
{
id : "VA_CODEPVDENMQQIAZ_575826",
label : cobis.translate('LNSPR.LBL_LOANS_CUENTAORO_42946'),
field : 'code',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_CODEPVDENMQQIAZ_575826',
name :'code',
withoutLabel : true,
attribute : 'code',
entity : 'Catalog3Items',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_VALUE1XWKWSEKJY_872826",
label : cobis.translate('LNSPR.LBL_LNSPR_CODCLIETT_20856'),
field : 'value1',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_VALUE1XWKWSEKJY_872826',
name :'value1',
withoutLabel : true,
attribute : 'value1',
entity : 'Catalog3Items',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_VALUE2UGGNUVHED_858826",
label : cobis.translate('LNSPR.LBL_LNSPR_NOMBRECNI_63306'),
field : 'value2',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_VALUE2UGGNUVHED_858826',
name :'value2',
withoutLabel : true,
attribute : 'value2',
entity : 'Catalog3Items',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.T_LNSPRHZIKGUNT_664 = this.formBuilder.group({
Catalog3Items: this.formBuilder.group({
code:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_SEPR_PJZ89.columns,'VA_CODEPVDENMQQIAZ_575826')],
value1:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_SEPR_PJZ89.columns,'VA_VALUE1XWKWSEKJY_872826')],
value2:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_SEPR_PJZ89.columns,'VA_VALUE2UGGNUVHED_858826')],
producto:[null],
}
),
});
}
}