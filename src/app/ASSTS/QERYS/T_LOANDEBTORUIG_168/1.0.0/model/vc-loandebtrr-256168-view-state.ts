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
public T_LOANDEBTORUIG_168!:FormGroup;
public VC_LOANDEBTRR_256168:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANDEBOOO_201252 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_6719_92672: CobisGridModel = new CobisGridModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_LOANDEBTRR_256168.id="VC_LOANDEBTRR_256168";
this.VC_LOANDEBTRR_256168.name="QueryLoanDebtorForm";
this.VC_LOANDEBTRR_256168.colSpan=1;
this.VC_LOANDEBTRR_256168.columns=1;
this.VC_LOANDEBTRR_256168.enabled=ConstantsApi.mode.All;
this.G_LOANDEBOOO_201252.id="G_LOANDEBOOO_201252";
this.G_LOANDEBOOO_201252.name="Group1814";
this.G_LOANDEBOOO_201252.columns=1;
this.G_LOANDEBOOO_201252.labelOrientation="Top";
this.G_LOANDEBOOO_201252.colSpan=1;
this.G_LOANDEBOOO_201252.enabled=ConstantsApi.mode.All;
this.G_LOANDEBOOO_201252.visible=ConstantsApi.mode.All;
this.G_LOANDEBOOO_201252.attList = ["customerID","identityCard","role","customerName","phone","address","centralCollection"];
this.QV_6719_92672.pageSize=10;
this.QV_6719_92672.id='QV_6719_92672';
this.QV_6719_92672.name='QV_6719_92672';
this.QV_6719_92672.pageable=true;
this.QV_6719_92672.sortable=false;
this.QV_6719_92672.resizable=true;
this.QV_6719_92672.scrollable=true
this.QV_6719_92672.confirmRowDeletion=false;
this.QV_6719_92672.exportToExcel=false;
this.QV_6719_92672.exportToPdf=false;
this.QV_6719_92672.height=0;
this.QV_6719_92672.filterableColumns=false;
this.QV_6719_92672.entityName='LoanDebtor';
this.QV_6719_92672.appendRecords=true;
this.QV_6719_92672.rowDetail=false;
this.QV_6719_92672.columnMenu = true;
this.QV_6719_92672.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_6719_92672.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_6719_92672.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXEKG_185252",
label : cobis.translate('ASSTS.LBL_ASSTS_CODIGOCIE_36603'),
field : 'customerID',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXEKG_185252',
name :'customerID',
withoutLabel : true,
attribute : 'customerID',
entity : 'LoanDebtor',
format : '#######',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXRPO_508252",
label : cobis.translate('ASSTS.LBL_ASSTS_CENITANEL_46995'),
field : 'identityCard',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXRPO_508252',
name :'identityCard',
withoutLabel : true,
attribute : 'identityCard',
entity : 'LoanDebtor',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXOOO_135252",
label : cobis.translate('ASSTS.LBL_ASSTS_ROLDOBJMA_96413'),
field : 'role',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXOOO_135252',
name :'role',
withoutLabel : true,
attribute : 'role',
entity : 'LoanDebtor',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXBZS_504252",
label : cobis.translate('ASSTS.LBL_ASSTS_NOMBREULS_81822'),
field : 'customerName',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXBZS_504252',
name :'customerName',
withoutLabel : true,
attribute : 'customerName',
entity : 'LoanDebtor',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXJET_751252",
label : cobis.translate('ASSTS.LBL_ASSTS_TELEFONOO_76252'),
field : 'phone',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXJET_751252',
name :'phone',
withoutLabel : true,
attribute : 'phone',
entity : 'LoanDebtor',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXHKU_739252",
label : cobis.translate('ASSTS.LBL_ASSTS_DIRECCINO_22395'),
field : 'address',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXHKU_739252',
name :'address',
withoutLabel : true,
attribute : 'address',
entity : 'LoanDebtor',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXXKU_150252",
label : cobis.translate('ASSTS.LBL_ASSTS_COBCENTAR_80329'),
field : 'centralCollection',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXXKU_150252',
name :'centralCollection',
withoutLabel : true,
attribute : 'centralCollection',
entity : 'LoanDebtor',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.T_LOANDEBTORUIG_168 = this.formBuilder.group({
LoanDebtor: this.formBuilder.group({
customerID:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_6719_92672.columns,'VA_TEXTINPUTBOXEKG_185252')],
identityCard:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_6719_92672.columns,'VA_TEXTINPUTBOXRPO_508252')],
role:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_6719_92672.columns,'VA_TEXTINPUTBOXOOO_135252')],
customerName:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_6719_92672.columns,'VA_TEXTINPUTBOXBZS_504252')],
phone:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_6719_92672.columns,'VA_TEXTINPUTBOXJET_751252')],
address:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_6719_92672.columns,'VA_TEXTINPUTBOXHKU_739252')],
centralCollection:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_6719_92672.columns,'VA_TEXTINPUTBOXXKU_150252')],
}
),
});
}
}