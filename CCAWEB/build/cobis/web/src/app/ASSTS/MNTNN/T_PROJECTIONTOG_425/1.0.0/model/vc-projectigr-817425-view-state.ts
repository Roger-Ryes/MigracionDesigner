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
public T_PROJECTIONTOG_425!:FormGroup;
public VC_PROJECTIGR_817425:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_PROJECTOOG_992888 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_8396_63374: CobisGridModel = new CobisGridModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_PROJECTIGR_817425.id="VC_PROJECTIGR_817425";
this.VC_PROJECTIGR_817425.name="ProjectionIngresoOtrosCargosForm";
this.VC_PROJECTIGR_817425.colSpan=1;
this.VC_PROJECTIGR_817425.columns=1;
this.VC_PROJECTIGR_817425.enabled=ConstantsApi.mode.All;
this.G_PROJECTOOG_992888.id="G_PROJECTOOG_992888";
this.G_PROJECTOOG_992888.name="Group2267";
this.G_PROJECTOOG_992888.columns=1;
this.G_PROJECTOOG_992888.labelOrientation="Top";
this.G_PROJECTOOG_992888.colSpan=1;
this.G_PROJECTOOG_992888.enabled=ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.G_PROJECTOOG_992888.visible=ConstantsApi.mode.All;
this.G_PROJECTOOG_992888.attList = ["sequential","iniDiv","divUp","date","concept","value","commentary"];
this.QV_8396_63374.pageSize=10;
this.QV_8396_63374.id='QV_8396_63374';
this.QV_8396_63374.name='QV_8396_63374';
this.QV_8396_63374.pageable=true;
this.QV_8396_63374.sortable=false;
this.QV_8396_63374.resizable=true;
this.QV_8396_63374.scrollable=false
this.QV_8396_63374.confirmRowDeletion=false;
this.QV_8396_63374.exportToExcel=false;
this.QV_8396_63374.exportToPdf=false;
this.QV_8396_63374.height=0;
this.QV_8396_63374.filterableColumns=false;
this.QV_8396_63374.entityName='OtherCharges';
this.QV_8396_63374.appendRecords=false;
this.QV_8396_63374.rowDetail=false;
this.QV_8396_63374.columnMenu = true;
this.QV_8396_63374.editMode=CommonsConstants.GRID_EDIT_MODE_MODAL;
this.QV_8396_63374.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
this.QV_8396_63374.actions=[ComplexConstants.GRID_ACTION_CREATE];
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_8396_63374.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXVRY_167888",
label : cobis.translate('ASSTS.LBL_ASSTS_SECUENCAA_14570'),
field : 'sequential',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties :
{
id :'VA_TEXTINPUTBOXVRY_167888',
name :'Secuencial',
withoutLabel : true,
attribute : 'sequential',
entity : 'OtherCharges',
readOnly : ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXFHW_169888",
label : cobis.translate('ASSTS.LBL_ASSTS_DIVINICII_26095'),
field : 'iniDiv',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties :
{
id :'VA_TEXTINPUTBOXFHW_169888',
name :'divInicial',
withoutLabel : true,
attribute : 'iniDiv',
entity : 'OtherCharges',
readOnly : ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
required : true,
validationFunctions: new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]),
messagesValidations : {
required: cobis.translate('DSGNR.SYS_DSGNR_MSGREQURF_00032')
},
}
},
{
id : "VA_TEXTINPUTBOXCDO_902888",
label : cobis.translate('ASSTS.LBL_ASSTS_DIVHASTAA_21887'),
field : 'divUp',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties :
{
id :'VA_TEXTINPUTBOXCDO_902888',
name :'divHasta',
withoutLabel : true,
attribute : 'divUp',
entity : 'OtherCharges',
readOnly : ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
required : true,
validationFunctions: new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]),
messagesValidations : {
required: cobis.translate('DSGNR.SYS_DSGNR_MSGREQURF_00032')
},
}
},
{
id : "VA_DATEFIELDZFVCGN_770888",
label : cobis.translate('ASSTS.LBL_ASSTS_FECHAQWBP_23514'),
field : 'date',
visible : ConstantsApi.mode.All,
type : 'datefield',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties : {
id :'VA_DATEFIELDZFVCGN_770888',
name :'fecha',
withoutLabel : true,
format : cobis.userContext.getValue(cobis.constant.DATE_FORMAT),
attribute : 'date',
textLocked : false,
readonly : ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query,
entity : 'OtherCharges',
visible : true,
readOnly : ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
required : true,
validationFunctions: new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]),
messagesValidations : {
required: cobis.translate('DSGNR.SYS_DSGNR_MSGREQURF_00032')
},
}
},
{
id : "VA_TEXTINPUTBOXYVX_228888",
label : cobis.translate('ASSTS.LBL_ASSTS_CONCEPTOO_16181'),
field : 'concept',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties :
{
id :'VA_TEXTINPUTBOXYVX_228888',
name :'concepto',
withoutLabel : true,
attribute : 'concept',
entity : 'OtherCharges',
maxlength: 255,
readOnly : ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
required : true,
validationFunctions: new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]),
messagesValidations : {
required: cobis.translate('DSGNR.SYS_DSGNR_MSGREQURF_00032')
},
}
},
{
id : "VA_TEXTINPUTBOXPSH_886888",
label : cobis.translate('ASSTS.LBL_ASSTS_VALORNPRH_26284'),
field : 'value',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties :
{
id :'VA_TEXTINPUTBOXPSH_886888',
name :'valor',
withoutLabel : true,
attribute : 'value',
entity : 'OtherCharges',
readOnly : ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
required : true,
validationFunctions: new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]),
messagesValidations : {
required: cobis.translate('DSGNR.SYS_DSGNR_MSGREQURF_00032')
},
}
},
{
id : "VA_TEXTINPUTBOXRKL_324888",
label : cobis.translate('ASSTS.LBL_ASSTS_REFERENAI_72258'),
field : 'commentary',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties :
{
id :'VA_TEXTINPUTBOXRKL_324888',
name :'referencia',
withoutLabel : true,
attribute : 'commentary',
entity : 'OtherCharges',
maxlength: 255,
readOnly : ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
required : true,
validationFunctions: new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]),
messagesValidations : {
required: cobis.translate('DSGNR.SYS_DSGNR_MSGREQURF_00032')
},
}
},
]);
this.T_PROJECTIONTOG_425 = this.formBuilder.group({
OtherCharges: this.formBuilder.group({
sequential:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_8396_63374.columns,'VA_TEXTINPUTBOXVRY_167888')],
iniDiv:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_8396_63374.columns,'VA_TEXTINPUTBOXFHW_169888')],
divUp:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_8396_63374.columns,'VA_TEXTINPUTBOXCDO_902888')],
date:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_8396_63374.columns,'VA_DATEFIELDZFVCGN_770888')],
concept:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_8396_63374.columns,'VA_TEXTINPUTBOXYVX_228888')],
value:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_8396_63374.columns,'VA_TEXTINPUTBOXPSH_886888')],
commentary:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_8396_63374.columns,'VA_TEXTINPUTBOXRKL_324888')],
categoryType:[null],
valueApply:[null],
reference:[null],
valueMin:[null],
valueMax:[null],
baseCalculation:[null],
balanceOp:[null],
balanceDesemp:[null],
rate:[null],
decTapl:[null],
range:[null],
}
),
});
}
}