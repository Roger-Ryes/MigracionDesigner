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
public T_ASSTSROZTLMPE_144!:FormGroup;
public VC_COMPANIEEE_220144:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_COMPANICHR_279223 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_COMPANIHER_604223 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_COMPANIHEH_967223 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_ON17_ABV99: CobisGridModel = new CobisGridModel();
public VA_INSTITUTIONHRCE_430223: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_RUCCMACKASSKFYE_128223: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public Spacer2237: CobisSpacerModel = new CobisSpacerModel();
public VA_COMPANYNAMEGTWL_274223: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_VABUTTONCDKGCQO_245223: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_COMPANIEEE_220144.id="VC_COMPANIEEE_220144";
this.VC_COMPANIEEE_220144.name="CompaniesSearchForm";
this.VC_COMPANIEEE_220144.colSpan=1;
this.VC_COMPANIEEE_220144.columns=1;
this.VC_COMPANIEEE_220144.enabled=ConstantsApi.mode.All;
this.G_COMPANICHR_279223.id="G_COMPANICHR_279223";
this.G_COMPANICHR_279223.name="GroupLayout1806";
this.G_COMPANICHR_279223.columns=1;
this.G_COMPANICHR_279223.childrenGroups = ["G_COMPANIHER_604223","G_COMPANIHEH_967223"];
this.G_COMPANICHR_279223.colSpan=1;
this.G_COMPANICHR_279223.enabled=ConstantsApi.mode.All;
this.G_COMPANICHR_279223.visible=ConstantsApi.mode.All;
this.G_COMPANIHER_604223.id="G_COMPANIHER_604223";
this.G_COMPANIHER_604223.name="Group1250";
this.G_COMPANIHER_604223.columns=4;
this.G_COMPANIHER_604223.labelOrientation="Top";
this.G_COMPANIHER_604223.colSpan=1;
this.G_COMPANIHER_604223.enabled=ConstantsApi.mode.All;
this.G_COMPANIHER_604223.visible=ConstantsApi.mode.All;
this.G_COMPANIHER_604223.attList = ["institution","ruc","companyName"];
this.G_COMPANIHEH_967223.id="G_COMPANIHEH_967223";
this.G_COMPANIHEH_967223.name="Group2984";
this.G_COMPANIHEH_967223.columns=1;
this.G_COMPANIHEH_967223.labelOrientation="Top";
this.G_COMPANIHEH_967223.colSpan=1;
this.G_COMPANIHEH_967223.enabled=ConstantsApi.mode.All;
this.G_COMPANIHEH_967223.visible=ConstantsApi.mode.All;
this.G_COMPANIHEH_967223.attList = ["ruc","companyName","institution","phone","state"];
this.VA_INSTITUTIONHRCE_430223.label = cobis.translate("ASSTS.LBL_ASSTS_CDIGOINIC_90755");
this.VA_INSTITUTIONHRCE_430223.entity = "CompaniesSearchFilter";
this.VA_INSTITUTIONHRCE_430223.attribute = "institution";
this.VA_INSTITUTIONHRCE_430223.maxlength= 10;
this.VA_INSTITUTIONHRCE_430223.textCase= TextCaseOptions.UPPER_CASE;
this.VA_INSTITUTIONHRCE_430223.name="institution";
this.VA_INSTITUTIONHRCE_430223.id="VA_INSTITUTIONHRCE_430223";
this.VA_INSTITUTIONHRCE_430223.colSpan=1;
this.VA_INSTITUTIONHRCE_430223.withoutLabel = false;
this.VA_INSTITUTIONHRCE_430223.readOnly = ConstantsApi.mode.Query;
this.VA_INSTITUTIONHRCE_430223.enabled = ConstantsApi.mode.All;
this.VA_INSTITUTIONHRCE_430223.visible= ConstantsApi.mode.All;
this.VA_INSTITUTIONHRCE_430223.inputRestrictionValidators = { onlyNumbers: true};
this.VA_RUCCMACKASSKFYE_128223.label = cobis.translate("ASSTS.LBL_ASSTS_RUCOPKJYJ_12792");
this.VA_RUCCMACKASSKFYE_128223.entity = "CompaniesSearchFilter";
this.VA_RUCCMACKASSKFYE_128223.attribute = "ruc";
this.VA_RUCCMACKASSKFYE_128223.maxlength= 30;
this.VA_RUCCMACKASSKFYE_128223.textCase= TextCaseOptions.UPPER_CASE;
this.VA_RUCCMACKASSKFYE_128223.name="ruc";
this.VA_RUCCMACKASSKFYE_128223.id="VA_RUCCMACKASSKFYE_128223";
this.VA_RUCCMACKASSKFYE_128223.colSpan=2;
this.VA_RUCCMACKASSKFYE_128223.withoutLabel = false;
this.VA_RUCCMACKASSKFYE_128223.readOnly = ConstantsApi.mode.Query;
this.VA_RUCCMACKASSKFYE_128223.enabled = ConstantsApi.mode.All;
this.VA_RUCCMACKASSKFYE_128223.visible= ConstantsApi.mode.All;
this.VA_RUCCMACKASSKFYE_128223.inputRestrictionValidators = { lettersAndNumbers: true};
this.Spacer2237.id = "Spacer2237";
this.Spacer2237.name = "Spacer2237";
this.Spacer2237.colSpan = 1;
this.Spacer2237.visible= ConstantsApi.mode.All;
this.VA_COMPANYNAMEGTWL_274223.label = cobis.translate("ASSTS.LBL_ASSTS_NOMBRECMM_80342");
this.VA_COMPANYNAMEGTWL_274223.entity = "CompaniesSearchFilter";
this.VA_COMPANYNAMEGTWL_274223.attribute = "companyName";
this.VA_COMPANYNAMEGTWL_274223.maxlength= 64;
this.VA_COMPANYNAMEGTWL_274223.textCase= TextCaseOptions.UPPER_CASE;
this.VA_COMPANYNAMEGTWL_274223.name="companyName";
this.VA_COMPANYNAMEGTWL_274223.id="VA_COMPANYNAMEGTWL_274223";
this.VA_COMPANYNAMEGTWL_274223.colSpan=3;
this.VA_COMPANYNAMEGTWL_274223.withoutLabel = false;
this.VA_COMPANYNAMEGTWL_274223.readOnly = ConstantsApi.mode.Query;
this.VA_COMPANYNAMEGTWL_274223.enabled = ConstantsApi.mode.All;
this.VA_COMPANYNAMEGTWL_274223.visible= ConstantsApi.mode.All;
this.VA_VABUTTONCDKGCQO_245223.id = "VA_VABUTTONCDKGCQO_245223";
this.VA_VABUTTONCDKGCQO_245223.name = "VA_VABUTTONCDKGCQO_245223";
this.VA_VABUTTONCDKGCQO_245223.label = cobis.translate("ASSTS.LBL_ASSTS_BUSCARYEV_82731");
this.VA_VABUTTONCDKGCQO_245223.colSpan = 1;
this.VA_VABUTTONCDKGCQO_245223.withoutLabel = false;
this.VA_VABUTTONCDKGCQO_245223.causesValidation=false;
this.VA_VABUTTONCDKGCQO_245223.submitOnEnter=false;
this.VA_VABUTTONCDKGCQO_245223.setFocus=false;
this.VA_VABUTTONCDKGCQO_245223.enabled = ConstantsApi.mode.All;
this.VA_VABUTTONCDKGCQO_245223.visible= ConstantsApi.mode.All;
this.VA_VABUTTONCDKGCQO_245223.icon = "glyphicon glyphicon-search";
this.QV_ON17_ABV99.pageSize=10;
this.QV_ON17_ABV99.id='QV_ON17_ABV99';
this.QV_ON17_ABV99.name='QV_ON17_ABV99';
this.QV_ON17_ABV99.pageable=true;
this.QV_ON17_ABV99.sortable=false;
this.QV_ON17_ABV99.resizable=false;
this.QV_ON17_ABV99.scrollable=false
this.QV_ON17_ABV99.confirmRowDeletion=true;
this.QV_ON17_ABV99.exportToExcel=false;
this.QV_ON17_ABV99.exportToPdf=false;
this.QV_ON17_ABV99.height=0;
this.QV_ON17_ABV99.filterableColumns=false;
this.QV_ON17_ABV99.entityName='CompaniesList';
this.QV_ON17_ABV99.appendRecords=false;
this.QV_ON17_ABV99.rowDetail=false;
this.QV_ON17_ABV99.columnMenu = true;
this.QV_ON17_ABV99.editMode=CommonsConstants.GRID_EDIT_MODE_MODAL;
this.QV_ON17_ABV99.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
this.QV_ON17_ABV99.actions=[ComplexConstants.GRID_ACTION_DELETE,ComplexConstants.GRID_ACTION_CREATE,ComplexConstants.GRID_ACTION_UPDATE];
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_ON17_ABV99.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXVMV_805223",
label : cobis.translate('ASSTS.LBL_ASSTS_RUCOPKJYJ_12792'),
field : 'ruc',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties :
{
id :'VA_TEXTINPUTBOXVMV_805223',
name :'ruc',
withoutLabel : true,
attribute : 'ruc',
entity : 'CompaniesList',
maxlength: 30,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXBPB_357223",
label : cobis.translate('ASSTS.LBL_ASSTS_NOMBREULS_81822'),
field : 'companyName',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties :
{
id :'VA_TEXTINPUTBOXBPB_357223',
name :'companyName',
withoutLabel : true,
attribute : 'companyName',
entity : 'CompaniesList',
maxlength: 64,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXQDS_911223",
label : cobis.translate('ASSTS.LBL_ASSTS_CODIGOYTZ_84859'),
field : 'institution',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties :
{
id :'VA_TEXTINPUTBOXQDS_911223',
name :'institution',
withoutLabel : true,
attribute : 'institution',
entity : 'CompaniesList',
maxlength: 10,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXISR_510223",
label : cobis.translate('ASSTS.LBL_ASSTS_TELEFONOO_76252'),
field : 'phone',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
properties :
{
id :'VA_TEXTINPUTBOXISR_510223',
name :'phone',
withoutLabel : true,
attribute : 'phone',
entity : 'CompaniesList',
maxlength: 64,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.T_ASSTSROZTLMPE_144 = this.formBuilder.group({
CompaniesSearchFilter: this.formBuilder.group({
institution:[{value: null, disabled: !this.VA_INSTITUTIONHRCE_430223.visible},CobisDesignerUtil.getValidationFunctions(this.VA_INSTITUTIONHRCE_430223.validationFunctions!)],
ruc:[{value: null, disabled: !this.VA_RUCCMACKASSKFYE_128223.visible},CobisDesignerUtil.getValidationFunctions(this.VA_RUCCMACKASSKFYE_128223.validationFunctions!)],
companyName:[{value: null, disabled: !this.VA_COMPANYNAMEGTWL_274223.visible},CobisDesignerUtil.getValidationFunctions(this.VA_COMPANYNAMEGTWL_274223.validationFunctions!)],
state:[null],
rateApply:[null],
phone:[null],
archive:[null],
contact:[null],
category:[null],
paymentPercentage:[null],
account:[null],
address:[null],
paymentArea:[null],
classification:[null],
paymentFormService:[null],
term:[null],
client:[null],
paymentFrequency:[null],
agreement:[null],
antiquity:[null],
paymentForm:[null],
}
),
CompaniesList: this.formBuilder.group({
ruc:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ON17_ABV99.columns,'VA_TEXTINPUTBOXVMV_805223')],
companyName:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ON17_ABV99.columns,'VA_TEXTINPUTBOXBPB_357223')],
institution:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ON17_ABV99.columns,'VA_TEXTINPUTBOXQDS_911223')],
phone:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ON17_ABV99.columns,'VA_TEXTINPUTBOXISR_510223')],
state:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_ON17_ABV99.columns,'VA_COMBOBOXPTXYXCP_521223')],
archive:[null],
rateApply:[null],
clientName:[null],
client:[null],
contact:[null],
paymentFrequency:[null],
paymentArea:[null],
classification:[null],
paymentForm:[null],
category:[null],
antiquity:[null],
paymentPercentage:[null],
account:[null],
agreement:[null],
paymentFormService:[null],
term:[null],
address:[null],
}
),
});
}
}