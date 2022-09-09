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
public T_ASSTSXWJMINKN_821!:FormGroup;
public VC_RATERANGEE_778821:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_RATERANEEG_207502 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_MD41_JYZ75: CobisGridModel = new CobisGridModel();
public G_RATERANGGG_406502 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_RATERANEGE_251502 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_RATERANEGE_251502_default_blank: CobisSpacerModel = new CobisSpacerModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_RATERANGEE_778821.id="VC_RATERANGEE_778821";
this.VC_RATERANGEE_778821.name="RateRangeForm";
this.VC_RATERANGEE_778821.colSpan=1;
this.VC_RATERANGEE_778821.columns=1;
this.VC_RATERANGEE_778821.enabled=ConstantsApi.mode.All;
this.G_RATERANEEG_207502.id="G_RATERANEEG_207502";
this.G_RATERANEEG_207502.name="Group1571";
this.G_RATERANEEG_207502.columns=1;
this.G_RATERANEEG_207502.labelOrientation="Top";
this.G_RATERANEEG_207502.colSpan=1;
this.G_RATERANEEG_207502.enabled=ConstantsApi.mode.All;
this.G_RATERANEEG_207502.visible=ConstantsApi.mode.All;
this.G_RATERANEEG_207502.attList = ["idRange","rank","rangeName","concept","title1","dataType1","title2","dataType2","result2","dataTypeR2"];
this.G_RATERANGGG_406502.id="G_RATERANGGG_406502";
this.G_RATERANGGG_406502.name="GroupLayout2639";
this.G_RATERANGGG_406502.columns=1;
this.G_RATERANGGG_406502.childrenGroups = ["G_RATERANEGE_251502"];
this.G_RATERANGGG_406502.colSpan=1;
this.G_RATERANGGG_406502.enabled=ConstantsApi.mode.All;
this.G_RATERANGGG_406502.visible=ConstantsApi.mode.All;
this.G_RATERANEGE_251502.id="G_RATERANEGE_251502";
this.G_RATERANEGE_251502.name="Group2442";
this.G_RATERANEGE_251502.columns=3;
this.G_RATERANEGE_251502.labelOrientation="Top";
this.G_RATERANEGE_251502.colSpan=1;
this.G_RATERANEGE_251502.enabled=ConstantsApi.mode.All;
this.G_RATERANEGE_251502.visible=ConstantsApi.mode.All;
this.QV_MD41_JYZ75.pageSize=5;
this.QV_MD41_JYZ75.id='QV_MD41_JYZ75';
this.QV_MD41_JYZ75.name='QV_MD41_JYZ75';
this.QV_MD41_JYZ75.pageable=true;
this.QV_MD41_JYZ75.sortable=false;
this.QV_MD41_JYZ75.resizable=true;
this.QV_MD41_JYZ75.scrollable=true
this.QV_MD41_JYZ75.confirmRowDeletion=true;
this.QV_MD41_JYZ75.exportToExcel=false;
this.QV_MD41_JYZ75.exportToPdf=false;
this.QV_MD41_JYZ75.height=0;
this.QV_MD41_JYZ75.filterableColumns=false;
this.QV_MD41_JYZ75.entityName='RateRangeList';
this.QV_MD41_JYZ75.appendRecords=false;
this.QV_MD41_JYZ75.rowDetail=false;
this.QV_MD41_JYZ75.columnMenu = true;
this.QV_MD41_JYZ75.editMode=CommonsConstants.GRID_EDIT_MODE_INLINE;
this.QV_MD41_JYZ75.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
this.QV_MD41_JYZ75.actions=[ComplexConstants.GRID_ACTION_DELETE,ComplexConstants.GRID_ACTION_CREATE,ComplexConstants.GRID_ACTION_UPDATE];
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_MD41_JYZ75.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXEGT_745502",
label : cobis.translate('ASSTS.LBL_ASSTS_RANGOPAYZ_92039'),
field : 'rank',
visible : ConstantsApi.mode.All,
type : 'dropdownlist',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
data$: of([]),
properties :
{
id :'VA_TEXTINPUTBOXEGT_745502',
name :'rank',
attribute : 'rank',
entity : 'RateRangeList',
withoutLabel : false,
blankOption : true,
placeHolderLabel : cobis.translate("ASSTS.LBL_ASSTS_SELECCION_40905"),
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
filterType : FilterType.NONE,
showId : false,
isOnChangeControl:true,
textField : "value",
valueField : "code",
required : true,
validationFunctions: new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]),
messagesValidations : {
required: cobis.translate('ASSTS.MSG_ASSTS_REQUERIDO_35484')
},
}
},
{
id : "VA_TEXTINPUTBOXRAX_680502",
label : cobis.translate('ASSTS.LBL_ASSTS_NOMBREULS_81822'),
field : 'rangeName',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXRAX_680502',
name :'rangeName',
withoutLabel : true,
attribute : 'rangeName',
entity : 'RateRangeList',
maxlength: 64,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.UPPER_CASE,
required : true,
validationFunctions: new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]),
messagesValidations : {
required: cobis.translate('ASSTS.MSG_ASSTS_REQUERIDO_35484')
},
}
},
{
id : "VA_TEXTINPUTBOXDAG_434502",
label : cobis.translate('ASSTS.LBL_ASSTS_CONCEPTOO_16181'),
field : 'concept',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXDAG_434502',
name :'concept',
withoutLabel : true,
attribute : 'concept',
entity : 'RateRangeList',
maxlength: 10,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.UPPER_CASE,
inputRestrictionValidators : { lettersAndNumbers: true},
required : true,
validationFunctions: new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]),
messagesValidations : {
required: cobis.translate('ASSTS.MSG_ASSTS_REQUERIDO_35484')
},
}
},
{
id : "VA_TEXTINPUTBOXLDL_816502",
label : cobis.translate('ASSTS.LBL_ASSTS_TITULO1NG_48999'),
field : 'title1',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXLDL_816502',
name :'title1',
withoutLabel : true,
attribute : 'title1',
entity : 'RateRangeList',
maxlength: 10,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.CAPITALIZE,
inputRestrictionValidators : { lettersAndNumbers: true},
required : true,
validationFunctions: new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]),
messagesValidations : {
required: cobis.translate('ASSTS.MSG_ASSTS_REQUERIDO_35484')
},
}
},
{
id : "VA_TEXTINPUTBOXKUY_720502",
label : cobis.translate('ASSTS.LBL_ASSTS_TIPODATOO_50429'),
field : 'dataType1',
visible : ConstantsApi.mode.All,
type : 'dropdownlist',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
data$: of([]),
properties :
{
id :'VA_TEXTINPUTBOXKUY_720502',
name :'dataType1',
attribute : 'dataType1',
entity : 'RateRangeList',
withoutLabel : false,
blankOption : true,
placeHolderLabel : cobis.translate("ASSTS.LBL_ASSTS_SELECCION_40905"),
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
required: cobis.translate('ASSTS.MSG_ASSTS_REQUERIDO_35484')
},
}
},
{
id : "VA_TEXTINPUTBOXCGB_940502",
label : cobis.translate('ASSTS.LBL_ASSTS_TITULO2RJ_77924'),
field : 'title2',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXCGB_940502',
name :'title2',
withoutLabel : true,
attribute : 'title2',
entity : 'RateRangeList',
maxlength: 10,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.CAPITALIZE,
inputRestrictionValidators : { lettersAndNumbers: true},
}
},
{
id : "VA_TEXTINPUTBOXGBW_739502",
label : cobis.translate('ASSTS.LBL_ASSTS_TIPODAT22_26251'),
field : 'dataType2',
visible : ConstantsApi.mode.All,
type : 'dropdownlist',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
data$: of([]),
properties :
{
id :'VA_TEXTINPUTBOXGBW_739502',
name :'dataType2',
attribute : 'dataType2',
entity : 'RateRangeList',
withoutLabel : false,
blankOption : true,
placeHolderLabel : cobis.translate("ASSTS.LBL_ASSTS_SELECCION_40905"),
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
filterType : FilterType.NONE,
showId : false,
textField : "value",
valueField : "code",
}
},
{
id : "VA_TEXTINPUTBOXLKU_748502",
label : cobis.translate('ASSTS.LBL_ASSTS_RESULT2SQ_58424'),
field : 'result2',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXLKU_748502',
name :'result2',
withoutLabel : true,
attribute : 'result2',
entity : 'RateRangeList',
maxlength: 10,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.CAPITALIZE,
inputRestrictionValidators : { lettersAndNumbers: true},
}
},
{
id : "VA_TEXTINPUTBOXQFM_150502",
label : cobis.translate('ASSTS.LBL_ASSTS_TIPODATOR_78992'),
field : 'dataTypeR2',
visible : ConstantsApi.mode.All,
type : 'dropdownlist',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
data$: of([]),
properties :
{
id :'VA_TEXTINPUTBOXQFM_150502',
name :'dataTypeR2',
attribute : 'dataTypeR2',
entity : 'RateRangeList',
withoutLabel : false,
blankOption : true,
placeHolderLabel : cobis.translate("ASSTS.LBL_ASSTS_SELECCION_40905"),
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
filterType : FilterType.NONE,
showId : false,
textField : "value",
valueField : "code",
}
},
]);
this.G_RATERANEGE_251502_default_blank.id = "G_RATERANEGE_251502_default_blank";
this.G_RATERANEGE_251502_default_blank.name = "G_RATERANEGE_251502_default_blank";
this.G_RATERANEGE_251502_default_blank.colSpan = 1;
this.G_RATERANEGE_251502_default_blank.visible= ConstantsApi.mode.All;
this.T_ASSTSXWJMINKN_821 = this.formBuilder.group({
RateRangeList: this.formBuilder.group({
idRange:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MD41_JYZ75.columns,'VA_TEXTINPUTBOXGJG_569502')],
rank:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MD41_JYZ75.columns,'VA_TEXTINPUTBOXEGT_745502')],
rangeName:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MD41_JYZ75.columns,'VA_TEXTINPUTBOXRAX_680502')],
concept:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MD41_JYZ75.columns,'VA_TEXTINPUTBOXDAG_434502')],
title1:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MD41_JYZ75.columns,'VA_TEXTINPUTBOXLDL_816502')],
dataType1:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MD41_JYZ75.columns,'VA_TEXTINPUTBOXKUY_720502')],
title2:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MD41_JYZ75.columns,'VA_TEXTINPUTBOXCGB_940502')],
dataType2:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MD41_JYZ75.columns,'VA_TEXTINPUTBOXGBW_739502')],
result2:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MD41_JYZ75.columns,'VA_TEXTINPUTBOXLKU_748502')],
dataTypeR2:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_MD41_JYZ75.columns,'VA_TEXTINPUTBOXQFM_150502')],
}
),
});
}
}