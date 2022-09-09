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
public T_DISBURSEMENNN_810!:FormGroup;
public VC_DISBURSEMT_116810:CobisGroupBoxModel = new CobisGroupBoxModel();
public G_DISBURSENT_411405 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_DISBURSEET_626405 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_DISBURSETE_715405 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_DISBURSEET_695405 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_1603_21320: CobisGridModel = new CobisGridModel();
public G_DISBURSETE_903405 : CobisGroupBoxModel = new CobisGroupBoxModel();
public QV_5973_48889: CobisGridModel = new CobisGridModel();
public G_DISBURSEME_609405 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_DISBURSNTE_204405 : CobisGroupBoxModel = new CobisGroupBoxModel();
public G_DISBURSEME_974405 : CobisGroupBoxModel = new CobisGroupBoxModel();
public Spacer2433: CobisDateFieldModel = new CobisDateFieldModel();
public VA_CURRENCYOPUEQVI_819405: CobisDropDownListModel = new CobisDropDownListModel();
public VA_QUOTATIONRUCNOK_902405: CobisNumericInputBoxModel = new CobisNumericInputBoxModel();
public VA_QUOTETYPEOPVPYS_926405: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public VA_9687YKSEJAICISC_489405: CobisTextInputBoxModel = new CobisTextInputBoxModel();
public Spacer1176: CobisTextLabelModel = new CobisTextLabelModel();
public Spacer1865: CobisTextLabelModel = new CobisTextLabelModel();
public Spacer2275: CobisTextLabelModel = new CobisTextLabelModel();
public CM_TDISBURS_TD_: CobisButtonModel = new CobisButtonModel();
constructor(cobis: CobisCommonsService,private formBuilder: FormBuilder, private mode: number) {
this.VC_DISBURSEMT_116810.id="VC_DISBURSEMT_116810";
this.VC_DISBURSEMT_116810.name="Disbursement";
this.VC_DISBURSEMT_116810.colSpan=1;
this.VC_DISBURSEMT_116810.columns=1;
this.VC_DISBURSEMT_116810.enabled=ConstantsApi.mode.All;
this.G_DISBURSENT_411405.id="G_DISBURSENT_411405";
this.G_DISBURSENT_411405.name="GroupLayout2529";
this.G_DISBURSENT_411405.columns=4;
this.G_DISBURSENT_411405.childrenGroups = ["G_DISBURSEET_626405"];
this.G_DISBURSENT_411405.colSpan=1;
this.G_DISBURSENT_411405.enabled=ConstantsApi.mode.All;
this.G_DISBURSENT_411405.visible=ConstantsApi.mode.All;
this.G_DISBURSEET_626405.id="G_DISBURSEET_626405";
this.G_DISBURSEET_626405.name="Group1809";
this.G_DISBURSEET_626405.columns=4;
this.G_DISBURSEET_626405.labelOrientation="Top";
this.G_DISBURSEET_626405.colSpan=4;
this.G_DISBURSEET_626405.enabled=ConstantsApi.mode.All;
this.G_DISBURSEET_626405.visible=ConstantsApi.mode.All;
this.G_DISBURSEET_626405.attList = ["dateToDisburse","currencyOp","quotation","quoteTypeOP","lblAmountToCancel"];
this.G_DISBURSETE_715405.id="G_DISBURSETE_715405";
this.G_DISBURSETE_715405.label=cobis.translate("ASSTS.LBL_ASSTS_DETALLEAR_35261");
this.G_DISBURSETE_715405.name="GroupLayout2505";
this.G_DISBURSETE_715405.columns=4;
this.G_DISBURSETE_715405.childrenGroups = ["G_DISBURSEET_695405","G_DISBURSETE_903405"];
this.G_DISBURSETE_715405.colSpan=1;
this.G_DISBURSETE_715405.enabled=ConstantsApi.mode.All;
this.G_DISBURSETE_715405.visible=ConstantsApi.mode.All;
this.G_DISBURSEET_695405.id="G_DISBURSEET_695405";
this.G_DISBURSEET_695405.label=cobis.translate("ASSTS.LBL_ASSTS_VALORESIU_20319");
this.G_DISBURSEET_695405.name="Group2120";
this.G_DISBURSEET_695405.columns=1;
this.G_DISBURSEET_695405.labelOrientation="Top";
this.G_DISBURSEET_695405.colSpan=1;
this.G_DISBURSEET_695405.enabled=ConstantsApi.mode.All;
this.G_DISBURSEET_695405.visible=ConstantsApi.mode.All;
this.G_DISBURSEET_695405.attList = ["description","value"];
this.G_DISBURSETE_903405.id="G_DISBURSETE_903405";
this.G_DISBURSETE_903405.label=cobis.translate("ASSTS.LBL_ASSTS_DETALLEES_47444");
this.G_DISBURSETE_903405.name="Group2309";
this.G_DISBURSETE_903405.columns=1;
this.G_DISBURSETE_903405.labelOrientation="Top";
this.G_DISBURSETE_903405.colSpan=3;
this.G_DISBURSETE_903405.enabled=ConstantsApi.mode.All;
this.G_DISBURSETE_903405.visible=ConstantsApi.mode.All;
this.G_DISBURSETE_903405.attList = ["disbursementId","disbursementrate","currencyId","currencyDescription","amount","typeQuotation","quote","amountOp","quoteTypeOp","quoteOp","amountMn","account","beneficiary","officeId","officeName","sequential","productCategory","preNotification","observations"];
this.G_DISBURSEME_609405.id="G_DISBURSEME_609405";
this.G_DISBURSEME_609405.name="GroupLayout2297";
this.G_DISBURSEME_609405.columns=4;
this.G_DISBURSEME_609405.childrenGroups = ["G_DISBURSNTE_204405","G_DISBURSEME_974405"];
this.G_DISBURSEME_609405.colSpan=1;
this.G_DISBURSEME_609405.enabled=ConstantsApi.mode.All;
this.G_DISBURSEME_609405.visible=ConstantsApi.mode.All;
this.G_DISBURSNTE_204405.id="G_DISBURSNTE_204405";
this.G_DISBURSNTE_204405.name="Group2673";
this.G_DISBURSNTE_204405.columns=2;
this.G_DISBURSNTE_204405.labelOrientation="Top";
this.G_DISBURSNTE_204405.colSpan=1;
this.G_DISBURSNTE_204405.enabled=ConstantsApi.mode.All;
this.G_DISBURSNTE_204405.visible=ConstantsApi.mode.All;
this.G_DISBURSNTE_204405.attList = ["sumTotal"];
this.G_DISBURSEME_974405.id="G_DISBURSEME_974405";
this.G_DISBURSEME_974405.name="Group1591";
this.G_DISBURSEME_974405.columns=2;
this.G_DISBURSEME_974405.labelOrientation="Top";
this.G_DISBURSEME_974405.colSpan=2;
this.G_DISBURSEME_974405.enabled=ConstantsApi.mode.All;
this.G_DISBURSEME_974405.visible=ConstantsApi.mode.All;
this.G_DISBURSEME_974405.attList = ["sumTotal","difference"];
this.CM_TDISBURS_TD_.id = "CM_TDISBURS_TD_";
this.CM_TDISBURS_TD_.name = "Command1";
this.CM_TDISBURS_TD_.causesValidation=false;
this.CM_TDISBURS_TD_.submitOnEnter=false;
this.CM_TDISBURS_TD_.setFocus=false;
this.CM_TDISBURS_TD_.close=false;
this.CM_TDISBURS_TD_.label = cobis.translate("ASSTS.LBL_ASSTS_ENVIARRFA_30717");
this.CM_TDISBURS_TD_.enabled = ConstantsApi.mode.All;
this.CM_TDISBURS_TD_.visible= ConstantsApi.mode.All;
this.Spacer2433.label = cobis.translate("ASSTS.LBL_ASSTS_FECHADEBE_42043");
this.Spacer2433.entity = "LoanAdditionalInformation";
this.Spacer2433.attribute = "dateToDisburse";
this.Spacer2433.name="loanDate";
this.Spacer2433.id="Spacer2433";
this.Spacer2433.colSpan=1;
this.Spacer2433.withoutLabel = false;
this.Spacer2433.readOnly = ConstantsApi.mode.Query;
this.Spacer2433.enabled = ConstantsApi.mode.All;
this.Spacer2433.visible= ConstantsApi.mode.All;
this.Spacer2433.required = true;
this.Spacer2433.validationFunctions = new Map<number, ValidatorFn>([
[VisualValidationTypeEnum.Required,Validators.required]
]);
this.Spacer2433.messagesValidations = {
required: cobis.translate('ASSTS.MSG_ASSTS_REQUERIDO_35484')
};
this.VA_CURRENCYOPUEQVI_819405.label = cobis.translate("ASSTS.LBL_ASSTS_MONEDAOAA_82257");
this.VA_CURRENCYOPUEQVI_819405.entity = "LoanAdditionalInformation";
this.VA_CURRENCYOPUEQVI_819405.attribute = "currencyOp";
this.VA_CURRENCYOPUEQVI_819405.textField = "value";
this.VA_CURRENCYOPUEQVI_819405.valueField = "code";
this.VA_CURRENCYOPUEQVI_819405.name="currencyOp";
this.VA_CURRENCYOPUEQVI_819405.id="VA_CURRENCYOPUEQVI_819405";
this.VA_CURRENCYOPUEQVI_819405.colSpan=1;
this.VA_CURRENCYOPUEQVI_819405.withoutLabel = false;
this.VA_CURRENCYOPUEQVI_819405.readOnly = ConstantsApi.mode.Query;
this.VA_CURRENCYOPUEQVI_819405.enabled = ConstantsApi.mode.All;
this.VA_CURRENCYOPUEQVI_819405.visible= ConstantsApi.mode.All;
this.VA_QUOTATIONRUCNOK_902405.label = cobis.translate("ASSTS.LBL_ASSTS_COTIZACNN_31924");
this.VA_QUOTATIONRUCNOK_902405.entity = "LoanAdditionalInformation";
this.VA_QUOTATIONRUCNOK_902405.attribute = "quotation";
this.VA_QUOTATIONRUCNOK_902405.textCase= TextCaseOptions.NONE;
this.VA_QUOTATIONRUCNOK_902405.format= "#,######0.000000";
this.VA_QUOTATIONRUCNOK_902405.name="quotation";
this.VA_QUOTATIONRUCNOK_902405.id="VA_QUOTATIONRUCNOK_902405";
this.VA_QUOTATIONRUCNOK_902405.colSpan=1;
this.VA_QUOTATIONRUCNOK_902405.withoutLabel = false;
this.VA_QUOTATIONRUCNOK_902405.readOnly = ConstantsApi.mode.Query;
this.VA_QUOTATIONRUCNOK_902405.enabled = ConstantsApi.mode.All;
this.VA_QUOTATIONRUCNOK_902405.visible= ConstantsApi.mode.All;
this.VA_QUOTETYPEOPVPYS_926405.label = cobis.translate("ASSTS.LBL_ASSTS_TIPOCOTAA_28357");
this.VA_QUOTETYPEOPVPYS_926405.entity = "LoanAdditionalInformation";
this.VA_QUOTETYPEOPVPYS_926405.attribute = "quoteTypeOP";
this.VA_QUOTETYPEOPVPYS_926405.textCase= TextCaseOptions.NONE;
this.VA_QUOTETYPEOPVPYS_926405.name="quoteTypeOP";
this.VA_QUOTETYPEOPVPYS_926405.id="VA_QUOTETYPEOPVPYS_926405";
this.VA_QUOTETYPEOPVPYS_926405.colSpan=1;
this.VA_QUOTETYPEOPVPYS_926405.withoutLabel = false;
this.VA_QUOTETYPEOPVPYS_926405.readOnly = ConstantsApi.mode.Query;
this.VA_QUOTETYPEOPVPYS_926405.enabled = ConstantsApi.mode.All;
this.VA_QUOTETYPEOPVPYS_926405.visible= ConstantsApi.mode.All;
this.VA_9687YKSEJAICISC_489405.label = cobis.translate("ASSTS.LBL_ASSTS_COTIZACNN_31924");
this.VA_9687YKSEJAICISC_489405.entity = "LoanAdditionalInformation";
this.VA_9687YKSEJAICISC_489405.attribute = "lblAmountToCancel";
this.VA_9687YKSEJAICISC_489405.textCase= TextCaseOptions.NONE;
this.VA_9687YKSEJAICISC_489405.name="lblAmountToCancel";
this.VA_9687YKSEJAICISC_489405.id="VA_9687YKSEJAICISC_489405";
this.VA_9687YKSEJAICISC_489405.colSpan=2;
this.VA_9687YKSEJAICISC_489405.withoutLabel = false;
this.VA_9687YKSEJAICISC_489405.readOnly = ConstantsApi.mode.Query;
this.VA_9687YKSEJAICISC_489405.enabled = ConstantsApi.mode.Update + ConstantsApi.mode.Query;
this.VA_9687YKSEJAICISC_489405.visible= ConstantsApi.mode.None;
this.QV_1603_21320.pageSize=10;
this.QV_1603_21320.id='QV_1603_21320';
this.QV_1603_21320.name='QV_1603_21320';
this.QV_1603_21320.pageable=false;
this.QV_1603_21320.sortable=false;
this.QV_1603_21320.resizable=true;
this.QV_1603_21320.scrollable=true
this.QV_1603_21320.confirmRowDeletion=false;
this.QV_1603_21320.exportToExcel=false;
this.QV_1603_21320.exportToPdf=false;
this.QV_1603_21320.height=0;
this.QV_1603_21320.filterableColumns=false;
this.QV_1603_21320.entityName='DetailAmountsToCancel';
this.QV_1603_21320.appendRecords=false;
this.QV_1603_21320.rowDetail=false;
this.QV_1603_21320.columnMenu = true;
this.QV_1603_21320.editMode=CommonsConstants.GRID_EDIT_MODE_NONE;
this.QV_1603_21320.modeSelection=ComplexConstants.GRID_MODE_SELECTION_NONE;
//GridCommands:
//RowCommands:
//Creacion de columnas del Grid
this.QV_1603_21320.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXBKP_698405",
label : cobis.translate('ASSTS.LBL_ASSTS_DESCRIPOO_35259'),
field : 'description',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXBKP_698405',
name :'description',
withoutLabel : true,
attribute : 'description',
entity : 'DetailAmountsToCancel',
maxlength: 35,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXXMW_735405",
label : cobis.translate('ASSTS.LBL_ASSTS_VALORNPRH_26284'),
field : 'value',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXXMW_735405',
name :'value',
withoutLabel : true,
attribute : 'value',
entity : 'DetailAmountsToCancel',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.QV_5973_48889.pageSize=5;
this.QV_5973_48889.id='QV_5973_48889';
this.QV_5973_48889.name='QV_5973_48889';
this.QV_5973_48889.pageable=true;
this.QV_5973_48889.sortable=false;
this.QV_5973_48889.resizable=true;
this.QV_5973_48889.scrollable=true
this.QV_5973_48889.confirmRowDeletion=true;
this.QV_5973_48889.exportToExcel=false;
this.QV_5973_48889.exportToPdf=false;
this.QV_5973_48889.height=0;
this.QV_5973_48889.filterableColumns=false;
this.QV_5973_48889.entityName='DetailPaymentForm';
this.QV_5973_48889.appendRecords=false;
this.QV_5973_48889.rowDetail=false;
this.QV_5973_48889.columnMenu = true;
this.QV_5973_48889.editMode=CommonsConstants.GRID_EDIT_MODE_INLINE;
this.QV_5973_48889.modeSelection=ComplexConstants.GRID_MODE_SELECTION_SIMPLE;
this.QV_5973_48889.actions=[ComplexConstants.GRID_ACTION_DELETE];
//GridCommands:
this.QV_5973_48889.commandsButton=[
{
id : 'CEQV_201QV_5973_48889_606',
image:'',
label: cobis.translate('ASSTS.LBL_ASSTS_CREAROWFP_92542'),
name : 'GridCommand',
tooltip:'',
setFocus:false,
userControl:'Button',
enabled:true,
visible:true
},
];
//RowCommands:
//Creacion de columnas del Grid
this.QV_5973_48889.columns = Util.filterByMode(this.mode, [
{
id : "VA_TEXTINPUTBOXHUQ_857405",
label : cobis.translate('ASSTS.LBL_ASSTS_NONSYXWRW_43467'),
field : 'disbursementId',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXHUQ_857405',
name :'disbursementId',
withoutLabel : true,
attribute : 'disbursementId',
entity : 'DetailPaymentForm',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXOKM_482405",
label : cobis.translate('ASSTS.LBL_ASSTS_ARUJAZZWD_36528'),
field : 'disbursementrate',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXOKM_482405',
name :'disbursementrate',
withoutLabel : true,
attribute : 'disbursementrate',
entity : 'DetailPaymentForm',
maxlength: 10,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXDPF_455405",
label : cobis.translate('ASSTS.LBL_ASSTS_MONLYCWKQ_22133'),
field : 'currencyId',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 50,
properties :
{
id :'VA_TEXTINPUTBOXDPF_455405',
name :'currencyId',
withoutLabel : true,
attribute : 'currencyId',
entity : 'DetailPaymentForm',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXLVA_650405",
label : cobis.translate('ASSTS.LBL_ASSTS_MONEDATUB_92849'),
field : 'currencyDescription',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXLVA_650405',
name :'currencyDescription',
withoutLabel : true,
attribute : 'currencyDescription',
entity : 'DetailPaymentForm',
maxlength: 10,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXAKE_256405",
label : cobis.translate('ASSTS.LBL_ASSTS_VALOROEQM_99484'),
field : 'amount',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXAKE_256405',
name :'amount',
withoutLabel : true,
attribute : 'amount',
entity : 'DetailPaymentForm',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXPIY_824405",
label : cobis.translate('ASSTS.LBL_ASSTS_TCGUTJEYQ_91264'),
field : 'typeQuotation',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 30,
properties :
{
id :'VA_TEXTINPUTBOXPIY_824405',
name :'typeQuotation',
withoutLabel : true,
attribute : 'typeQuotation',
entity : 'DetailPaymentForm',
maxlength: 10,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXFBW_549405",
label : cobis.translate('ASSTS.LBL_ASSTS_COTIZIXLE_90326'),
field : 'quote',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXFBW_549405',
name :'quote',
withoutLabel : true,
attribute : 'quote',
entity : 'DetailPaymentForm',
format : '#,######0.000000',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXNRM_694405",
label : cobis.translate('ASSTS.LBL_ASSTS_VALOROPMP_71937'),
field : 'amountOp',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXNRM_694405',
name :'amountOp',
withoutLabel : true,
attribute : 'amountOp',
entity : 'DetailPaymentForm',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXGJS_417405",
label : cobis.translate('ASSTS.LBL_ASSTS_TCOPOIVKZ_88167'),
field : 'quoteTypeOp',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 50,
properties :
{
id :'VA_TEXTINPUTBOXGJS_417405',
name :'quoteTypeOp',
withoutLabel : true,
attribute : 'quoteTypeOp',
entity : 'DetailPaymentForm',
maxlength: 10,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXHKY_687405",
label : cobis.translate('ASSTS.LBL_ASSTS_COTIZOPLX_93409'),
field : 'quoteOp',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXHKY_687405',
name :'quoteOp',
withoutLabel : true,
attribute : 'quoteOp',
entity : 'DetailPaymentForm',
format : '#,######0.000000',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXOQY_980405",
label : cobis.translate('ASSTS.LBL_ASSTS_VALORMNDJ_15135'),
field : 'amountMn',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXOQY_980405',
name :'amountMn',
withoutLabel : true,
attribute : 'amountMn',
entity : 'DetailPaymentForm',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXRFX_333405",
label : cobis.translate('ASSTS.LBL_ASSTS_REFERENAI_72258'),
field : 'account',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 100,
properties :
{
id :'VA_TEXTINPUTBOXRFX_333405',
name :'account',
withoutLabel : true,
attribute : 'account',
entity : 'DetailPaymentForm',
maxlength: 20,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXPHT_403405",
label : cobis.translate('ASSTS.LBL_ASSTS_BENEFICII_99714'),
field : 'beneficiary',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 300,
properties :
{
id :'VA_TEXTINPUTBOXPHT_403405',
name :'beneficiary',
withoutLabel : true,
attribute : 'beneficiary',
entity : 'DetailPaymentForm',
maxlength: 30,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXEZU_598405",
label : cobis.translate('ASSTS.LBL_ASSTS_CODOFICII_21157'),
field : 'officeId',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXEZU_598405',
name :'officeId',
withoutLabel : true,
attribute : 'officeId',
entity : 'DetailPaymentForm',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXUJF_534405",
label : cobis.translate('ASSTS.LBL_ASSTS_OFICINAHX_44623'),
field : 'officeName',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 200,
properties :
{
id :'VA_TEXTINPUTBOXUJF_534405',
name :'officeName',
withoutLabel : true,
attribute : 'officeName',
entity : 'DetailPaymentForm',
maxlength: 20,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXIMM_485405",
label : cobis.translate('ASSTS.LBL_ASSTS_SECUENCAA_14570'),
field : 'sequential',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXIMM_485405',
name :'sequential',
withoutLabel : true,
attribute : 'sequential',
entity : 'DetailPaymentForm',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXXLH_478405",
label : cobis.translate('ASSTS.LBL_ASSTS_CATEGORAI_18464'),
field : 'productCategory',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXXLH_478405',
name :'productCategory',
withoutLabel : true,
attribute : 'productCategory',
entity : 'DetailPaymentForm',
maxlength: 10,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXAPS_637405",
label : cobis.translate('ASSTS.LBL_ASSTS_INSACHVDD_55034'),
field : 'preNotification',
visible : ConstantsApi.mode.All,
type : 'numericinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 150,
properties :
{
id :'VA_TEXTINPUTBOXAPS_637405',
name :'preNotification',
withoutLabel : true,
attribute : 'preNotification',
entity : 'DetailPaymentForm',
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
{
id : "VA_TEXTINPUTBOXKEH_204405",
label : cobis.translate('ASSTS.LBL_ASSTS_CONCEPTEN_27056'),
field : 'observations',
visible : ConstantsApi.mode.All,
type : 'textinputbox',
include : [ComplexConstants.GRID_COLUMN_INCLUDE_CREATE , ComplexConstants.GRID_COLUMN_INCLUDE_UPDATE , ComplexConstants.GRID_COLUMN_INCLUDE_READ],
width : 300,
properties :
{
id :'VA_TEXTINPUTBOXKEH_204405',
name :'observations',
withoutLabel : true,
attribute : 'observations',
entity : 'DetailPaymentForm',
maxlength: 255,
readOnly : ConstantsApi.mode.Query,
enabled : ConstantsApi.mode.All,
visible : true,
textCase: TextCaseOptions.NONE,
}
},
]);
this.Spacer1176.id = "Spacer1176";
this.Spacer1176.name = "sumTotal";
this.Spacer1176.label = cobis.translate("ASSTS.LBL_ASSTS_TOTALALRD_64279");
this.Spacer1176.attribute = "sumTotal";
this.Spacer1176.colSpan = 2;
this.Spacer1176.withoutLabel = false;
this.Spacer1176.enabled = ConstantsApi.mode.All;
this.Spacer1176.visible= ConstantsApi.mode.All;
this.Spacer1865.id = "Spacer1865";
this.Spacer1865.name = "sumTotal";
this.Spacer1865.label = cobis.translate("ASSTS.LBL_ASSTS_TOTALDEEE_75722");
this.Spacer1865.attribute = "sumTotal";
this.Spacer1865.colSpan = 1;
this.Spacer1865.withoutLabel = false;
this.Spacer1865.enabled = ConstantsApi.mode.All;
this.Spacer1865.visible= ConstantsApi.mode.All;
this.Spacer2275.id = "Spacer2275";
this.Spacer2275.name = "difference";
this.Spacer2275.label = cobis.translate("ASSTS.LBL_ASSTS_DIFERENCC_25127");
this.Spacer2275.attribute = "difference";
this.Spacer2275.colSpan = 1;
this.Spacer2275.withoutLabel = false;
this.Spacer2275.enabled = ConstantsApi.mode.All;
this.Spacer2275.visible= ConstantsApi.mode.All;
this.T_DISBURSEMENNN_810 = this.formBuilder.group({
LoanAdditionalInformation: this.formBuilder.group({
dateToDisburse:[{value: null, disabled: !this.Spacer2433.visible},CobisDesignerUtil.getValidationFunctions(this.Spacer2433.validationFunctions!)],
currencyOp:[{value: null, disabled: !this.VA_CURRENCYOPUEQVI_819405.visible},CobisDesignerUtil.getValidationFunctions(this.VA_CURRENCYOPUEQVI_819405.validationFunctions!)],
quotation:[{value: null, disabled: !this.VA_QUOTATIONRUCNOK_902405.visible},CobisDesignerUtil.getValidationFunctions(this.VA_QUOTATIONRUCNOK_902405.validationFunctions!)],
quoteTypeOP:[{value: null, disabled: !this.VA_QUOTETYPEOPVPYS_926405.visible},CobisDesignerUtil.getValidationFunctions(this.VA_QUOTETYPEOPVPYS_926405.validationFunctions!)],
lblAmountToCancel:[{value: null, disabled: !this.VA_9687YKSEJAICISC_489405.visible},CobisDesignerUtil.getValidationFunctions(this.VA_9687YKSEJAICISC_489405.validationFunctions!)],
amountToCancel:[null],
quotationOp:[null],
amountOperation:[null],
renovation:[null],
}
),
DetailAmountsToCancel: this.formBuilder.group({
description:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_1603_21320.columns,'VA_TEXTINPUTBOXBKP_698405')],
value:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_1603_21320.columns,'VA_TEXTINPUTBOXXMW_735405')],
item:[null],
}
),
DetailPaymentForm: this.formBuilder.group({
disbursementId:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5973_48889.columns,'VA_TEXTINPUTBOXHUQ_857405')],
disbursementrate:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5973_48889.columns,'VA_TEXTINPUTBOXOKM_482405')],
currencyId:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5973_48889.columns,'VA_TEXTINPUTBOXDPF_455405')],
currencyDescription:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5973_48889.columns,'VA_TEXTINPUTBOXLVA_650405')],
amount:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5973_48889.columns,'VA_TEXTINPUTBOXAKE_256405')],
typeQuotation:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5973_48889.columns,'VA_TEXTINPUTBOXPIY_824405')],
quote:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5973_48889.columns,'VA_TEXTINPUTBOXFBW_549405')],
amountOp:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5973_48889.columns,'VA_TEXTINPUTBOXNRM_694405')],
quoteTypeOp:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5973_48889.columns,'VA_TEXTINPUTBOXGJS_417405')],
quoteOp:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5973_48889.columns,'VA_TEXTINPUTBOXHKY_687405')],
amountMn:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5973_48889.columns,'VA_TEXTINPUTBOXOQY_980405')],
account:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5973_48889.columns,'VA_TEXTINPUTBOXRFX_333405')],
beneficiary:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5973_48889.columns,'VA_TEXTINPUTBOXPHT_403405')],
officeId:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5973_48889.columns,'VA_TEXTINPUTBOXEZU_598405')],
officeName:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5973_48889.columns,'VA_TEXTINPUTBOXUJF_534405')],
sequential:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5973_48889.columns,'VA_TEXTINPUTBOXIMM_485405')],
productCategory:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5973_48889.columns,'VA_TEXTINPUTBOXXLH_478405')],
preNotification:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5973_48889.columns,'VA_TEXTINPUTBOXAPS_637405')],
observations:[{value: null, disabled:true},CobisDesignerUtil.getGridValidationFunctions(this.QV_5973_48889.columns,'VA_TEXTINPUTBOXKEH_204405')],
}
),
LiquidateResult: this.formBuilder.group({
sumTotal:[{value: null, disabled: !this.Spacer1176.visible}],
}
),
DisbursementResult: this.formBuilder.group({
sumTotal:[{value: null, disabled: !this.Spacer1865.visible}],
difference:[{value: null, disabled: !this.Spacer2275.visible}],
}
),
});
}
}