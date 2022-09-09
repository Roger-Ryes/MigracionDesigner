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
public T_ASSTSKMGDPSCM_203!:FormGroup;
public VC_DEFERREDIT_242203:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_DEFERREDTI_349268 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_JT23_FZW47: CobisGridModel = new CobisGridModel();
public G_DEFERREMDD_295268 : CobisGroupBoxModel = new CobisGroupBoxModel();
public VA_VABUTTONJVWDERX_391268: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_DEFERREDIT_242203.id="VC_DEFERREDIT_242203";
this.VC_DEFERREDIT_242203.name="DeferredItemsForm";
this.VC_DEFERREDIT_242203.colSpan=1;
this.VC_DEFERREDIT_242203.columns=1;
this.VC_DEFERREDIT_242203.enabled=ConstantsApi.mode.All;
this.G_DEFERREDTI_349268.id="G_DEFERREDTI_349268";
this.G_DEFERREDTI_349268.name="Group1542";
this.G_DEFERREDTI_349268.columns=1;
this.G_DEFERREDTI_349268.labelOrientation="Top";
this.G_DEFERREDTI_349268.colSpan=1;
this.G_DEFERREDTI_349268.enabled=ConstantsApi.mode.All;
this.G_DEFERREDTI_349268.visible=ConstantsApi.mode.All;
this.G_DEFERREDTI_349268.attList = ["dividend","items1","items2","items3","items4","items5","items6","items7","items8","items9","items10","items11","items12","items13","items14","items15"];
this.G_DEFERREDTI_349268.className = "bg-primary";
this.G_DEFERREMDD_295268.id="G_DEFERREMDD_295268";
this.G_DEFERREMDD_295268.name="Group1217";
this.G_DEFERREMDD_295268.columns=6;
this.G_DEFERREMDD_295268.labelOrientation="Top";
this.G_DEFERREMDD_295268.colSpan=1;
this.G_DEFERREMDD_295268.enabled=ConstantsApi.mode.All;
this.G_DEFERREMDD_295268.visible=ConstantsApi.mode.All;
this.QV_JT23_FZW47.pageSize=10;
this.QV_JT23_FZW47.id='QV_JT23_FZW47';
this.QV_JT23_FZW47.name='QV_JT23_FZW47';
this.QV_JT23_FZW47.pageable=true;
this.QV_JT23_FZW47.sortable=false;
this.QV_JT23_FZW47.resizable=true;
this.QV_JT23_FZW47.scrollable=true
this.QV_JT23_FZW47.confirmRowDeletion=false;
this.QV_JT23_FZW47.exportToExcel=true;
this.QV_JT23_FZW47.exportToPdf=false;
this.QV_JT23_FZW47.height=0;
this.QV_JT23_FZW47.filterableColumns=false;
this.QV_JT23_FZW47.entityName='DeferredItemsList';
this.QV_JT23_FZW47.appendRecords=true;
this.QV_JT23_FZW47.rowDetail=false;
this.QV_JT23_FZW47.columnMenu = true;
this.QV_JT23_FZW47.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_JT23_FZW47.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_JT23_FZW47.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXHPX_798268",
label : cobis.translate('ASSTS.LBL_ASSTS_DIVIDENDD_33129'),
field : 'dividend',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXHPX_798268',
name :'dividend',
withoutLabel : true,
attribute : 'dividend',
entity : 'DeferredItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
className : 'grid-list-no-right',
}
},
{
id : "VA_TEXTINPUTBOXCBH_717268",
field : 'items1',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXCBH_717268',
name :'items1',
withoutLabel : true,
attribute : 'items1',
entity : 'DeferredItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
className : 'grid-list-no-right',
}
},
{
id : "VA_TEXTINPUTBOXXUQ_699268",
field : 'items2',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXXUQ_699268',
name :'items2',
withoutLabel : true,
attribute : 'items2',
entity : 'DeferredItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
className : 'grid-list-no-right',
}
},
{
id : "VA_TEXTINPUTBOXGJK_987268",
field : 'items3',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXGJK_987268',
name :'items3',
withoutLabel : true,
attribute : 'items3',
entity : 'DeferredItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
className : 'grid-list-no-right',
}
},
{
id : "VA_TEXTINPUTBOXLBK_475268",
field : 'items4',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXLBK_475268',
name :'items4',
withoutLabel : true,
attribute : 'items4',
entity : 'DeferredItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
className : 'grid-list-no-right',
}
},
{
id : "VA_TEXTINPUTBOXPZP_415268",
field : 'items5',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXPZP_415268',
name :'items5',
withoutLabel : true,
attribute : 'items5',
entity : 'DeferredItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
className : 'grid-list-no-right',
}
},
{
id : "VA_TEXTINPUTBOXEFM_768268",
field : 'items6',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXEFM_768268',
name :'items6',
withoutLabel : true,
attribute : 'items6',
entity : 'DeferredItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
className : 'grid-list-no-right',
}
},
{
id : "VA_TEXTINPUTBOXAPF_709268",
field : 'items7',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXAPF_709268',
name :'items7',
withoutLabel : true,
attribute : 'items7',
entity : 'DeferredItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
className : 'grid-list-no-right',
}
},
{
id : "VA_TEXTINPUTBOXWTY_756268",
field : 'items8',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXWTY_756268',
name :'items8',
withoutLabel : true,
attribute : 'items8',
entity : 'DeferredItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
className : 'grid-list-no-right',
}
},
{
id : "VA_TEXTINPUTBOXUMB_869268",
field : 'items9',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXUMB_869268',
name :'items9',
withoutLabel : true,
attribute : 'items9',
entity : 'DeferredItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
className : 'grid-list-no-right',
}
},
{
id : "VA_TEXTINPUTBOXHPS_267268",
field : 'items10',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXHPS_267268',
name :'items10',
withoutLabel : true,
attribute : 'items10',
entity : 'DeferredItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
className : 'grid-list-no-right',
}
},
{
id : "VA_TEXTINPUTBOXRWQ_403268",
field : 'items11',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXRWQ_403268',
name :'items11',
withoutLabel : true,
attribute : 'items11',
entity : 'DeferredItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
className : 'grid-list-no-right',
}
},
{
id : "VA_TEXTINPUTBOXZBL_716268",
field : 'items12',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXZBL_716268',
name :'items12',
withoutLabel : true,
attribute : 'items12',
entity : 'DeferredItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
className : 'grid-list-no-right',
}
},
{
id : "VA_TEXTINPUTBOXLGX_921268",
field : 'items13',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXLGX_921268',
name :'items13',
withoutLabel : true,
attribute : 'items13',
entity : 'DeferredItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
className : 'grid-list-no-right',
}
},
{
id : "VA_TEXTINPUTBOXRCZ_367268",
field : 'items14',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXRCZ_367268',
name :'items14',
withoutLabel : true,
attribute : 'items14',
entity : 'DeferredItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
className : 'grid-list-no-right',
}
},
{
id : "VA_TEXTINPUTBOXCBB_218268",
field : 'items15',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXCBB_218268',
name :'items15',
withoutLabel : true,
attribute : 'items15',
entity : 'DeferredItemsList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
className : 'grid-list-no-right',
}
},
]);
this.VA_VABUTTONJVWDERX_391268.id = "VA_VABUTTONJVWDERX_391268";
this.VA_VABUTTONJVWDERX_391268.name = "VA_VABUTTONJVWDERX_391268";
this.VA_VABUTTONJVWDERX_391268.label = cobis.translate("ASSTS.LBL_ASSTS_IMPRIMIRR_18630");
this.VA_VABUTTONJVWDERX_391268.colSpan = 1;
this.VA_VABUTTONJVWDERX_391268.withoutLabel = false;
this.VA_VABUTTONJVWDERX_391268.causesValidation=false;
this.VA_VABUTTONJVWDERX_391268.submitOnEnter=false;
this.VA_VABUTTONJVWDERX_391268.setFocus=false;
this.VA_VABUTTONJVWDERX_391268.enabled = ConstantsApi.mode.All;
this.VA_VABUTTONJVWDERX_391268.visible= ConstantsApi.mode.All;
this.T_ASSTSKMGDPSCM_203 = this.formBuilder.group({
DeferredItemsList: this.formBuilder.group({
dividend:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_JT23_FZW47.columns,'VA_TEXTINPUTBOXHPX_798268')],
items1:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_JT23_FZW47.columns,'VA_TEXTINPUTBOXCBH_717268')],
items2:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_JT23_FZW47.columns,'VA_TEXTINPUTBOXXUQ_699268')],
items3:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_JT23_FZW47.columns,'VA_TEXTINPUTBOXGJK_987268')],
items4:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_JT23_FZW47.columns,'VA_TEXTINPUTBOXLBK_475268')],
items5:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_JT23_FZW47.columns,'VA_TEXTINPUTBOXPZP_415268')],
items6:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_JT23_FZW47.columns,'VA_TEXTINPUTBOXEFM_768268')],
items7:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_JT23_FZW47.columns,'VA_TEXTINPUTBOXAPF_709268')],
items8:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_JT23_FZW47.columns,'VA_TEXTINPUTBOXWTY_756268')],
items9:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_JT23_FZW47.columns,'VA_TEXTINPUTBOXUMB_869268')],
items10:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_JT23_FZW47.columns,'VA_TEXTINPUTBOXHPS_267268')],
items11:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_JT23_FZW47.columns,'VA_TEXTINPUTBOXRWQ_403268')],
items12:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_JT23_FZW47.columns,'VA_TEXTINPUTBOXZBL_716268')],
items13:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_JT23_FZW47.columns,'VA_TEXTINPUTBOXLGX_921268')],
items14:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_JT23_FZW47.columns,'VA_TEXTINPUTBOXRCZ_367268')],
items15:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_JT23_FZW47.columns,'VA_TEXTINPUTBOXCBB_218268')],
sesion:[null],
}
),
});
}
}