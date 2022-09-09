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
public T_ASSTSGICMCPEO_473!:FormGroup;
public VC_ONERANKGVL_254473:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_ONERANKCDL_257961 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_ONERANKRVC_820961 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_SK42_AAN67: CobisGridModel = new CobisGridModel();
public VA_DATEATAJJMIOPBZ_980961: CobisDateFieldModel = new CobisDateFieldModel();
public VA_VABUTTONMUXMVFV_468961: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_ONERANKGVL_254473.id="VC_ONERANKGVL_254473";
this.VC_ONERANKGVL_254473.name="OneRankForm";
this.VC_ONERANKGVL_254473.colSpan=1;
this.VC_ONERANKGVL_254473.columns=1;
this.VC_ONERANKGVL_254473.enabled=ConstantsApi.mode.All;
this.G_ONERANKCDL_257961.id="G_ONERANKCDL_257961";
this.G_ONERANKCDL_257961.label=cobis.translate("ASSTS.LBL_ASSTS_DESCRIPII_28027");
this.G_ONERANKCDL_257961.name="Group1900";
this.G_ONERANKCDL_257961.columns=3;
this.G_ONERANKCDL_257961.labelOrientation="Top";
this.G_ONERANKCDL_257961.colSpan=1;
this.G_ONERANKCDL_257961.enabled=ConstantsApi.mode.All;
this.G_ONERANKCDL_257961.visible=ConstantsApi.mode.All;
this.G_ONERANKCDL_257961.attList = ["date"];
this.G_ONERANKRVC_820961.id="G_ONERANKRVC_820961";
this.G_ONERANKRVC_820961.name="Group2645";
this.G_ONERANKRVC_820961.columns=1;
this.G_ONERANKRVC_820961.labelOrientation="Top";
this.G_ONERANKRVC_820961.colSpan=1;
this.G_ONERANKRVC_820961.enabled=ConstantsApi.mode.All;
this.G_ONERANKRVC_820961.visible=ConstantsApi.mode.All;
this.G_ONERANKRVC_820961.attList = ["idRange","sequential","minValue","maxValue","rate","type","value","date"];
this.VA_DATEATAJJMIOPBZ_980961.label = cobis.translate("ASSTS.LBL_ASSTS_FECHAQWBP_23514");
this.VA_DATEATAJJMIOPBZ_980961.entity = "OneRankFilter";
this.VA_DATEATAJJMIOPBZ_980961.attribute = "date";
this.VA_DATEATAJJMIOPBZ_980961.name="date";
this.VA_DATEATAJJMIOPBZ_980961.id="VA_DATEATAJJMIOPBZ_980961";
this.VA_DATEATAJJMIOPBZ_980961.colSpan=1;
this.VA_DATEATAJJMIOPBZ_980961.withoutLabel = false;
this.VA_DATEATAJJMIOPBZ_980961.readOnly = ConstantsApi.mode.Query;
this.VA_DATEATAJJMIOPBZ_980961.enabled = ConstantsApi.mode.All;
this.VA_DATEATAJJMIOPBZ_980961.visible= ConstantsApi.mode.All;
this.VA_VABUTTONMUXMVFV_468961.id = "VA_VABUTTONMUXMVFV_468961";
this.VA_VABUTTONMUXMVFV_468961.name = "VA_VABUTTONMUXMVFV_468961";
this.VA_VABUTTONMUXMVFV_468961.label = cobis.translate("ASSTS.LBL_ASSTS_BUSCARYEV_82731");
this.VA_VABUTTONMUXMVFV_468961.colSpan = 1;
this.VA_VABUTTONMUXMVFV_468961.withoutLabel = false;
this.VA_VABUTTONMUXMVFV_468961.causesValidation=false;
this.VA_VABUTTONMUXMVFV_468961.submitOnEnter=false;
this.VA_VABUTTONMUXMVFV_468961.setFocus=false;
this.VA_VABUTTONMUXMVFV_468961.enabled = ConstantsApi.mode.All;
this.VA_VABUTTONMUXMVFV_468961.visible= ConstantsApi.mode.All;
this.QV_SK42_AAN67.pageSize=5;
this.QV_SK42_AAN67.id='QV_SK42_AAN67';
this.QV_SK42_AAN67.name='QV_SK42_AAN67';
this.QV_SK42_AAN67.pageable=true;
this.QV_SK42_AAN67.sortable=false;
this.QV_SK42_AAN67.resizable=true;
this.QV_SK42_AAN67.scrollable=true
this.QV_SK42_AAN67.confirmRowDeletion=true;
this.QV_SK42_AAN67.exportToExcel=false;
this.QV_SK42_AAN67.exportToPdf=false;
this.QV_SK42_AAN67.height=0;
this.QV_SK42_AAN67.filterableColumns=false;
this.QV_SK42_AAN67.entityName='OneRankList';
this.QV_SK42_AAN67.appendRecords=false;
this.QV_SK42_AAN67.rowDetail=false;
this.QV_SK42_AAN67.columnMenu = true;
this.QV_SK42_AAN67.editMode=CommonsConstants.GRID_EDIT_MODE_INLINE;
this.QV_SK42_AAN67.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
this.QV_SK42_AAN67.actions=[ComplexConstants.GRID_ACTION_DELETE,ComplexConstants.GRID_ACTION_CREATE,ComplexConstants.GRID_ACTION_UPDATE];
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_SK42_AAN67.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXVHD_917961",
label : cobis.translate('ASSTS.LBL_ASSTS_SECLJYBZO_20989'),
field : 'sequential',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXVHD_917961',
name :'sequential',
withoutLabel : true,
attribute : 'sequential',
entity : 'OneRankList',
readOnly : ConstantsApi.mode.Insert,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXZMN_916961",
label : cobis.translate('ASSTS.LBL_ASSTS_TITULO1NM_43797'),
field : 'minValue',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXZMN_916961',
name :'minValue',
withoutLabel : true,
attribute : 'minValue',
entity : 'OneRankList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
validationFunctions: new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.CompareValue,CustomValidators.fixedCompare('0',CustomValidatorOperator.GREATER_THAN_OR_EQUAL)]
]),
messagesValidations : {
fixedCompare: cobis.translate('ASSTS.MSG_ASSTS_VALORFURN_83073')
},
}
},
{
id : "VA_TEXTINPUTBOXARB_656961",
label : cobis.translate('ASSTS.LBL_ASSTS_TITULO1XM_99185'),
field : 'maxValue',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXARB_656961',
name :'maxValue',
withoutLabel : true,
attribute : 'maxValue',
entity : 'OneRankList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
validationFunctions: new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.CompareValue,CustomValidators.fixedCompare('0',CustomValidatorOperator.GREATER_THAN_OR_EQUAL)]
]),
messagesValidations : {
fixedCompare: cobis.translate('ASSTS.MSG_ASSTS_VALORFURN_83073')
},
}
},
{
id : "VA_TEXTINPUTBOXSMN_309961",
label : cobis.translate('ASSTS.LBL_ASSTS_TASAQDBMK_45779'),
field : 'rate',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 50,
properties :
{
id :'VA_TEXTINPUTBOXSMN_309961',
name :'rate',
withoutLabel : true,
attribute : 'rate',
entity : 'OneRankList',
format : '#,######0.000000',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
className : 'grid-list-mo-right',
validationFunctions: new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.CompareValue,CustomValidators.fixedCompare('0',CustomValidatorOperator.GREATER_THAN_OR_EQUAL)]
]),
messagesValidations : {
fixedCompare: cobis.translate('ASSTS.MSG_ASSTS_VALORFURN_83073')
},
}
},
{
id : "VA_TEXTINPUTBOXQYX_438961",
label : cobis.translate('ASSTS.LBL_ASSTS_RESULT2SQ_58424'),
field : 'value',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXQYX_438961',
name :'value',
withoutLabel : true,
attribute : 'value',
entity : 'OneRankList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
className : 'grid-list-mo-right',
validationFunctions: new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.CompareValue,CustomValidators.fixedCompare('0',CustomValidatorOperator.GREATER_THAN_OR_EQUAL)]
]),
messagesValidations : {
fixedCompare: cobis.translate('ASSTS.MSG_ASSTS_VALORFURN_83073')
},
}
},
{
id : "VA_DATEFIELDWSQSCW_492961",
label : cobis.translate('ASSTS.LBL_ASSTS_FECHAQWBP_23514'),
field : 'date',
visible : ConstantsApi.mode.All,
type : 'datefield',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_DATEFIELDWSQSCW_492961',
name :'date',
withoutLabel : true,
format : cobis.userContext.getValue(cobis.constant.DATE_FORMAT),
attribute : 'date',
textLocked : false,
readonly : ConstantsApi.mode.Query,
entity : 'OneRankList',
visible : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
}
},
]);
this.T_ASSTSGICMCPEO_473 = this.formBuilder.group({
OneRankFilter: this.formBuilder.group({
date:[{value: null, disabled: !this.VA_DATEATAJJMIOPBZ_980961.visible},CobisDesignerUtil.getValidationFunctions(this.VA_DATEATAJJMIOPBZ_980961.validationFunctions!)],
}
),
OneRankList: this.formBuilder.group({
idRange:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_SK42_AAN67.columns,'VA_TEXTINPUTBOXMGQ_712961')],
sequential:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_SK42_AAN67.columns,'VA_TEXTINPUTBOXVHD_917961')],
minValue:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_SK42_AAN67.columns,'VA_TEXTINPUTBOXZMN_916961')],
maxValue:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_SK42_AAN67.columns,'VA_TEXTINPUTBOXARB_656961')],
rate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_SK42_AAN67.columns,'VA_TEXTINPUTBOXSMN_309961')],
type:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_SK42_AAN67.columns,'VA_TEXTINPUTBOXGFW_289961')],
value:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_SK42_AAN67.columns,'VA_TEXTINPUTBOXQYX_438961')],
date:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_SK42_AAN67.columns,'VA_DATEFIELDWSQSCW_492961')],
}
),
});
}
}