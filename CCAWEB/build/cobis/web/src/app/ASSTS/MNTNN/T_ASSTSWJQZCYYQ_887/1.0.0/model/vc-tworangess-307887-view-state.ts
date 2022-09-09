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
public T_ASSTSWJQZCYYQ_887!:FormGroup;
public VC_TWORANGESS_307887:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_TWORANGESS_553861 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_TWORANGESS_130861 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_TJ88_MTX55: CobisGridModel = new CobisGridModel();
public VA_DATEAMIJYBUPQWJ_858861: CobisDateFieldModel = new CobisDateFieldModel();
public VA_VABUTTONRPOCZLQ_765861: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_TWORANGESS_307887.id="VC_TWORANGESS_307887";
this.VC_TWORANGESS_307887.name="TwoRangesForm";
this.VC_TWORANGESS_307887.colSpan=1;
this.VC_TWORANGESS_307887.columns=1;
this.VC_TWORANGESS_307887.enabled=ConstantsApi.mode.All;
this.G_TWORANGESS_553861.id="G_TWORANGESS_553861";
this.G_TWORANGESS_553861.label=cobis.translate("ASSTS.LBL_ASSTS_DESCRIPII_28027");
this.G_TWORANGESS_553861.name="Group1247";
this.G_TWORANGESS_553861.columns=3;
this.G_TWORANGESS_553861.labelOrientation="Top";
this.G_TWORANGESS_553861.colSpan=1;
this.G_TWORANGESS_553861.enabled=ConstantsApi.mode.All;
this.G_TWORANGESS_553861.visible=ConstantsApi.mode.All;
this.G_TWORANGESS_553861.attList = ["date"];
this.G_TWORANGESS_130861.id="G_TWORANGESS_130861";
this.G_TWORANGESS_130861.name="Group2606";
this.G_TWORANGESS_130861.columns=1;
this.G_TWORANGESS_130861.labelOrientation="Top";
this.G_TWORANGESS_130861.colSpan=1;
this.G_TWORANGESS_130861.enabled=ConstantsApi.mode.All;
this.G_TWORANGESS_130861.visible=ConstantsApi.mode.All;
this.G_TWORANGESS_130861.attList = ["idRange","sequential","minValue1","maxValue1","minValue2","maxValue2","rate","variable","date"];
this.VA_DATEAMIJYBUPQWJ_858861.label = cobis.translate("ASSTS.LBL_ASSTS_FECHAQWBP_23514");
this.VA_DATEAMIJYBUPQWJ_858861.entity = "TwoRangesFilter";
this.VA_DATEAMIJYBUPQWJ_858861.attribute = "date";
this.VA_DATEAMIJYBUPQWJ_858861.name="date";
this.VA_DATEAMIJYBUPQWJ_858861.id="VA_DATEAMIJYBUPQWJ_858861";
this.VA_DATEAMIJYBUPQWJ_858861.colSpan=1;
this.VA_DATEAMIJYBUPQWJ_858861.withoutLabel = false;
this.VA_DATEAMIJYBUPQWJ_858861.readOnly = ConstantsApi.mode.Query;
this.VA_DATEAMIJYBUPQWJ_858861.enabled = ConstantsApi.mode.All;
this.VA_DATEAMIJYBUPQWJ_858861.visible= ConstantsApi.mode.All;
this.VA_VABUTTONRPOCZLQ_765861.id = "VA_VABUTTONRPOCZLQ_765861";
this.VA_VABUTTONRPOCZLQ_765861.name = "VA_VABUTTONRPOCZLQ_765861";
this.VA_VABUTTONRPOCZLQ_765861.label = cobis.translate("ASSTS.LBL_ASSTS_BUSCARYEV_82731");
this.VA_VABUTTONRPOCZLQ_765861.colSpan = 1;
this.VA_VABUTTONRPOCZLQ_765861.withoutLabel = false;
this.VA_VABUTTONRPOCZLQ_765861.causesValidation=false;
this.VA_VABUTTONRPOCZLQ_765861.submitOnEnter=false;
this.VA_VABUTTONRPOCZLQ_765861.setFocus=false;
this.VA_VABUTTONRPOCZLQ_765861.enabled = ConstantsApi.mode.All;
this.VA_VABUTTONRPOCZLQ_765861.visible= ConstantsApi.mode.All;
this.QV_TJ88_MTX55.pageSize=5;
this.QV_TJ88_MTX55.id='QV_TJ88_MTX55';
this.QV_TJ88_MTX55.name='QV_TJ88_MTX55';
this.QV_TJ88_MTX55.pageable=true;
this.QV_TJ88_MTX55.sortable=false;
this.QV_TJ88_MTX55.resizable=true;
this.QV_TJ88_MTX55.scrollable=true
this.QV_TJ88_MTX55.confirmRowDeletion=true;
this.QV_TJ88_MTX55.exportToExcel=false;
this.QV_TJ88_MTX55.exportToPdf=false;
this.QV_TJ88_MTX55.height=0;
this.QV_TJ88_MTX55.filterableColumns=false;
this.QV_TJ88_MTX55.entityName='TwoRangesList';
this.QV_TJ88_MTX55.appendRecords=false;
this.QV_TJ88_MTX55.rowDetail=false;
this.QV_TJ88_MTX55.columnMenu = true;
this.QV_TJ88_MTX55.editMode=CommonsConstants.GRID_EDIT_MODE_INLINE;
this.QV_TJ88_MTX55.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
this.QV_TJ88_MTX55.actions=[ComplexConstants.GRID_ACTION_DELETE,ComplexConstants.GRID_ACTION_CREATE,ComplexConstants.GRID_ACTION_UPDATE];
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_TJ88_MTX55.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXIAN_717861",
label : cobis.translate('ASSTS.LBL_ASSTS_SECLJYBZO_20989'),
field : 'sequential',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXIAN_717861',
name :'sequential',
withoutLabel : true,
attribute : 'sequential',
entity : 'TwoRangesList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXRMO_640861",
field : 'minValue1',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXRMO_640861',
name :'minValue1',
withoutLabel : true,
attribute : 'minValue1',
entity : 'TwoRangesList',
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
id : "VA_TEXTINPUTBOXIBZ_621861",
field : 'maxValue1',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXIBZ_621861',
name :'maxValue1',
withoutLabel : true,
attribute : 'maxValue1',
entity : 'TwoRangesList',
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
id : "VA_TEXTINPUTBOXKHB_719861",
field : 'minValue2',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXKHB_719861',
name :'minValue2',
withoutLabel : true,
attribute : 'minValue2',
entity : 'TwoRangesList',
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
id : "VA_TEXTINPUTBOXXLP_853861",
field : 'maxValue2',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXXLP_853861',
name :'maxValue2',
withoutLabel : true,
attribute : 'maxValue2',
entity : 'TwoRangesList',
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
id : "VA_TEXTINPUTBOXFCE_366861",
label : cobis.translate('ASSTS.LBL_ASSTS_TASAQDBMK_45779'),
field : 'rate',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXFCE_366861',
name :'rate',
withoutLabel : true,
attribute : 'rate',
entity : 'TwoRangesList',
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
id : "VA_TEXTINPUTBOXIRJ_198861",
label : cobis.translate('ASSTS.LBL_ASSTS_VARIABLEE_54112'),
field : 'variable',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXIRJ_198861',
name :'variable',
withoutLabel : true,
attribute : 'variable',
entity : 'TwoRangesList',
maxlength: 10,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.UPPER_CASE,
className : 'grid-list-mo-right',
inputRestrictionValidators : { lettersAndNumbers: true},
}
},
{
id : "VA_DATEFIELDDCOFFG_555861",
label : cobis.translate('ASSTS.LBL_ASSTS_FECHAQWBP_23514'),
field : 'date',
visible : ConstantsApi.mode.All,
type : 'datefield',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_DATEFIELDDCOFFG_555861',
name :'date',
withoutLabel : true,
format : cobis.userContext.getValue(cobis.constant.DATE_FORMAT),
attribute : 'date',
textLocked : false,
readonly : ConstantsApi.mode.Query,
entity : 'TwoRangesList',
visible : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
}
},
]);
this.T_ASSTSWJQZCYYQ_887 = this.formBuilder.group({
TwoRangesFilter: this.formBuilder.group({
date:[{value: null, disabled: !this.VA_DATEAMIJYBUPQWJ_858861.visible},CobisDesignerUtil.getValidationFunctions(this.VA_DATEAMIJYBUPQWJ_858861.validationFunctions!)],
}
),
TwoRangesList: this.formBuilder.group({
idRange:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_TJ88_MTX55.columns,'VA_TEXTINPUTBOXTLQ_980861')],
sequential:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_TJ88_MTX55.columns,'VA_TEXTINPUTBOXIAN_717861')],
minValue1:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_TJ88_MTX55.columns,'VA_TEXTINPUTBOXRMO_640861')],
maxValue1:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_TJ88_MTX55.columns,'VA_TEXTINPUTBOXIBZ_621861')],
minValue2:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_TJ88_MTX55.columns,'VA_TEXTINPUTBOXKHB_719861')],
maxValue2:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_TJ88_MTX55.columns,'VA_TEXTINPUTBOXXLP_853861')],
rate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_TJ88_MTX55.columns,'VA_TEXTINPUTBOXFCE_366861')],
variable:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_TJ88_MTX55.columns,'VA_TEXTINPUTBOXIRJ_198861')],
date:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_TJ88_MTX55.columns,'VA_DATEFIELDDCOFFG_555861')],
}
),
});
}
}