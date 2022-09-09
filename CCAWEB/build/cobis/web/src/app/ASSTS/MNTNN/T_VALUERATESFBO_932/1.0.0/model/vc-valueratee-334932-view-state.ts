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
public T_VALUERATESFBO_932!:FormGroup;
public VC_VALUERATEE_334932:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_VALUERATST_602476 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_1722_99596: CobisGridModel = new CobisGridModel();
public G_VALUERAESS_300476 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_5693_54772: CobisGridModel = new CobisGridModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_VALUERATEE_334932.id="VC_VALUERATEE_334932";
this.VC_VALUERATEE_334932.name="ValueRates";
this.VC_VALUERATEE_334932.colSpan=1;
this.VC_VALUERATEE_334932.columns=1;
this.VC_VALUERATEE_334932.enabled=ConstantsApi.mode.All;
this.G_VALUERATST_602476.id="G_VALUERATST_602476";
this.G_VALUERATST_602476.label=cobis.translate("ASSTS.LBL_ASSTS_TIPOTASAA_68977");
this.G_VALUERATST_602476.name="Group1755";
this.G_VALUERATST_602476.columns=1;
this.G_VALUERATST_602476.labelOrientation="Top";
this.G_VALUERATST_602476.colSpan=1;
this.G_VALUERATST_602476.enabled=ConstantsApi.mode.All;
this.G_VALUERATST_602476.visible=ConstantsApi.mode.All;
this.G_VALUERATST_602476.attList = ["identifier","description","clase","ratePit"];
this.G_VALUERAESS_300476.id="G_VALUERAESS_300476";
this.G_VALUERAESS_300476.label=cobis.translate("ASSTS.LBL_ASSTS_TASASWEXW_63256");
this.G_VALUERAESS_300476.name="Group2983";
this.G_VALUERAESS_300476.columns=1;
this.G_VALUERAESS_300476.labelOrientation="Top";
this.G_VALUERAESS_300476.colSpan=1;
this.G_VALUERAESS_300476.enabled=ConstantsApi.mode.All;
this.G_VALUERAESS_300476.visible=ConstantsApi.mode.All;
this.G_VALUERAESS_300476.attList = ["portfolioClass","signDefault","valueDeafult","signMin","valueMin","signMax","valueMax","referenceValue","typePoints","numberDecimals"];
this.QV_1722_99596.pageSize=4;
this.QV_1722_99596.id='QV_1722_99596';
this.QV_1722_99596.name='QV_1722_99596';
this.QV_1722_99596.pageable=true;
this.QV_1722_99596.sortable=false;
this.QV_1722_99596.resizable=true;
this.QV_1722_99596.scrollable=true
this.QV_1722_99596.confirmRowDeletion=true;
this.QV_1722_99596.exportToExcel=false;
this.QV_1722_99596.exportToPdf=false;
this.QV_1722_99596.height=0;
this.QV_1722_99596.filterableColumns=false;
this.QV_1722_99596.entityName='TypeRates';
this.QV_1722_99596.appendRecords=false;
this.QV_1722_99596.rowDetail=false;
this.QV_1722_99596.columnMenu = true;
this.QV_1722_99596.editMode=CommonsConstants.GRID_EDIT_MODE_MODAL;
this.QV_1722_99596.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
this.QV_1722_99596.actions=[ComplexConstants.GRID_ACTION_DELETE,ComplexConstants.GRID_ACTION_CREATE,ComplexConstants.GRID_ACTION_UPDATE];
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_1722_99596.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXJPR_423476",
label : cobis.translate('ASSTS.LBL_ASSTS_IDENTIFCR_66965'),
field : 'identifier',
visible : ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXJPR_423476',
name :'identifier',
withoutLabel : true,
attribute : 'identifier',
entity : 'TypeRates',
maxlength: 20,
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
id : "VA_TEXTINPUTBOXDHV_388476",
label : cobis.translate('ASSTS.LBL_ASSTS_DESCRIPOO_35259'),
field : 'description',
visible : ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 200,
properties :
{
id :'VA_TEXTINPUTBOXDHV_388476',
name :'description',
withoutLabel : true,
attribute : 'description',
entity : 'TypeRates',
maxlength: 100,
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
id : "VA_TEXTINPUTBOXNWQ_921476",
label : cobis.translate('ASSTS.LBL_ASSTS_CLASEBNBK_90328'),
field : 'clase',
visible : ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXNWQ_921476',
name :'clase',
withoutLabel : true,
attribute : 'clase',
entity : 'TypeRates',
maxlength: 1,
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
id : "VA_TEXTINPUTBOXZYD_294476",
label : cobis.translate('ASSTS.LBL_ASSTS_TASAPITGY_32459'),
field : 'ratePit',
visible : ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXZYD_294476',
name :'ratePit',
withoutLabel : true,
attribute : 'ratePit',
entity : 'TypeRates',
maxlength: 1,
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
this.QV_5693_54772.pageSize=4;
this.QV_5693_54772.id='QV_5693_54772';
this.QV_5693_54772.name='QV_5693_54772';
this.QV_5693_54772.pageable=true;
this.QV_5693_54772.sortable=false;
this.QV_5693_54772.resizable=true;
this.QV_5693_54772.scrollable=true
this.QV_5693_54772.confirmRowDeletion=true;
this.QV_5693_54772.exportToExcel=false;
this.QV_5693_54772.exportToPdf=false;
this.QV_5693_54772.height=0;
this.QV_5693_54772.filterableColumns=false;
this.QV_5693_54772.entityName='Rates';
this.QV_5693_54772.appendRecords=false;
this.QV_5693_54772.rowDetail=false;
this.QV_5693_54772.columnMenu = true;
this.QV_5693_54772.editMode=CommonsConstants.GRID_EDIT_MODE_MODAL;
this.QV_5693_54772.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
this.QV_5693_54772.actions=[ComplexConstants.GRID_ACTION_DELETE,ComplexConstants.GRID_ACTION_CREATE,ComplexConstants.GRID_ACTION_UPDATE];
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_5693_54772.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXDPU_105476",
label : cobis.translate('ASSTS.LBL_ASSTS_SECTORYDN_72932'),
field : 'portfolioClass',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 60,
properties :
{
id :'VA_TEXTINPUTBOXDPU_105476',
name :'portfolioClass',
withoutLabel : true,
attribute : 'portfolioClass',
entity : 'Rates',
maxlength: 50,
readOnly : ConstantsApi.mode.Query,
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
id : "VA_TEXTINPUTBOXKJK_302476",
label : cobis.translate('ASSTS.LBL_ASSTS_SIGDEFEOC_85304'),
field : 'signDefault',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXKJK_302476',
name :'signDefault',
withoutLabel : true,
attribute : 'signDefault',
entity : 'Rates',
maxlength: 1,
readOnly : ConstantsApi.mode.Query,
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
id : "VA_TEXTINPUTBOXAYP_243476",
label : cobis.translate('ASSTS.LBL_ASSTS_VALDEFEOO_14049'),
field : 'valueDeafult',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXAYP_243476',
name :'valueDeafult',
withoutLabel : true,
attribute : 'valueDeafult',
entity : 'Rates',
format : '#,######0.000000',
readOnly : ConstantsApi.mode.Query,
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
id : "VA_TEXTINPUTBOXMNM_532476",
label : cobis.translate('ASSTS.LBL_ASSTS_SIGMINIMO_52027'),
field : 'signMin',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXMNM_532476',
name :'signMin',
withoutLabel : true,
attribute : 'signMin',
entity : 'Rates',
maxlength: 1,
readOnly : ConstantsApi.mode.Query,
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
id : "VA_TEXTINPUTBOXXGJ_686476",
label : cobis.translate('ASSTS.LBL_ASSTS_VALMINIMO_80016'),
field : 'valueMin',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXXGJ_686476',
name :'valueMin',
withoutLabel : true,
attribute : 'valueMin',
entity : 'Rates',
format : '#,######0.000000',
readOnly : ConstantsApi.mode.Query,
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
id : "VA_TEXTINPUTBOXUQS_969476",
label : cobis.translate('ASSTS.LBL_ASSTS_SIGMAXIOM_73301'),
field : 'signMax',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXUQS_969476',
name :'signMax',
withoutLabel : true,
attribute : 'signMax',
entity : 'Rates',
maxlength: 1,
readOnly : ConstantsApi.mode.Query,
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
id : "VA_TEXTINPUTBOXOWX_809476",
label : cobis.translate('ASSTS.LBL_ASSTS_VALMAXIOM_82307'),
field : 'valueMax',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXOWX_809476',
name :'valueMax',
withoutLabel : true,
attribute : 'valueMax',
entity : 'Rates',
format : '#,######0.000000',
readOnly : ConstantsApi.mode.Query,
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
id : "VA_TEXTINPUTBOXYSN_932476",
label : cobis.translate('ASSTS.LBL_ASSTS_REFERENCI_47355'),
field : 'referenceValue',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXYSN_932476',
name :'referenceValue',
withoutLabel : true,
attribute : 'referenceValue',
entity : 'Rates',
maxlength: 50,
readOnly : ConstantsApi.mode.Query,
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
id : "VA_TEXTINPUTBOXIDK_995476",
label : cobis.translate('ASSTS.LBL_ASSTS_TIPOPUNOS_62324'),
field : 'typePoints',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 125,
properties :
{
id :'VA_TEXTINPUTBOXIDK_995476',
name :'typePoints',
withoutLabel : true,
attribute : 'typePoints',
entity : 'Rates',
maxlength: 50,
readOnly : ConstantsApi.mode.Query,
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
id : "VA_TEXTINPUTBOXYOK_680476",
label : cobis.translate('ASSTS.LBL_ASSTS_NUMDECIEE_20117'),
field : 'numberDecimals',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 125,
properties :
{
id :'VA_TEXTINPUTBOXYOK_680476',
name :'numberDecimals',
withoutLabel : true,
attribute : 'numberDecimals',
entity : 'Rates',
readOnly : ConstantsApi.mode.Query,
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
this.T_VALUERATESFBO_932 = this.formBuilder.group({
TypeRates: this.formBuilder.group({
identifier:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_1722_99596.columns,'VA_TEXTINPUTBOXJPR_423476')],
description:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_1722_99596.columns,'VA_TEXTINPUTBOXDHV_388476')],
clase:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_1722_99596.columns,'VA_TEXTINPUTBOXNWQ_921476')],
ratePit:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_1722_99596.columns,'VA_TEXTINPUTBOXZYD_294476')],
}
),
Rates: this.formBuilder.group({
portfolioClass:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5693_54772.columns,'VA_TEXTINPUTBOXDPU_105476')],
signDefault:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5693_54772.columns,'VA_TEXTINPUTBOXKJK_302476')],
valueDeafult:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5693_54772.columns,'VA_TEXTINPUTBOXAYP_243476')],
signMin:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5693_54772.columns,'VA_TEXTINPUTBOXMNM_532476')],
valueMin:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5693_54772.columns,'VA_TEXTINPUTBOXXGJ_686476')],
signMax:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5693_54772.columns,'VA_TEXTINPUTBOXUQS_969476')],
valueMax:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5693_54772.columns,'VA_TEXTINPUTBOXOWX_809476')],
referenceValue:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5693_54772.columns,'VA_TEXTINPUTBOXYSN_932476')],
typePoints:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5693_54772.columns,'VA_TEXTINPUTBOXIDK_995476')],
numberDecimals:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5693_54772.columns,'VA_TEXTINPUTBOXYOK_680476')],
lockedMin:[null],
rateType:[null],
lockedDefault:[null],
value:[null],
clase:[null],
lockedMax:[null],
}
),
});
}
}