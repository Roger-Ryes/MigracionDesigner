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
public T_LNSPRIIYONZUA_572!:FormGroup;
public VC_LOANSALEVA_321572:CobisGroupBoxModel = new CobisGroupBoxModel();
public uploaders: any;
public G_LOANSALEEE_353584 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANSALEEE_206584 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_PT51_RHB11: CobisGridModel = new CobisGridModel();
public G_LOANSALEEE_654584 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_PK48_JNB79: CobisGridModel = new CobisGridModel();
public VA_1TLZKSACKIJLFKK_217584: CobisDropDownListModel = new CobisDropDownListModel();
public Spacer2934: CobisSpacerModel = new CobisSpacerModel();
public VA_6427AZGDIHWLKXG_205584: CobisFileUploadModel = new CobisFileUploadModel();
public VA_VABUTTONFVNJKMP_639584: CobisButtonModel = new CobisButtonModel();
public CM_TLNSPRII_6S6: CobisButtonModel = new CobisButtonModel();
public CM_TLNSPRII_7SR: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_LOANSALEVA_321572.id="VC_LOANSALEVA_321572";
this.VC_LOANSALEVA_321572.name="LoanSaleForm";
this.VC_LOANSALEVA_321572.colSpan=1;
this.VC_LOANSALEVA_321572.columns=1;
this.VC_LOANSALEVA_321572.enabled=ConstantsApi.mode.All;
this.G_LOANSALEEE_353584.id="G_LOANSALEEE_353584";
this.G_LOANSALEEE_353584.name="Group2333";
this.G_LOANSALEEE_353584.columns=3;
this.G_LOANSALEEE_353584.labelOrientation="Top";
this.G_LOANSALEEE_353584.colSpan=1;
this.G_LOANSALEEE_353584.enabled=ConstantsApi.mode.All;
this.G_LOANSALEEE_353584.visible=ConstantsApi.mode.All;
this.G_LOANSALEEE_353584.attList = ["company","archive"];
this.G_LOANSALEEE_206584.id="G_LOANSALEEE_206584";
this.G_LOANSALEEE_206584.name="Group2515";
this.G_LOANSALEEE_206584.columns=1;
this.G_LOANSALEEE_206584.labelOrientation="Top";
this.G_LOANSALEEE_206584.colSpan=1;
this.G_LOANSALEEE_206584.enabled=ConstantsApi.mode.All;
this.G_LOANSALEEE_206584.visible=ConstantsApi.mode.All;
this.G_LOANSALEEE_206584.attList = ["sequential","date","company","state","archive","user"];
this.G_LOANSALEEE_654584.id="G_LOANSALEEE_654584";
this.G_LOANSALEEE_654584.name="Group1679";
this.G_LOANSALEEE_654584.columns=1;
this.G_LOANSALEEE_654584.labelOrientation="Top";
this.G_LOANSALEEE_654584.colSpan=1;
this.G_LOANSALEEE_654584.enabled=ConstantsApi.mode.All;
this.G_LOANSALEEE_654584.visible=ConstantsApi.mode.All;
this.G_LOANSALEEE_654584.attList = ["operation","dateSale","state","error","errorDescription"];
this.CM_TLNSPRII_6S6.id = "CM_TLNSPRII_6S6";
this.CM_TLNSPRII_6S6.name = "Command1";
this.CM_TLNSPRII_6S6.causesValidation=true;
this.CM_TLNSPRII_6S6.submitOnEnter=false;
this.CM_TLNSPRII_6S6.setFocus=false;
this.CM_TLNSPRII_6S6.close=false;
this.CM_TLNSPRII_6S6.label = cobis.translate("LNSPR.LBL_LNSPR_GUARDARRI_81055");
this.CM_TLNSPRII_6S6.enabled = ConstantsApi.mode.All;
this.CM_TLNSPRII_6S6.visible= ConstantsApi.mode.All;
this.CM_TLNSPRII_7SR.id = "CM_TLNSPRII_7SR";
this.CM_TLNSPRII_7SR.name = "Command3";
this.CM_TLNSPRII_7SR.causesValidation=false;
this.CM_TLNSPRII_7SR.submitOnEnter=false;
this.CM_TLNSPRII_7SR.setFocus=false;
this.CM_TLNSPRII_7SR.close=false;
this.CM_TLNSPRII_7SR.label = cobis.translate("LNSPR.LBL_LOANS_LIMPIARVF_75606");
this.CM_TLNSPRII_7SR.enabled = ConstantsApi.mode.All;
this.CM_TLNSPRII_7SR.visible= ConstantsApi.mode.All;
this.VA_1TLZKSACKIJLFKK_217584.label = cobis.translate("LNSPR.LBL_LNSPR_EMPRESAJZ_94816");
this.VA_1TLZKSACKIJLFKK_217584.blankOption=true;
this.VA_1TLZKSACKIJLFKK_217584.placeHolderLabel = cobis.translate("LNSPR.LBL_LOANS_SELECCIOE_40160");
this.VA_1TLZKSACKIJLFKK_217584.entity = "LoanSaleFilter";
this.VA_1TLZKSACKIJLFKK_217584.attribute = "company";
this.VA_1TLZKSACKIJLFKK_217584.textField = "value";
this.VA_1TLZKSACKIJLFKK_217584.valueField = "code";
this.VA_1TLZKSACKIJLFKK_217584.showId= true;
this.VA_1TLZKSACKIJLFKK_217584.name="company";
this.VA_1TLZKSACKIJLFKK_217584.id="VA_1TLZKSACKIJLFKK_217584";
this.VA_1TLZKSACKIJLFKK_217584.colSpan=1;
this.VA_1TLZKSACKIJLFKK_217584.withoutLabel = false;
this.VA_1TLZKSACKIJLFKK_217584.readOnly = ConstantsApi.mode.Query;
this.VA_1TLZKSACKIJLFKK_217584.enabled = ConstantsApi.mode.All;
this.VA_1TLZKSACKIJLFKK_217584.visible= ConstantsApi.mode.All;
this.VA_1TLZKSACKIJLFKK_217584.required = true;
this.VA_1TLZKSACKIJLFKK_217584.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_1TLZKSACKIJLFKK_217584.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LNSPR_CAMPOREIQ_59717')
};
this.Spacer2934.id = "Spacer2934";
this.Spacer2934.name = "";
this.Spacer2934.colSpan = 1;
this.Spacer2934.visible= ConstantsApi.mode.All;
this.VA_6427AZGDIHWLKXG_205584.id = "VA_6427AZGDIHWLKXG_205584";
this.VA_6427AZGDIHWLKXG_205584.name = "archive";
this.VA_6427AZGDIHWLKXG_205584.tooltip=cobis.translate("LNSPR.LBL_LNSPR_TIPOARCXX_95214");
this.VA_6427AZGDIHWLKXG_205584.label = cobis.translate("LNSPR.LBL_LOANS_CARGARAVO_29365");
this.VA_6427AZGDIHWLKXG_205584.entity = "LoanSaleFilter";
this.VA_6427AZGDIHWLKXG_205584.attribute = "archive";
this.VA_6427AZGDIHWLKXG_205584.colSpan = 1;
this.VA_6427AZGDIHWLKXG_205584.withoutLabel = false;
this.VA_6427AZGDIHWLKXG_205584.readOnly =ConstantsApi.mode.Query;
this.VA_6427AZGDIHWLKXG_205584.enabled = ConstantsApi.mode.All;
this.VA_6427AZGDIHWLKXG_205584.visible= ConstantsApi.mode.All;
this.VA_VABUTTONFVNJKMP_639584.id = "VA_VABUTTONFVNJKMP_639584";
this.VA_VABUTTONFVNJKMP_639584.name = "VA_VABUTTONFVNJKMP_639584";
this.VA_VABUTTONFVNJKMP_639584.label = cobis.translate("LNSPR.LBL_LNSPR_BUSCARKBJ_59373");
this.VA_VABUTTONFVNJKMP_639584.colSpan = 1;
this.VA_VABUTTONFVNJKMP_639584.withoutLabel = false;
this.VA_VABUTTONFVNJKMP_639584.causesValidation=false;
this.VA_VABUTTONFVNJKMP_639584.submitOnEnter=false;
this.VA_VABUTTONFVNJKMP_639584.setFocus=false;
this.VA_VABUTTONFVNJKMP_639584.enabled = ConstantsApi.mode.All;
this.VA_VABUTTONFVNJKMP_639584.visible= ConstantsApi.mode.All;
this.VA_VABUTTONFVNJKMP_639584.icon = "glyphicon glyphicon-search";
this.QV_PT51_RHB11.pageSize=10;
this.QV_PT51_RHB11.id='QV_PT51_RHB11';
this.QV_PT51_RHB11.name='QV_PT51_RHB11';
this.QV_PT51_RHB11.pageable=true;
this.QV_PT51_RHB11.sortable=false;
this.QV_PT51_RHB11.resizable=true;
this.QV_PT51_RHB11.scrollable=true
this.QV_PT51_RHB11.confirmRowDeletion=true;
this.QV_PT51_RHB11.exportToExcel=true;
this.QV_PT51_RHB11.exportToPdf=false;
this.QV_PT51_RHB11.height=0;
this.QV_PT51_RHB11.filterableColumns=false;
this.QV_PT51_RHB11.entityName='LoanSaleList';
this.QV_PT51_RHB11.appendRecords=true;
this.QV_PT51_RHB11.rowDetail=true;
this.QV_PT51_RHB11.columnMenu = true;
this.QV_PT51_RHB11.editMode=CommonsConstants.GRID_EDIT_MODE_INLINE;
this.QV_PT51_RHB11.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
this.QV_PT51_RHB11.actions=[ComplexConstants.GRID_ACTION_DELETE];
//GridCommands:
//RowCommands:
this.QV_PT51_RHB11.rowsCommandButton=[
{
id : 'VA_GRIDROWCOMMMNAA_525584',
label:cobis.translate('LNSPR.LBL_LNSPR_PROCESARR_13459'),
name : 'VA_GRIDROWCOMMMNAA_525584',
visible: true,
tooltip:'',
width:100,
setFocus:false,
userControl:'Button',
causesValidation: false
},
];
//Creacion de columnas del Grid
this.QV_PT51_RHB11.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXKDG_927584",
label : cobis.translate('LNSPR.LBL_LNSPR_SECUENCAI_74208'),
field : 'sequential',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 0,
properties :
{
id :'VA_TEXTINPUTBOXKDG_927584',
name :'sequential',
withoutLabel : true,
attribute : 'sequential',
entity : 'LoanSaleList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DATEFIELDIWXIWV_937584",
label : cobis.translate('LNSPR.LBL_LNSPR_FECHAIWCD_53719'),
field : 'date',
visible : ConstantsApi.mode.All,
type : 'datefield',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_DATEFIELDIWXIWV_937584',
name :'date',
withoutLabel : true,
format : cobis.userContext.getValue(cobis.constant.DATE_FORMAT),
attribute : 'date',
textLocked : false,
readonly : ConstantsApi.mode.Query,
entity : 'LoanSaleList',
visible : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
}
},
{
id : "VA_TEXTINPUTBOXYMP_457584",
label : cobis.translate('LNSPR.LBL_LNSPR_EMPRESAJZ_94816'),
field : 'company',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXYMP_457584',
name :'company',
withoutLabel : true,
attribute : 'company',
entity : 'LoanSaleList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXMDL_871584",
label : cobis.translate('LNSPR.LBL_LNSPR_ESTADOEAI_33340'),
field : 'state',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXMDL_871584',
name :'state',
withoutLabel : true,
attribute : 'state',
entity : 'LoanSaleList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXVEK_392584",
label : cobis.translate('LNSPR.LBL_LNSPR_ARCHIVOCI_89407'),
field : 'archive',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXVEK_392584',
name :'archive',
withoutLabel : true,
attribute : 'archive',
entity : 'LoanSaleList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXYDI_851584",
label : cobis.translate('LNSPR.LBL_LNSPR_USUARIOBC_38458'),
field : 'user',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXYDI_851584',
name :'user',
withoutLabel : true,
attribute : 'user',
entity : 'LoanSaleList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.QV_PK48_JNB79.pageSize=5;
this.QV_PK48_JNB79.id='QV_PK48_JNB79';
this.QV_PK48_JNB79.name='QV_PK48_JNB79';
this.QV_PK48_JNB79.pageable=true;
this.QV_PK48_JNB79.sortable=false;
this.QV_PK48_JNB79.resizable=true;
this.QV_PK48_JNB79.scrollable=false
this.QV_PK48_JNB79.confirmRowDeletion=false;
this.QV_PK48_JNB79.exportToExcel=false;
this.QV_PK48_JNB79.exportToPdf=false;
this.QV_PK48_JNB79.height=0;
this.QV_PK48_JNB79.filterableColumns=false;
this.QV_PK48_JNB79.entityName='LoanSaleDetailList';
this.QV_PK48_JNB79.appendRecords=false;
this.QV_PK48_JNB79.rowDetail=false;
this.QV_PK48_JNB79.columnMenu = true;
this.QV_PK48_JNB79.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_PK48_JNB79.modeSelection=ComplexConstants.GRID_MODE_SELECTION_NONE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_PK48_JNB79.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXMZG_108584",
label : cobis.translate('LNSPR.LBL_LNSPR_OPERACINN_33130'),
field : 'operation',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 5,
properties :
{
id :'VA_TEXTINPUTBOXMZG_108584',
name :'operation',
withoutLabel : true,
attribute : 'operation',
entity : 'LoanSaleDetailList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DATEFIELDXMVZLZ_375584",
label : cobis.translate('LNSPR.LBL_LNSPR_FECHAVETA_87721'),
field : 'dateSale',
visible : ConstantsApi.mode.All,
type : 'datefield',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties : {
id :'VA_DATEFIELDXMVZLZ_375584',
name :'dateSale',
withoutLabel : true,
format : cobis.userContext.getValue(cobis.constant.DATE_FORMAT),
attribute : 'dateSale',
textLocked : false,
readonly : ConstantsApi.mode.Query,
entity : 'LoanSaleDetailList',
visible : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
}
},
{
id : "VA_TEXTINPUTBOXQTT_624584",
label : cobis.translate('LNSPR.LBL_LNSPR_ESTADOEAI_33340'),
field : 'state',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties :
{
id :'VA_TEXTINPUTBOXQTT_624584',
name :'state',
withoutLabel : true,
attribute : 'state',
entity : 'LoanSaleDetailList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXHLJ_366584",
label : cobis.translate('LNSPR.LBL_LNSPR_ERRORAWHP_83580'),
field : 'error',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties :
{
id :'VA_TEXTINPUTBOXHLJ_366584',
name :'error',
withoutLabel : true,
attribute : 'error',
entity : 'LoanSaleDetailList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXZJU_162584",
label : cobis.translate('LNSPR.LBL_LNSPR_DESCRIPNC_75776'),
field : 'errorDescription',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties :
{
id :'VA_TEXTINPUTBOXZJU_162584',
name :'errorDescription',
withoutLabel : true,
attribute : 'errorDescription',
entity : 'LoanSaleDetailList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.T_LNSPRIIYONZUA_572 = this.formBuilder.group({
LoanSaleFilter: this.formBuilder.group({
company:[{value: null, disabled: !this.VA_1TLZKSACKIJLFKK_217584.visible},CobisDesignerUtil.getValidationFunctions(this.VA_1TLZKSACKIJLFKK_217584.validationFunctions!)],
archive:[{value: null, disabled: !this.VA_6427AZGDIHWLKXG_205584.visible},CobisDesignerUtil.getValidationFunctions(this.VA_6427AZGDIHWLKXG_205584.validationFunctions!)],
sequential:[null],
fileUploaded:[null],
}
),
LoanSaleList: this.formBuilder.group({
sequential:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_PT51_RHB11.columns,'VA_TEXTINPUTBOXKDG_927584')],
date:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_PT51_RHB11.columns,'VA_DATEFIELDIWXIWV_937584')],
company:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_PT51_RHB11.columns,'VA_TEXTINPUTBOXYMP_457584')],
state:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_PT51_RHB11.columns,'VA_TEXTINPUTBOXMDL_871584')],
archive:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_PT51_RHB11.columns,'VA_TEXTINPUTBOXVEK_392584')],
user:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_PT51_RHB11.columns,'VA_TEXTINPUTBOXYDI_851584')],
}
),
LoanSaleDetailList: this.formBuilder.group({
operation:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_PK48_JNB79.columns,'VA_TEXTINPUTBOXMZG_108584')],
dateSale:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_PK48_JNB79.columns,'VA_DATEFIELDXMVZLZ_375584')],
state:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_PK48_JNB79.columns,'VA_TEXTINPUTBOXQTT_624584')],
error:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_PK48_JNB79.columns,'VA_TEXTINPUTBOXHLJ_366584')],
errorDescription:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_PK48_JNB79.columns,'VA_TEXTINPUTBOXZJU_162584')],
sequential:[null],
secOperation:[null],
}
),
});
this.uploaders = {
VA_6427AZGDIHWLKXG_205584: this.VA_6427AZGDIHWLKXG_205584
}
}
}