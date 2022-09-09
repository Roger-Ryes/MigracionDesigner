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
public T_REAJUSTECAMMB_801!:FormGroup;
public VC_REAJUSTEMF_738801:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_REAJUSTMEC_674319 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_5831_17646: CobisGridModel = new CobisGridModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_REAJUSTEMF_738801.id="VC_REAJUSTEMF_738801";
this.VC_REAJUSTEMF_738801.name="ReadjustmentLoanCabForm";
this.VC_REAJUSTEMF_738801.colSpan=1;
this.VC_REAJUSTEMF_738801.columns=1;
this.VC_REAJUSTEMF_738801.enabled=ConstantsApi.mode.All;
this.G_REAJUSTMEC_674319.id="G_REAJUSTMEC_674319";
this.G_REAJUSTMEC_674319.name="Group2576";
this.G_REAJUSTMEC_674319.columns=1;
this.G_REAJUSTMEC_674319.labelOrientation="Top";
this.G_REAJUSTMEC_674319.colSpan=1;
this.G_REAJUSTMEC_674319.enabled=ConstantsApi.mode.All;
this.G_REAJUSTMEC_674319.visible=ConstantsApi.mode.All;
this.G_REAJUSTMEC_674319.attList = ["date","mantCuota","secuencial","desagio"];
this.QV_5831_17646.pageSize=10;
this.QV_5831_17646.id='QV_5831_17646';
this.QV_5831_17646.name='QV_5831_17646';
this.QV_5831_17646.pageable=true;
this.QV_5831_17646.sortable=false;
this.QV_5831_17646.resizable=true;
this.QV_5831_17646.scrollable=true
this.QV_5831_17646.confirmRowDeletion=true;
this.QV_5831_17646.exportToExcel=false;
this.QV_5831_17646.exportToPdf=false;
this.QV_5831_17646.height=0;
this.QV_5831_17646.filterableColumns=false;
this.QV_5831_17646.entityName='ReadjustmentLoanCab';
this.QV_5831_17646.appendRecords=true;
this.QV_5831_17646.rowDetail=true;
this.QV_5831_17646.columnMenu = true;
this.QV_5831_17646.editMode=CommonsConstants.GRID_EDIT_MODE_INLINE;
this.QV_5831_17646.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
this.QV_5831_17646.actions=[ComplexConstants.GRID_ACTION_DELETE,ComplexConstants.GRID_ACTION_UPDATE];
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_5831_17646.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXCKZ_136319",
label : cobis.translate('ASSTS.LBL_ASSTS_FECHAQWBP_23514'),
field : 'date',
visible : ConstantsApi.mode.All,
type : 'datefield',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_TEXTINPUTBOXCKZ_136319',
name :'fecha',
withoutLabel : true,
format : cobis.userContext.getValue(cobis.constant.DATE_FORMAT),
attribute : 'date',
readonly : ConstantsApi.mode.Query,
entity : 'ReadjustmentLoanCab',
visible : true,
readOnly : ConstantsApi.mode.Query,
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
id : "VA_TEXTINPUTBOXQCR_748319",
label : cobis.translate('ASSTS.LBL_ASSTS_MANTCUOTT_96843'),
field : 'mantCuota',
visible : ConstantsApi.mode.All,
type : 'combobox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
data$: of([]),
properties :
{
id :'VA_TEXTINPUTBOXQCR_748319',
name :'mantCuota',
attribute : 'mantCuota',
entity : 'ReadjustmentLoanCab',
withoutLabel : false,
blankOption : false,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
filterType : FilterType.NONE,
showId : false,
textField : "value",
valueField : "code",
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
id : "VA_TEXTINPUTBOXKUR_906319",
label : cobis.translate('ASSTS.LBL_ASSTS_SECUENCAA_14570'),
field : 'secuencial',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXKUR_906319',
name :'secuencial',
withoutLabel : true,
attribute : 'secuencial',
entity : 'ReadjustmentLoanCab',
format : '########',
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
id : "VA_TEXTINPUTBOXPIL_163319",
label : cobis.translate('ASSTS.LBL_ASSTS_TIPOLDSKB_46090'),
field : 'desagio',
visible : ConstantsApi.mode.All,
type : 'combobox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
data$: of([]),
properties :
{
id :'VA_TEXTINPUTBOXPIL_163319',
name :'tipo',
attribute : 'desagio',
entity : 'ReadjustmentLoanCab',
withoutLabel : false,
blankOption : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
filterType : FilterType.NONE,
showId : false,
textField : "value",
valueField : "code",
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
this.T_REAJUSTECAMMB_801 = this.formBuilder.group({
ReadjustmentLoanCab: this.formBuilder.group({
date:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5831_17646.columns,'VA_TEXTINPUTBOXCKZ_136319')],
mantCuota:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5831_17646.columns,'VA_TEXTINPUTBOXQCR_748319')],
secuencial:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5831_17646.columns,'VA_TEXTINPUTBOXKUR_906319')],
desagio:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5831_17646.columns,'VA_TEXTINPUTBOXPIL_163319')],
}
),
});
}
}