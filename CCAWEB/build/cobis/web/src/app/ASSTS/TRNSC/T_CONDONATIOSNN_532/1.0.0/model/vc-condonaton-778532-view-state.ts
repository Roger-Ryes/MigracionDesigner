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
public T_CONDONATIOSNN_532!:FormGroup;
public VC_CONDONATON_778532:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_CONDONATTT_517764 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_7324_98967: CobisGridModel = new CobisGridModel();
public CM_TCONDONA_SS3: CobisButtonModel = new CobisButtonModel();
public CM_TCONDONA_NAN: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_CONDONATON_778532.id="VC_CONDONATON_778532";
this.VC_CONDONATON_778532.name="CondonationsForm";
this.VC_CONDONATON_778532.colSpan=1;
this.VC_CONDONATON_778532.columns=1;
this.VC_CONDONATON_778532.enabled=ConstantsApi.mode.All;
this.G_CONDONATTT_517764.id="G_CONDONATTT_517764";
this.G_CONDONATTT_517764.name="Group2462";
this.G_CONDONATTT_517764.columns=1;
this.G_CONDONATTT_517764.labelOrientation="Top";
this.G_CONDONATTT_517764.colSpan=1;
this.G_CONDONATTT_517764.enabled=ConstantsApi.mode.All;
this.G_CONDONATTT_517764.visible=ConstantsApi.mode.All;
this.G_CONDONATTT_517764.attList = ["concept","observation","pastDueAmount","currentAmount","dueAmount","totalValue","valueToCondone"];
this.CM_TCONDONA_SS3.id = "CM_TCONDONA_SS3";
this.CM_TCONDONA_SS3.name = "Command1";
this.CM_TCONDONA_SS3.causesValidation=false;
this.CM_TCONDONA_SS3.submitOnEnter=false;
this.CM_TCONDONA_SS3.setFocus=false;
this.CM_TCONDONA_SS3.close=false;
this.CM_TCONDONA_SS3.label = cobis.translate("ASSTS.LBL_ASSTS_GUARDARRI_81055");
this.CM_TCONDONA_SS3.enabled = ConstantsApi.mode.All;
this.CM_TCONDONA_SS3.visible= ConstantsApi.mode.All;
this.CM_TCONDONA_NAN.id = "CM_TCONDONA_NAN";
this.CM_TCONDONA_NAN.name = "Command2";
this.CM_TCONDONA_NAN.causesValidation=false;
this.CM_TCONDONA_NAN.submitOnEnter=false;
this.CM_TCONDONA_NAN.setFocus=false;
this.CM_TCONDONA_NAN.close=false;
this.CM_TCONDONA_NAN.label = cobis.translate("ASSTS.LBL_ASSTS_CANCELARR_70217");
this.CM_TCONDONA_NAN.enabled = ConstantsApi.mode.All;
this.CM_TCONDONA_NAN.visible= ConstantsApi.mode.All;
this.QV_7324_98967.pageSize=5;
this.QV_7324_98967.id='QV_7324_98967';
this.QV_7324_98967.name='QV_7324_98967';
this.QV_7324_98967.pageable=true;
this.QV_7324_98967.sortable=false;
this.QV_7324_98967.resizable=true;
this.QV_7324_98967.scrollable=true
this.QV_7324_98967.confirmRowDeletion=false;
this.QV_7324_98967.exportToExcel=false;
this.QV_7324_98967.exportToPdf=false;
this.QV_7324_98967.height=0;
this.QV_7324_98967.filterableColumns=false;
this.QV_7324_98967.entityName='CondonationDetail';
this.QV_7324_98967.appendRecords=false;
this.QV_7324_98967.rowDetail=false;
this.QV_7324_98967.summarizedBy =[
{field: 'valueToCondone', aggregate: 'sum'}
];
this.QV_7324_98967.columnMenu = true;
this.QV_7324_98967.editMode=CommonsConstants.GRID_EDIT_MODE_INLINE;
this.QV_7324_98967.modeSelection=ComplexConstants.GRID_MODE_SELECTION_NONE;
this.QV_7324_98967.actions=[ComplexConstants.GRID_ACTION_UPDATE];
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_7324_98967.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXVSD_563764",
label : cobis.translate('ASSTS.LBL_ASSTS_CONCEPTOO_16181'),
field : 'concept',
visible : ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query,
type : 'combobox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 200,
data$: of([]),
properties :
{
id :'VA_TEXTINPUTBOXVSD_563764',
name :'concept',
attribute : 'concept',
entity : 'CondonationDetail',
withoutLabel : false,
blankOption : true,
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
required: cobis.translate('ASSTS.MSG_ASSTS_ELCAMPOOC_91834')
},
}
},
{
id : "VA_TEXTINPUTBOXEPR_994764",
label : cobis.translate('ASSTS.LBL_ASSTS_OBSERVACC_16512'),
field : 'observation',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 250,
properties :
{
id :'VA_TEXTINPUTBOXEPR_994764',
name :'observation',
withoutLabel : true,
attribute : 'observation',
entity : 'CondonationDetail',
maxlength: 50,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.UPPER_CASE,
required : true,
validationFunctions: new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]),
messagesValidations : {
required: cobis.translate('ASSTS.MSG_ASSTS_ELCAMPOON_25357')
},
}
},
{
id : "VA_TEXTINPUTBOXTSF_920764",
label : cobis.translate('ASSTS.LBL_ASSTS_VENCIDOUG_82584'),
field : 'pastDueAmount',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXTSF_920764',
name :'pastDueAmount',
withoutLabel : true,
attribute : 'pastDueAmount',
entity : 'CondonationDetail',
format : '##,#.00',
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
id : "VA_TEXTINPUTBOXABB_665764",
label : cobis.translate('ASSTS.LBL_ASSTS_VIGENTEON_55349'),
field : 'currentAmount',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXABB_665764',
name :'currentAmount',
withoutLabel : true,
attribute : 'currentAmount',
entity : 'CondonationDetail',
format : '##,#.00',
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
id : "VA_TEXTINPUTBOXBSX_772764",
label : cobis.translate('ASSTS.LBL_ASSTS_PORVENCER_21871'),
field : 'dueAmount',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXBSX_772764',
name :'dueAmount',
withoutLabel : true,
attribute : 'dueAmount',
entity : 'CondonationDetail',
format : '##,#.00',
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
id : "VA_TEXTINPUTBOXBOS_972764",
label : cobis.translate('ASSTS.LBL_ASSTS_TOTALBPNF_51557'),
field : 'totalValue',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXBOS_972764',
name :'totalValue',
withoutLabel : true,
attribute : 'totalValue',
entity : 'CondonationDetail',
format : '##,#.00',
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
id : "VA_TEXTINPUTBOXECH_722764",
label : cobis.translate('ASSTS.LBL_ASSTS_VALORACAR_43691'),
field : 'valueToCondone',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 160,
properties :
{
id :'VA_TEXTINPUTBOXECH_722764',
name :'valueToCondone',
withoutLabel : true,
attribute : 'valueToCondone',
entity : 'CondonationDetail',
format : '#,##0.00',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
summarizedByLabel: "Total",
summarizedByFormat: "n2",
isCustomValidated : true,
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
this.T_CONDONATIOSNN_532 = this.formBuilder.group({
CondonationDetail: this.formBuilder.group({
concept:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7324_98967.columns,'VA_TEXTINPUTBOXVSD_563764')],
observation:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7324_98967.columns,'VA_TEXTINPUTBOXEPR_994764')],
pastDueAmount:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7324_98967.columns,'VA_TEXTINPUTBOXTSF_920764')],
currentAmount:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7324_98967.columns,'VA_TEXTINPUTBOXABB_665764')],
dueAmount:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7324_98967.columns,'VA_TEXTINPUTBOXBSX_772764')],
totalValue:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7324_98967.columns,'VA_TEXTINPUTBOXBOS_972764')],
valueToCondone:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_7324_98967.columns,'VA_TEXTINPUTBOXECH_722764')],
}
),
});
}
}