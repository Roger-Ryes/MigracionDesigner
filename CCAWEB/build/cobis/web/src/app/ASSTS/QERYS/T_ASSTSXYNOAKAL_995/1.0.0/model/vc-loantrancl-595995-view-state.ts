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
public T_ASSTSXYNOAKAL_995!:FormGroup;
public VC_LOANTRANCL_595995:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANTRACIT_114343 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_RT22_BLD64: CobisGridModel = new CobisGridModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_LOANTRANCL_595995.id="VC_LOANTRANCL_595995";
this.VC_LOANTRANCL_595995.name="LoanTransactionDetailForm";
this.VC_LOANTRANCL_595995.colSpan=1;
this.VC_LOANTRANCL_595995.columns=1;
this.VC_LOANTRANCL_595995.enabled=ConstantsApi.mode.All;
this.G_LOANTRACIT_114343.id="G_LOANTRACIT_114343";
this.G_LOANTRACIT_114343.name="Group1310";
this.G_LOANTRACIT_114343.columns=1;
this.G_LOANTRACIT_114343.labelOrientation="Top";
this.G_LOANTRACIT_114343.colSpan=1;
this.G_LOANTRACIT_114343.enabled=ConstantsApi.mode.All;
this.G_LOANTRACIT_114343.visible=ConstantsApi.mode.All;
this.G_LOANTRACIT_114343.attList = ["dividend","heading","state","coin","amount","amountMn","price","codeValue","affectation","bill","beneficiary"];
this.QV_RT22_BLD64.pageSize=10;
this.QV_RT22_BLD64.id='QV_RT22_BLD64';
this.QV_RT22_BLD64.name='QV_RT22_BLD64';
this.QV_RT22_BLD64.pageable=true;
this.QV_RT22_BLD64.sortable=false;
this.QV_RT22_BLD64.resizable=true;
this.QV_RT22_BLD64.scrollable=true
this.QV_RT22_BLD64.confirmRowDeletion=false;
this.QV_RT22_BLD64.exportToExcel=false;
this.QV_RT22_BLD64.exportToPdf=false;
this.QV_RT22_BLD64.height=0;
this.QV_RT22_BLD64.filterableColumns=false;
this.QV_RT22_BLD64.entityName='DetailTransaction';
this.QV_RT22_BLD64.appendRecords=true;
this.QV_RT22_BLD64.rowDetail=false;
this.QV_RT22_BLD64.columnMenu = true;
this.QV_RT22_BLD64.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_RT22_BLD64.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_RT22_BLD64.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXFOG_660343",
label : cobis.translate('ASSTS.LBL_ASSTS_DIVIDENDD_33129'),
field : 'dividend',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXFOG_660343',
name :'dividend',
withoutLabel : true,
attribute : 'dividend',
entity : 'DetailTransaction',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXBYW_928343",
label : cobis.translate('ASSTS.LBL_ASSTS_RUBROIVKT_62353'),
field : 'heading',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXBYW_928343',
name :'heading',
withoutLabel : true,
attribute : 'heading',
entity : 'DetailTransaction',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXEVO_191343",
label : cobis.translate('ASSTS.LBL_ASSTS_ESTADOMCM_48125'),
field : 'state',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXEVO_191343',
name :'state',
withoutLabel : true,
attribute : 'state',
entity : 'DetailTransaction',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXMGX_367343",
label : cobis.translate('ASSTS.LBL_ASSTS_MONEDAGWI_30015'),
field : 'coin',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXMGX_367343',
name :'coin',
withoutLabel : true,
attribute : 'coin',
entity : 'DetailTransaction',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXISA_496343",
label : cobis.translate('ASSTS.LBL_ASSTS_MONTOTMIL_28007'),
field : 'amount',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXISA_496343',
name :'amount',
withoutLabel : true,
attribute : 'amount',
entity : 'DetailTransaction',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXSJW_967343",
label : cobis.translate('ASSTS.LBL_ASSTS_MONTOMNDV_14693'),
field : 'amountMn',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXSJW_967343',
name :'amountMn',
withoutLabel : true,
attribute : 'amountMn',
entity : 'DetailTransaction',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXNWR_661343",
label : cobis.translate('ASSTS.LBL_ASSTS_COTIZACNN_31924'),
field : 'price',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXNWR_661343',
name :'price',
withoutLabel : true,
attribute : 'price',
entity : 'DetailTransaction',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXYJD_436343",
label : cobis.translate('ASSTS.LBL_ASSTS_CODVALORR_46935'),
field : 'codeValue',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXYJD_436343',
name :'codeValue',
withoutLabel : true,
attribute : 'codeValue',
entity : 'DetailTransaction',
format : '#',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXYVP_542343",
label : cobis.translate('ASSTS.LBL_ASSTS_AFECTACON_47829'),
field : 'affectation',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXYVP_542343',
name :'affectation',
withoutLabel : true,
attribute : 'affectation',
entity : 'DetailTransaction',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXGVY_493343",
label : cobis.translate('ASSTS.LBL_ASSTS_CUENTAFGE_63328'),
field : 'bill',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXGVY_493343',
name :'bill',
withoutLabel : true,
attribute : 'bill',
entity : 'DetailTransaction',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXGVD_595343",
label : cobis.translate('ASSTS.LBL_ASSTS_BENEFICRA_50223'),
field : 'beneficiary',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXGVD_595343',
name :'beneficiary',
withoutLabel : true,
attribute : 'beneficiary',
entity : 'DetailTransaction',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.T_ASSTSXYNOAKAL_995 = this.formBuilder.group({
DetailTransaction: this.formBuilder.group({
dividend:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_RT22_BLD64.columns,'VA_TEXTINPUTBOXFOG_660343')],
heading:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_RT22_BLD64.columns,'VA_TEXTINPUTBOXBYW_928343')],
state:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_RT22_BLD64.columns,'VA_TEXTINPUTBOXEVO_191343')],
coin:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_RT22_BLD64.columns,'VA_TEXTINPUTBOXMGX_367343')],
amount:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_RT22_BLD64.columns,'VA_TEXTINPUTBOXISA_496343')],
amountMn:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_RT22_BLD64.columns,'VA_TEXTINPUTBOXSJW_967343')],
price:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_RT22_BLD64.columns,'VA_TEXTINPUTBOXNWR_661343')],
codeValue:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_RT22_BLD64.columns,'VA_TEXTINPUTBOXYJD_436343')],
affectation:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_RT22_BLD64.columns,'VA_TEXTINPUTBOXYVP_542343')],
bill:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_RT22_BLD64.columns,'VA_TEXTINPUTBOXGVY_493343')],
beneficiary:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_RT22_BLD64.columns,'VA_TEXTINPUTBOXGVD_595343')],
}
),
});
}
}