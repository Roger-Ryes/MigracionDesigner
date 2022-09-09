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
public T_LNSPRACJAQDUP_527!:FormGroup;
public VC_REPAYMENTT_461527:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_REPAYMEEAE_620232 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_REPAYMEERE_452232 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_WX74_OJZ40: CobisGridModel = new CobisGridModel();
public VA_OPERATIONZJOYBJ_414232: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_PAYMENTMETHODDD_177232: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_INSTITUTIONNKHZ_389232: CobisTextInputButtonModel = new CobisTextInputButtonModel();
public VA_CLIENTNIXWOQDSD_193232: CobisTextInputButtonModel = new CobisTextInputButtonModel();
public VA_ACCOUNTEPABOHPV_776232: CobisTextInputButtonModel = new CobisTextInputButtonModel();
public VA_PERCENTAGERSSPP_386232: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_COMMENTSACNWUMM_854232: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public Spacer2625: CobisSpacerModel = new CobisSpacerModel();
public VA_VABUTTONXOCQZHP_695232: CobisButtonModel = new CobisButtonModel();
public VA_VABUTTONNVDIOQB_352232: CobisButtonModel = new CobisButtonModel();
public CM_TLNSPRAC_4P9: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_REPAYMENTT_461527.id="VC_REPAYMENTT_461527";
this.VC_REPAYMENTT_461527.name="RepaymentCreateForm";
this.VC_REPAYMENTT_461527.colSpan=1;
this.VC_REPAYMENTT_461527.columns=1;
this.VC_REPAYMENTT_461527.enabled=ConstantsApi.mode.All;
this.G_REPAYMEEAE_620232.id="G_REPAYMEEAE_620232";
this.G_REPAYMEEAE_620232.name="Group1740";
this.G_REPAYMEEAE_620232.columns=4;
this.G_REPAYMEEAE_620232.labelOrientation="Top";
this.G_REPAYMEEAE_620232.colSpan=1;
this.G_REPAYMEEAE_620232.enabled=ConstantsApi.mode.All;
this.G_REPAYMEEAE_620232.visible=ConstantsApi.mode.All;
this.G_REPAYMEEAE_620232.attList = ["bankId","paymentMethod","institutionName","clientName","account","percentage","comments"];
this.G_REPAYMEERE_452232.id="G_REPAYMEERE_452232";
this.G_REPAYMEERE_452232.name="Group1408";
this.G_REPAYMEERE_452232.columns=1;
this.G_REPAYMEERE_452232.labelOrientation="Top";
this.G_REPAYMEERE_452232.colSpan=1;
this.G_REPAYMEERE_452232.enabled=ConstantsApi.mode.All;
this.G_REPAYMEERE_452232.visible=ConstantsApi.mode.All;
this.G_REPAYMEERE_452232.attList = ["account","percentage","clientRole","client","clientName","operation","paymentMethod","paymentName","institution","institutionName"];
this.CM_TLNSPRAC_4P9.id = "CM_TLNSPRAC_4P9";
this.CM_TLNSPRAC_4P9.name = "Command2";
this.CM_TLNSPRAC_4P9.causesValidation=false;
this.CM_TLNSPRAC_4P9.submitOnEnter=false;
this.CM_TLNSPRAC_4P9.setFocus=false;
this.CM_TLNSPRAC_4P9.close=false;
this.CM_TLNSPRAC_4P9.label = cobis.translate("LNSPR.LBL_LNSPR_CERRARSEA_57663");
this.CM_TLNSPRAC_4P9.enabled = ConstantsApi.mode.All;
this.CM_TLNSPRAC_4P9.visible= ConstantsApi.mode.All;
this.VA_OPERATIONZJOYBJ_414232.label = cobis.translate("LNSPR.LBL_LNSPR_OPERACINN_33130");
this.VA_OPERATIONZJOYBJ_414232.entity = "PaymentAutomatic";
this.VA_OPERATIONZJOYBJ_414232.attribute = "bankId";
this.VA_OPERATIONZJOYBJ_414232.textCase= TextCaseOptions.NONE;
this.VA_OPERATIONZJOYBJ_414232.textLocked = true;
this.VA_OPERATIONZJOYBJ_414232.name="bancoId";
this.VA_OPERATIONZJOYBJ_414232.id="VA_OPERATIONZJOYBJ_414232";
this.VA_OPERATIONZJOYBJ_414232.colSpan=2;
this.VA_OPERATIONZJOYBJ_414232.withoutLabel = false;
this.VA_OPERATIONZJOYBJ_414232.readOnly = ConstantsApi.mode.Query;
this.VA_OPERATIONZJOYBJ_414232.enabled = ConstantsApi.mode.None;
this.VA_OPERATIONZJOYBJ_414232.visible= ConstantsApi.mode.All;
this.VA_PAYMENTMETHODDD_177232.label = cobis.translate("LNSPR.LBL_LNSPR_APAGOWSUO_22122");
this.VA_PAYMENTMETHODDD_177232.entity = "PaymentAutomatic";
this.VA_PAYMENTMETHODDD_177232.attribute = "paymentMethod";
this.VA_PAYMENTMETHODDD_177232.maxlength= 10;
this.VA_PAYMENTMETHODDD_177232.textCase= TextCaseOptions.NONE;
this.VA_PAYMENTMETHODDD_177232.name="paymentMethod";
this.VA_PAYMENTMETHODDD_177232.id="VA_PAYMENTMETHODDD_177232";
this.VA_PAYMENTMETHODDD_177232.colSpan=2;
this.VA_PAYMENTMETHODDD_177232.withoutLabel = false;
this.VA_PAYMENTMETHODDD_177232.readOnly = ConstantsApi.mode.Query;
this.VA_PAYMENTMETHODDD_177232.enabled = ConstantsApi.mode.None;
this.VA_PAYMENTMETHODDD_177232.visible= ConstantsApi.mode.All;
this.VA_INSTITUTIONNKHZ_389232.id = "VA_INSTITUTIONNKHZ_389232";
this.VA_INSTITUTIONNKHZ_389232.name = "institutionName";
this.VA_INSTITUTIONNKHZ_389232.label = cobis.translate("LNSPR.LBL_LNSPR_INSTITUNC_81989");
this.VA_INSTITUTIONNKHZ_389232.entity = "PaymentAutomatic";
this.VA_INSTITUTIONNKHZ_389232.attribute = "institutionName";
this.VA_INSTITUTIONNKHZ_389232.colSpan = 2;
this.VA_INSTITUTIONNKHZ_389232.format = "";
this.VA_INSTITUTIONNKHZ_389232.readOnly = ConstantsApi.mode.Query;
this.VA_INSTITUTIONNKHZ_389232.enabled = ConstantsApi.mode.All;
this.VA_INSTITUTIONNKHZ_389232.visible= ConstantsApi.mode.All;
this.VA_INSTITUTIONNKHZ_389232.textLocked = true;
this.VA_INSTITUTIONNKHZ_389232.inputRestrictionValidators = { onlyNumbers: true};
this.VA_INSTITUTIONNKHZ_389232.required = true;
this.VA_INSTITUTIONNKHZ_389232.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_INSTITUTIONNKHZ_389232.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LNSPR_CAMPOREIQ_59717')
};
this.VA_CLIENTNIXWOQDSD_193232.id = "VA_CLIENTNIXWOQDSD_193232";
this.VA_CLIENTNIXWOQDSD_193232.name = "clientName";
this.VA_CLIENTNIXWOQDSD_193232.label = cobis.translate("LNSPR.LBL_LNSPR_CLIENTEOR_78949");
this.VA_CLIENTNIXWOQDSD_193232.entity = "PaymentAutomatic";
this.VA_CLIENTNIXWOQDSD_193232.attribute = "clientName";
this.VA_CLIENTNIXWOQDSD_193232.colSpan = 2;
this.VA_CLIENTNIXWOQDSD_193232.format = "";
this.VA_CLIENTNIXWOQDSD_193232.readOnly = ConstantsApi.mode.Query;
this.VA_CLIENTNIXWOQDSD_193232.enabled = ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_CLIENTNIXWOQDSD_193232.visible= ConstantsApi.mode.Insert + ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_CLIENTNIXWOQDSD_193232.textLocked = true;
this.VA_CLIENTNIXWOQDSD_193232.inputRestrictionValidators = { onlyNumbers: true};
this.VA_CLIENTNIXWOQDSD_193232.required = true;
this.VA_CLIENTNIXWOQDSD_193232.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_CLIENTNIXWOQDSD_193232.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LNSPR_CAMPOREIQ_59717')
};
this.VA_ACCOUNTEPABOHPV_776232.id = "VA_ACCOUNTEPABOHPV_776232";
this.VA_ACCOUNTEPABOHPV_776232.name = "account";
this.VA_ACCOUNTEPABOHPV_776232.label = cobis.translate("LNSPR.LBL_LNSPR_NROCUENAT_39594");
this.VA_ACCOUNTEPABOHPV_776232.entity = "PaymentAutomatic";
this.VA_ACCOUNTEPABOHPV_776232.attribute = "account";
this.VA_ACCOUNTEPABOHPV_776232.colSpan = 2;
this.VA_ACCOUNTEPABOHPV_776232.format = "";
this.VA_ACCOUNTEPABOHPV_776232.maxlength= 24;
this.VA_ACCOUNTEPABOHPV_776232.readOnly = ConstantsApi.mode.Query;
this.VA_ACCOUNTEPABOHPV_776232.enabled = ConstantsApi.mode.All;
this.VA_ACCOUNTEPABOHPV_776232.visible= ConstantsApi.mode.All;
this.VA_ACCOUNTEPABOHPV_776232.textLocked = true;
this.VA_ACCOUNTEPABOHPV_776232.inputRestrictionValidators = { lettersAndNumbers: true};
this.VA_ACCOUNTEPABOHPV_776232.required = true;
this.VA_ACCOUNTEPABOHPV_776232.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_ACCOUNTEPABOHPV_776232.messagesValidations = {
required: cobis.translate('LNSPR.MSG_LNSPR_CAMPOREIQ_59717')
};
this.VA_PERCENTAGERSSPP_386232.label = cobis.translate("LNSPR.LBL_LNSPR_PORCENTAA_34368");
this.VA_PERCENTAGERSSPP_386232.entity = "PaymentAutomatic";
this.VA_PERCENTAGERSSPP_386232.attribute = "percentage";
this.VA_PERCENTAGERSSPP_386232.textCase= TextCaseOptions.NONE;
this.VA_PERCENTAGERSSPP_386232.format= "n";
this.VA_PERCENTAGERSSPP_386232.name="percentage";
this.VA_PERCENTAGERSSPP_386232.id="VA_PERCENTAGERSSPP_386232";
this.VA_PERCENTAGERSSPP_386232.colSpan=2;
this.VA_PERCENTAGERSSPP_386232.withoutLabel = false;
this.VA_PERCENTAGERSSPP_386232.readOnly = ConstantsApi.mode.Query;
this.VA_PERCENTAGERSSPP_386232.enabled = ConstantsApi.mode.All;
this.VA_PERCENTAGERSSPP_386232.visible= ConstantsApi.mode.All;
this.VA_PERCENTAGERSSPP_386232.required = true;
this.VA_PERCENTAGERSSPP_386232.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.RangeValues,CustomValidators.valueRange('1','100')],[VisualValidationTypeEnum.Required,Validators.required]
]);
this.VA_PERCENTAGERSSPP_386232.messagesValidations = {
valueRange: cobis.translate('LNSPR.MSG_LNSPR_PORCENT0E_11592'),required: cobis.translate('LNSPR.MSG_LNSPR_CAMPOREIQ_59717')
};
this.VA_COMMENTSACNWUMM_854232.label = cobis.translate("LNSPR.LBL_LNSPR_COMENTAOO_63544");
this.VA_COMMENTSACNWUMM_854232.entity = "PaymentAutomatic";
this.VA_COMMENTSACNWUMM_854232.attribute = "comments";
this.VA_COMMENTSACNWUMM_854232.maxlength= 60;
this.VA_COMMENTSACNWUMM_854232.textCase= TextCaseOptions.UPPER_CASE;
this.VA_COMMENTSACNWUMM_854232.name="comments";
this.VA_COMMENTSACNWUMM_854232.id="VA_COMMENTSACNWUMM_854232";
this.VA_COMMENTSACNWUMM_854232.colSpan=4;
this.VA_COMMENTSACNWUMM_854232.withoutLabel = false;
this.VA_COMMENTSACNWUMM_854232.readOnly = ConstantsApi.mode.Query;
this.VA_COMMENTSACNWUMM_854232.enabled = ConstantsApi.mode.All;
this.VA_COMMENTSACNWUMM_854232.visible= ConstantsApi.mode.All;
this.Spacer2625.id = "Spacer2625";
this.Spacer2625.name = "Spacer2625";
this.Spacer2625.colSpan = 1;
this.Spacer2625.visible= ConstantsApi.mode.All;
this.VA_VABUTTONXOCQZHP_695232.id = "VA_VABUTTONXOCQZHP_695232";
this.VA_VABUTTONXOCQZHP_695232.name = "VA_VABUTTONXOCQZHP_695232";
this.VA_VABUTTONXOCQZHP_695232.label = cobis.translate("LNSPR.LBL_LNSPR_GUARDARRI_81055");
this.VA_VABUTTONXOCQZHP_695232.colSpan = 1;
this.VA_VABUTTONXOCQZHP_695232.withoutLabel = false;
this.VA_VABUTTONXOCQZHP_695232.causesValidation=true;
this.VA_VABUTTONXOCQZHP_695232.submitOnEnter=false;
this.VA_VABUTTONXOCQZHP_695232.setFocus=false;
this.VA_VABUTTONXOCQZHP_695232.enabled = ConstantsApi.mode.All;
this.VA_VABUTTONXOCQZHP_695232.visible= ConstantsApi.mode.All;
this.VA_VABUTTONNVDIOQB_352232.id = "VA_VABUTTONNVDIOQB_352232";
this.VA_VABUTTONNVDIOQB_352232.name = "VA_VABUTTONNVDIOQB_352232";
this.VA_VABUTTONNVDIOQB_352232.label = cobis.translate("LNSPR.LBL_LNSPR_CANCELARR_70217");
this.VA_VABUTTONNVDIOQB_352232.colSpan = 1;
this.VA_VABUTTONNVDIOQB_352232.withoutLabel = false;
this.VA_VABUTTONNVDIOQB_352232.causesValidation=false;
this.VA_VABUTTONNVDIOQB_352232.submitOnEnter=false;
this.VA_VABUTTONNVDIOQB_352232.setFocus=false;
this.VA_VABUTTONNVDIOQB_352232.enabled = ConstantsApi.mode.All;
this.VA_VABUTTONNVDIOQB_352232.visible= ConstantsApi.mode.All;
this.QV_WX74_OJZ40.pageSize=5;
this.QV_WX74_OJZ40.id='QV_WX74_OJZ40';
this.QV_WX74_OJZ40.name='QV_WX74_OJZ40';
this.QV_WX74_OJZ40.pageable=true;
this.QV_WX74_OJZ40.sortable=false;
this.QV_WX74_OJZ40.resizable=true;
this.QV_WX74_OJZ40.scrollable=true
this.QV_WX74_OJZ40.confirmRowDeletion=true;
this.QV_WX74_OJZ40.exportToExcel=false;
this.QV_WX74_OJZ40.exportToPdf=false;
this.QV_WX74_OJZ40.height=0;
this.QV_WX74_OJZ40.filterableColumns=false;
this.QV_WX74_OJZ40.entityName='PaymentAutomaticList';
this.QV_WX74_OJZ40.appendRecords=false;
this.QV_WX74_OJZ40.rowDetail=false;
this.QV_WX74_OJZ40.columnMenu = true;
this.QV_WX74_OJZ40.editMode=CommonsConstants.GRID_EDIT_MODE_INLINE;
this.QV_WX74_OJZ40.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
this.QV_WX74_OJZ40.actions=[ComplexConstants.GRID_ACTION_DELETE];
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_WX74_OJZ40.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXSSG_996232",
label : cobis.translate('LNSPR.LBL_LNSPR_CUENTASKC_50998'),
field : 'account',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXSSG_996232',
name :'account',
withoutLabel : true,
attribute : 'account',
entity : 'PaymentAutomaticList',
maxlength: 24,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXPVU_726232",
label : cobis.translate('LNSPR.LBL_LNSPR_PORCENTAA_34368'),
field : 'percentage',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 50,
properties :
{
id :'VA_TEXTINPUTBOXPVU_726232',
name :'percentage',
withoutLabel : true,
attribute : 'percentage',
entity : 'PaymentAutomaticList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXVWX_985232",
label : cobis.translate('LNSPR.LBL_LOANS_ROLNDGMQN_51274'),
field : 'clientRole',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 50,
properties :
{
id :'VA_TEXTINPUTBOXVWX_985232',
name :'clientRole',
withoutLabel : true,
attribute : 'clientRole',
entity : 'PaymentAutomaticList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXRUK_881232",
label : cobis.translate('LNSPR.LBL_LNSPR_CODCLIETT_20856'),
field : 'client',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 50,
properties :
{
id :'VA_TEXTINPUTBOXRUK_881232',
name :'client',
withoutLabel : true,
attribute : 'client',
entity : 'PaymentAutomaticList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXCQZ_584232",
label : cobis.translate('LNSPR.LBL_LNSPR_NOMBRECNI_63306'),
field : 'clientName',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 250,
properties :
{
id :'VA_TEXTINPUTBOXCQZ_584232',
name :'clientName',
withoutLabel : true,
attribute : 'clientName',
entity : 'PaymentAutomaticList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXSEI_725232",
label : cobis.translate('LNSPR.LBL_LNSPR_APAGOWSUO_22122'),
field : 'paymentMethod',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 85,
properties :
{
id :'VA_TEXTINPUTBOXSEI_725232',
name :'paymentMethod',
withoutLabel : true,
attribute : 'paymentMethod',
entity : 'PaymentAutomaticList',
maxlength: 10,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXGMQ_949232",
label : cobis.translate('LNSPR.LBL_LNSPR_INSTITUNI_53772'),
field : 'institutionName',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 250,
properties :
{
id :'VA_TEXTINPUTBOXGMQ_949232',
name :'institutionName',
withoutLabel : true,
attribute : 'institutionName',
entity : 'PaymentAutomaticList',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.T_LNSPRACJAQDUP_527 = this.formBuilder.group({
PaymentAutomatic: this.formBuilder.group({
bankId:[{value: null, disabled: !this.VA_OPERATIONZJOYBJ_414232.visible},CobisDesignerUtil.getValidationFunctions(this.VA_OPERATIONZJOYBJ_414232.validationFunctions!)],
paymentMethod:[{value: null, disabled: !this.VA_PAYMENTMETHODDD_177232.visible},CobisDesignerUtil.getValidationFunctions(this.VA_PAYMENTMETHODDD_177232.validationFunctions!)],
institutionName:[{value: null, disabled: !this.VA_INSTITUTIONNKHZ_389232.visible},CobisDesignerUtil.getValidationFunctions(this.VA_INSTITUTIONNKHZ_389232.validationFunctions!)],
clientName:[{value: null, disabled: !this.VA_CLIENTNIXWOQDSD_193232.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CLIENTNIXWOQDSD_193232.validationFunctions!)],
account:[{value: null, disabled: !this.VA_ACCOUNTEPABOHPV_776232.visible},CobisDesignerUtil.getValidationFunctions(this.VA_ACCOUNTEPABOHPV_776232.validationFunctions!)],
percentage:[{value: null, disabled: !this.VA_PERCENTAGERSSPP_386232.visible},CobisDesignerUtil.getValidationFunctions(this.VA_PERCENTAGERSSPP_386232.validationFunctions!)],
comments:[{value: null, disabled: !this.VA_COMMENTSACNWUMM_854232.visible},CobisDesignerUtil.getValidationFunctions(this.VA_COMMENTSACNWUMM_854232.validationFunctions!)],
clientRole:[null],
accountOld:[null],
operation:[null],
clientOld:[null],
institutionOld:[null],
paymentName:[null],
client:[null],
institution:[null],
}
),
PaymentAutomaticList: this.formBuilder.group({
account:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_WX74_OJZ40.columns,'VA_TEXTINPUTBOXSSG_996232')],
percentage:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_WX74_OJZ40.columns,'VA_TEXTINPUTBOXPVU_726232')],
clientRole:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_WX74_OJZ40.columns,'VA_TEXTINPUTBOXVWX_985232')],
client:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_WX74_OJZ40.columns,'VA_TEXTINPUTBOXRUK_881232')],
clientName:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_WX74_OJZ40.columns,'VA_TEXTINPUTBOXCQZ_584232')],
operation:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_WX74_OJZ40.columns,'VA_TEXTINPUTBOXKIV_434232')],
paymentMethod:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_WX74_OJZ40.columns,'VA_TEXTINPUTBOXSEI_725232')],
paymentName:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_WX74_OJZ40.columns,'VA_TEXTINPUTBOXPQU_368232')],
institution:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_WX74_OJZ40.columns,'VA_TEXTINPUTBOXGWF_154232')],
institutionName:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_WX74_OJZ40.columns,'VA_TEXTINPUTBOXGMQ_949232')],
comments:[null],
bankId:[null],
accountOld:[null],
institutionOld:[null],
clientOld:[null],
}
),
});
}
}