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
public T_ASSTSMABINVRB_160!:FormGroup;
public VC_LOANPOLIYY_967160:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_LOANPOLCYC_584251 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_CB44_DOX52: CobisGridModel = new CobisGridModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_LOANPOLIYY_967160.id="VC_LOANPOLIYY_967160";
this.VC_LOANPOLIYY_967160.name="QueryLoanPolicyForm";
this.VC_LOANPOLIYY_967160.colSpan=1;
this.VC_LOANPOLIYY_967160.columns=1;
this.VC_LOANPOLIYY_967160.enabled=ConstantsApi.mode.All;
this.G_LOANPOLCYC_584251.id="G_LOANPOLCYC_584251";
this.G_LOANPOLCYC_584251.name="Group1406";
this.G_LOANPOLCYC_584251.columns=1;
this.G_LOANPOLCYC_584251.labelOrientation="Top";
this.G_LOANPOLCYC_584251.colSpan=1;
this.G_LOANPOLCYC_584251.enabled=ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.G_LOANPOLCYC_584251.visible=ConstantsApi.mode.All;
this.G_LOANPOLCYC_584251.attList = ["insurance","policy","codeExternal","fvalidityStart","fvalidityEnd","amountPolicy","amountEndorsement","dateEndorsement","fendorsementEnd","coverage","description","statePolicy"];
this.QV_CB44_DOX52.pageSize=10;
this.QV_CB44_DOX52.id='QV_CB44_DOX52';
this.QV_CB44_DOX52.name='QV_CB44_DOX52';
this.QV_CB44_DOX52.pageable=true;
this.QV_CB44_DOX52.sortable=false;
this.QV_CB44_DOX52.resizable=true;
this.QV_CB44_DOX52.scrollable=true
this.QV_CB44_DOX52.confirmRowDeletion=false;
this.QV_CB44_DOX52.exportToExcel=false;
this.QV_CB44_DOX52.exportToPdf=false;
this.QV_CB44_DOX52.height=0;
this.QV_CB44_DOX52.filterableColumns=false;
this.QV_CB44_DOX52.entityName='LoanPolicy';
this.QV_CB44_DOX52.appendRecords=true;
this.QV_CB44_DOX52.rowDetail=false;
this.QV_CB44_DOX52.columnMenu = true;
this.QV_CB44_DOX52.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_CB44_DOX52.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_CB44_DOX52.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXUER_631251",
label : cobis.translate('ASSTS.LBL_ASSTS_ASEGURADR_42036'),
field : 'insurance',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXUER_631251',
name :'insurance',
withoutLabel : true,
attribute : 'insurance',
entity : 'LoanPolicy',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXCCT_547251",
label : cobis.translate('ASSTS.LBL_ASSTS_POLIZAZVK_89366'),
field : 'policy',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXCCT_547251',
name :'policy',
withoutLabel : true,
attribute : 'policy',
entity : 'LoanPolicy',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXUCG_593251",
label : cobis.translate('ASSTS.LBL_ASSTS_GARANTIAA_11754'),
field : 'codeExternal',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXUCG_593251',
name :'codeExternal',
withoutLabel : true,
attribute : 'codeExternal',
entity : 'LoanPolicy',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DATEFIELDOIDBXX_771251",
label : cobis.translate('ASSTS.LBL_ASSTS_FECHAVINA_43492'),
field : 'fvalidityStart',
visible : ConstantsApi.mode.All,
type : 'datefield',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_DATEFIELDOIDBXX_771251',
name :'fvalidityStart',
withoutLabel : true,
format : cobis.userContext.getValue(cobis.constant.DATE_FORMAT),
attribute : 'fvalidityStart',
textLocked : false,
readonly : ConstantsApi.mode.Query,
entity : 'LoanPolicy',
visible : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
}
},
{
id : "VA_DATEFIELDPOLKRL_707251",
label : cobis.translate('ASSTS.LBL_ASSTS_FECHAVENO_73738'),
field : 'fvalidityEnd',
visible : ConstantsApi.mode.All,
type : 'datefield',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_DATEFIELDPOLKRL_707251',
name :'fvalidityEnd',
withoutLabel : true,
format : cobis.userContext.getValue(cobis.constant.DATE_FORMAT),
attribute : 'fvalidityEnd',
textLocked : false,
readonly : ConstantsApi.mode.Query,
entity : 'LoanPolicy',
visible : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
}
},
{
id : "VA_TEXTINPUTBOXQWT_716251",
label : cobis.translate('ASSTS.LBL_ASSTS_MONTOPOLA_95748'),
field : 'amountPolicy',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXQWT_716251',
name :'amountPolicy',
withoutLabel : true,
attribute : 'amountPolicy',
entity : 'LoanPolicy',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXKQK_228251",
label : cobis.translate('ASSTS.LBL_ASSTS_MONTOENDO_97022'),
field : 'amountEndorsement',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXKQK_228251',
name :'amountEndorsement',
withoutLabel : true,
attribute : 'amountEndorsement',
entity : 'LoanPolicy',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_DATEFIELDYMGFSH_428251",
label : cobis.translate('ASSTS.LBL_ASSTS_FECHAENSS_45794'),
field : 'dateEndorsement',
visible : ConstantsApi.mode.All,
type : 'datefield',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_DATEFIELDYMGFSH_428251',
name :'dateEndorsement',
withoutLabel : true,
format : cobis.userContext.getValue(cobis.constant.DATE_FORMAT),
attribute : 'dateEndorsement',
textLocked : false,
readonly : ConstantsApi.mode.Query,
entity : 'LoanPolicy',
visible : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
}
},
{
id : "VA_DATEFIELDLFOJBP_849251",
label : cobis.translate('ASSTS.LBL_ASSTS_FECHAFIED_27007'),
field : 'fendorsementEnd',
visible : ConstantsApi.mode.All,
type : 'datefield',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties : {
id :'VA_DATEFIELDLFOJBP_849251',
name :'fendorsementEnd',
withoutLabel : true,
format : cobis.userContext.getValue(cobis.constant.DATE_FORMAT),
attribute : 'fendorsementEnd',
textLocked : false,
readonly : ConstantsApi.mode.Query,
entity : 'LoanPolicy',
visible : true,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
}
},
{
id : "VA_TEXTINPUTBOXKBW_831251",
label : cobis.translate('ASSTS.LBL_ASSTS_COBERTUAR_35986'),
field : 'coverage',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXKBW_831251',
name :'coverage',
withoutLabel : true,
attribute : 'coverage',
entity : 'LoanPolicy',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXYED_559251",
label : cobis.translate('ASSTS.LBL_ASSTS_DESCRIPOO_35259'),
field : 'description',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXYED_559251',
name :'description',
withoutLabel : true,
attribute : 'description',
entity : 'LoanPolicy',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXHYG_463251",
label : cobis.translate('ASSTS.LBL_ASSTS_ESTADOPOZ_17970'),
field : 'statePolicy',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXHYG_463251',
name :'statePolicy',
withoutLabel : true,
attribute : 'statePolicy',
entity : 'LoanPolicy',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.T_ASSTSMABINVRB_160 = this.formBuilder.group({
LoanPolicy: this.formBuilder.group({
insurance:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_CB44_DOX52.columns,'VA_TEXTINPUTBOXUER_631251')],
policy:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_CB44_DOX52.columns,'VA_TEXTINPUTBOXCCT_547251')],
codeExternal:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_CB44_DOX52.columns,'VA_TEXTINPUTBOXUCG_593251')],
fvalidityStart:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_CB44_DOX52.columns,'VA_DATEFIELDOIDBXX_771251')],
fvalidityEnd:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_CB44_DOX52.columns,'VA_DATEFIELDPOLKRL_707251')],
amountPolicy:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_CB44_DOX52.columns,'VA_TEXTINPUTBOXQWT_716251')],
amountEndorsement:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_CB44_DOX52.columns,'VA_TEXTINPUTBOXKQK_228251')],
dateEndorsement:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_CB44_DOX52.columns,'VA_DATEFIELDYMGFSH_428251')],
fendorsementEnd:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_CB44_DOX52.columns,'VA_DATEFIELDLFOJBP_849251')],
coverage:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_CB44_DOX52.columns,'VA_TEXTINPUTBOXKBW_831251')],
description:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_CB44_DOX52.columns,'VA_TEXTINPUTBOXYED_559251')],
statePolicy:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_CB44_DOX52.columns,'VA_TEXTINPUTBOXHYG_463251')],
sequentialPag:[null],
currency:[null],
}
),
});
}
}