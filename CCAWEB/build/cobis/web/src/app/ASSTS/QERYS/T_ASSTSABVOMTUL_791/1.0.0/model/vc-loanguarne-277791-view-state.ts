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
public T_ASSTSABVOMTUL_791!:FormGroup;
public VC_LOANGUARNE_277791:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANGUARTR_741717 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_UH10_ODY37: CobisGridModel = new CobisGridModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_LOANGUARNE_277791.id="VC_LOANGUARNE_277791";
this.VC_LOANGUARNE_277791.name="QueryLoanGuarantesSuretyForm";
this.VC_LOANGUARNE_277791.colSpan=1;
this.VC_LOANGUARNE_277791.columns=1;
this.VC_LOANGUARNE_277791.enabled=ConstantsApi.mode.All;
this.G_LOANGUARTR_741717.id="G_LOANGUARTR_741717";
this.G_LOANGUARTR_741717.name="Group1169";
this.G_LOANGUARTR_741717.columns=1;
this.G_LOANGUARTR_741717.labelOrientation="Top";
this.G_LOANGUARTR_741717.colSpan=1;
this.G_LOANGUARTR_741717.enabled=ConstantsApi.mode.All;
this.G_LOANGUARTR_741717.visible=ConstantsApi.mode.All;
this.G_LOANGUARTR_741717.attList = ["guaranteesSurety","statusGuaranteesSurety","description","customerID","customer","currentValue","currencyID","createdOn"];
this.QV_UH10_ODY37.pageSize=10;
this.QV_UH10_ODY37.id='QV_UH10_ODY37';
this.QV_UH10_ODY37.name='QV_UH10_ODY37';
this.QV_UH10_ODY37.pageable=true;
this.QV_UH10_ODY37.sortable=false;
this.QV_UH10_ODY37.resizable=true;
this.QV_UH10_ODY37.scrollable=true
this.QV_UH10_ODY37.confirmRowDeletion=false;
this.QV_UH10_ODY37.exportToExcel=false;
this.QV_UH10_ODY37.exportToPdf=false;
this.QV_UH10_ODY37.height=0;
this.QV_UH10_ODY37.filterableColumns=false;
this.QV_UH10_ODY37.entityName='LoanGuaranteesSurety';
this.QV_UH10_ODY37.appendRecords=true;
this.QV_UH10_ODY37.rowDetail=false;
this.QV_UH10_ODY37.columnMenu = true;
this.QV_UH10_ODY37.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_UH10_ODY37.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_UH10_ODY37.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXXFD_995717",
label : cobis.translate('ASSTS.LBL_ASSTS_GARANTIAA_11754'),
field : 'guaranteesSurety',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXXFD_995717',
name :'guaranteesSurety',
withoutLabel : true,
attribute : 'guaranteesSurety',
entity : 'LoanGuaranteesSurety',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXWUX_635717",
label : cobis.translate('ASSTS.LBL_ASSTS_ESTADOGIA_21734'),
field : 'statusGuaranteesSurety',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXWUX_635717',
name :'statusGuaranteesSurety',
withoutLabel : true,
attribute : 'statusGuaranteesSurety',
entity : 'LoanGuaranteesSurety',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXVCA_636717",
label : cobis.translate('ASSTS.LBL_ASSTS_DESCRIPOO_35259'),
field : 'description',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXVCA_636717',
name :'description',
withoutLabel : true,
attribute : 'description',
entity : 'LoanGuaranteesSurety',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXLVI_499717",
label : cobis.translate('ASSTS.LBL_ASSTS_CODIGOCIE_36603'),
field : 'customerID',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXLVI_499717',
name :'customerID',
withoutLabel : true,
attribute : 'customerID',
entity : 'LoanGuaranteesSurety',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXAQZ_389717",
label : cobis.translate('ASSTS.LBL_ASSTS_NOMBRECNI_63306'),
field : 'customer',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXAQZ_389717',
name :'customer',
withoutLabel : true,
attribute : 'customer',
entity : 'LoanGuaranteesSurety',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXWIZ_348717",
label : cobis.translate('ASSTS.LBL_ASSTS_VALORACUA_99891'),
field : 'currentValue',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXWIZ_348717',
name :'currentValue',
withoutLabel : true,
attribute : 'currentValue',
entity : 'LoanGuaranteesSurety',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXDKY_119717",
label : cobis.translate('ASSTS.LBL_ASSTS_MONEDATUB_92849'),
field : 'currencyID',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXDKY_119717',
name :'currencyID',
withoutLabel : true,
attribute : 'currencyID',
entity : 'LoanGuaranteesSurety',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXPSB_203717",
label : cobis.translate('ASSTS.LBL_ASSTS_FECHAINGG_82521'),
field : 'createdOn',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXPSB_203717',
name :'createdOn',
withoutLabel : true,
attribute : 'createdOn',
entity : 'LoanGuaranteesSurety',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.T_ASSTSABVOMTUL_791 = this.formBuilder.group({
LoanGuaranteesSurety: this.formBuilder.group({
guaranteesSurety:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_UH10_ODY37.columns,'VA_TEXTINPUTBOXXFD_995717')],
statusGuaranteesSurety:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_UH10_ODY37.columns,'VA_TEXTINPUTBOXWUX_635717')],
description:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_UH10_ODY37.columns,'VA_TEXTINPUTBOXVCA_636717')],
customerID:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_UH10_ODY37.columns,'VA_TEXTINPUTBOXLVI_499717')],
customer:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_UH10_ODY37.columns,'VA_TEXTINPUTBOXAQZ_389717')],
currentValue:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_UH10_ODY37.columns,'VA_TEXTINPUTBOXWIZ_348717')],
currencyID:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_UH10_ODY37.columns,'VA_TEXTINPUTBOXDKY_119717')],
createdOn:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_UH10_ODY37.columns,'VA_TEXTINPUTBOXPSB_203717')],
}
),
});
}
}